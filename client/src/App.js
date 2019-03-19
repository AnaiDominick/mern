import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Example from "./pages/Example";
import ExampleForm from "./pages/ExampleForm";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Signup from "./pages/signupForm.js";
import Login from "./pages/loginForm.js";
import FileReader from "./components/FileReader";

function App() {
  return (
    <Router>
      <>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/csv" component={FileReader} />
          <Route path="/example/:id" component={Example} />
          <Route path="/newexample" component={ExampleForm} />
          <Route component={NoMatch} />
        </Switch>
      </>
    </Router>
  );
}

export default App;