import React, { Component } from "react";

function NumberList({ numbers }) {
  const listItems = numbers.map((number) => {
    console.log(number);
    return <li>{number}</li>;
  });
  return <ul>{listItems}</ul>;
}

function numbers() {
  return [1, 2, 3, 4, 5];
}

export default NumberList;
