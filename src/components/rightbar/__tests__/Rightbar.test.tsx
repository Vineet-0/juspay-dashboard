import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Rightbar from '../Rightbar';
import themeReducer, { type Theme } from '../../../store/themeSlice';
import layoutReducer from '../../../store/layoutSlice';

// Mock child components
jest.mock('../Notifications', () => {
  return function MockNotifications() {
    return <div data-testid="notifications">Notifications</div>;
  };
});

jest.mock('../Activities', () => {
  return function MockActivities() {
    return <div data-testid="activities">Activities</div>;
  };
});

jest.mock('../Contacts', () => {
  return function MockContacts() {
    return <div data-testid="contacts">Contacts</div>;
  };
});

const createMockStore = (theme: Theme = 'light', rightbarOpen = true) => {
  return configureStore({
    reducer: {
      theme: themeReducer,
      layout: layoutReducer,
    },
    preloadedState: {
      theme,
      layout: {
        sidebarOpen: true,
        rightbarOpen,
      },
    },
  });
};

const renderWithProvider = (theme: Theme = 'light', rightbarOpen = true) => {
  const store = createMockStore(theme, rightbarOpen);
  return render(
    <Provider store={store}>
      <Rightbar />
    </Provider>
  );
};

describe('Rightbar', () => {
  it('should render all child components when open', () => {
    renderWithProvider();
    
    expect(screen.getByTestId('notifications')).toBeInTheDocument();
    expect(screen.getByTestId('activities')).toBeInTheDocument();
    expect(screen.getByTestId('contacts')).toBeInTheDocument();
  });

  it('should apply open styles when rightbar is open', () => {
    renderWithProvider('light', true);
    
    const rightbar = screen.getByTestId('notifications').parentElement;
    expect(rightbar).toHaveClass('w-[280px]', 'px-[20px]');
  });

  it('should apply closed styles when rightbar is closed', () => {
    renderWithProvider('light', false);
    
    const rightbar = screen.getByTestId('notifications').parentElement;
    expect(rightbar).toHaveClass('w-[0px]', 'px-[0px]');
  });

  it('should apply light theme styles', () => {
    renderWithProvider('light');
    
    const rightbar = screen.getByTestId('notifications').parentElement;
    expect(rightbar).toHaveClass('border-[#1C1C1C]/[10%]', 'scrollbar-custom-light');
  });

  it('should apply dark theme styles', () => {
    renderWithProvider('dark');
    
    const rightbar = screen.getByTestId('notifications').parentElement;
    expect(rightbar).toHaveClass('border-[#FFFFFF]/[10%]', 'scrollbar-custom-dark');
  });

  it('should have correct base styles', () => {
    renderWithProvider();
    
    const rightbar = screen.getByTestId('notifications').parentElement;
    expect(rightbar).toHaveClass(
      'h-screen',
      'py-[20px]',
      'transition-all',
      'duration-600',
      'border-l-[1px]',
      'flex',
      'flex-col',
      'gap-[24px]',
      'overflow-x-hidden',
      'overflow-y-auto'
    );
  });

  it('should render components in correct order', () => {
    renderWithProvider();
    
    const rightbar = screen.getByTestId('notifications').parentElement;
    const children = rightbar?.children;
    
    expect(children?.[0]).toHaveAttribute('data-testid', 'notifications');
    expect(children?.[1]).toHaveAttribute('data-testid', 'activities');
    expect(children?.[2]).toHaveAttribute('data-testid', 'contacts');
  });
});