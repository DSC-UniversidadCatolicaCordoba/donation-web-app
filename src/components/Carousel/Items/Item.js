import { CardActions, CardContent } from "@material-ui/core";
import React from "react";
import Card from '@material-ui/core/Card';
import Button from "../../Button/Button";
import '../Items/item.css';



export default function Item(props) {
  const {itemInfo} = props; 
    return (
        <Card className="card">
          <CardContent>
          <h2>{itemInfo.name}</h2>
          <p>{itemInfo.description}</p>
          </CardContent>
          <CardActions>
          <Button color="#2725B7" size="l" proporcion="5" text="Ir al portal" id="donar"></Button>
          </CardActions>
        </Card>
      );
}