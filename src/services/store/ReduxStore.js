import { configureStore } from '@reduxjs/toolkit'
import {default as chartDataReducer} from "../slices/chartDataSlice";

export default configureStore({
    reducer: {
        chartDataReducer : chartDataReducer
    },
})