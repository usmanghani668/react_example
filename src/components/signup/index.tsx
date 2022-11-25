import React, { SyntheticEvent, useState } from "react";
import {
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";

import "../login/index.css";
import {
  INVALID_EMAIL_ERROR,
  INVALID_USERNAME,
  PASSWORD_LABEL,
  SIGNUP_LABEL,
  SIGNUP_SUCCESS_MESSAGE,
  SUBMIT_LABEL,
  USERNAME_LABEL,
  VALID_EMAIL_MESSAGE,
} from "../../utils/Constants";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleUsername = (e: SyntheticEvent<EventTarget>) => {
    setUsername((e.target as HTMLInputElement).value);
  };
  const handlePassword = (e: SyntheticEvent<EventTarget>) => {
    setPassword((e.target as HTMLInputElement).value);
  };
  const handleSubmit = () => {
    setError(false);
    if (username === "" || password.length < 8) {
      setError(true);
      return;
    }
    setSuccess(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="container row">
      <div className="row">
        <h2>{SIGNUP_LABEL}</h2>
      </div>

      <Form className="form">
        <FormGroup>
          <Label>{USERNAME_LABEL}</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => handleUsername(e)}
          />
          <FormFeedback>{INVALID_EMAIL_ERROR}</FormFeedback>
          <FormFeedback valid>{VALID_EMAIL_MESSAGE}</FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="password">{PASSWORD_LABEL}</Label>
          <Input
            type="password"
            name="password"
            placeholder="********"
            value={password}
            onChange={(e) => handlePassword(e)}
          />
        </FormGroup>{" "}
        <div className="d-flex justify-content-center">
          <Button onClick={handleSubmit}>{SUBMIT_LABEL}</Button>
        </div>
      </Form>
      <div>
        {error && <p className="error">{INVALID_USERNAME}</p>}
        {success && <p className="success">{SIGNUP_SUCCESS_MESSAGE}</p>}
      </div>
    </div>
  );
};

export default SignUp;
