import * as Types from "./../constants/ActionType";
let initUser = [];
let findIndex = (users, id) => {
  let result = -1;
  users.forEach((user, index) => {
    if (user.id === id) {
      result = index;
    }
  });

  return result;
};

const users = (state = initUser, action) => {
  let index = -1;
  let { id } = action;

  console.log("reducer/user.js");
  switch (action.type) {
    case Types.FETCH_USERS:
      state = action.users;
      return [...state];
    case Types.DELETE_USERS:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    case Types.ADD_USERS:
      state.push(action.user);
      return [...state];
    case Types.EDIT_USERS:
      return action.user;
    case Types.FETCH_ONLY_USERS:
      state = action.users;
      return [...state];
    case Types.FETCH_ONLY_STAFF:
      state = action.users;
      return [...state];
    default:
      return [...state];
  }
};

export default users;
