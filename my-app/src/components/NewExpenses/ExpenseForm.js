import React,{ useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const[enteredTitle, setEnteredTitle] = useState('');
    const[enteredAmount, setEnteredAmount] = useState('');
    const[enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
       setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault(); // Jo bhi default nature h vo band kiya jay like page refersh
        // two way binding
        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
        <div>
            <form onSubmit = {submitHandler}>
                <div className = "new-expense__controls">
                    <div className = "new-expense__control">
                        <label>Title</label>
                        {/* onChange event Handler */}
                        <input type = "text" value={enteredTitle} onChange={titleChangeHandler} />      
                    </div>
                    <div className = "new-expense__control">
                        <label>Amount</label>
                        <input type = "text" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                    </div>
                    <div className = "new-expense__control">
                        <label>Date</label>
                        <input type = "date" value={enteredDate} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className = "new-expense__actions">
                    <button type="submit">Add Expense </button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;