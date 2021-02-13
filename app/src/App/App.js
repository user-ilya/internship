import React, {useState, useEffect} from 'react';
import Home from '../Home/home';
import Nav from '../Navigation';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import AboutMe from '../aboutMe/aboutMe';
import Counter from '../Counter/Counter';
import Context from '../Context';

export default function App () {

    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/5`)
            .then(resolve => resolve.json())
            .then(answer => setData(answer));
    }, [data])

    return (
        <>  
            <Context.Provider value={'Ilya'}>
                    <Router>
                        <Switch>
                            <Route path='/' exact render={() => <h1>Welcome to Home</h1>}>
                                <Nav/>
                            </Route>
                            <Route 
                                path='/home'>
                                <Home/>
                            </Route>
                            <Route
                                path='/about'>
                                <Nav/>
                                <AboutMe  data={data}/>
                            </Route>
                            <Route path = '/counter'>
                                <Nav/>
                                <Counter/>
                            </Route>
                        </Switch>
                    </Router>
            </Context.Provider>
        </>
    )
}

