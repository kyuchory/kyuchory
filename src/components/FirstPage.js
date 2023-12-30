import React, { useEffect, useState } from "react";
import styles from "./FirstPage.module.css";

const FirstPage = () => {
  const [mainText, setMainText] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = "신규철의 개발기록! 환영합니다!";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setMainText((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + completionWord[count]
          : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          //setCount(0);
          setMainText("신규철의 개발기록! 환영합니다!"); //그대로 화면에 문장 남김
        }

        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });
  return (
    <div className={styles.container}>
      <div className={styles.textBox}>
        <h2>안녕하세요!</h2>
        <div className={styles.firstText}>{mainText}</div>
      </div>
    </div>
  );
};

export default FirstPage;
