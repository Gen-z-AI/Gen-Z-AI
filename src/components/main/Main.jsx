import React, { useState, useEffect } from "react";
import { PiCompassThin } from "react-icons/pi";
import { SlBulb } from "react-icons/sl";
import { LuMessageSquare } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";
import { IoReorderThreeOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
import { Myprovider } from "../ai-context/AiContext";
import Prompt from "../prompt/Prompt";
import Footer from "./footer/Footer";
import Loader from "../loader/Loader";
import "../css/Global.css";
import Slider from "react-slick";
import Auth0UserInfo from "../auth0UserInfo/Auth0UserInfo";
import AIGreeting from "./aigreeting/AIGreeting";

const Main = () => {
  const { isAuthenticated } = useAuth0();
  const { data, setData, sent, prompt, setPrompt, allprompt, setAllprompt, menu, setMenu, mobile, setMobile } = Myprovider();
  const [isListening, setIsListening] = useState(false); // State to track voice input status

  const [suggestions] = useState([
    {
      id: "suggestion1",
      text: "Suggest Beautiful Places to see on an upcoming road trip",
      icon: <PiCompassThin className="text-3xl" />
    },
    {
      id: "suggestion2",
      text: "Briefly Summarize this concept: Urban planning",
      icon: <SlBulb />
    },
    {
      id: "suggestion3",
      text: "Brainstorm Team bonding activities for our work retreat",
      icon: <LuMessageSquare />
    },
    {
      id: "suggestion4",
      text: "Improve the readability of following code",
      icon: <FaCode />
    }
  ]);

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

  const handlesuggestion = (value) => {
    setData(value);
  };

  const handlekey = (e) => {
    if (e.key === "Enter") {
      if (data.length === 0) {
        alert("please Enter a Prompt");
      } else {
        sent(data);
        setData("");
        setPrompt(true);
        setAllprompt([...allprompt, data]);
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Delete") {
      setPrompt(false);
      setAllprompt([]);
    }
  };

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition(); // Initialize SpeechRecognition
    recognition.lang = "en-US"; // Set language
    setIsListening(true); // Set listening status to true
    recognition.start(); // Start listening for speech

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript; // Get the recognized speech
      setData(speechToText); // Set the recognized text to the input box
      setIsListening(false); // Set listening status to false after receiving input
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false); // Set listening status to false in case of error
    };
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="lg:w-screen sm:w-screen flex flex-col items-center overflow-y-scroll scroll-smooth">
      <div className="h-screen bg-white flex flex-col justify-between">
        <div className="lg:w-10/12 h-10 bg-white flex justify-between items-center p-2 z-20">
        

      
        </div>

        {prompt ? (
          <Prompt />
        ) : (
          <div class="middle-part w-full sm:gap-10 flex flex-col items-center p-3 grid grid-cols-1 gap-5">
     
          </div>
        
        )}

        <Footer
          data={data}
          handlechange={handlechange}
          handleVoiceInput={handleVoiceInput}
          handleClick={handleClick}
          handlekey={handlekey}
          isListening={isListening} // Pass isListening state to Footer component
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