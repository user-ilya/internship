import React from 'react';
import './buttonMain.css';


function ButtonMain() {

    const sumNumbers = (a, b) => {
        return a + b;
    }


    return (
        <button 
            className="button__main"
            onClick={() => {
                console.log(sumNumbers(3,5))
            }}> Я кнопка</button> 
    )
}
export default ButtonMain;