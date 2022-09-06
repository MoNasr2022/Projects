import './ExpenseForm.css'
import React, { useState } from 'react';



const ExpenseForm = (props) =>{
    
    const [enteredTitle, setEnteredTitle ] = useState('')
    const titleChangeHandler= event =>{
       setEnteredTitle(event.target.value)
    };
    const [enteredAmount, setEnteredAmount ] = useState('')
    const amountChangeHandler= event =>{
       setEnteredAmount(event.target.value)
    };
    const [enteredDate, setEnteredDate ] = useState('')
    const dateChangeHandler= event =>{
       setEnteredDate(event.target.value)
    };

    // const [userInput, setUserInput] = useState({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    // const titleChangeHandler= event =>{
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle: event.target.value
    //     // });
    //     setUserInput((prevState) => {
    //         return {...prevState, enteredTitle: event.target.value }
    //     })
    // }
    // const amountChangeHandler= event =>{
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredAmount: event.target.value
    //     // });
    //     setUserInput((prevState) =>{
    //         return {...prevState,enteredAmount: event.target.value}
    //     })
    // }
    //  const dateChangeHandler= event =>{
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredDate: event.target.value
    //     // });
    //     setUserInput((prevState) =>{
    //         return {...prevState,enteredDate: event.target.value}
    //     })
    // }
    const submitHandler=(event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpensData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return(
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input
                   type='text'
                    value={enteredTitle}
                   onChange={titleChangeHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input
                 type='text'
                 value={enteredAmount}
                  min="0.01" step="0.01"
                   onChange={amountChangeHandler}
                />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input
                 type='date'
                 value={enteredDate}
                 min="2019-01-01" max="2022-12-31"
                  onChange={dateChangeHandler}
                />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit"> Add Expenses</button>
        </div>
    </form>
    )
};


export default ExpenseForm;