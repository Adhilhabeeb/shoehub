


const loadsec=this.document.querySelector(".section")
const afterlo=document.querySelector(".afterload")
const slides=document.querySelectorAll(".slides")
let  logo=document.querySelector(".imglo")
 
const inucheck=document.querySelector(".inucheck")// inpt toggle

console.log(1)
let co=document.querySelector(".co")

let coshild=co.children
console.log("............",coshild)

window.addEventListener("load",function(){


loadsec.classList.add("loadfinish")
afterlo.style.cssText="display:none;"

})
loadsec.addEventListener("transitionend",function(){
  console.log(logo);
    loadsec.style.cssText="display:none";
    afterlo.style.cssText="display:block;"
   
    
})


///////////////////////////////////////////////////////////////////////////

const textani=document.querySelector(".textani")

window.addEventListener("load",()=>{
textani.classList.add("animate__backInRight")

})

var index=0
function infor(){
 index++

 if (index>slides.length-1) {
   
   index=0
    
 }else if (index<0) {
   index=slides.length-1
    
 }
 slides.forEach((slide)=>{
    slide.style.cssText="display:none"
})
slides[index].style.cssText="display:block"
console.log(index)
  setTimeout(infor,3000)
}
infor();

const navhead=document.querySelector(".headeraft")
console.log(navhead);
//scroll the nav bar come  
window.addEventListener("scroll",()=>{
console.log(window.pageYOffset,navhead.offsetTop,navhead.getBoundingClientRect().height );

// oageofsety is used for gettin the the page y 
if (window.pageYOffset>navhead.getBoundingClientRect().height) {
  // alert("hello")
  navhead.classList.add("fixed")
}else{
  navhead.classList.remove("fixed")
}
if (window.pageYOffset<navhead.getBoundingClientRect().height) {
 console.log(`bggghgkhfhk`)
}




})



/////////////////////////////////adding cureser effect//////////////////////////
  //  getting the curser div from the dom 
  const curser=document.querySelector(".curser");
  // when user moving mouse through it 
  window.addEventListener("mousemove",(e)=>{
      //getting pagey and page x
// console.log(e.pageX,e.clientX,e.pageY,e.clientY)
// add style tranform for 
curser.style.cssText=`transform: translate3d(calc(${e.pageX}px - 50%),calc(${e.pageY}px - 50%),0);`
  })

 window.addEventListener("mouseout",()=>{
curser.style.cssText="display:none;"
 })
/////////////////////////////////////////////the darkmodeworking/////////////////////





// console.log(inucheck)
const  navelements=document.querySelectorAll(".darka")//navelemts home about etc
// console.log(navelements)
//  when user click on the toggle input 
inucheck.addEventListener("click",()=>{
    alert("inpokk")
  inucheck.classList.toggle("dd")
  if ( inucheck.classList.contains("dd")) {
     // body style change
document.body.style.backgroundColor="#252526"
coshild[0].style.color="#ffff"
logo.src="WhatsApp Image 2023-11-13 at 8.23.39 PM-fotor-bg-remover-20231113215229.png"

coshild[1].style.cssText="color:black;background-color:#fff;"
  // we get the nav elements as in array so we foreached 
 navelements.forEach((elem)=>{
  //adding the color to the nav ila oro elements 
elem.style.cssText="color:white;"
 })
// getting icons from dom 
 const icom=document.querySelectorAll("#icondark")
 //we get  icons as in array format so we use foreach
icom.forEach((icons)=>{
// ennitt  aa  icons inta color matti
  icons.style.cssText="color:#fff;"

})
// giving color to the textani as white
textani.style.cssText="color:#fff;"

// getting the button from dom and giving the color
const textanibutt=document.querySelector(".explore")
textanibutt.style.cssText=" box-shadow: #fff 0px 1px 5px;  border: 1px solid #fff;color:#fff"
////
navhead.style.cssText="background-color:black"
  }else{// giving bg color as pazhayath
    document.body.style.backgroundColor =""; 
    logo.src="WhatsApp Image 2023-11-13 at 8.23.39 PM copy-fotor-bg-remover-20231113212538.png"
    coshild[0].style.color=""
coshild[1].style.cssText=""
 navelements.forEach((elem)=>{
 // giving  color as pazhayath
elem.style.cssText="color:black;"

 })

 const icom=document.querySelectorAll("#icondark")

icom.forEach((icons)=>{
// giving  as pazhayath
  icons.style.cssText=""

})
// giving as pazhayath
textani.style.cssText=""


const textanibutt=document.querySelector(".explore")// giving  as pazhayath
textanibutt.style.cssText=" "

///////
navhead.style.cssText=""

  }

  

})

////...........




////////////////////////////////////////////////////////////////

let cobu=document.getElementById("cobu")
cobu.addEventListener("click",()=>{

window.location.href="food.html"

})