import React, { Fragment } from 'react';
import Carousel from '../../components/Carousel/Estructura/Carousel'
import NavBar from '../../components/NavBar/NavBar'
import Card from '../../components/Card/Card'
import '../../styles/homepage.css';
import Example from '../../components/Carousel/Estructura/Carousel';
import { Container } from '@material-ui/core';
import ItemList from '../../components/ItemList/ItemList'
import Button from '../../components/Button/Button'
import Item from "../../components/Carousel/Items/Item"



const HomePage = () => {
    const items1 = [
        {id: 1, title: 'Hello World'},
        {id: 2, title: "Texto sobre donaciones, aca hablamos de donacion, ya dije que es un texto sin sentido que sirva nada mas para hacer texto texto texto"
        },
      ];

      const items2 = [
        {id: 1, title: 'Hello World'},
        {id: 2, title: 'Installation'},
        {id: 3, title: 'Installation'},
        {id: 4, title: 'Installation'}
      ];
    return (
        <Fragment>
        <div>
        <NavBar></NavBar>
        </div>
        <div className="carousel">
            <Carousel className="carousel">
                <Item name="Portal UCC" description="Hola"></Item>
            </Carousel>
        </div>
    
        <Container>
            <h1>Causas a donar</h1>
            <p>Texto sobre donaciones, aca hablamos de donacion, ya dije que es un texto sin sentido que sirva nada mas para hacer texto, texto, texto. Creo que con esto ya esta bien.</p>
            <div className="row">
               <div className="columns">
                   <Card name="Portal UCC" description="Hola"></Card>
               </div>
               <div className="columns">
               <Card name="Portal UCC" description="Hola"></Card>
               </div>
               <div className="columns">
               <Card name="Portal UCC" description="Hola"></Card>
               </div>

            </div>
        </Container> 
    
        <Container className="ayuda">
            <h1 className="titulo">Como puedes ayudar?</h1>
            <Container>
                <div className="row">
                <div className="col">
                <ItemList items={items1}></ItemList>
                <Button color="#2725B7" size="l" proporcion="10" text="Ir a donar" className="donar"></Button>
                </div>
                <div className="col imagen">
                <img  src={'https://asepyme.com/wp-content/uploads/2019/09/don-2706851_640.jpg'} alt='' className="responsive"/>
                </div>
                </div>
            </Container>
           
        </Container>
        
        </Fragment>
        
    )
}

export default HomePage;