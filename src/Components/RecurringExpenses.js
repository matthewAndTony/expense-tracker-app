import React, { Component } from 'react'

class RecurringExpenses extends Component {
    constructor(){
        super()
        this.state={
            totalExpense: 0,
            addedExpense:{
                Expense: 0,
            }
        }
    }

    createExpense=(e)=>{
        console.log(e);
        let addedExpense = this.state.addedExpense;
        addedExpense[e.target.value] = 0;
        this.setState({
            addedExpense
        })
    }

    setAmount=(e)=>{
        let addedExpense = this.state.addedExpense
        addedExpense[e.target.name] = e.target.value
        let totalExpense = 0;
        for (let value in addedExpense){
            totalExpense += parseInt(addedExpense[value], 10)
        } 

        this.setState({
            addedExpense,
            totalExpense
        })
    }
    render() {
        return (
          <div>
                <h2>Recurring Expenses</h2>
                {Object.keys(this.state.addedExpense).map((expenses)=>{
                    return(
                        <div>
                            <h3>{expenses}</h3>
                            <input type="text" name={expenses} value={this.state.addedExpense[expenses]} onChange={this.setAmount}/>
                        </div>
                    )
                })}
                <label htmlFor="addExpense">Add More</label>
                <select name="addExpense" defaultValue="BLANK" onChange={this.createExpense} >
                    <option value="BLANK" disabled={true} >Add Other Expenses</option>
                    <option value="Rent">Rent</option>
                    <option value="Util">Util</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Food">Food (budgeted)</option>
                    <option value="Internet">Internet</option>
                    <option value="Streaming Services">Streaming Services</option>
                    <option value="Medical">Medical</option>
                    <option value="Car">Car</option>
                    <option value="Insurance">Insurance</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Pet">Pet Food</option>
                    <option value="Other Expenses">Other</option>
                </select>
                <h2>Total Expense</h2>
                <p>{this.state.totalExpense}</p>
            </div>
      )
  };
};

export default RecurringExpenses;