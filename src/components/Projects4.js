import React from "react";
import styles from "./Projects.module.css";
import sum from "../img/projectImg/silvable/sum.png";
import { useState } from "react";

import githubIcon from "../img/icon/github.png";
import left2 from "../img/icon/left22.png";
import right2 from "../img/icon/right2.png";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [<img src={sum} alt="img main" />];

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
        <h2>노인들을 위한 앱, Silvable</h2>
      </div>
      <div className={styles.contentBox}>
        {/* display flex */}
        {/* 이미지, 설명글 등등 div 박스  */}
        <div className={styles.imgBox}>{images[currentImageIndex]}</div>
        <div className={styles.explanationBox}>
          <h3>사용 기술</h3>
          <p>
            Front-end - React Native <br />
            Back-end - FireBase <br />
          </p>
          <h3>주요 기능</h3>
          <p>
            <h4>1. 회원가입/연동</h4>
            - 회원가입시 보호자/노인 이메일을 연동. 파이어 베이스에 저장
            <br />
            - 노인의 집 주소 등 필요한 데이터를 입력받음
            <br />
            <h4>2. 집으로 안내</h4>
            - 현재 위치에서 노인의 집까지 경로를 안내함
            <br />
            <h4>3. 병원 안내</h4> - 병원의 희망하는 부서 입력, 외과라면 병원
            위치 데이터를 토대로 현재 위치에서 가장 가까운 병원 안내
            <br />
            <h4>4. 메모 기능</h4> - 메모는 보호자와 연동되며, 보호자가 노인의
            일정등을 작성해 주면, 노인의 휴대폰에서 확인 가능.
            <h4>5. 긴급 신고</h4>- 잘못 누르는 것을 대비해 길게 누를시 119에
            연락.
            <h4>6. 돋보기 기능</h4>- 카메라 배율 기능을 이용한 돋보기 기능.
            신문등을 읽을 떄 활용 가능
            <h4>7. 음성 지원</h4>- 모든 기능을 길게 누르면, 해당 기능의 내용을
            음성으로 설명해준다. 글씨가 작아 읽지 못하는 노인분들을 위한 기능
            <br />- 추가적으로 모든 디자인은 노인이 알아보기 쉽게 크고
            직관적으로 제작됨.
          </p>
          <h2>내가 맡은 역할</h2>
          <p>각종 css, 메모기능, 보호자/노인 연동기능, 각종 css 등</p>
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
          <a href="https://github.com/yongwonkim1/Silvable">
            https://github.com/yongwonkim1/Silvable
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
