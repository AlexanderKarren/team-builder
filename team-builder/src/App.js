import React, { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import MemberCard from './components/MemberCard';
import './App.css';

function App() {
  const [teamMembers, updateTeam] = useState([
    {
      id: 1,
      psuedonym: "Montana_43",
      specialty: "Block Chain",
      joined: "2012-03-09",
      svgSrc: "kingpin.svg",
    },
    {
      id: 2,
      psuedonym: "_Ada_Lovelace_",
      specialty: "Decryption",
      joined: "2015-12-05",
      svgSrc: "woman.svg",
    },
    {
      id: 3,
      psuedonym: "2-Pac-Man45283",
      specialty: "Data Collection",
      joined: "2013-06-21",
      svgSrc: "man.svg",
    },
  ])
  const [memberToEdit, updateMemberToEdit] = useState();

  const addHacker = hacker => {
    const newHacker = {
      id: teamMembers[teamMembers.length - 1].id + 1,
      psuedonym: hacker.psuedonym,
      specialty: hacker.specialty,
      joined: hacker.joined,
      svgSrc: "man.svg",
    }
    updateTeam([...teamMembers, newHacker]);
  }

  const editHacker = edittedHacker => {
    console.log(edittedHacker);
    let temp = teamMembers;
    temp[edittedHacker.id - 1].psuedonym = edittedHacker.psuedonym;
    temp[edittedHacker.id - 1].specialty = edittedHacker.specialty;
    temp[edittedHacker.id - 1].joined = edittedHacker.joined;
    updateTeam(temp);
    console.log(teamMembers);
  }

  console.log(teamMembers);

  return (
    <div className="App">
      <Header />
      <Form memberToEdit={memberToEdit} updateMemberToEdit={updateMemberToEdit} addHacker={addHacker} editHacker={editHacker}/>
      <section className="card-container">
        {teamMembers.map(member => {
          return (
            <MemberCard member={member} updateMember={updateMemberToEdit}/>
          )
        })}
      </section>
    </div>
  );
}

export default App;
