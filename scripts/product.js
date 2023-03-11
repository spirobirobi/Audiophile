fetch('./data.json')
.then((response)=>response.json())
.then((json)=>{
    const urlSearchParams= new URLSearchParams(window.location.search);
    const params= Object.fromEntries(urlSearchParams.entries());
    
 function createItem(object){
  
  const pv=document.createElement("div");
  pv.setAttribute("id","productView");
  const img=document.createElement("img");
  img.setAttribute("src",object.image.desktop);
  pv.appendChild(img);
  const tb=document.createElement("div");
  tb.setAttribute("class","textBox");
  if(object.new==true)
   {
    const new1=document.createElement('p');
    new1.textContent='new product';
    new1.setAttribute("class","np");
    tb.appendChild(new1);
   }
   const ht=document.createElement("h2");
   ht.textContent=object.name;
   tb.appendChild(ht);
   const desc=document.createElement("p");
   desc.textContent=object.description;
   tb.appendChild(desc);
   const pr=document.createElement("p");
   pr.setAttribute("id","price");
   pr.textContent="$"+object.price;
   tb.appendChild(pr);
   const cart2=document.createElement("div");
cart2.setAttribute("id","cart2");
const inputs=document.createElement("div");
inputs.setAttribute("class","inputs");
const input=document.createElement("input");
input.setAttribute("type","number");
input.setAttribute("class","num");
input.setAttribute("value",0);
input.setAttribute("readonly","");
inputs.appendChild(input);
const minus=document.createElement("div");
minus.setAttribute("class","btn-minus");
minus.textContent="-";
inputs.appendChild(minus);
const plus=document.createElement("div");
plus.setAttribute("class","btn-plus");
plus.textContent="+";
inputs.appendChild(plus);
const button=document.createElement("button");
button.textContent="add to cart";
cart2.appendChild(inputs);
cart2.appendChild(button);
tb.appendChild(cart2);
   pv.appendChild(tb);
  return pv;
  


 }
function populate(list){
    const main=document.getElementById("newElements");
    for(let i=0;i<list.length;i++){
        
        //    const item1= createItem(list[i]);
        //     main.appendChild(item1);
        if(list[i].id==params.id){
            console.log("merge");
            const item1= createItem(list[i]);
            main.appendChild(item1);
        }

        
    }
}

populate(json);

})