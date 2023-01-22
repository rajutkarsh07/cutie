import React, { useState } from "react";
import useBudgetStore from "../stores/budgetStore";
import "./budgetTracker.css";

const BudgetTracker = () => {
  const changeBudgetTotalHandler = useBudgetStore(
    (state) => state.changeBudgetTotal
  );
  const prevTotalBudget = useBudgetStore((state) => state.budgetTotal);
  const moneySpent = useBudgetStore((state) => state.expenses);
  let warning = "";

  if (moneySpent >= prevTotalBudget) {
    warning = "You have reached your budget limit";
    alert("You have reached your budget limit");
  } else if (prevTotalBudget - moneySpent < 1001) {
    warning = "You are about to reach your budget limit";
    alert("You are about to reach your budget limit");
  }

  function budgetSubmit(e) {
    e.preventDefault();
    let budget = prompt("Enter your monthly expense limit", prevTotalBudget);
    console.log(budget);
    if (!budget || budget < 0) {
      alert("Input cannot be empty or negative");
      budgetSubmit();
    }
    changeBudgetTotalHandler(budget);
  }

  const [expense, setExpense] = useState("");
  const [expenseDesc, setExpenseDesc] = useState("");
  const addExpenseHandler = useBudgetStore((state) => state.addExpense);
  const addExpenseListHandler = useBudgetStore(
    (state) => state.addExpenseToList
  );
  const expensesList = useBudgetStore((state) => state.expensesList);

  function addExpense(e) {
    e.preventDefault();
    if (!expense || expense < 0) {
      alert("Input cannot be empty or negative");
      return;
    }
    addExpenseHandler(expense);
    addExpenseListHandler({
      expenseDesc,
      expense,
    });
    setExpense("");
    setExpenseDesc("");
  }

  const clear = useBudgetStore((state) => state.clear);
  function resetHandler(e) {
    e.preventDefault();
    clear();
  }

  return (
    <div>
      <button onClick={budgetSubmit} className="btn-primary">
        Enter your monthly budget
      </button>
      <button onClick={resetHandler} className="btn-primary">
        Reset/Clear
      </button>
      <h2>Total Monthly Budget: {prevTotalBudget}</h2>
      <h2>Money Spent: {moneySpent}</h2>

      <div className="warning">{warning}</div>
      <div className="flexBox">
        <form className="expense-container" onSubmit={addExpense}>
          <textarea
            rows={5}
            type="text"
            className="exp-desc"
            placeholder="Expense Desc"
            onChange={(e) => setExpenseDesc(e.target.value)}
            value={expenseDesc}
          />
          <input
            type="number"
            className="exp-amount"
            placeholder="Add expense amount"
            onChange={(e) => setExpense(e.target.value)}
            value={expense}
          />
          <button type="submit" className="submit">
            Add Expense
          </button>
        </form>

        <div className="expensesList">
          <h4>Expenses List</h4>
          {expensesList.map((expense, index) => {
            return (
              <div className="expense-item" key={index}>
                <p>{expense.expenseDesc}</p>
                <p>{expense.expense}</p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BudgetTracker;
