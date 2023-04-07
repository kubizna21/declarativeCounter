import './App.css';

import React, { useState } from 'react';


function App() {
  let [ counterNum, setCounterNum ] = useState(1000)
  window.setCounterNum = setCounterNum
  return (
    <div className="App">
    <header clasName="App-header">
      <p>
        {counterNum}
      </p>
      </header>
      <button className="add-num">Add</button>
    </div>
  );
}

export default App;