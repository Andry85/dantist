import { createSlice } from '@reduxjs/toolkit'


export interface UserState {
  login: boolean
}

const initialState: UserState = {
  login: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logIn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.login = true;
    },
    logOut: (state) => {
      state.login = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const {logIn, logOut} = userSlice.actions

export default userSlice.reducer