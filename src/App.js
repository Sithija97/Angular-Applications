import React from "react";
import "./App.css";

import Auth from "./Auth";

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        marginTop:250,
        marginLeft:'50',
        alignItems:'center',
        justifyContent:"center",
        height:500,
        width:500,
        backgroundColor:'#f1f2f6'
      }}
    >
      <Auth />
    </div>
  );
};

export default App;
