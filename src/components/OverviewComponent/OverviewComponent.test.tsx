import { render, screen } from '@testing-library/react';
import OverviewComponent from './OverviewComponent';

test('renders learn react link', () => {
  render(<OverviewComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});