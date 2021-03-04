import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../Card/Card.css';




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
    <Card className={classes.card} id="card">
      <CardContent>
      <h2>{name}</h2>
      <p>{description}</p>
      </CardContent>
    </Card>
  );
}