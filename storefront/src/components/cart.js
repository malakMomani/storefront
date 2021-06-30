
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteItem } from '../store/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Cart() {
  const classes = useStyles();

  const state = useSelector((state) => {
    // console.log(state, '*******************');
    return {
      cartList: state.cartReducer.cart,
      count: state.cartReducer.count,
      show: state.cartReducer.show
    }
  });

  const dispatch = useDispatch();
  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {state.cartList.map(item => {
          if(state.show)
          return (
            <ListItem>
              <ListItemText primary={item.item} />
              <ListItemIcon button onClick={()=> dispatch(deleteItem(item))}>
                <DeleteIcon />
              </ListItemIcon>
            </ListItem>
          )
          else return null;
        })}
      </List>
    </div>
  );
}

export default Cart;