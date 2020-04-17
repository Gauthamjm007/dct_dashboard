import { createStore, combineReducers } from "redux";
import studentReducer from "../reducers/studentReducer";
const configStore = () => {
  const store = createStore(
    combineReducers({
      student: studentReducer,
    })
  );

  return store;
};

export default configStore;
