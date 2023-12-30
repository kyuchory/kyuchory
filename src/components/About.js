import React from "react";
import styles from "./About.module.css";
import skc from "../img/skc.jpg";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <img src={skc} alt="face" />
      </div>
      <div className={styles.textBox}>
        <h3>이름, 생년월일</h3>
        <p>신규철 / 1999.07.19 / 군필</p>
        <h3>학력</h3>
        <p>
          대은초등학교 - 대성중학교 - 대성고등학교 - 단국대학교 컴퓨터공학과
          (2024.02 졸업예정)
        </p>
        <h3>자격증, 수상경력</h3>
        <p>정보처리기사 / 교내 SW공모전 "경소톤" 2021, 2022 각 동상, 은상</p>
        <h3>짧은소개</h3>
        <p>
          안녕하세요! 웹 개발자의 꿈을 키우고 있는 신규철 이라고 합니다.
          웹페이지를 개발하는 것에 흥미를 느껴 개인, 팀 프로젝트를 꾸준히 진행해
          왔습니다.
        </p>
        <p>
          주로 node.js와 mysql 데이터베이스를 활용한 back-end 개발과 react를
          이용한 front-end 개발을 해왔습니다.
        </p>
        <p>
          취미 생활로 게임을 즐기고, 그에 관련된 웹사이트를 자주 활용합니다.
          최근 웹사이트의 경향을 잘 파악하고 있습니다.
        </p>
      </div>
    </div>
  );
};

export default About;
