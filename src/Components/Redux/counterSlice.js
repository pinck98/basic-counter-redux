import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
      increament : (state) => {
          state.counter += 1
      },
      decreament : (state) => {
        state.counter -= 1
    }
  },
});

// Action creators are generated for each case reducer function
export const { increament, decreament } = counterSlice.actions;

export default counterSlice.reducer;
