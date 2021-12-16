import React from "react";
import { useSelector } from "react-redux";
import {
  Card,
  Grid,
  Label,
  Image,
  GridColumn,
  GridRow,
} from "semantic-ui-react";

const LeaderBoard = (props) => {
  // store state
  const users = useSelector((state) => state.users);
  const boardUsers = Object.values(users)
    .map((user) => ({
      id: user.id,
      avatar: user.avatarURL,
      name: user.name,
      answered: Object.keys(user.answers).length,
      created: user.questions.length,
      score: Object.keys(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const colors = ["red", "yellow", "teal"];
  const ranks = ["1st", "2nd", "3rd"];

  return (
    <Card.Group>
      {boardUsers.map((user, i) => (
        <Card key={i}>
          <Image
            label={{
              as: "a",
              size: "big",
              color: colors[i],
              corner: "left",
              icon: "trophy",
            }}
            src={user.avatar}
            wrapped
            ui={false}
          />
          <Card.Content textAlign="center" style={{ fontSize: "18px" }}>
            <Card.Header as="h2">{user.name}</Card.Header>
            <Card.Meta as="div">
              Ranked &nbsp;
              <Label color={colors[i]} horizontal content={ranks[i]} />
            </Card.Meta>
            <Card.Description as="div">
              <Grid
                divided
                textAlign="center"
                verticalAlign="middle"
                columns={4}
              >
                <GridRow>
                  <GridColumn width={12}>
                    Answered: {user.answered}
                    <br />
                    <br />
                    Create: {user.created}
                  </GridColumn>
                  <GridColumn>
                    <strong>Score</strong>
                    <br />
                    <Label size="big" circular color={colors[i]}>
                      {user.score}
                    </Label>
                  </GridColumn>
                </GridRow>
              </Grid>
            </Card.Description>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default LeaderBoard;
