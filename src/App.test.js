import { render, screen } from '@testing-library/react';
import App from './App';

test('renders produtos relacionados title', () => {
  render(<App />);
  const linkElements = screen.getAllByText(/Produtos Relacionados/i);
  expect(linkElements.length).toBeGreaterThan(0);
});