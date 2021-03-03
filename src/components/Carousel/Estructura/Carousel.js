import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Item from "../Items/Item"



function MostrarTarjetas(props){

const item = {
        name: "Portal Milagro UCC",
        description: "Probably the most random thing you have ever seen!",
    
    };

    return (
        <Carousel>
            {
                item.map( (item, i) => <Item key={i} itemInfo={item} /> )
            }
        </Carousel>
    )
}

export default MostrarTarjetas;