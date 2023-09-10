import { Test, tests } from "@/mocks";
import { setStatus } from "@/store/firstSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Egg } from "lucide-react";
import { useEffect, useState } from "react";

export default function Loading() {
  const values = useAppSelector((state) => state.first.values);
  const test = useAppSelector((state) => state.first.test);
  const dispatch = useAppDispatch();

  const [left, setLeft] = useState<number>(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeft((prev) => (prev -= 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (left === 0) dispatch(setStatus("active"));

  return (
    <>
      <div className="flex gap-4 items-center justify-center">
        {values.map((value) => (
          <Item key={value} test={tests[test]} value={value} />
        ))}
      </div>
      <p className="text-lg">Осталось: {left}</p>
    </>
  );
}

const Item = ({ test, value }: { test: Test; value: number }) => {
  const { type, color } = test;

  if (type === "arabic")
    return (
      <p className="text-3xl" style={{ color }}>
        {value}
      </p>
    );

  return (
    <div className="grid grid-cols-3 grid-rows-3 border-4 place-items-center p-2 min-w-[100px] aspect-square">
      {[...Array(value).keys()].map((_, index) => (
        <Egg key={index} color={color} fill={color} />
      ))}
    </div>
  );
};
