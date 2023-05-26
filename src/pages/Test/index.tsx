import React from "react";
import { useParams } from "react-router-dom";
import styles from "./Test.module.scss"

const Test : React.FC = () => {
    const { id } = useParams();
    return (<div className="page">{id}</div>)
}

export default Test