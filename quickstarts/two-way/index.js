const { Worker } = require("worker_threads");

let num = 40;

const initialData = { num };
const worker = new Worker("./worker.js", { workerData: initialData });

const laterData = { num: 55 };
worker.postMessage(laterData);

worker.on("message", (resp) => {
  console.log({ resp });
});

worker.on("error", (error) => {
  console.log(error);
});
worker.on("exit", (exitCode) => {
  console.log(exitCode);
});
