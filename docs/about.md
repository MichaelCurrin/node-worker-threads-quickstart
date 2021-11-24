
# About

On Node and threads.


## Limitations

Node is single-threaded. This is great for IO tasks but not for CPU-bound tasks. This limitation means you cannot start a new thread or process within Node using standard programming.


## Solutions

One solution is to use the `worker_threads`, a built-in module from Node 12 (experimental in Node 10) to achieve multiple threads. That is what this repo is about.

For local development, you might be fine just to use [concurrently](https://www.npmjs.com/package/concurrently), as you can start two tasks using a one-line change in your `package.json` commands, without changing your app code.

A [SO](https://stackoverflow.com/questions/19120213/parallelizing-tasks-in-node-js) thread said that you are limited by Node as a single threaded environment, with an event loop, and suggested:

That said, you can get processing parallelism on multi-core machine by either

- Forking the code into separate node processes - see [cluster]. Or
- Spawning a child process - see [child process].

[cluster]: https://nodejs.org/api/cluster.html#cluster_event_fork
[child process]: https://nodejs.org/api/child_process.html#child_process_child_process_spawn_command_args_options


## When to use multiple threads

This can be useful to have two tasks running. Such as two servers or one server and one background task that processes a queue. Or if you want to have a CPU-intensive task run on a separate thread so the thread that takes care of the UI is not affected.


## Resources on Worker Threads

- https://nodejs.org/docs/latest/api/worker_threads.html
- https://www.geeksforgeeks.org/node-js-worker-threads/
- https://livecodestream.dev/post/how-to-work-with-worker-threads-in-nodejs/
- https://tsh.io/blog/simple-guide-concurrency-node-js/
