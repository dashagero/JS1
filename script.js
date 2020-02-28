function Link(){
    document.location.href = "https://youtube.com";
}
function Back(){
    document.location.href = "./index.html";
}

function Style(){
  document.getElementById('btn1').style.backgroundColor = "white";
  document.getElementById('btn2').style.backgroundColor = "white";
  document.getElementById('btn3').style.backgroundColor = "white";
  document.getElementById('boddy').style.backgroundColor = "pink";
}

function Delite(){
    document.getElementById('btn1').style.display = "none";
    document.getElementById('btn2').style.display = "none";
    document.getElementById('btn3').style.display = "none";
    document.getElementById('flexmaket').style.display = "flex";
    document.getElementById('flexmaket').style.marginTop = "200px";
}

var term = {
 Belarus: 6,
 Poland: 12,
 Ukraine: 8,
 Italy: 35,
 China : 19,
 Germany: 32,
 Chili: 55
}
var max= 0;
var sum = 0;
var num = 0;

for (var key in term) {
  sum += term[key];
  ++num;
      if(term[key] > max){
          max = term[key];
      }
  document.body.appendChild(document.createElement("br"));
  document.write(key + " : " + term[key] + "  °C");
}

var  medium = sum/num;
  document.body.appendChild(document.createElement("br"));
  document.body.appendChild(document.createElement("br"));
document.write("Number of countries: " + num);
  document.body.appendChild(document.createElement("br"));
document.write("Average temperature: " + medium + "  °C");
  document.body.appendChild(document.createElement("br"));
document.write("Max temperature: " + max+ "  °C");
  document.body.appendChild(document.createElement("br"));
  