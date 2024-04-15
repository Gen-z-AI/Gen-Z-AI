import React, { useState } from 'react';
import HomePage from '../Home/HomePage'
import MainDisplay from '../main/MainDisplay';

const PageContainer = () => {
  const [isHomePage, setIsHomePage] = useState(true);

  const handlePageSwitch = () => {
    setIsHomePage(!isHomePage);
  };

  return (
    <div>
      <button onClick={handlePageSwitch}>Switch Page</button>
      {isHomePage ? <HomePage/> : <MainDisplay />}
    </div>
  );
};

export default PageContainer;
