var pristine = true;

function mouseOverButton(){
  if (localStorage.getItem('complains_counter') == 1) {
    document.getElementById("reload").innerHTML = "&lt;spacebar&gt;";
  }
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
        reload()
    }
}

function ailment() {
  return (Math.random() < (simpAilment.length) / (simpAilment.length + compAilment2.length))
    ? re(simpAilment) : re(compAilment1) + re(compAilment2)
}

function re(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function reload() {

  function rText(d1, d2) {
    return "<div class=\"small\" id=\"num\">תלונה מספר <a id=\"counter\"></a></div>" +
      re(profession) + re(exclamation) + " " + ailment() + " " + re(bodypart) + " "
      + d1 + " " + re(also) + re(furthermore) + re(and) + " " + d2
      + ".<br/> <br/> <div class=\"small\"> (באבחנה מבדלת: " + re(diagnosis) + ")</div>";
  }

  d1 = re(duration1);
  do { d2 = re(duration1) } while (d2 == d1);
  document.getElementById("complaint").innerHTML = rText(d1, d2);

  var n = localStorage.getItem('complains_counter');

  if (n == 1) {
    document.getElementById("reload").innerHTML = "עוד תלונה מוצדקת";
  }

  if (n === null) n = 0;
  n++;
  localStorage.setItem("complains_counter", n);

  document.getElementById("counter").innerHTML = n;
}

window.addEventListener("load", reload);
