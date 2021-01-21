import React from 'react';
import './CardT.css'

const CardT = ({title, description, pic}) => {

    return (
        <div className="card">
            <div className="card-body">
                <div className="row1">
                    <img className="card-picture"
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxasNqbeapZZwSroHNZecFpVBR31hihWItkQ&usqp=CAU"/>
                </div>

                <div className="row2" >
                    <h5 className="card-title font-weight-bold text-center">ONG Mujeres</h5>
                    <p className="card-subtitle text-muted text-center">ONG Mujeres es una organizacion sin fine de lucro que lucha por las mujeres en situacion de calle</p>
                </div>
            </div>
        </div>
    )
}

export default CardT;
