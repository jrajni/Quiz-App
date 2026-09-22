"use client";

import React, { useState } from "react";
import { Button, TextInput } from "@mantine/core";
import Instructions from "./Instructions";
import { useRouter } from "next/navigation";

export default function Page() {
  const navigate = useRouter();
  const [user, setUser] = useState({
    user: "",
  });
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TextInput
        placeholder="Enter your name"
        value={user.user}
        onChange={(e) => setUser({ ...user, user: e.target.value })}
      />

      <Instructions />
      <Button
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
    </div>
  );
}
