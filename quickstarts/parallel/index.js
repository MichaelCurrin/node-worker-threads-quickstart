const { Worker } = require("worker_threads");

/**
 * Behavior notes:
 *
 * On 'error':
 *   e.g. from `throw new Error('...')`.
 *   e.g. from process.exit()
 *
 * on 'exit'
 *   e.g. from process.exit()
 *   If only thread exits, the parent keeps running so you need to run
 *   `process.exit` in the parent to get the parent to stop.
 */
function startWorker(worker) {
  worker.on("message", (resp) => {
    console.log("MESSAGE");
    console.log({ resp });
  });

  worker.on("error", (error) => {
    console.error("ERROR");
    console.error(error.toString());
  });

  worker.on("exit", (exitCode) => {
    console.log("EXIT");
    if (exitCode === 0) {
      console.log({ exitCode });
    } else {
      console.error({ exitCode });
    }

    process.exit(exitCode);
  });
}

const worker = new Worker("./worker.js", { workerData: { num: 123 } });
const worker2 = new Worker("./worker.js", { workerData: { num: 456 } });

startWorker(worker);
startWorker(worker2);
