import React from 'react';
import {Route , Switch} from 'react-router-dom';
import Menu from './core/Menu';
import Home from './core/Home';
import SignIn from './user/SignIn'


const MainRouter = () => (
 

    <div>
       <Menu/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/SignIn" component={SignIn}></Route>
        </Switch>
    </div>
);

export default MainRouter;