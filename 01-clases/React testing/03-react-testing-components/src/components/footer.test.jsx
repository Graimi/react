/**
 * @vitest-environment jsdom
 */

import { describe, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Footer, { socialLogos } from './Footer';

describe('Footer', () => {
  test('should be render correct elements', () => {
    render(<Footer />);
    // Comprobamos si existe algún texto con el texto indicado
    expect(
      screen.getByText('Created with 💝 by @aRiveraMerida')
    ).toBeInTheDocument();
  });

  test('should be render logos', () => {
    render(<Footer />);
    // Comprobamos si el alt de cada logo es visible
    waitFor(() =>
      socialLogos.forEach((logo) => {
        expect(screen.getAllByAltText(logo.alt)).toBeVisible();
      })
    );
  });
});
