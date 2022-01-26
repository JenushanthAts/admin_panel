import React from "react";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/sidebar";
import "./app.css";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/userList";
import User from "./pages/user/user";
import NewUser from "./pages/newUser/newUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Switch } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      {/* container is created for displaying two widgets(sidebar,otherpages) in row manner */}
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/users" element={<UserList />}/>
          <Route path="/user/:userId" element={<User/>}/>
          <Route path="/newUser" element={<NewUser/>}/>
        </Routes>


      </div>
    </BrowserRouter>
  );
}

export default App;
