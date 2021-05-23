import React from "react";
import "./App.scss";
import ProblemList from "./components/ProblemList";
import SimilarProblemList from "./components/SimilarProblemList";

const App = () => {
  return (
    <div className="app_wrap">
      <ProblemList />
      <hr />
      <SimilarProblemList />
    </div>
  );
};

export default App;
