import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";


const initialState = {
    status: 'loggedOut',
    userData: []
}

// Defining async thunk
const userLogin = createAsyncThunk(
    // Naming convention is slice/reducerName
    'user/userLogin',
    async (data, thunkAPI) => {
        try {
            await AsyncStorage.setItem('user', JSON.stringify(data));
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

const userLogout = createAsyncThunk(
    'user/userLogout',
    async () => {
        try {
            AsyncStorage.removeItem('user');
            return true;
        } catch (error) {
            console.log('Error logging out: ', error)
        }
    }
)
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state) => {
            state.status = 'loggingIn';
            state.userData = [];
        }),

            builder.addCase(userLogin.fulfilled, (state, action) => {
                state.status = 'loggedIn';
                state.userData = action.payload.data;
            }),
            builder.addCase(userLogin.rejected, (state, action) => {
                state.status = 'loggedOut';
                state.userData = [];
            }
            ),

            builder.addCase(userLogout.pending, () => {
                console.log("logging out user")
            }),

            builder.addCase(userLogout.fulfilled, () => {
                console.log("User Logged out")
            })
    }
})

export { userLogin, userLogout };
export default userSlice.reducer;