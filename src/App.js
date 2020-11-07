import React from 'react';
import { HashRouter , Route, Switch } from "react-router-dom";
import Quiz from './components/quiz/quiz';

import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Quiz} />
        </Switch>
      </HashRouter >
    );
  }
}
