import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route to="/" component={Layout} />
      </Router>
    </Provider>
  );
}

export default App;
