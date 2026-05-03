import React, { useRef, useState } from 'react';
import { cn } from '../lib/utils';

export function Marquee({
  children,
  direction = "left",
  repeat = 4,
  duration = 60,
  className,
  ...props
}) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      {...props}
      ref={containerRef}
      className={cn(
        "marquee-container flex [gap:var(--gap)] overflow-x-auto scrollbar-none select-none [--gap:1rem]",
        isDragging ? "cursor-grabbing" : "cursor-grab",
        className
      )}
      style={{ "--duration": `${duration}s` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee-left": direction === "left",
              "animate-marquee-right": direction === "right",
              "marquee-container:hover:[animation-play-state:paused]": true,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}

export default Marquee;
