import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

export default function Main() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div>
        <Toaster position="bottom-right" />
      </div>
    </>
  );
}
