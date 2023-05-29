import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Confetti from "../../components/Confetti";
import styles from "./Result.module.scss";

const Result: React.FC = () => {
  const { result } = useParams();
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(-2);
  };

  return (
    <>
      <Confetti />
      <div className={styles.page}>
        <h4>Your result:</h4>
        <h2>{result.split("-").join("/")}</h2>
        <button onClick={() => onClickButton()}>{"go home 🏠"}</button>
      </div>
    </>
  );
};

export default Result;
