import { useContext, useEffect, useRef, useState } from "react";
import React from "react";

import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = ({ isSidebarShow, setSideBarWidthFun }) => {
  const SideBarRef = useRef(null);
  const [currentWidth, setCurrentWidth] = useState(null);

  const { onSend, prevPrompts, newChat, extend, setextend } =
    useContext(Context);

  // console.log(prevPrompts);

  const prevPromtCall = (promt) => {
    onSend(promt);
  };

  useEffect(() => {
    if (SideBarRef.current) {
      // console.log(SideBarRef.current.offsetWidth);
      setSideBarWidthFun(SideBarRef.current.clientWidth);
    }
  }, []);

  return (
    <>
      <div
        ref={SideBarRef}
        className={`sidebar lg:w-fit box-border flex flex-col justify-between min-h-screen bg-[#f0f4f9]  max-w-1/6  px-5 py-5  transition-all duration-500 z-10
             ${
               window.innerWidth < 800
                 ? `min-w-[80%] fixed ${
                     isSidebarShow ? "translate-x-[0%]" : "translate-x-[-100%]"
                   }`
                 : ""
             }

             ${extend && "min-w-1/6"}
     
          `}
      >
        <div className="top ">
          {window.innerWidth > 800 && (
            <img
              onClick={() => setextend((prev) => !prev)}
              className="w-7 cursor-pointer hover:bg-[#e2e6e1] rounded-full p-2 box-content"
              src={assets.menu_icon}
              alt="menu_icon"
            />
          )}

          <div
            onClick={() => newChat()}
            className="flex  rounded-3xl bg-[#e6eaf1] py-2 gap-3 items-start justify-start w-fit  my-8 cursor-pointer"
          >
            <img
              className="w-5 box-content px-2"
              src={assets.plus_icon}
              alt="plus_icon"
            />
            {extend ? (
              <p className="w-fit pr-3 text-gray-700 cursor-pointer">
                New Chat
              </p>
            ) : null}
          </div>

          {extend ? (
            <>
              <h2 className="font-semibold py-2">Recent </h2>
              <div className="max-h-[50vh]  overflow-x-scroll no-scrollbar">
                {prevPrompts.map((item, index) => {
                  return (
                    <div
                      onClick={() => prevPromtCall(item)}
                      className="flex gap-1   cursor-pointer hover:bg-[#e2e6e1] rounded-xl px-2 py-1 "
                    >
                      <img
                        className="w-6"
                        src={assets.message_icon}
                        alt="message_icon"
                      />
                      {console.log(item.length)}
                      <p className="pr-2">
                        {item.length > 22 ? item.slice(0, 22) + "..." : item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </>
          ) : null}
        </div>

        <div className="bottom flex flex-col gap-2">
          <div className="flex gap-2 items-center ">
            <img
              className="w-5 hover:bg-[#e2e6e1] rounded-2xl box-content p-1 cursor-pointer"
              src={assets.question_icon}
              alt="question_icon"
            />
            {extend ? <p className="cursor-pointer">Help</p> : null}
          </div>

          <div className="flex gap-2 items-center">
            <img
              className="w-5 hover:bg-[#e2e6e1] rounded-2xl box-content p-1 cursor-pointer"
              src={assets.history_icon}
              alt="history_icon"
            />
            {extend ? <p className="cursor-pointer">Activity</p> : null}
          </div>

          <div className="flex gap-2 items-center">
            <img
              className="w-5 hover:bg-[#e2e6e1] rounded-2xl box-content p-1 cursor-pointer"
              src={assets.setting_icon}
              alt="setting_icon"
            />
            {extend ? <p className="cursor-pointer">Setting</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

// export {setextend}
export default Sidebar;
