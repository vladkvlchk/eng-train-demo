import React from "react";
import Timer from "../../components/Timer";
import styles from "./Test.module.scss";

const Test: React.FC = () => {

  return (
    <div className={styles.page}>
      <div className={styles.timer}><Timer /></div>
      <div className={styles.quiz}></div>
      <div className={styles.pagination}></div>
    </div>
  );
};

export default Test;
