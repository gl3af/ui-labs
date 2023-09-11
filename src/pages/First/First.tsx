import PageContainer from "@/components/PageContainer";
import { tests } from "@/mocks";
import { setValues } from "@/store/firstSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { generateFiveRandom } from "@/utils";
import { useMemo } from "react";
import Action from "./Action";
import Loading from "./Loading";
import Results from "./Results";

export default function First() {
  const status = useAppSelector((state) => state.first.status);
  const test = useAppSelector((state) => state.first.test);
  const values = useMemo(() => generateFiveRandom(test), [test]);

  const current = tests[test];

  const dispatch = useAppDispatch();
  dispatch(setValues(values));

  return (
    <PageContainer>
      <div className="flex flex-col gap-4 p-4 justify-center items-center">
        <h1 className="text-4xl text-bold">Лабораторная работа №1</h1>
        <div>
          <p className="text-xl text-semibold">
            Вид: {current.type === "arabic" ? "Арабские" : "Пиктограммы"}
          </p>
          <p className="text-xl text-semibold">Цвет: {current.name}</p>
        </div>
        {status === "loading" && <Loading />}
        {status === "active" && <Action />}
        {status === "results" && <Results />}
      </div>
    </PageContainer>
  );
}
