"use client";

import {
  Button,
  Card,
  Flex,
  RingProgress,
  Text,
  UnstyledButton,
} from "@mantine/core";
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
  const [userClicked, setUserClicked] = useState("");

  const handleSkip = () => {
    setAttempt(attempt + 1);
    setSeconds(30);
    setUserClicked("");
  };
  useEffect(() => {
    interval.start();
    if (seconds === 0) {
      interval.stop();
      handleSkip();
    }
    return () => {
      interval.stop();
    };
  }, [interval]);
  const { attempt, score, setAttempt, setScore } = props;
  return (
    <Card shadow="sm" p="xl" withBorder bg="white" m="xs" h="40vh" w="35vw">
      <Flex justify="space-between">
        <Card.Section>
          Question {attempt + 1} of {Data.length}
        </Card.Section>
        <RingProgress
          mt={-10}
          size={40}
          thickness={3}
          sections={[{ value: seconds, color: "blue" }]}
          transitionDuration={250}
          label={<Text ta="center">{seconds}</Text>}
        />
      </Flex>

      <Card.Section>
        <Text fz={16} fw={600}>
          {Data[attempt].ques}
        </Text>
      </Card.Section>
      <Card.Section>
        {Data[attempt].options.map((option) => (
          <UnstyledButton
            bdrs="sm"
            fw={500}
            fz={16}
            bd="1px solid #e0e0e0"
            h={40}
            bg={
              userClicked
                ? Data[attempt].ans != userClicked &&
                  option != Data[attempt].ans &&
                  option === userClicked
                  ? "red"
                  : Data[attempt].ans == option
                    ? "green"
                    : "white"
                : "white"
            }
            w="100%"
            mt={10}
            pl="sm"
            key={option}
            onClick={() => {
              setUserClicked(option);
              if (option === Data[attempt].ans) {
                setScore(score + 1);
              }
              setTimeout(() => {
                handleSkip();
              }, 2000);
            }}
            className="w-full"
          >
            <Text>{option}</Text>
          </UnstyledButton>
        ))}
      </Card.Section>
      <Flex justify="space-between">
        <UnstyledButton
          fw={500}
          fz={16}
          variant="transparent"
          mt="xs"
          c="dimmed"
          onClick={handleSkip}
        >
          Skip
        </UnstyledButton>
      </Flex>
    </Card>
  );
}
export default MCQ;
