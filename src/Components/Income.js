import React, { Component } from 'react'

class Income extends Component {
    constructor(){
        super()
        this.state={
            totalIncome: 0,
            addedIncome:{
                Revenue:'',
            }
        }
    }

    createIncome=(e)=>{
        console.log(e);
        let addedIncome = this.state.addedIncome;
        addedIncome[e.target.value] = '0';
        this.setState({
            addedIncome
        })
    }

    setAmount=(e)=>{
        let addedIncome = this.state.addedIncome
        addedIncome[e.target.name] = e.target.value
        this.setState({
            addedIncome
        })
    }

    render(){
        return(
            <div>
                <h2>Income</h2>
                {Object.keys(this.state.addedIncome).map((income)=>{
                    return(
                        <div>
                            <h3>{income}</h3>
                            <input type="text" name={income} value={this.state.addedIncome[income]} onChange={this.setAmount}/>
                        </div>
                    )
                })}
                <label htmlFor="addIncome">Add More</label>
                <select name="addIncome" defaultValue="BLANK" onChange={this.createIncome} >
                    <option value="BLANK" disabled={true} >Add Other Incomes</option>
                    <option value="Allowances">Allowances</option>
                    <option value="Other Income">Other</option>
                </select>
                <h2>Total Income</h2>
                <p>{this.state.totalIncome}</p>
            </div>
        )}
}

export default Income