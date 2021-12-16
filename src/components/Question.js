import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";

const Question = (props) => {
  const id = props.id;
  const { users, questions } = useSelector((state) => state);
  const {
    author,
    optionOne: { text: txt1 },
    optionTwo: { text: txt2 },
  } = questions[id];
  const { name, avatarURL: avatar } = users[author];

  return (
    <Card className="card-sm">
      <Card.Content>
        <Image
          avatar
          style={{ width: "80px", height: "80px" }}
          floated="right"
          src={avatar}
        />
        <Card.Header>{name} asks</Card.Header>
        <div>Would you rather:</div>
        <br />
        <p>{`${txt1} or ${txt2}`}</p>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button as={Link} to={`questions/${id}`} basic color="teal">
            View Poll
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default Question;
