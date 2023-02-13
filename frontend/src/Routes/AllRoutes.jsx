import Cart from "../cart/Cart";
import { Route, Routes } from "react-router";
import { Login } from "../Components/Register/Login";
import { Signup } from "../Components/Register/Signup";
import Home from "../Pages/Home";
import { Products } from "../Pages/ProductsPage/Products";
import { ProductsDetails } from "../Pages/ProductsDetails/ProductsDetails";
import { PaymentPage } from "../Pages/PaymentPage";
import { CheckoutPage } from "../Pages/CheckoutPage";
import { Wishlist } from "../Components/Wishlist/Wishlist";
import { MyAccount } from "../Components/MyAccount/MyAccount";
import { Team } from "../Components/ContactUs/Team";
import { Mens } from "../Components/ProductCategory/Mens";
import { Womens } from "../Components/ProductCategory/Womens";
import { Kids } from "../Components/ProductCategory/Kids";
import { Electronics } from "../Components/ProductCategory/Electronics";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/team" element={<Team />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/myaccount" element={<MyAccount />} />
      </Routes>
    </>
  );
};
