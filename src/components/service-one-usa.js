import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ServiceCardOneUsa from "@/components/service-card-one-usa";
import { ServicePostDataUsa } from "@/data";
import { Link } from "gatsby";



const ServiceOneUsa = () => {
  return (
    <section className="service_section_2 commonSection">
      <div className="herodiv">
      <Container>
        <Row className="d-flex justify-content-center">
          <Col lg={1}>
          <Link className="commons_btn red_bgs" to="/service-india">
              <span>india</span>
            </Link>
          </Col>
          <Col lg={1}>
          <Link className="commons_btn red_bgs" to="/service-usa">
              <span>USA</span>
            </Link>
          </Col>
        </Row>
      </Container>
      </div>
      
      <Container>
        <Row className="d-flex justify-content-center">
          {ServicePostDataUsa.map((post, index) => (
            <Col lg={3} md={10} key={index}>
              <ServiceCardOneUsa data={post}
              />

            </Col>
          ))}

        </Row>
      </Container>
    </section>
  );
};

export default ServiceOneUsa;
