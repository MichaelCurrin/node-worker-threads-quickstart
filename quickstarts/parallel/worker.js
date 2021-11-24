const { workerData, parentPort } = require("worker_threads");

setInterval(() => {
  // Within worker.
  console.log("Worker data:", { workerData });

  // Post message to parent.
  const result = { myData: workerData, status: "Done" };
  parentPort.postMessage(result);

  // Force just one thread to fail.
  // if (workerData.num === 123) {
  //   throw new Error(`My error. Input data: ${JSON.stringify(workerData)}`)
  // }

  // Exiting both workers stops the parent thread too.
  // process.exit(1)
}, 1000);
