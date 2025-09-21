import sidebarReducer, { setActiveTab, toggleOpenedTab, setActivePath } from '../sidebarSlice';

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('sidebarSlice', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('should initialize with default state when localStorage is empty', () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    jest.resetModules();
    const { default: freshSidebarReducer } = require('../sidebarSlice');
    const initialState = freshSidebarReducer(undefined, { type: '@@INIT' });
    expect(initialState.activeTab).toBe('11');
    expect(initialState.openedTabs).toEqual([]);
    expect(initialState.activePath).toBe('/Dashboard/Default');
  });

  it('should initialize with localStorage values', () => {
    mockLocalStorage.getItem.mockImplementation((key) => {
      if (key === 'activeTab') return '22';
      if (key === 'openedTabs') return '["tab1", "tab2"]';
      if (key === 'activePath') return '/custom/path';
      if (key === 'openedTab') return '[]';
      return null;
    });
    jest.resetModules();
    const { default: freshSidebarReducer } = require('../sidebarSlice');
    const initialState = freshSidebarReducer(undefined, { type: '@@INIT' });
    expect(initialState.activeTab).toBe('22');
    expect(initialState.openedTabs).toEqual(['tab1', 'tab2']);
    expect(initialState.activePath).toBe('/custom/path');
  });

  it('should set active tab', () => {
    const initialState = { activeTab: '11', openedTabs: [], activePath: '/Dashboard/Default' };
    const newState = sidebarReducer(initialState, setActiveTab('22'));
    expect(newState.activeTab).toBe('22');
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('activeTab', '22');
  });

  it('should add tab to openedTabs when not present', () => {
    const initialState = { activeTab: '11', openedTabs: ['tab1'], activePath: '/Dashboard/Default' };
    const newState = sidebarReducer(initialState, toggleOpenedTab('tab2'));
    expect(newState.openedTabs).toEqual(['tab1', 'tab2']);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('openedTabs', '["tab1","tab2"]');
  });

  it('should remove tab from openedTabs when present', () => {
    const initialState = { activeTab: '11', openedTabs: ['tab1', 'tab2'], activePath: '/Dashboard/Default' };
    const newState = sidebarReducer(initialState, toggleOpenedTab('tab1'));
    expect(newState.openedTabs).toEqual(['tab2']);
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('openedTabs', '["tab2"]');
  });

  it('should set active path', () => {
    const initialState = { activeTab: '11', openedTabs: [], activePath: '/Dashboard/Default' };
    const newState = sidebarReducer(initialState, setActivePath('/new/path'));
    expect(newState.activePath).toBe('/new/path');
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('activePath', '/new/path');
    expect(consoleSpy).toHaveBeenCalledWith('/new/path');
  });

  it('should create setActiveTab action', () => {
    expect(setActiveTab('22')).toEqual({
      type: 'sideBar/setActiveTab',
      payload: '22',
    });
  });

  it('should create toggleOpenedTab action', () => {
    expect(toggleOpenedTab('tab1')).toEqual({
      type: 'sideBar/toggleOpenedTab',
      payload: 'tab1',
    });
  });

  it('should create setActivePath action', () => {
    expect(setActivePath('/path')).toEqual({
      type: 'sideBar/setActivePath',
      payload: '/path',
    });
  });
});