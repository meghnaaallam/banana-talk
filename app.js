var btnTranslate=document.querySelector("#btn-translate")
var userInput=document.querySelector("#user-text")
var outputTxt= document.querySelector("#output-txt")

outputTxt.innerText= "hello! she is awesome!" //writing inside the element


btnTranslate.addEventListener("click", clickHandler) //listening to the event





function clickHandler() {
    console.log("hello i am clicked!")
    console.log(userInput.value)
    console.log(outputTxt.value) //reading 
};