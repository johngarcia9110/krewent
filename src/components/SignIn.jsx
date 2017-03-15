import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            error : {
                message : ''
            }
        }
    }

    signIn(){
        const {email, password} = this.state;
        firebaseApp.auth().signInWithEmailAndPassword(email, password)
        .catch(error => {
            this.setState({error});
        })
    }

    render() {
        return(
            <div className="form-inline">
                <h2>Sign In</h2>
                <div className="form-group">
                    <input type="text" 
                    className="form-control" 
                    placeholder="email"
                    onChange={event => this.setState({email : event.target.value})}
                    />
                    <input type="password" 
                    className="form-control" 
                    placeholder="password"
                    onChange={event => this.setState({password : event.target.value})}
                    />
                    <button className="btn btn-primary"
                    onClick={() => this.signIn()}
                    >Sign In</button>
                </div>
                <div>{this.state.error.message}</div>
                <div>Don't have an account? <Link to={'/signup'}>Create One >></Link></div>
            </div>
        )
    }
}

export default SignIn;