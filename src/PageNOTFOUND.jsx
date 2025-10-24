import React from "react";
import page from "./Food-imgs/Nopage.png"; // 

function PageNOTFOUND() {
  return (
    <div className="notfound">
      <img src={page} alt="Page Not Found" />
      <h2>Oops! Page Not Found 😢</h2>
      <p>The page you are looking for doesn’t exist or was moved.</p>
    </div>
  );
}

export default PageNOTFOUND;
