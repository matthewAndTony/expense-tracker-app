import React, { Component } from 'react'

class RecurringExpenses extends Component {
    
    render() {
        return (
          <div>
                <h2>Recurring Expenses</h2>
                {Object.keys(this.props.addedExpense).map((expenses)=>{
                    return(
                        <div>
                            <h3>{expenses}</h3>
                            <input type="number" name={expenses} value={this.props.addedExpense[expenses]} onChange={this.props.setExpenseAmount}/>
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
                <p>{this.props.totalExpense}</p>
            </div>
      )
  };
};

export default RecurringExpenses;