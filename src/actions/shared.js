import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import {
  receive_questions,
  add_answerToQuestions,
  add_questionToQuestions,
} from "./questions";
import { receive_users, add_answerToUsers, add_questionTOUsers } from "./users";

const handleInitialData = () => async (dispatch) => {
  const { users, questions } = await getInitialData();
  dispatch(receive_users(users));
  dispatch(receive_questions(questions));
};

const handleAddingAnswer = (answer) => async (dispatch) => {
  try {
    await saveQuestionAnswer(answer);
    dispatch(add_answerToUsers(answer));
    dispatch(add_answerToQuestions(answer));
  } catch (e) {
    console.warn("Error in handleAddingAnswer: ", e);
    alert("There was an error Answering the question, Try again.");
  }
};

const handleAddingQuestion = (quest) => async (dispatch) => {
  try {
    const question = await saveQuestion(quest);
    dispatch(add_questionToQuestions(question));
    dispatch(add_questionTOUsers(question));
  } catch (e) {
    console.warn("Error in handleAddingQuestion: ", e);
    alert("There was an error adding the question, Try again.");
  }
};

export { handleInitialData, handleAddingAnswer, handleAddingQuestion };
