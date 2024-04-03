import { createSlice } from "@reduxjs/toolkit";

const searhcSlice = createSlice({
    name: 'search',
    initialState: {

    },
    reducers: {
        cacheResults: (state, action) => {
            state = Object.assign(state, action.payload)
        }
    }
});
export const {cacheResults} = searhcSlice.actions;
export default searhcSlice.reducer;