import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import {addNote, deleteNote} from './notesSlice'
export default function Notepad() {

  const dispatch = useDispatch();
  const text = useSelector((state) => state.notes.text);
  return (
    <>
      <div>
        <input type="text" placeholder="add note" />
        <button onClick={dispatch(addNote())}>add</button>
        <div>
          <h1>
            Text Area
            {text.map((note, index) => (
              <div key={index}>
                <h1>{note}</h1>
                <button onClick={() => dispatch(deleteNote())}>delete</button>
              </div>
            ))}
          </h1>
        </div>
      </div>
    </>
  );
}
