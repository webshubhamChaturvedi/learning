import React from "react";

const Header = (props) => {
  const imagepath = props.imgpath;
  return (
    <header>
      <div className="logosec">
        <img alt="" src={`${imagepath}`}></img>
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </div>
    </header>
  );
};

export default Header;
