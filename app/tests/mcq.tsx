"use client";

import { Card, Text, UnstyledButton } from "@mantine/core";
import Data from "../data.json";
import { useEffect, useRef, useState } from "react";
import { useInterval } from "@mantine/hooks";
function MCQ(props: {
  attempt: number;
  score: number;
  setAttempt: (attempt: number) => void;
  setScore: (score: number) => void;
}) {
  const [seconds, setSeconds] = useState(30);
  const interval = useInterval(() => setSeconds((s) => s - 1), 1000);
  useEffect(() => {
    interval.start();
    if (seconds === 0) {
      interval.stop();
      setAttempt(attempt + 1);
      setScore(score - 1);
    }
    return () => {
      interval.stop();
    };
  }, [interval]);
  const { attempt, score, setAttempt, setScore } = props;
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section>Attempt: {attempt}</Card.Section>
      <Card.Section>Score: {score}</Card.Section>
      <Card.Section>Time: {seconds}</Card.Section>
      <Card.Section>
        <Text>{Data[attempt].ques}</Text>
      </Card.Section>
      <Card.Section>
        {Data[attempt].options.map((option) => (
          <UnstyledButton
            key={option}
            onClick={() => {
              if (option === Data[attempt].ans) {
                setScore(score + 1);
              }
              setAttempt(attempt + 1);
              setSeconds(30);
            }}
            className="w-full"
          >
            <Text>{option}</Text>
          </UnstyledButton>
        ))}
      </Card.Section>
    </Card>
  );
}
export default MCQ;
