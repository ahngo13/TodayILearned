import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class LoginForm extends Component {
  state = {};
  join = () => {
    const send_param = {
      headers,
      email: this.joinEmail.value,
      password: this.joinPw.value
    };
    axios
      .post("http://localhost:8080/member/insert", send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          this.setState({
            name: returnData.data.name
          });
        } else {
          alert("회원가입 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };
  login = () => {
    alert(this.password.value);
  };
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={ref => (this.joinEmail = ref)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="loginForm">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={ref => (this.joinPw = ref)}
            placeholder="Password"
          />
          <Button onClick={this.login} variant="primary" type="button">
            로그인
          </Button>
        </Form.Group>
        <br></br>
        <br></br>
        <Form.Group controlId="joinForm">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={ref => (this.email = ref)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={ref => (this.password = ref)}
            placeholder="Password"
          />
          <Button onClick={this.join} variant="primary" type="button">
            회원가입
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default LoginForm;
