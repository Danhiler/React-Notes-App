import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom';

import App from "./App";
import About from "./About";

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
                <Link to="/" className='menu' >Home</Link>
                <Link to="/about" className='menu'>About</Link>
            </nav>

                <Route exact path ="/" component={App}/>
                <Route  path ="/about" component={About}/>

                </div>
            </BrowserRouter>
        )
    }

}

export default ParentApp;
