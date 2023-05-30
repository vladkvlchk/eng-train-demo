import { title } from "process";
import React from "react";
import TestItem from "../../components/TestItem";
import { demoData } from "../../data";
import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      {demoData.sets.map((set) => (
        <div key={set.id} className={styles.testSet}>
          <h2 className={styles.setTitle}>{set.title}</h2>
          <div className={styles.tests}>
            {set.tests.map(test => <TestItem key={test.id} id={test.id} title={test.title} status={test.status}/>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
