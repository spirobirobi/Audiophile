fetch('./data.json')
.then((response)=>response.json())
.then((json)=>{

const headphones=document.getElementById('headphones');
headphones.setAttribute('href', './page2.html?category=Headphones');
const speakers=document.getElementById('speakers');
speakers.setAttribute('href', './page2.html?category=Speakers');
const earphones=document.getElementById('earphones');
earphones.setAttribute('href', './page2.html?category=Earphones');

})