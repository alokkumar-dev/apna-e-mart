import { Shoes } from "../Shoes/Shoes";
import { Books } from "../Books/Books";
import { HomePage } from "../Home/Home";
import { Cloths } from "../Cloths/Cloths";
import { Cart } from "../CartPage/CartPage";
import { Route, Routes } from "react-router-dom";
import { ResponsiveAppBar } from "../Navbar/Navbar";
import { Checkout } from "../CheckoutPage/CheckoutPage";
import { Electronics } from "../Electronics/Electronics";
import { PaymentPage } from "../PaymentPage/PaymentPage";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { PaymentSuccessFull } from "../PaymentSuccessfull/PaymentSuccessfull";
import SignUp from "../SignUp/SignUp";
import LogIn from "../Login/Login";

export const AllRoutes = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Cloths" element={<Cloths />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/:category/:id" element={<ProductDetails />} />
        <Route path="/orderSuccessful" element={<PaymentSuccessFull />} />
      </Routes>
    </>
  );
};
