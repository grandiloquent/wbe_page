
let uri = "https://xpsycho.oss-cn-beijing.aliyuncs.com";
async function load(name) {
  const res = await fetch(uri + `/${name}.json`);
  return res.json();
}
async function render() {
  //renderModels();
  let data = await load('article-list');
  console.log(data);
  const articles = document.querySelector('#articles');
  articles.innerHTML = data.filter(item => !item.hidden).map((item, index) => {
    return `<div class="article-item" data-id="${item.id}">
<h3>${item.title}</h3>
    </div>`
  }).join('');
  new LazyLoad();
  document.querySelectorAll('.article-item')
    .forEach(element => {
      element.addEventListener('click', evt => {
        window.location.href = `/article.html?id=${element.dataset.id}`;
      })
    })
}
async function initialize() {
  await render();
}
initialize();


