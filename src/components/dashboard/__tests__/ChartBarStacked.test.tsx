import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ChartBarStacked from '../ChartBarStacked';
import themeReducer from '../../../store/themeSlice';

// Mock recharts components
jest.mock('recharts', () => ({
  Bar: ({ children, ...props }: any) => <div data-testid="bar" {...props}>{children}</div>,
  BarChart: ({ children, ...props }: any) => <div data-testid="bar-chart" {...props}>{children}</div>,
  CartesianGrid: (props: any) => <div data-testid="cartesian-grid" {...props} />,
  XAxis: (props: any) => <div data-testid="x-axis" {...props} />,
  YAxis: (props: any) => <div data-testid="y-axis" {...props} />,
}));

// Mock chart components
jest.mock('@/components/ui/chart', () => ({
  ChartContainer: ({ children, ...props }: any) => <div data-testid="chart-container" {...props}>{children}</div>,
  ChartTooltip: (props: any) => <div data-testid="chart-tooltip" {...props} />,
  ChartTooltipContent: (props: any) => <div data-testid="chart-tooltip-content" {...props} />,
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
      <ChartBarStacked />
    </Provider>
  );
};

describe('ChartBarStacked', () => {
  it('should render chart with light theme', () => {
    renderWithProvider('light');
    
    expect(screen.getByText('Projection v/s Actuals')).toBeInTheDocument();
    expect(screen.getByTestId('bar-chart')).toBeInTheDocument();
    expect(screen.getByTestId('chart-container')).toBeInTheDocument();
  });

  it('should render chart with dark theme', () => {
    renderWithProvider('dark');
    
    const title = screen.getByText('Projection v/s Actuals');
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('text-[#FFFFFF]');
  });

  it('should apply light theme text color', () => {
    renderWithProvider('light');
    
    const title = screen.getByText('Projection v/s Actuals');
    expect(title).toHaveClass('text-[#1C1C1C]');
  });

  it('should render all chart components', () => {
    renderWithProvider();
    
    expect(screen.getByTestId('cartesian-grid')).toBeInTheDocument();
    expect(screen.getByTestId('x-axis')).toBeInTheDocument();
    expect(screen.getByTestId('y-axis')).toBeInTheDocument();
    expect(screen.getByTestId('chart-tooltip')).toBeInTheDocument();
    expect(screen.getAllByTestId('bar')).toHaveLength(2);
  });

  it('should have correct card structure', () => {
    renderWithProvider();
    
    const card = screen.getByText('Projection v/s Actuals').closest('[data-slot="card"]');
    expect(card).toHaveClass('max-h-full', 'p-0', 'bg-transparent', 'shadow-none', 'border-0');
  });
});