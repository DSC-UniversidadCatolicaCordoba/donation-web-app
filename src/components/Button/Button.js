import React from 'react';

import './Button.css';
import { useHistory } from 'react-router-dom';

//Tamaño: s = 10px , m = 20px, l = 30px | default m
//Proporcion de ancho en 1 de alto | defauld: ancho columna
//shape = square, round | dafault: round
//color = #******

const Button = ({ text, color, textColor, proporcion, size, shape}) => {

    color = color ?? '#FFFFFF'; 
    textColor = textColor ?? '#FFFFFF'

    switch (size) {
        case 's':
            size = 25;
            break;
        case 'l':
            size = 40;
            break;
        default:
            size = 30;
            break;
    }

    proporcion = proporcion ? String((Number(proporcion) * size) + 'px') : '100%';

    switch (shape) {
        case 'square':
            shape = '10';
            break;
        default:
            shape = '40';
            break;
    }

 
    const styleButton = {
        '--primary-color': color,
        '--height': String(size + 'px'),
        '--width': proporcion,
        '--font-size': String((size / 32) + 'EM'),
        '--border-radius': String(shape + 'px'),
        '--text-color': textColor

    }

  
    const history = useHistory();
    const navigateTo = () => history.push('/something');
    return (
        <button style={styleButton} onClick= {navigateTo}>
            {text}
        </button>
    )
}





export default Button;
