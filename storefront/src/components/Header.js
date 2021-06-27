import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.black,
  },
}))


function Header() {

  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            OUR STORE
          </Typography>
          <Button color="inherit">CART (0)</Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;