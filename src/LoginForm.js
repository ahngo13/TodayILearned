import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class LoginForm extends Component {
/*   state = {
    login_email: ""
  }; */

  join = () => {
    const send_param = {
      headers,
      email: this.joinEmail.value,
      name: this.joinName.value,
      password: this.joinPw.value
    };
    axios
      .post("http://localhost:8080/member/join", send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          alert(returnData.data.message);
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
    const send_param = {
      headers,
      email: this.loginEmail.value,
      password: this.loginPw.value
    };
    axios
      .post("http://localhost:8080/member/login", send_param)
      //정상 수행
      .then(returnData => {
        if (returnData.data.message) {
          console.log("login_id:" + returnData.data._id);
          $.cookie("login_id", returnData.data._id);
/*           this.setState({
            login_email: returnData.data.name
          }); */
          alert(returnData.data.message);
          window.location.reload();
        } else {
          alert("로그인 실패");
        }
      })
      //에러
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    const formStyle={
      margin : 50
    };
    const buttonStyle={
      marginTop : 5
    };

    return (
      <Form style={formStyle}>
        <Form.Group controlId="joinForm">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={ref => (this.joinEmail = ref)}
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          <Form.Label>name</Form.Label>
          <Form.Control
            type="text"
            ref={ref => (this.joinName = ref)}
            placeholder="name"
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={ref => (this.joinPw = ref)}
            placeholder="Password"
          />
          <Button style={buttonStyle} onClick={this.join} variant="primary" type="button" block>
            회원가입
          </Button>
        </Form.Group>

        <Form.Group controlId="loginForm">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            ref={ref => (this.loginEmail = ref)}
            placeholder="Enter email"
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            ref={ref => (this.loginPw = ref)}
            placeholder="Password"
          />
          <Button style={buttonStyle} onClick={this.login} variant="primary" type="button" block>
            로그인
          </Button>
        </Form.Group>
      </Form>
    );
  }
}

export default LoginForm;
