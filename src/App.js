import './App.css';
import Chart from './Chart';
import React, { Component } from 'react';

export default class App extends Component {
  state = {
    data:[12,5,6,6,9,10],
    width:700,
    height:500,
  }
  render() {
    return (
      <div className='App'>
        <Chart data={this.state.data} width={this.state.width} height={this.state.height}/>
        
      </div>
    );
  }
}


