import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';

test('renders learn react link', () => {
  render(<HomePage />);
  const welcomeText = screen.getByText(/hello/i);
  expect(welcomeText).toBeInTheDocument();
});
