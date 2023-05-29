/**
 * @vitest-environment jsdom
 */

import { describe, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  test('should render the correct elements', () => {
    render(<App />);
    // Comprobamos si existe algún alt con el nombre giphy
    expect(screen.getByAltText('giphy')).toBeInTheDocument();
    // Comprobamos si existe algún placeholder con el texto
    expect(screen.getByPlaceholderText('type your name')).toBeInTheDocument();
    // Comprobamos si existe algún texto con el 'Hello'
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  test('should render the correct alt image', () => {
    render(<App />);
    // Comprobamos si existe algún img que tenga el atributo alt igual a giphy
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'giphy');
  });

  test('should render the correct name when the user filled', () => {
    render(<App />);
    // Almacenamos una constante con la siguiente comprobación
    const inputElement = screen.getByPlaceholderText('type your name');
    // Comprobamos si existe algún texto con el 'Hello'
    expect(screen.getByText('Hello')).toBeInTheDocument();
    // Comprobamos si el inputElement tiene Alberto (depende de {text} por lo que no da fallo)
    userEvent.type(inputElement, 'Alberto');
    // Comprobamos si existe algún texto con el 'Hello Alberto' (depende de {text} por lo que no da fallo) siempre que esté el Hello
    waitFor(() =>
      expect(screen.queryByText('Hello Alberto')).toBeInTheDocument()
    );
  });
});
