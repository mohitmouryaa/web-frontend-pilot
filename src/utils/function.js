export function uppercaseFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function uppercaseFirstLetterOfEachWord(str) {
  return str
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
