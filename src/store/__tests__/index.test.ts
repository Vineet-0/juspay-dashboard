import store, { type RootState, type AppDispatch } from '../index';
import { setTheme } from '../themeSlice';
import { toggleSidebar } from '../layoutSlice';
import { setActiveTab } from '../sidebarSlice';

describe('store', () => {
  it('should have correct initial state structure', () => {
    const state = store.getState();
    expect(state).toHaveProperty('theme');
    expect(state).toHaveProperty('layout');
    expect(state).toHaveProperty('sideBar');
  });

  it('should handle theme actions', () => {
    store.dispatch(setTheme('dark'));
    const state = store.getState();
    expect(state.theme).toBe('dark');
  });

  it('should handle layout actions', () => {
    const initialSidebarState = store.getState().layout.sidebarOpen;
    store.dispatch(toggleSidebar());
    const newState = store.getState();
    expect(newState.layout.sidebarOpen).toBe(!initialSidebarState);
  });

  it('should handle sidebar actions', () => {
    store.dispatch(setActiveTab('33'));
    const state = store.getState();
    expect(state.sideBar.activeTab).toBe('33');
  });

  it('should export correct types', () => {
    const state: RootState = store.getState();
    const dispatch: AppDispatch = store.dispatch;
    expect(typeof state).toBe('object');
    expect(typeof dispatch).toBe('function');
  });
});