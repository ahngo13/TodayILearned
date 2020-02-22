import React, { Component } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import $ from "jquery";
import {} from "jquery.cookie";
axios.defaults.withCredentials = true;
const headers = { withCredentials: true };

class BoardForm extends Component {
  render() {
    const divStyle={
      margin : 50
    };
    return(
    <div style={divStyle}>
      <Table striped bordered hover>
        <thead>
          <tr><th>날짜</th><th>글 제목</th></tr>
        </thead>
        <tbody>
          <tr><td>12/20</td><td>코틀린</td></tr>
          <tr><td>12/20</td><td>코틀린</td></tr>
          <tr><td>12/20</td><td>코틀린</td></tr>
          <tr><td>12/20</td><td>코틀린</td></tr>
          <tr><td>12/20</td><td>코틀린</td></tr>
          <tr><td>12/20</td><td>코틀린</td></tr>
        </tbody>
      </Table>
    </div>
    );
  }
}

export default BoardForm;
