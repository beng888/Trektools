$(".map-pin").click(function () {
  blur.classList.toggle("active");
  event.preventDefault();
  $("#body").append('<div class="blocker"></div>');
  $("#body").append('<span class="close-leaflet">&times;</span>');
  $("body").css("overflow", "hidden");
  if (viewport) {
    viewport.content = "initial-scale=0.1";
    viewport.content = "width=1000";
  }
});

$(document).on("click", ".blocker,.close-leaflet", function () {
  $("body").find(".mapmodal").removeClass("visible");
  $(".mapdiv").removeClass("active");
  $(".blocker").remove();
  $(".close-leaflet").remove();
  $("body").css("overflow", "scroll");
  event.preventDefault();
});

$(".ilocos-norte-open-modal").click(function () {
  $(".ilocosnortemodal").addClass("visible");
  $.getScript("./js/markers/ilocosnorte.js");
  setTimeout(function () {
    ilocosnortemap.invalidateSize();
  }, 10);
});
$(".ilocos-sur-open-modal").click(function () {
  $(".ilocossurmodal").addClass("visible");
  $.getScript("./js/markers/ilocossur.js");
  setTimeout(function () {
    ilocossurmap.invalidateSize();
  }, 10);
});
$(".launion-open-modal").click(function () {
  $(".launionmodal").addClass("visible");
  $.getScript("./js/markers/launion.js");
  setTimeout(function () {
    launionmap.invalidateSize();
  }, 10);
});
$(".pangasinan-open-modal").click(function () {
  $(".pangasinanmodal").addClass("visible");
  $.getScript("./js/markers/pangasinan.js");
  setTimeout(function () {
    pangasinanmap.invalidateSize();
  }, 10);
});
$(".apayao-open-modal").click(function () {
  $(".apayaomodal").addClass("visible");
  $.getScript("./js/markers/apayao.js");
  setTimeout(function () {
    apayaomap.invalidateSize();
  }, 10);
});
$(".abra-open-modal").click(function () {
  $(".abramodal").addClass("visible");
  $.getScript("./js/markers/abra.js");
  setTimeout(function () {
    abramap.invalidateSize();
  }, 10);
});
$(".kalinga-open-modal").click(function () {
  $(".kalingamodal").addClass("visible");
  $.getScript("./js/markers/kalinga.js");
  setTimeout(function () {
    kalingamap.invalidateSize();
  }, 10);
});
$(".mtprovince-open-modal").click(function () {
  $(".mtprovincemodal").addClass("visible");
  $.getScript("./js/markers/mtprovince.js");
  setTimeout(function () {
    mtprovincemap.invalidateSize();
  }, 10);
});
$(".ifugao-open-modal").click(function () {
  $(".ifugaomodal").addClass("visible");
  $.getScript("./js/markers/ifugao.js");
  setTimeout(function () {
    ifugaomap.invalidateSize();
  }, 10);
});
$(".benguet-open-modal").click(function () {
  $(".benguetmodal").addClass("visible");
  $.getScript("./js/markers/benguet.js");
  setTimeout(function () {
    benguetmap.invalidateSize();
  }, 10);
});
$(".batanes-open-modal").click(function () {
  $(".batanesmodal").addClass("visible");
  $.getScript("./js/markers/batanes.js");
  setTimeout(function () {
    batanesmap.invalidateSize();
  }, 10);
});
$(".cagayan-open-modal").click(function () {
  $(".cagayanmodal").addClass("visible");
  $.getScript("./js/markers/cagayan.js");
  setTimeout(function () {
    cagayanmap.invalidateSize();
  }, 10);
});
$(".isabela-open-modal").click(function () {
  $(".isabelamodal").addClass("visible");
  $.getScript("./js/markers/isabela.js");
  setTimeout(function () {
    isabelamap.invalidateSize();
  }, 10);
});
$(".quirino-open-modal").click(function () {
  $(".quirinomodal").addClass("visible");
  $.getScript("./js/markers/quirino.js");
  setTimeout(function () {
    quirinomap.invalidateSize();
  }, 10);
});
$(".nuevavizcaya-open-modal").click(function () {
  $(".nuevavizcayamodal").addClass("visible");
  $.getScript("./js/markers/nuevavizcaya.js");
  setTimeout(function () {
    nuevavizcayamap.invalidateSize();
  }, 10);
});
$(".aurora-open-modal").click(function () {
  $(".auroramodal").addClass("visible");
  $.getScript("./js/markers/aurora.js");
  setTimeout(function () {
    auroramap.invalidateSize();
  }, 10);
});
$(".nuevaecija-open-modal").click(function () {
  $(".nuevaecijamodal").addClass("visible");
  $.getScript("./js/markers/nuevaecija.js");
  setTimeout(function () {
    nuevaecijamap.invalidateSize();
  }, 10);
});
$(".tarlac-open-modal").click(function () {
  $(".tarlacmodal").addClass("visible");
  $.getScript("./js/markers/tarlac.js");
  setTimeout(function () {
    tarlacmap.invalidateSize();
  }, 10);
});
$(".zambales-open-modal").click(function () {
  $(".zambalesmodal").addClass("visible");
  $.getScript("./js/markers/zambales.js");
  setTimeout(function () {
    zambalesmap.invalidateSize();
  }, 10);
});
$(".bataan-open-modal").click(function () {
  $(".bataanmodal").addClass("visible");
  $.getScript("./js/markers/bataan.js");
  setTimeout(function () {
    bataanmap.invalidateSize();
  }, 10);
});
$(".pampanga-open-modal").click(function () {
  $(".pampangamodal").addClass("visible");
  $.getScript("./js/markers/pampanga.js");
  setTimeout(function () {
    pampangamap.invalidateSize();
  }, 10);
});
$(".bulacan-open-modal").click(function () {
  $(".bulacanmodal").addClass("visible");
  $.getScript("./js/markers/bulacan.js");
  setTimeout(function () {
    bulacanmap.invalidateSize();
  }, 10);
});
$(".rizal-open-modal").click(function () {
  $(".rizalmodal").addClass("visible");
  $.getScript("./js/markers/rizal.js");
  setTimeout(function () {
    rizalmap.invalidateSize();
  }, 10);
});
$(".cavite-open-modal").click(function () {
  $(".cavitemodal").addClass("visible");
  $.getScript("./js/markers/cavite.js");
  setTimeout(function () {
    cavitemap.invalidateSize();
  }, 10);
});
$(".batangas-open-modal").click(function () {
  $(".batangasmodal").addClass("visible");
  $.getScript("./js/markers/batangas.js");
  setTimeout(function () {
    batangasmap.invalidateSize();
  }, 10);
});
$(".laguna-open-modal").click(function () {
  $(".lagunamodal").addClass("visible");
  $.getScript("./js/markers/laguna.js");
  setTimeout(function () {
    lagunamap.invalidateSize();
  }, 10);
});
$(".quezon-open-modal").click(function () {
  $(".quezonmodal").addClass("visible");
  $.getScript("./js/markers/quezon.js");
  setTimeout(function () {
    quezonmap.invalidateSize();
  }, 10);
});
$(".camarinesnorte-open-modal").click(function () {
  $(".camarinesnortemodal").addClass("visible");
  $.getScript("./js/markers/camarinesnorte.js");
  setTimeout(function () {
    camarinesnortemap.invalidateSize();
  }, 10);
});
$(".camarinessur-open-modal").click(function () {
  $(".camarinessurmodal").addClass("visible");
  $.getScript("./js/markers/camarinessur.js");
  setTimeout(function () {
    camarinessurmap.invalidateSize();
  }, 10);
});
$(".catanduanes-open-modal").click(function () {
  $(".catanduanesmodal").addClass("visible");
  $.getScript("./js/markers/catanduanes.js");
  setTimeout(function () {
    catanduanesmap.invalidateSize();
  }, 10);
});
$(".albay-open-modal").click(function () {
  $(".albaymodal").addClass("visible");
  $.getScript("./js/markers/albay.js");
  setTimeout(function () {
    albaymap.invalidateSize();
  }, 10);
});
$(".sorsogon-open-modal").click(function () {
  $(".sorsogonmodal").addClass("visible");
  $.getScript("./js/markers/sorsogon.js");
  setTimeout(function () {
    sorsogonmap.invalidateSize();
  }, 10);
});
$(".masbate-open-modal").click(function () {
  $(".masbatemodal").addClass("visible");
  $.getScript("./js/markers/masbate.js");
  setTimeout(function () {
    masbatemap.invalidateSize();
  }, 10);
});
$(".romblon-open-modal").click(function () {
  $(".romblonmodal").addClass("visible");
  $.getScript("./js/markers/romblon.js");
  setTimeout(function () {
    romblonmap.invalidateSize();
  }, 10);
});
$(".marinduque-open-modal").click(function () {
  $(".marinduquemodal").addClass("visible");
  $.getScript("./js/markers/marinduque.js");
  setTimeout(function () {
    marinduquemap.invalidateSize();
  }, 10);
});
$(".orientalmindoro-open-modal").click(function () {
  $(".orientalmindoromodal").addClass("visible");
  $.getScript("./js/markers/orientalmindoro.js");
  setTimeout(function () {
    orientalmindoromap.invalidateSize();
  }, 10);
});
$(".occidentalmindoro-open-modal").click(function () {
  $(".occidentalmindoromodal").addClass("visible");
  $.getScript("./js/markers/occidentalmindoro.js");
  setTimeout(function () {
    occidentalmindoromap.invalidateSize();
  }, 10);
});
$(".palawan-open-modal").click(function () {
  $(".palawanmodal").addClass("visible");
  $.getScript("./js/markers/palawan.js");
  setTimeout(function () {
    palawanmap.invalidateSize();
  }, 10);
});
$(".antique-open-modal").click(function () {
  $(".antiquemodal").addClass("visible");
  $.getScript("./js/markers/antique.js");
  setTimeout(function () {
    antiquemap.invalidateSize();
  }, 10);
});
$(".capiz-open-modal").click(function () {
  $(".capizmodal").addClass("visible");
  $.getScript("./js/markers/capiz.js");
  setTimeout(function () {
    capizmap.invalidateSize();
  }, 10);
});
$(".aklan-open-modal").click(function () {
  $(".aklanmodal").addClass("visible");
  $.getScript("./js/markers/aklan.js");
  setTimeout(function () {
    aklanmap.invalidateSize();
  }, 10);
});
$(".iloilo-open-modal").click(function () {
  $(".iloilomodal").addClass("visible");
  $.getScript("./js/markers/iloilo.js");
  setTimeout(function () {
    iloilomap.invalidateSize();
  }, 10);
});
$(".guimaras-open-modal").click(function () {
  $(".guimarasmodal").addClass("visible");
  $.getScript("./js/markers/guimaras.js");
  setTimeout(function () {
    guimarasmap.invalidateSize();
  }, 10);
});
$(".negrosoccidental-open-modal").click(function () {
  $(".negrosoccidentalmodal").addClass("visible");
  $.getScript("./js/markers/negrosoccidental.js");
  setTimeout(function () {
    negrosoccidentalmap.invalidateSize();
  }, 10);
});
$(".negrosoriental-open-modal").click(function () {
  $(".negrosorientalmodal").addClass("visible");
  $.getScript("./js/markers/negrosoriental.js");
  setTimeout(function () {
    negrosorientalmap.invalidateSize();
  }, 10);
});
$(".cebu-open-modal").click(function () {
  $(".cebumodal").addClass("visible");
  $.getScript("./js/markers/cebu.js");
  setTimeout(function () {
    cebumap.invalidateSize();
  }, 10);
});
$(".bohol-open-modal").click(function () {
  $(".boholmodal").addClass("visible");
  $.getScript("./js/markers/bohol.js");
  setTimeout(function () {
    boholmap.invalidateSize();
  }, 10);
});
$(".siquijor-open-modal").click(function () {
  $(".siquijormodal").addClass("visible");
  $.getScript("./js/markers/siquijor.js");
  setTimeout(function () {
    siquijormap.invalidateSize();
  }, 10);
});
$(".northernsamar-open-modal").click(function () {
  $(".northernsamarmodal").addClass("visible");
  $.getScript("./js/markers/northernsamar.js");
  setTimeout(function () {
    northernsamarmap.invalidateSize();
  }, 10);
});
$(".samar-open-modal").click(function () {
  $(".samarmodal").addClass("visible");
  $.getScript("./js/markers/samar.js");
  setTimeout(function () {
    samarmap.invalidateSize();
  }, 10);
});
$(".easternsamar-open-modal").click(function () {
  $(".easternsamarmodal").addClass("visible");
  $.getScript("./js/markers/easternsamar.js");
  setTimeout(function () {
    easternsamarmap.invalidateSize();
  }, 10);
});
$(".biliran-open-modal").click(function () {
  $(".biliranmodal").addClass("visible");
  $.getScript("./js/markers/biliran.js");
  setTimeout(function () {
    biliranmap.invalidateSize();
  }, 10);
});
$(".leyte-open-modal").click(function () {
  $(".leytemodal").addClass("visible");
  $.getScript("./js/markers/leyte.js");
  setTimeout(function () {
    leytemap.invalidateSize();
  }, 10);
});
$(".southernleyte-open-modal").click(function () {
  $(".southernleytemodal").addClass("visible");
  $.getScript("./js/markers/southernleyte.js");
  setTimeout(function () {
    southernleytemap.invalidateSize();
  }, 10);
});
$(".dinagat-open-modal").click(function () {
  $(".dinagatmodal").addClass("visible");
  $.getScript("./js/markers/dinagat.js");
  setTimeout(function () {
    dinagatmap.invalidateSize();
  }, 10);
});
$(".surigaodelnorte-open-modal").click(function () {
  $(".surigaodelnortemodal").addClass("visible");
  $.getScript("./js/markers/surigaodelnorte.js");
  setTimeout(function () {
    surigaodelnortemap.invalidateSize();
  }, 10);
});
$(".surigaodelsur-open-modal").click(function () {
  $(".surigaodelsurmodal").addClass("visible");
  $.getScript("./js/markers/surigaodelsur.js");
  setTimeout(function () {
    surigaodelsurmap.invalidateSize();
  }, 10);
});
$(".agusandelnorte-open-modal").click(function () {
  $(".agusandelnortemodal").addClass("visible");
  $.getScript("./js/markers/agusandelnorte.js");
  setTimeout(function () {
    agusandelnortemap.invalidateSize();
  }, 10);
});
$(".agusandelsur-open-modal").click(function () {
  $(".agusandelsurmodal").addClass("visible");
  $.getScript("./js/markers/agusandelsur.js");
  setTimeout(function () {
    agusandelsurmap.invalidateSize();
  }, 10);
});
$(".davaooriental-open-modal").click(function () {
  $(".davaoorientalmodal").addClass("visible");
  $.getScript("./js/markers/davaooriental.js");
  setTimeout(function () {
    davaoorientalmap.invalidateSize();
  }, 10);
});
$(".davaodeoro-open-modal").click(function () {
  $(".davaodeoromodal").addClass("visible");
  $.getScript("./js/markers/davaodeoro.js");
  setTimeout(function () {
    davaodeoromap.invalidateSize();
  }, 10);
});
$(".davaodelnorte-open-modal").click(function () {
  $(".davaodelnortemodal").addClass("visible");
  $.getScript("./js/markers/davaodelnorte.js");
  setTimeout(function () {
    davaodelnortemap.invalidateSize();
  }, 10);
});
$(".davaocity-open-modal").click(function () {
  $(".davaocitymodal").addClass("visible");
  $.getScript("./js/markers/davaocity.js");
  setTimeout(function () {
    davaocitymap.invalidateSize();
  }, 10);
});
$(".davaodelsur-open-modal").click(function () {
  $(".davaodelsurmodal").addClass("visible");
  $.getScript("./js/markers/davaodelsur.js");
  setTimeout(function () {
    davaodelsurmap.invalidateSize();
  }, 10);
});
$(".davaooccidental-open-modal").click(function () {
  $(".davaooccidentalmodal").addClass("visible");
  $.getScript("./js/markers/davaooccidental.js");
  setTimeout(function () {
    davaooccidentalmap.invalidateSize();
  }, 10);
});
$(".sarangani-open-modal").click(function () {
  $(".saranganimodal").addClass("visible");
  $.getScript("./js/markers/sarangani.js");
  setTimeout(function () {
    saranganimap.invalidateSize();
  }, 10);
});
$(".southcotabato-open-modal").click(function () {
  $(".southcotabatomodal").addClass("visible");
  $.getScript("./js/markers/southcotabato.js");
  setTimeout(function () {
    southcotabatomap.invalidateSize();
  }, 10);
});
$(".sultankudarat-open-modal").click(function () {
  $(".sultankudaratmodal").addClass("visible");
  $.getScript("./js/markers/sultankudarat.js");
  setTimeout(function () {
    sultankudaratmap.invalidateSize();
  }, 10);
});
$(".maguindanao-open-modal").click(function () {
  $(".maguindanaomodal").addClass("visible");
  $.getScript("./js/markers/maguindanao.js");
  setTimeout(function () {
    maguindanaomap.invalidateSize();
  }, 10);
});
$(".cotabato-open-modal").click(function () {
  $(".cotabatomodal").addClass("visible");
  $.getScript("./js/markers/cotabato.js");
  setTimeout(function () {
    cotabatomap.invalidateSize();
  }, 10);
});
$(".bukidnon-open-modal").click(function () {
  $(".bukidnonmodal").addClass("visible");
  $.getScript("./js/markers/bukidnon.js");
  setTimeout(function () {
    bukidnonmap.invalidateSize();
  }, 10);
});
$(".misamisoriental-open-modal").click(function () {
  $(".misamisorientalmodal").addClass("visible");
  $.getScript("./js/markers/misamisoriental.js");
  setTimeout(function () {
    misamisorientalmap.invalidateSize();
  }, 10);
});
$(".camiguin-open-modal").click(function () {
  $(".camiguinmodal").addClass("visible");
  $.getScript("./js/markers/camiguin.js");
  setTimeout(function () {
    camiguinmap.invalidateSize();
  }, 10);
});
$(".lanaodelsur-open-modal").click(function () {
  $(".lanaodelsurmodal").addClass("visible");
  $.getScript("./js/markers/lanaodelsur.js");
  setTimeout(function () {
    lanaodelsurmap.invalidateSize();
  }, 10);
});
$(".lanaodelnorte-open-modal").click(function () {
  $(".lanaodelnortemodal").addClass("visible");
  $.getScript("./js/markers/lanaodelnorte.js");
  setTimeout(function () {
    lanaodelnortemap.invalidateSize();
  }, 10);
});
$(".misamisoccidental-open-modal").click(function () {
  $(".misamisoccidentalmodal").addClass("visible");
  $.getScript("./js/markers/misamisoccidental.js");
  setTimeout(function () {
    misamisoccidentalmap.invalidateSize();
  }, 10);
});
$(".zamboangadelnorte-open-modal").click(function () {
  $(".zamboangadelnortemodal").addClass("visible");
  $.getScript("./js/markers/zamboangadelnorte.js");
  setTimeout(function () {
    zamboangadelnortemap.invalidateSize();
  }, 10);
});
$(".zamboangadelsur-open-modal").click(function () {
  $(".zamboangadelsurmodal").addClass("visible");
  $.getScript("./js/markers/zamboangadelsur.js");
  setTimeout(function () {
    zamboangadelsurmap.invalidateSize();
  }, 10);
});
$(".zamboangasibugay-open-modal").click(function () {
  $(".zamboangasibugaymodal").addClass("visible");
  $.getScript("./js/markers/zamboangasibugay.js");
  setTimeout(function () {
    zamboangasibugaymap.invalidateSize();
  }, 10);
});
$(".zamboangacity-open-modal").click(function () {
  $(".zamboangacitymodal").addClass("visible");
  $.getScript("./js/markers/zamboangacity.js");
  setTimeout(function () {
    zamboangacitymap.invalidateSize();
  }, 10);
});
$(".basilan-open-modal").click(function () {
  $(".basilanmodal").addClass("visible");
  $.getScript("./js/markers/basilan.js");
  setTimeout(function () {
    basilanmap.invalidateSize();
  }, 10);
});
$(".sulu-open-modal").click(function () {
  $(".sulumodal").addClass("visible");
  $.getScript("./js/markers/sulu.js");
  setTimeout(function () {
    sulumap.invalidateSize();
  }, 10);
});
$(".tawitawi-open-modal").click(function () {
  $(".tawitawimodal").addClass("visible");
  $.getScript("./js/markers/tawitawi.js");
  setTimeout(function () {
    tawitawimap.invalidateSize();
  }, 10);
});
var fIcon = L.icon({
  iconUrl: "3000pin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
var eIcon = L.icon({
  iconUrl: "2500pin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
var dIcon = L.icon({
  iconUrl: "2000pin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
var cIcon = L.icon({
  iconUrl: "1500pin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
var bIcon = L.icon({
  iconUrl: "1000pin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
var aIcon = L.icon({
  iconUrl: "500pin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
var abcIcon = L.icon({
  iconUrl: "pin.png",
  iconSize: [45, 40],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
