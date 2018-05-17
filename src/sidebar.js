import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {
          //  selected:1
        //};
    }

    handleClick(i){
        this.props.click(i);
        //this.setState({
         //   selected: i
        //});
    }

    getSelectedClass(i){
        return (i===+this.props.selected)?'selected': '';
    }

    render(){
        return this.props.notes.map((note,i) => {
            return <li className={'box ' + this.getSelectedClass(i)}
                       key={i} onClick={this.handleClick.bind(this, i)}>{note.name}</li>


        });
    }



}

export default Sidebar;