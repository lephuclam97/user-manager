import * as Types from "./../constants/ActionType";

let initState = {};
const editting = (state = initState, action) => {
  console.log("editting.js");
  switch (action.Types) {
    case Types.EDIT_USERS:
      return action.user;
    default:
      return state;
  }
};

export default editting;
