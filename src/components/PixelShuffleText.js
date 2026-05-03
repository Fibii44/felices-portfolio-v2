import React, { useState, useEffect, useRef } from 'react';

export default function PixelShuffleText({ text, isHovered, className }) {
  const [internalHover, setInternalHover] = useState(false);
  const activeHover = isHovered !== undefined ? isHovered : internalHover;
  
  const [displayText, setDisplayText] = useState(text);
  const originalText = useRef(text);
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const intervalRef = useRef(null);

  useEffect(() => {
    originalText.current = text;
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    if (activeHover) {
      let iteration = 0;
      clearInterval(intervalRef.current);
      
      intervalRef.current = setInterval(() => {
        setDisplayText(() => 
          originalText.current
            .split('')
            .map((char, index) => {
              if (index < iteration) {
                return originalText.current[index];
              }
              if (char === ' ') return ' ';
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join('')
        );

        if (iteration >= originalText.current.length) {
          clearInterval(intervalRef.current);
          setDisplayText(originalText.current);
        }

        iteration += 1 / 3;
      }, 35);
    } else {
      clearInterval(intervalRef.current);
      setDisplayText(originalText.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [activeHover]);

  return (
    <span 
      className={className}
      onMouseEnter={() => setInternalHover(true)}
      onMouseLeave={() => setInternalHover(false)}
    >
      {displayText}
    </span>
  );
}
