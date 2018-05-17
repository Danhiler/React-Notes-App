import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import App from "./App";

class ParentApp extends Component {
    constructor(){
        super()
        this.state = {
            pages: ['/day']
        }
    }


    render() {
        return (
            <BrowserRouter>


                <div className="parentApp">
            <nav>
            <link onClick={this.state.pages[0]}>
                asd , asd
            </nav>
                <App />
                </div>
            </BrowserRouter>
        );
    }

}

export default ParentApp;
