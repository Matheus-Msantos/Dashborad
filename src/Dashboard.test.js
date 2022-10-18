import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

it('Deve renderizar o componente sem erros', () => {
  const { getByText } = render(<Dashboard />);
  const linkElement = getByText(/Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
