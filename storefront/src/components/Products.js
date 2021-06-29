import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  makeStyles,
} from '@material-ui/core/';
import { useSelector } from 'react-redux';
import { getRemoteData } from '../store/actions';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Products = (props) => {




  useEffect(() => {
    console.log('use Effect');
    getRemoteData();
  }, []);

  const state = useSelector((state) => {
    return {
      ProductsList: state.productsReducer.products
    }
  });


  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {state.ProductsList.map((product, idx) => {
          return (
            <Grid item key={idx} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={product.url}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {product.name}
                  </Typography>
                  <Typography>Price: ${product.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                  >
                    ADD TO CART
                  </Button>
                  <Button size="small" color="primary">
                    VIEW DETAILS
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;