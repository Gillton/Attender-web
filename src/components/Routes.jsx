import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Collect from './collect';
import Details from './details';
import Edit from './edit';
import Error404 from './error404';
import Classes from './classes';
import Login from './login';

const Routes = () => (
    <Switch>
        <Redirect exact path='/' to='/classes' />
        <Route exact path='/classes' component={Classes} />
        <Route exact path='/classes/:id' component={Details} />
        <Route exact path='/classes/:id/collect' component={Collect} />
        <Route exact path='/classes/:id/edit' component={Edit} />
        <Route exact path='/login' component={Login} />
        <Route path='/*' component={Error404} />
    </Switch>
);

export default Routes;