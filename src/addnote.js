import React from 'react';

class AddNote extends React.Component{
    constructor(props){
        super(props)

    }
    render() {
        return <input type="button" className="addbtn" value="New Note" onClick={this.props.click} />;
    }
        }

        export default AddNote;




