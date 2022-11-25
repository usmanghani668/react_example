import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AdminRoutes } from "./routes/adminRoutes";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";

const App = () => {
  //provide user to admin or member routes for private routes (RBAC)
  const user = useSelector((state: RootState) => state.example?.user);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/register" />
        {AdminRoutes(user)}
        {/* we can import member routes here */}
      </Routes>
    </Router>
  );
};

export default App;
