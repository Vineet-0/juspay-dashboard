import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import Notifications from '../Notifications';
import themeReducer, { type Theme } from '../../../store/themeSlice';

const createMockStore = (theme: Theme = 'light') => {
  return configureStore({
    reducer: {
      theme: themeReducer,
    },
    preloadedState: {
      theme,
    },
  });
};

const renderWithProvider = (theme: Theme = 'light') => {
  const store = createMockStore(theme);
  return render(
    <Provider store={store}>
      <Notifications />
    </Provider>
  );
};

describe('Notifications', () => {
  it('should render notifications title', () => {
    renderWithProvider();
    
    expect(screen.getByText('Notifications')).toBeInTheDocument();
  });

  it('should render all notification items', () => {
    renderWithProvider();
    
    expect(screen.getAllByText('You have a bug that needs fixing')).toHaveLength(2);
    expect(screen.getByText('New user registered')).toBeInTheDocument();
    expect(screen.getByText('Andi Lane Subscribed to you')).toBeInTheDocument();
  });

  it('should render notification timestamps', () => {
    renderWithProvider();
    
    expect(screen.getByText('Just now')).toBeInTheDocument();
    expect(screen.getByText('59 minutes ago')).toBeInTheDocument();
    expect(screen.getByText('12h ago')).toBeInTheDocument();
    expect(screen.getByText('Today, 11:59 AM')).toBeInTheDocument();
  });

  it('should apply light theme styles to title', () => {
    renderWithProvider('light');
    
    const title = screen.getByText('Notifications');
    expect(title).toHaveClass('text-[#1C1C1C]');
  });

  it('should apply dark theme styles to title', () => {
    renderWithProvider('dark');
    
    const title = screen.getByText('Notifications');
    expect(title).toHaveClass('text-[#FFFFFF]');
  });

  it('should apply light theme styles to notification text', () => {
    renderWithProvider('light');
    
    const notifications = screen.getAllByText('You have a bug that needs fixing');
    expect(notifications[0]).toHaveClass('text-[#1C1C1C]');
  });

  it('should apply dark theme styles to notification text', () => {
    renderWithProvider('dark');
    
    const notifications = screen.getAllByText('You have a bug that needs fixing');
    expect(notifications[0]).toHaveClass('text-[#FFFFFF]');
  });

  it('should apply light theme hover styles', () => {
    renderWithProvider('light');
    
    const listItems = screen.getAllByText('You have a bug that needs fixing');
    const listItem = listItems[0].closest('li');
    expect(listItem).toHaveClass('hover:bg-[#1C1C1C]/[5%]');
  });

  it('should apply dark theme hover styles', () => {
    renderWithProvider('dark');
    
    const listItems = screen.getAllByText('You have a bug that needs fixing');
    const listItem = listItems[0].closest('li');
    expect(listItem).toHaveClass('hover:bg-[#F7F9FB]/[10%]');
  });

  it('should render notification icons with background colors', () => {
    renderWithProvider();
    
    const iconContainers = document.querySelectorAll('.rounded-\\[8px\\].p-\\[4px\\]');
    expect(iconContainers).toHaveLength(4);
  });

  it('should have correct notification structure', () => {
    renderWithProvider();
    
    const notifications = screen.getAllByRole('listitem');
    expect(notifications).toHaveLength(4);
    
    notifications.forEach(notification => {
      expect(notification).toHaveClass('py-[4px]', 'px-[8px]', 'rounded-[8px]');
    });
  });

  it('should render duplicate bug notifications', () => {
    renderWithProvider();
    
    const bugNotifications = screen.getAllByText('You have a bug that needs fixing');
    expect(bugNotifications).toHaveLength(2);
  });
});