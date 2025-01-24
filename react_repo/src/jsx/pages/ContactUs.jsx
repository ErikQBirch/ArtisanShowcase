import React from "react";
import { useNavigate } from "react-router-dom";



function ContactUs() {
  const navigate = useNavigate();

  return (
      <main className="App-header">
        <p>
          CONTACT US PAGE
        </p>
        <button
          onClick={() => {navigate("/")}}>Back Button</button>
      </main>
  );
}

export default ContactUs;
