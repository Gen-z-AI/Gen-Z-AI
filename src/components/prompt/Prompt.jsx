import React, { useState, useEffect, useRef } from "react";
import { Myprovider } from "../ai-context/AiContext";
import { SiProbot } from "react-icons/si";
import Loader from "../loader/Loader";
import { useAuth0 } from "@auth0/auth0-react";
import BotAvatar from "../../../public/Images/answer.jpg";
import rajan2 from "../../../public/Images/rajan-2.jpg"


const Prompt = () => {
  const { question, answer, loader } = Myprovider();
  const [chatHistory, setChatHistory] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [showAvatarLoader, setShowAvatarLoader] = useState(true);
  const { user, isAuthenticated } = useAuth0();
  const chatContainerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoadingProfile(false);
    }, 1000);
  }, []);

  useEffect(() => {
    if (question !== "") {
      setShowAvatarLoader(true);
    }
  }, [question]);

  useEffect(() => {
    if (answer !== "" && question !== "") {
      const lowercaseQuestion = question.toLowerCase();
      if (
        lowercaseQuestion === "who are you" ||
        lowercaseQuestion === "tum kon ho" ||
        lowercaseQuestion === "tum kaun ho" ||
        lowercaseQuestion === "tumko kaun banaya hai" ||
        lowercaseQuestion === "tumhen kaun banaya hai" ||
        lowercaseQuestion === "tumhen kaun banaya" ||
        lowercaseQuestion === "tumko kaun banaya" ||
        lowercaseQuestion === "tumko kaun banaya" ||
        lowercaseQuestion === "tumhen kisne banaya" ||
        lowercaseQuestion === "how are you" ||
        lowercaseQuestion === "tum kaise ho"
      ) {
        setChatHistory([
          {
            question,
            answer:
              lowercaseQuestion === "who are you" ? (
                <>
                  <p>I am Gen-Z-AI, an AI assistant created by Rajan, Priyanshi, and Druti. Feel free to ask me anything!</p>
                  <div class="flex items-center gap-5 px-12">
                    <img class="h-12 w-12 relative shrink-0 left-6 rounded-full ring-2 ring-white inline-block transition-transform duration-300 transform hover:scale-110" src= "https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg" alt="avatar" />
                    <img class="h-14 w-14 relative shrink-0 z-20 rounded-full ring-2 ring-white inline-block transition-transform duration-300 transform hover:scale-110" src={rajan2} alt="avatar" />
                    <img class="h-12 w-12 relative shrink-0 right-6 rounded-full ring-2 ring-white inline-block transition-transform duration-300 transform hover:scale-110" src= "https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg" alt="avatar" />
                  </div>
                </>
              ) : lowercaseQuestion === "how are you" ? (
                <>
                  <p>I am Gen-Z-AI, a multi-modal AI language model developed by Rajan, Priyanshi, Druti. I don't have personal feelings or emotions, so I don't experience being good or bad. I am designed to provide helpful and informative responses to a wide range of user queries. May I assist you with anything today?</p>
                  <div class="flex items-center gap-5 px-12">
                    <img class="h-12 w-12 relative shrink-0 left-6 rounded-full ring-2 ring-white inline-block transition-transform duration-300 transform hover:scale-110" src= "https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg" alt="avatar" />
                    <img class="h-14 w-14 relative shrink-0 z-20 rounded-full ring-2 ring-white inline-block transition-transform duration-300 transform hover:scale-110" src={rajan2} alt="avatar" />
                    <img class="h-12 w-12 relative shrink-0 right-6 rounded-full ring-2 ring-white inline-block transition-transform duration-300 transform hover:scale-110" src= "https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg" alt="avatar" />
                  </div>
                </>
              ) : (
                <>
                  <p>Main Gen-Z-AI hoon, ek AI assistant me apka kiya help kar sakata hu? Mujhe Rajan, Priyanshi or Druti ne milake banaya hai. Mein Gen-Z-AI taiyaar hoon apke har madad karne ke liye. Chalo, shuru karein!</p>
                  <div class="flex items-center gap-5 px-12 mb-2">
                    <img class="h-12 w-12 relative shrink-0 left-6 rounded-full ring-2 ring-white inline-block transition-transform duration-300 transform hover:scale-110" src= "https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg" alt="avatar" />
                    <img class="h-14 w-14 relative shrink-0 z-20 rounded-full ring-2 ring-white inline-block transition-transform duration-300 transform hover:scale-110" src={rajan2} alt="avatar" />
                    <img class="h-12 w-12 relative shrink-0 right-6 rounded-full ring-2 ring-white inline-block transition-transform duration-300 transform hover:scale-110" src= "https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg" alt="avatar" />
                  </div>
                </>
              )
          }
        ]);
        scrollToTop();
      } else {
        setChatHistory([{ question, answer }]);
        scrollToTop();
      }
      setShowAvatarLoader(true);
    } else {
      setShowAvatarLoader(true);
    }
  }, [question, answer]);

  const scrollToTop = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = 0;
    }
  };

  const renderUserAvatar = () => {
    return isAuthenticated ? (
      <img
        src={user.picture}
        className="w-10 h-10 rounded-full mr-2"
        alt="User Avatar"
      />
    ) : (
      <SiProbot className="w-10 h-10 rounded-full mr-2 text-gray-500" />
    );
  };

  return (
    <div
      className="max-w-[50rem] w-full mx-auto my-8 px-4 overflow-y-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      ref={chatContainerRef}
    >
      {loadingProfile ? (
        <div className="flex justify-center items-center h-96">
          <Loader />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 p-3">
          {showAvatarLoader && (
            <div className="flex items-start">
              {renderUserAvatar()}
              {loader && <Loader />}
            </div>
          )}
          {chatHistory.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <div className="flex items-center">
                {renderUserAvatar()}
                <div className="bg-gray-200 rounded-lg px-4 py-2 mr-4 max-w-[70%]">
                  {item.question}
                </div>
              </div>
              {item.answer && (
                <div className="relative flex items-start gap-2">
                  <div className="text-md text-gray-600 bg-gray-100 rounded-lg px-4 py-2 mt-3 max-w-[90%] lg:max-w-[80%] lg:px-6">
                    {item.answer}
                  </div>
                  <img
                    src={BotAvatar}
                    className="w-10 h-10 rounded-full mr-2 mt-3"
                    alt="Bot Avatar"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Prompt;
