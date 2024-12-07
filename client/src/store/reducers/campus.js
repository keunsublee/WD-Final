/*==================================================
/src/store/reducers/campus.js

This is a Reducer function that accepts 2 parameters: the previous state object (aka current state) and an action object. 
Depending on the Action object, the Reducer updates the State and return the new State object.
It also defines the State and its default initial value.
================================================== */
import { FETCH_CAMPUS } from "../actions/actionTypes";  // Import Action Type

// Define default Initial State
const initialState = {
  students: [],
  name: "",
  address: "",
  description: "",
};

// Reducer to manage campus data
const campus = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CAMPUS:
      return {
        ...state,           // Spread previous state
        ...action.payload,  // Replace relevant state values with data from the payload
      };
    default:
      return state;  // Return the unchanged state if action type doesn't match
  }
};

export default campus;
