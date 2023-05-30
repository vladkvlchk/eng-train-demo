import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import Timer from "../../components/Timer";
import styles from "./Test.module.scss";

const demoDataTest = {
  name: "B1",
  time: 30,
  tasks: [
    {
      question: "I ____ long hair until I turned 18",
      options: ["will", "has", "have", "had"],
      correctAnswer: "had",
    },
    {
      question: "I've got ____ much work to do tonight",
      options: ["many", "so", "too", "enough"],
      correctAnswer: "so",
    },
    {
      question: "$168! That's much _____ expensive for a pair of shoes.",
      options: ["more", "much", "so", "too"],
      correctAnswer: "too",
    },
    {
      question: "Why _____ Anna _____ when she _____ the book?",
      options: [
        "was / crying / finished",
        "has / been crying / finished",
        ,
        "does / cries / finished",
        "will / cry / is finishing",
      ],
      correctAnswer: "was / crying / finished",
    },
    {
      question: "Anna _____ because the ending _____ so sad.",
      options: [
        "was crying / was",
        "has been crying / is",
        "will crying / have",
        "is crying / will",
      ],
      correctAnswer: "was crying / was",
    },
    {
      question:
        "I don't know. What can I say you? Who ______ the children _____ with while their mom _____ ?",
      options: [
        "have / been staying / is working",
        "were / staying / was working",
        "had / staying / was working",
        "will / be staying / have been working",
      ],
      correctAnswer: "were / staying / was working",
    },
    {
      question: "I ______ four languages by the time I leave high school",
      options: ["will have learned", "learned", "was learned", "have learned"],
      correctAnswer: "will have learned",
    },
    {
      question: "I wasn't studying ______ the library yesterday",
      options: ["in", "by", "on", "at"],
      correctAnswer: "at",
    },
    {
      question: "Yesterday, we ______ their friends.",
      options: [
        "were seeing",
        "have been seeing",
        "will be seeing",
        "am seeing",
      ],
      correctAnswer: "were seeing",
    },
    {
      question: "While I was shopping, someone ______ my bag.",
      options: ["was stealing", "have been stealing", "steal", "is stealing"],
      correctAnswer: "was stealing",
    },
    {
      question: "- Hello \n \nIt's ______ reason for being",
      options: ["the", "-", "a", "an"],
      correctAnswer: "a",
    },
    {
      question:
        "- I wolf you. \n \nBut Love burned me out completely. Yes, that's Love ______ a capital L.Wife",
      options: ["into", "on into", "from", "with"],
      correctAnswer: "with",
    },
    {
      question: "- Why don't you love me anymore?\n- Mother _______ my child",
      options: ["a", "to", "of", "in"],
      correctAnswer: "of",
    },
    {
      question:
        'I did my best, but she was... I hate _______ a woman "crazy," but, well.',
      options: ["to calling", "call", "to call", "calling"],
      correctAnswer: "to call",
    },
    {
      question:
        "I'm trying. I did everything to be a good man, a good father, a good...Can't say I've got ________ track record in the history of romantics.",
      options: [
        "the mostly impressive",
        "the most impressively",
        "the most impressive",
        "most impressiveness",
      ],
      correctAnswer: "the most impressive",
    },
    {
      question:
        "I always tried to be better for her. Always.  I always fought for her. What now? The end of the love story? \n \n- But my heart is _______ the right place. I found you.",
      options: ["by", "of", "to", "in"],
      correctAnswer: "in",
    },
    {
      question:
        "- Oh, Good, Perfectly, you! Come on... \n\n- I remember. The speech _______ Romeo expresses his love for Juliet. But now this is different.",
      options: ["why is", "in which", "what have", "when for"],
      correctAnswer: "in which",
    },
    {
      question:
        "- He couldn't understand me, but, John, you understood.\n\n-We were _______ same",
      options: ["an", "-", "a", "the"],
      correctAnswer: "the",
    },
    {
      question:
        "- He lied to you.\n\n- She's ________ with a guy she met in Spain. (crazy)",
      options: [
        "unconditional love",
        "madly in love",
        "love blossoms",
        "love at first sight",
      ],
      correctAnswer: "madly in love",
    },
    {
      question: "While he _______, his girlfriend Rose _______",
      options: [
        "was cooking / was cleaning",
        "has been cooking / is cleaning",
        "will be cooking / will be clean",
        "had been cooking / cleaned",
      ],
      correctAnswer: "was cooking / was cleaning",
    },
    {
      question: "John is just the beginning of what he's willing ______",
      options: ["doing", "did", "do", "to do"],
      correctAnswer: "to do",
    },
    {
      question: "The horse _______ off across the field.",
      options: ["galloped", "loped", "was trotting", "bolted"],
      correctAnswer: "galloped",
    },
    {
      question: "A little dog ______ behind her.",
      options: ["was jogging", "legged it", "loped", "was trotting"],
      correctAnswer: "was trotting",
    },
    {
      question:
        "- Yeah, absolutely no. I disagree.\n\n- It made _______ nearly profound points for a work of fantasy.",
      options: ["lots of", "little", "few", "a few"],
      correctAnswer: "a few",
    },
    {
      question:
        "Even young children know ________ difference between right and wrong.",
      options: ["an", "-", "a", "the"],
      correctAnswer: "the",
    },
    {
      question: "Haven't seen a woman ________ a hat for years.",
      options: ["on", "by", "at", "in"],
      correctAnswer: "in",
    },
    {
      question:
        "- Come on, that stuff's barely literature.\n\n- There was a lady _________ a hat, only one but quite a one.",
      options: ["on", "at", "in", "by"],
      correctAnswer: "in",
    },
    {
      question: "I _______ spending time with a girl named Leila.",
      options: ["around like", "swept off", "long-sleeved", "picked up"],
      correctAnswer: "picked up",
    },
    {
      question: "Anna _______ for us while we ________ off the plane.",
      options: [
        "was looking / were getting",
        "is looking / get",
        "looked / got",
        "have been looking / got",
      ],
      correctAnswer: "was looking / were getting",
    },
    {
      question:
        "The painting has been stolen and the art gallery has been _______ out of a large sum of money.",
      options: ["swindled", "conned", "cheated", "defrauded"],
      correctAnswer: "swindled",
    },
  ],
};

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
        <p>{currentPage + "/" + demoDataTest.tasks.length}</p>
        <button onClick={() => onCLickNext()}>
          {currentPage < demoDataTest.tasks.length ? "next >" : "Finish 🏁"}
        </button>
      </div>
    </div>
  );
};

export default Test;
