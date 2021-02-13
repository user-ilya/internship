import React from 'react';
import ButtonMain from '../buttonMain';
import Form from '../form/form';
import Header from '../header';
import Nav from '../Navigation';
export default function Home () {


    return (
        <>
            <Nav/>
            <h1>Welcome to Home</h1>
            <Header />
            <Form />
            <ButtonMain/>
        </>
    )
}