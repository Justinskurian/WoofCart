import { Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import HealthAndSupplements from "./pages/HealthAndSupplements";
import FoodAndTreats from "./pages/FoodAndTreats";
import GroomingAndCare from "./pages/GroomingAndCare";
import ToysAndFun from "./pages/ToysAndFun";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import ProductDetails from "./components/Products/ProductDetails";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="health&supplements" element={<HealthAndSupplements />} />
          <Route path="food&treats" element={<FoodAndTreats />} />
          <Route path="grooming&care" element={<GroomingAndCare />} />
          <Route path="toys&fun" element={<ToysAndFun />} />
          <Route path="order-confirmation" element={<OrderConfirmation />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order/:id" element={<OrderDetailsPage />} />
          <Route path="my-orders" element={<MyOrdersPage />} />
        </Route>

        {/* Admin Layout */}
        {/* <Route path="/" element={<UserLayout />}></Route>  */}
      </Routes>
    </>
  );
}

export default App;
