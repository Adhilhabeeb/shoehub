// let lov=document.querySelector(".heartfav")
//     console.log(lov)
//     let chf=false

//     lov.addEventListener("click",(e)=>{
     
//    console.log(   e.target);

// if (chf) {
//     e.target.style.cssText="color:#cdcdcd;"

// chf=false

// console.log(chf)
// }else{

//     e.target.style.cssText="color:red"
    
//     chf=true
//     console.log(chf)
// }
      
//     })
// /* When the user clicks on the button, 
// toggle between hiding and showing the dropdown content */
// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown if the user clicks outside of it
// // window.onclick = function(event) {
// //   if (!event.target.matches('.dropbtn')) {
// //     var dropdowns = document.getElementsByClassName("dropdown-content");
// //     var i;
// //     for (i = 0; i < dropdowns.length; i++) {
// //       var openDropdown = dropdowns[i];
// //       if (openDropdown.classList.contains('show')) {
// //         openDropdown.classList.remove('show');
// //       }
// //     }
// //   }
// // }
// let auk=document.querySelectorAll(".uks")
// let sevau=document.querySelector(".se-vau")
// let drbu=document.querySelector(".dropbtn")
// let imgnprre1=document.querySelector(".imgnprre1")
// console.log(drbu.textContent)
// auk.forEach((aukel)=>{
// aukel.addEventListener("click",(e)=>{
// console.log(e.target.innerHTML)

// sevau.textContent=""
// sevau.innerHTML=e.target.innerHTML
// document.getElementById("myDropdown").classList.toggle("show");
// })
// })
// let kk2=document.querySelectorAll(".kk2")
// console.log(kk2);
// kk2.forEach((kk2el)=>{
//     console.log(kk2el)
//     kk2el.addEventListener("click",()=>{
//         document.getElementById("myDropdown").classList.toggle("show");
//     })

// })

// let pi1s=document.querySelectorAll(".pi1s")
// console.log(pi1s);
// pi1s.forEach((pilel)=>{
//  pilel.addEventListener("click",(e)=>{
// console.log(e.target.src)
// imgnprre1.children[0].src=e.target.src


//  })
// })
if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(geolocationSuccess, geolocationFailure);
} else {
console.log("Geolocation is not supported by this browser.");
}
// Function that will be called if the query succeeds
 function geolocationSuccess(pos) {
console.log("Your location is " + pos.coords.latitude + "°, " + pos.coords.longitude + "°.");
};
// Function that will be called if the query fails
 function geolocationFailure(err) { console.log("ERROR (" + err.code + "): " + err.message);
};
