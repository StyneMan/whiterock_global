import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

interface ContentI {
  banners: any;
  contents: any;
  socials: any;
  gallery: any;
}

const initVal: ContentI = {
  banners: null,
  contents: null,
  socials: null,
  gallery: null,
};

const contentSlice = createSlice({
  initialState: initVal,
  name: 'content',
  reducers: {
    setBanners(state, action: PayloadAction<any>) {
      state.banners = action.payload;
    },
    setSocials(state, action: PayloadAction<any>) {
      state.socials = action.payload;
    },
    setContents(state, action: PayloadAction<any>) {
      state.contents = action.payload;
    },
    setGallery(state, action: PayloadAction<any>) {
      state.gallery = action.payload;
    },
  },
});

export const { setBanners, setSocials, setContents, setGallery } = contentSlice.actions;

export default contentSlice.reducer;
