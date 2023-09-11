export const generateFiveRandom = (test: number): number[] => {
  console.log(test);
  const res: number[] = [];

  while (res.length !== 5) {
    const number = Math.floor(Math.random() * 10);

    if (res.includes(number)) continue;

    res.push(number);
  }

  return res;
};
