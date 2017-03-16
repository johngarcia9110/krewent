import React, { Component } from 'react';
import { taskRef } from '../firebase';

class TaskList extends Component {

    componentDidMount(){
        taskRef.on('value', snap => {
            let tasks = [];
            snap.forEach(task => {
                let { email, title } = task.val();
                tasks.push({ email, title });
            })
            console.log('tasks', tasks);
        })
    }
    render(){
        return(
            <div>
                Goal List
            </div>
        )
    }
}

export default TaskList;