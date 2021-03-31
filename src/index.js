import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router} from 'react-router-dom';
import {RecommendationProvider} from "./RecommendationContext"

ReactDOM.render(
  <RecommendationProvider>
  <Router>
    <App />
  </Router>
  </RecommendationProvider>
  ,
  document.getElementById('root')
);

