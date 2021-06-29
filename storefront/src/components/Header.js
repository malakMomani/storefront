import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { show } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const state = useSelector((state) => {
    return {
      cart: state.cartReducer
    }
  });
  // this is instead of mapDispatchToProps.
  const dispatch = useDispatch();

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Malak's Store
          </Typography>
          <Button color="inherit" onClick={()=> dispatch(show(!state.cart.show))}>CART ({state.cart.count})</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
