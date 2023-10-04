import { configureStore } from "@reduxjs/toolkit";
import pesReducer from "./pessoaSlice";

export const store = configureStore({
    reducer: {
        pes: pesReducer
    },
    devTools: true,
});