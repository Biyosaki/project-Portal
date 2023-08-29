import { createSlice } from "@reduxjs/toolkit";

const initialState = 'light'

const userSlice = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setMode: (state, {payload}) => {
            localStorage.setItem('mode', JSON.stringify(payload))
            state = payload
            return state
        }
    }
})

export const {setMode} = userSlice.actions;

export default userSlice.reducer;