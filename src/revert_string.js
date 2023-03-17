export function revertString(str) {
    if (str.length == 0) return "Строка пустая";
    let revertedStr = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      revertedStr += str[i];
    }
    return revertedStr;
  }