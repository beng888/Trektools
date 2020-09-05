nuevaVizcaya.innerHTML +=
  '<div id="divmap"><img id="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ph_fil_nueva_vizcaya.png/1200px-Ph_fil_nueva_vizcaya.png"><div style="left: 15%; bottom: 56%;" class="mountainpins"><li><a href="#" onclick="showUgo()"><p>Mt. Ugo: Benguet + N. Vizcaya / 2150m</p></a><a href="#" onclick="showPulagUgo()"><p>Mt. Ugo-Mt. Pulag Traverse / 2150-2922m</p></a></li> <img src="map_pin.png" ><text>UGO</text></div><div onclick="showPurgatory()" style="left: 25%; bottom: 68%;" class="mountainpins"> <img src="map_pin.png" ><text>PURGATORY</text></div></div>';

function showPurgatory() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/nuevavizcaya/purgatory.js");
}

function showPulagUgo() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/pulagUgo.js");
}

function showUgo() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/nuevavizcaya/ugo.js");
}
