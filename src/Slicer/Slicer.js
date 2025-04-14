import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    expense: JSON.parse(localStorage.getItem("expenses")) || [],
    search: []
}

export const expenseSlice = createSlice({
    name:'expense',
    initialState,
    reducers: {
        addExpense : (state,action) => {
        state.expense = [action.payload, ...(state.expense || [])];
          localStorage.setItem("expenses", JSON.stringify(state.expense)); 
        },
        removeExpense: (state,action) => {
        state.expense = state.expense.filter((item) => item.id != action.payload ? [item] : console.log('some'))
        localStorage.setItem("expenses", JSON.stringify(state.expense));
        },
        addSearch: (state,action) => {
            state.search = action.payload
        }
    }
})

export const{addExpense,removeExpense,addSearch} = expenseSlice.actions

export default expenseSlice.reducer