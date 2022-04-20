import ExpenseItem from "./components/ExpenseItem/ExpenseItem";
import NewExpense from "./components/NewExpense/NewExpense";
import {useState} from 'react'

const expenses = [
  {
    id: "e1",
    date: new Date(2021, 7, 14),
    amount: 94.12,
    title: "toilet paper",
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Isurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "NewDesk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },{
    id:"e5",
    title: "Detergent",
    amount: 213,
    date: new Date(2021,7,23)
  },
];


function App() {
  const [latestList, setLatestList] = useState(expenses);
  
const addExpenseHandler = (expense) => {
  setLatestList((prevState) =>{
    return [expense, ...prevState]
  })
};
  return (
    <div>
      <NewExpense expenseHandler={addExpenseHandler} />
      <ExpenseItem expenses={expenses} />
    </div>
  );
}

export default App;
