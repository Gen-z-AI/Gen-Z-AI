
import React, { useState, useEffect, useRef } from "react";
import { Myprovider } from "../AI_Context/AiContext";
import { SiProbot } from "react-icons/si";
import Loader from "../Loader/Loader";
import { useAuth0 } from "@auth0/auth0-react";

// Import the bot avatar image
import BotAvatar from "../../../public/answer.jpg";

const Prompt = () => {
  const { question, answer, loader } = Myprovider();
  const [chatHistory, setChatHistory] = useState([]);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [isNewQuestion, setIsNewQuestion] = useState(false); // Track if a new question is added
  const { user, isAuthenticated } = useAuth0();

  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Simulate loading user profile
    setTimeout(() => {
      setLoadingProfile(false);
    }, 1000); // Adjust the delay as needed
  }, []);

  useEffect(() => {
    // When the answer changes, add it to the chat history
    if (answer !== "" && question !== "") {
      setChatHistory((prevChatHistory) => [
        ...prevChatHistory,
        { question, answer },
      ]);
      setIsNewQuestion(true); // Set isNewQuestion to true when a new question is added
    }
  }, [question, answer]);

  useEffect(() => {
    // Scroll to the bottom of the chat container when a new question is added
    if (isNewQuestion && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      setIsNewQuestion(false); // Reset isNewQuestion after scrolling
    }
  }, [isNewQuestion]);

  return (
    <div
      className="max-w-[50rem] w-full mx-auto my-8 px-4 overflow-y-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      ref={chatContainerRef}
    >
      {/* Loading user profile */}
      {loadingProfile ? (
        <div className="flex justify-center items-center h-96">
          <Loader />
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 p-3">
          {/* Display chat history */}
          {chatHistory.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              {isAuthenticated && user && (
                <>
                  {/* Display user's question */}
                  {item.question && (
                    <div className="flex items-center">
                      <img
                        src={user.picture}
                        className="w-10 h-10 rounded-full mr-2"
                        alt="User Avatar"
                      />
                      <div className="bg-gray-200 rounded-lg px-4 py-2 mr-4">
                        {item.question}
                      </div>
                    </div>
                  )}
                  {/* Display bot's answer */}
                  {item.answer && (
                    <div className="relative flex items-start gap-2">
                      <div className="text-md text-gray-600 bg-gray-100 rounded-lg px-4 py-2 mt-3">
                        {item.answer}
                      </div>
                      <img
                        src={BotAvatar}
                        className="w-10 h-10 rounded-full mr-2 mt-3"
                        alt="Bot Avatar"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          {/* Display loader */}
          {loader && (
            <div className="flex items-start">
              <img
                src={user.picture}
                className="w-10 h-10 rounded-full mr-2"
                alt="User Avatar"
              />
              <Loader />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Prompt;

export default function Prompt() {
  return <div className="Rectangle"></div>;
}

