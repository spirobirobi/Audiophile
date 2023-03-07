fetch('./data.json')
.then((response)=>response.json())
.then((json)=>{

    const urlSearchParams= new URLSearchParams(window.location.search);
    const params= Object.fromEntries(urlSearchParams.entries());
   const header=document.getElementById('header');
   const write=document.createElement('h2');
   write.textContent=params.category;
   header.appendChild(write);
   function createItem (object){

   const box=document.createElement('div');
   box.classList.add('box');
   const image=document.createElement('img');
   image.setAttribute('src',object.categoryImage.desktop);
   box.appendChild(image);
   const textBox=document.createElement('div');
   textBox.classList.add('textbox');
   if(object.new==true)
   {
    const new1=document.createElement('p');
    new1.textContent='new product';
    textBox.appendChild(new1);
   }
   const title=document.createElement('h1');
   title.textContent=object.name;
   textBox.appendChild(title);
   const description1=document.createElement('p');
   description1.classList.add('desc');
   description1.textContent=object.description;
   textBox.appendChild(description1);
   const button=document.createElement('button');
   button.textContent='see product';
   button.setAttribute("id",object.id);
   button.addEventListener("click",()=>{
    location.replace("./product.html?id="+object.id);
   })
   textBox.appendChild(button);
box.appendChild(textBox);
return box;


   }
function populate(lista){
    const container=document.getElementById('container');
    let j=0;
    for (let i = 0; i < lista.length; i++) {
        const item1 = createItem(lista[i]);
      if(lista[i].category==params.category.toLocaleLowerCase()){

        container.appendChild(item1); 
        j++;
        if(j%2!=0){
            item1.setAttribute('id','left');
        }
        else{
            item1.setAttribute('id','right');
        }
      }
  
    }
    
}
populate(json);
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