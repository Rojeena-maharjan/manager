import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import reducers from './reducers';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyA_MDcy1t9piomwZFFcT0j5OFwqlQIauXY',
            authDomain: 'manager-7d3c3.firebaseapp.com',
            databaseURL: 'https://manager-7d3c3.firebaseio.com',
            projectId: 'manager-7d3c3',
            storageBucket: 'manager-7d3c3.appspot.com',
            messagingSenderId: '210806189664'
        };
        firebase.initializeApp(config);
    }
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
