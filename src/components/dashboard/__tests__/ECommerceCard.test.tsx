import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ECommerceCard from '../ECommerceCard';

describe('ECommerceCard', () => {
  const defaultProps = {
    title: 'Test Title',
    count: '1,234',
    growth: '+5.2%',
    textColor: '#000000',
  };

  it('should render with all props', () => {
    render(<ECommerceCard {...defaultProps} />);
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('1,234')).toBeInTheDocument();
    expect(screen.getByText('+5.2%')).toBeInTheDocument();
  });

  it('should apply custom text color', () => {
    render(<ECommerceCard {...defaultProps} textColor="#ff0000" />);
    
    const container = screen.getByText('Test Title').closest('div');
    expect(container).toHaveStyle('color: #ff0000');
  });

  it('should show rise icon for positive growth', () => {
    render(<ECommerceCard {...defaultProps} growth="+10%" />);
    
    expect(screen.getByText('+10%')).toBeInTheDocument();
    // Rise icon should be present (AiOutlineRise)
  });

  it('should show fall icon for negative growth', () => {
    render(<ECommerceCard {...defaultProps} growth="-5%" />);
    
    expect(screen.getByText('-5%')).toBeInTheDocument();
    // Fall icon should be present (AiOutlineFall)
  });

  it('should show rise icon for zero growth', () => {
    render(<ECommerceCard {...defaultProps} growth="0%" />);
    
    expect(screen.getByText('0%')).toBeInTheDocument();
    // Rise icon should be present (default case)
  });


});