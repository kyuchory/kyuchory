import React from "react";
import styles from "./Projects.module.css";
import { useState } from "react";
import gamchu1 from "../img/projectImg/gamchu/gamchu1.png";
import gamchu2 from "../img/projectImg/gamchu/gamchu2.png";
import gamchu3 from "../img/projectImg/gamchu/gamchu3.png";
import gamchu4 from "../img/projectImg/gamchu/gamchu4.png";
import gamchu5 from "../img/projectImg/gamchu/gamchu5.png";
import gamchu6 from "../img/projectImg/gamchu/gamchu6.png";
import gamchu7 from "../img/projectImg/gamchu/gamchu7.png";
import gamchu8 from "../img/projectImg/gamchu/gamchu8.png";

import githubIcon from "../img/icon/github.png";
import left2 from "../img/icon/left22.png";
import right2 from "../img/icon/right2.png";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    <img src={gamchu1} alt="img main" />,
    <img src={gamchu2} alt="img 2" />,
    <img src={gamchu3} alt="img 3" />,
    <img src={gamchu4} alt="img 4" />,
    <img src={gamchu5} alt="img 5" />,
    <img src={gamchu6} alt="img 6" />,
    <img src={gamchu7} alt="img 6" />,
    <img src={gamchu8} alt="img 7" />,
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
        <h2>게임 정보 커뮤니티, 겜추</h2>
      </div>
      <div className={styles.contentBox}>
        {/* display flex */}
        {/* 이미지, 설명글 등등 div 박스  */}
        <div className={styles.imgBox}>{images[currentImageIndex]}</div>
        <div className={styles.explanationBox}>
          <h3>사용 기술</h3>
          <p>
            Front-end - JSP <br />
            Back-end - JAVA, MYSQL <br />
            Open source API - 게임관리 위원회 <br />
            크롤링 - 게임메카, 게임트릭스
          </p>
          <h3>주요 기능</h3>
          <p>
            <h4>1. 메인페이지</h4>
            - open api, 크롤링 등을 이용하여 게임 순위, 최신 게임 뉴스를
            메인화면에 출력 <br />- 로그인, 회원가입, 출석체크 등을 이용할 수
            있는 간단한 프로필 <br />
            - 출석체크를 통해 커뮤니티 레벨업 가능, 레벨을 뱃지로 표현, 우리
            페이지를 찾게 끔 <br />
            - 게시판을 메인페이지에 출력하여 게시판에 관심을 갖게함
            <br />
            <h4>2. 프로필</h4>
            - 본인의 회원 정보 확인 가능 <br />
            - 본인이 작성한 커뮤니티 게시글 확인 가능 <br />- 추가적으로 여행
            일정을 플로팅 배너와 같이 사용자가 보기 쉽게 출력
            <h4>3. 게임 목록</h4>
            - api를 통해 받아온 게임을 데이터 베이스에 저장하여 출력 <br />
            - 장르별 필터링 가능 <br />
            - 게임 키워드 검색 가능
            <br />
            <h4>4. 게임 커뮤니티</h4>
            - 자유 게시판, 게임 추천 게시판을 통해 커뮤니티 이용 가능
            <br />
            - 글 작성, 댓글 작성시 커뮤니티 레벨 올릴 수 있음
            <br />
            - 제목 키워드를 입력하여 게시물 검색 가능
            <br />- 게임 관련 뉴스를 크롤링 하여 최근 게임 뉴스 열람 가능
            <h4>5. mbti별 게임 추천 / 사용자별 게임 추천</h4>- 본인의 mbti에
            맞게 게임을 추천 <br />- 외향형 E 의 경우 멀티플레이, 파티플레이
            등의 게임을 추천하는 등의 방식 사용 <br />- 회원가입시 입력받은
            정보를 통해 사용자별 게임 추천
          </p>
          <h2>내가 맡은 역할</h2>
          <p>
            메인 페이지 구조 제작, css, 각 게시판 기능 및 css, 커뮤니티의 레벨
            관련 기능, 출석체크, 프로필 작성글 확인, css
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
          <a href="https://github.com/kyuchory/javaProject_gameCommunity">
            https://github.com/kyuchory/javaProject_gameCommunity
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
