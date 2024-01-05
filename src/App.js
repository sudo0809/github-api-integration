import { createBrowserRouter, createRoutesFromElements, Route  } from "react-router-dom";
import Home from "./pages/home";
import User from "./pages/user";
import PageNotFound from "./pages/page_not_found";

const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/user/:username" element={<User />} />
      <Route path="*" element={<PageNotFound />} />
    </>
  )
)


export default App;
