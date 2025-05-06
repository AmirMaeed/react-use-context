import React from 'react';
import Child3 from './Child3';
import ThemeContext from '../Context/ThemeContext';
import { useContext } from 'react';
// import { useContext } from 'react';  // Import useContext from React



function Child2() {
  
  const { count, setCount } = useContext(ThemeContext);
 
  return (
    <div>
  
      <h4>{count}</h4>
      <Child3 />
    </div>
  );
}

export default Child2;
