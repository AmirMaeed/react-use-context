import React, { useState } from 'react';
import './App.css';
import ThemeContext from './context/ThemeContext';
import Child1 from './components/Child1';

function App() {
  const [theme, setTheme] = useState('light');
  const [count, setCount] = useState(0);
  return (
    <ThemeContext.Provider value={{ theme, setTheme, count, setCount }}>
      <div className={theme === 'light' ? 'light-theme' : 'dark-theme'}>
        <h1>React Context Demo</h1>
        <Child1 />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
