import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { FaUserCircle } from "react-icons/fa";

function Auth0UserInfo() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const [showUserInfo, setShowUserInfo] = useState(false);

  const toggleUserInfo = () => {
    setShowUserInfo(!showUserInfo);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="text-center relative">
      {isAuthenticated ? (
        <div className="flex items-center">
          <div className="relative">
            <button
              onClick={toggleUserInfo}
              className="focus:outline-none rounded-full overflow-hidden flex items-center"
            >
              {user.picture ? (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="rounded-full w-12 h-12 object-cover"
                />
              ) : (
                <FaUserCircle className="text-gray-500 text-3xl" />
              )}
            </button>
            {showUserInfo && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button
                    onClick={() => logout({ returnTo: window.location.origin })}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <button
          onClick={() => loginWithRedirect({ screen_hint: "signup" })}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Auth0UserInfo;