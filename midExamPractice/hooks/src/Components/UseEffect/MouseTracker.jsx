import React, { useEffect, useState } from "react";

export default function MouseTracker(props) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 이 컴포넌트가 마운트될 때 한 번 실행
  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updatePosition);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
    };
  }, []);

  return (
    <div>
      <p>x <span style={{ fontWeight: 'bold' }}>{position.x}</span>, y <span style={{ fontWeight: 'bold' }}>{position.y}</span></p>
    </div>
  );
}