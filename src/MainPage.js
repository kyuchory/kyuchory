import React, { useState, useCallback } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Projects2 from "./components/Projects2";
import Projects3 from "./components/Projects3";
import Projects4 from "./components/Projects4";
import styles from "./MainPage.module.css";
import FirstPage from "./components/FirstPage";
import Skills from "./components/Skills";
import right from "./img/icon/right.png";
import left from "./img/icon/left.png";

function MainPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <FirstPage />,
    <About />,
    <Skills />,
    <Projects />,
    <Projects2 />,
    <Projects3 />,
    <Projects4 />,
    <Contact />,
  ];
  const headerText = [
    "Hello",
    "About Me",
    "Skills",
    "Projects",
    "Projects",
    "Projects",
    "Projects",
    "Contact",
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  const handleKeyPress = useCallback((event) => {
    // 왼, 오 화살표 키보드 눌렀을때 화면 넘어가게
    if (event.key === "ArrowLeft") {
      if (currentSlide !== 0) {
        console.log("l");
        previousSlide();
      }
    } else if (event.key === "ArrowRight") {
      if (currentSlide !== slides.length - 1) {
        console.log("r");
        nextSlide();
      }
    }
  }, []);

  return (
    <div
      className={styles.mainContainer}
      tabIndex="0" // 포커스를 받을 수 있도록 tabIndex를 설정합니다.
      onKeyDown={handleKeyPress}
    >
      <div className={styles.header}>
        <div className={styles.headerText}>
          <div>{headerText[currentSlide]}</div>
        </div>
      </div>
      <div className={styles.contentBox}>
        {/* 현재 슬라이드를 렌더링 */}
        {slides[currentSlide]}
        {/* 이전 버튼 */}
        {currentSlide !== 0 && (
          <button className={styles.previousButton} onClick={previousSlide}>
            <img src={left} alt="right" width="35px" height="35px" />
          </button>
        )}

        {/* 다음 버튼 */}
        {currentSlide !== slides.length - 1 && (
          <button className={styles.nextButton} onClick={nextSlide}>
            <img src={right} alt="right" width="35px" height="35px" />
          </button>
        )}
      </div>
      <div style={{ display: "flex", alignItems: "flex-start" }}>
        <a
          href="https://github.com/kyuchory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://techstack-generator.vercel.app/github-icon.svg"
            alt="GitHub icon"
            width="100"
            height="100"
            style={{ cursor: "pointer" }}
          />
        </a>
      </div>
    </div>
  );
}

export default MainPage;
