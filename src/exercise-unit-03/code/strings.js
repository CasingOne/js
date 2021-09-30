// 15. Теория множеств
export const countUniqChars = (text) => {

  const symbolsArray = [];
  const noGemenyArray = [];

  for (const oneSymbol of text) {
    symbolsArray.push(oneSymbol);
  }

  for (const symbol of symbolsArray) {
    if (noGemenyArray.includes(symbol) === false) {
      noGemenyArray.push(symbol);
    }
  }

  return noGemenyArray.length;
}

// 17. Стек
export const isBracketStructureBalanced = (string) => {

  let pattern = '()[]{}<>';
  let stack = [];

  for (let bracket of string) {
    let bracketIndex = pattern.indexOf(bracket);

    if (bracketIndex === -1){
      continue;
    }

    if (bracketIndex % 2 === 0) {
      stack.push(bracketIndex)
    } else {
      if(stack.pop() !== bracketIndex-1) {
        return console.log(false);
      }
    }
  }

  return stack.length === 0;
}

