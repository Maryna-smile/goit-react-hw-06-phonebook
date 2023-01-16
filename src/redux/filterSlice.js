const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },

  reducers: {
    getFilterValue(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { getFilterValue } = filterSlice.actions;
export default filterSlice.reducer;
