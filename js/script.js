// const arr1 = [1,2,3,4,5]
// function makeDouble(x){
//     return 2*x
// }
// const arr2 = arr1.map(x=>makeDouble(x))

let display = document.getElementById('display')
let button = Array.from(document.getElementsByClassName("btn"))
// btn
function click(btn){
    btn.addEventListener("click",(dispVal)=>{
        switch(dispVal.target.innerText){
            case 'C':
                display.innerText = ""
                break
            case '←':
                display.innerText = display.innerText.slice(0,-1)
                break
            case '=':
                try{
                    display.innerText = eval(display.innerText)
                    break
                }catch{
                    display.innerText = "Error"
                    break
                }
            default:
                if(display.innerText === ""){
                    if(dispVal.target.innerText !='0'){
                        display.innerText += dispVal.target.innerText
                        break
                    }
                }else{
                display.innerText += dispVal.target.innerText
                break}
        }
    })
}
button.map(btn=>click(btn))

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }

// Set up install prompt
const { Install } = await import('install.js');
new Install(document.querySelector('#install'));