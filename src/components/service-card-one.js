import React from "react";
import { Link } from "gatsby";

const ServiceCardOne = ({ data }) => {
  const { title, textone, texttwo, textthree, textfour, iconName, url, price } = data;
  return (
    <div className="icon_box_2 text-center">
      <h3>{title}</h3>
      <p className="icon_box_3">{textone}</p>
      <p className="icon_box_3">{texttwo}</p>
      <p className="icon_box_3">{textfour}</p>
      <p className="icon_box_3">{textthree}</p>
      <div className="iconWrap">
        <i className={iconName}></i>
      </div>
      <h3>{price}</h3>
    
      <Link className="commons_btn red_bgs"  to={url}> <span> Book Now </span></Link>
      
    </div>
  );
};

export default ServiceCardOne;
