import { configureStore } from '@reduxjs/toolkit';

import authReducer from './reducers/auth';
import userReducer from './reducers/users';
import programReducer from './reducers/programs';
import loaderReducer from './reducers/loader';
import contentReducer from './reducers/contents';
import eventReducer from './reducers/events';
import serviceReducer from './reducers/services';
import faqReducer from './reducers/faqs';
import testimonialReducer from './reducers/testimonials';

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    loader: loaderReducer,
    content: contentReducer,
    program: programReducer,
    service: serviceReducer,
    faq: faqReducer,
    event: eventReducer,
    testimonial: testimonialReducer,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export default store;
