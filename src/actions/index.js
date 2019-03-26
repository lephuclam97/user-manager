import * as Types from "./../constants/ActionType";
import callApi from "./../utils/apiCaller";

//Hien thi danh sach user, staff <Admin Manager>
export const actFetchUsersRequest = () => {
  console.log("actFetchuserrequ");
  return dispatch => {
    return callApi("users", "GET", null).then(res => {
      dispatch(actFetchUsers(res.data));
    });
  };
};
export const actFetchUsers = users => {
  console.log("actFetchuser");

  return {
    type: Types.FETCH_USERS,
    users
  };
};

//Xoa user,staff <admin manager>
export const actDeleteUsersRequest = id => {
  console.log("actDeleteuserrequ");

  return dispatch => {
    return callApi(`users/${id}`, "DELETE", null).then(res => {
      dispatch(actDeleteUsers(id));
    });
  };
};

export const actDeleteUsers = id => {
  console.log("actDeleteuser");
  return {
    type: Types.DELETE_USERS,
    id
  };
};

//Them user,staff <admin manager Action>
export const actAddUsersRequest = users => {
  console.log("actAdduserrequ");
  return dispatch => {
    return callApi("users", "POST", users).then(res => {
      dispatch(actAddUsers(res.data));
    });
  };
};

export const actAddUsers = users => {
  console.log("actAdduser");
  return {
    type: Types.ADD_USERS,
    users
  };
};

//
export const actGetUsersRequest = id => {
  console.log("actgetuserrequ");
  return dispatch => {
    return callApi(`users/${id}`, "GET", null).then(res => {
      dispatch(actGetUsers(res.data));
    });
  };
};
export const actGetUsers = user => {
  console.log("actgetuser");
  return {
    type: Types.EDIT_USERS,
    user
  };
};
// export const setStateUserEdit = id => {
//   callApi(`users/${id}`, "GET", null).then(res => {
//     console.log(res.data.id + "action");
//     return res.data;
//   });
// };

//Hien thi danh sach user <User Manager page>
export const actFetchOnlyUsersRequest = () => {
  console.log("actFetchuserrequ");
  return dispatch => {
    return callApi("users", "GET", null).then(res => {
      let data = SortOnlyUser(res.data);
      dispatch(actFetchUsers(data));
    });
  };
};

let SortOnlyUser = users => {
  let result = [];
  users.forEach((user, index) => {
    if (user.role === "User") {
      result.push(user);
    } else console.log("no find");
  });
  console.log(result);

  return result;
};
export const actFetchOnlyUsers = users => {
  console.log("actFetchuser");

  return {
    type: Types.FETCH_ONLY_USERS,
    users
  };
};

//Hien thi danh sach staff <staff Manager page>
export const actFetchOnlyStaffRequest = () => {
  console.log("actFetchuserrequ");
  return dispatch => {
    return callApi("users", "GET", null).then(res => {
      let data = SortOnlyStaff(res.data);
      dispatch(actFetchOnlyStaff(data));
    });
  };
};

let SortOnlyStaff = users => {
  let result = [];
  users.forEach((user, index) => {
    if (user.role === "Staff") {
      result.push(user);
    } else console.log("no find");
  });
  console.log(result);

  return result;
};
export const actFetchOnlyStaff = users => {
  console.log("actFetchuser");

  return {
    type: Types.FETCH_ONLY_STAFF,
    users
  };
};
