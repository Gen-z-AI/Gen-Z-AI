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

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    handleClick();
  };

  const toggleMobileMenu = () => {
    setMobile(!mobile);
  };

  return (
    <div className="h-screen w-full flex flex-col items-center">
      <Header toggleMobileMenu={toggleMobileMenu} />
      <div className="flex flex-col justify-between  overflow-x-hidden overflow-y-scroll scroll-smooth gap-2 min-h-[calc(100vh-4rem)] relative">

        {prompt ? (
          <Prompt />
        ) : (
          <div className="lg:mt-28 mt-14 middle-part justify-between w-full items-center px-5 grid grid-cols-1 gap-2 sm:gap-5">
            <AIGreeting />
            <Suggestions setData={setData} />
          </div>
        )}

        <form onSubmit={handleSubmit}> {/* Wrap input field in a form element */}
          <Footer
            data={data}
            handlechange={handlechange}
            handleClick={handleClick}
          />
        <p className="text-xs mb-2 px-10 text-neutral-600 text-center">
          This answer is provided by this Gen-Z-Ai tool, could be wrong that&apos;why don&apos;t take it seriously
        </p>
        </form>
      </div>
    </div>
  );
};

export default Main;
