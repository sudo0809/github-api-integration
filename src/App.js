import { createBrowserRouter, createRoutesFromElements, Route  } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/user/:username" element={<User />} />
    </>
  )
)


export default App;
