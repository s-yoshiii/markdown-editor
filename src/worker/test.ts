const worker: Worker = self as any;
worker.addEventListener('message', (event) => {
  console.log('Worker Received:', event.data);
  let count: number = 1;
  worker.postMessage({ result: event.data });
});
