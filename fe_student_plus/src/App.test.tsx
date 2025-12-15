import React from 'react';
import { render, screen } from '@testing-library/react';
import { Locations } from './App';

test('renders learn react link', () => {
  render(<Locations />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
