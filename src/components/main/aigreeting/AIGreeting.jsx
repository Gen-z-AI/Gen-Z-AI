import React from "react";
import { motion } from "framer-motion";

const AIGreeting = () => {
  return (
    <motion.div animate={{ y: [-2000, 0] }} transition={{ duration: 1 }}>
      <h1 className="ms-10 lg:text-6xl sm:text-5xl text-center sm:text-6xl">
        <span
          style={{
            background:
              "-webkit-linear-gradient(16deg, #4b90ff , #ff5546)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Hii, I'm Gen-z-Ai
        </span>
      </h1>
      <h1 className="ms-10 lg:text-6xl sm:text-5xl text-center sm:text-4xl lg:text-4xl" style={{ color: "#C4C7C5" }}>
        How can I help you today?
      </h1>
    </motion.div>
  );
};

export default AIGreeting;
