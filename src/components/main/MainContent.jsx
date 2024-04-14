import Prompt from "../prompt/Prompt";
import { useAuth0 } from "@auth0/auth0-react";

export default function MainContent() {
  const { user, isAuthenticated } = useAuth0();
  if (isAuthenticated)
    return (
      <>
        <div className="Welcome">
          <h1 className="heading_1">Hello {user}</h1>
          <h1 className="heading_2">What can I help you with?</h1>
        </div>
        <div className="PromptComponent">
          <Prompt />
          <Prompt />
          <Prompt />
          <Prompt />
        </div>
        <div className="ChatBar">
          <div className="Chatbox"></div>
          <div className="Send">
            <img src="/Images/send.jpg" />
          </div>
        </div>
      </>
    );
  else
    return (
      <>
        <div className="Welcome">
          <h1 className="heading_1">Hello Guest user</h1>
          <h1 className="heading_2">What can I help you with?</h1>
        </div>
        <div className="PromptComponent">
          <Prompt />
          <Prompt />
          <Prompt />
          <Prompt />
        </div>
        <div className="ChatBar">
          <div className="Chatbox"></div>
          <div className="Send">
            <img src="/Images/send.jpg" />
          </div>
        </div>
      </>
    );
}
