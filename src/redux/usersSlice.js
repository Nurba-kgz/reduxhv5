import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
});

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        loading: false,
        error: null,
        selectedUser: null,
    },
    reducers: {
        selectUser(state, action) {
            state.selectedUser = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { selectUser } = usersSlice.actions;

export const selectAllUsers = (state) => state.users.list;
export const selectSelectedUser = (state) => state.users.selectedUser;

export default usersSlice.reducer;