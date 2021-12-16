import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "semantic-ui-react";

const NotFound = () => (
  <div>
    <NavLink to="/">
      <img
        className="notfound"
        src="https://image.freepik.com/free-vector/glitch-error-404-page-background_23-2148090410.jpg"
        alt="404"
      />
    </NavLink>
    <p style={{ textAlign: "center" }}>
      <Button
        className="notfound-btn"
        as={NavLink}
        to="/"
        color="teal"
        size="tiny"
        content="Go to Home"
      />
    </p>
  </div>
);

export default NotFound;
