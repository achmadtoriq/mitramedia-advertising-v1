import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const CountUp = ({ endValue }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < endValue) {
          return prevCount + 1;
        }
        return prevCount;
      });
    }, 75); // Increment count every second

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [endValue]);

  useEffect(() => {
    controls.start({
      count: count <= endValue ? count : endValue, // Ensure the animation stops at the max count
      duration: 0.15, // Duration for each count increment animation
    });
  }, [count, controls, endValue]);

  return (
    <>
      <motion.span animate={{ count }} transition={{ duration: 0.15 }}>
        {count <= endValue ? count : endValue}
      </motion.span>
    </>
  );
};

export default CountUp;
