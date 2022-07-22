export function generatePassword(length:number): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  const numbers = "1234567890".split("");
  const array = [...alphabet, ...numbers];
  const word: string[] = [];
  for (let i = 1; i <= length; i++) {
    const upper = Math.round(Math.random() * (2 - 1) + 1);
    if (upper > 1)
      word.push(array[Math.round(Math.random() * (array.length - 1 - 1) + 1)]);
    else
      word.push(
        array[
          Math.round(Math.random() * (array.length - 1 - 1) + 1)
        ].toUpperCase()
      );
  }
  return word.join("");
}
