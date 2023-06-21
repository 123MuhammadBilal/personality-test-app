import React, { useState } from "react";
import "./App.css";
import "./css/style.css";
import LandingPage from "./pages/LandingPage";
import Questions from "./pages/Questions";
import Result from "./pages/Result";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [totalScore, setTotalScore] = useState([]);
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "questions",
      element: (
        <Questions totalScore={totalScore} setTotalScore={setTotalScore} />
      ),
    },
    {
      path: "result",
      element: <Result totalScore={totalScore} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
