import { CardActions, CardContent } from "@material-ui/core";
import React from "react";
import Card from '@material-ui/core/Card';
import Button from "../../Button/Button";



export default function Item(props) {
  const {itemInfo} = props; 
  console.log(itemInfo);

    return (
        <Card>
          <CardContent>
          <h2>{itemInfo.name}</h2>
          <p>{itemInfo.description}</p>
          </CardContent>
          <CardActions>
            <Button size="s" text="Ir al portal"></Button>
          </CardActions>
        </Card>
      );
}