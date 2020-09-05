ilocosSur.innerHTML +=
  '<div id="divmap"><img id="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ph_fil_ilocos_sur.png/1200px-Ph_fil_ilocos_sur.png" alt="Ph fil ilocos sur.png"><div style="left: 60%; bottom: 40%;" class="mountainpins"><li><a href="#" onclick="showTiradpass()"><p>Tirad Pass/Traverse – Sagada: Ilocos Sur / 1700+m</p></a><a href="#" onclick="showTiradpeak()"><p>Tirad Peak: Ilocos Sur / 1388m</p></a></li> <img src="map_pin.png" ><text>Tirad</text></div></div>';

function showTiradpass() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/ilocossur/tiradpass.js");
}

function showTiradpeak() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/ilocossur/tiradpeak.js");
}
