import React from 'react';
import ButtonMain from '../buttonMain';
import Form from '../form/form';
import Header from '../header';
import Nav from '../Navigation';
export default function Home () {
    return (
        <>
            <h1>Welcome to Home</h1>
            <Nav/>
            <Header name='Ilya'/>
            <Form />
            <ButtonMain/>
        </>
    )
}