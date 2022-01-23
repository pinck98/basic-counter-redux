import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name : 'users',
    initialState : {
        name : '',
        eMail : ''
    },
    reducers : {
        addUser : (state, action) => {
            state.name = action.payload.name
            state.eMail = action.payload.eMail
        }
    }
})

export const {addUser} = userSlice.actions
export default userSlice.reducer