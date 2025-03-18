import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface EventI {
  events: any;
}

const initVal: EventI = {
  events: null,
};

const eventSlice = createSlice({
  initialState: initVal,
  name: 'event',
  reducers: {
    setEvents(state, action: PayloadAction<any>) {
      state.events = action.payload;
    },
  },
});

export const { setEvents } = eventSlice.actions;

export default eventSlice.reducer;
