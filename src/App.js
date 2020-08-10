import React, { Component } from 'react';
import './App.css';
import Income from './Components/Income'
import RecurringExpenses from './Components/RecurringExpenses'
import OneOffExpenses from './Components/OneOffExpenses'

class App extends Component {
  // Income functions
  constructor() {
    super()
    this.state = {
      totalIncome: 0,
      addedIncome: {
        Revenue: 0,
      },
      totalExpense: 0,
      addedExpense: {
        Expense: 0,
      },
      totalMiscExpense: 0,
      addedMiscExpense: {
        MiscExpense: 0,
      }
    };
  }
  createIncome = (e) => {
    console.log(e);
    let addedIncome = this.state.addedIncome;
    addedIncome[e.target.value] = 0;
    this.setState({
      addedIncome
    })
  };
  
  setAmount = (e) => {
    let addedIncome = this.state.addedIncome;
    addedIncome[e.target.name] = e.target.value;
        
    let totalIncome = 0;
    for (let value in addedIncome) {
      totalIncome += parseInt(addedIncome[value], 10)
    }

    this.setState({
      addedIncome,
      totalIncome
    })
  };
  // Expense functions

  createExpense = (e) => {
    console.log(e);
    let addedExpense = this.state.addedExpense;
    addedExpense[e.target.value] = 0;
    this.setState({
      addedExpense
    })
  };

  setExpenseAmount = (e) => {
    let addedExpense = this.state.addedExpense
    addedExpense[e.target.name] = e.target.value
    let totalExpense = 0;
    for (let value in addedExpense) {
      totalExpense += parseInt(addedExpense[value], 10)
    }

    this.setState({
      addedExpense,
      totalExpense
    })
  };
    
  // Misc. Expenses functions
  createMiscExpense=(e)=>{
        console.log(e);
        let addedMiscExpense = this.state.addedMiscExpense;
        addedMiscExpense[e.target.value] = 0;
        this.setState({
            addedMiscExpense
        })
    }
  setMiscAmount = (e) => {
    let addedMiscExpense = this.state.addedMiscExpense
    addedMiscExpense[e.target.name] = e.target.value
    let totalMiscExpense = 0;
    for (let value in addedMiscExpense) {
      totalMiscExpense += parseInt(addedMiscExpense[value], 10)
    }

    this.setState({
      totalMiscExpense,
      addedMiscExpense
    })
  }
//NEXT STEPS//
  //weekly savings

  //goals met

  // need to think about how to structure our data to manipulate and how much percentage of each category


  render() {
    return (
      <>
        <header>
          <p>This works</p>
        </header>
        <Income createIncome={this.createIncome} setAmount={this.setAmount} addedIncome={this.state.addedIncome} totalIncome={this.state.totalIncome} />
        <RecurringExpenses createExpense={this.createExpense} setExpenseAmount={this.setExpenseAmount} addedExpense={this.state.addedExpense} totalExpense={this.state.totalExpense} />
        <OneOffExpenses createMiscExpense={this.createMiscExpense} setMiscAmount={this.setMiscAmount} addedMiscExpense={this.state.addedMiscExpense} totalMiscExpense={this.state.totalMiscExpense}/>
      </>
    )
  }
}


export default App;
