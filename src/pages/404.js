import * as React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";

const NotFoundPage = () => {
  return(
      <div id="notfound">
      <div class="notfound">
        <div class="notfound-404">
         <SEO title="404: Not found" />
          <h1>Oops!</h1>
          <h2>404 - The Page can't be found</h2>
        </div>
        <Link className="link" to="/">Go TO Homepage</Link>
      </div>
    </div>
  );
 
};

export default NotFoundPage;
