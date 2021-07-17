import React from "react";

const Header = ({ title, styleclass }) => {
  return (
    <>
      <div className="container-fluid text-center">
        <h2 className={`${styleclass} py-2`}>{title}</h2>
      </div>
    </>
  );
};

export default Header;
