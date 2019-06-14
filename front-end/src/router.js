import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Mail from "./containers/Mail";
import ComposeEmails from "./components/mail/composeEmails";
import ListEmails from "./components/mail/listEmails";

export default function MainRoutes(history) {
  return (
    <Router history={history}>
      <div>
        <Route exact path={"/"} component={Mail} />
        <Route exact path={"/compose"} component={ComposeEmails} />
        <Route exact path={"/list"} component={ListEmails} />
      </div>
    </Router>
  );
}
