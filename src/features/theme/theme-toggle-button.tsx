import { useContext } from 'react';

import Button from '@/components/button';

import { ThemeContext } from './theme-context';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return <Button onClick={toggleTheme}>{theme === 'light' ? 'Dark' : 'Light'}</Button>;
}

export default ThemeToggleButton;
