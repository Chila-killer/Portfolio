import { createSlice } from "@reduxjs/toolkit";

const actualPageSlice = createSlice({
    name: "actualPage",
    initialState: null,
    reducers: {
        setActualPage: (state, action) => {
            const newActualPage = action.payload
            return newActualPage
        }
    }
})

export const {setActualPage} = actualPageSlice.actions
export default actualPageSlice.reducer