import { title } from "process";
import React from "react";
import TestItem from "../../components/TestItem";
import styles from "./Home.module.scss";

const demoData = {
  sets: [
    {
      id: 1,
      title: "Tests by level",
      tests: [
        { id: 1, title: "A1", status: "for beginners" },
        { id: 2, title: "A2", status: "elementary" },
        { id: 3, title: "B1 part 1", status: "intermediate" },
        { id: 4, title: "B1 part 2", status: "intermediate" },
        { id: 5, title: "B2 part 1", status: "upper-intermediate" },
        { id: 6, title: "B2 part 2", status: "upper-intermediate" },
        { id: 7, title: "C1", status: "advanced" },
      ],
    },
    {
      id: 1,
      title: "By topic",
      tests: [
        { id: 11, title: "Travel ✈️", status: "for beginners" },
        { id: 12, title: "People around 👥", status: "elementary" },
        { id: 13, title: "Sport 🎾", status: "intermediate" },
        { id: 124144, title: "Applying for a job 👔", status: "intermediate" },
        { id: 12214, title: "Global problems 🌎", status: "intermediate" },
        { id: 14125432, title: "News 🗞️", status: "intermediate" },
        { id: 14214589, title: "IT 💻", status: "intermediate" },
        { id: 1847354, title: "Relationships 👩‍❤️‍👨", status: "intermediate" },
        { id: 15, title: "Business 💼", status: "upper-intermediate" },
        { id: 16, title: "Life goals 🎯", status: "upper-intermediate" },
        { id: 17, title: "Philosophy 💭", status: "advanced" },
      ],
    },
  ],
};

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
