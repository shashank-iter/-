import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import Notepad from "./features/Notepad";
function App() {
  return (
    <>
      <Provider store={store}>
      <Notepad/>
      </Provider>
    </>
  );
}

export default App;
