const botao = document.querySelectorAll('#botao a[href^"#"]');

botao.forEach(item =>{
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target);

    scrollPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth"
    });
}

function