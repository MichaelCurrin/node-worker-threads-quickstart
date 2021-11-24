# Usage

```sh
$ cd quickstarts
```

## Basic

Run a worker task and finish. Using simple code.

```sh
$ cd basic
$ node index.js
```


## Functions

Run a worker task and finish. Using functions in `index.js`.

```sh
$ cd functions
$ node index.js
```


## Fibonacci

Get the Nth number of the [Fibonacci sequence](https://en.wikipedia.org/wiki/Fibonacci).

Worker threads makes sense to run a CPU-intensive task as worker, without blocking the parent thread that could handle IO (like a terminal app or web server).

```sh
$ cd fib
$ node index.js
```


## Parallel

Run two tasks in parallel.


```sh
$ cd parallel
```

Standard - both tasks printing every one second and continue indefinitely. So the output is repeated until you cancel the command.

```console
$ node index.js
Worker data: { workerData: { num: 123 } }
MESSAGE
{ resp: { myData: { num: 123 }, status: 'Done' } }
Worker data: { workerData: { num: 456 } }
MESSAGE
{ resp: { myData: { num: 456 }, status: 'Done' } }
Worker data: { workerData: { num: 123 } }
...
```

If you uncomment the code to `process.exit`, you get this:

```console
$ node index.js
MESSAGE
{ resp: { myData: { num: 456 }, status: 'Done' } }
EXIT
{ exitCode: 1 }
EXIT
{ exitCode: 1 }
```
If you uncomment the code to `throw new Error`, you get this:

```console
$ node index.js
Worker data: { workerData: { num: 123 } }
MESSAGE
{ resp: { myData: { num: 123 }, status: 'Done' } }
Worker data: { workerData: { num: 456 } }
ERROR
Error: My error. Input data: {"num":456}
MESSAGE
{ resp: { myData: { num: 456 }, status: 'Done' } }
ERROR
Error: My error. Input data: {"num":123}
EXIT
{ exitCode: 1 }
EXIT
{ exitCode: 1 }
```


## Two-way

Reuse the worker instead of spawning an new one for each calculation.
