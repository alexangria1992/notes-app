import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");

  const handleChange = (event) => {
    // console.log(event.target.value);
    setNoteText(event.target.value);
  };

  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
    handleAddNote(noteText);
  };
  return (
    <div className="note new">
      <textarea
        cols="10"
        rows="8"
        placeholder="Type to add a note..."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="note-footer">
        <small>200 remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
