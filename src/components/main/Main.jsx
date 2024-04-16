import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Myprovider } from "../ai-context/AiContext";
import Prompt from "../prompt/Prompt";
import Loader from "../loader/Loader";
import "../css/Global.css";
import Slider from "react-slick";
import Auth0UserInfo from "../auth0UserInfo/Auth0UserInfo";
import AIGreeting from "./aigreeting/AIGreeting";
import Suggestions from "./suggestioncard/SuggestionCard";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Main = () => {
  const { isAuthenticated } = useAuth0();
  const {
    data,
    setData,
    sent,
    prompt,
    setPrompt,
    allprompt,
    setAllprompt,
    menu,
    setMenu,
    mobile,
    setMobile,
  } = Myprovider();
  const [isListening, setIsListening] = useState(false); // State to track voice input status

  const handlechange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    if (data.length === 0) {
      alert("please Enter a prompt");
    } else {
      sent(data);
      setData("");
      setPrompt(true);
      setAllprompt([...allprompt, data]);
    }
  };

  const handlekey = (e) => {
    if (e.key === "Enter") {
      if (data.length === 0) {
        alert("please Enter a Prompt");
      } else {
        handleClick();
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobile(!mobile);
  };

  return (
    <div className="lg:w-screen sm:w-screen flex flex-col items-center overflow-y-scroll scroll-smooth">
      <div className="h-screen bg-white flex flex-col justify-between">
        <Header toggleMobileMenu={toggleMobileMenu} />

        {prompt ? (
          <Prompt />
        ) : (
          <div className="middle-part w-full sm:gap-4 flex flex-col items-center p-5 grid grid-cols-1 gap-5">
            <AIGreeting />
            <Suggestions setData={setData} />
          </div>
        )}

        <Footer
          data={data}
          handlechange={handlechange}
          handleClick={handleClick}
          handlekey={handlekey}
        />
        <h1 className="text-center">
          The Answer Provided by this Ai tool could be wrong that'why don't
          take it seriously
        </h1>
      </div>
    </div>
  );
};

export default Main;
