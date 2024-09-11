import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState('blue');

  const toggleColor = () => {
    setColor(color === 'blue' ? 'green' : 'blue');
  };

  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer'
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button style={buttonStyle} onClick={toggleColor}>
        Click
      </button>
    </div>
  );
}

export default App;
