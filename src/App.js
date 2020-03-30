import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Chat from './components/Chat/Chat';
import Home from './components/Home/Home';
import Predict from './components/prediction/Predict';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/chat" component={Chat} />
      <Route path="/predict" component={Predict} />
    </Router>
  );
}

export default App;
