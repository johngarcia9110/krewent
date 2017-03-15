import React, { Component } from 'react';

class SignIn extends Component {
    render() {
        return(
            <div className="form-inline">
                <h2>Sign In</h2>
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="email"/>
                    <input type="password" className="form-control" placeholder="password"/>
                    <button className="btn btn-primary">Sign Up</button>
                </div>
            </div>
        )
    }
}

export default SignIn;