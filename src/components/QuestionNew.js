import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Card, Form, Image, Divider } from "semantic-ui-react";
import { handleAddingQuestion } from "../actions/shared";

const QuestionNew = (props) => {
  // component state
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");

  const navigate = useNavigate();

  // store state and disptch
  const dispatch = useDispatch();
  const { users, authedUser } = useSelector((state) => state);
  const { name, avatarURL: avatar } = users[authedUser];

  const handleChange = (e) => {
    const text = e.target.value;

    if (e.target.id === "opt1") setOpt1(text);
    if (e.target.id === "opt2") setOpt2(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      handleAddingQuestion({
        optionOneText: opt1,
        optionTwoText: opt2,
        author: authedUser,
      })
    );
    setOpt1("");
    setOpt2("");
    navigate("/");
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
        <Card.Description>
          <Form onSubmit={handleSubmit}>
            <Form.Input
              id="opt1"
              placeholder="Option one is..."
              value={opt1}
              onChange={handleChange}
              required
            />
            <Divider horizontal>Or</Divider>
            <Form.Input
              id="opt2"
              placeholder="Option two is..."
              value={opt2}
              onChange={handleChange}
              required
            />
            <Form.Button
              basic
              color="teal"
              size="tiny"
              fluid
              disabled={opt1 === "" || opt2 === ""}
              content="Submit"
            ></Form.Button>
          </Form>
        </Card.Description>
      </Card.Content>
    </Card>
  );
};

export default QuestionNew;
