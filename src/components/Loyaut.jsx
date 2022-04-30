import { React } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer/Footer";

export const Loyaut = () => {
  return (
    <>
      <Outlet />
      <>
        <Footer />
      </>
    </>
  );
};
