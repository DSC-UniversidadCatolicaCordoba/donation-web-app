import { CardActions, CardContent } from "@material-ui/core";
import React from "react";
import Card from "../../Card/Card";
import Button from "../../Button/Button";



export default function Item(props) {
  const {itemInfo, itemProps} = props; 

    return (
        <Card>
          <CardContent>
          <h2>{()=> props.itemProps(itemInfo.name)}</h2>
          <p>{()=> props.itemProps(itemInfo.description)}</p>
          </CardContent>
          <CardActions>
            <Button size="s" text="Ir al portal"></Button>
          </CardActions>
        </Card>
      );
}