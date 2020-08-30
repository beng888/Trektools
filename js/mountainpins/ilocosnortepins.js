ilocosNorte.innerHTML +=
  '<div id="divmap"><img id="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Ph_fil_ilocos_norte.png/1200px-Ph_fil_ilocos_norte.png" alt="Ph fil ilocos norte.png"><a href="#" onclick="showPalemlem()"><li> <img class="divpin" src="map_pin.png" style="left: 83%; bottom: 79%;"><text style="left: 79%; bottom: 79%; font-size: 1vw;">PALEMLEM</text></li></a><a href="#" onclick="showSicapoo()"><li> <img class="divpin" src="map_pin.png" style="left: 79%; bottom: 34%;"><text style="left: 76%; bottom: 34%; font-size: 1vw;">SICAPOO</text></li></a></a><a href="#" onclick="showSimigaysay()"><li> <img class="divpin" src="map_pin.png" style="left: 69%; bottom: 37%;"><text style="left: 63%; bottom: 37%; font-size: 1vw;">SIMIGAYSAY</text></li></a></div>';

function showPalemlem() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountains/palemlem.js");
}

function showSicapoo() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountains/sicapoo.js");
}

function showSimigaysay() {
  $("#modal").append('<div class="blocker2"></div>');
  $.getScript("./js/mountains/simigaysay.js");
}
