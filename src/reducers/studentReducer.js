const initState = [];

export default function studentReducer(state = initState, action) {
  switch (action.type) {
    case "SET_STUDENT":
      return action.payload;
    case "REMOVE_STUDENT":
      return state.filter((ele) => ele.id !== action.payload);
    default:
      return [...state];
  }
}
