import React from "react";
import { IoReorderThreeOutline, IoSettingsOutline } from "react-icons/io5";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { GoPlus } from "react-icons/go";
import { AiOutlineMessage as LuMessageSquare, AiOutlineQuestionCircle } from "react-icons/ai";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import "./Sidebar.css";
import { Myprovider } from "../ai-context/AiContext";

function Sidebar() {
  const { allprompt, setPrompt, history, setHistory, setRecent, allresponse, setRecentans, menu, setMenu, mobile, setMobile } = Myprovider();

  const handleHistory = (id) => {
    setHistory(true);
    setRecent(allprompt[id]);
    setRecentans(allresponse[id]);
  };

  const handleClear = () => {
    setPrompt(false);
    setHistory(false);
  };

  const MenuToggle = () => (
    <div className="w-10 h-10 flex justify-center items-center rounded-full cursor-pointer hover:bg-slate-200">
      <IoReorderThreeOutline className="text-2xl sm:block" onClick={() => setMenu(!menu)} />
    </div>
  );

  const NewChatButton = () => (
    <div className={`${menu ? "w-10 h-10 " : "w-32"} h-10 p-1 rounded-full flex justify-center items-center gap-2`} style={{ background: "rgba(223, 228, 234,1.0)" }} onClick={handleClear}>
      <GoPlus className="text-2xl" style={{ color: "rgba(87, 101, 116,1.0)" }} />
      {!menu && <h1 className="text-sm cursor-pointer" style={{ color: "rgba(87, 101, 116,1.0)" }}>New chat</h1>}
    </div>
  );

  const RecentChats = () => (
    <div className="recent h-60 overflow-auto">
      <h1 className="ms-2">Recent</h1>
      {allprompt.map((curr, i) => (
        <div onClick={() => handleHistory(i)} key={i} className="w-full flex p-2 my-1 hover:bg-slate-200 rounded-full overflow-hidden">
          <div className="w-9"> <IoChatbubbleEllipsesOutline className="text-2xl" /> </div>
          <p className="text-sm overflow-hidden text-nowrap cursor-pointer">{curr}...</p>
        </div>
      ))}
    </div>
  );

  const MenuItem = ({ title, Icon }) => (
    <div className="w-full flex flex-col justify-center items-center gap-2 p-2 rounded-full hover:bg-slate-200 cursor-pointer">
      <div className="w-full flex gap-5 items-center">
        <Icon className="text-2xl" />
        {!menu && <h1 className="text-md">{title}</h1>}
      </div>
    </div>
  );

  return (
    <>
      <div className="side-bar sm:hidden lg:block" style={{ background: "#F0F4F9" }}>
        <div className={`${menu ? "w-18" : "effect"} h-full p-2 flex flex-col justify-between`}>
          <div className="flex flex-col gap-10 p-2">
            <MenuToggle />
            <NewChatButton />
            {!menu && <RecentChats />}
          </div>
          <div className="flex flex-col">
            <MenuItem title="Help" Icon={AiOutlineQuestionCircle} />
            <MenuItem title="Activity" Icon={RxCounterClockwiseClock} />
            <MenuItem title="Settings" Icon={IoSettingsOutline} />
          </div>
        </div>
      </div>
      {!mobile && (
        <div className="for mobile">
          <div className="w-80 h-screen absolute top-3 left-0 z-20 flex flex-col justify-around" style={{ background: "#F0F4F9" }}>
            <div className="inline-block rounded-full ml-3 mt-5 border border-gray-300 p-1 mr-5">
              <NewChatButton />
            </div>
            <div className="ml-5">
              <RecentChats />
            </div>
            <div className="flex flex-col">
              <div className="inline-block flex rounded-full ml-3 mt-5 border border-gray-300 p-1 mr-5 items-center">
                <MenuItem title="Help" Icon={AiOutlineQuestionCircle} />
                <h1>Help</h1>
              </div>
              <div className="inline-block flex items-center rounded-full ml-3 mt-5 border border-gray-300 p-1 mr-5">
                <MenuItem title="Activity" Icon={RxCounterClockwiseClock} />
                <h1>Activity</h1>
              </div>
              <div className="inline-block flex items-center rounded-full ml-3 mt-5 border border-gray-300 p-1 mr-5">
                <MenuItem title="Settings" Icon={IoSettingsOutline} />
                <h1>Settings</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;
