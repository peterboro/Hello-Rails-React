import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'
import greetingsReducer from '../greetings/greetings'


const store = configureStore({
    reducer: {
        greetings: greetingsReducer,
    }, middleware: [thunk],
});

export default store;