import React from 'react';
import './Counter.css';
import minus from './Minus.png';
import plus from './Plus.png';
import resetImg from './Reset.png';
import {connect} from 'react-redux';
import * as actions from '../redux/actionsCreators';
import { bindActionCreators } from 'redux';

function Counter ({counter, inc, dec, res}) {
    
    return (
        <div className = 'container'>
            <div className='wrapper'>
                <div className = 'counter_block'>
                    <h2 className='counter'>
                        {counter}
                    </h2>
                    <div className = 'wrapper_blocks'>
                        <button type='button' onClick={inc} className='block block_green'><img src = {plus} alt='plus'/></button>
                        <button type='button' onClick={dec} className='block block_orange'><img src={minus} alt= 'minus'/></button>
                        <button type='button' onClick={res} className='block block_red'><img src={resetImg} alt='reset' /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
const  mapStateToProps = (state) => {
    return {
        counter: state
    }
}
function mapDispatchToProps (dispatch) {
    const {inc, dec, res} = bindActionCreators(actions,dispatch);
    return {
        inc, 
        dec,
        res
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter) ;