import { useState } from "react/cjs/react.development";

const ExpenseForm = () => {
  return (
    <form>
      <div>
        <label>Title</label>
        <input type="text" />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" />
      </div>
      <div>
        <label>Date</label>
        <input type="date" min="2021-01-01" max="2022-12-31" />
      </div>
    </form>
  );
};

export default ExpenseForm;
