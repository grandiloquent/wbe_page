
let uri = "https://xpsycho.oss-cn-beijing.aliyuncs.com";
async function load() {
    const res = await fetch(uri + `/models.json`);
    return res.json();
}
async function render() {
    let data = await load();
    data = randomModels(data);
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

document.querySelector('#models+.button-more')
    .addEventListener('click', evt => {
        evt.stopPropagation();
        window.location = '/models.html'
    });



const homeLogo = document.querySelector('.home-logo');
const topbarHeaderContent = document.querySelector('.topbar-header-content');


const searchBarButton = document.querySelector('.search-bar-button');
searchBarButton.addEventListener('click', evt => {
    evt.stopPropagation();
    topbarBackArrow.removeAttribute('style');
    searchbox.removeAttribute('style');
    homeLogo.style.display = 'none'
    topbarHeaderContent.style.display = 'none'
})



const topbarBackArrow = document.querySelector('.topbar-back-arrow');
const searchbox = document.querySelector('.searchbox');
topbarBackArrow.addEventListener('click', evt => {
    evt.stopPropagation();
    topbarBackArrow.style.display = 'none'
    searchbox.style.display = 'none'
    homeLogo.removeAttribute('style');
    topbarHeaderContent.removeAttribute('style');

});

