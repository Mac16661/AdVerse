import React from "react";
import Header from "../components/Header";
import Key from "../components/Key";
import Docs from "../components/Docs";

function AppCreator() {
  return (
    <div>
      <Header />
      <div style={{ backgroundColor: "black", marginTop: "38px" }}>
        <Key />
        <Docs />
      </div>
    </div>
  );
}

export default AppCreator;
