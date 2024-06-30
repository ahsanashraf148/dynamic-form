import { BrowserRouter, Routes, Route } from "react-router-dom";
import Customer from "../pages/Customer";
import Business from "../pages/Business";
import Login from "../pages/Login";
import Navbar from "../components/Navbar";
export const CONSTANT_ROUTES = {
    ROUTE_CUSTOMER : "/customer",
    ROUTE_BUSINESS : "/business",
    ROUTE_LOGIN : "/login"
}

const MainRoute = () => {


  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path={CONSTANT_ROUTES.ROUTE_CUSTOMER} element={<Customer />} />
        <Route path={CONSTANT_ROUTES.ROUTE_BUSINESS} element={<Business />} />
        <Route path={CONSTANT_ROUTES.ROUTE_LOGIN} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
