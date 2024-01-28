import React, { Component } from 'react';

const logHover = () => {
    console.log("I was hovered!")
  }
function SpotCheck1(props) {
    return (
        <button onMouseEnter={logHover}>Click me</button>    )

}

export default SpotCheck1