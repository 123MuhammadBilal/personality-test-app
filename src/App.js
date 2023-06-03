import React , { useState } from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import Questions from "./pages/Questions";
import Result from "./pages/Result";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [totalScore , setTotalScore] = useState([]);
const scoreSum = totalScore.reduce((accumulator, currentValue) => accumulator + currentValue,0);
console.log('scoreSum',scoreSum)


  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "questions",
      element: <Questions totalScore={totalScore} scoreSum={scoreSum} setTotalScore={setTotalScore} />,
    },
    {
      path: "result",
      element: <Result totalScore={totalScore} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
