import React from "react";
import { Outlet } from "react-router-dom";
import { AsideBard } from "../../Components/UserPanel/AsideBar";

const UserPanelLayout = () => {
  return (
    <div dir="rtl" className="flex flex-row mt-16">
      <AsideBard />
      <Outlet />
    </div>
  );
};

export default UserPanelLayout;
