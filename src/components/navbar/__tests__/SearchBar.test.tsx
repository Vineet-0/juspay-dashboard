import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import SearchBar from '../SearchBar';
import themeReducer from '../../../store/themeSlice';

// Mock command components
jest.mock('@/components/ui/command', () => ({
  CommandDialog: ({ children, open, onOpenChange, ...props }: any) => 
    open ? <div data-testid="command-dialog" {...props}>{children}</div> : null,
  CommandInput: (props: any) => <input data-testid="command-input" {...props} />,
  CommandList: ({ children, ...props }: any) => <div data-testid="command-list" {...props}>{children}</div>,
  CommandEmpty: ({ children }: any) => <div data-testid="command-empty">{children}</div>,
  CommandGroup: ({ children, heading }: any) => <div data-testid="command-group"><h3>{heading}</h3>{children}</div>,
  CommandItem: ({ children }: any) => <div data-testid="command-item">{children}</div>,
  CommandSeparator: () => <div data-testid="command-separator" />,
  CommandShortcut: ({ children }: any) => <span data-testid="command-shortcut">{children}</span>,
}));

const createMockStore = (theme = 'light') => {
  return configureStore({
    reducer: {
      theme: themeReducer,
    },
    preloadedState: {
      theme,
    },
  });
};

const renderWithProvider = (theme = 'light') => {
  const store = createMockStore(theme);
  return render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );
};

describe('SearchBar', () => {
  beforeEach(() => {
    // Reset any event listeners
    document.removeEventListener = jest.fn();
    document.addEventListener = jest.fn();
  });

  it('should render search bar with light theme', () => {
    renderWithProvider('light');
    
    expect(screen.getByPlaceholderText('Search')).toBeInTheDocument();
    expect(screen.getByText('/')).toBeInTheDocument();
  });

  it('should render search bar with dark theme', () => {
    renderWithProvider('dark');
    
    const searchContainer = screen.getByPlaceholderText('Search').closest('div');
    expect(searchContainer).toHaveClass('bg-[#ffffff]/[5%]', 'text-white');
  });

  it('should apply light theme styles', () => {
    renderWithProvider('light');
    
    const searchContainer = screen.getByPlaceholderText('Search').closest('div');
    expect(searchContainer).toHaveClass('bg-[#1c1c1c]/[5%]', 'text-black');
  });

  it('should open command dialog when clicked', () => {
    renderWithProvider();
    
    const searchContainer = screen.getByPlaceholderText('Search').closest('div');
    fireEvent.click(searchContainer!);
    
    expect(screen.getByTestId('command-dialog')).toBeInTheDocument();
  });

  it('should render command dialog content when open', () => {
    renderWithProvider();
    
    const searchContainer = screen.getByPlaceholderText('Search').closest('div');
    fireEvent.click(searchContainer!);
    
    expect(screen.getByTestId('command-input')).toBeInTheDocument();
    expect(screen.getByTestId('command-list')).toBeInTheDocument();
    expect(screen.getByText('Suggestions')).toBeInTheDocument();
    expect(screen.getAllByText('Settings')).toHaveLength(2); // Header and item
  });

  it('should render all command items', () => {
    renderWithProvider();
    
    const searchContainer = screen.getByPlaceholderText('Search').closest('div');
    fireEvent.click(searchContainer!);
    
    expect(screen.getByText('Calendar')).toBeInTheDocument();
    expect(screen.getByText('Search Emoji')).toBeInTheDocument();
    expect(screen.getByText('Calculator')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Billing')).toBeInTheDocument();
    expect(screen.getAllByText('Settings')).toHaveLength(2); // Header and item
  });

  it('should render keyboard shortcuts', () => {
    renderWithProvider();
    
    const searchContainer = screen.getByPlaceholderText('Search').closest('div');
    fireEvent.click(searchContainer!);
    
    expect(screen.getByText('⌘P')).toBeInTheDocument();
    expect(screen.getByText('⌘B')).toBeInTheDocument();
    expect(screen.getByText('⌘S')).toBeInTheDocument();
  });

  it('should close dialog when close button is clicked', () => {
    renderWithProvider();
    
    const searchContainer = screen.getByPlaceholderText('Search').closest('div');
    fireEvent.click(searchContainer!);
    
    const closeButton = screen.getByText('✕');
    fireEvent.click(closeButton);
    
    expect(screen.queryByTestId('command-dialog')).not.toBeInTheDocument();
  });

  it('should apply dark theme to command dialog', () => {
    renderWithProvider('dark');
    
    const searchContainer = screen.getByPlaceholderText('Search').closest('div');
    fireEvent.click(searchContainer!);
    
    expect(screen.getByTestId('command-dialog')).toHaveClass('dark');
  });

  it('should set up keyboard event listener', () => {
    renderWithProvider();
    
    expect(document.addEventListener).toHaveBeenCalledWith('keydown', expect.any(Function));
  });

  it('should have correct search input styling', () => {
    renderWithProvider('light');
    
    const input = screen.getByPlaceholderText('Search');
    expect(input).toHaveClass('bg-transparent', 'outline-none', 'w-full');
  });
});