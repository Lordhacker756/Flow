import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const userLogin = createAsyncThunk('login', () => {
    AsyncStorage.setItem(
        'user', 'true'
    )
    return true
})

const userLogout = createAsyncThunk('logout', () => {
    AsyncStorage.setItem(
        'user', 'false'
    )
    return true
})

const getUser = createAsyncThunk('session', async () => {
    try {
        const user = await AsyncStorage.getItem('user');
        if (user === 'true') {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
})


const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: 'false'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(userLogin.pending, (state, action) => {
            state.user = 'pending'
            console.log("Logging in user")
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.user = 'true'
            console.log("User logged In Successfully")
        })
        builder.addCase(userLogout.pending, (state, action) => {
            state.user = 'pending'
        })
        builder.addCase(userLogout.fulfilled, (state, action) => {
            state.user = 'false'
        })
        builder.addCase(getUser.pending, (state, action) => {
            state.user = 'pending'
            console.log("Fetching the value from AsyncStorage")
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            if (action.payload) {
                state.user = 'true'
                console.log("User found in localstorage")
            }
            else {
                state.user = 'false'
                console.log("User not found in localstorage")
            }
        })
        builder.addCase(getUser.rejected, (state, action) => {
            console.log("User not found in localstorage", action.payload)
            state.user = 'false'
        }
        )
    }
})

export const { } = userSlice.actions
export default userSlice.reducer

export { userLogin, userLogout, getUser }