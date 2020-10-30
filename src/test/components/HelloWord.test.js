import React from 'react';

// Importamos el componentes que testearemos
import HelloWord from '../../components/HelloWord/HelloWord';

// Utilicen este HelloWord, como plantilla de diferentes testin
const HellWordTest = () => {

    const nameComponente = 'HelloWord';

    return (
        <div>
            <h1 className='container'>Testing For {nameComponente}</h1>
            <p className='container'>In this page, we are going to try all params for the component {nameComponente}.</p>
            {
                // TESTING LIBRE, COMO SE DEBERIA DE VER EL ELEMENTO
            }
            <h2 className='container' >Testing FreeSpace</h2>
            <div className='row d-flex justify-content-center' style={{padding: '30px'}}>
                <HelloWord></HelloWord>
            </div>
            {
                // TESTING FILAS
            }
            <h2 className='container' style={{padding: '30px'}}>Testing in Rows</h2>
            <div className='row justify-content-center'>
                <div className='col-md justify-content-center'>
                    <HelloWord></HelloWord>                    
                </div>
                <div className='col-md justify-content-center'>
                    <HelloWord></HelloWord>                    
                </div>
                <div className='col-md justify-content-center'>
                    <HelloWord></HelloWord>                    
                </div>
            </div>
            {
                // TESTING EN PANTALLAS PEQUENIAS 
            }
            <h2 className='container' style={{padding: '30px'}}>Testing in Smartphone</h2>
            <div className='row justify-content-center'>
                <div  className='justify-content-center' style={{paddingTop: '20px', marginLeft: '20px', width: '325px', height: '400px', backgroundColor: '#B2B2B2'}}>
                    <HelloWord></HelloWord>
                </div>
                <div  className='justify-content-center' style={{paddingTop: '20px', marginLeft: '20px', width: '425px', height: '400px', backgroundColor: '#B2B2B2'}}>
                    <HelloWord></HelloWord>
                </div>
                <div  className='justify-content-center' style={{paddingTop: '20px', marginLeft: '20px', width: '500px', height: '400px', backgroundColor: '#B2B2B2'}}>
                    <HelloWord></HelloWord>
                </div>
            </div>
            {
                // TESTING DE CADA UNO DE LOS PARAMETROS Y DIFERENTES CONVINACIONES 
            }
            <h2 className='container' style={{padding: '30px'}}>Testing Params</h2>
            <div className='row'>
                <div  className='col justify-content-center'>
                    <HelloWord name='Programer'></HelloWord>
                </div>
                <div  className='col justify-content-center'>
                    <HelloWord size='30px'></HelloWord>
                </div>
            </div>
        </div>);
}

export default HellWordTest;