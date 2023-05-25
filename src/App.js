import "./App.css";
import LandingPage from "./pages/LandingPage";
import Questions from "./pages/Questions";
import Result from "./pages/Result";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "questions",
      element: <Questions />,
    },
    {
      path: "result",
      element: <Result />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
