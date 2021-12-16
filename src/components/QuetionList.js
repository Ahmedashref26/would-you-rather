import React from "react";
import { useSelector } from "react-redux";
import Question from "./Question";
import { CardGroup, Label, Menu, Tab } from "semantic-ui-react";

const QuestionList = (props) => {
  // Logic Varibles
  const { users, authedUser } = useSelector((state) => state);
  const questionId = useSelector(({ questions }) =>
    Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  );
  const unAnswered = questionId.filter(
    (id) => !(id in users[authedUser].answers)
  );
  const answered = questionId.filter((id) => id in users[authedUser].answers);
  // Semantic UI Variables
  const panes = [
    {
      menuItem: (
        <Menu.Item key="unAnswered">
          Unanswered Questions<Label>{unAnswered.length}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <CardGroup>
            {unAnswered.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))}
          </CardGroup>
        </Tab.Pane>
      ),
    },
    {
      menuItem: (
        <Menu.Item key="answered">
          Answered Questions<Label>{answered.length}</Label>
        </Menu.Item>
      ),
      render: () => (
        <Tab.Pane>
          <CardGroup>
            {answered.map((id) => (
              <li key={id}>
                <Question id={id} />
              </li>
            ))}
          </CardGroup>
        </Tab.Pane>
      ),
    },
  ];
  return <Tab panes={panes} className="pane" renderActiveOnly={true} />;
};

export default QuestionList;
