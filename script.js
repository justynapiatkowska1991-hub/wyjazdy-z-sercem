document.querySelector('.menu').addEventListener('click',()=>document.querySelector('.nav nav').classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav nav').classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
function submitForm(e){e.preventDefault();const note=document.getElementById('form-note');note.textContent='Dziękujemy! Formularz jest przygotowany. W kolejnym etapie podłączymy go do prawdziwego odbioru zgłoszeń.';e.target.reset();return false;}