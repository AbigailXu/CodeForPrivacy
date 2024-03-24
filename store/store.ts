import { configureStore } from "@reduxjs/toolkit";
import {routeReducer} from "@/components/reducers/routeReducer";


export const store = configureStore({
  reducer: {
    route: routeReducer, // Add the routeReducer to the store
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
