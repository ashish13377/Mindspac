import React from "react";
import { LogoImage } from "@/data";
import { Link } from "gatsby";

const Footer = () => {
  const { light } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={light} alt="" />
              </a>
              <p>
              Welcome to our mental health service. We work for providing mindfulness and peace in oneself. Our aim is to help everyone globally, so as to have balance and stability in life. Our team consists of certified psychotherapists, who operate to bring out change in living.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">contact</h3>
              <p>
              CCWO Colony, Dhanbad, 
              <br />
              Jharkhand 828127
              <br />
              <br/>
              Pune City
              <br />
              Maharashtra,411001 
              </p>
              <p>P:<a href="tel:03267967308"> 0326 796 7308</a></p>
              <p>
                E: <a href="mailto:support@mindspac.com">support@mindspac.com</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">important Link</h3>
              <ul>
                <li>
                  <Link to="/termsconditions">
                  Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacypolicies">
                  Privacy & Policy
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
          
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} by{" "}
              <Link to="/">mindspac.com</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
