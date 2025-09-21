import { cn } from '../utils';

describe('cn utility function', () => {
  it('should merge class names correctly', () => {
    const result = cn('px-4', 'py-2', 'bg-blue-500');
    expect(result).toBe('px-4 py-2 bg-blue-500');
  });

  it('should handle conditional classes', () => {
    const result = cn('px-4', true && 'py-2', false && 'hidden');
    expect(result).toBe('px-4 py-2');
  });

  it('should handle undefined and null values', () => {
    const result = cn('px-4', undefined, null, 'py-2');
    expect(result).toBe('px-4 py-2');
  });

  it('should handle empty input', () => {
    const result = cn();
    expect(result).toBe('');
  });

  it('should handle array of classes', () => {
    const result = cn(['px-4', 'py-2'], 'bg-blue-500');
    expect(result).toBe('px-4 py-2 bg-blue-500');
  });

  it('should handle object with boolean values', () => {
    const result = cn({
      'px-4': true,
      'py-2': true,
      'hidden': false,
    });
    expect(result).toBe('px-4 py-2');
  });

  it('should merge conflicting Tailwind classes', () => {
    const result = cn('px-4 px-6', 'py-2 py-4');
    expect(result).toBe('px-6 py-4');
  });

  it('should handle complex combinations', () => {
    const isActive = true;
    const isDisabled = false;
    const result = cn(
      'base-class',
      isActive && 'active-class',
      isDisabled && 'disabled-class',
      { 'conditional-class': true }
    );
    expect(result).toBe('base-class active-class conditional-class');
  });
});