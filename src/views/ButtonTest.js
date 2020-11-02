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
                        <Button text='Buscar' color={'red'} size='l' proporcion='1'></Button>
                        <Button text='Buscar' color='#279c62' size='m'  proporcion='5'></Button>
                        <Button text='Buscar' size='s'></Button>
                    </div>
            </div>
        </Fragment>
    )
}

export default ButtonTest;