import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sortParam: 0,
  categoryFilter: ["rating", "price", "title"],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSortParam(state, action) {
      state.sortParam = action.payload;
    },
  },
});

export const { setSortParam } = filterSlice.actions;
export default filterSlice.reducer;
