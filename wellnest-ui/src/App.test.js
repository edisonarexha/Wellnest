import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('renders learn react link', () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
