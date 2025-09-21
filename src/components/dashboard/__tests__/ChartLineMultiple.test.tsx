import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import ChartLineMultiple from '../ChartLineMultiple';
import themeReducer, { type Theme } from '../../../store/themeSlice';

// Mock recharts components
jest.mock('recharts', () => ({
  Line: ({ children, ...props }: any) => <div data-testid="line" {...props}>{children}</div>,
  LineChart: ({ children, ...props }: any) => <div data-testid="line-chart" {...props}>{children}</div>,
  CartesianGrid: (props: any) => <div data-testid="cartesian-grid" {...props} />,
  XAxis: (props: any) => <div data-testid="x-axis" {...props} />,
}));

// Mock chart components
jest.mock('@/components/ui/chart', () => ({
  ChartContainer: ({ children, ...props }: any) => <div data-testid="chart-container" {...props}>{children}</div>,
  ChartTooltip: (props: any) => <div data-testid="chart-tooltip" {...props} />,
  ChartTooltipContent: (props: any) => <div data-testid="chart-tooltip-content" {...props} />,
}));

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
      <ChartLineMultiple />
    </Provider>
  );
};

describe('ChartLineMultiple', () => {
  it('should render chart with light theme', () => {
    renderWithProvider('light');
    
    expect(screen.getByText('Revenue')).toBeInTheDocument();
    expect(screen.getByText('Current Week')).toBeInTheDocument();
    expect(screen.getByText('Previous Week')).toBeInTheDocument();
    expect(screen.getByTestId('line-chart')).toBeInTheDocument();
  });



  it('should display revenue values', () => {
    renderWithProvider();
    
    expect(screen.getByText('$58,211')).toBeInTheDocument();
    expect(screen.getByText('$68,768')).toBeInTheDocument();
  });

  it('should render all chart components', () => {
    renderWithProvider();
    
    expect(screen.getByTestId('cartesian-grid')).toBeInTheDocument();
    expect(screen.getByTestId('x-axis')).toBeInTheDocument();
    expect(screen.getByTestId('chart-tooltip')).toBeInTheDocument();
    expect(screen.getAllByTestId('line')).toHaveLength(2);
  });

  it('should have correct card structure', () => {
    renderWithProvider();
    
    const card = screen.getByText('Revenue').closest('[data-slot="card"]');
    expect(card).toHaveClass('max-h-full', 'p-0', 'bg-transparent');
  });

  it('should apply dark theme border color', () => {
    renderWithProvider('dark');
    
    const separator = document.querySelector('.border-\\[\\#FFFFFF\\]\\/\\[40\\%\\]');
    expect(separator).toBeInTheDocument();
  });

  it('should apply light theme border color', () => {
    renderWithProvider('light');
    
    const separator = document.querySelector('.border-\\[\\#1C1C1C\\]\\/\\[40\\%\\]');
    expect(separator).toBeInTheDocument();
  });
});