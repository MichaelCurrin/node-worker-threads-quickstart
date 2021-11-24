const { parentPort, workerData } = require("worker_threads");

function fib(n) {
  console.log("called fib with:", n);

  if (n < 2) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}

console.log("Starting...");
const calcResult = fib(workerData.num);
const result = { num: workerData.num, calcResult };
parentPort.postMessage(result);
