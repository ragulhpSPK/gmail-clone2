import React from "react";
import cal from "../assets/cal.png";
import { Divider } from "antd";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Person4Icon from "@mui/icons-material/Person4";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

function RightSide() {
  return (
    <div className="fixed">
      <div className="flex flex-col gap-10 items-center ">
        <div>
          <img
            src={cal}
            alt="cal"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </div>
        <div className="bg-yellow-400">
          <LightbulbIcon
            style={{
              color: "white",
              paddingBottom: 2,
            }}
          />
        </div>
        <div>
          <CheckCircleOutlineIcon
            style={{
              color: "blue",
            }}
          />
        </div>

        <div>
          <Person4Icon
            style={{
              color: "blue",
            }}
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
