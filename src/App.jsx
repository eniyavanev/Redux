import { useState } from "react";

import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainbody from "./Components/Mainbody/Mainbody";
import Home from "./Pages/Home/Home";
import ReadPage from "./Pages/ReadPage/ReadPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainbody />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "ReadPage",
          element: <ReadPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
