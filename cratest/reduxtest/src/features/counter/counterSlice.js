import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};
//slice생성하기
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //dispatch()함수로 호출해서 사용하는 데이터 조작함수들 정의
    //함수명이 action이 됨.
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
    setValue(state, action) {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, setValue } =
  counterSlice.actions;

export default counterSlice.reducer;
