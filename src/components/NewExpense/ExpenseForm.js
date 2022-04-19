import { useState } from "react";
const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState("");
  // const [enteredAmount, setEnterAmount] = useState("");
  // const [enterDate, setEnterDate] = useState("");

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enterDate: "",
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
    setUserInput((prev) => {
      return { ...userInput, enteredTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    // setEnterAmount(event.target.value);
    setUserInput({ ...userInput, enteredAmount: event.target.value });
  };

  const enterDateChangeHandler = (event) => {
    // setEnterDate(event.target.value);
    setUserInput({ ...userInput, enterDate: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = userInput;

    props.onSaveExpenseData(expenseData);
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enterDate: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={userInput.enteredAmount}
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={userInput.enterDate}
          min="2021-01-01"
          max="2022-12-31"
          onChange={enterDateChangeHandler}
        />
      </div>
      <button>Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
