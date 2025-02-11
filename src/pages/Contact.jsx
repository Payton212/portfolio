import { useState } from 'react';
import { validateEmail } from '../components/utils/checkInput';
import emailjs from '@emailjs/browser';


export default function Contact() {

    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleInputChange = (e) => {
        const { target } = e;

        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'Name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
        
    }
  const handleFormSubmit = (e) => {
    e.preventDefault();
      if (!Name) {
          setErrorMessage('please enter a name!');
          return;
      } if (!validateEmail(email)) {
          setErrorMessage('please use a valid email!');
          return;
      } if (!message) {
          setErrorMessage('please add a message!');
          return
      }
     
    const form = document.getElementById('myForm');
    emailjs.init("Jj-VdXm0j23W07I-L");
    emailjs.sendForm('service_qgzgl8s', 'template_082bbte', form,{
        from_name: Name,
        Name: "payton",
        message: message,
        email: email,
    });
      
      setEmail('');
      setName('');
      setMessage('');
      setErrorMessage('')
  };
  return (
    <>
      
      <form id="myForm" onSubmit={handleFormSubmit}>
        <div className="pageTitle">
          <h3>Contact ☎️ Me</h3>
        </div>
        <div className="nameInput">
          <h2 id="nameh2">Name:</h2>
                  <input
                      id="nameInput"
                      name="Name"
                      onChange={handleInputChange}
                      type="text"
                      value={Name}
                  ></input>
        </div>
        <div className="emailInput">
          <h2 id="emailh2" >
            Email:
          </h2>
                  <input
                      name="email"
                      type="email"
                      onChange={handleInputChange}
                      id="emailInput"
                      value={email}
                  ></input>
        </div>
        <div className="messageInput">
          <h2 id="messageh2">Message:</h2>
          <textarea
                    name="message"
                    type="text"
                    id="messageInput"
                    onChange={handleInputChange}
                    rows="4"
                    cols="60"
                    placeholder="Enter your message here..."
                    value={message}
          ></textarea>
        </div>
        <div className="submit">
          <button type="submit" id="submit">
            Send
          </button>
        </div>
          </form>
          {errorMessage && (
              <div>
                  <p className="error-text">{errorMessage}</p>
              </div>
        )}
    </>
  );
}
