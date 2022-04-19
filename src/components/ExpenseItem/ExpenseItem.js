import "./ExpenseItem.css";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function ExpenseItem(props) {
  const [year, setYear] = useState("2022");
  const onChangeHandler = (selectedYear) => {
    console.log("Expenses");
    setYear(selectedYear);
  };
  return (
    <div>
      <ExpenseFilter selected={year} onFilterChange={onChangeHandler} />
      <div className="expense-item">
        <div>{props.expenses[0].date.toString()}</div>
        <div className="expense-item__description">
          <h2>{props.expenses[0].title}</h2>
          <div className="expense-item__price">${props.expenses[0].amount}</div>
        </div>
        <button>Change Title</button>
      </div>
      <div className="expense-item">
        <div>{props.expenses[1].date.toString()}</div>
        <div className="expense-item__description">
          <h2>{props.expenses[1].title}</h2>
          <div className="expense-item__price">${props.expenses[1].amount}</div>
        </div>
        <button>Change Title</button>
      </div>
      <div className="expense-item">
        <div>{props.expenses[2].date.toString()}</div>
        <div className="expense-item__description">
          <h2>{props.expenses[2].title}</h2>
          <div className="expense-item__price">${props.expenses[2].amount}</div>
        </div>
        <button>Change Title</button>
      </div>
      <div className="expense-item">
        <div>{props.expenses[3].date.toString()}</div>
        <div className="expense-item__description">
          <h2>{props.expenses[3].title}</h2>
          <div className="expense-item__price">${props.expenses[3].amount}</div>
        </div>
        <button>Change Title</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
