import { Home } from "./pages/Home";

import "./app.scss";
import { RouterProvider } from "react-router";
import { router } from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
