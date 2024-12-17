
let uri = "https://xpsycho.oss-cn-beijing.aliyuncs.com";
async function load(name) {
  const res = await fetch(uri + `/${name}.json`);
  return res.json();
}
async function render() {
  renderModels();
  renderBooks();
  let data = await load('article-list');
  console.log(data);
  data = data.filter(article => !article.hidden).sort((a, b) => {
    return b.update_at - a.update_at
  }).slice(0, 10);
  const articles = document.querySelector('#articles');
  articles.innerHTML = data.map((item, index) => {
    console.log(item);
    return `<div class="article-item" data-id="${item.id}">
<h3>${item.title}</h3>
<div>${timeago(item.update_at/1000)}</div>
    </div>`
  }).join('');
  new LazyLoad();
  document.querySelectorAll('.article-item')
  .forEach(element => {
    element.addEventListener('click', evt => {
      window.location.href=`/article.html?id=${element.dataset.id}`;
    })
  })
}
async function initialize() {
  await render();
}
initialize();

document.querySelector('#models+.button-more')
  .addEventListener('click', evt => {
    evt.stopPropagation();
    window.location = '/models.html'
  });
document.querySelector('#books+.button-more')
  .addEventListener('click', evt => {
    evt.stopPropagation();
    window.location = '/books.html'
  });

  document.querySelector('#articles+.button-more')
  .addEventListener('click', evt => {
    evt.stopPropagation();
    window.location = '/articles.html'
  });