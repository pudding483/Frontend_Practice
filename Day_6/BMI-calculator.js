const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ES6+ arrow function
const square = (x) => x * x;

function calculateBMI(height, weight) {
  let bmi = weight / square(height);
  return bmi;
}

console.log("\n...請輸入以下格式，以查詢 bmi 指標");
console.log("...使用方式：<身高(公尺)> <體重(公斤)> (不需輸入單位)");
console.log("...輸入 'exit' 或是 'q' 可離開");

// use a function to make it loop
// readline is an asynchronous function, which means we cannot use while loop outside
function interact() {
  // create an interactive question loop
  r1.question("> ", (input) => {
    // use .trim() to remove unintentional space
    if (
      input.trim().toLowerCase() === "exit" ||
      input.trim().toLowerCase() === "q"
    ) {
      console.log("計算機已關閉");
      r1.close();
      return;
    }

    // destuct array using []
    const [height, weight] = input.split(" ").map(Number);
    const bmi = calculateBMI(height, weight);

    console.log(`你的 bmi 是 ${bmi.toFixed(2)}`);

    interact();
  });
}

interact();
