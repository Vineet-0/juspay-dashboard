import themeReducer, { setTheme, type Theme } from '../themeSlice';

const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
};

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

const consoleSpy = jest.spyOn(console, 'log').mockImplementation();

describe('themeSlice', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    consoleSpy.mockRestore();
  });

  it('should return light theme when localStorage is empty', () => {
    mockLocalStorage.getItem.mockReturnValue(null);
    jest.resetModules();
    const { default: freshThemeReducer } = require('../themeSlice');
    expect(freshThemeReducer(undefined, { type: '@@INIT' })).toBe('light');
  });

  it('should return stored theme from localStorage', () => {
    mockLocalStorage.getItem.mockReturnValue('dark');
    jest.resetModules();
    const { default: freshThemeReducer } = require('../themeSlice');
    expect(freshThemeReducer(undefined, { type: '@@INIT' })).toBe('dark');
  });

  it('should set theme to light', () => {
    const previousState: Theme = 'dark';
    const action = setTheme('light');
    const newState = themeReducer(previousState, action);
    expect(newState).toBe('light');
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('theme', 'light');
    expect(consoleSpy).toHaveBeenCalledWith('dark');
  });

  it('should set theme to dark', () => {
    const previousState: Theme = 'light';
    const action = setTheme('dark');
    const newState = themeReducer(previousState, action);
    expect(newState).toBe('dark');
    expect(mockLocalStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
    expect(consoleSpy).toHaveBeenCalledWith('light');
  });

  it('should create setTheme action', () => {
    expect(setTheme('light')).toEqual({
      type: 'theme/setTheme',
      payload: 'light',
    });
  });
});