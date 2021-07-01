import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardOne from "@/components/service-card-one";
import { ServicePostData, ServiceOnedatapost } from "@/data";



const ServiceOne = () => {
  const { subTitle, title, description } = ServiceOnedatapost;
  return (
    <section className="service_section_2 commonSection">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h4 className="sub_title">{subTitle}</h4>
            <h2 className="sec_title">{title}</h2>
            <p className="sec_desc">{description}</p>
          </div>
        </div>
        </div>
      
      <Container>
        <Row className="d-flex justify-content-center">
          {ServicePostData.map((post, index) => (
            <Col lg={3} md={1} key={index}>
              <ServiceCardOne data={post}
              />

            </Col>
          ))}

        </Row>
      </Container>
    </section>
  );
};

export default ServiceOne;
