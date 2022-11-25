import React from "react";
import { EXAMPLE_LABEL } from "../../utils/Constants";
import "./index.css";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <div className="footer-copyright text-center py-3">
        © 2022 Copyright:
        <a href="/">{EXAMPLE_LABEL}</a>
      </div>
    </footer>
  );
};

export default FooterComponent;
