import React, { Component } from 'react';

export default class RestaurantInput extends Component {
  
  constructor (props) {
    super (props)
    this.state = {text: ''}
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleOnSubmit} >
          <input 
            type='text' 
            onChange={this.handleOnChange}
            value={this.state.text} 
            />
          <input type='submit' />
        </form>
      </div>
    );
  }
};