import React, { Component } from "react";
import { Jumbotron, Navbar, Button } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class Header extends Component {
  logout = () => {
    axios
      .get("http://localhost:8080/member/logout", {
        headers
      })
      .then(returnData => {
        if (returnData.data.message) {
          $.removeCookie("login_email");
          alert("로그아웃 되었습니다!");
          /* this.setState({
            login_nick: "",
            loginStyle: "inline-block",
            logoutStyle: "none"
          }); */
        }
      });
  };
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={this.logout} variant="primary">
              로그아웃
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron>
          <h1>Today I Learned</h1>
          <br />
          <p>오늘 공부한 것을 떠올리면서 다시 한번 정리 해보세요.</p>
          <p>내일 더 멋진 하루가 펼쳐질 것입니다.</p>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
