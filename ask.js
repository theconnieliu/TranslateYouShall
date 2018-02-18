/*global xmlhttp*/
console.log("hello");

function askYoda(){
JSON.stringify(document.getElementsByName('ask')[0].value);

xmlhttp.open("GET","35.161.105.159/ask");
xmlhttp.send();
}