import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddTask from './AddTask';

class App extends Component {
    signOut(){
        firebaseApp.auth().signOut();
    }
    render() {
        return(
            <div>
                <h3>Team Tasks:</h3>
                <AddTask/>
                <div>Task List</div>
                <button className="btn btn-danger" onClick={() => this.signOut()}>Sign Out</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state', state);
    return {};
}

export default connect(mapStateToProps, null)(App);