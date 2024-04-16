import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import Footer from "./Footer.jsx";

import Sidebar from "../sidebar/Sidebar.jsx";

export default function Main() {
  return (
    <>
      
      <div className="screen">
        <Sidebar />
        <div className="mainframe">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </div>
    </>
  );
}
