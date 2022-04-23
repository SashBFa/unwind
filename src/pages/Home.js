import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div className="home">
      <Navigation page={"home"} />
      <Header page={"home"} />
    </div>
  );
};

export default Home;
