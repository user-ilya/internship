import React, {Component} from 'react';
import Home from '../Home/home';
import Nav from '../Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AboutMe from '../aboutMe/aboutMe';

export default class App extends Component {

    render () {

        return (
        <>
            <Router>
                <Switch>
                    <Route path='/' exact >
                        <Nav/>
                    </Route>
                    <Route 
                        path='/home'>
                        <Home/>
                    </Route>
                    <Route
                        path='/about'>
                        <Nav/>
                        <AboutMe/>
                    </Route>
                </Switch>
            </Router>
        </>
        )
    }
} 