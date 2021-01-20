import React, { Fragment } from 'react';
import Button from '../components/button/Button.js';

const ButtonTest = () => {
    return (
        <Fragment>
            <div class="container bg-light ">
                <h1>
                    Wellcome to Button Test
                </h1>
                <div className='row'>
                    <Button text=':)' color='#16A085' size='l' proporcion='1' shape='square'></Button>
                    <Button text='(:' color='#16A085' size='l' proporcion='1' inverted = {true} shape='square'></Button>
                    <Button text='Buscar' color='#16A085' size='m' proporcion='3'></Button>
                    <Button text='Buscar' size='s' proporcion='3'></Button>
                </div>
            </div>
        </Fragment>
    )
}

export default ButtonTest;