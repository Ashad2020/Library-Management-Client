import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Banner from "../Components/Banner/Banner";
import Footer from "../Components/Footer/Footer";
import Review from "../Components/CategoryCard/ReaderReview/Review";
import BookForAll from "../Components/BookForAll/BookForAll";

export default function Main() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Outlet></Outlet>
      <Review></Review>
      <BookForAll></BookForAll>
      <Footer></Footer>
      <div>
        <Toaster position="bottom-right" />
      </div>
    </>
  );
}
