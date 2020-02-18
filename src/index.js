import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Body from './body';
import Footer from './footer';

ReactDOM.render(
    <div>
        <Header/>
        <Body/>
        <Footer/>
    </div>
        ,
    document.querySelector('#container')
);