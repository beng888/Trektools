benguet.innerHTML +=
  '<div id="divmap"><img id="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Ph_fil_benguet.png/1200px-Ph_fil_benguet.png" alt="Ph fil benguet.png"><div style="left: 81%; bottom: 55%;" class="mountainpins"><li><a href="#" onclick="showAkikiTawangan()"><p>Mt. Pulag/Akiki-Tawangan Traverse (2,922+)</p></a><a href="#" onclick="showAkiki()"><p>Mt. Pulag/Akiki Trail: Benguet / 2922m (#3)</p></a><a href="#" onclick="showAmbaguio()"><p>Mt. Pulag/Ambaguio Trail: N. Vizcaya / 2922m (#3)</p></a><a href="#" onclick="showAmbangeg()"><p>Mt. Pulag/Ambangeg Trail: Benguet / 2922m (#3)</p></a><a href="#" onclick="showTawangan()"><p>Mt. Pulag/Tawangan Trail: Benguet / 2922m (3)</p></a><a href="#" onclick="showPulagUgo()"><p>Mt. Pulag/Traverse from Mt. Ugo: Benguet & N. Vizcaya</p></a></li> <img src="map_pin.png" ><text>PULAG</text></div><div onclick="showKibungan()" style="left: 40%; bottom: 70%;" class="mountainpins"> <img src="map_pin.png" ><text>KIBUNGAN_CIRCUIT</text></div><div onclick="showBakun()" style="left: 39%; bottom: 82%;" class="mountainpins"> <img src="map_pin.png" ><text>KABUNIAN</text></div><div onclick="showBakun()" style="left: 54%; bottom: 75%;" class="mountainpins"> <img src="map_pin.png" ><text>LOBO</text></div><div onclick="showOsdung()" style="left: 60%; bottom: 72%;" class="mountainpins"> <img src="map_pin.png" ><text>OSDUNG</text></div><div onclick="showPigingan()" style="left: 52%; bottom: 15%;" class="mountainpins"> <img src="map_pin.png" ><text>PIGINGAN</text></div><div onclick="showStoTomas()" style="left: 22%; bottom: 25%;" class="mountainpins"> <img src="map_pin.png" ><text>Sto.TOMAS</text></div><div onclick="showBakun()" style="left: 41%; bottom: 86%;" class="mountainpins"> <img src="map_pin.png" ><text>TENGLAWAN</text></div><div onclick="showSingakalsa()" style="left: 50%; bottom: 58%;" class="mountainpins"> <img src="map_pin.png" ><text>SINGAKALSA</text></div><div onclick="showUlap()" style="left: 36%; bottom: 20%;" class="mountainpins"> <img src="map_pin.png" ><text>ULAP</text></div></div>';

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

function showKibungan() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/kibungan.js");
}

function showBakun() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/bakun.js");
}

function showOsdung() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/osdung.js");
}

function showPigingan() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/pigingan.js");
}

function showStoTomas() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/stotomas.js");
}

function showSingakalsa() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/singakalsa.js");
}

function showUlap() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountaintrails/benguet/ulap.js");
}
