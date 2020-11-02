import React, { useCallback, useContext, useEffect, useState } from 'react';

import './button.css';

//Tamaño: s = 10px , m = 20px, l = 30px, default m
//Proporcion de ancho en 1 de alto: default 4:1 -> 4

const Button = ({ text, color, proporcion, size }) => {
    
    color = color ?? 'gray';
    proporcion = proporcion ? Number(proporcion) : 4;
    

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

    console.log(color);
    console.log(size);
    console.log(proporcion);
    console.log(size*proporcion);

    const styleButton = {/*
        '--primary-color': color,
        '--height': size,
        '--width': (size * proporcion)*/
        '--primary-color': color,
        '--height': String(size + 'px'),
        '--width': String((size * proporcion) + 'px'),
        '--font-size' : String((size/32) + 'EM')
    }

        return (
        <button style = {styleButton}>
            {text}
        </button>
    )
}


export default Button;