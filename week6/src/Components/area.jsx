import React, { useState } from "react";

export default function Area(props) {
  const [size, setSize] = useState({ width: 150, height: 100 });

  return (
    <div className="componentContainer">
      <h1>너비: {size.width}, 높이: {size.height}</h1>
      <button
        onClick={() => {
          const copy = {...size};
          copy.width = size.width >= 130 ? 150 : size.width + 20;
          setSize(copy);
        }}
      >너비 키우기</button>
      <button
        onClick={() => {
          const copy = {...size};
          copy.height = size.height >= 140 ? 150 : size.height + 10;
          setSize(copy);
        }}
      >높이 키우기</button>
      <button
        onClick={() => {
          const copy = {...size};
          copy.width = size.width < 20 ? 0 : size.width - 20;
          setSize(copy);
        }}
      >너비 줄이기</button>
      <button
        onClick={() => {
          const copy = {...size};
          copy.height = size.height < 10 ? 0 : size.height - 10;
          setSize(copy);
        }}
      >높이 줄이기</button>
    </div>
  );
}