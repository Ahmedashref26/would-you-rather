import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Segment, Image } from "semantic-ui-react";
import { set_authedUser } from "../actions/authedUser";

const Nav = (props) => {
  const [activeItem, setActive] = useState("home");

  const dispatch = useDispatch();
  const { users, authedUser } = useSelector((state) => state);
  const { name, avatarURL: avatar} = users[authedUser];

  const handleClick = (e, { name }) => setActive(name);

  const handleLogout = (e) => {
    dispatch(set_authedUser(null));
  };

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item
          name="home"
          as={NavLink}
          to="/"
          active={activeItem === "home"}
          onClick={handleClick}
        />
        <Menu.Item
          name="new question"
          as={NavLink}
          to="/add"
          active={activeItem === "new question"}
          onClick={handleClick}
        />
        <Menu.Item
          name="leader board"
          as={NavLink}
          to="/leaderboard"
          active={activeItem === "leader board"}
          onClick={handleClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <span>{name}</span>
            <Image
              src={avatar}
              size="mini"
              circular
              spaced="left"
              verticalAlign="bottom"
            />
          </Menu.Item>
          <Menu.Item name="logout" onClick={handleLogout} />
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default Nav;
