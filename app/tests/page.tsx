"use client";
import { useState } from "react";
import MCQ from "./mcq";
import Data from "../data.json";

export default function Page() {
  const [attempt, setAttempt] = useState(0);
  const [score, setScore] = useState(0);

  if (attempt === Data.length) {
    return <div>Test Completed with score {score}</div>;
  }
  return (
    <MCQ
      attempt={attempt}
      score={score}
      setAttempt={setAttempt}
      setScore={setScore}
    />
  );
}
