import React from "react";
import "./App.css";
import AppRoutes from "./AppRoutes";
import WalletConnectionProvider from "./components/WalletConnectorProvider";

function App() {
  return (
    <div className="App">
      <WalletConnectionProvider>
        <AppRoutes />
      </WalletConnectionProvider>
    </div>
  );
}

export default App;
