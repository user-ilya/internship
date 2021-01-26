import React, {Component} from 'react';
import FieldSet from '../form/fieldset';
import './form.css';


export default class Form extends Component {


    render () {
        return (
            <>
                <form className='block__3'>
                    <FieldSet/>
                </form>     
            </>       
        )
    }
}