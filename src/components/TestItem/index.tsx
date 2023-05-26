import React from "react";
import { Link } from "react-router-dom";
import styles from "./TestItem.module.scss";

type TestItemType = {
  id: number;
  title: string;
  status: string;
};

const TestItem: React.FC<TestItemType> = ({ id, title, status }) => {
  return (
    <Link to={`./test/${id}`}>
      <div className={styles.item}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.status}>{status}</p>
      </div>
    </Link>
  );
};

export default TestItem;
