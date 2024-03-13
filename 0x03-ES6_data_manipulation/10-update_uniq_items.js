export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  return map.forEach((elem, key) => {
    if (elem === 1) {
      map.set(key, 100);
    }
  });
}
