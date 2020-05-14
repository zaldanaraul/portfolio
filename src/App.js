import React from "react";
import "./App.css";
import Navigation from "./components/navigation";
import Photography from "./views/photography";
import Menu from "./components/menu";

function App() {
  return (
    <div className="pt-3">
      <div className="d-block d-md-none">
        <Navigation />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 d-none d-md-block">
            <Menu />
          </div>
          <div className="col-md-10 col-12">
            <Photography />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
