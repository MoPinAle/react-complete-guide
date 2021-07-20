import React, { useState } from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expense.title);
    console.log('ExpenseItem evaluated by React');

    const clickHandler = () => {
        setTitle('Updated!!!');
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expense.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.expense.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    ) 
}

export default ExpenseItem;