import { useState } from 'react';
import './App.css';
import Header from './components/Navbar/Header';
import PlayerList from './components/PlayerList/PlayerList';
function App() {

  
  return (
    <div>
  <Header/>
  <PlayerList/>
    </div>
  );
}

export default App;
