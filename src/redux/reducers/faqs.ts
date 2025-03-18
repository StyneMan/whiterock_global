import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface FAQI {
  faqs: any;
}

const initVal: FAQI = {
  faqs: null,
};

const faqSlice = createSlice({
  initialState: initVal,
  name: 'faq',
  reducers: {
    setFaqs(state, action: PayloadAction<any>) {
      state.faqs = action.payload;
    },
  },
});

export const { setFaqs } = faqSlice.actions


export default faqSlice.reducer;