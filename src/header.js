import React, { Component } from "react";
import { Jumbotron } from "react-bootstrap";

class Header extends Component {
  render() {
    return (
      <div>
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
