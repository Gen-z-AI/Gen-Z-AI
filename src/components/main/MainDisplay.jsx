import React from "react";
import { Myprovider } from "../ai-context/AiContext";
import Sidebar from "../../components/sidebar/Sidebar";
import History from "../../components/history/History";
import Main from "../../components/main/Main";

function MainDisplay() {
  const { history } = Myprovider();
  
  return (
    <div className="flex">
      <Sidebar />
      {history ? <History/> : <Main />}
    </div>
  );
}

export default MainDisplay;
