import React, { Component } from 'react'

import Burger from '../../components/Burger/Burger';
import Auxiliary from '../../hoc/Auxiliary';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2,
    }
  }

  render () {
    return (
      <Auxiliary>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls />
      </Auxiliary>
    );
  }
}

export default BurgerBuilder;
