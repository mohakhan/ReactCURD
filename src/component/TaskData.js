import React from "react";

export default class TaskData extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return <label key={this.props.key} >{this.props.taskName}></label>
    }
}