import React from "react";
import styles from "./TestItem.module.scss";

type TestItemType = {
    title: string
    status: string
}

const TestItem: React.FC<TestItemType> = ({title, status}) => {
  return (
    <div className={styles.item}>
      <h3>{title}</h3>
      <p className={styles.status}>{status}</p>
    </div>
  );
};

export default TestItem;
