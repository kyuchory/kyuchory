import React from "react";
import styles from "./Projects.module.css";
import travelImg from "../img/projectImg/travel/travelMain.png";
import { useState } from "react";
import travel2 from "../img/projectImg/travel/travel2.png";
import travel3 from "../img/projectImg/travel/travel3.png";
import travel4 from "../img/projectImg/travel/travel4.png";
import travel5 from "../img/projectImg/travel/travel5.png";
import travel6 from "../img/projectImg/travel/travel6.png";
import travel7 from "../img/projectImg/travel/travel7.png";
import travel8 from "../img/projectImg/travel/travel8.png";
import travel9 from "../img/projectImg/travel/travel9.png";
import githubIcon from "../img/icon/github.png";
import left2 from "../img/icon/left22.png";
import right2 from "../img/icon/right2.png";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    <img src={travelImg} alt="img main" />,
    <img src={travel2} alt="img 2" />,
    <img src={travel3} alt="img 3" />,
    <img src={travel4} alt="img 4" />,
    <img src={travel5} alt="img 5" />,
    <img src={travel6} alt="img 6" />,
    <img src={travel6} alt="img 6" />,
    <img src={travel7} alt="img 7" />,
    <img src={travel8} alt="img 8" />,
    <img src={travel9} alt="img 9" />,
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
        <h2>여행 정보 사이트, 여기저기</h2>
      </div>
      <div className={styles.contentBox}>
        {/* display flex */}
        {/* 이미지, 설명글 등등 div 박스  */}
        <div className={styles.imgBox}>{images[currentImageIndex]}</div>
        <div className={styles.explanationBox}>
          <h3>사용 기술</h3>
          <p>
            Front-end - React.js <br />
            Back-end - Node.js (express), MYSQL <br />
            Open source API - 한국관광공사 오픈 api, 네이버지도 api, 카카오맵
            api
          </p>
          <h3>주요 기능</h3>
          <p>
            <h4>1. 지역별 여행 정보를 제공</h4>
            - 오픈소스 api를 이용한 명소 정보 제공 및 해당 지역 주변의
            식당,숙소,놀거리 등을 추천 <br />
            - 전국 행사 정보를 출력
            <br />
            <h4>2. 지역별 여행 정보를 제공</h4>
            - 모임을 생성하고 모임원을 모집 <br />
            - 모임원끼리 서로 공유하며 함께 여행코스를 설계 <br />- 추가적으로
            여행 일정을 플로팅 배너와 같이 사용자가 보기 쉽게 출력
            <h4>3. 게시판 기능</h4> - 위 항목에서의 모임원 모집 게시판 <br />
            - 자신이 방문한 여행지를 추천하는 블로그 형식의 게시판 그 외의
            자유게시판 등
            <br />
            <h4>4. 여행지 추천 기능</h4> - 사용자가 원하는 지역, 카테고리 등을
            선택하여 해당 사용자에게 맞는 여행지 추천
            <h4>5. 키워드 검색 기능</h4>- 오픈소스 api에서 제공해주는 키워드
            검색 기능 사용한 검색창 기능
          </p>
          <h2>내가 맡은 역할</h2>
          <p>
            메인 페이지 구조 제작, css, 각 게시판 기능 및 css, 일정 공유 기능 및
            css 등
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
          <a href="https://github.com/kim-wnsgk/travel">
            https://github.com/kim-wnsgk/travel
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
