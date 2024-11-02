import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      message,
    };

    emailjs
      .send(
        'service_soundous_leila', // Your EmailJS Service ID
        'template_1icdkmd', // Your EmailJS Template ID
        templateParams,
        'ao9h0doSMk5hbAH7z' // Your EmailJS Public Key
      )
      .then(() => {
        setIsSent(true);
        setEmail('');
        setMessage('');
      })
      .catch((error) => console.error("Failed to send email:", error.text || error));
  };

  return (
    <div  id="contact" className="w-[90%] flex flex-col items-center">
       <h1 className="text-2xl font-bold mb-4 ">Contact Me</h1>
      {isSent && <p>Your message has been sent!</p>}
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center lg:w-[70%] sm:w-[90%]">
        <div className="flex flex-col w-full">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none px-1 pb-1 mb-4 w-full"
            />
          </label>
        </div>
        <div className="flex flex-col w-full">
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-transparent border-b-2 border-white text-white placeholder-white/70 focus:outline-none px-1 pb-1 mb-4 w-full"
            />
          </label>
        </div>
        <button type="submit" className="bg-fontPink text-divColor font-semibold text-xl w-32 rounded-md h-8">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

