import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
  render() {
    return(
      <div className="App one">
        <div><button className="btn"><Link to="/">Home</Link></button></div>
        <div><button className="btn"><Link to="/about">About</Link></button></div>
        <div><button className="btn"><Link to="/portfolio">Portfolio</Link></button></div>
      </div>
    )
  }
}
