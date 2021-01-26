import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {


    render ()  {
        const {name} = this.props;
        const myName = React.createElement(
            'h2',
            null,
            `My name is ${name}`
        )
        return (
            <header id="header">
                <h1>Hello world !!!</h1>
                {myName}
        </header>
        )
    }
}