import React, { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faUser, faBars } from "@fortawesome/free-solid-svg-icons";

import { Context } from "../../context/Context";
// import { setextend } from "../Sidebar/Sidebar";

import { assets } from "../../assets/assets";
// import { SideBarRef } from '../Sidebar/Sidebar';

const Main = ({ showSideBar, isSidebarShow, isSidebarWidth }) => {

  // console.log(isSidebarWidth);

  const style = {};

  if (window.innerWidth > 800 ) {
    style.left = isSidebarWidth;
    style.width = `calc(100vw - ${isSidebarWidth}px)`;
  };

  const [sideBarWidth, setSideBarWidth] = useState({});
  

  useEffect(() => {
    if (window.innerWidth > 800) {
      
      setSideBarWidth({
        left: isSidebarWidth,
        width: `calc(100vw - ${isSidebarWidth}px)`,
      });

    }
  }, [isSidebarWidth ,window.onload ]);

  // console.log(sideBarWidth);
  const {
    inputValue,
    setInputValue,
    resentPromt,
    setResentPromt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    loader,
    resultData,
    onSend,
    newChat,
    setextend,
    extend,

  } = useContext(Context);

  
  
// console.log(isSidebarWidth)
  const [hamber, setHamber] = useState(false);
  const navRef = useRef(null);
  const [navHeight, setNavHeight] = useState(null);

  useEffect(() => {
    if (navRef) {
      setNavHeight(navRef.current.clientHeight);
    }
  }, [navRef]);

  return (
    <main
      onClick={() => {
        if (isSidebarShow) {
          console.log("click", extend);
          showSideBar();
        }
      }}
      // style={
      //   // window.innerWidth > 800
      //   //   ? isSidebarWidth
      //   //     ? { marginLeft: sideBarWidth.left }
      //   //     : {}
      //   //   : {}
      // }
      className={`  min-h-screen max-h-[100vh] w-full relative flex flex-col justify-center items-center`}
    >
      <div
        ref={navRef}
        className="nav flex justify-between px-5 py-5 items-center w-full"
      >
        <div className="flex gap-4 items-center">
          {window.innerWidth < 800 && (
            <FontAwesomeIcon
              onClick={() => {
                // console.log("click" )
                showSideBar();
              }}
              className="w-5 cursor-pointer"
              icon={faBars}
              size="2x"
            />
          )}
          <h2 className="Roboto font-medium text-xl text-[#585858]">Gemini</h2>
        </div>
        <div>
          <img className="w-8 rounded-full " src={assets.user_icon} alt="" />
        </div>
      </div>
      <div
        className={`${
          showResult ? "" : "flex flex-col justify-center items-center gap-10 "
        }relative main-container  px-5 pb-[20vh] lg:w-[80%] w-full`}
        style={{ minHeight: `calc(100vh - ${navHeight}px)` }}
      >
        {!showResult ? (
          <>
            <div className="greet text-2xl text-center font-Roboto font-medium text-[#c4c7c5] ">
              <h1 className="gradient-text text-3xl lg:text-5xl">
                Hello, NavRaj
              </h1>
              <p className="lg:text-4xl">How can I help you today ?</p>
            </div>
            {window.innerWidth > 800 && (
              <div className="cards flex  justify-center items-center gap-5 ">
                <div className="card bg-[#f0f4f9] p-5 rounded-2xl hard-boxShasow flex flex-col Roboto text-[#585858] cursor-pointer transform   hover:scale-105 transition-all duration-200 w-1/4 h-[30vh] items-center justify-between">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Provident, quam.
                  </p>
                  <img
                    className="w-8 self-end bg-white rounded-full p-1 box-content"
                    src={assets.compass_icon}
                    alt="compass-icon"
                  />
                </div>
                <div className="card bg-[#f0f4f9] p-5 rounded-2xl hard-boxShasow flex flex-col  Roboto text-[#585858] cursor-pointer transform   hover:scale-105 transition-all duration-200  w-1/4 h-[30vh] items-center justify-between">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Provident, quam.
                  </p>
                  <img
                    className="w-8 self-end bg-white rounded-full p-1 box-content"
                    src={assets.bulb_icon}
                    alt="compass-icon"
                  />
                </div>
                <div className="card bg-[#f0f4f9] p-5 rounded-2xl hard-boxShasow flex flex-col Roboto text-[#585858] cursor-pointer transform   hover:scale-105 transition-all duration-200  w-1/4 h-[30vh] items-center justify-between">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Provident, quam.
                  </p>
                  <img
                    className="w-8 self-end bg-white rounded-full p-1 box-content"
                    src={assets.message_icon}
                    alt="compass-icon"
                  />
                </div>
                <div className="card bg-[#f0f4f9] p-5 rounded-2xl hard-boxShasow flex flex-col Roboto text-[#585858] cursor-pointer transform   hover:scale-105 transition-all duration-200  w-1/4 h-[30vh] items-center justify-between">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Provident, quam.
                  </p>
                  <img
                    className="w-8 self-end bg-white rounded-full p-1 box-content"
                    src={assets.code_icon}
                    alt="compass-icon"
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div
              id="result"
              className="reault box-content max-h-[70vh] overflow-y-scroll  no-scrollbar lg:w-[70%] lg:m-auto"
            >
              <div className="title flex items-center gap-5">
                <img
                  src={assets.user_icon}
                  alt="user-icon"
                  className="rounded-full w-9"
                />
                <h2 className="font-medium">{resentPromt}</h2>
              </div>

              <div className="rsult_data flex flex-col  items-start mt-2 gap-1 font-light">
                <img
                  src={assets.gemini_icon}
                  alt="gemini_icon"
                  className="w-10"
                />

                {loader ? (
                  <>
                    <div className="loader flex flex-col gap-2 w-full rounded-2xl ">
                      <hr className="hr-style border-none h-3 w-full rounded-2xl" />
                      <hr className="hr-style border-none h-3 w-full rounded-2xl" />
                      <hr className="hr-style border-none h-3 w-full rounded-2xl" />
                    </div>
                  </>
                ) : (
                  <p
                    className="text-[17px] leading-7"
                    dangerouslySetInnerHTML={{ __html: resultData }}
                  ></p>
                )}
              </div>
            </div>
          </>
        )}

        <div
          className={`main-bottom box-border left-0 w-full px-5 absolute bottom-0  py-5 box-border 
          `}
          // style={style}
        >
          <div className="search-bar bg-[#f0f4f9] flex rounded-full  w-full  lg:bg-transparent justify-center">
            <div className="flex w-full lg:w-[70%] lg:ml-0 lg:bg-[#f0f4f9] px-2 py-2.5  rounded-full">
              <input
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                  console.log(input);
                }}
                type="text"
                placeholder="Ask Gemini"
                className="border border-none outline-none pl-5 w-[80%] box-content px-5 box-content  lg:w-[90%]"
              />
              <div className="flex gap-2">
                <img
                  onClick={() => {
                    onSend();
                  }}
                  className="w-5 cursor-pointer ml-2 "
                  src={assets.send_icon}
                  alt="send-icon"
                />
              </div>
            </div>
          </div>
          <p className="pt-2 Roboto text-center text-[10px] font-sans text-[#585858] lg:text-sm">
            Gemini can make mistakes, so double-check it
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
