import React from "react";
import "./App.css";
import Nav from "./components/nav";
import ClickerGame from "./components/game";

function Home() {
  return (
    <>
      <Nav />
      <ClickerGame />
    </>
  );
}

export default Home;
