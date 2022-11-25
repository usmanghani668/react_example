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
import { useDispatch } from "react-redux";
import "./index.css";
import {
  USERNAME_LABEL,
  PASSWORD_LABEL,
  SIGNIN_LABEL,
  SIGNUP_LABEL,
  INVALID_EMAIL_ERROR,
  VALID_EMAIL_MESSAGE,
  INVALID_CREDIANTIALS,
} from "../../utils/Constants";

import loginData from "../../utils/login.json";
import { setUser } from "../../redux/slices/example";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleUsername = (e: SyntheticEvent<EventTarget>) => {
    setInputUsername((e.target as HTMLInputElement).value);
  };
  const handlePassword = (e: SyntheticEvent<EventTarget>) => {
    setInputPassword((e.target as HTMLInputElement).value);
  };
  const handleSubmit = () => {
    setError(false);
    const { users } = loginData;
    const user = users.find(
      ({ user, password }) =>
        user === inputUsername && password === inputPassword
    );
    if (user) {
      dispatch(setUser(user.user));
      navigate("/dashboard", {
        state: {
          role: user.role,
        },
      });
    } else {
      setError(true);
    }
  };
  return (
    <div className="container row">
      <div className="row">
        <h2>{SIGNIN_LABEL}</h2>
      </div>
      <Form className="form">
        <FormGroup>
          <Label>{USERNAME_LABEL}</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Enter Username"
            value={inputUsername}
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
            value={inputPassword}
            onChange={(e) => handlePassword(e)}
          />
        </FormGroup>{" "}
        <div className="d-flex justify-content-center">
          <Button onClick={handleSubmit}>{SIGNIN_LABEL}</Button>
          <Button onClick={() => navigate("/register")} className="signup">
            {SIGNUP_LABEL}
          </Button>
        </div>
      </Form>
      {error && <p className="error">{INVALID_CREDIANTIALS}</p>}
    </div>
  );
};

export default LoginComponent;
