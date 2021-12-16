import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, Grid, Header, Segment } from "semantic-ui-react";
import { set_authedUser } from "../actions/authedUser";

const Login = () => {
  const [val, setVal] = useState("");

  const dispatch = useDispatch();

  const users = useSelector(({ users }) => Object.values(users));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(val === "")) dispatch(set_authedUser(val));
  };

  const handleChange = (e, { value }) => setVal(value);

  const dropData = () =>
    users.map((user) => ({
      key: user.id,
      value: user.id,
      text: user.name,
      image: { avatar: true, src: user.avatarURL },
    }));
  // const AUTHED_ID = "sarahedo";
  // dispatch(set_authedUser(AUTHED_ID));
  return (
    <Grid centered padded>
      <Grid.Column width={6}>
        <Segment>
          <Header
            as="h2"
            color="teal"
            block
            attached="top"
            className="mb-m"
            textAlign="center"
          >
            <Header.Content className="mb-s">Sign In</Header.Content>
            <Header.Subheader>
              This demo doesn't require a password
            </Header.Subheader>
            <Header.Subheader>Please choose a user to log in</Header.Subheader>
          </Header>
          <Form onSubmit={handleSubmit}>
            <Form.Dropdown
              placeholder="Select user"
              fluid
              closeOnEscape
              selection
              scrolling
              value={val}
              onChange={handleChange}
              options={dropData()}
              required
            ></Form.Dropdown>
            <Form.Button
              color="teal"
              content="Login"
              disabled={val === ""}
              fluid
            />
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  );
};

export default Login;
