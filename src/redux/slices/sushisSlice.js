import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// useEffect(() => {
//   axios.get('http://localhost:3000/db.json').then(({ data }) => {
//     setPizzas(data.pizzas);
//   });
// }, []);

// export const fetchMenu = createAsyncThunk('menu/fetchMenuStatus', async () => {
//   const { data } = await axios.get(`http://localhost:3000/db.json`);

//   return data;
// });

const initialState = {
  status: 'loading',
  items: [],
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  //   extraReducers: (builder) => {
  //     builder.addCase(fetchMenu.pending, (state) => {
  //       state.status = 'loading';
  //       state.items = [];
  //     });
  //     builder.addCase(fetchMenu.fulfilled, (state, action) => {
  //       state.items = action.payload;
  //       state.status = 'succes';
  //     });
  //     builder.addCase(fetchMenu.rejected, (state) => {
  //       state.status = 'error';
  //       state.items = [];
  //     });
  //   },
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
