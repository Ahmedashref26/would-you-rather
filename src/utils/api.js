import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA.js";

const getInitialData = () => {
  return Promise.all([_getUsers(), _getQuestions()]).then(
    ([users, questions]) => ({
      users,
      questions,
    })
  );
};

const saveQuestion = (question) => _saveQuestion(question);

const saveQuestionAnswer = (info) => _saveQuestionAnswer(info);

export { getInitialData, saveQuestionAnswer, saveQuestion };
