import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface UserI {
  teams: any;
  admins: any;
}

const initVal: UserI = {
  teams: null,
  admins: null,
};

const userSlice = createSlice({
  initialState: initVal,
  name: 'user',
  reducers: {
    setTeams(state, action: PayloadAction<any>) {
      state.teams = action.payload;
    },
    setAdmins(state, action: PayloadAction<any>) {
      state.admins = action.payload;
    },
  },
});

export const { setTeams, setAdmins } = userSlice.actions;

export default userSlice.reducer;
