import { render, screen, fireEvent } from '@testing-library/react';
import Semaforo from './semaforo.jsx';

test('renderiza los botones Rojo, Amarillo y Verde', () => {
  render(<Semaforo />);
  expect(screen.getByText('Rojo')).toBeInTheDocument();
  expect(screen.getByText('Amarillo')).toBeInTheDocument();
  expect(screen.getByText('Verde')).toBeInTheDocument();
});

test('cambia el color del círculo al hacer click en los botones', () => {
  render(<Semaforo />);
  
  const circle = screen.getByRole('presentation');
  const rojoBtn = screen.getByText('Rojo');
  const amarilloBtn = screen.getByText('Amarillo');
  const verdeBtn = screen.getByText('Verde');

  fireEvent.click(amarilloBtn);
  expect(circle).toHaveStyle({ backgroundColor: 'rgb(255, 255, 0)' });

  fireEvent.click(verdeBtn);
  expect(circle).toHaveStyle({ backgroundColor: 'rgb(0, 128, 0)' });

  fireEvent.click(rojoBtn);
  expect(circle).toHaveStyle({ backgroundColor: 'rgb(255, 0, 0)' });
});
