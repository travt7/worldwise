import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
//In this project I am using React Router and CSS Modules
//<NavLink> and <Link> are both part of the react router library and are used for client
//side routing in React Apps.<NavLink> provides additional props like activeClassName,
//activeStyle, exact, isActive, etc., which allow you to customize the appearance or
//behavior of the link based on whether it matches the current URL.
export default App;
