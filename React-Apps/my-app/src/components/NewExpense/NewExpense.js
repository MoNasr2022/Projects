import './NewExpense.css'

import ExpenseForm from './ExpenseForm';



const NewExpense = (props) =>{
    
    const saveExpensDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseData(expenseData)
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpensData={saveExpensDataHandler} />
        </div>
    );
}


export default NewExpense;