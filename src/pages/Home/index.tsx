import { title } from "process";
import React from "react";
import TestItem from "../../components/TestItem";
import styles from "./Home.module.scss";

const demoData = {
  sets: [
    {
      title: "Tests",
      tests: [
        { title: "A1", status: "done [30/30]" },
        { title: "A2", status: "done [28/30]" },
        { title: "B1.1", status: "new" },
        { title: "B1.2", status: "new" },
        { title: "B2.1", status: "new" },
        { title: "B2.2", status: "difficult" },
        { title: "C1", status: "hard" },
      ],
    },
  ],
};

const Home: React.FC = () => {
  return (
    <div className={styles.page}>
      {demoData.sets.map((set) => (
        <div className={styles.testSet}>
          <h2 className={styles.setTitle}>{set.title}</h2>
          <div className={styles.tests}>
            {set.tests.map(test => <TestItem title={test.title} status={test.status}/>)}
          </div>
        </div>
      ))}
      {/* <div className={styles.testSet}>
        <h2 className={styles.setTitle}>by topics</h2>
        <TestItem />
        <TestItem />
        <TestItem />
        <TestItem />
        <TestItem />
      </div> */}
      {/* <div className={styles.set}>
        <h2 className={styles.setTitle}>grammar</h2>
        <TestItem />
        <TestItem />
        <TestItem />
        <TestItem />
        <TestItem />
      </div> */}
      {/* <div className={styles.set}>
        <h2 className={styles.setTitle}>vocabulary</h2>
        <TestItem />
        <TestItem />
        <TestItem />
        <TestItem />
        <TestItem />
      </div> */}
    </div>
  );
};

export default Home;
