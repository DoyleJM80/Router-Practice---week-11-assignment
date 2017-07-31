import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return(
      <div className="App one">
        <div><button className="btn"><NavLink activeClassName="selected" exact to="/">Home</NavLink></button></div>
        <div><button className="btn"><NavLink activeClassName="selected" to="/about">About</NavLink></button></div>
        <div><button className="btn"><NavLink activeClassName="selected" to="/portfolio">Portfolio</NavLink></button></div>
        <div><button className="btn"><NavLink activeClassName="selected" to="/contact">Contact</NavLink></button></div>
        <div><button className="btn"><NavLink activeClassName="selected" to="/references"> References</NavLink></button></div>
      </div>
    )
  }
}
