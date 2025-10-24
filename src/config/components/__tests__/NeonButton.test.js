import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NeonButton from '../NeonButton';

describe('NeonButton', () => {
  test('renders button with children', () => {
    render(<NeonButton>Click me</NeonButton>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<NeonButton onClick={handleClick}>Click me</NeonButton>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('applies custom className', () => {
    render(<NeonButton className="custom-class">Button</NeonButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('neon-button', 'custom-class');
  });

  test('is disabled when disabled prop is true', () => {
    render(<NeonButton disabled>Disabled Button</NeonButton>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });

  test('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<NeonButton onClick={handleClick} disabled>Disabled</NeonButton>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  test('has correct type attribute', () => {
    render(<NeonButton type="submit">Submit</NeonButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'submit');
  });

  test('has aria-label when provided', () => {
    render(<NeonButton ariaLabel="Custom label">Button</NeonButton>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('aria-label', 'Custom label');
  });

  test('passes through additional props', () => {
    render(<NeonButton data-testid="neon-btn" id="test-button">Button</NeonButton>);
    const button = screen.getByTestId('neon-btn');
    expect(button).toHaveAttribute('id', 'test-button');
  });
});
