const { Worker } = require("worker_threads");

let num = 40;

const worker = new Worker("./worker.js", { workerData: { num } });

worker.on("message", (resp) => {
  console.log({ resp });
});

worker.on("error", (error) => {
  console.log(error);
});
worker.on("exit", (exitCode) => {
  console.log(exitCode);
});
