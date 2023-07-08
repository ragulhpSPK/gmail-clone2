import React from "react";
import cal from "../assets/cal.png";
import bulb from "../assets/bulb.png";
import social from "../assets/social.png";
import sent from "../assets/sent.png";
import { Divider } from "antd";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function RightSide() {
  return (
    <div>
      <div className="flex flex-col gap-10 items-center">
        <div>
          <img
            src={cal}
            alt="cal"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
        <div>
          <img
            src={cal}
            alt="cal"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
        <div>
          <img
            src={cal}
            alt="cal"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>

        <div>
          <img
            src={social}
            alt="cal"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="w-[1.5vw] m-auto flex flex-col gap-2 items-center justify-center">
        <Divider />
        <AddOutlinedIcon className="cursor-pointer" />
      </div>
    </div>
  );
}

export default RightSide;
