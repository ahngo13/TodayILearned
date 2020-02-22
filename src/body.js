import React, { Component } from "react";
import LoginForm from "./LoginForm";
import BoardForm from "./BoardForm";
import BoardWriteForm from "./BoardWriteForm";
import {Route} from 'react-router-dom';
import $ from "jquery";
import {} from "jquery.cookie";

class Body extends Component {
  render() {
    let resultForm;
    function getResultForm() {
      console.log($.cookie("login_email"));
      if ($.cookie("login_email")) {
        resultForm = <Route exact path="/" component={BoardForm}></Route>;
        return resultForm;
      } else {
        resultForm = <Route exact path="/" component={LoginForm}></Route>;
        return resultForm;
      }
    }
    getResultForm();
    return <div>
            <Route path="/boardWrite" component={BoardWriteForm}></Route>
            {resultForm}
            </div>;
  }
}

export default Body;
