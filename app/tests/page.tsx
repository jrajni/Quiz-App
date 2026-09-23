"use client";
import { useState } from "react";
import MCQ from "./mcq";
import Data from "../data.json";
import { Button, Card, Text } from "@mantine/core";

export default function Page() {
  const [attempt, setAttempt] = useState(0);
  const [score, setScore] = useState(0);
  if (attempt === Data.length) {
    return (
      <Card shadow="sm" p="xl" withBorder bg="white" m="auto" h="40vh" w="35vw">
        <Card.Section>
          <Text fz={16} fw={600} m="auto" ta="center" mt="xl">
            Test Completed with score {score}
          </Text>
          <Button
            variant="light"
            fullWidth
            mt="xl"
            onClick={() => {
              setAttempt(0);
              setScore(0);
            }}
          >
            Restart
          </Button>
        </Card.Section>
      </Card>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen p-4 start-page">
      <MCQ
        attempt={attempt}
        score={score}
        setAttempt={setAttempt}
        setScore={setScore}
      />
    </div>
  );
}
