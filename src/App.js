import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ChatPage from './pages/ChatPage';

function App() {
  return (
    <Router>
      <Route path="/" exact component={ChatPage} />
      {/* Add more routes if needed */}
    </Router>
  );
}

export default App;
