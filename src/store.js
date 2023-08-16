import { configureStore } from "@reduxjs/toolkit";
import notesSlice from "./features/notesSlice";

export const store = configureStore({
  reducer: {
    notes: notesSlice,
  },
});

// crud app create read delete, display in list and on click delete.
