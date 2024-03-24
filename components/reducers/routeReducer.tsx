// import { createSlice } from "@reduxjs/toolkit";

// const routeSlice = createSlice({
//   name: "route",
//   initialState: null, // Initially, no route is specified
//   reducers: {
//     setRoute: (state, action) => {
//       return action.payload; // Set the route to the payload value
//     },
//   },
// });

// export const { setRoute } = routeSlice.actions;
// export default routeSlice.reducer;

// reducers/routeReducer.js

import { Action } from '@reduxjs/toolkit';

interface RouteState {
  currentRoute: string;
}

const initialState: RouteState = {
  currentRoute: '/',
};

export const routeReducer = (state: RouteState = initialState, action: Action<string>) => {
  switch (action.type) {
    case 'NAVIGATE_TO':
      return {
        ...state,
        currentRoute: '/k',
      };
    default:
      return state;
  }
};
