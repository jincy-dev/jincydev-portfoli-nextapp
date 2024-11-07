import React from "react";
import NavBar from "../components/NavBar"
import MainPage from "../components/MainPage"
function LandingPage() {
  return (
    <div className="border-2 border-green-500">
      <NavBar />
      <MainPage/>
    </div>
  );
}

export default LandingPage;
