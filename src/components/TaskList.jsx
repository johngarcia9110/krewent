import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskRef } from '../firebase';
import { setTasks } from '../actions';

class TaskList extends Component {

    componentDidMount(){
        taskRef.on('value', snap => {
            let tasks = [];
            snap.forEach(task => {
                let { email, title } = task.val();
                tasks.push({ email, title });
            })
            console.log('tasks', tasks);
            this.props.setTasks(tasks);
        })
    }
    render(){
        console.log('this.props.tasks', this.props.tasks);
        return(
            <div>
                Goal List
            </div>
        )
    }
}

function mapStateToProps(state){
    const { tasks } = state;
    return {
        tasks
    }
}

export default connect( mapStateToProps, { setTasks })(TaskList);