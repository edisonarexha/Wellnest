import { render, screen } from '@testing-library/react';
<<<<<<< Updated upstream
import Navigation from './Navigation';
=======
import App from './App';
>>>>>>> Stashed changes

test('renders learn react link', () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
