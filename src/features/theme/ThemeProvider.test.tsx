import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useContext } from 'react';
import { describe, it, expect, beforeEach } from 'vitest';

import { ThemeContext } from './theme-context';
import ThemeProvider from './theme-provider';

function TestComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div data-testid="theme">{theme}</div>
      <button onClick={toggleTheme}>Toggle</button>
    </>
  );
}

describe('ThemeProvider', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('toggles theme and updates document and localStorage', async () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText('Toggle');
    const themeDisplay = screen.getByTestId('theme');
    const user = userEvent.setup();

    expect(themeDisplay.textContent).toBe('light');
    expect(document.documentElement.classList.contains('light')).toBe(true);

    await user.click(button);

    expect(themeDisplay.textContent).toBe('dark');
    expect(document.documentElement.classList.contains('light')).toBe(false);
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');

    await user.click(button);

    expect(themeDisplay.textContent).toBe('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
