import "./App.css";
import React from "react";
import Nav from "./Nav";
import SectionHome from "./SectionHome";
import SectionDetails from "./SectionDetails";
import SectionGifts from "./SectionGifts";
import SectionTransport from "./SectionTransport";
import SectionWeekend from "./SectionWeekend";
import SectionRSVP from "./SectionRSVP";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <SectionHome />
        <SectionDetails />
        <SectionTransport />
        <SectionWeekend />
        <SectionGifts />
        <SectionRSVP />
      </div>
    );
  }
}

export default App;
