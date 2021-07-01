import React, { useState } from "react";
import { ContactFormTitle } from "@/data";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';
init("user_M58FccT67B7zrxlWz4RAT");
const ContactForm = () => {
  const { subTitle, title, description } = ContactFormTitle;
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [msg, setMsg] = useState();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!fname || !email || !phone || !msg) {
      alert("Please fill given field first!")
    } else {
      emailjs.sendForm('service_iuuwyvm', 'template_89tii32', e.target, 'user_M58FccT67B7zrxlWz4RAT')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      alert("Message send!!!")
      setFname("")
      setLname("")
      setEmail("")
      setPhone("")
      setMsg("")
    }

  }
  return (
    <section className="commonSection ContactPage">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
          <iframe className="iframe-placeholder" src="https://tawk.to/chat/60b20976de99a4282a1a3dc9/1f6rn9uv0" width="500" height="600"></iframe>
        </div>
    </section>
  );
};

export default ContactForm;
