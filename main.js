var xmlhttp;
var dbParam;
var txt;
var myObj;
var object;
function translateYoda() {
  var base = document.getElementsByName('english')[0].value;
  var out = (base);
  xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "35.161.105.159/translate", true);
  xmlhttp.send(out);
  object = {"text":"input", "limit":1000};
 dbParam = JSON.stringify(object);
xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
        myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = txt;
}
xmlhttp.open("GET", "35.161.105.159/translate", true);
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xmlhttp.send(dbParam);
  document.getElementsByName('translated')[0].value= myObj;
}


