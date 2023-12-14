import React, { useEffect, useState } from "react";

const TypeWriter = ({ text, delay, infinite, speedBreak }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  //   console.log(text);
  useEffect(() => {
    let timeout;
    let currentIdx = currentIndex;
    let currentTxt = currentText;
  
    if (currentIdx < text.length) {
      const currentString = text[currentIdx];
      if (currentTxt.length < currentString.length) {
        timeout = setTimeout(() => {
          setCurrentText((prevText) => prevText + currentString[currentTxt.length]);
        }, delay);
      } else if (infinite) {
        timeout = setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % text.length);
          setCurrentText("");
        }, speedBreak);
      }
    }
  
    return () => clearTimeout(timeout);
  }, [currentIndex, delay, infinite, text, currentText]);

  return (
    <>
      <span className=" p-1 lg:p-2 font-bold lg:font-extrabold">
        {currentText}
      </span>
    </>
  );
};

export default TypeWriter;
