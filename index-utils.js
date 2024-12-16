function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
function getUniqueRandomIndexs(count, min, max) {
  const results = [];
  while (results.length < count) {
    const index = getRandomInt(min, max);
    if (results.indexOf(index) === -1)
      results.push(index);
  }
  return results

}
function randomModels(models) {
  const indexs = getUniqueRandomIndexs(6, 0, models.length)
  return [
    models[indexs[0]],
    models[indexs[1]],
    models[indexs[2]], models[indexs[3]], models[indexs[4]], models[indexs[5]]
  ]
}
