import React, { Component } from 'react';
import './App.css';
import Income from './Components/Income'
import RecurringExpenses from './Components/RecurringExpenses'

class App extends Component {
  render(){
    return(
      <>
        <header>
          <p>This works</p>
        </header>
        <Income />
        <RecurringExpenses />
      </>
    )
  }
}

export default App;
