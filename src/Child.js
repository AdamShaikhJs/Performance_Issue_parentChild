import React from 'react';

const Child = () => {
  console.log(' --Child Component Render-- ');
  return (
    <div style={{ border: '2px solid red', margin: '20px', padding: '10px' }}>
      <h4> Child Componet </h4>
    </div>
  );
};

export default Child;
