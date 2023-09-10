import { addAnswer, removeAnswer, setStatus } from "@/store/firstSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function Action() {
  const answer = useAppSelector((state) => state.first.answer);
  const dispatch = useAppDispatch();

  const handleClick = (value: number) => dispatch(addAnswer(value));
  const handleDelete = (value: number) => dispatch(removeAnswer(value));

  if (answer.length === 5) dispatch(setStatus("results"));

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <div className="grid grid-cols-5 gap-4">
        {[...Array(10).keys()].map((value) => (
          <button
            disabled={answer.includes(value)}
            key={value}
            onClick={() => handleClick(value)}
            className="border px-3 py-1 hover:bg-gray-100 rounded disabled:bg-black"
          >
            {value}
          </button>
        ))}
      </div>
      <div className="flex gap-4">
        <h2 className="font-medium text-lg">Выбранные: </h2>
        {answer.map((value) => (
          <button
            key={value}
            onClick={() => handleDelete(value)}
            className="border px-3 py-1 hover:bg-gray-100 rounded"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
}
