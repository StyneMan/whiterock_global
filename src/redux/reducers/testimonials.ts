import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface TestimonialI {
  testimonials: any;
}

const initVal: TestimonialI = {
  testimonials: null,
};
const testimonialSlice = createSlice({
  initialState: initVal,
  name: 'testimonial',
  reducers: {
    setTestimonials(state, action: PayloadAction<any>) {
      state.testimonials = action.payload;
    },
  },
});

export const { setTestimonials } = testimonialSlice.actions

export default testimonialSlice.reducer;