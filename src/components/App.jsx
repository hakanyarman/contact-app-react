import React from "react";
import contacts from "../contacts.js";
import Card from "./card.jsx";

function App() {
  const person1 = contacts[0];
  const person2 = contacts[1];
  const person3 = contacts[2];
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={person1.name}
        imgURL={person1.imgURL}
        phone={person1.phone}
        email={person1.email}
      />
      <Card
        name={person2.name}
        imgURL={person2.imgURL}
        phone={person2.phone}
        email={person2.email}
      />
      <Card
        name={person3.name}
        imgURL={person3.imgURL}
        phone={person3.phone}
        email={person3.email}
      />
    </div>
  );
}

export default App;
