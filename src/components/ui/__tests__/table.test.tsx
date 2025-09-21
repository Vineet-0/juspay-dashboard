import { render, screen } from '@testing-library/react';
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '../table';

describe('Table Components', () => {
  describe('Table', () => {
    it('should render table with container', () => {
      render(
        <Table>
          <tbody>
            <tr>
              <td>Cell</td>
            </tr>
          </tbody>
        </Table>
      );
      
      const table = screen.getByRole('table');
      expect(table).toBeInTheDocument();
      expect(table).toHaveAttribute('data-slot', 'table');
      expect(table).toHaveClass('w-full', 'caption-bottom', 'text-sm');
      
      const container = table.parentElement;
      expect(container).toHaveAttribute('data-slot', 'table-container');
      expect(container).toHaveClass('relative', 'w-full', 'overflow-x-auto');
    });

    it('should apply custom className', () => {
      render(<Table className="custom-table">Content</Table>);
      expect(screen.getByRole('table')).toHaveClass('custom-table');
    });
  });

  describe('TableHeader', () => {
    it('should render table header', () => {
      render(
        <table>
          <TableHeader>
            <tr>
              <th>Header</th>
            </tr>
          </TableHeader>
        </table>
      );
      
      const thead = document.querySelector('thead');
      expect(thead).toBeInTheDocument();
      expect(thead).toHaveAttribute('data-slot', 'table-header');
      expect(thead).toHaveClass('[&_tr]:border-b');
    });

    it('should apply custom className', () => {
      render(
        <table>
          <TableHeader className="custom-header">
            <tr><th>Header</th></tr>
          </TableHeader>
        </table>
      );
      expect(document.querySelector('thead')).toHaveClass('custom-header');
    });
  });

  describe('TableBody', () => {
    it('should render table body', () => {
      render(
        <table>
          <TableBody>
            <tr>
              <td>Body</td>
            </tr>
          </TableBody>
        </table>
      );
      
      const tbody = document.querySelector('tbody');
      expect(tbody).toBeInTheDocument();
      expect(tbody).toHaveAttribute('data-slot', 'table-body');
      expect(tbody).toHaveClass('[&_tr:last-child]:border-0');
    });

    it('should apply custom className', () => {
      render(
        <table>
          <TableBody className="custom-body">
            <tr><td>Body</td></tr>
          </TableBody>
        </table>
      );
      expect(document.querySelector('tbody')).toHaveClass('custom-body');
    });
  });

  describe('TableFooter', () => {
    it('should render table footer', () => {
      render(
        <table>
          <TableFooter>
            <tr>
              <td>Footer</td>
            </tr>
          </TableFooter>
        </table>
      );
      
      const tfoot = document.querySelector('tfoot');
      expect(tfoot).toBeInTheDocument();
      expect(tfoot).toHaveAttribute('data-slot', 'table-footer');
      expect(tfoot).toHaveClass('bg-muted/50', 'border-t', 'font-medium');
    });

    it('should apply custom className', () => {
      render(
        <table>
          <TableFooter className="custom-footer">
            <tr><td>Footer</td></tr>
          </TableFooter>
        </table>
      );
      expect(document.querySelector('tfoot')).toHaveClass('custom-footer');
    });
  });

  describe('TableRow', () => {
    it('should render table row', () => {
      render(
        <table>
          <tbody>
            <TableRow>
              <td>Row</td>
            </TableRow>
          </tbody>
        </table>
      );
      
      const row = document.querySelector('tr');
      expect(row).toBeInTheDocument();
      expect(row).toHaveAttribute('data-slot', 'table-row');
      expect(row).toHaveClass('hover:bg-muted/50', 'border-b', 'transition-colors');
    });

    it('should apply custom className', () => {
      render(
        <table>
          <tbody>
            <TableRow className="custom-row">
              <td>Row</td>
            </TableRow>
          </tbody>
        </table>
      );
      expect(document.querySelector('tr')).toHaveClass('custom-row');
    });
  });

  describe('TableHead', () => {
    it('should render table head', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHead>Header Cell</TableHead>
            </tr>
          </thead>
        </table>
      );
      
      const th = screen.getByRole('columnheader');
      expect(th).toBeInTheDocument();
      expect(th).toHaveAttribute('data-slot', 'table-head');
      expect(th).toHaveClass('text-foreground', 'h-10', 'px-2', 'text-left');
    });

    it('should apply custom className', () => {
      render(
        <table>
          <thead>
            <tr>
              <TableHead className="custom-head">Header</TableHead>
            </tr>
          </thead>
        </table>
      );
      expect(screen.getByRole('columnheader')).toHaveClass('custom-head');
    });
  });

  describe('TableCell', () => {
    it('should render table cell', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell>Cell Content</TableCell>
            </tr>
          </tbody>
        </table>
      );
      
      const cell = screen.getByRole('cell');
      expect(cell).toBeInTheDocument();
      expect(cell).toHaveAttribute('data-slot', 'table-cell');
      expect(cell).toHaveClass('p-2', 'align-middle', 'whitespace-nowrap');
    });

    it('should apply custom className', () => {
      render(
        <table>
          <tbody>
            <tr>
              <TableCell className="custom-cell">Cell</TableCell>
            </tr>
          </tbody>
        </table>
      );
      expect(screen.getByRole('cell')).toHaveClass('custom-cell');
    });
  });

  describe('TableCaption', () => {
    it('should render table caption', () => {
      render(
        <table>
          <TableCaption>Table Caption</TableCaption>
          <tbody>
            <tr>
              <td>Content</td>
            </tr>
          </tbody>
        </table>
      );
      
      const caption = document.querySelector('caption');
      expect(caption).toBeInTheDocument();
      expect(caption).toHaveAttribute('data-slot', 'table-caption');
      expect(caption).toHaveClass('text-muted-foreground', 'mt-4', 'text-sm');
      expect(caption).toHaveTextContent('Table Caption');
    });

    it('should apply custom className', () => {
      render(
        <table>
          <TableCaption className="custom-caption">Caption</TableCaption>
          <tbody>
            <tr>
              <td>Content</td>
            </tr>
          </tbody>
        </table>
      );
      expect(document.querySelector('caption')).toHaveClass('custom-caption');
    });
  });

  describe('Complete Table Structure', () => {
    it('should render complete table with all components', () => {
      render(
        <Table>
          <TableCaption>Complete Table</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Age</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>John</TableCell>
              <TableCell>30</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>Total</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      );

      expect(screen.getByText('Complete Table')).toBeInTheDocument();
      expect(screen.getByText('Name')).toBeInTheDocument();
      expect(screen.getByText('Age')).toBeInTheDocument();
      expect(screen.getByText('John')).toBeInTheDocument();
      expect(screen.getByText('30')).toBeInTheDocument();
      expect(screen.getByText('Total')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });
});