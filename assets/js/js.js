let Open = document.querySelector('#open');
let Close = document.querySelector('#close');
let Menu = document.querySelector('#menu');

Open.addEventListener('click', function(){
    Menu.classList.remove('hidden');
})

Close.addEventListener('click', function(){
    Menu.classList.add('hidden');
})