export const shuffleFunc = (array) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

export const deleteCardFunc = (array, code) =>
  array.filter((card) => card.code !== code);
