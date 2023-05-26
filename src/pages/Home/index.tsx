import { title } from "process";
import React from "react";
import TestItem from "../../components/TestItem";
import styles from "./Home.module.scss";

const demoData = {
  sets: [
    {
      title: "Tests",
      tests: [
        { id: 1, title: "A1", status: "✅ done [30/30] ✅" },
        { id: 2, title: "A2", status: "✅ done [28/30] ✅" },
        { id: 3, title: "B1.1", status: "🎈 new 🎈" },
        { id: 4, title: "B1.2", status: "🎈 new 🎈" },
        { id: 5, title: "B2.1", status: "🎈 new 🎈" },
        { id: 6, title: "B2.2", status: "🔥 difficult 🔥" },
        { id: 7, title: "C1", status: "💪 hard 💪" },
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
            {set.tests.map(test => <TestItem id={test.id} title={test.title} status={test.status}/>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
