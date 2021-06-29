import { active } from '../store/actions';
import { Button, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './cart';
import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const Categories = (props) => {


  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop:5,
      marginLeft:1150,
    },
  }));
  const classes = useStyles();

  const state = useSelector((state) => {
    return {
      categoriesList: state.categoriesReducer.categories
    }
  });
  // this is instead of mapDispatchToProps.
  const dispatch = useDispatch();
  return (
    <div>
      <Grid container spacing={2} justify="center">
        {state.categoriesList.map((category) => {
          return (
            <Grid item key={category.name}>
              <Button
                variant="outlined"
                color="default"
                onClick={() => dispatch(active(category.name))}
              >
                {category.name}
              </Button>
            </Grid>
          );
        })}
        <Paper className= {classes.root} elevation={3}>
          <Cart />
        </Paper>
      </Grid>
    </div>
  );
};

export default Categories;