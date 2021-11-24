const { workerData, parentPort } = require("worker_threads");

const output = JSON.stringify(workerData, null, 4);
console.log(`Logging data: ${output}`);

const result = { myData: workerData, status: "Done" };
parentPort.postMessage(result);
