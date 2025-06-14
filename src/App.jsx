import React, { useState, useContext } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import { Context } from "./context/Context";

const App = () => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  const [isSidebarWidth, setSidebarWidth] = useState(null);

  const { extend, setextend } = useContext(Context);

  const showSideBar = () => {
    setIsSidebarShow((prev) => !prev);
    setextend(true);
    console.log(extend)
  };

  const setSideBarWidthFun = (swidth) => {
    setSidebarWidth(swidth);
  };

  return (
    <div className="relative flex ">
      <Sidebar
        isSidebarShow={isSidebarShow}
        setSideBarWidthFun={setSideBarWidthFun}
      />

      <Main
        showSideBar={showSideBar}
        isSidebarShow={isSidebarShow}
        isSidebarWidth={isSidebarWidth}
      />
    </div>
  );
};

export default App;
