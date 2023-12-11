let signupbutt=document.querySelector("#signupbutton")
let  signupfo=document.querySelector("#signupfo")

const impem  = document.querySelector('.eminput');
const imppass = document.querySelectorAll('.passinkk');

signupbutt.addEventListener("click",(e)=>{
    signupbutt.innerHTML="submit"
   e.preventDefault()
   valda()

})

function valda(){
alert("l")

 let inputsdo=document.querySelectorAll("input")
 console.log(inputsdo)

 let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;

 inputsdo.forEach((inp)=>{
    if (inp.value.trim()=='') {
       console.log("empty")
       inp.style.border="1px solid red"
       inp.style.color=" red"
    }
    else{
        inp.style.border=""
      
        inp.style.color=""
    }
 })
////////////////////////////////////
 let result = regex.test(impem.value.trim());
         if (result  ) {
           console.log("The  is a valid email address!")
         } else {
            impem.value=""
            impem.style.cssText="border:1px solid red ;"
            impem.placeholder="enter valid email"
       
         }
/////////////
let regexb =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;

imppass.forEach((inp)=>{
    console.log(inp.value.trim())
    let testj=regexb.test(inp.value.trim())
    if (testj ) {
        console.log("valid pass")
        
    } 
    else{
   
   inp.placeholder="enter valid passward"
    
    }
})
//////////////////////////
let hh=imppass[0];
let hhg=imppass[1];
console.log("mmmm",hh,"nn",hhg)
if ((hh.value.trim()==hhg.value.trim()) && (!hh.value.trim()=="")&& (!hhg.value.trim()=="")) {
    console.log("eql passward")
   
    hh.style.cssText=""
hhg.style.cssText=""
   
    
}else{ console.log(" not eql passward")
hh.style.cssText="border:1px solid red ;"
hh.value=""
hhg.value=""
hhg.style.cssText="border:1px solid red ;"
}

}


