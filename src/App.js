import React from 'react';
import './App.css';
import Profile from './Components/Profile/Profile';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Profile />
      </div>
    );
  }
};

export default App;
