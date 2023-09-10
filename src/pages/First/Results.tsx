import { tests } from "@/mocks";
import { nextTest, resetAnswer, setStatus } from "@/store/firstSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

const getResults = (values: number[], answer: number[]): [number, number] => {
  let right = 0;
  let wrong = 0;

  answer.forEach((value) => {
    values.includes(value) ? (right += 1) : (wrong += 1);
  });

  return [right, wrong];
};

export default function Results() {
  const values = useAppSelector((state) => state.first.values);
  const answer = useAppSelector((state) => state.first.answer);
  const test = useAppSelector((state) => state.first.test);

  const dispatch = useAppDispatch();

  const isLast = test === tests.length - 1;

  const [right, wrong] = getResults(values, answer);

  const handleNextClick = () => {
    dispatch(setStatus("loading"));
    dispatch(resetAnswer());
    dispatch(nextTest());
  };

  return (
    <div className="flex flex-col gap-4 justify-start items-start w-full">
      <p>Верно: {right}</p>
      <p>Ошибок: {wrong}</p>
      {!isLast && (
        <button
          onClick={handleNextClick}
          className="border px-3 py-1 hover:bg-gray-100 rounded"
        >
          Следующий
        </button>
      )}
    </div>
  );
}
