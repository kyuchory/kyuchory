import React from "react";
import styles from "./Skills.module.css";
import reactIcon from "../img/icon/react.png";
import htmlIcon from "../img/icon/html.png";
import jspIcon from "../img/icon/jsp.png";
import cssIcon from "../img/icon/css.png";
import nodeIcon from "../img/icon/node.png";
import javaIcon from "../img/icon/java.png";
import mysqlIcon from "../img/icon/mysql.png";

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstSkill}>
        <h2>Front-End</h2>
        <div className={styles.iconBox}>
          <img src={reactIcon} alt="react icon" width="100" height="100" />
          <img src={htmlIcon} alt="html icon" width="100" height="100" />
          <img src={cssIcon} alt="css icon" width="100" height="100" />
          <img src={jspIcon} alt="jsp icon" width="100" height="100" />
        </div>
      </div>
      <div className={styles.secondSkill}>
        <h2>Back-End</h2>
        <div className={styles.iconBox}>
          <img src={nodeIcon} alt="node icon" width="100" height="100" />
          <img src={javaIcon} alt="java icon" width="100" height="100" />
        </div>
      </div>
      <div className={styles.thirdSkill}>
        <h2>DataBase</h2>
        <div className={styles.iconBox}>
          <img src={mysqlIcon} alt="node icon" width="100" height="100" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
