fetch('./data.json')
.then((response)=>response.json())
.then((json)=>{

const headphones=document.getElementById('headphones');
headphones.setAttribute('href', './page2.html?category=Headphones');
const speakers=document.getElementById('speakers');
speakers.setAttribute('href', './page2.html?category=Speakers');
const earphones=document.getElementById('earphones');
earphones.setAttribute('href', './page2.html?category=Earphones');
const catHeadphones=document.getElementById('CatHeadphones');
catHeadphones.addEventListener('click',()=>{
    location.replace("page2.html?category=Headphones")
})
const catSpeakers=document.getElementById('CatSpeakers');
catSpeakers.addEventListener('click',()=>{
    location.replace("page2.html?category=Speakers")
})
const catEarphones=document.getElementById('CatEarphones');
catEarphones.addEventListener('click',()=>{
    location.replace("page2.html?category=Earphones")
})
})