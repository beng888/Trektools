ifugao.innerHTML +=
  '<div id="divmap"><img id="image" src="https://upload.wikimedia.org/wikipedia/commons/6/60/Ph_fil_ifugao.png"><li id= "pulag"><div id= "pulagtrails" style="left: -14%; bottom: 19%;"><a href="#" onclick="showAkikiTawangan()"><p>Mt. Pulag/Akiki-Tawangan Traverse (2,922+)</p></a><a href="#" onclick="showAkiki()"><p>Mt. Pulag/Akiki Trail: Benguet / 2922m (#3)</p></a><p>Mt. Pulag/Ambaguio Trail: N. Vizcaya / 2922m (#3)</p><p>Mt. Pulag/Ambangeg Trail: Benguet / 2922m (#3)</p><p>Mt. Pulag/Tawangan Trail: Benguet / 2922m (3)</p><p>Mt. Pulag/Traverse from Mt. Ugo: Benguet & N. Vizcaya</p></div><img class="divpin" src="map_pin.png" style="left: 8%; bottom: 12%;"><text style="left: 7%; bottom: 12%;">PULAG</text></li><a href="#" onclick="showNapulauan()"><li> <img class="divpin" src="map_pin.png" style="left: 17%; bottom: 54%;"><text style="left: 12.5%; bottom: 54%;">NAPULAUAN</text></li></a></div>';

function showAkikiTawangan() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountains/pulagAkikiTawangan.js");
}

function showAkiki() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountains/pulagAkiki.js");
}

function showNapulauan() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountains/napulauan.js");
}
