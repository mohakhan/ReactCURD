import React from "react";
import Tasks from "./Tasks";
import Button from "./Button";
export default class CURDApp extends React.Component
{

    constructor(props) {
        super(props);

        this.tasks = new Map();

        this.id = 0;
        this.tasks.set(this.id++, {name:"Offer Namaz", status:"P"});
        this.onTaskChange = this.onTaskChange.bind(this);
        this.state={
            toDoTasks: this.tasks,
            editTaskId:-1,
            task:''
        }
    }

    onTaskChange(e)
    {
        e.persist()
        console.log(e)
        this.setState((state, props)=> state.task = e.target.value)
    }

    plotTasks = () =>
    {
        let tasks = [];
        this.state.toDoTasks.forEach((value, key) => tasks.push(<Tasks id={key} task={value} callback={this.taskAction}></Tasks>))
        return tasks;
    }

    addTask = (task) =>
    {
        var task =  this.refs.newTask.value;
        this.setState( (state, props)=>state.toDoTasks.set(this.id++, {name:task, status:"P"}))
    }

    removeTask = (id) =>
    {
        this.setState( (state, props)=>state.toDoTasks.delete(id))
    }

    doneTask = (id) =>
    {
        this.setState( (state, props)=>state.toDoTasks.delete(id))
    }

    updateTask = (id) =>
    {

        var task =  this.state.task;
        this.setState({
            toDoTasks: this.state.toDoTasks.set(id, {name: task, status: "P"}),
            editTaskId:-1,
            task:''
        })

/*

        this.state.toDoTasks.set(id, {name: this.state.task, status: "P"})
        this.state.task=''
        this.state.editTaskId= -1
        this.forceUpdate()
*/
    }

    editTask = (id) =>
    {
        if (id==-1)
            return null
        else
            return <div>
                <input type="text" key={id} value={this.state.task} onChange={this.onTaskChange}/>
                <Button id={id} name={"Update"}   action={this.taskAction} actionType={"U"}></Button>
            </div>
    }

    taskAction = (id, action) =>
    {
        if (action==="R")
            this.removeTask(id);
        else if ((action==="U"))
            this.updateTask(id);
        else if (action==="D")
            this.doneTask(id)
        else if (action==="E")
        {
            this.setState({editTaskId: id, task: this.state.toDoTasks.get(id).name}  )
        }
    }

    render() {
        return <div>
                    <div>
                        <input  ref="newTask" id="newTask" type="text"></input>
                        <Button name={"Add"} action={this.addTask}></Button>
                    </div>
                    <label>Tasks:</label>
                    {
                        this.plotTasks()
                    }
                    <label>Edit:</label>
                    {
                        this.editTask(this.state.editTaskId)
                    }
        </div>
    }
}