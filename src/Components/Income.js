import React, { Component } from 'react'

class Income extends Component {
    

    render(){
        return(
            <div>
                <h2>Income</h2>
                {Object.keys(this.props.addedIncome).map((income)=>{
                    return(
                        <div>
                            <h3>{income}</h3>
                            <input type="number" name={income} value={this.props.addedIncome[income]} onChange={this.props.setAmount}/>
                        </div>
                    )
                })}
                <label htmlFor="addIncome">Add More</label>
                <select name="addIncome" defaultValue="BLANK" onChange={this.props.createIncome} >
                    <option value="BLANK" disabled={true} >Add Other Incomes</option>
                    <option value="Allowances">Allowances</option>
                    <option value="Other Income">Other</option>
                </select>
                <h2>Total Income</h2>
                <p>${this.props.totalIncome}</p>
            </div>
        )}
}

export default Income