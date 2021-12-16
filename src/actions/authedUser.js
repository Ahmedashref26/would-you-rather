const SET_AUTHED_USER = "SET_AUTHED_USER";

const set_authedUser = (id) => ({
  type: SET_AUTHED_USER,
  id,
});

export { set_authedUser, SET_AUTHED_USER };
