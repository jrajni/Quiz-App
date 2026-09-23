"use client";

import React, { useState } from "react";
import { Button, Card, TextInput } from "@mantine/core";
import Instructions from "./Instructions";
import { useRouter } from "next/navigation";
import "./start.css";
export default function Page() {
  const navigate = useRouter();
  const [user, setUser] = useState({
    user: "",
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen start-page">
      <Card h="40vh" w="35vw" withBorder bg="white">
        <h4 className="text-2xl font-bold text-dimmed">QUIZ</h4>
        <h2 className="text-2xl font-bold mb-4">Data Analytics Quiz</h2>
        <TextInput
          placeholder="Enter your name"
          value={user.user}
          onChange={(e) => setUser({ ...user, user: e.target.value })}
        />

        <Instructions />
        <Button
          fullWidth
          bdrs="xs"
          fw={500}
          fz={16}
          h={40}
          w="100%"
          radius="md"
          mt={20}
          onClick={() => {
            if (user.user.trim() === "") {
              alert("Please enter your name");
              return;
            }
            navigate.push("/tests");
          }}
        >
          Start Test
        </Button>
      </Card>
    </div>
  );
}
