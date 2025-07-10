// "let" declare scope is smaller than "var"
var mutiplicand = 1;
var mutiplier = 1;

// In JS, while loop will check the condition at the beginning
// To meet the times table form, adding mutiplicand first
while (mutiplier <= 9) {
  while (mutiplicand <= 9) {
    // We should make an anouncement before assignment
    // or it would be global variable
    let product = mutiplicand * mutiplier;

    // use <expression>.padend() to pad space until 12 char
    console.log(`${mutiplicand}*${mutiplier} = ${product}`.padEnd(10));
    // or using process.stdout.write

    mutiplicand += 1;
  }
  console.log("\n");
  mutiplier += 1;
  // reset multiplicand
  mutiplicand = 1;
}
