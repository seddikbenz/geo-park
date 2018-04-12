import React from "react";
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from "react-router-dom";

// containers
import Home from './Home'
import Cars from './Cars'
import Drivers from './Drivers'
import Parks from './Parks'
// components
import NotFound from './NotFound'

// styled-componrnts


const Main = ()=>(
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/cars" component={Cars}/>
    <Route exact path="/drivers" component={Drivers}/>
    <Route exact path="/parks" component={Parks}/>
    <Route path={'*'} component={NotFound}/>
  </Switch>
)

const mapState = state => ({
});

const mapDispatch = dispatch => ({
});

export default withRouter(connect(mapState, mapDispatch)(Main))