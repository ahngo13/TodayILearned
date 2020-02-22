import React, { Component } from "react";
import {HashRouter} from 'react-router-dom';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Main extends Component {
  render() {
   
    return (
      <div>
          <HashRouter>
            <Header/>
            <Body/>
            <Footer/>
          </HashRouter>
      </div>
    );
  }
}

export default Main;
