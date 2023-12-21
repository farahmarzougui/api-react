import React from 'react';
import UserList from './UserList';
import './App.css';



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mon Application React</h1>
      </header>
      <main>
        <UserList />
      </main>
    </div>
  );
};

export default App;
