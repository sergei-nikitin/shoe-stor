import { React } from "react";
import { Outlet } from "react-router-dom";

export const Loyaut = () => {
  return (
    <>
      <Outlet />
      <>
        <p style={{ textAlign: "center", margin: "15px" }}>&#169; 2022</p>
      </>
    </>
  );
};
