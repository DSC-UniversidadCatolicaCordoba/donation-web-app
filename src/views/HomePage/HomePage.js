import React, { Fragment } from 'react';
import Carousel from '../../components/Carousel/Estructura/Carousel'
import NavBar from '../../components/NavBar/NavBar'
import Card from '../../components/Card/Card'
import '../../styles/homepage.css';
import { Container } from '@material-ui/core';
import NumberList from '../../components/NumberList/NumberList'
import Button from '../../components/Button/Button'
import Item from "../../components/Carousel/Items/Item"



const HomePage = () => {
    const items1 = [
        {id: 1, title: "Texto sobre donaciones, aca hablamos de donacion, ya dije que es un texto sin sentido que sirva nada mas para hacer texto texto texto"},
        {id: 2, title: "Texto sobre donaciones, aca hablamos de donacion, ya dije que es un texto sin sentido que sirva nada mas para hacer texto texto texto"
        },
      ];

      const items2 = [
        {id: 1, title: "Texto sobre donaciones, aca hablamos de donacion, ya dije que es un texto sin sentido que sirva nada mas para hacer texto texto texto"},
       
        {id: 3, title: "Texto sobre donaciones, aca hablamos de donacion, ya dije que es un texto sin sentido que sirva nada mas para hacer texto texto texto"},
        
      ];
      
      const items3 = [
        {id: 2, title: "Texto sobre donaciones, aca hablamos de donacion, ya dije que es un texto sin sentido que sirva nada mas para hacer texto texto texto"},
        {id: 4, title: "Texto sobre donaciones, aca hablamos de donacion, ya dije que es un texto sin sentido que sirva nada mas para hacer texto texto texto"}
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
            <div className="row" id="row1">
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
    
        <Container className="d-flex p-2 ayuda">
                <div className="d-flex flex-row">
                <div className="col p-2">
                <h1 className="titulo">Como puedes ayudar?</h1>
                <NumberList items={items1}></NumberList>
                <Button color="#2725B7" size="l" proporcion="10" text="Ir a donar" className="donar"></Button>
                </div>
                <div className="col p-2 imagen">
                <img  src={'https://asepyme.com/wp-content/uploads/2019/09/don-2706851_640.jpg'} alt='' className="responsive" id="imagen"/>
                </div>
                </div>
        </Container>

        <Container className="registro">
            <Container>
            <h1>Como registro mi organización?</h1>
            <div className="row">
                <div className="col">
                <NumberList items={items2}></NumberList>
                </div>
                <div className="col">
                    <NumberList items={items3}></NumberList>
                </div>
                </div>

        </Container>
        </Container>
        
        </Fragment>
        
    )
}

export default HomePage;