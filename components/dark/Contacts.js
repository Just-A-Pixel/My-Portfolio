import React from "react";
import styles from "../../styles/Components/Dark/contact.module.css";
import github from "../../public/DoorOpen.svg";
import linkedin from "../../public/linkedin.svg";
import email from "../../public/email.svg";
import Image from "next/image";
import { DarkGithub } from "../LottieAnimation/GitHub";
import { DarkLinkedin } from "../LottieAnimation/Linkedin";

const Contacts = () => {
  return (
    <div className={styles.contact__list}>
      <DarkGithub />
      <br/>
      <DarkLinkedin />
    </div>
  );
};

export default Contacts;
