import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from "../Items/Item"



function MostrarTarjetas(){

const array = [
        { name: "Portal Milagro UCC",
        description: "Probably the most random thing you have ever seen!",
        },
        {
            name: "Portal UCC",
            description: "Funcionaa"
        },
        {
            name: "Otro portal",
            description: "Funciona o me mato"
        }    
    ]

    const arrayItems = array.map( (item, i) => <Item key={i} itemInfo={item} /> )

    return (
        <Carousel>
            
            {arrayItems}

        </Carousel>
    )
}

export default MostrarTarjetas;