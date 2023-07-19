import React from "react";
import Emo from "../emojipedia";
import Card from "./Card";

function createCard(emojii) {
  return (
    <Card
      key={emojii.id}
      emoji={emojii.emoji}
      name={emojii.name}
      description={emojii.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emo.map(createCard)} </dl>
    </div>
  );
}

export default App;
