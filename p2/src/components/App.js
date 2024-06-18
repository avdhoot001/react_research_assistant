// src/components/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import Summary from './Summary';
import Questions from './Questions';
import LatexGenerator from './LatexGenerator';
import Login from './Login';
import Register from './Register';

const App = () => (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route path="/search" component={Search} />
        <Route path="/summary" component={Summary} />
        <Route path="/questions" component={Questions} />
        <Route path="/latex" component={LatexGenerator} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" exact component={Search} />
      </Switch>
    </main>
  </Router>
);

export default App;
