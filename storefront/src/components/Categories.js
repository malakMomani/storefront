import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';

import { activeCat, reset } from '../store/categories.js';


const ActiveCategory = props => {

  return (
    <div>
      <h1 id="category">Browse our Categories</h1>
      <ul>
        {props.categoriesReducer.categories.map(category => {
          return <Button color="primary" onClick={() => props.activeCat(category.name)} key={category.name}>
            {category.name}
          </Button>
        })}
      </ul>
      <h2 id="activeCategory">{props.categoriesReducer.activeCategory}</h2>
    </div>

  );
}

const mapStateToProps = state => ({
  catReducer: state.catReducer
})

const mapDispatchToProps = { activeCat, reset }

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCategory);