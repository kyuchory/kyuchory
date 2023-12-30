import React from "react";
import styles from "./Projects.module.css";
import { useState } from "react";
import lifeup1 from "../img/projectImg/lifeup/lifeup1.gif";
import lifeup2 from "../img/projectImg/lifeup/lifeup2.gif";
import lifeup3 from "../img/projectImg/lifeup/lifeup3.gif";
import lifeup4 from "../img/projectImg/lifeup/lifeup4.gif";
import lifeup5 from "../img/projectImg/lifeup/lifeup5.png";
import githubIcon from "../img/icon/github.png";
import left2 from "../img/icon/left22.png";
import right2 from "../img/icon/right2.png";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    <img src={lifeup1} alt="img main" />,
    <img src={lifeup2} alt="img 2" />,
    <img src={lifeup3} alt="img 3" />,
    <img src={lifeup4} alt="img 4" />,
    <img src={lifeup5} alt="img 5" />,
  ];

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div className={styles.container}>
      {" "}
      {/* display flex */}
      <div className={styles.titleBox}>
        <h2>친환경 패션 커머스 플랫폼, LifeUp</h2>
      </div>
      <div className={styles.contentBox}>
        {/* display flex */}
        {/* 이미지, 설명글 등등 div 박스  */}
        <div className={styles.imgBox}>{images[currentImageIndex]}</div>
        <div className={styles.explanationBox}>
          <h3>사용 기술</h3>
          <p>
            Front-end - React Native <br />
            Back-end - Firebase <br />
          </p>
          <h3>주요 기능</h3>
          <p>
            <h4>1. 회원가입 / 로그인</h4>- 파이어베이스를 활용한 회원가입/로그인
            구현
            <h4>2. 브랜드 후원 & 수거 시스템</h4>
            - 브랜드에 안입는 폐의류 등을 후원 <br />- 챗봇을 통한 수거 시스템
            <h4>3. 찜하기</h4>
            - 후원을 통하여 포인트를 얻어 의류를 재구매 가능 <br />
            - 마음에 드는 의류를 찜하기 가능 <br />
            <br />
            <h4>4. 브랜드 쇼핑</h4>- 마음에 드는 브랜드의 의류를 쇼핑 가능
          </p>
          <h2>내가 맡은 역할</h2>
          <p>
            각종 화면 css, firebase의 구조를 만들어 의류, 회원이 가지는 데이터
            관리
          </p>
        </div>
      </div>
      <div className={styles.bottomBox}>
        <div className={styles.buttonBox}>
          <button onClick={prevSlide}>
            <img src={left2} alt="left2" width="20px" height="20px" />
          </button>
          <button onClick={nextSlide}>
            <img src={right2} alt="right2" width="20px" height="20px" />
          </button>
        </div>
        <div className={styles.linkBox}>
          <img
            src={githubIcon}
            alt="github Icon"
            width="40px"
            height="40px"
          ></img>
          <a href="https://github.com/kyuchory/greenlight_project">
            https://github.com/kyuchory/greenlight_project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
