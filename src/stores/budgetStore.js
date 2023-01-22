import create from 'zustand';

import {devtools, persist} from 'zustand/middleware'

const initialState = {
  budgetTotal: 10000,
  expenses: 0,
  expensesList: [],
}
const budgetStore = (set) => ({
    ...initialState,
    changeBudgetTotal: (newBudget) => {
      set(() => ({
        budgetTotal: newBudget
      }))
    },
    addExpense: (expense) => {
      set((state) => ({
        expenses: parseInt(state.expenses) + parseInt(expense)
      }))
    },
    addExpenseToList: (expenseItem) => {
      set((state) => ({
        expensesList: [...state.expensesList, expenseItem]
      }))
    },
    clear: () => {
      set(() => (initialState));
      sessionStorage.clear(); // or localStorage.clear();
    },
})

const useBudgetStore = create(
    devtools(
        persist(budgetStore, {
            name: "budget",
        })
    )
)


export default useBudgetStore;
