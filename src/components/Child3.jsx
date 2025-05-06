import React, { useContext } from 'react';
import ThemeContext from '../Context/ThemeContext';

function Child3() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { count, setCount } = useContext(ThemeContext);
  return (
    <div  className="theme-container" style={{ padding: '20px', border: '1px solid aqua', margin: '10px' }}>
      <h4>Child 3</h4>
      <p>Current theme is: <strong>{theme}</strong></p>
      <button onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setCount(count + 1);
      }}>
        Toggle Theme
      </button>
    </div>
  );
}

export default Child3;
