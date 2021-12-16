import {
  RECEIVE_USERS,
  ADD_ANSWER_TO_USERS,
  ADD_QUESTION_TO_USERS,
} from "../actions/users";

const users = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_ANSWER_TO_USERS:
      const { answer, qid, authedUser } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    case ADD_QUESTION_TO_USERS:
      const { id, author } = action;
      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(id),
        },
      };
    default:
      return state;
  }
};

export default users;
