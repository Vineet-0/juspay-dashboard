import layoutReducer, { toggleSidebar, toggleRightbar } from '../layoutSlice';

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

describe('layoutSlice', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with default state when localStorage is empty', () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    jest.resetModules();
    const { default: freshLayoutReducer } = require('../layoutSlice');
    const initialState = freshLayoutReducer(undefined, { type: '@@INIT' });
    expect(initialState.sidebarOpen).toBe(true);
    expect(initialState.rightbarOpen).toBe(true);
  });

  it('should initialize with localStorage values', () => {
    mockLocalStorage.getItem.mockImplementation((key) => {
      if (key === 'sidebarOpen') return 'false';
      if (key === 'rightbarOpen') return 'false';
      return null;
    });
    jest.resetModules();
    const { default: freshLayoutReducer } = require('../layoutSlice');
    const initialState = freshLayoutReducer(undefined, { type: '@@INIT' });
    expect(initialState.sidebarOpen).toBe(false);
    expect(initialState.rightbarOpen).toBe(false);
  });

  it('should toggle sidebar from true to false', () => {
    const initialState = { sidebarOpen: true, rightbarOpen: true };
    const newState = layoutReducer(initialState, toggleSidebar());
    expect(newState.sidebarOpen).toBe(false);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('sidebarOpen', 'false');
  });

  it('should toggle sidebar from false to true', () => {
    const initialState = { sidebarOpen: false, rightbarOpen: true };
    const newState = layoutReducer(initialState, toggleSidebar());
    expect(newState.sidebarOpen).toBe(true);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('sidebarOpen', 'true');
  });

  it('should toggle rightbar from true to false', () => {
    const initialState = { sidebarOpen: true, rightbarOpen: true };
    const newState = layoutReducer(initialState, toggleRightbar());
    expect(newState.rightbarOpen).toBe(false);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('rightbarOpen', 'false');
  });

  it('should toggle rightbar from false to true', () => {
    const initialState = { sidebarOpen: true, rightbarOpen: false };
    const newState = layoutReducer(initialState, toggleRightbar());
    expect(newState.rightbarOpen).toBe(true);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('rightbarOpen', 'true');
  });

  it('should create toggleSidebar action', () => {
    expect(toggleSidebar()).toEqual({
      type: 'layout/toggleSidebar',
    });
  });

  it('should create toggleRightbar action', () => {
    expect(toggleRightbar()).toEqual({
      type: 'layout/toggleRightbar',
    });
  });
});