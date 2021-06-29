import { active } from '../store/actions';
import { Button, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';

const Categories = (props) => {

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
      </Grid>

    </div>
  );
};

export default Categories;