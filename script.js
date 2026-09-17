const menu=document.querySelector('.menu'),links=document.querySelector('.links'),theme=document.querySelector('#theme');
menu.onclick=()=>links.classList.toggle('open'); document.querySelectorAll('.links a').forEach(a=>a.onclick=()=>links.classList.remove('open'));
theme.onclick=()=>{document.body.classList.toggle('dark');localStorage.setItem('theme',document.body.classList.contains('dark')?'dark':'light')};
if(localStorage.getItem('theme')==='dark')document.body.classList.add('dark');
function placeholder(name){alert('Replace this placeholder with your '+name+' URL.');return false;}