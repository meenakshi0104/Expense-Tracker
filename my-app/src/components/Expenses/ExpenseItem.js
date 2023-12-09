// import React, { useState } from 'react';
import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card';

const ExpenseItem = (props) => {

    // const [newTitle, setNewTitle] = useState("");

    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     setTitle(newTitle);
    // }

    // const clickChange = (event) => {
    //     setNewTitle(event.target.value);
    // }
    return (
        <Card className = "expense-item ">
            <ExpenseDate date = {new Date(props.date)} />
            <div className = "expense-item__description">
                <h2> {props.title} </h2> 
                <div className = "expense-item__price"> ${props.amount} </div>           
            </div>
            {/* onClick Event */}
            {/* <input tyle="text" value = {newTitle} onChange = {clickChange} />
            <button onClick = { clickHandler }> Change Title </button> */}
        </Card>
    );
}

export default ExpenseItem;

// Component k under data ko kasie krenge usko props khte h
//toISOString()