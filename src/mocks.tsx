import First from "./pages/First/First";

export const links = [
  {
    name: "Первая лаба",
    path: "/first",
    element: <First />,
  },
];

const colors = {
  red: "#dc2626",
  green: "#16a34a",
  yellow: "#fef9c3",
} as const;

export const tests: Test[] = [
  {
    color: colors.red,
    type: "arabic",
  },
  {
    color: colors.green,
    type: "arabic",
  },
  {
    color: colors.yellow,
    type: "arabic",
  },
  {
    color: colors.red,
    type: "picture",
  },
  {
    color: colors.green,
    type: "picture",
  },
  {
    color: colors.yellow,
    type: "picture",
  },
];

export type Type = "arabic" | "picture";
export type Colors = (typeof colors)[keyof typeof colors];
export type Test = { color: Colors; type: Type };
