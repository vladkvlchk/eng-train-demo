import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Timer from "../../components/Timer";
import { demoDataTest } from "../../data";
import styles from "./Test.module.scss";

const Test: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [currentAnswer, setCurrentAnswer] = React.useState<string>("");
  const [answers, setAnswers] = React.useState<string[]>([""]);
  const navigate = useNavigate();

  if (!currentPage) {
    // here will be ABOUT TEST page with button START
  }

  const onChangeRadio = (option: string) => {
    setCurrentAnswer(option);
  };

  const onCLickPrevious = (): void => {
    if (currentPage > 1) {
      const new_answers = answers;
      new_answers[currentPage - 1] = currentAnswer;
      setAnswers(new_answers); // adding selected answer to the answers
      setCurrentAnswer(answers[currentPage - 2] || ""); // preparing to showing the previous task
      setCurrentPage(currentPage - 1); //showing the previous task
      console.log(answers);
    }
  };

  const onCLickNext = (): void => {
    const new_answers = answers;
    new_answers[currentPage - 1] = currentAnswer;
    setAnswers(new_answers);
    if (currentPage < demoDataTest.tasks.length) {
      setCurrentAnswer(answers[currentPage] || "");
      setCurrentPage(currentPage + 1);
    } else {
      onFinish();
    }
  };

  const onFinish = (): any => {
    let result = 0;
    for (let i = 0; i < demoDataTest.tasks.length; i++) {
      if (demoDataTest.tasks[i].correctAnswer === answers[i]) {
        result++;
      }
    }
    navigate("./" + result + "-" + demoDataTest.tasks.length);
  };

  return (
    <div className={styles.page}>
      <div className={styles.timer}>{<Timer onTimeOver={onFinish} />}</div>
      <div className={styles.task}>
        <div className={styles.questionContainer}>
          <h4 className={styles.question}>
            {demoDataTest.tasks[currentPage - 1]?.question}
          </h4>
        </div>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue={currentAnswer}
          name="radio-buttons-group"
        >
          {demoDataTest.tasks[currentPage - 1]?.options.map((option) => {
            return (
              <FormControlLabel
                key={option.split(" ").join() + currentPage}
                value={option}
                control={<Radio />}
                label={option}
                onChange={() => onChangeRadio(option)}
                checked={currentAnswer === option}
              />
            );
          })}
        </RadioGroup>
      </div>
      <div className={styles.control}>
        <button onClick={() => onCLickPrevious()}>
          {currentPage != 1 ? "< previous " : ""}
        </button>
        <p>{currentPage + " / " + demoDataTest.tasks.length}</p>
        <button onClick={() => onCLickNext()}>
          {currentPage < demoDataTest.tasks.length ? "next >" : "Finish 🏁"}
        </button>
      </div>
    </div>
  );
};

export default Test;
