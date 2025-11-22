import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Watch from "./Pages/watch";


function AppRoutes () {
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </BrowserRouter>
  ;
}

export default AppRoutes;