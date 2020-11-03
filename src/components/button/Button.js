import React, { useCallback, useContext, useEffect, useState } from 'react';

import './button.css';

//Tamaño: s = 10px , m = 20px, l = 30px | default m
//Proporcion de ancho en 1 de alto | defauld: ancho columna
//shape = square, round | dafault: round
//color = #******

const Button = ({ text, color, proporcion, size, shape, inverted, callback }) => {

    const [classButton, setClassButton] = useState('');
    const [pressed, setPressed] = useState('');

    color = color ?? '#FFFFFF'; //VER COMO MAPEAR NOMBRE A CODIGO

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

    var textColor;

    if (isDark(color))
        textColor = '#FFFFFF';
    else
        textColor = '#000000';

    const styleButton = {
        '--primary-color': color,
        '--height': String(size + 'px'),
        '--width': proporcion,
        '--font-size': String((size / 32) + 'EM'),
        '--border-radius': String(shape + 'px'),
        '--text-color': textColor

    }

    /*const onMouseHandler = (event) => {
        setClassButton(classButton + ' pressed');
        callback (event);
    } */   

    const onMouseHandler = (pressed) => {
        if(pressed)
        setPressed(' pressed');
        else
        setPressed('');
    }  

    useEffect(() => {
        if (inverted)
            setClassButton('inverted');
        else
            setClassButton('');
    }, [])

    console.log(classButton);
    return (
        <button style={styleButton} className={classButton + pressed} onMouseDown ={() => onMouseHandler(true)} onMouseUp ={() => onMouseHandler(false)}>
            {text}
        </button>
    )
}

function isDark(color) {
    var l;
    console.log(color);
    l = hexToL(color);
    if (l < 50)
        return true;
    else
        return false;
}

function hexToL(H) {
    // Convert hex to RGB first
    let r = 0, g = 0, b = 0;
    if (H.length == 4) {
        r = "0x" + H[1] + H[1];
        g = "0x" + H[2] + H[2];
        b = "0x" + H[3] + H[3];
    } else if (H.length == 7) {
        r = "0x" + H[1] + H[2];
        g = "0x" + H[3] + H[4];
        b = "0x" + H[5] + H[6];
    }
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        l = 0;
    l = (cmax + cmin) / 2;
    l = +(l * 100).toFixed(1);
    return l;
}

export default Button;