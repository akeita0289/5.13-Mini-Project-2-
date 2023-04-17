

let button1 = document.querySelector('.button1')
let input1 = document.querySelector('.input1')



//Write your event handler here
button1.onclick = function(){
  let userInput = input1.value
  console.log(userInput)

if (userInput == "green") {
  answer1.innerHTML = "tuff!!"
}
  else if(userInput == "black") {
  answer1.innerHTML = "tuff"
  }
   else if(userInput == "purple") {
  answer1.innerHTML = "not bad"
  }


else {
  answer1.innerHTML = "doing bad smh"
  }

}