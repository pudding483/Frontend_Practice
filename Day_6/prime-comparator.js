const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isPrime(n) {
  if (n === 1) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log("...輸入一個正整數，檢驗該數是否為質數");
console.log("...輸入 'exit' 或是 'q' 可離開");

function interact() {
  r1.question("> ", (input) => {
    // use .trim() to remove unintentional space
    if (
      input.trim().toLowerCase() === "exit" ||
      input.trim().toLowerCase() === "q"
    ) {
      console.log("質數檢驗器已關閉");
      r1.close();
      return;
    }

    if (isNaN(input)) {
      console.log("非法輸入，請重新輸入數字");
      return interact();
    }

    const number = Number(input);

    if (!Number.isInteger(number) || number < 0) {
      console.log("該數字並非正整數，請重新輸入數字");
      return interact();
    }

    const _isPrime = isPrime(number);

    if (_isPrime) console.log(`...${number} 是一個質數`);
    else console.log(`...${number} 不是一個質數`);

    interact();
  });
}

interact();
