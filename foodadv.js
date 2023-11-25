
const rowcla=document.querySelector(".rowcla");
const buttons=document.querySelectorAll(".buttono")
console.log(buttons)
console.log(rowcla)
const menu=[
    {
       shoename:"Nikeredish",
       shoeimage:"https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/2f26814c-77d9-48de-9dd6-69ae4f8a4291/image.jpg",
      shoeprice:"49199",
      ratting:"4.7",
    
      categary:"Sports",
      orginalprice:"₹60000",
      offer:"43%"
    },
    {
        shoename:"yellowish",
        shoeimage:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/92aadfa3-0184-4e34-8109-462798e812bb/air-force-1-lv8-older-shoes-ZDMd7M.png",
       shoeprice:"99999",
       ratting:"4.8",
       categary:"Casual",
       orginalprice:"₹135999",
       offer:"60%"
     },
     {
        shoename:"blueedish",
        shoeimage:"https://assets.myntassets.com/h_480,q_100,w_360/v1/assets/images/1547909/2016/11/23/11479901512264-Nike-Men-Sports-Shoes-6531479901511997-1.jpg",
       shoeprice:"65999",
       ratting:"4.4",
       categary:"Running",
       orginalprice:"₹95999",offer:"68%"
     },
     {
        shoename:"greeedish",
        shoeimage:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/6804613a-ab0e-4927-9fa6-2d3d98890541/pegasus-trail-4-trail-running-shoes-LP9MFR.png",
       shoeprice:"98199",
       ratting:"4.5",
       categary:"Sports",
       orginalprice:"₹12999",offer:"78%"
     },
     {
        shoename:"adidasedish",
        shoeimage:"https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/k/p/x/-original-imagfyy2zech5n6d-bb.jpeg?q=90",
       shoeprice:"88199",
       ratting:"4.5",
       categary:"Casual",
       orginalprice:"₹99199",offer:"58%"
     },
     {
        shoename:"woodland",
        shoeimage:"https://img.tatacliq.com/images/i8/437Wx649H/MP000000014629445_437Wx649H_202209250005141.jpeg",
       shoeprice:"7990",
       ratting:"4.5",
       categary:"Running",
       orginalprice:"₹90999",offer:"65%"
     }

]
window.addEventListener("DOMContentLoaded",(item)=>{
displaymenuitem(menu)


})

function displaymenuitem(menuo){
    let displaymenu=menuo.map(function(elem){
        // console.log(elem)
        
        return `<div class="bac1">
        
        <div class="image"> <img  style="width: 100%;height: 100%;" src="${elem.shoeimage}" alt=""></div>
        <div class="priceu">
        <div class="shoename">
          <span> <i> ${elem.shoename}</i></span>
          <button class="buttonrate">${elem.ratting} <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#ffffff}</style><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg></button>
        
            <hr>
        </div>
        <div class="pricedis">
            <span class="spanpr">${elem.shoeprice}</span>
        <span class="offerpror">${elem.orginalprice}</span>
        <span style="color: #0074e4;margin-left: 1%;">${elem.offer}</span>
        
        </div>
        <div class="bank">
        <!-- <div class="icon">
        <span><i class="fa fa-tag" style="font-size:25px;color: #0074e4;"></i></span>
        </div>
        <div class="text">jghgggfgwehkgehgfhkghkfghkegfkhghk</div>
        -->
        
        
        </div>
        </div>
        </div>`
        })
        displaymenu=displaymenu.join(" ")
        // console.log(displaymenu)
        rowcla.innerHTML=displaymenu
        

}

buttons.forEach(function (button){

    // console.log(button)
    button.addEventListener("click",(e)=>{
//console.log(e.target.dataset);
// alert("hello")

const catagaryy=e.target.dataset.id;
//console.log(catagaryy);
let menucateg=menu.filter(function (menuca){

if (menuca.categary ===catagaryy) {
   

    return menuca
}
})
if (catagaryy==='All') {
    displaymenuitem(menu)
    
}else{
    displaymenuitem(menucateg)
}
console.log(menucateg);




        
    })

})


function setprice(){
    //get range class and  prvalue 
let rangepr=document.querySelector(".rangepr")
let prvalue=document.querySelector(".prvalue")
const secrange=document.querySelector("#priceRange")
console.log(se)
//map the menu  for getting the soeprice 
let pru=menu.map((produ)=>{
 return parseInt( produ.shoeprice)
   
})


console.log(pru);
// adding minimum and maximum value to the range
let mino=Math.min(...pru)
let maxo=Math.max(...pru)

// console.log(mino)



// console.log(maxo)
//adding them min and max to range 
rangepr.min=mino
rangepr.max=maxo

secrange.min=mino
secrange.max=maxo



// when the user click to the range input the function 
rangepr.addEventListener("input", (e=1) => {
   
  //ading the displaymenuitem and filter the 
    displaymenuitem(menu.filter((produ) => {
      let nn = parseInt(produ.shoeprice);
      return nn <= e.target.value;
    }));



    secrange.addEventListener("input",(e)=>{
alert("kgh")

    })
  });

  



}
setprice();