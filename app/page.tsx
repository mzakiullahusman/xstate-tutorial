"use client";
import { todosMachine } from "@/machines/todoAppMachine";
import { useMachine } from "@xstate/react";

export default function Home() {
  const [state, send] = useMachine(todosMachine);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>XState Tutorial</h2>
        <div>{JSON.stringify(state.value)}</div>
        <button
          onClick={() => {
            send({ type: "Loaded" });
          }}
        >
          Todos loaded
        </button>
        <br />
        <button
          onClick={() => {
            send({ type: "Loading Failed" });
          }}
        >
          Loading todos failed
        </button>
      </div>
    </main>
  );
}
