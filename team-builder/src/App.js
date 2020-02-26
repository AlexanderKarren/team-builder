import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import './App.css';

function App() {
  const [teamMembers, updateTeam] = useState([
    {
      psuedonym: "Montana_43",
      specialty: "Block Chain",
      joined: "2012-03-09",
      svgSrc: "man.svg",
    },
    {
      psuedonym: "Ada_Lovelace_",
      specialty: "Decryption",
      joined: "2015-12-05",
      svgSrc: "woman.svg",
    },
  ])
  return (
    <div className="App">
      <Header />
      <Form />
    </div>
  );
}

export default App;
