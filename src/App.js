import React, { useState } from "react";
import NotesList from "./components/NotesList";
import { nanoid } from "nanoid";

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note!",
      date: "15/04/2023",
    },
    {
      id: nanoid(),
      text: "This is my second note!",
      date: "21/04/2023",
    },
    {
      id: nanoid(),
      text: "This is my third note!",
      date: "28/04/2023",
    },
    {
      id: nanoid(),
      text: "This is my new note!",
      date: "30/04/2023",
    },
  ]);
  return (
    <div className="container">
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
