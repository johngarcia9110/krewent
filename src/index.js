import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import { logUser } from './actions'
import reducer from './reducers';

import App from './components/App'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged( user => {
    if(user){
        const { email } = user;
        console.log('user has signedin or signed up', user);
        store.dispatch(logUser(email));
        // If User is logged in redirect them to the app
        browserHistory.push('/app');
    }else{
        console.log('user still needs to signin or up');
        browserHistory.replace('/signIn');
    }
})

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={browserHistory}>
            <Route path="/app" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Router>
    </Provider>, document.getElementById('root')
)