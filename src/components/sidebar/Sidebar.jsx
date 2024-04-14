import Auth0UserInfo from "../auth0UserInfo/Auth0UserInfo.jsx";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Auth0UserInfo />
      </div>
    </>
  );
}