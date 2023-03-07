const productview=document.getElementById("productView")
fetch('./data.json')
.then((response)=>response.json())
.then((json)=>{
    const urlSearchParams= new URLSearchParams(window.location.search);
    const params= Object.fromEntries(urlSearchParams.entries());
    
  

})