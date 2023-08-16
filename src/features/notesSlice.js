import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    text: ["hello", "world"],
}

export  const notesSlice = createSlice({
    name:'Notepad',
    initialState,
    reducers:{
        deleteNote: (state, action) => {
            state.text.splice(action.payload, 1)
        
    },
     addNote: (state, action) => {
        state.text.push(action.payload)
     },
},
});
export const { addNote, deleteNote } = notesSlice.actions;
export default notesSlice.reducer;
