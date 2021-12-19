import React from "react";
import Sidebar from "./SideBar";
import ContentWrapper from "./ContentWrapper";
import Head from "./Head";

function App() {
  return (
    <React.Fragment>
      <Head />
      <div id="wrapper">
        <Sidebar />
        <ContentWrapper />
      </div>
    </React.Fragment>
  )
}

export default App;
