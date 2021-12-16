import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInitialData } from "../actions/shared";
import QuestionList from "./QuetionList";
import { Container } from "semantic-ui-react";
import QuestionView from "./QuestionView";
import QuestionNew from "./QuestionNew";
import LeaderBoard from "./LeaderBoard";
import Nav from "./Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Login from "./Login";

const App = (props) => {
  const dispatch = useDispatch();

  const notLogedIn = useSelector(({ authedUser }) => authedUser === null);

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <Router>
      {notLogedIn ? (
        <Routes>
          <Route path="*" element={<Login />} />
        </Routes>
      ) : (
        <div>
          <Nav />
          <Container className="container">
            <Routes>
              <Route path="/" element={<QuestionList />} />
              <Route path="questions/:qid" element={<QuestionView />} />
              <Route path="/add" element={<QuestionNew />} />
              <Route path="/leaderboard" element={<LeaderBoard />} />
              <Route path="/questions/wrongId" element={<NotFound />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </div>
      )}
    </Router>
  );
};

export default App;
