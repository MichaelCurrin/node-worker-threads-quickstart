const { Worker } = require("worker_threads");

function runService(workerData) {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", { workerData });

    // The `postMessage` result from the worker.js will arrive here as `message`
    // be sent back on the resolve.
    worker.on("message", resolve);
    worker.on("error", reject);
    worker.on("exit", (code) => {
      if (code !== 0)
        reject(
          new Error(`Stopped the Worker Thread with the exit code: ${code}`)
        );
    });
  });
}

async function run() {
  const workerData = "GeeksForGeeks";
  const result = await runService(workerData);
  console.log({ result });
}

(async function () {
  try {
    await run();
  } catch (err) {
    console.error(err);
  }
})();
