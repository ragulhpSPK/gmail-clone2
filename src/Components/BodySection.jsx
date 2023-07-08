import React, { useState } from "react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { Tabs, Rate } from "antd";
import { Inbox } from "@mui/icons-material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import DragIndicatorOutlinedIcon from "@mui/icons-material/DragIndicatorOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

function BodySection() {
  const [open, setOpen] = useState(false);

  const items = [
    {
      key: "1",

      label: (
        <span className="!w-[15vw] pl-2">
          <Inbox /> Primary
        </span>
      ),
      children: (
        <>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((res, i) => {
            return (
              <div className="flex justify-between cursor-pointer items-center group border-b py-2.5 hover:shadow-md duration-700 shadow-black/60">
                <div className="flex pl-4  items-center">
                  <DragIndicatorOutlinedIcon
                    style={{
                      fontSize: "18px",
                      backdropFilter: "10px",
                    }}
                    className="invisible group-hover:visible"
                  />
                  <div className="flex gap-4 !items-center justify-center">
                    <input type="checkbox" />
                    <Rate
                      count={1}
                      style={{
                        fontSize: "15px",
                      }}
                    />
                  </div>
                </div>
                <p>LeetCode</p>

                <p className="flex group gap-2">
                  <span className="font-bold group-hover:font-normal">
                    LeetCode Weekly Digest
                  </span>
                  <span>-</span>
                  <p className="w-[55vw] group-hover:w-[49vw]">
                    <span className="text-ellipsis w-[55vw] group-hover:w-[50vw] overflow-hidden line-clamp-1">
                      Hi LeetCoders! Are you interested in using your coding
                      expertise to help millions of LeetCoders expand their
                      knowledge base and further their careers? LeetCode is
                      looking for HTML/CSS, DOM, React experts to join the
                      content team! Check out this post to learn more about the
                      requirements to join LeetCode's content team.
                    </span>
                  </p>
                </p>
                <p className="pr-5  group-hover:hidden">Jul 7</p>
                <p className=" gap-4 pr-7 hidden group-hover:flex">
                  <ArchiveOutlinedIcon />
                  <RestoreFromTrashOutlinedIcon />
                  <EmailOutlinedIcon />
                  <AccessTimeOutlinedIcon />
                </p>
              </div>
            );
          })}
        </>
      ),
    },
    {
      key: "2",
      label: (
        <span className="!w-[15vw]">
          <LocalOfferIcon /> Promotions
        </span>
      ),
      children: (
        <>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20,
          ].map((res, i) => {
            return (
              <div className="flex justify-between cursor-pointer items-center group border-b py-2.5 hover:shadow-md duration-700 shadow-black/60">
                <div className="flex pl-4  items-center">
                  <DragIndicatorOutlinedIcon
                    style={{
                      fontSize: "18px",
                      backdropFilter: "10px",
                    }}
                    className="invisible group-hover:visible"
                  />
                  <div className="flex gap-4 !items-center justify-center">
                    <input type="checkbox" />
                    <Rate
                      count={1}
                      style={{
                        fontSize: "15px",
                      }}
                    />
                  </div>
                </div>
                <p>LeetCode</p>

                <p className="flex group gap-2">
                  <span className="font-bold group-hover:font-normal">
                    LeetCode Weekly Digest
                  </span>
                  <span>-</span>
                  <p className="w-[55vw] group-hover:w-[49vw]">
                    <span className="text-ellipsis w-[55vw] group-hover:w-[50vw] overflow-hidden line-clamp-1">
                      Hi LeetCoders! Are you interested in using your coding
                      expertise to help millions of LeetCoders expand their
                      knowledge base and further their careers? LeetCode is
                      looking for HTML/CSS, DOM, React experts to join the
                      content team! Check out this post to learn more about the
                      requirements to join LeetCode's content team.
                    </span>
                  </p>
                </p>
                <p className="pr-5  group-hover:hidden">Jul 7</p>
                <p className=" gap-4 pr-7 hidden group-hover:flex">
                  <ArchiveOutlinedIcon />
                  <RestoreFromTrashOutlinedIcon />
                  <EmailOutlinedIcon />
                  <AccessTimeOutlinedIcon />
                </p>
              </div>
            );
          })}
        </>
      ),
    },
    {
      key: "3",
      label: (
        <span className="!w-[15vw]">
          <PeopleAltOutlinedIcon /> Social
        </span>
      ),
      children: (
        <>
          <div className="flex items-center text-[14px] border-b !mt-[-16px] hover:border py-2.5 duration-1000 group hover:shadow-md shadow-black/60 cursor-pointer">
            <div className="flex pl-10 gap-3 items-center">
              <Rate
                count={1}
                style={{
                  fontSize: "15px",
                }}
              />
              <p className="font-bold group-hover:font-normal">
                Boeing Careers
              </p>
            </div>
            <div className="flex pl-20 items-center">
              <p className="flex gap-2 items-center">
                <span className="text-green-600 border border-green-700 h-6 px-[3px]">
                  Ad
                </span>
                We’re hiring full-stack developers
              </p>
              <p>
                Explore opportunities in UI, database, cloud and mobile
                technologies. Join our team.
              </p>
            </div>
            <div className="flex pl-[17vw] gap-8">
              <p className="text-blue-600 w-[8vw] font-bold text-[12px]  invisible group-hover:visible   ">
                <span className="border rounded-full border-slate-300 px-3 py-2">
                  Apply now
                  <ExitToAppIcon />
                </span>
              </p>
              <p className="invisible  group-hover:visible">
                <DeleteForeverOutlinedIcon />
              </p>
              <p>
                <MoreVertOutlinedIcon />
              </p>
            </div>
          </div>
          <div className="flex items-center text-[14px] border-b  hover:border py-2.5 duration-1000 group hover:shadow-md shadow-black/60 cursor-pointer">
            <div className="flex pl-10 gap-3 items-center">
              <Rate
                count={1}
                style={{
                  fontSize: "15px",
                }}
              />
              <p className="font-bold group-hover:font-normal">
                Boeing Careers
              </p>
            </div>
            <div className="flex pl-20 items-center">
              <p className="flex gap-2 items-center">
                <span className="text-green-600 border border-green-700 h-6 px-[3px]">
                  Ad
                </span>
                We’re hiring full-stack developers
              </p>
              <p>
                Explore opportunities in UI, database, cloud and mobile
                technologies. Join our team.
              </p>
            </div>
            <div className="flex pl-[17vw] gap-8">
              <p className="text-blue-600 w-[8vw] font-bold text-[12px]  invisible group-hover:visible   ">
                <span className="border rounded-full border-slate-300 px-3 py-2">
                  Open now
                  <ExitToAppIcon />
                </span>
              </p>
              <p className="invisible  group-hover:visible">
                <DeleteForeverOutlinedIcon />
              </p>
              <p>
                <MoreVertOutlinedIcon />
              </p>
            </div>
          </div>
        </>
      ),
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <div className=" pl-2 mt-[-20px] flex gap-2 py-3 fixed h-[5vh] shadow w-[82vw] bg-white items-center z-50">
        <div className="flex flex-col items-center cursor-pointer relative ">
          <div className="flex  items-center  cursor-pointer ">
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
            } bg-white shadow-lg  px-10 absolute z-50 top-8 rounded-md left-1 py-2 `}
          >
            <p>all</p>
            <p>none</p>
            <p>read</p>
            <p>unread</p>
            <p>starred</p>
            <p>unstarred</p>
          </div>
        </div>
        <RefreshOutlinedIcon className="cursor-pointer" />
        <MoreVertOutlinedIcon className="cursor-pointer" />
      </div>
      <div className="pt-[5vh]">
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
