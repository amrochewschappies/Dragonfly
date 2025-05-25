import React, { useEffect, useRef } from "react";
import "../pages/GeneralStyling.css" 

const TAIL_LENGTH = 20;

function Cursor() {
  const cursorRef = useRef(null);
  const cursorCirclesRef = useRef([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorHistory = useRef(Array(TAIL_LENGTH).fill({ x: 0, y: 0 }));
  const isHoveringImage = useRef(false);

  useEffect(() => {
    const cursor = cursorRef.current;

    for (let i = 0; i < TAIL_LENGTH; i++) {
      const div = document.createElement("div");
      div.classList.add("cursor-circle");
      cursor.appendChild(div);
    }

    cursorCirclesRef.current = Array.from(
      cursor.querySelectorAll(".cursor-circle")
    );

    const onMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    document.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      cursorHistory.current.shift();
      cursorHistory.current.push({ ...mousePos.current });

      for (let i = 0; i < TAIL_LENGTH; i++) {
        const current = cursorHistory.current[i];
        const next = cursorHistory.current[i + 1] || cursorHistory.current[TAIL_LENGTH - 1];

        const xDiff = next.x - current.x;
        const yDiff = next.y - current.y;

        current.x += xDiff * 0.35;
        current.y += yDiff * 0.35;

        let scale = i / TAIL_LENGTH;
        if (isHoveringImage.current) {
          scale *= 2.5;
        }

        const circle = cursorCirclesRef.current[i];
        if (circle) {
          circle.style.transform = `translate(${current.x}px, ${current.y}px) scale(${scale})`;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div id="cursor" ref={cursorRef}></div>;
}

export default Cursor;
