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
    name: "Красный",
    type: "arabic",
  },
  {
    color: colors.green,
    name: "Зеленый",
    type: "arabic",
  },
  {
    color: colors.yellow,
    name: "Бледно-желтый",
    type: "arabic",
  },
  {
    color: colors.red,
    name: "Красный",
    type: "picture",
  },
  {
    color: colors.green,
    name: "Зеленый",
    type: "picture",
  },
  {
    color: colors.yellow,
    name: "Бледно-желтый",
    type: "picture",
  },
];

export type Type = "arabic" | "picture";
export type Colors = (typeof colors)[keyof typeof colors];
export type Test = { color: Colors; name: string; type: Type };
