import React from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import Auth0UserInfo from "@/components/auth0UserInfo/Auth0UserInfo";

const Header = ({ toggleMobileMenu }) => {
  return (
    <div className="mt-1 w-full rounded-full lg:w-10/12 h-16 lg:h-20 flex justify-between items-center px-4 lg:px-0 py-2 z-20   
lg:bg-white bg-gray-200">
      <div
        title="Collapse menu"
        className="w-10 h-10 lg:hidden flex justify-center items-center rounded-full cursor-pointer hover:bg-gray-300"
        onClick={toggleMobileMenu}
      >
        <IoReorderThreeOutline className="text-2xl" />
      </div>
      <h1 className="text-xl"
          style={{
            background:
              "-webkit-linear-gradient(16deg, #4b90ff , #ff5546)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >Gen-Z-AI
        </h1>
      <div className="flex items-center">
        <Auth0UserInfo />
      </div>
    </div>
  );
};

export default Header;
