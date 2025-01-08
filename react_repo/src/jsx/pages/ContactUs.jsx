import React from "react";
import { useNavigate } from "react-router-dom";



function ContactUs() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <section className="App-header">
        <p>
          CONTACT US PAGE
        </p>
        <button
          onClick={() => {navigate("/")}}>Back Button</button>
      </section>
    </div>
  );
}

export default ContactUs;
