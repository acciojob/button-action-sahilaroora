import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
    const [showPara, setShowPara] = useState(false);


  return (
    <div className="App" id="main">
      <p id="para" className={showPara?"show":"hide"}>  Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={()=>setShowPara(true)}> clickme </button>

    </div>
  );
}

export default App
