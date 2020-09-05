ifugao.innerHTML +=
  '<div id="divmap"><img id="image" src="https://upload.wikimedia.org/wikipedia/commons/6/60/Ph_fil_ifugao.png"><div style="left: 8%; bottom: 12%;" class="mountainpins"><li><a href="#" onclick="showAkikiTawangan()"><p>Mt. Pulag/Akiki-Tawangan Traverse (2,922+)</p></a><a href="#" onclick="showAkiki()"><p>Mt. Pulag/Akiki Trail: Benguet / 2922m (#3)</p></a><a href="#" onclick="showAmbaguio()"><p>Mt. Pulag/Ambaguio Trail: N. Vizcaya / 2922m (#3)</p></a><a href="#" onclick="showAmbangeg()"><p>Mt. Pulag/Ambangeg Trail: Benguet / 2922m (#3)</p></a><a href="#" onclick="showTawangan()"><p>Mt. Pulag/Tawangan Trail: Benguet / 2922m (3)</p></a><a href="#" onclick="showPulagUgo()"><p>Mt. Pulag/Traverse from Mt. Ugo: Benguet & N. Vizcaya</p></a></li> <img src="map_pin.png" ><text>PULAG</text></div><div onclick="showNapulauan()" style="left: 17%; bottom: 54%;" class="mountainpins"> <img src="map_pin.png" ><text>NAPULAUAN</text></div><div onclick="showTabayoc()" style="left: 8%; bottom: 29%;" class="mountainpins"> <img src="map_pin.png" ><text>TABAYOC</text></div></div>';

function showAkikiTawangan() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/pulagAkikiTawangan.js");
}

function showAkiki() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/pulagAkiki.js");
}

function showAmbangeg() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/pulagAmbangeg.js");
}

function showTawangan() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/pulagTawangan.js");
}

function showPulagUgo() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/pulagUgo.js");
}

function showAmbaguio() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/pulagAmbaguio.js");
}

function showNapulauan() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/ifugao/napulauan.js");
}

function showTabayoc() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/ifugao/tabayoc.js");
}
