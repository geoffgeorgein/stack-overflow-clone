import { Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homePage";
import Auth from "./pages/auth";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import Questions from "./pages/questions";
import AskQuestion from "./pages/askQuestion";
import DisplayQuestion from "./pages/displayQuestion";

function App() {

  const [slideIn, setSlideIn] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);

  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  }
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/" element={<HomePage slideIn={slideIn} handleSlideIn={handleSlideIn} />}
        ></Route>
        <Route
          path="/auth" element={<Auth/>}
        ></Route>
        <Route
          path="/questions" element={<Questions/>}
        ></Route>
        <Route
          path="/askquestion" element={<AskQuestion/>}
        ></Route>
        <Route
          path="/questions/:id" element={<DisplayQuestion/>}
        ></Route>
      </Routes>
      
     
      </>
  );
}

export default App;
