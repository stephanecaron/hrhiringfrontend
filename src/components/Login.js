import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Login({setisLoggedIn}) {
  const [password, setPassword] = useState("");
  const navigate=useNavigate();
  const realPassword = "123";

  function validateForm() {
    return password.length > 0 && password === realPassword;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setisLoggedIn(true);
    console.log('password matches, logging in');
    navigate("/");
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <Button size="lg" type="submit" disabled={!validateForm()} onClick={handleSubmit}>
          Login
        </Button>
        </Form.Group>

      </Form>
    </div>
  );

}