import React from "react";
import { Navigate } from "react-router-dom";



function Music() {
  const [goToHome, setGoToHome] = React.useState(false);

  if (goToHome){
    return <Navigate to="/"></Navigate>
  }


  return (
    <div className="App">
      <section className="App-header">
        <p>
          Music PAGE
        </p>
        <button
          onClick={() => {
            setGoToHome(true);
          }}
        >Back Button</button>
      </section>
    </div>
  );
}

export default Music;
