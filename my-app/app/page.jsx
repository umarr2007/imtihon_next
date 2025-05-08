"use client";
import Slider from "./components/Slider/Slider";
import Navbar from "./components/navbar/Navbar";
// import blog from "./pages/Blog/page";
import Product from "./pages/Product/page";
// import Categories from "./pages/Product/page";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Product />
   
    </div>
  );
}
