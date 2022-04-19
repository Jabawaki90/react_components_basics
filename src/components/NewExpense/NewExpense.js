import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (event) => {
    const expenseData = {
      ...event,
      id: Math.random().toString(),
    };
    props.expenseHandler(expenseData);
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
