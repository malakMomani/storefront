import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { activeCat, reset } from '../store/categories.js';


const ActiveCategory = props => {

  return(
    <div>
    <h1>Browse our Categories</h1>
    <ul>
      {props.categoriesReducer.categories.map((category, idx) =>{
        return <Button color="outline-primary" 
                       onClick={()=> props.activeCat(category.name)}
                       key={idx}> 
                       {category.name}

        </Button>
      })}
    </ul>

    <h2>{props.categoriesReducer.activeCategory}</h2>
    </div>

  );
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
})

const mapDispatchToProps = { activeCat, reset }

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategory);