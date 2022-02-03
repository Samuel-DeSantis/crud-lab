import React, { Component } from 'react';
import RestaurantInput from '../components/restaurants/RestaurantInput';
import Restaurants from '../components/restaurants/Restaurants';
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} />
        <Restaurants 
          restaurants={this.props.restaurants} 
          deleteRestaurant={this.props.deleteRestaurant}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({restaurants: state.restaurants})

const mapStateToDispatch = dispatch => {
  return {
    addRestaurant: name => dispatch({type: 'ADD_RESTAURANT', name}),
    deleteRestaurant: id => dispatch({type: 'DELETE_RESTAURANT', id})
  }
}

export default connect(null, mapStateToDispatch)(RestaurantsContainer);
