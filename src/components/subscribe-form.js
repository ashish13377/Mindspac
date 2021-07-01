import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { SubscribeFormData } from "@/data";
import emailjs from 'emailjs-com';
import { init } from 'emailjs-com';

init("user_OfnNpyN7knlTbaF2Bpoms");

const SubscribeForm = () => {
  const { sectionContent } = SubscribeFormData;
  const [email, setEmail] = useState();
  const sendEmail = (e) => {
    e.preventDefault();
    if (!email ) {
      alert("Please fill given field first!")
    } else {
      emailjs.sendForm('service_e0whvd6', 'template_645baoe', e.target, 'user_OfnNpyN7knlTbaF2Bpoms')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      alert("Thank you for subscribing to the Mindspac.")

      setEmail("")
    }
  }
 
  return (
    <section className="commonSection subscribe">
      <Container>
        <Row>
          <Col lg={4}>
            <h4 className="sub_title">{sectionContent.subTitle}</h4>
            <h2 className="sec_title">{sectionContent.title}</h2>
          </Col>
          <Col lg={8}>
            <form onSubmit={sendEmail} method="post" className="subscribefrom">
              <input type="email" placeholder="Enter your email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <button className="common_btn red_bg" type="submit" name="submit">
                <span>Subscribe now</span>
              </button>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SubscribeForm;

