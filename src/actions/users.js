const RECEIVE_USERS = "RECEIVE_USERS";
const ADD_ANSWER_TO_USERS = "ADD_ANSWER_TO_USERS";
const ADD_QUESTION_TO_USERS = "ADD_QUESTION_TO_USERS";

const receive_users = (users) => ({
  type: RECEIVE_USERS,
  users,
});

const add_answerToUsers = ({ authedUser, qid, answer }) => ({
  type: ADD_ANSWER_TO_USERS,
  qid,
  authedUser,
  answer,
});

const add_questionTOUsers = ({id, author}) => ({
  type: ADD_QUESTION_TO_USERS,
  id,
  author
});

export {
  RECEIVE_USERS,
  ADD_ANSWER_TO_USERS,
  ADD_QUESTION_TO_USERS,
  receive_users,
  add_answerToUsers,
  add_questionTOUsers,
};
