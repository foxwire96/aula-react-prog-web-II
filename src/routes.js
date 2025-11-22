import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Watch from "./Pages/watch";


function AppRoutes () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/watch" element={<Watch />} />
    </Routes>
  );
}

export default AppRoutes;