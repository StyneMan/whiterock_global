import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface ProgramI {
  programs: any;
  summerPrograms: any;
  vocationalPrograms: any;
  languagePrograms: any;
}

const initVal: ProgramI = {
  programs: null,
  summerPrograms: null,
  languagePrograms: null,
  vocationalPrograms: null,
};

const programSlice = createSlice({
  initialState: initVal,
  name: 'program',
  reducers: {
    setPrograms(state, action: PayloadAction<any>) {
      state.programs = action.payload;
    },
    setSummerPrograms(state, action: PayloadAction<any>) {
      state.summerPrograms = action.payload;
    },
    setVocationalPrograms(state, action: PayloadAction<any>) {
      state.vocationalPrograms = action.payload;
    },
    setLanguagePrograms(state, action: PayloadAction<any>) {
      state.languagePrograms = action.payload;
    },
  },
});

export const {
  setPrograms,
  setVocationalPrograms,
  setLanguagePrograms,
  setSummerPrograms
} = programSlice.actions;

export default programSlice.reducer;
