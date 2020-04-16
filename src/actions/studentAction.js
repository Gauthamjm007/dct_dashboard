export const setStudent = (student) => {
  return { type: "SET_STUDENT", payload: student };
};

export const removeStudent = (id) => {
  return { type: "REMOVE_STUDENT", payload: id };
};

export const getStudent = () => {
  return { type: "GET_STUDENT" };
};
