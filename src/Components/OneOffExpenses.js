import React, { Component } from 'react'

class OneOffExpenses extends Component {
    // constructor(){
    //     super()
    //     this.state={
    //         totalMiscExpense: 0,
    //         addedMiscExpense:{
    //             MiscExpense: 0,
    //         }
    //     }
    // }

    // createMiscExpense=(e)=>{
    //     console.log(e);
    //     let addedMiscExpense = this.state.addedMiscExpense;
    //     addedMiscExpense[e.target.value] = 0;
    //     this.setState({
    //         addedMiscExpense
    //     })
    // }

    // setAmount=(e)=>{
    //     let addedMiscExpense = this.state.addedMiscExpense
    //     addedMiscExpense[e.target.name] = e.target.value
    //     let totalMiscExpense = 0;
    //     for (let value in addedMiscExpense){
    //         totalMiscExpense += parseInt(addedMiscExpense[value], 10)
    //     } 

    //     this.setState({
    //         addedMiscExpense,
    //         totalMiscExpense
    //     })
    // }
    render() {
        return (
          <div>
                <h2>One Off Expenses</h2>
                {Object.keys(this.props.addedMiscExpense).map((expenses)=>{
                    return(
                        <div>
                            <h3>{expenses}</h3>
                            <input type="number" name={expenses} value={this.props.addedMiscExpense[expenses]} onChange={this.props.setMiscAmount}/>
                        </div>
                    )
                })}
                <label htmlFor="addMiscExpense">Add More</label>
                <select name="addMiscExpense" defaultValue="BLANK" onChange={this.props.createMiscExpense} >
                    <option value="BLANK" disabled={true} >Add Other One Off Expenses</option>
                    <option value="Movies">Movies</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Toiletries">Toiletries</option>
                    <option value="Food">Food (Excess)</option>
                    <option value="PetVet">Pet (Vet)</option>
                </select>
                <h2>Total Expense</h2>
                <p>{this.props.totalMiscExpense}</p>
            </div>
      )
  };
};

export default OneOffExpenses;