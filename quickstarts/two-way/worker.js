const { workerData, parentPort } = require("worker_threads");

// Initial data.
const result = { initialData: workerData, status: "Done" };
parentPort.postMessage(result);

// Data from worker.postMessage in the parent script.
parentPort.on("message", (workerData) => {
  parentPort.postMessage(workerData);
});
