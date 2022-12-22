// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import cookie from "react-cookies";
// import { toast } from "react-toastify";
// import { useSelector, useDispatch } from "react-redux";
// const url = process.env.REACT_APP_URL;

// // get all
// export const getAllRecords = createAsyncThunk(
//   "records/getAllRecords",
//   async (data, thunkApi) => {
//     const { rejectWithValue } = thunkApi;

//     try {
//       let response = await axios.get('http://localhost:3030/v1/records', {
//         headers: {
//           authorization: `Bearer ${cookie.load("token")}`,
//         },
//       });
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response.data.error);
//     }
//   }
// );
// // Add service
// export const addRecord = createAsyncThunk("records/addRecord", async (arg, thunkApi) => {
//   const { rejectWithValue,dispatch } = thunkApi;
//   try {
//     const req = await axios.post('http://localhost:3030/v1/records', arg, {
//       headers: {
//         authorization: `Bearer ${cookie.load("token")}`,
//       },
//     });
//       dispatch(getAllRecords()); 
//     return req.data;
//   } catch (error) {
//     return rejectWithValue(error.response.data);
//   }
// });

// //// delete selected record
// // export const deleteOneRecord= createAsyncThunk(
// //   "records/deleteOneRecord",
// //   async (id, thunkApi) => {
// //     const { rejectWithValue, dispatch } = thunkApi;
// //     try {
// //       let response = await axios.delete(`${url}/records/${id}`, {
// //         headers: {
// //           authorization: `Bearer ${cookie.load("token")}`,
// //         },
// //       });
// //       dispatch(getAllRecords());
// //       return id;
// //     } catch (error) {
// //       return rejectWithValue(error.response);
// //     }
// //   }
// // );
// // My record
// // export const getMyecords = createAsyncThunk("records/myRecord", async (data, thunkApi) => {
// //   const { rejectWithValue } = thunkApi;
// //   try {
// //     let response = await axios.get(`${url}/myRecord`, {
// //       headers: {
// //         authorization: `Bearer ${cookie.load("token")}`,
// //       },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     return rejectWithValue(error.response.data.message);
// //   }
// // });
// const initialState = {
//   allRecords: [],
//   isLoading: false,
//   error: null,
// };

// const recordsSlice = createSlice({
//   name: "records",
//   initialState,
//   reducers: {},
//   extraReducers: {
//     // **********getAllRecords**********
//     [getAllRecords.fulfilled]: (state, action) => {
//       state.allRecords = action.payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     [getAllRecords.pending]: (state, action) => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     [getAllRecords.rejected]: (state, action) => {
//       state.error = action.payload;
//       state.isLoading = false;
//     },
   
//     //****************post****************
//     [addRecord.fulfilled]: (state, action) => {
//         state.allRecords.push(action.payload);
//        state.isLoading = false;
//       toast.error(`${action.payload.status}`, { autoClose: false });
//     },
//     [addRecord.pending]: (state, action) => {
//       state.isLoading = true;
//     },
//     [addRecord.rejected]: (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
     
//     },

//     //************************* delete record///////////////*/
//   //   [deleteOneRecord.fulfilled]: (state, action) => {
//   //     state.isLoading = false;
//   //     state.error = null;
//   //     toast.success(`Deleted successfully`);
//   //   },
//   //   [deleteOneRecord.pending]: (state, action) => {
//   //     state.isLoading = true;
//   //     state.error = null;
//   //   },
//   //   [deleteOneRecord.rejected]: (state, action) => {
//   //     state.error = action.payload;
//   //     state.isLoading = false;
//   //   },
//   },
// });

// export default recordsSlice.reducer;
