import React from "react";
import {Switch, Route} from 'react-router';

import Phones from "../phones";

const routes = (
    <Switch>
        <Route path="/" component={Phones} exact></Route>
    </Switch>
)

const Layout = () => {
    return(
        <div>
            {routes}
        </div>
    )
}

export default Layout;
