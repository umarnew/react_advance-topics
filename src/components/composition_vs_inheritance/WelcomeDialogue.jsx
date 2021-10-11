import React, { Component } from "react";
import Dialogue from "./Dialogue";

const WelcomeDialogue = () => {
  return (
    // <Dialogue color='blue' message='Hi I am umar'>
    //   <h1>Hello World</h1>
    //   <p className='Dialogue text'>Thank you for visiting </p>
    // </Dialogue>

    <Dialogue color='red' children='Hello World' message='Hi I am umar' />
  );
};

export default WelcomeDialogue;
