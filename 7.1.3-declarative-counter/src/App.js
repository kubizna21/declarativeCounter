import './App.css';

import React, { useState } from 'react';


function App() {
  let [ counterNum, setCounterNum ] = useState(1000444)
  window.setCounterNum = setCounterNum
  return (
    <div className="App">
    <header clasName="App-header">
      <p>
        {counterNum}
      </p>
      </header>
    </div>
  );
}

export default App;