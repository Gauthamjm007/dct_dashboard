import { createStore, combineReducers } from "redux";
import memberReducer from "../reducers/membersReducer";
import studentReducer from "../reducers/studentReducer";
const configStore = () => {
  const store = createStore(
    combineReducers({
      members: memberReducer,
      student: studentReducer,
    })
  );

  return store;
};

export default configStore;
