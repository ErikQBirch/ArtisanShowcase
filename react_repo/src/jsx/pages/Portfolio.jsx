import React from "react";
import { Navigate } from "react-router-dom";



function Portfolio() {
  const [goToHome, setGoToHome] = React.useState(false);

  if (goToHome){
    return <Navigate to="/"></Navigate>
  }


  return (
    <div className="App">
      <header className="App-header">
        <p>
          Portfolio PAGE
        </p>
        <button
          onClick={() => {
            setGoToHome(true);
          }}
        >Back Button</button>
      </header>
    </div>
  );
}

export default Portfolio;
