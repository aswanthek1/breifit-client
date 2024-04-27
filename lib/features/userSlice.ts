import { AuthorType } from '@/utils/authorUtils';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Get } from '../axios';

export const fetchUserDetails = createAsyncThunk(
    'auction/fetchArchievedEvents',
    async () => {
        const { data } = await Get('/author/authenticate')
        // console.log(data?.authorData, 'at redux thunk')
        return {
            author: data?.authorData,
        }
    }
)

export interface userState {
    author: AuthorType,
    loading: boolean,
    error: any,
    isLoggedIn: boolean
}

export const initialState: userState = {
    author: {
        name: "",
        email: "",
        company_name: "",
        proffession: "",
        image: "",
        role: ""
    },
    loading: false,
    error: null,
    isLoggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateState: (state, action) => {
            state.author = action.payload.author,
                state.isLoggedIn = action.payload.isLoggedIn
        },
        clearState: (state) => {
            state.author = {
                name: "",
                email: "",
                company_name: "",
                proffession: "",
                image: "",
                role: ""
            }
            state.isLoggedIn = false
            state.loading = false
            state.error = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.author = action.payload.author;
            state.isLoggedIn = true;
        });
        builder.addCase(fetchUserDetails.rejected, (state) => {
            state.loading = false;
            state.isLoggedIn = false;
        });
    },

})

export const { updateState, clearState } = userSlice.actions;
export default userSlice.reducer