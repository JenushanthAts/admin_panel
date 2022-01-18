import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/userList";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
// import { Switch } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      {/* container is created for displaying two widgets(sidebar,otherpages) in row manner */}
      <div className="container">
        <Sidebar />
            <Home />
            <UserList/>
      </div>
    </BrowserRouter>
  );
}

export default App;
