import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <div>
      <div className="expense-item">
        <div>{props.expenses[0].date.toString()}</div>
        <div className="expense-item__description">
          <h2>{props.expenses[0].title}</h2>
          <div className="expense-item__price">${props.expenses[0].amount}</div>
        </div>
      </div>
      <div className="expense-item">
        <div>{props.expenses[1].date.toString()}</div>
        <div className="expense-item__description">
          <h2>{props.expenses[1].title}</h2>
          <div className="expense-item__price">${props.expenses[1].amount}</div>
        </div>
      </div>
      <div className="expense-item">
        <div>{props.expenses[2].date.toString()}</div>
        <div className="expense-item__description">
          <h2>{props.expenses[2].title}</h2>
          <div className="expense-item__price">${props.expenses[2].amount}</div>
        </div>
      </div>
      <div className="expense-item">
        <div>{props.expenses[3].date.toString()}</div>
        <div className="expense-item__description">
          <h2>{props.expenses[3].title}</h2>
          <div className="expense-item__price">${props.expenses[3].amount}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
