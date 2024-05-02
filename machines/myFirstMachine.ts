import { createMachine } from "xstate";

export const myMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOnwHsAXACXIDcwAnSAYgFkB5AVQGUBRDgDU+AJQDaABgC6iUAAdysXJVzl8skAA9EAJgDsekhICMOgKwSALGYMA2AMy29AGhABPRMcv2SADgCcgf5mxra2wfb2OgC+0a5oWHiEpNj0TKycvAJcACqSMkggCkoqahraCDqWtiT2gXr+Olb2xhK2rh4I1iRhVnoSvrbVOr6WlrFxIBQQcBoJOATEGsXKquqFFQC0vj2Weo5NeqHG-if+HYiblsY9dWY6-oPW-Wa+sfEYC8lkVLQMzBBlopVmUNog6rV7g4GiN7L4BhcEMZ7JYeqYdKZjBZHij3iB5kliCRUv9IECSmtyohqqjbPp7r4qr5WmZHIizDUqoEzMFqg1fHpbBNokA */
  initial: "notHovered",
  states: {
    notHovered: {
      on: {
        MOUSEOVER: {
          target: "hovered",
        },
      },
    },
    hovered: {
      on: {
        MOUSEOUT: {
          target: "notHovered",
        },
      },
    },
  },
});
