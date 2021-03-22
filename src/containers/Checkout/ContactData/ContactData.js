import axios from '../../../axios-orders';
import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import classes from './ContactData.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
  this.setState({loading: true});
  const order = {
    ingredients: this.props.ingredients,
    price: this.props.price,
    customer: {
      name: 'Jimmy Head',
      adress: {
        street: 'Charles Woopertown',
        zipCode: '115977',
        country: 'Womberland',
      },
      emaiil: 'test@test.com',
    },
    deliveryMethod: 'fastest',
  };
  axios.post('/orders.json', order)
    .then(response => {
      this.setState({loading: false});
      this.props.history.push('/');
    })
    .catch(error => {
      this.setState({loading: false});
    })
  };

  render() {
    let form = (<form>
      <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
      <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
      <input className={classes.Input} type="text" name="street" placeholder="Street" />
      <input className={classes.Input} type="text" name="postal" placeholder="Street" />
      <Button
        btnType="Success"
        clicked={this.orderHandler}
      >Order</Button>
    </form>);
    if (this.state.loading) {
      <Spinner/>
    }
    return(
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;