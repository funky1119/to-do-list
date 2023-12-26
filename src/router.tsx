import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <></>,
    },
  ],
  {
    basename: "/toDoList",
  }
);

export default router;
