import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import SendIcon from "@mui/icons-material/Send";
import FileOpenOutlinedIcon from "@mui/icons-material/FileOpenOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import LabelImportantOutlinedIcon from "@mui/icons-material/LabelImportantOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ScheduleSendOutlinedIcon from "@mui/icons-material/ScheduleSendOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import PrivacyTipOutlinedIcon from "@mui/icons-material/PrivacyTipOutlined";
import RestoreFromTrashOutlinedIcon from "@mui/icons-material/RestoreFromTrashOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SecurityUpdateWarningOutlinedIcon from "@mui/icons-material/SecurityUpdateWarningOutlined";
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

function SideSection() {
  const [more, setMore] = useState(false);
  const [cat, setCat] = useState(false);

  return (
    <div>
      <div className=" flex  flex-col pl-5">
        <div className="flex items-center  bg-[#C2E7FF] w-[60%] cursor-pointer py-3 pl-4 gap-5 rounded-lg">
          <EditIcon />
          Compose
        </div>
        <div className="pt-5 flex  flex-col gap-1 w-[90%]">
          <div className="flex justify-between pr-3 pl-3  bg-[#C2E7FF] py-1.5 rounded-full cursor-pointer">
            <div className="flex gap-3  cursor-pointer">
              <InboxIcon />
              Inbox
            </div>
            <p className="!float-right text-slate-500">200</p>
          </div>
          <div className="flex justify-between pr-3 pl-3  hover:bg-gray-200 py-1 rounded-full cursor-pointer">
            <div className="flex gap-3  cursor-pointer">
              <StarBorderPurple500OutlinedIcon />
              Starred
            </div>
          </div>
          <div className="flex justify-between pr-3 pl-3 hover:bg-gray-200 !rounded-full  py-1  cursor-pointer">
            <div className="flex gap-3  cursor-pointer">
              <AccessTimeOutlinedIcon />
              Snoozed
            </div>
          </div>
          <div className="flex justify-between pr-3 pl-3 hover:bg-gray-200 !rounded-full  py-1  cursor-pointer">
            <div className="flex gap-3  cursor-pointer">
              <SendIcon />
              Sent
            </div>
          </div>
          <div className="flex justify-between pr-3 pl-3  hover:bg-gray-200 !rounded-full py-1  cursor-pointer">
            <div className="flex gap-3  cursor-pointer">
              <FileOpenOutlinedIcon />
              Draft
            </div>
          </div>
          <div className="flex justify-between pr-3 pl-3 hover:bg-gray-200 !rounded-full  py-1  cursor-pointer">
            <div
              className="flex gap-3  cursor-pointer"
              onClick={() => {
                setMore(!more);
              }}
            >
              <KeyboardArrowDownOutlinedIcon />
              {more ? "Less" : "More"}
            </div>
          </div>
          <div className={`${more ? "flex flex-col gap-1" : "hidden"} `}>
            <div className="flex justify-between pr-3 pl-3 hover:bg-gray-200 !rounded-full  py-1   cursor-pointer">
              <div className="flex gap-3  cursor-pointer">
                <LabelImportantOutlinedIcon />
                Important
              </div>
            </div>
            <div className="flex justify-between pr-3 pl-3 hover:bg-gray-200 !rounded-full  py-1 cursor-pointer">
              <div className="flex gap-3  cursor-pointer">
                <ChatOutlinedIcon />
                Chat
              </div>
            </div>
            <div className="flex justify-between pr-3 pl-3 hover:bg-gray-200 !rounded-full  py-1   cursor-pointer">
              <div className="flex gap-3 cursor-pointer">
                <ScheduleSendOutlinedIcon />
                Scheduled
              </div>
            </div>
            <div className="flex justify-between pr-3 pl-3  hover:bg-gray-200 !rounded-full py-1   cursor-pointer">
              <div className="flex gap-3  cursor-pointer">
                <MarkAsUnreadOutlinedIcon />
                All Mail
              </div>
            </div>
            <div className="flex justify-between pr-3 pl-3  hover:bg-gray-200 !rounded-full py-1   cursor-pointer">
              <div className="flex gap-3  cursor-pointer">
                <PrivacyTipOutlinedIcon />
                Spam
              </div>
              <p className="!float-right">14</p>
            </div>
            <div className="flex justify-between pr-3 pl-3  hover:bg-gray-200 !rounded-full py-1   cursor-pointer">
              <div className="flex gap-3  cursor-pointer">
                <RestoreFromTrashOutlinedIcon />
                Trash
              </div>
            </div>
            <div className="flex justify-between pr-3 pl-3 hover:bg-gray-200 !rounded-full  py-1   cursor-pointer">
              <div
                className="flex gap-3  cursor-pointer"
                onClick={() => {
                  setCat(!cat);
                }}
              >
                <div>
                  <KeyboardArrowDownOutlinedIcon className="!ml-[-1vw]" />
                  <SkipNextOutlinedIcon />
                </div>
                Category
              </div>
            </div>
            <div className={`${cat ? "flex flex-col gap-3" : "hidden"} pl-7`}>
              <div className="flex justify-between hover:bg-gray-200 py-1 px-3 rounded-full">
                <div className="flex gap-3   cursor-pointer">
                  <GroupOutlinedIcon />
                  Social
                </div>
                <p lassName="text-slate-500">61</p>
              </div>
              <div className="flex justify-between hover:bg-gray-200 py-1 px-3 rounded-full">
                <div className="flex gap-3 cursor-pointer">
                  <ForumOutlinedIcon />
                  Forums
                </div>
                <p lassName="text-slate-500">31</p>
              </div>
              <div className="flex justify-between hover:bg-gray-200 py-1 px-3 rounded-full">
                <div className="flex gap-3  cursor-pointer">
                  <LocalOfferOutlinedIcon />
                  Promotions
                </div>
                <p lassName="text-slate-500">14</p>
              </div>
              <div className="flex justify-between hover:bg-gray-200 py-1 px-3 rounded-full">
                <div className="flex gap-3  cursor-pointer">
                  <SecurityUpdateWarningOutlinedIcon />
                  Updates
                </div>
                <p className="text-slate-500">8</p>
              </div>
            </div>
            <div className="flex justify-between pr-3 pl-3 hover:bg-gray-200  py-1 rounded-full cursor-pointer">
              <div className="flex gap-3  cursor-pointer">
                <SettingsOutlinedIcon />
                Manage labels
              </div>
            </div>
            <div className="flex justify-between pr-3 pl-3   py-1 rounded-md cursor-pointer">
              <div className="flex gap-3  cursor-pointer">
                <AddOutlinedIcon />
                Create new label
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideSection;
