import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  reviewSave: {},
  reviewList: {},
  reviewGet: {}
};

export const Review = createSlice({
  name: 'Review',
  initialState,
  reducers: {
    getReviewSave() {},
    setReviewSave: (state, action) => {
      state.reviewSave = action.payload;
    },
    getReviewList() {},
    setReviewList: (state, action) => {
      state.reviewList = action.payload;
    },
    getReviewGet() {},
    setReviewGet: (state, action) => {
      state.reviewGet = action.payload;
    },
    getReviewRemove() {},
    setReviewRemove: (state, action) => {
      state.reviewRemove = action.payload;
    }
  }
});

export const {
  getReviewSave,
  setReviewSave,
  getReviewList,
  setReviewList,
  getReviewGet,
  setReviewGet,
  getReviewRemove,
  setReviewRemove
} = Review.actions;

export default Review.reducer;
