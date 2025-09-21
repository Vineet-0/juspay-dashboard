import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import MenuBar from '../MenuBar';
import themeReducer from '../../../store/themeSlice';
import layoutReducer from '../../../store/layoutSlice';

// Mock MenuItem component
jest.mock('../MenuItem', () => {
  return function MockMenuItem({ newKey, title, icon, path }: any) {
    return (
      <div data-testid={`menu-item-${newKey}`}>
        {icon} {title} {path}
      </div>
    );
  };
});

const createMockStore = (theme = 'light', sidebarOpen = true) => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      layout: layoutReducer,
    },
    preloadedState: {
      theme,
      layout: {
        sidebarOpen,
        rightbarOpen: true,
      },
    },
  });
};

const renderWithProvider = (props: any, theme = 'light', sidebarOpen = true) => {
  const store = createMockStore(theme, sidebarOpen);
  return render(
    <Provider store={store}>
      <MenuBar {...props} />
    </Provider>
  );
};

const mockMenu = [
  {
    name: 'Dashboard',
    icon: '📊',
    path: '/dashboard',
  },
  {
    name: 'Orders',
    icon: '📦',
    path: '/orders',
  },
];

const defaultProps = {
  newKey: 'test',
  title: 'Test Menu',
  menu: mockMenu,
};

describe('MenuBar', () => {
  it('should render menu title when sidebar is open', () => {
    renderWithProvider(defaultProps, 'light', true);
    
    expect(screen.getByText('Test Menu')).toBeInTheDocument();
  });

  it('should not render menu title when sidebar is closed', () => {
    renderWithProvider(defaultProps, 'light', false);
    
    expect(screen.queryByText('Test Menu')).not.toBeInTheDocument();
  });

  it('should render all menu items', () => {
    renderWithProvider(defaultProps);
    
    expect(screen.getByTestId('menu-item-test1')).toBeInTheDocument();
    expect(screen.getByTestId('menu-item-test2')).toBeInTheDocument();
  });

  it('should apply light theme styles to title', () => {
    renderWithProvider(defaultProps, 'light', true);
    
    const title = screen.getByText('Test Menu');
    expect(title).toHaveClass('text-black', 'opacity-40');
  });

  it('should apply dark theme styles to title', () => {
    renderWithProvider(defaultProps, 'dark', true);
    
    const title = screen.getByText('Test Menu');
    expect(title).toHaveClass('text-white', 'opacity-60');
  });

  it('should apply correct gap when sidebar is open', () => {
    renderWithProvider(defaultProps, 'light', true);
    
    const menuContainer = screen.getByTestId('menu-item-test1').closest('.flex.flex-col');
    expect(menuContainer).toHaveClass('gap-[0px]');
  });

  it('should apply correct gap when sidebar is closed', () => {
    renderWithProvider(defaultProps, 'light', false);
    
    const menuContainer = screen.getByTestId('menu-item-test1').closest('.flex.flex-col');
    expect(menuContainer).toHaveClass('gap-[6px]');
  });

  it('should apply padding when sidebar is open', () => {
    renderWithProvider(defaultProps, 'light', true);
    
    const container = screen.getByText('Test Menu').closest('.w-full.flex.flex-col');
    expect(container).toHaveClass('pb-[12px]');
  });

  it('should not apply padding when sidebar is closed', () => {
    renderWithProvider(defaultProps, 'light', false);
    
    const container = screen.getByTestId('menu-item-test1').closest('.w-full.flex.flex-col');
    expect(container).not.toHaveClass('pb-[12px]');
  });

  it('should handle empty menu array', () => {
    const emptyProps = { ...defaultProps, menu: [] };
    renderWithProvider(emptyProps);
    
    expect(screen.queryByTestId('menu-item-test1')).not.toBeInTheDocument();
  });

  it('should handle null menu', () => {
    const nullProps = { ...defaultProps, menu: null };
    renderWithProvider(nullProps);
    
    expect(screen.queryByTestId('menu-item-test1')).not.toBeInTheDocument();
  });

  it('should pass correct props to MenuItem', () => {
    renderWithProvider(defaultProps);
    
    const menuItem1 = screen.getByTestId('menu-item-test1');
    expect(menuItem1).toHaveTextContent('📊 Dashboard /dashboard');
    
    const menuItem2 = screen.getByTestId('menu-item-test2');
    expect(menuItem2).toHaveTextContent('📦 Orders /orders');
  });

  it('should have correct base styles', () => {
    renderWithProvider(defaultProps);
    
    const container = screen.getByText('Test Menu').closest('.w-full.flex.flex-col');
    expect(container).toHaveClass(
      'w-full',
      'flex',
      'flex-col',
      'text-[14px]',
      'font-[400]',
      'transition-all',
      'duration-600'
    );
  });
});