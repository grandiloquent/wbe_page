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
function randomBooks(books) {
  const indexs = getUniqueRandomIndexs(6, 0, books.length)
  return [
    books[indexs[0]],
    books[indexs[1]],
    books[indexs[2]], books[indexs[3]], books[indexs[4]], books[indexs[5]]
  ]
}
function randomArticles(articles) {
  const indexs = getUniqueRandomIndexs(10, 0, articles.length)
  return [
    articles[indexs[0]],
    articles[indexs[1]],
    articles[indexs[2]], articles[indexs[3]], articles[indexs[4]], articles[indexs[5]]
  ]
}
async function renderModels() {
  let data = await load('models');
  data = randomModels(data);
  const models = document.querySelector('#models');
  models.innerHTML = data.map(item => {
    return `<div class="list-item">
                    <img data-src="${uri}/${item.thumbnail}.webp" data-src="${uri}/${item.thumbnail}.webp"
                         class="lazy list-item-image" >
                    <button class="list-item-title">${item.title}</button>
                </div>`
  }).join('');
}

async function renderBooks() {
  let data = await load('books');
  data = randomBooks(data);
  const books = document.querySelector('#books');
  books.innerHTML = data.map((item, index) => {
    return `<div class="book-item" style="${index !== 2 ? '' : 'padding-bottom:0'}">
    <div class="book-item-wrapper">
      <div class="book-item-left">
        <div class="book-item-details">
          <div class="book-item-detail-item" style="display: none;">
          </div>
          <div class="book-item-detail-right">
            <div class="book-item-detail-timeago">
              ${item.skills}
            </div>
            <div class="book-item-detail-menu" style="display: none;">
              <img  src="https://xpsycho.oss-cn-beijing.aliyuncs.com/more_vert_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg">
            </div>

          </div>


        </div>
        <div class="book-item-content">
          ${item.title}
        </div>
        <div class="book-item-subtitle">
          ${item.summary}
        </div>
      </div>
      <img class="book-item-image lazy" data-src="https://xpsycho.oss-cn-beijing.aliyuncs.com/${item.isbn}.webp" lazy-load>
 
    </div>
    <div class="book-item-buttons">
      <button class="book-item-button">
        获取
      </button>
    </div>
  </div>`
  }).join('');
}
const en_US = [
  "刚刚", "秒前",
  "1 分钟前", "分钟前",
  "1 小时前", "小时前",
  "1 天前", "天前",
  "1 周前", "周前",
  "1 个月前", "个月前",
  "1 年前", "年前"
]
const SECONDS_IN_TIME = [
  1,         // 1 second
  60,        // 1 minute
  3600,      // 1 hour
  86400,     // 1 day
  604800,    // 1 week
  2419200,   // 1 month
  29030400   // 1 year
];
function timeago(timestamp) {
  let now = Math.floor(new Date / 1000);
  let diff = (now - timestamp) || 1; // prevent undefined val when diff == 0
  for (let i = 6; i >= 0; i--) {
      if (diff >= SECONDS_IN_TIME[i]) {
          let time_elapsed = Math.floor(diff / SECONDS_IN_TIME[i]);
          let adverbs = en_US;
          let sentence = adverbs.map((el, idx) => idx % 2 == 0 ? el : time_elapsed + " " + el);
          return time_elapsed >= 2 ? sentence[i * 2 + 1] : sentence[i * 2];
      }

  }

}