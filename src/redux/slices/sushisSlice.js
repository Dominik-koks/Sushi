import { createSlice } from '@reduxjs/toolkit';

// export const fetchMenu = createAsyncThunk('menu/fetchMenuStatus', async () => {
//   const { data } = await axios.get(`http://localhost:3000/db.json`);

//   return data;
// });

const initialState = {
  status: 'loading',
  menu: [],
};

export const sushiSlice = createSlice({
  name: 'sushi',
  initialState,
  reducers: {
    setMenu(state, action) {
      state.menu = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchMenu.pending, (state) => {
  //     state.status = 'loading';
  //     state.items = [];
  //   });
  //   builder.addCase(fetchMenu.fulfilled, (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'succes';
  //   });
  //   builder.addCase(fetchMenu.rejected, (state) => {
  //     state.status = 'error';
  //     state.items = [];
  //   });
  // },
});

export const { setMenu } = sushiSlice.actions;

export default sushiSlice.reducer;
