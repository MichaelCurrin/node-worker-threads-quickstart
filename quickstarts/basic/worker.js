const { workerData, parentPort } = require("worker_threads");

const result = { myData: workerData, status: "Done" };
parentPort.postMessage(result);
