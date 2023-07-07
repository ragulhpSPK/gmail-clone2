import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Tabs } from "antd";
import { Inbox } from "@mui/icons-material";

function BodySection() {
  const [open, setOpen] = useState(false);

  const items = [
    {
      key: "1",

      label: (
        <span className="!w-[15vw]">
          <Inbox /> Primary
        </span>
      ),
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: "3",
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <div className="pt-3 pl-2 flex gap-2">
        <div className="flex flex-col items-center cursor-pointer relative">
          <div className="flex  items-center cursor-pointer ">
            <input type="checkbox" />
            <KeyboardArrowDownOutlinedIcon
              onClick={() => {
                setOpen(!open);
              }}
            />
          </div>
          <div
            className={`${
              open ? "block" : "hidden"
            } bg-white shadow-lg  px-10 absolute z-50 top-8 rounded-md left-1 py-2`}
          >
            <p>all</p>
            <p>none</p>
            <p>read</p>
            <p>unread</p>
            <p>starred</p>
            <p>unstarred</p>
          </div>
        </div>
        <RefreshOutlinedIcon />
        <MoreVertOutlinedIcon />
      </div>
      <div>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          size="large"
        />
      </div>
    </div>
  );
}

export default BodySection;
