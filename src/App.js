import React from "react";
import RouterApp from "./app/services/RouterApp";
import Provider from "./app/contexts/Provider";

function App() {
  return (
    <Provider>
      <RouterApp />
    </Provider>
  );
}

export default App;
