import "./Home.css";
import React, { useEffect } from "react";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Home() {
  const history = useHistory();
  const { user } = useAuth();
  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
  }, [user, history]);
  return (
    <div className="home">
      <div className="app">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </div>
    </div>
  );
}

export default Home;
