import {
  RECEIVE_QUESTIONS,
  ADD_ANSWER_TO_QUESTIONS,
  ADD_QUESTION_TO_QUESTIONS,
} from "../actions/questions";

const questions = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER_TO_QUESTIONS:
      const { answer, qid, authedUser } = action;
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    case ADD_QUESTION_TO_QUESTIONS:
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    default:
      return state;
  }
};

export default questions;
