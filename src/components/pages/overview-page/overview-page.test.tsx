import { render, screen } from '@testing-library/react';
import OverviewTemplate from '../../templates/overview-template/overview-template';
import { Chore } from '../../../types/chore.type';

test('renders learn react link', () => {
  let error: Error = new Error();
  let chores: Chore[] = [];
  let isLoaded: boolean = false;
  render(<OverviewTemplate chores = {chores} isLoaded = {isLoaded} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});