import React, { Component } from "react";

const Dialogue = ({ color = "", children, message }) => {
  return (
    <>
      <div className={`FancyBorder FancyBorder-${color}`}>{children}</div>
      <p>{message}</p>
    </>
  );
};

export default Dialogue;
