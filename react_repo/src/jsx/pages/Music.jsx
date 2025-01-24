import React from "react";
import { Navigate } from "react-router-dom";



function Music() {
  const [goToHome, setGoToHome] = React.useState(false);

  if (goToHome){
    return <Navigate to="/"></Navigate>
  }


  return (
      <main className="App-header">
        <p>
          Music PAGE
        </p>
        <button
          onClick={() => {
            setGoToHome(true);
          }}
        >Back Button</button>
      </main>
  );
}

export default Music;
