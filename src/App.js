import Rotas from "./rotas/rotas.jsx";
import React from "react";
import store from "./redux/store.js";
import { Provider } from "react";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Rotas/>
      </Provider>
    </div>
  );
}

export default App;
