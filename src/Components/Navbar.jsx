import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsIcon from "@mui/icons-material/Apps";
import { Avatar } from "antd";

function Navbar() {
  return (
    <div className="flex items-center justify-between bg-[#F6F8FC] !w-[100vw] px-4 fixed z-50">
      <div className="flex items-center justify-between w-[54vw]">
        <div className="flex items-center ">
          <MenuIcon className="!text-xl cursor-pointer" />
          <img
            src={logo}
            width={120}
            height={70}
            className="cursor-pointer"
            alt="not founed"
          />
        </div>
        <div className="w-[40vw] relative flex items-center">
          <input
            type="text"
            placeholder="Search mail"
            className="border-none bg-[#EAF1FB] py-3 w-full rounded-full pl-12 outline-none"
          />
          <SearchIcon className="absolute left-4  !font-light" />
          <TuneIcon className="absolute right-4  !font-light cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center gap-7">
        <HelpOutlineIcon className="cursor-pointer" />
        <SettingsOutlinedIcon className="cursor-pointer" />
        <AppsIcon className="cursor-pointer" />
        <Avatar className="bg-[#B72D35] cursor-pointer" size="medium">
          r
        </Avatar>
      </div>
    </div>
  );
}

export default Navbar;
