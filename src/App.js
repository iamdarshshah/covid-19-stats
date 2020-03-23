import React from "react";
import Layout from "./components/layout";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route to="/" component={Layout} />
    </Router>
  );
}

export default App;
