import { configureStore } from "@reduxjs/toolkit";
import actualPageSlice from "./slices/actualPage.slice";

export default configureStore({
    reducer: {
       actualPage: actualPageSlice
    }
})