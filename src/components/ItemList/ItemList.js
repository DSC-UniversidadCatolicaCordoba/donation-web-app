import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import '../ItemList/ItemList.css';
import Col from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));

export default function NumberList(props) {
    const items = props.items;
    const listItems = items.map((item) =>
      <div className="row">
      <div className="col" id="contorno">
      <Avatar className="avatar" key={item.id}>
        {item.id}
      </Avatar>
      </div>
      <div className="col">
      <p className="font">{item.title}</p>
      </div>
      </div>
    );
   return (
   
    <List>
      <ListItem alignItems="flex-end">
       <ul>
       {listItems}
       </ul>
      </ListItem>
    </List>
  );
}
