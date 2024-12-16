
let uri = "https://xpsycho.oss-cn-beijing.aliyuncs.com";
async function load() {
    const res = await fetch(uri + `/models.json`);
    return res.json();
}
async function render() {
    let data = await load();
    const models = document.querySelector('#models');
    models.innerHTML = data.map(item => {
        return `<div class="list-item">
                    <img data-src="${uri}/${item.thumbnail}.webp" data-src="${uri}/${item.thumbnail}.webp"
                         class="lazy list-item-image" >
                    <button class="list-item-title">${item.title}</button>
                </div>`
    }).join('');
    new LazyLoad();
}
async function initialize() {
    await render();
}
initialize();

