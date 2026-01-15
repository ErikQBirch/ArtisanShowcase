import React, { useRef, useState } from 'react';
import FooterElement from './../index_resources/footer.jsx';
import { Link } from 'react-router-dom'; // Import Link
import './homepage.css';

function ContactMe_section() {

  const [contactMethod, setContactMethod] = useState('email');

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();

  const SubmitEvent = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const contact = contactMethod === 'email' ? emailRef.current.value : phoneRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;
    alert(`Name: ${name}\n${contactMethod === 'email' ? 'Email' : 'Phone'}: ${contact}\nSubject: ${subject}\nMessage: ${message}`);
  };

  return (
    <>
      <section id="contactMe" className="contact_me_section">
        <form onSubmit={SubmitEvent}>
          <h2>Contact Me</h2>
          <article>
            <p>Name*</p>
            <input id="nameInput" ref={nameRef} type="text" placeholder="Enter your name" required={true}></input>
          </article>
          <article>
            <p>Contact Method*</p>
            <div id="contactMethodOptions">
              <label>
                <input id="emailRadio" type="radio" name="contactMethod" value="email" checked={contactMethod === 'email'} onChange={(e) => setContactMethod(e.target.value)} />
                Email
              </label>
              <label>
                <input id="phoneRadio" type="radio" name="contactMethod" value="phone" checked={contactMethod === 'phone'} onChange={(e) => setContactMethod(e.target.value)} />
                Phone
              </label>
                {contactMethod === 'email' ? (
                  <input ref={emailRef} type="email" placeholder="Enter your email" required={true}></input>
                ) : (
                  <input ref={phoneRef} type="tel" placeholder="Enter your phone #" required={true}></input>
                )}
            </div>
          </article>
          <article>
            <p>Subject</p>
            <input id="subjectInput" ref={subjectRef} type="text" placeholder="Type your subject" required={false}></input>
          </article>
          <article>
            <p>Message*</p>
            <textarea id="messageInput" ref={messageRef} placeholder="Type your message" required={true}></textarea>
          </article>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </>
  )
}

export default ContactMe_section;
