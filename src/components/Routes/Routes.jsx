import { Route, Routes } from "react-router-dom";
import { Books } from "../Books/Books";
import { Cart } from "../CartPage/CartPage";
import { Checkout } from "../CheckoutPage/CheckoutPage";
import { Cloths } from "../Cloths/Cloths";
import { Electronics } from "../Electronics/Electronics";
import { HomePage } from "../Home/Home";
import { ResponsiveAppBar } from "../Navbar/Navbar";
import { PaymentPage } from "../PaymentPage/PaymentPage";
import { ProductDetails } from "../ProductDetails/ProductDetails";
import { Shoes } from "../Shoes/Shoes";

export const AllRoutes = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/Shoes" element={<Shoes />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Cloths" element={<Cloths />} />
        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/:category/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};
