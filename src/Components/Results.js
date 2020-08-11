import React, { Component } from 'react'

class Results extends Component {
    

    render(){
        return(
            <div>
                <h2>Weekly Savings</h2>
                <p>${this.props.userResults.totalIncome - this.props.userResults.totalExpense - this.props.userResults.totalMiscExpense}</p>

                <h2>Percentage of Expenses</h2>
                {Object.keys(this.props.userResults.addedExpense).map((expense)=>{
                    
                    return (
                        <p>{expense}%{parseInt(this.props.userResults.addedExpense[expense], 10)/ this.props.userResults.totalExpense * 100}</p>
                        )
                })}

                <h2>Percentage of One Off Expenses</h2>
                {Object.keys(this.props.userResults.addedMiscExpense).map((miscExpense)=>{
                    return(   
                        <p>${miscExpense}%{parseInt(this.props.userResults.addedMiscExpense[miscExpense], 10) / this.props.userResults.totalMiscExpense}</p>
                    )
                })}
            </div>
        )}
}

export default Results