import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import SobreNos from './pages/SobreNos';
import Login from './pages/Login';
import Comunidade from './pages/Comunidade';
import AppMobile from './pages/AppMobile';

export default function Routes() {
    return (            
        <BrowserRouter>                        
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/sobrenos" component={SobreNos} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/comunidade" component={Comunidade} />
                <Route exact path="/app" component={AppMobile} />
            </Switch>            
        </BrowserRouter>
    )
}