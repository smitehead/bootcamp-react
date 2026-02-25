import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};
// 비동기로 서버에 요청을 전송하는 함수
export const requestPost = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      if (!response.ok)
        throw new Error("요청 실패 게시글정보를 가져올 수 없습니다.");
      const data = await response.json();
      // return한 값은  action.payload에 저장이 됨.
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  //비동기 처리 관련 내용을 설정하는 속성 -> createAsyncThunk()함수를 활용해서 선언
  extraReducers: (builder) => {
    builder
      //요청 처리중...
      .addCase(requestPost.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //요청처리완료...
      .addCase(requestPost.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      //요청 실패....
      .addCase(requestPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default postsSlice.reducer;
