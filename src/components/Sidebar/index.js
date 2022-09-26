import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoWhite from "../../assets/white-celerates.svg";
import "../../../src/hamburgers.css";
// import ArrowIcon from "../../assets/arrow-forward-circle-outline.svg";

const Sidebar = () => {
  // const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex">
        {/* aside */}
        <aside
          className="flex gap-3 w-64 flex-col space-y-2 border-r-2 border-gray-200 bg-slate-900 p-2 text-white h-[100vh]"
          x-show="asideOpen"
        >
          <div className="flex items-center gap-3 space-x-1 rounded-md px-2 my-3 pt-1 hover:text-blue-600">
            <img src={LogoWhite} className="w-36 h-auto" alt="" />
          </div>
          <Link
            to="/admin/dashboard"
            className="flex items-center gap-3 space-x-1 rounded-md px-2 py-3 hover:text-blue-600"
          >
            <span className="text-[32px]">
              <ion-icon name="podium-outline"></ion-icon>
            </span>
            <span className="text-2xl">
              <i className="bx bx-home" />
            </span>
            <span>Dashboard</span>
          </Link>
          <Link
            to="/admin/jobs"
            className="flex items-center gap-3 space-x-1 rounded-md px-2 py-3 hover:text-blue-600"
          >
            <span className="text-[32px]">
              <ion-icon name="briefcase-outline"></ion-icon>
            </span>
            <span className="text-2xl">
              <i className="bx bx-board" />
            </span>
            <span>Job Board</span>
          </Link>
          <Link
            to="/admin/jobs/form"
            className="flex items-center gap-3 space-x-1 rounded-md px-2 py-3 hover:text-blue-600"
          >
            <span className="text-[32px]">
              <ion-icon name="duplicate-outline"></ion-icon>
            </span>
            <span className="text-2xl">
              <i className="bx bx-new-job" />
            </span>
            <span>Insert New Job</span>
          </Link>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
