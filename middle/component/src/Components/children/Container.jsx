import React from "react";

export default function Container({ children }) {
  return (
    <div style={{ border: '2px solid black', padding: '10px', margin:'10px'}}>
      { children }
    </div>
  );
}