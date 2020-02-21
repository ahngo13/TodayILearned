import React, { Component } from "react";
import LoginForm from "./LoginForm";
import BoardForm from "./BoardForm";
import $ from "jquery";
import {} from "jquery.cookie";

class Body extends Component {
  render() {
    let resultForm;
    function getResultForm() {
      console.log($.cookie("login_email"));
      if ($.cookie("login_email")) {
        resultForm = <BoardForm />;
        return resultForm;
      } else {
        resultForm = <LoginForm />;
        return resultForm;
      }
    }
    getResultForm();
    return <div>{resultForm}</div>;
  }
}

export default Body;
