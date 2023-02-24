import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeCategory: 0,
  activePaginationPage: 1,
};

const categorySort_and_PaginationSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setActivePaginationPage(state, action) {
      state.activePaginationPage = action.payload;
    },
    parseCategoryAndPages(state, action) {
      state.activeCategory = action.payload.activeCategory;
      state.activePaginationPage = action.payload.currentPages;
    },
  },
});

export const {
  setActiveCategory,
  setActivePaginationPage,
  parseCategoryAndPages,
} = categorySort_and_PaginationSlice.actions;
export default categorySort_and_PaginationSlice.reducer;
