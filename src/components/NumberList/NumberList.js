import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import './NumberList.css';

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
