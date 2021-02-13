import React, {useCallback, useEffect, useState} from 'react';
import './aboutMe.css';
import {Button} from 'react-bootstrap';

function AboutMe ({data}) {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('');
    const [name, updataName] = useState('Ilya');
    const itemList = ['Alex', 'Alina', 'Matvey'];

    const newItemList = itemList.filter((item) => {
        return item.length < 5
    })

    const newList = itemList.map(item => (<div className="footer__block">{item}</div>));

    const addText = useCallback((event) => {
        if (event.key ==='Enter') {
            setText('');
            console.log("enter")};
        
    })
    
    return (
        <>
            <div >
                <h1>Welcome to About Me</h1>
                <p>My name is {name}</p>
                <button
                    onClick={() => {updataName(newList)}}>
                Добавить</button>
            </div>
            <div className='footer'>
                <input type='text'
                        value={text}
                        onChange= {(event) => setText(event.target.value)}
                        onKeyPress={addText} />
                <textarea style={{display:'block',
                                  marginTop: 20 + 'px'}}
                         rows='10' cols='10'
                         value={text}></textarea>
            </div>
            <div style={{marginTop: 30 + 'px', borderColor:'green'}}>
                <Button variant="success"
                        className='success'
                        type='button'
                        onClick={() => setCount(count + 1) }>Клик</Button>{' '}
                <h2>Вы нажали на кнопку {count} раз </h2>
            </div>
            {`Title: ${data.title}`}

        </>
    )
} 

export default AboutMe;