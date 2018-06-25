//all different possible screens user can visit

import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';

const RouterComponent = () => {
    return (
        <Router hideNavBar>
            <Scene key="login" component={LoginForm} title="Please Login" hideNavBar />
        </Router>
    );
};

export default RouterComponent;
