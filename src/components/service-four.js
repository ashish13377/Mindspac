import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ServicePostFourData } from "@/data";
import ServiceCardFour from "@/components/service-card-four";

const ServiceThree = () => {
  const { sectionContent, posts } = ServicePostFourData;
  const { title, subTitle, text } = sectionContent;
  return (
    <section className="commonSection what_wedo_2">
      <Container>
        <Row>
          {posts.map((post, index) => (
            <Col lg={4} md={12} key={index}>
              <ServiceCardFour data={post} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ServiceThree;
