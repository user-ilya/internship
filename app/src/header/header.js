import React, { Component } from 'react';
import Context from '../Context';
import './header.css';

export default class Header extends Component {

    render ()  {
        const myName = React.createElement(
            'h2',
            null,
            `My name is ${this.context}`
        )
        return (
            <header id="header">
                <h1>Hello world !!!</h1>
                {myName}
        </header>
        )
    }
}

Header.contextType = Context;