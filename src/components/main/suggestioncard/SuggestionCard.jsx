import React from "react";
import { motion } from "framer-motion";
import { PiCompassThin } from "react-icons/pi";
import { SlBulb } from "react-icons/sl";
import { LuMessageSquare } from "react-icons/lu";
import { FaCode } from "react-icons/fa6";

const SuggestionCard = ({ setData }) => {
  const suggestions = [
    {
      id: "suggestion1",
      text: "Gimme dope spots to hit up on our road trip!",
      icon: <PiCompassThin />
    },
    {
      id: "suggestion2",
      text: "Give me the lowdown on urban planning, ASAP!",
      icon: <SlBulb />
    },
    {
      id: "suggestion3",
      text: "Let's brainstorm lit team activities for our work retreat!",
      icon: <LuMessageSquare />
    },
    {
      id: "suggestion4",
      text: "Make this code easier on the eyes, please!",
      icon: <FaCode />
    }
  ];

  const handleSuggestionClick = (text) => {
    setData(text);
  };

  return (
    <div className="cards w-full flex flex-wrap justify-center lg:gap-2">
      {suggestions.map((suggestion) => (
        <motion.div
          key={suggestion.id}
          className="card w-full sm:w-84 md:w-64 lg:w-48 h-30 rounded-lg border p-5 sm:p-5 lg:p-8 relative bg-slate-100 hover:bg-slate-300 mb-4 flex items-center"
          animate={{ x: [-2000, 0] }}
          transition={{ duration: 1 }}
          style={{ minWidth: 'calc(25% - 0.5rem)', maxWidth: '100%' }}
        >
          <p
            className="text-wrap text-sm sm:text-base cursor-pointer flex-grow"
            onClick={() => handleSuggestionClick(suggestion.text)}
          >
            {suggestion.text}
          </p>
          <div className="p-2 bg-white rounded-full flex justify-center items-center icon-container lg:absolute lg:bottom-4 lg:right-4">
            {React.cloneElement(suggestion.icon, {
              className: "text-xl sm:text-2xl text-gray-600"
            })}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SuggestionCard;
