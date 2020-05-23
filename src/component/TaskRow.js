import React from "react";
import TaskData from "./TaskData";
import Button from "./Button";

export default class TaskRow extends React.Component
{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {/*<TaskData key={this.props.key} taskName={this.props.name}></TaskData>*/}
            <lable  key={this.props.id} >{this.props.task.name}</lable>
            <Button id={this.props.id} name={"Edit"}   action={this.props.callback}   actionType={"E"}></Button>
            <Button id={this.props.id} name={"Done"  }   action={this.props.callback} actionType={"D"}></Button>
            <Button id={this.props.id} name={"Remove"}   action={this.props.callback} actionType={"R"}></Button>
        </div>
    }
}