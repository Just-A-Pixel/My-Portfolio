import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styles from "../../styles/Components/Dark/email.module.scss"

 const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8wag5jh', 'template_8ramzv7', form.current, 'user_DirK7HwvsInFKJ912qz6a')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    form.current.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail} className={styles.email}>
      
      <input type="text" name="from_name" placeholder='Name'/>
    
      <input type="email" name="from_email" placeholder='Email'/>
      
      <textarea name="message" placeholder='Message'/>
      <input type="submit" value="Send" />
    </form>
  );
};

export default Email