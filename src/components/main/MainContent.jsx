import Prompt from "../prompt/Prompt";

export default function MainContent() {
  return (
    <>
      <div className="Welcome">
        <h1 className="heading_1">Hello @user</h1>
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
