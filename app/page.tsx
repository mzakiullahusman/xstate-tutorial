"use client";
import { myMachine } from "@/machines/myFirstMachine";
import { useMachine } from "@xstate/react";

export default function Home() {
  const [state, send] = useMachine(myMachine);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h2>XState Tutorial</h2>
        <div>{JSON.stringify(state.value)}</div>
        <button
          onClick={() => {
            send({ type: "MOUSEOVER" });
          }}
        >
          Mouse over
        </button>
        <br />
        <button
          onClick={() => {
            send({ type: "MOUSEOUT" });
          }}
        >
          Mouse out
        </button>
      </div>
    </main>
  );
}
