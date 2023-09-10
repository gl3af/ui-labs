import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Status = "loading" | "active" | "results";

type FirstState = {
  values: number[];
  test: number;
  status: Status;
  answer: number[];
};

const initialState: FirstState = {
  values: [],
  test: 0,
  status: "loading",
  answer: [],
};

const firstSlice = createSlice({
  name: "first",
  initialState,
  reducers: {
    setValues: (state, action: PayloadAction<number[]>) => {
      state.values = action.payload;
    },
    setStatus: (state, action: PayloadAction<Status>) => {
      state.status = action.payload;
    },
    nextTest: (state) => {
      state.test += 1;
    },
    addAnswer: (state, action: PayloadAction<number>) => {
      state.answer.push(action.payload);
    },
    removeAnswer: (state, action: PayloadAction<number>) => {
      const index = state.answer.indexOf(action.payload);
      state.answer.splice(index, 1);
    },
    resetAnswer: (state) => {
      state.answer = [];
    },
  },
});

export const {
  setValues,
  setStatus,
  nextTest,
  addAnswer,
  removeAnswer,
  resetAnswer,
} = firstSlice.actions;
export default firstSlice.reducer;
