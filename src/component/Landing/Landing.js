import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import "./landing.css";

const Landing = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-container">
          <Button className="btn-create mt-3 mb-3" tag={Link} to="/create">
            <i className="far fa-calendar-plus mr-2"></i> Create my event
          </Button>
          <div className="image-container__section">
            <img
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T080335Z&X-Amz-Expires=86400&X-Amz-Signature=a1da028e5139fb42a15bbb2393dd134d6cfde493aeea11581f00da52f9ad779f&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
              alt="..."
              className="img-fluid"
            />
          </div>

          <div className="call-to-action__section">
            <h2 className="cta-header">Imagine If</h2>
            <h2 className="cta-header text-background">Snapchat</h2>
            <h2 className="cta-header">Had events.</h2>

            <p className="landing-page-description">
              Easily host and share events with your friends across any social
              media.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
