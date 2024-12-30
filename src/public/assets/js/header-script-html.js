const lampada = document.querySelector('#lampada');
const textoLampada = lampada.querySelector('p');
const modeLampada = document.querySelector('.mode-lampada');
const root = document.documentElement;

modeLampada.addEventListener('click', function () {
    this.classList.toggle('ativo');
    if (modeLampada.classList.contains('ativo')) {
        root.classList.add('ativo');
        textoLampada.innerText = 'ON';
    } else {
        root.classList.remove('ativo');
        textoLampada.innerText = 'OFF';
    }
});
