import React from "react";

export default class Button extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return <button onClick={()=>this.props.action(this.props.id, this.props.actionType)}> {this.props.name} </button>
    }
}