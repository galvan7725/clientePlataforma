import React from 'react';
import {Route , Switch} from 'react-router-dom';
import Menu from './core/Menu';
import Home from './core/Home';


const MainRouter = () => (
 

    <div>
       <Menu/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
        </Switch>
    </div>
);

export default MainRouter;