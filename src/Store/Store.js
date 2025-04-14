import {configureStore} from '@reduxjs/toolkit'
import expenseReducer from '../Slicer/Slicer'

export const store = configureStore({
    reducer : expenseReducer
})