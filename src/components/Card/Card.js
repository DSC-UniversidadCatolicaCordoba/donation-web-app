import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '../Button/Button';




const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard(props) {
  const classes = useStyles();
  const name = props.name;
  const description = props.description;

  return (
    <Card className={classes.card}>
      <CardContent>
      <h2>{name}</h2>
      <p>{description}</p>
      </CardContent>
      <CardActions>
        <Button size="s" text="Ir al portal"></Button>
      </CardActions>
    </Card>
  );
}