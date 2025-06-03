let more = document.getElementById('more');
let drop = document.getElementById('drop');

more.addEventListener ('click', ()=> {
    drop.classList.toggle('down')
    more.classList.toggle('bend')
});

