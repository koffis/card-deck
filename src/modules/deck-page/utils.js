/**
 * @desc Function for shuffle cards list
 * @param {array} array - array that contain current cards list
 * @return {array}
 */
export const shuffleFunc = (array) =>
  array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

/**
 * @desc Function for deleting card from the list
 * @param {array} array - array that contain current cards list
 * @param {string} code - unic card code
 * @return {array}
 */
export const deleteCardFunc = (array, code) =>
  array.filter((card) => card.code !== code);

/**
 * @desc Function for sort cards by theirs suit
 * @param {array} array - array that contain current cards list
 * @return {array}
 */
export const sortSuitFunc = (array) =>
  [...array].sort((a, b) => {
    if (a.suit > b.suit) {
      return 1;
    }
    if (a.suit < b.suit) {
      return -1;
    }
    return 0;
  });
