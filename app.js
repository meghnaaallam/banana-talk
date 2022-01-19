var btnTranslate=document.querySelector("#btn-translate")
var userInput=document.querySelector("#user-text")
var outputTxt= document.querySelector("#output-txt")

//mock server
//url= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"


var minionURL= "https://api.funtranslations.com/translate/minion.json"

function constructURL(text) {
    return minionURL+ "?"+ "text=" + text 
}

function errorHandler(error) {
    console.log("something is wrong, please try again", error)
}
btnTranslate.addEventListener("click", clickHandler) //listening to the event


function clickHandler() {
    var inputTxt = userInput.value; //reading input

    //processing
    fetch(constructURL(inputTxt))
    .then((response) => response.json()) 
    .then(translate => {
        var output = translate.contents.translated
        outputTxt.innerText=output
    })
    .catch(errorHandler)
};