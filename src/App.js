import React, { useState } from 'react';
import Child from './Child.js';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  console.log('****   Parent Component Render     ****', count);
  return (
    <div>
      <h4>Performance Issue !</h4>
      <h6>Count -- {count}</h6>
      <button onClick={() => setCount(count + 1)}> Count ++</button>
      <Child />
      <p>Parent componet state change then Child component State Also Change</p>
    </div>
  );
}
