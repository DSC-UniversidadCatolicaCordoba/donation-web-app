import React, { useState } from 'react';
import './HelloWord.css';

const HelloWord = ({ name, size}) => {

    const [ state, setState] = useState(0);

    const style = {
        fontSize: size ?? '16px'
    }

    const handleClick = () => {
        setState(state + 1);
    }

    return (
        <div style={style} className='d-flex justify-content-center container-hello-word' onClick={handleClick}>
            <p>Hello { name ?? 'Word'} {state} </p>
        </div>
    )

}

export default HelloWord;