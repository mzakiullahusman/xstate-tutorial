import { createMachine } from "xstate";

export const todosMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBUD2FUAIC2BDAxgBYCWAdmAHQAyquEZUAxDXQ5gGK7EA2kA2gAYAuolAAHVLGIAXYqlKiQAD0QBaAIwAmAKwVtATkP7NANgH6BmgCyaANCACeiAXqPGBADgDsVjwGZtG20AX2D7NAwcAhJyalp6UiYWCH5hRQkpWXlFFQR1ARcPAs8TL2svbRMPdXsnBFVfCi8jD1LPdRMrK1CwkFJ0OEUIrDwiMjB0yRk5BSRlNXUPXQMjU3NLK0Xahat9Ck1igRXLE1LQ8PQR6PG41kTJzJmchc0vCnU3Te1vLv0rbfqJnUFAsxS8fj8Hg8mnUXlO5xAwyiY1iyTYAFEAE6Y1CYyAPabZOa5DR+N4rQxrCzWLaORBmVyrTw+fyBBFI0YxSjJfFzDKE2agXL5KwUYo6PxrdR+RZeAEMinuH6svw9YJAA */
  id: "Todo machine",
  initial: "Loading",

  states: {
    Loading: {
      on: {
        "Loading Failed": "Loading Errored",
        Loaded: "Loaded",
      },
    },

    "Loading Errored": {},
    Loaded: {},
  },
});
