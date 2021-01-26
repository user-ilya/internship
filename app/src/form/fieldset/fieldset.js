import React from 'react';
import ItemsForm from '../itemsForm';
import './fieldset.css';

const FieldSet = () => {
    return (
        <fieldset>
            <legend> О себе </legend>
            <ItemsForm/>
        </fieldset>
    )
}

export default  FieldSet;