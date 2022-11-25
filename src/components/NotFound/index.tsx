import React from "react";
import { NOT_FOUND_ERROR } from "../../utils/Constants";
import "./index.css";

const NotFoundComponent = () => {
  return (
    <div className="container">
      <div className="box d-flex justify-content-center align-items-center">
        <h5>{NOT_FOUND_ERROR}</h5>
      </div>
    </div>
  );
};

export default NotFoundComponent;
