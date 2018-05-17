import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'


import Sidebar from './sidebar';
import AddNote from "./addnote";

class App extends Component {
    constructor(){
        super()
        this.state = {
            notes: [
                {name: 'Ravid', value: '00000000000000'},
                {name: 'asd', value: 'asdasd1232131asd'},
                {name: 'asd', value: 'asdasdsadasdsadasd'},
                {name: 'asd', value: 'asdasa345sfasfasfd45aasdsd'},
                {name: 'asd', value: 'asda45sdsdgdsgdfga22sd'},
                {name: 'asd', value: 'asdaretertret4534535sdasd'},
            ],
            content:"Ravid0",
            selected:0
        }
    }
    handleClick = (e, i) => {
        this.setState({content:this.state.notes[e].value,selected:e})

    }
    handleAddNewNote = () => {
        const notesArr = this.state.notes;
        notesArr.push({name:'',value:''});
        this.setState({notes:notesArr})
    }
    updateTextArea =(e) => {
        const notesArr = this.state.notes;
        notesArr[this.state.selected] = {name:e.target.value.substring(0,10),value:e.target.value};

        this.setState({content:e.target.value,notes:notesArr})

    }

  render() {
    return (
          <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Notes List</h1>
            <Sidebar notes={this.state.notes} click={this.handleClick} selected={this.state.selected}> </Sidebar>
            <AddNote click={this.handleAddNewNote}/>
        </header>
        <textarea className="App-intro" value={this.state.content} onChange={this.updateTextArea} >

        </textarea>
          </div>
    );
  }

}

export default App;
