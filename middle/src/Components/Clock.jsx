import React from "react";

export default function Clock(props) {
  return (
    <>
      <h4>현재 시각</h4>
      <h2>{new Date().toLocaleTimeString()}</h2>
    </>
  );
}