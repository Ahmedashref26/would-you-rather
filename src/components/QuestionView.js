import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate } from "react-router-dom";
import {
  Card,
  Image,
  Segment,
  Progress,
  Label,
  Icon,
  Form,
  Radio,
  Button,
} from "semantic-ui-react";
import { handleAddingAnswer } from "../actions/shared";

const QuestionView = (props) => {
  const [voteVal, setVote] = useState("");
  const dispatch = useDispatch();
  const { qid: id } = useParams();
  const { users, questions, authedUser } = useSelector((state) => state);

  const inValidId = questions[id] ? false : true;

  if (inValidId === true) return <Navigate to="/questions/wrongId" />;

  const {
    author,
    optionOne: { votes: optionOneVotes, text: txt1 },
    optionTwo: { votes: optionTwoVotes, text: txt2 },
  } = questions[id];
  const { name, avatarURL: avatar } = users[author];
  const optionOneVoteNum = optionOneVotes.length;
  const optionTwoVoteNum = optionTwoVotes.length;
  const votes = optionOneVoteNum + optionTwoVoteNum;
  const optionOnePersent = ((optionOneVoteNum / votes) * 100).toFixed(2);
  const optionTwoPersent = ((optionTwoVoteNum / votes) * 100).toFixed(2);
  const userVoted1 = optionOneVotes.includes(authedUser);
  const userVoted2 = optionTwoVotes.includes(authedUser);
  const answered = userVoted1 || userVoted2;

  const handleChange = (e, { value }) => setVote(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    voteVal !== "" &&
      dispatch(handleAddingAnswer({ authedUser, qid: id, answer: voteVal }));
  };

  return (
    <Card className="card-md">
      <Card.Content>
        <Image
          avatar
          style={{ width: "80px", height: "80px", marginTop: "-5px" }}
          floated="right"
          src={avatar}
        />
        <Card.Header as="h1">{name} asks</Card.Header>
        <div style={{ fontSize: "17px", marginTop: "20px" }}>
          Would you rather:
        </div>
        {answered ? (
          <Card.Description>
            <Segment style={{ fontSize: "17px" }}>
              {userVoted1 && (
                <Label color="yellow" ribbon="right">
                  <Icon name="check circle outline" size="big" />
                  <div style={{ float: "right" }}>
                    Your
                    <br />
                    Vote
                  </div>
                </Label>
              )}
              <p>{txt1}</p>
              <Progress percent={optionOnePersent} color="teal" progress>
                {`${optionOneVoteNum} out of ${votes} votes`}
              </Progress>
            </Segment>
            <Segment style={{ fontSize: "17px" }}>
              {userVoted2 && (
                <Label color="yellow" ribbon="right">
                  <Icon name="check circle outline" size="big" />
                  <div style={{ float: "right" }}>
                    Your
                    <br />
                    Vote
                  </div>
                </Label>
              )}
              <p>{txt2}</p>
              <Progress percent={optionTwoPersent} color="teal" progress>
                {`${optionTwoVoteNum} out of ${votes} votes`}
              </Progress>
            </Segment>
          </Card.Description>
        ) : (
          <Card.Description>
            <Form onSubmit={handleSubmit}>
              <Form.Field>
                <Radio
                  label={txt1}
                  name="radioGroup"
                  value="optionOne"
                  checked={voteVal === "optionOne"}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Radio
                  label={txt2}
                  name="radioGroup"
                  value="optionTwo"
                  checked={voteVal === "optionTwo"}
                  onChange={handleChange}
                />
              </Form.Field>
              <Form.Field>
                <Button
                  basic
                  color="teal"
                  size="tiny"
                  fluid
                  disabled={voteVal === "" ? true : false}
                  content="Submit"
                />
              </Form.Field>
            </Form>
          </Card.Description>
        )}
      </Card.Content>
    </Card>
  );
};

export default QuestionView;
