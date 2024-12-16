let uri = "https://xpsycho.oss-cn-beijing.aliyuncs.com";
const searchParams = new URL(location.href).searchParams;
const id = parseInt(searchParams.get("id")) || 0;

async function load() {
    const res = await fetch(uri + `/article-${id}.md`);
    return res.text();
}
async function render() {
    let data = await load();
    const article = document.querySelector('#article');
    const md = markdownit({
        html: true,
        linkify: true
    })
    article.innerHTML = md.render(data);
}
async function initialize() {
    await render();
}
initialize();