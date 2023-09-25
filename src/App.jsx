import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage";
import Auth from "./pages/auth";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/" element={<HomePage/>}
        ></Route>
        <Route
          path="/auth" element={<Auth/>}
        ></Route>
      </Routes>
      
     
      </>
  );
}

export default App;
