import { useEffect, useState } from "react";

const setResize = () => {
  const [randomNum, setRandomNum] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newRandomNumber = Math.floor(Math.random() * 100) + 1;
      setRandomNum(newRandomNumber);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return randomNum;
};

export default setResize;
