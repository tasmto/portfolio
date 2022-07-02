/**
 *
 * @param {*} input string to be trimmed
 * @param {*} maxLength number of characters (threshold)
 * @returns A trimmed string or the original string if it was less than maxLength
 */
const trimString = (input: string, maxLength = 200) =>
  input && input.length > maxLength
    ? `${input.substring(0, maxLength)}...`
    : input;

export default trimString;
