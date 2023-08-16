import React, { useState } from "react"; // Import useState
import { useDispatch, useSelector } from "react-redux";
import { addNote, deleteNote } from "./notesSlice";

export default function Notepad() {
  const dispatch = useDispatch();
  const text = useSelector((state) => state.notes.text);

  const [newNoteText, setNewNoteText] = useState(""); // Add state for input

  const handleAddNote = () => {
    if (newNoteText.trim() !== "") {
      dispatch(addNote(newNoteText)); // Dispatch the action with the input text
      setNewNoteText(""); // Clear the input after adding
    }
  };

  const handleDeleteNote = (index) => {
    dispatch(deleteNote(index)); // Dispatch the action with the index to delete
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="add note"
          value={newNoteText}
          onChange={(e) => setNewNoteText(e.target.value)} // Update input value
        />
        <button onClick={handleAddNote}>add</button>
        <div>
          <h1>Text Area</h1>
          {text.map((note, index) => (
            <div key={index}>
              <h1>{note}</h1>
              <button onClick={() => handleDeleteNote(index)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}