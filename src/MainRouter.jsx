import React from 'react';
import {Route , Switch} from 'react-router-dom';
import Menu from './core/Menu';
import Home from './core/Home';
import SignIn from './user/SignIn';
import SignUp from './user/SignUp';
import Principal from './views/Principal';
import PrivateRoute from './auth/PrivateRoute';
import NotFound from './views/NotFound';


const MainRouter = () => (
 

    <div>
       <Menu/>
        <Switch>
            <PrivateRoute exact path="/" component={Principal}></PrivateRoute>
            <Route exact path="/welcome" component={Home}></Route>
            <Route exact path="/SignIn" component={SignIn}></Route>
            <Route exact path="/SignUp" component={SignUp}></Route>
            <PrivateRoute exact path="/Principal" component={Principal}></PrivateRoute>


            {}
            <Route component={NotFound}/>
        </Switch>
    </div>
);

export default MainRouter;