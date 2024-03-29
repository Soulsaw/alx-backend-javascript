const weakMap = new WeakMap();

function queryAPI(endpoint) {
  let count = weakMap.get(endpoint) || 0;

  count += 1;

  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  console.log(`Querying API for endpoint: ${endpoint.name}`);

  return `Data for ${endpoint.name}`;
}

export { weakMap, queryAPI };
