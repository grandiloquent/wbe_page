
let uri = "https://xpsycho.oss-cn-beijing.aliyuncs.com";
async function load(name) {
    const res = await fetch(uri + `/${name}.json`);
    return res.json();
}
async function render() {
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
    data = await load('books');
    data = randomBooks(data);
    const books = document.querySelector('#books');
    books.innerHTML = data.map((item,index) => {
        return `<div class="book-item" style="${index!==2?'':'padding-bottom:0'}">
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
              <image lazy-load mode="aspectFit" src="https://xpsycho.oss-cn-beijing.aliyuncs.com/more_vert_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg"></image>



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
      <image class="book-item-image" mode="aspectFit" src="https://xpsycho.oss-cn-beijing.aliyuncs.com/${item.isbn}.webp" lazy-load>

      </image>
    </div>
    <div class="book-item-buttons">
      <button open-type="contact" class="book-item-button">
        获取
      </button>


    </div>
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

