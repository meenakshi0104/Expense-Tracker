
// -------------------   Master Component   -----------------------
import React, {useState,useEffect} from 'react';
import NewExpense from './components/NewExpenses/NewExpense'
import Expenses from './components/Expenses/Expenses';

let DUMMY_EXPENSE = [
    {
        date : new Date(2022, 1, 20),
        title : "DUMMY EXPENSE",
        amount : 200
    }

    // GET REQUEST 
    // fetch('') --URL
    // retun promise 
    // .then(response => response.json())
    // .then(data => console.log(data));
    
]
const App = () =>{

    // let expenseDate = new Date(2022, 5, 23); ------------------ 1st Way
    // let expenseTitle = "Car Insurance";
    // let expensePrice = 200;

    const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
    // Get Request for fetch api 
    useEffect(() => {
        // fetch('URL').then(
        //     response => {
        //         return response.json();
        //     }
        // ).then (
        //     data => {
        //         setExpenses(data);
        //     }
        // );
    }, []); // use effect tb tk ni chalega dubara jab uske under array m varibale change ho rha ho
                    
    const addExpenseData = (expense) => {
        const updatedExpense = [expense, ...expenses]
        setExpenses(updatedExpense);
    }
    return (
        <div>
            <NewExpense onAddExpenseData = {addExpenseData}/>
            {/* <h2> Lets Get Started !</h2> */}
            < Expenses item = {expenses}/>
           
        </div>
    ); 
    // JSX
     // return will return only 1 tag so we will wrap it for sending many tags 
     // css for every component will be different
}

export default App;