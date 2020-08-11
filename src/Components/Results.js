import React, { Component } from 'react'

class Results extends Component {
    

    render(){
        return(
            <div>
                <h2>Weekly Savings</h2>
                <p>${this.props.userResults.totalIncome - this.props.userResults.totalExpense - this.props.userResults.totalMiscExpense}</p>
            </div>
        )}
}

export default Results