import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import "./assets/styles/main.scss";

import {
  Header,
  Main,
  Footer
} from './components';

import {
  PageCreate,
  PageDetail,
  PageUser,
  PageEdit
} from './pages';


export function App() {
  return (
    <div className="Wrapper">
      <Router>
        <Header />
        <Main>
          <switch>
            <Route exact path="/users" component={PageUser} />
            <Route exact path="/users/:id" component={PageDetail} />
            <Route path="/edit/:id" component={PageEdit} />
            <Route path="/create" component={PageCreate} />
            <Redirect exact from="/" to="users/" />
          </switch>
        </Main>
        <Footer />
      </Router>
    </div>
  )
}
