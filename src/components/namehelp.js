import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { nameHelpTitle } from "@/data";
import { Link } from "gatsby"

const Namehelp = () => {
    const { subTitle, title, description } = nameHelpTitle;

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
            <div>
                    <Row className="d-flex justify-content-center">
                        <Col lg={2} className="d-flex justify-content-center herodiv">
                            <Link className="common_btn red_bg" to="/service-india">
                                <span>india</span>
                            </Link>
                        </Col>
                        <Col lg={2} className="d-flex justify-content-center herodiv">
                            <Link className="common_btn red_bg" to="/service-usa">
                                <span>USA</span></Link>
                        </Col>
                    </Row>
            </div>
        </section>
    );
};

export default Namehelp;
