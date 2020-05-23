import React from "react";
import TaskRow from "./TaskRow";

export default class Tasks extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return  <div>
                    <TaskRow id={this.props.id} task={this.props.task} callback={this.props.callback}/>
                </div>
    }
}