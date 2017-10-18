import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import Collect from './collect';
import Details from './details';
import Edit from './edit';
import Error404 from './error404';
import Groups from './groups';
import Login from './login';

const Routes = () => (
    <Switch>
        <Redirect exact path='/' to='/groups' />
        <Route exact path='/groups' component={Groups} />
        <Route exact path='/groups/:id' component={Details} />
        <Route exact path='/groups/:id/collect' component={Collect} />
        <Route exact path='/groups/:id/edit' component={Edit} />
        <Route exact path='/login' component={Login} />
        <Route path='/*' component={Error404} />
    </Switch>
);

export default Routes;