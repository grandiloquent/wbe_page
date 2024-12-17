
let uri = "https://xpsycho.oss-cn-beijing.aliyuncs.com";
async function load(name) {
    const res = await fetch(uri + `/${name}.json`);
    return res.json();
}
async function render() {
    //renderModels();
    let data = await load('books');
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
      <img class="book-item-image lazy" src="https://xpsycho.oss-cn-beijing.aliyuncs.com/${item.isbn}.webp" lazy-load>
 
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


