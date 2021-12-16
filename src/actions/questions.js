const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
const ADD_ANSWER_TO_QUESTIONS = "ADD_ANSWER_TO_QUESTIONS";
const ADD_QUESTION_TO_QUESTIONS = "ADD_QUESTION_TO_QUESTIONS";

const receive_questions = (questions) => ({
  type: RECEIVE_QUESTIONS,
  questions,
});

const add_answerToQuestions = ({ authedUser, qid, answer }) => ({
  type: ADD_ANSWER_TO_QUESTIONS,
  qid,
  authedUser,
  answer,
});

const add_questionToQuestions = (question) => ({
  type: ADD_QUESTION_TO_QUESTIONS,
  question,
});

export {
  RECEIVE_QUESTIONS,
  ADD_ANSWER_TO_QUESTIONS,
  ADD_QUESTION_TO_QUESTIONS,
  receive_questions,
  add_answerToQuestions,
  add_questionToQuestions,
};
