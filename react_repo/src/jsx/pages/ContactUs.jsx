import React from "react";
import { useNavigate } from "react-router-dom";



function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          CONTACT US PAGE
        </p>
        <button
          onClick={() => {navigate("/")}}>Back Button</button>
      </header>
    </div>
  );
}

export default ContactUs;
