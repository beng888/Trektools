/////nav/////

$(window).load(function () {
  var height = window.innerHeight,
    x = 0,
    y = height / 2,
    curveX = 10,
    curveY = 0,
    targetX = 0,
    xitteration = 0,
    yitteration = 0,
    menuExpanded = false;

  (blob = $("#blob")),
    (blobPath = $("#blob-path")),
    (hamburger = $(".hamburger"));

  $(this).on("mousemove", function (e) {
    x = e.clientX;

    y = e.clientY;
  });

  $(".hamburger, .menu-inner").on("mouseenter", function () {
    $(this).parent().addClass("expanded");
    menuExpanded = true;
  });

  $(".menu-inner").on("mouseleave", function () {
    menuExpanded = false;
    $(this).parent().removeClass("expanded");
  });

  function easeOutExpo(
    currentIteration,
    startValue,
    changeInValue,
    totalIterations
  ) {
    return (
      changeInValue *
        (-Math.pow(2, (-10 * currentIteration) / totalIterations) + 1) +
      startValue
    );
  }

  var hoverZone = 100;
  var expandAmount = 20;

  function svgCurve() {
    if (curveX > x - 1 && curveX < x + 1) {
      xitteration = 0;
    } else {
      if (menuExpanded) {
        targetX = 0;
      } else {
        xitteration = 0;
        if (x > hoverZone) {
          targetX = 0;
        } else {
          targetX = -(((60 + expandAmount) / 100) * (x - hoverZone));
        }
      }
      xitteration++;
    }

    if (curveY > y - 1 && curveY < y + 1) {
      yitteration = 0;
    } else {
      yitteration = 0;
      yitteration++;
    }

    curveX = easeOutExpo(xitteration, curveX, targetX - curveX, 100);
    curveY = easeOutExpo(yitteration, curveY, y - curveY, 100);

    var anchorDistance = 200;
    var curviness = anchorDistance - 40;

    var newCurve2 =
      "M60," +
      height +
      "H0V0h60v" +
      (curveY - anchorDistance) +
      "c0," +
      curviness +
      "," +
      curveX +
      "," +
      curviness +
      "," +
      curveX +
      "," +
      anchorDistance +
      "S60," +
      curveY +
      ",60," +
      (curveY + anchorDistance * 2) +
      "V" +
      height +
      "z";

    blobPath.attr("d", newCurve2);

    blob.width(curveX + 60);

    hamburger.css("transform", "translate(" + curveX + "px, " + curveY + "px)");

    window.requestAnimationFrame(svgCurve);
  }

  window.requestAnimationFrame(svgCurve);
});
////////////////////////////////////////////////////////

const batangas = document.querySelector(".batangas");
function showBatangas() {
  batangas.classList.add("open");
  batangas.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ph_fil_batangas.png/1024px-Ph_fil_batangas.png" id="img">';
}
const quezon = document.querySelector(".quezon");
function showQuezon() {
  quezon.classList.add("open");
  quezon.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ph_fil_quezon.png/1024px-Ph_fil_quezon.png" id="img">';
}
const laguna = document.querySelector(".laguna");
function showLaguna() {
  laguna.classList.add("open");
  laguna.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ph_fil_laguna.png/1024px-Ph_fil_laguna.png" id="img">';
}
const cavite = document.querySelector(".cavite");
function showCavite() {
  cavite.classList.add("open");
  cavite.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Ph_fil_cavite.png/1024px-Ph_fil_cavite.png" id="img">';
}
const rizal = document.querySelector(".rizal");
function showRizal() {
  rizal.classList.add("open");
  rizal.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Ph_fil_rizal.png/1024px-Ph_fil_rizal.png" id="img">';
}
const manila = document.querySelector(".manila");
function showManila() {
  manila.classList.add("open");
  manila.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Metro_Manila_in_the_Philippines.png/1024px-Metro_Manila_in_the_Philippines.png" id="img">';
}
const bulacan = document.querySelector(".bulacan");
function showBulacan() {
  bulacan.classList.add("open");
  bulacan.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Ph_fil_bulacan.png" id="img">';
}
const aurora = document.querySelector(".aurora");
function showAurora() {
  aurora.classList.add("open");
  aurora.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Ph_fil_aurora.png/1024px-Ph_fil_aurora.png" id="img">';
}
const nuevaEcija = document.querySelector(".nuevaEcija");
function showNuevaEcija() {
  nuevaEcija.classList.add("open");
  nuevaEcija.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Ph_fil_nueva_ecija.png/1024px-Ph_fil_nueva_ecija.png" id="img">';
}
const pampanga = document.querySelector(".pampanga");
function showPampanga() {
  pampanga.classList.add("open");
  pampanga.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ph_fil_pampanga.png/1024px-Ph_fil_pampanga.png" id="img">';
}
const bataan = document.querySelector(".bataan");
function showBataan() {
  bataan.classList.add("open");
  bataan.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Ph_fil_bataan.png/1024px-Ph_fil_bataan.png" id="img">';
}
const tarlac = document.querySelector(".tarlac");
function showTarlac() {
  tarlac.classList.add("open");
  tarlac.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Ph_fil_tarlac.png/1024px-Ph_fil_tarlac.png" id="img">';
}
const zambales = document.querySelector(".zambales");
function showZambales() {
  zambales.classList.add("open");
  zambales.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Ph_fil_zambales.png/1024px-Ph_fil_zambales.png" id="img">';
}
const pangasinan = document.querySelector(".pangasinan");
function showPangasinan() {
  pangasinan.classList.add("open");
  pangasinan.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Ph_fil_pangasinan.png/1024px-Ph_fil_pangasinan.png" id="img">';
}
const laUnion = document.querySelector(".laUnion");
function showLaUnion() {
  laUnion.classList.add("open");
  laUnion.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Ph_fil_la_union.png/1024px-Ph_fil_la_union.png" id="img">';
}
const ilocosSur = document.querySelector(".ilocosSur");
function showIlocosSur() {
  ilocosSur.classList.add("open");
  $.getScript("./js/mountainpins/ilocossurpins.js");
}
const ilocosNorte = document.querySelector(".ilocosNorte");
function showIlocosNorte() {
  ilocosNorte.classList.add("open");
  $.getScript("./js/mountainpins/ilocosnortepins.js");
}
const ifugao = document.querySelector(".ifugao");
function showIfugao() {
  ifugao.classList.add("open");
  $.getScript("./js/mountainpins/ifugaopins.js");
}
const benguet = document.querySelector(".benguet");
function showBenguet() {
  benguet.classList.add("open");
  $.getScript("./js/mountainpins/benguetpins.js");
}
const mtProvince = document.querySelector(".mtProvince");
function showMtProvince() {
  mtProvince.classList.add("open");
  mtProvince.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Ph_fil_mountain_province.png" id="img">';
}
const kalinga = document.querySelector(".kalinga");
function showKalinga() {
  kalinga.classList.add("open");
  kalinga.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/3/30/Ph_fil_kalinga.png" id="img">';
}
const abra = document.querySelector(".abra");
function showAbra() {
  abra.classList.add("open");
  abra.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Ph_fil_abra.png/1024px-Ph_fil_abra.png" id="img">';
}
const apayao = document.querySelector(".apayao");
function showApayao() {
  apayao.classList.add("open");
  apayao.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Ph_fil_apayao.png" id="img">';
}
const nuevaVizcaya = document.querySelector(".nuevaVizcaya");
function showNuevaVizcaya() {
  nuevaVizcaya.classList.add("open");
  $.getScript("./js/mountainpins/nuevavizcayapins.js");
}
const quirino = document.querySelector(".quirino");
function showQuirino() {
  quirino.classList.add("open");
  quirino.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Ph_fil_quirino.png" id="img">';
}
const isabela = document.querySelector(".isabela");
function showIsabela() {
  isabela.classList.add("open");
  isabela.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Political_map_of_Isabela%2C_Philippines.png/1024px-Political_map_of_Isabela%2C_Philippines.png" id="img">';
}
const cagayan = document.querySelector(".cagayan");
function showCagayan() {
  cagayan.classList.add("open");
  cagayan.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ph_fil_cagayan.png/1024px-Ph_fil_cagayan.png" id="img">';
}
const marinduque = document.querySelector(".marinduque");
function showMarinduque() {
  marinduque.classList.add("open");
  marinduque.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Ph_fil_marinduque.png/1024px-Ph_fil_marinduque.png" id="img">';
}
const orientalMindoro = document.querySelector(".orientalMindoro");
function showOrientalMindoro() {
  orientalMindoro.classList.add("open");
  orientalMindoro.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Ph_fil_oriental_mindoro.png/1024px-Ph_fil_oriental_mindoro.png" id="img">';
}
const occidentalMindoro = document.querySelector(".occidentalMindoro");
function showOccidentalMindoro() {
  occidentalMindoro.classList.add("open");
  occidentalMindoro.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ph_fil_occidental_mindoro.png/1024px-Ph_fil_occidental_mindoro.png" id="img">';
}
const palawan = document.querySelector(".palawan");
function showPalawan() {
  palawan.classList.add("open");
  palawan.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Ph_fil_palawan.png/1024px-Ph_fil_palawan.png" id="img">';
}
const romblon = document.querySelector(".romblon");
function showRomblon() {
  romblon.classList.add("open");
  romblon.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Ph_fil_romblon.png/1024px-Ph_fil_romblon.png" id="img">';
}
const camarinesNorte = document.querySelector(".camarinesNorte");
function showCamarinesNorte() {
  camarinesNorte.classList.add("open");
  camarinesNorte.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Ph_fil_camarines_norte.png/1024px-Ph_fil_camarines_norte.pn" id="img">';
}
const camarinesSur = document.querySelector(".camarinesSur");
function showCamarinesSur() {
  camarinesSur.classList.add("open");
  camarinesSur.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Ph_fil_camarines_sur.png/1024px-Ph_fil_camarines_sur.png" id="img">';
}
const catanduanes = document.querySelector(".catanduanes");
function showCatanduanes() {
  catanduanes.classList.add("open");
  catanduanes.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ph_fil_catanduanes.png/1024px-Ph_fil_catanduanes.png" id="img">';
}
const albay = document.querySelector(".albay");
function showAlbay() {
  albay.classList.add("open");
  albay.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Ph_fil_albay.png/1024px-Ph_fil_albay.png" id="img">';
}
const sorsogon = document.querySelector(".sorsogon");
function showSorsogon() {
  sorsogon.classList.add("open");
  sorsogon.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ph_fil_sorsogon.png/1024px-Ph_fil_sorsogon.png" id="img">';
}
const masbate = document.querySelector(".masbate");
function showMasbate() {
  masbate.classList.add("open");
  masbate.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ph_fil_masbate.png/1024px-Ph_fil_masbate.png" id="img">';
}
const northernSamar = document.querySelector(".northernSamar");
function showNorthernSamar() {
  northernSamar.classList.add("open");
  northernSamar.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ph_fil_northern_samar.png/1024px-Ph_fil_northern_samar.png" id="img">';
}
const easternSamar = document.querySelector(".easternSamar");
function showEasternSamar() {
  easternSamar.classList.add("open");
  easternSamar.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ph_fil_eastern_samar.png/1024px-Ph_fil_eastern_samar.png" id="img">';
}
const samar = document.querySelector(".samar");
function showSamar() {
  samar.classList.add("open");
  samar.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ph_fil_samar.png/1024px-Ph_fil_samar.png" id="img">';
}
const leyte = document.querySelector(".leyte");
function showLeyte() {
  leyte.classList.add("open");
  leyte.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Ph_fil_leyte.png/1024px-Ph_fil_leyte.png" id="img">';
}
const biliran = document.querySelector(".biliran");
function showBiliran() {
  biliran.classList.add("open");
  biliran.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Ph_fil_biliran.png" id="img">';
}
const southernLeyte = document.querySelector(".southernLeyte");
function showSouthernLeyte() {
  southernLeyte.classList.add("open");
  southernLeyte.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Ph_fil_southern_leyte.png" id="img">';
}
const cebu = document.querySelector(".cebu");
function showCebu() {
  cebu.classList.add("open");
  cebu.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Ph_fil_cebu.png/1024px-Ph_fil_cebu.png" id="img">';
}
const bohol = document.querySelector(".bohol");
function showBohol() {
  bohol.classList.add("open");
  bohol.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ph_fil_bohol.png/1024px-Ph_fil_bohol.png" id="img">';
}
const siquijor = document.querySelector(".siquijor");
function showSiquijor() {
  siquijor.classList.add("open");
  siquijor.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Ph_fil_siquijor.png" id="img">';
}
const negrosOriental = document.querySelector(".negrosOriental");
function showNegrosOriental() {
  negrosOriental.classList.add("open");
  negrosOriental.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Ph_fil_negros_oriental.png" id="img">';
}
const negrosOccidental = document.querySelector(".negrosOccidental");
function showNegrosOccidental() {
  negrosOccidental.classList.add("open");
  negrosOccidental.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Ph_fil_negros_occidental.png/1024px-Ph_fil_negros_occidental.png" id="img">';
}
const guimaras = document.querySelector(".guimaras");
function showGuimaras() {
  guimaras.classList.add("open");
  guimaras.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ph_fil_guimaras.png/1024px-Ph_fil_guimaras.png" id="img">';
}
const iloilo = document.querySelector(".iloilo");
function showIloilo() {
  iloilo.classList.add("open");
  iloilo.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ph_fil_iloilo.png/1024px-Ph_fil_iloilo.png" id="img">';
}
const capiz = document.querySelector(".capiz");
function showCapiz() {
  capiz.classList.add("open");
  capiz.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Ph_fil_capiz.png/1024px-Ph_fil_capiz.png" id="img">';
}
const aklan = document.querySelector(".aklan");
function showAklan() {
  aklan.classList.add("open");
  aklan.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ph_fil_aklan.png/1024px-Ph_fil_aklan.png" id="img">';
}
const antique = document.querySelector(".antique");
function showAntique() {
  antique.classList.add("open");
  antique.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ph_fil_antique.png/1024px-Ph_fil_antique.png" id="img">';
}
const surigaoDelNorte = document.querySelector(".surigaoDelNorte");
function showSurigaoDelNorte() {
  surigaoDelNorte.classList.add("open");
  surigaoDelNorte.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Ph_fil_surigao_del_norte.png/1024px-Ph_fil_surigao_del_norte.png" id="img">';
}
const surigaoDelSur = document.querySelector(".surigaoDelSur");
function showSurigaoDelSur() {
  surigaoDelSur.classList.add("open");
  surigaoDelSur.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Ph_fil_surigao_del_sur.png" id="img">';
}
const agusanDelNorte = document.querySelector(".agusanDelNorte");
function showAgusanDelNorte() {
  agusanDelNorte.classList.add("open");
  agusanDelNorte.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Ph_fil_agusan_del_norte.png/1200px-Ph_fil_agusan_del_norte.png" id="img">';
}
const agusanDelSur = document.querySelector(".agusanDelSur");
function showAgusanDelSur() {
  agusanDelSur.classList.add("open");
  agusanDelSur.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Ph_fil_agusan_del_sur.png/1200px-Ph_fil_agusan_del_sur.png" id="img">';
}
const davaoOriental = document.querySelector(".davaoOriental");
function showDavaoOriental() {
  davaoOriental.classList.add("open");
  davaoOriental.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Ph_fil_davao_oriental.png/1200px-Ph_fil_davao_oriental.png" id="img">';
}
const davaoDeOro = document.querySelector(".davaoDeOro");
function showDavaoDeOro() {
  davaoDeOro.classList.add("open");
  davaoDeOro.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Ph_fil_Davao_de_Oro.png/1200px-Ph_fil_Davao_de_Oro.png" id="img">';
}
const davaoDelNorte = document.querySelector(".davaoDelNorte");
function showDavaoDelNorte() {
  davaoDelNorte.classList.add("open");
  davaoDelNorte.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Ph_fil_davao_del_norte.png/1200px-Ph_fil_davao_del_norte.png" id="img">';
}
const davaoCity = document.querySelector(".davaoCity");
function showDavaoCity() {
  davaoCity.classList.add("open");
  davaoCity.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Ph_fil_Davao_City_districts.png/1200px-Ph_fil_Davao_City_districts.png" id="img">';
}
const davaoDelSur = document.querySelector(".davaoDelSur");
function showDavaoDelSur() {
  davaoDelSur.classList.add("open");
  davaoDelSur.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Ph_fil_davao_del_sur.png" id="img">';
}
const camiguin = document.querySelector(".camiguin");
function showCamiguin() {
  camiguin.classList.add("open");
  camiguin.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Ph_fil_camiguin.png" id="img">';
}
const misamisOriental = document.querySelector(".misamisOriental");
function showMisamisOriental() {
  misamisOriental.classList.add("open");
  misamisOriental.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Ph_fil_misamis_oriental.png/1024px-Ph_fil_misamis_oriental.png" id="img">';
}
const bukidnon = document.querySelector(".bukidnon");
function showBukidnon() {
  bukidnon.classList.add("open");
  bukidnon.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/1/17/Ph_fil_bukidnon.png" id="img">';
}
const misamisOccidental = document.querySelector(".misamisOccidental");
function showMisamisOccidental() {
  misamisOccidental.classList.add("open");
  misamisOccidental.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Ph_fil_misamis_occidental.png/1200px-Ph_fil_misamis_occidental.png" id="img">';
}
const lanaoDelNorte = document.querySelector(".lanaoDelNorte");
function showLanaoDelNorte() {
  lanaoDelNorte.classList.add("open");
  lanaoDelNorte.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Ph_fil_lanao_del_norte.png/1200px-Ph_fil_lanao_del_norte.png" id="img">';
}
const lanaoDelSur = document.querySelector(".lanaoDelSur");
function showLanaoDelSur() {
  lanaoDelSur.classList.add("open");
  lanaoDelSur.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/4/46/Ph_fil_lanao_del_sur.png" id="img">';
}
const maguindanao = document.querySelector(".maguindanao");
function showMaguindanao() {
  maguindanao.classList.add("open");
  maguindanao.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Ph_fil_Maguindanao-tl.png/1200px-Ph_fil_Maguindanao-tl.png" id="img">';
}
const cotabato = document.querySelector(".cotabato");
function showCotabato() {
  cotabato.classList.add("open");
  cotabato.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Ph_fil_north_cotabato.png/1200px-Ph_fil_north_cotabato.png" id="img">';
}
const sultanKudarat = document.querySelector(".sultanKudarat");
function showSultanKudarat() {
  sultanKudarat.classList.add("open");
  sultanKudarat.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ph_fil_sultan_kudarat.png/1200px-Ph_fil_sultan_kudarat.png" id="img">';
}
const southCotabato = document.querySelector(".southCotabato");
function showSouthCotabato() {
  southCotabato.classList.add("open");
  southCotabato.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Ph_fil_south_cotabato.png/1200px-Ph_fil_south_cotabato.png" id="img">';
}
const sarangani = document.querySelector(".sarangani");
function showSarangani() {
  sarangani.classList.add("open");
  sarangani.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ph_fil_sarangani.png/1200px-Ph_fil_sarangani.png" id="img">';
}
const zamboangaDelNorte = document.querySelector(".zamboangaDelNorte");
function showZamboangaDelNorte() {
  zamboangaDelNorte.classList.add("open");
  zamboangaDelNorte.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Ph_fil_zamboanga_del_norte.png/1200px-Ph_fil_zamboanga_del_norte.png" id="img">';
}
const zamboangaDelSur = document.querySelector(".zamboangaDelSur");
function showZamboangaDelSur() {
  zamboangaDelSur.classList.add("open");
  zamboangaDelSur.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Ph_fil_zamboanga_del_sur.png/1200px-Ph_fil_zamboanga_del_sur.png" id="img">';
}
const zamboangaCity = document.querySelector(".zamboangaCity");
function showZamboangaCity() {
  zamboangaCity.classList.add("open");
  zamboangaCity.innerHTML += '<img src="" id="img">';
}
const zamboangaSibugay = document.querySelector(".zamboangaSibugay");
function showZamboangaSibugay() {
  zamboangaSibugay.classList.add("open");
  zamboangaSibugay.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ph_fil_zamboanga_sibugay.png/1200px-Ph_fil_zamboanga_sibugay.png" id="img">';
}
const basilan = document.querySelector(".basilan");
function showBasilan() {
  basilan.classList.add("open");
  basilan.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ph_fil_basilan.png/1200px-Ph_fil_basilan.png" id="img">';
}
const sulu = document.querySelector(".sulu");
function showSulu() {
  sulu.classList.add("open");
  sulu.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ph_fil_sulu.png/1200px-Ph_fil_sulu.png" id="img">';
}
const tawitawi = document.querySelector(".tawitawi");
function showTawitawi() {
  tawitawi.classList.add("open");
  tawitawi.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Ph_fil_tawi-tawi.png/1200px-Ph_fil_tawi-tawi.png" id="img">';
}
const batanes = document.querySelector(".batanes");
function showBatanes() {
  batanes.classList.add("open");
  batanes.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/c/c5/Ph_fil_batanes.png" id="img">';
}
const dinagat = document.querySelector(".dinagat");
function showDinagat() {
  dinagat.classList.add("open");
  dinagat.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Ph_fil_dinagat_islands.png" alt="Ph fil dinagat islands.png" id="img">';
}
const davaoOccidental = document.querySelector(".davaoOccidental");
function showDavaoOccidental() {
  davaoOccidental.classList.add("open");
  davaoOccidental.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Ph_fil_davao_occidental.png" alt="Ph fil davao occidental.png" id="img">';
}

const popup = document.querySelectorAll(".popup");
var blur = document.getElementById("blur");
var body = document.getElementById("body");
var viewport = document.querySelector('meta[name="viewport"]');

$(".trail-pin").click(function () {
  blur.classList.toggle("activefirst");
  $("body").css("overflow", "hidden");
  $(".popup").append(
    '<div style="z-index:-1;" class="blocker" onclick="hidePopup()"></div>'
  );
  event.preventDefault();
  if (viewport) {
    viewport.content = "initial-scale=0.1";
    viewport.content = "width=1000";
  }
});

function hidePopup() {
  for (var i = 0; i < popup.length; i++) {
    popup[i].classList.remove("open");
  }
  blur.classList.toggle("activefirst");
}

$(document).on("click", ".blocker", function () {
  $("#img").remove();
  $("#divmap").remove();
  $(".blocker").remove();
  $("body").css("overflow", "scroll");
});

$(document).on("click", ".blocker2", function () {
  $("#modal-body").remove();
  $(".blocker2").remove();
});

$(".trail-pin").append(
  `<img class = "trail" src="trail.png" title= "view trails">`
);
$(".map-pin").append(`<img class ="pins" src="pin.png">`);

///lazy loading scripts///

document.addEventListener("DOMContentLoaded", function (event) {
  let head = document.querySelector("head");
  let loadJS = function (src) {
    let jsLink = document.createElement("script");
    jsLink.src = src;
    head.appendChild(jsLink);
  };
  // $("head").append(`<link rel="stylesheet" href="./css/mountainpinstyle.css">`);
  loadJS("./js/map.js");
});

///////hoverPins/////

var x = window.matchMedia("(min-width: 992px)");

// if (x.matches) {

// $(".fil1,.trail-pin,.map-pin").hover(
//   function () {

//   },
//   function () {

//   }
// );

////////////////////////
$(".batanespath,#batanespin").hover(
  function () {
    $("#batanespin,.batanesname").css("visibility", "visible");
    $("#batanespin,.batanesname").css("opacity", "1");
    $(".batanesname").css("transform", "translateY(0px)");
    $("#batanespin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#batanespin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".batanespath").css("mix-blend-mode", "color");
  },
  function () {
    $("#batanespin,.batanesname").css("visibility", "hidden");
    $("#batanespin,.batanesname").css("opacity", "0");
    $(".batanesname").css("transform", "translateY(-20px)");
    $("#batanespin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#batanespin .map-pin").css("transform", "translateY(-5vw)");
    $(".batanespath").css("mix-blend-mode", "normal");
  }
);

$(".ilocosnortepath,#ilocosnortepin").hover(
  function () {
    $("#ilocosnortepin,.ilocosnortename").css("visibility", "visible");
    $("#ilocosnortepin,.ilocosnortename").css("opacity", "1");
    $(".ilocosnortename").css("transform", "translateY(0px)");
    $("#ilocosnortepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#ilocosnortepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".ilocosnortepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#ilocosnortepin,.ilocosnortename").css("visibility", "hidden");
    $("#ilocosnortepin,.ilocosnortename").css("opacity", "0");
    $(".ilocosnortename").css("transform", "translateY(-20px)");
    $("#ilocosnortepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#ilocosnortepin .map-pin").css("transform", "translateY(-5vw)");
    $(".ilocosnortepath").css("mix-blend-mode", "normal");
  }
);

$(".apayaopath,#apayaopin").hover(
  function () {
    $("#apayaopin,.apayaoname").css("visibility", "visible");
    $("#apayaopin,.apayaoname").css("opacity", "1");
    $(".apayaoname").css("transform", "translateY(0px)");
    $("#apayaopin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#apayaopin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".apayaopath").css("mix-blend-mode", "color");
  },
  function () {
    $("#apayaopin,.apayaoname").css("visibility", "hidden");
    $("#apayaopin,.apayaoname").css("opacity", "0");
    $(".apayaoname").css("transform", "translateY(-20px)");
    $("#apayaopin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#apayaopin .map-pin").css("transform", "translateY(-5vw)");
    $(".apayaopath").css("mix-blend-mode", "normal");
  }
);

$(".ilocossurpath,#ilocossurpin").hover(
  function () {
    $("#ilocossurpin,.ilocossurname").css("visibility", "visible");
    $("#ilocossurpin,.ilocossurname").css("opacity", "1");
    $(".ilocossurname").css("transform", "translateY(0px)");
    $("#ilocossurpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#ilocossurpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".ilocossurpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#ilocossurpin,.ilocossurname").css("visibility", "hidden");
    $("#ilocossurpin,.ilocossurname").css("opacity", "0");
    $(".ilocossurname").css("transform", "translateY(-20px)");
    $("#ilocossurpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#ilocossurpin .map-pin").css("transform", "translateY(-5vw)");
    $(".ilocossurpath").css("mix-blend-mode", "normal");
  }
);

$(".launionpath,#launionpin").hover(
  function () {
    $("#launionpin,.launionname").css("visibility", "visible");
    $("#launionpin,.launionname").css("opacity", "1");
    $(".launionname").css("transform", "translateY(0px)");
    $("#launionpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#launionpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".launionpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#launionpin,.launionname").css("visibility", "hidden");
    $("#launionpin,.launionname").css("opacity", "0");
    $(".launionname").css("transform", "translateY(-20px)");
    $("#launionpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#launionpin .map-pin").css("transform", "translateY(-5vw)");
    $(".launionpath").css("mix-blend-mode", "normal");
  }
);
$(".pangasinanpath,#pangasinanpin").hover(
  function () {
    $("#pangasinanpin,.pangasinanname").css("visibility", "visible");
    $("#pangasinanpin,.pangasinanname").css("opacity", "1");
    $(".pangasinanname").css("transform", "translateY(0px)");
    $("#pangasinanpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#pangasinanpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".pangasinanpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#pangasinanpin,.pangasinanname").css("visibility", "hidden");
    $("#pangasinanpin,.pangasinanname").css("opacity", "0");
    $(".pangasinanname").css("transform", "translateY(-20px)");
    $("#pangasinanpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#pangasinanpin .map-pin").css("transform", "translateY(-5vw)");
    $(".pangasinanpath").css("mix-blend-mode", "normal");
  }
);

$(".abrapath,#abrapin").hover(
  function () {
    $("#abrapin,.abraname").css("visibility", "visible");
    $("#abrapin,.abraname").css("opacity", "1");
    $(".abraname").css("transform", "translateY(0px)");
    $("#abrapin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#abrapin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".abrapath").css("mix-blend-mode", "color");
  },
  function () {
    $("#abrapin,.abraname").css("visibility", "hidden");
    $("#abrapin,.abraname").css("opacity", "0");
    $(".abraname").css("transform", "translateY(-20px)");
    $("#abrapin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#abrapin .map-pin").css("transform", "translateY(-5vw)");
    $(".abrapath").css("mix-blend-mode", "normal");
  }
);

$(".kalingapath,#kalingapin").hover(
  function () {
    $("#kalingapin,.kalinganame").css("visibility", "visible");
    $("#kalingapin,.kalinganame").css("opacity", "1");
    $(".kalinganame").css("transform", "translateY(0px)");
    $("#kalingapin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#kalingapin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".kalingapath").css("mix-blend-mode", "color");
  },
  function () {
    $("#kalingapin,.kalinganame").css("visibility", "hidden");
    $("#kalingapin,.kalinganame").css("opacity", "0");
    $(".kalinganame").css("transform", "translateY(-20px)");
    $("#kalingapin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#kalingapin .map-pin").css("transform", "translateY(-5vw)");
    $(".kalingapath").css("mix-blend-mode", "normal");
  }
);

$(".mtprovincepath,#mtprovincepin").hover(
  function () {
    $("#mtprovincepin,.mtprovincename").css("visibility", "visible");
    $("#mtprovincepin,.mtprovincename").css("opacity", "1");
    $(".mtprovincename").css("transform", "translateY(0px)");
    $("#mtprovincepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#mtprovincepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".mtprovincepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#mtprovincepin,.mtprovincename").css("visibility", "hidden");
    $("#mtprovincepin,.mtprovincename").css("opacity", "0");
    $(".mtprovincename").css("transform", "translateY(-20px)");
    $("#mtprovincepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#mtprovincepin .map-pin").css("transform", "translateY(-5vw)");
    $(".mtprovincepath").css("mix-blend-mode", "normal");
  }
);

$(".ifugaopath,#ifugaopin").hover(
  function () {
    $("#ifugaopin,.ifugaoname").css("visibility", "visible");
    $("#ifugaopin,.ifugaoname").css("opacity", "1");
    $(".ifugaoname").css("transform", "translateY(0px)");
    $("#ifugaopin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#ifugaopin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".ifugaopath").css("mix-blend-mode", "color");
  },
  function () {
    $("#ifugaopin,.ifugaoname").css("visibility", "hidden");
    $("#ifugaopin,.ifugaoname").css("opacity", "0");
    $(".ifugaoname").css("transform", "translateY(-20px)");
    $("#ifugaopin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#ifugaopin .map-pin").css("transform", "translateY(-5vw)");
    $(".ifugaopath").css("mix-blend-mode", "normal");
  }
);

$(".benguetpath,#benguetpin").hover(
  function () {
    $("#benguetpin,.benguetname").css("visibility", "visible");
    $("#benguetpin,.benguetname").css("opacity", "1");
    $(".benguetname").css("transform", "translateY(0px)");
    $("#benguetpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#benguetpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".benguetpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#benguetpin,.benguetname").css("visibility", "hidden");
    $("#benguetpin,.benguetname").css("opacity", "0");
    $(".benguetname").css("transform", "translateY(-20px)");
    $("#benguetpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#benguetpin .map-pin").css("transform", "translateY(-5vw)");
    $(".benguetpath").css("mix-blend-mode", "normal");
  }
);

$(".cagayanpath,#cagayanpin").hover(
  function () {
    $("#cagayanpin,.cagayanname").css("visibility", "visible");
    $("#cagayanpin,.cagayanname").css("opacity", "1");
    $(".cagayanname").css("transform", "translateY(0px)");
    $("#cagayanpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#cagayanpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".cagayanpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#cagayanpin,.cagayanname").css("visibility", "hidden");
    $("#cagayanpin,.cagayanname").css("opacity", "0");
    $(".cagayanname").css("transform", "translateY(-20px)");
    $("#cagayanpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#cagayanpin .map-pin").css("transform", "translateY(-5vw)");
    $(".cagayanpath").css("mix-blend-mode", "normal");
  }
);

$(".isabelapath,#isabelapin").hover(
  function () {
    $("#isabelapin,.isabelaname").css("visibility", "visible");
    $("#isabelapin,.isabelaname").css("opacity", "1");
    $(".isabelaname").css("transform", "translateY(0px)");
    $("#isabelapin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#isabelapin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".isabelapath").css("mix-blend-mode", "color");
  },
  function () {
    $("#isabelapin,.isabelaname").css("visibility", "hidden");
    $("#isabelapin,.isabelaname").css("opacity", "0");
    $(".isabelaname").css("transform", "translateY(-20px)");
    $("#isabelapin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#isabelapin .map-pin").css("transform", "translateY(-5vw)");
    $(".isabelapath").css("mix-blend-mode", "normal");
  }
);

$(".quirinopath,#quirinopin").hover(
  function () {
    $("#quirinopin,.quirinoname").css("visibility", "visible");
    $("#quirinopin,.quirinoname").css("opacity", "1");
    $(".quirinoname").css("transform", "translateY(0px)");
    $("#quirinopin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#quirinopin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".quirinopath").css("mix-blend-mode", "color");
  },
  function () {
    $("#quirinopin,.quirinoname").css("visibility", "hidden");
    $("#quirinopin,.quirinoname").css("opacity", "0");
    $(".quirinoname").css("transform", "translateY(-20px)");
    $("#quirinopin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#quirinopin .map-pin").css("transform", "translateY(-5vw)");
    $(".quirinopath").css("mix-blend-mode", "normal");
  }
);

$(".nuevavizcayapath,#nuevavizcayapin").hover(
  function () {
    $("#nuevavizcayapin,.nuevavizcayaname").css("visibility", "visible");
    $("#nuevavizcayapin,.nuevavizcayaname").css("opacity", "1");
    $(".nuevavizcayaname").css("transform", "translateY(0px)");
    $("#nuevavizcayapin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#nuevavizcayapin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".nuevavizcayapath").css("mix-blend-mode", "color");
  },
  function () {
    $("#nuevavizcayapin,.nuevavizcayaname").css("visibility", "hidden");
    $("#nuevavizcayapin,.nuevavizcayaname").css("opacity", "0");
    $(".nuevavizcayaname").css("transform", "translateY(-20px)");
    $("#nuevavizcayapin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#nuevavizcayapin .map-pin").css("transform", "translateY(-5vw)");
    $(".nuevavizcayapath").css("mix-blend-mode", "normal");
  }
);

$(".aurorapath,#aurorapin").hover(
  function () {
    $("#aurorapin,.auroraname").css("visibility", "visible");
    $("#aurorapin,.auroraname").css("opacity", "1");
    $(".auroraname").css("transform", "translateY(0px)");
    $("#aurorapin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#aurorapin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".aurorapath").css("mix-blend-mode", "color");
  },
  function () {
    $("#aurorapin,.auroraname").css("visibility", "hidden");
    $("#aurorapin,.auroraname").css("opacity", "0");
    $(".auroraname").css("transform", "translateY(-20px)");
    $("#aurorapin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#aurorapin .map-pin").css("transform", "translateY(-5vw)");
    $(".aurorapath").css("mix-blend-mode", "normal");
  }
);

$(".nuevaecijapath,#nuevaecijapin").hover(
  function () {
    $("#nuevaecijapin,.nuevaecijaname").css("visibility", "visible");
    $("#nuevaecijapin,.nuevaecijaname").css("opacity", "1");
    $(".nuevaecijaname").css("transform", "translateY(0px)");
    $("#nuevaecijapin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#nuevaecijapin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".nuevaecijapath").css("mix-blend-mode", "color");
  },
  function () {
    $("#nuevaecijapin,.nuevaecijaname").css("visibility", "hidden");
    $("#nuevaecijapin,.nuevaecijaname").css("opacity", "0");
    $(".nuevaecijaname").css("transform", "translateY(-20px)");
    $("#nuevaecijapin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#nuevaecijapin .map-pin").css("transform", "translateY(-5vw)");
    $(".nuevaecijapath").css("mix-blend-mode", "normal");
  }
);

$(".tarlacpath,#tarlacpin").hover(
  function () {
    $("#tarlacpin,.tarlacname").css("visibility", "visible");
    $("#tarlacpin,.tarlacname").css("opacity", "1");
    $(".tarlacname").css("transform", "translateY(0px)");
    $("#tarlacpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#tarlacpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".tarlacpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#tarlacpin,.tarlacname").css("visibility", "hidden");
    $("#tarlacpin,.tarlacname").css("opacity", "0");
    $(".tarlacname").css("transform", "translateY(-20px)");
    $("#tarlacpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#tarlacpin .map-pin").css("transform", "translateY(-5vw)");
    $(".tarlacpath").css("mix-blend-mode", "normal");
  }
);

$(".zambalespath,#zambalespin").hover(
  function () {
    $("#zambalespin,.zambalesname").css("visibility", "visible");
    $("#zambalespin,.zambalesname").css("opacity", "1");
    $(".zambalesname").css("transform", "translateY(0px)");
    $("#zambalespin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#zambalespin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".zambalespath").css("mix-blend-mode", "color");
  },
  function () {
    $("#zambalespin,.zambalesname").css("visibility", "hidden");
    $("#zambalespin,.zambalesname").css("opacity", "0");
    $(".zambalesname").css("transform", "translateY(-20px)");
    $("#zambalespin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#zambalespin .map-pin").css("transform", "translateY(-5vw)");
    $(".zambalespath").css("mix-blend-mode", "normal");
  }
);

$(".pampangapath,#pampangapin").hover(
  function () {
    $("#pampangapin,.pampanganame").css("visibility", "visible");
    $("#pampangapin,.pampanganame").css("opacity", "1");
    $(".pampanganame").css("transform", "translateY(0px)");
    $("#pampangapin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#pampangapin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".pampangapath").css("mix-blend-mode", "color");
  },
  function () {
    $("#pampangapin,.pampanganame").css("visibility", "hidden");
    $("#pampangapin,.pampanganame").css("opacity", "0");
    $(".pampanganame").css("transform", "translateY(-20px)");
    $("#pampangapin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#pampangapin .map-pin").css("transform", "translateY(-5vw)");
    $(".pampangapath").css("mix-blend-mode", "normal");
  }
);

$(".bataanpath,#bataanpin").hover(
  function () {
    $("#bataanpin,.bataanname").css("visibility", "visible");
    $("#bataanpin,.bataanname").css("opacity", "1");
    $(".bataanname").css("transform", "translateY(0px)");
    $("#bataanpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#bataanpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".bataanpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#bataanpin,.bataanname").css("visibility", "hidden");
    $("#bataanpin,.bataanname").css("opacity", "0");
    $(".bataanname").css("transform", "translateY(-20px)");
    $("#bataanpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#bataanpin .map-pin").css("transform", "translateY(-5vw)");
    $(".bataanpath").css("mix-blend-mode", "normal");
  }
);

$(".bulacanpath,#bulacanpin").hover(
  function () {
    $("#bulacanpin,.bulacanname").css("visibility", "visible");
    $("#bulacanpin,.bulacanname").css("opacity", "1");
    $(".bulacanname").css("transform", "translateY(0px)");
    $("#bulacanpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#bulacanpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".bulacanpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#bulacanpin,.bulacanname").css("visibility", "hidden");
    $("#bulacanpin,.bulacanname").css("opacity", "0");
    $(".bulacanname").css("transform", "translateY(-20px)");
    $("#bulacanpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#bulacanpin .map-pin").css("transform", "translateY(-5vw)");
    $(".bulacanpath").css("mix-blend-mode", "normal");
  }
);

$(".cavitepath,#cavitepin").hover(
  function () {
    $("#cavitepin,.cavitename").css("visibility", "visible");
    $("#cavitepin,.cavitename").css("opacity", "1");
    $(".cavitename").css("transform", "translateY(0px)");
    $("#cavitepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#cavitepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".cavitepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#cavitepin,.cavitename").css("visibility", "hidden");
    $("#cavitepin,.cavitename").css("opacity", "0");
    $(".cavitename").css("transform", "translateY(-20px)");
    $("#cavitepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#cavitepin .map-pin").css("transform", "translateY(-5vw)");
    $(".cavitepath").css("mix-blend-mode", "normal");
  }
);

$(".lagunapath,#lagunapin").hover(
  function () {
    $("#lagunapin,.lagunaname").css("visibility", "visible");
    $("#lagunapin,.lagunaname").css("opacity", "1");
    $(".lagunaname").css("transform", "translateY(0px)");
    $("#lagunapin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#lagunapin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".lagunapath").css("mix-blend-mode", "color");
  },
  function () {
    $("#lagunapin,.lagunaname").css("visibility", "hidden");
    $("#lagunapin,.lagunaname").css("opacity", "0");
    $(".lagunaname").css("transform", "translateY(-20px)");
    $("#lagunapin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#lagunapin .map-pin").css("transform", "translateY(-5vw)");
    $(".lagunapath").css("mix-blend-mode", "normal");
  }
);

$(".rizalpath,#rizalpin").hover(
  function () {
    $("#rizalpin,.rizalname").css("visibility", "visible");
    $("#rizalpin,.rizalname").css("opacity", "1");
    $(".rizalname").css("transform", "translateY(0px)");
    $("#rizalpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#rizalpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".rizalpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#rizalpin,.rizalname").css("visibility", "hidden");
    $("#rizalpin,.rizalname").css("opacity", "0");
    $(".rizalname").css("transform", "translateY(-20px)");
    $("#rizalpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#rizalpin .map-pin").css("transform", "translateY(-5vw)");
    $(".rizalpath").css("mix-blend-mode", "normal");
  }
);

$(".quezonpath,#quezonpin").hover(
  function () {
    $("#quezonpin,.quezonname").css("visibility", "visible");
    $("#quezonpin,.quezonname").css("opacity", "1");
    $(".quezonname").css("transform", "translateY(0px)");
    $("#quezonpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#quezonpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".quezonpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#quezonpin,.quezonname").css("visibility", "hidden");
    $("#quezonpin,.quezonname").css("opacity", "0");
    $(".quezonname").css("transform", "translateY(-20px)");
    $("#quezonpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#quezonpin .map-pin").css("transform", "translateY(-5vw)");
    $(".quezonpath").css("mix-blend-mode", "normal");
  }
);

$(".batangaspath,#batangaspin").hover(
  function () {
    $("#batangaspin,.batangasname").css("visibility", "visible");
    $("#batangaspin,.batangasname").css("opacity", "1");
    $(".batangasname").css("transform", "translateY(0px)");
    $("#batangaspin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#batangaspin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".batangaspath").css("mix-blend-mode", "color");
  },
  function () {
    $("#batangaspin,.batangasname").css("visibility", "hidden");
    $("#batangaspin,.batangasname").css("opacity", "0");
    $(".batangasname").css("transform", "translateY(-20px)");
    $("#batangaspin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#batangaspin .map-pin").css("transform", "translateY(-5vw)");
    $(".batangaspath").css("mix-blend-mode", "normal");
  }
);

$(".marinduquepath,#marinduquepin").hover(
  function () {
    $("#marinduquepin,.marinduquename").css("visibility", "visible");
    $("#marinduquepin,.marinduquename").css("opacity", "1");
    $(".marinduquename").css("transform", "translateY(0px)");
    $("#marinduquepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#marinduquepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".marinduquepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#marinduquepin,.marinduquename").css("visibility", "hidden");
    $("#marinduquepin,.marinduquename").css("opacity", "0");
    $(".marinduquename").css("transform", "translateY(-20px)");
    $("#marinduquepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#marinduquepin .map-pin").css("transform", "translateY(-5vw)");
    $(".marinduquepath").css("mix-blend-mode", "normal");
  }
);

$(".occidentalmindoropath,#occidentalmindoropin").hover(
  function () {
    $("#occidentalmindoropin,.occidentalmindoroname").css(
      "visibility",
      "visible"
    );
    $("#occidentalmindoropin,.occidentalmindoroname").css("opacity", "1");
    $(".occidentalmindoroname").css("transform", "translateY(0px)");
    $("#occidentalmindoropin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#occidentalmindoropin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".occidentalmindoropath").css("mix-blend-mode", "color");
  },
  function () {
    $("#occidentalmindoropin,.occidentalmindoroname").css(
      "visibility",
      "hidden"
    );
    $("#occidentalmindoropin,.occidentalmindoroname").css("opacity", "0");
    $(".occidentalmindoroname").css("transform", "translateY(-20px)");
    $("#occidentalmindoropin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#occidentalmindoropin .map-pin").css("transform", "translateY(-5vw)");
    $(".occidentalmindoropath").css("mix-blend-mode", "normal");
  }
);

$(".orientalmindoropath,#orientalmindoropin").hover(
  function () {
    $("#orientalmindoropin,.orientalmindoroname").css("visibility", "visible");
    $("#orientalmindoropin,.orientalmindoroname").css("opacity", "1");
    $(".orientalmindoroname").css("transform", "translateY(0px)");
    $("#orientalmindoropin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#orientalmindoropin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".orientalmindoropath").css("mix-blend-mode", "color");
  },
  function () {
    $("#orientalmindoropin,.orientalmindoroname").css("visibility", "hidden");
    $("#orientalmindoropin,.orientalmindoroname").css("opacity", "0");
    $(".orientalmindoroname").css("transform", "translateY(-20px)");
    $("#orientalmindoropin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#orientalmindoropin .map-pin").css("transform", "translateY(-5vw)");
    $(".orientalmindoropath").css("mix-blend-mode", "normal");
  }
);

$(".palawanpath,#palawanpin").hover(
  function () {
    $("#palawanpin,.palawanname").css("visibility", "visible");
    $("#palawanpin,.palawanname").css("opacity", "1");
    $(".palawanname").css("transform", "translateY(0px)");
    $("#palawanpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#palawanpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".palawanpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#palawanpin,.palawanname").css("visibility", "hidden");
    $("#palawanpin,.palawanname").css("opacity", "0");
    $(".palawanname").css("transform", "translateY(-20px)");
    $("#palawanpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#palawanpin .map-pin").css("transform", "translateY(-5vw)");
    $(".palawanpath").css("mix-blend-mode", "normal");
  }
);

$(".romblonpath,#romblonpin").hover(
  function () {
    $("#romblonpin,.romblonname").css("visibility", "visible");
    $("#romblonpin,.romblonname").css("opacity", "1");
    $(".romblonname").css("transform", "translateY(0px)");
    $("#romblonpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#romblonpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".romblonpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#romblonpin,.romblonname").css("visibility", "hidden");
    $("#romblonpin,.romblonname").css("opacity", "0");
    $(".romblonname").css("transform", "translateY(-20px)");
    $("#romblonpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#romblonpin .map-pin").css("transform", "translateY(-5vw)");
    $(".romblonpath").css("mix-blend-mode", "normal");
  }
);

$(".camarinesnortepath,#camarinesnortepin").hover(
  function () {
    $("#camarinesnortepin,.camarinesnortename").css("visibility", "visible");
    $("#camarinesnortepin,.camarinesnortename").css("opacity", "1");
    $(".camarinesnortename").css("transform", "translateY(0px)");
    $("#camarinesnortepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#camarinesnortepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".camarinesnortepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#camarinesnortepin,.camarinesnortename").css("visibility", "hidden");
    $("#camarinesnortepin,.camarinesnortename").css("opacity", "0");
    $(".camarinesnortename").css("transform", "translateY(-20px)");
    $("#camarinesnortepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#camarinesnortepin .map-pin").css("transform", "translateY(-5vw)");
    $(".camarinesnortepath").css("mix-blend-mode", "normal");
  }
);

$(".camarinessurpath,#camarinessurpin").hover(
  function () {
    $("#camarinessurpin,.camarinessurname").css("visibility", "visible");
    $("#camarinessurpin,.camarinessurname").css("opacity", "1");
    $(".camarinessurname").css("transform", "translateY(0px)");
    $("#camarinessurpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#camarinessurpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".camarinessurpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#camarinessurpin,.camarinessurname").css("visibility", "hidden");
    $("#camarinessurpin,.camarinessurname").css("opacity", "0");
    $(".camarinessurname").css("transform", "translateY(-20px)");
    $("#camarinessurpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#camarinessurpin .map-pin").css("transform", "translateY(-5vw)");
    $(".camarinessurpath").css("mix-blend-mode", "normal");
  }
);

$(".catanduanespath,#catanduanespin").hover(
  function () {
    $("#catanduanespin,.catanduanesname").css("visibility", "visible");
    $("#catanduanespin,.catanduanesname").css("opacity", "1");
    $(".catanduanesname").css("transform", "translateY(0px)");
    $("#catanduanespin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#catanduanespin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".catanduanespath").css("mix-blend-mode", "color");
  },
  function () {
    $("#catanduanespin,.catanduanesname").css("visibility", "hidden");
    $("#catanduanespin,.catanduanesname").css("opacity", "0");
    $(".catanduanesname").css("transform", "translateY(-20px)");
    $("#catanduanespin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#catanduanespin .map-pin").css("transform", "translateY(-5vw)");
    $(".catanduanespath").css("mix-blend-mode", "normal");
  }
);

$(".albaypath,#albaypin").hover(
  function () {
    $("#albaypin,.albayname").css("visibility", "visible");
    $("#albaypin,.albayname").css("opacity", "1");
    $(".albayname").css("transform", "translateY(0px)");
    $("#albaypin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#albaypin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".albaypath").css("mix-blend-mode", "color");
  },
  function () {
    $("#albaypin,.albayname").css("visibility", "hidden");
    $("#albaypin,.albayname").css("opacity", "0");
    $(".albayname").css("transform", "translateY(-20px)");
    $("#albaypin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#albaypin .map-pin").css("transform", "translateY(-5vw)");
    $(".albaypath").css("mix-blend-mode", "normal");
  }
);

$(".masbatepath,#masbatepin").hover(
  function () {
    $("#masbatepin,.masbatename").css("visibility", "visible");
    $("#masbatepin,.masbatename").css("opacity", "1");
    $(".masbatename").css("transform", "translateY(0px)");
    $("#masbatepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#masbatepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".masbatepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#masbatepin,.masbatename").css("visibility", "hidden");
    $("#masbatepin,.masbatename").css("opacity", "0");
    $(".masbatename").css("transform", "translateY(-20px)");
    $("#masbatepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#masbatepin .map-pin").css("transform", "translateY(-5vw)");
    $(".masbatepath").css("mix-blend-mode", "normal");
  }
);

$(".sorsogonpath,#sorsogonpin").hover(
  function () {
    $("#sorsogonpin,.sorsogonname").css("visibility", "visible");
    $("#sorsogonpin,.sorsogonname").css("opacity", "1");
    $(".sorsogonname").css("transform", "translateY(0px)");
    $("#sorsogonpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#sorsogonpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".sorsogonpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#sorsogonpin,.sorsogonname").css("visibility", "hidden");
    $("#sorsogonpin,.sorsogonname").css("opacity", "0");
    $(".sorsogonname").css("transform", "translateY(-20px)");
    $("#sorsogonpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#sorsogonpin .map-pin").css("transform", "translateY(-5vw)");
    $(".sorsogonpath").css("mix-blend-mode", "normal");
  }
);

$(".leytepath,#leytepin").hover(
  function () {
    $("#leytepin,.leytename").css("visibility", "visible");
    $("#leytepin,.leytename").css("opacity", "1");
    $(".leytename").css("transform", "translateY(0px)");
    $("#leytepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#leytepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".leytepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#leytepin,.leytename").css("visibility", "hidden");
    $("#leytepin,.leytename").css("opacity", "0");
    $(".leytename").css("transform", "translateY(-20px)");
    $("#leytepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#leytepin .map-pin").css("transform", "translateY(-5vw)");
    $(".leytepath").css("mix-blend-mode", "normal");
  }
);

$(".northernsamarpath,#northernsamarpin").hover(
  function () {
    $("#northernsamarpin,.northernsamarname").css("visibility", "visible");
    $("#northernsamarpin,.northernsamarname").css("opacity", "1");
    $(".northernsamarname").css("transform", "translateY(0px)");
    $("#northernsamarpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#northernsamarpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".northernsamarpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#northernsamarpin,.northernsamarname").css("visibility", "hidden");
    $("#northernsamarpin,.northernsamarname").css("opacity", "0");
    $(".northernsamarname").css("transform", "translateY(-20px)");
    $("#northernsamarpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#northernsamarpin .map-pin").css("transform", "translateY(-5vw)");
    $(".northernsamarpath").css("mix-blend-mode", "normal");
  }
);

$(".samarpath,#samarpin").hover(
  function () {
    $("#samarpin,.samarname").css("visibility", "visible");
    $("#samarpin,.samarname").css("opacity", "1");
    $(".samarname").css("transform", "translateY(0px)");
    $("#samarpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#samarpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".samarpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#samarpin,.samarname").css("visibility", "hidden");
    $("#samarpin,.samarname").css("opacity", "0");
    $(".samarname").css("transform", "translateY(-20px)");
    $("#samarpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#samarpin .map-pin").css("transform", "translateY(-5vw)");
    $(".samarpath").css("mix-blend-mode", "normal");
  }
);

$(".easternsamarpath,#easternsamarpin").hover(
  function () {
    $("#easternsamarpin,.easternsamarname").css("visibility", "visible");
    $("#easternsamarpin,.easternsamarname").css("opacity", "1");
    $(".easternsamarname").css("transform", "translateY(0px)");
    $("#easternsamarpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#easternsamarpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".easternsamarpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#easternsamarpin,.easternsamarname").css("visibility", "hidden");
    $("#easternsamarpin,.easternsamarname").css("opacity", "0");
    $(".easternsamarname").css("transform", "translateY(-20px)");
    $("#easternsamarpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#easternsamarpin .map-pin").css("transform", "translateY(-5vw)");
    $(".easternsamarpath").css("mix-blend-mode", "normal");
  }
);

$(".biliranpath,#biliranpin").hover(
  function () {
    $("#biliranpin,.biliranname").css("visibility", "visible");
    $("#biliranpin,.biliranname").css("opacity", "1");
    $(".biliranname").css("transform", "translateY(0px)");
    $("#biliranpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#biliranpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".biliranpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#biliranpin,.biliranname").css("visibility", "hidden");
    $("#biliranpin,.biliranname").css("opacity", "0");
    $(".biliranname").css("transform", "translateY(-20px)");
    $("#biliranpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#biliranpin .map-pin").css("transform", "translateY(-5vw)");
    $(".biliranpath").css("mix-blend-mode", "normal");
  }
);

$(".southernleytepath,#southernleytepin").hover(
  function () {
    $("#southernleytepin,.southernleytename").css("visibility", "visible");
    $("#southernleytepin,.southernleytename").css("opacity", "1");
    $(".southernleytename").css("transform", "translateY(0px)");
    $("#southernleytepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#southernleytepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".southernleytepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#southernleytepin,.southernleytename").css("visibility", "hidden");
    $("#southernleytepin,.southernleytename").css("opacity", "0");
    $(".southernleytename").css("transform", "translateY(-20px)");
    $("#southernleytepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#southernleytepin .map-pin").css("transform", "translateY(-5vw)");
    $(".southernleytepath").css("mix-blend-mode", "normal");
  }
);

$(".antiquepath,#antiquepin").hover(
  function () {
    $("#antiquepin,.antiquename").css("visibility", "visible");
    $("#antiquepin,.antiquename").css("opacity", "1");
    $(".antiquename").css("transform", "translateY(0px)");
    $("#antiquepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#antiquepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".antiquepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#antiquepin,.antiquename").css("visibility", "hidden");
    $("#antiquepin,.antiquename").css("opacity", "0");
    $(".antiquename").css("transform", "translateY(-20px)");
    $("#antiquepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#antiquepin .map-pin").css("transform", "translateY(-5vw)");
    $(".antiquepath").css("mix-blend-mode", "normal");
  }
);

$(".iloilopath,#iloilopin").hover(
  function () {
    $("#iloilopin,.iloiloname").css("visibility", "visible");
    $("#iloilopin,.iloiloname").css("opacity", "1");
    $(".iloiloname").css("transform", "translateY(0px)");
    $("#iloilopin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#iloilopin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".iloilopath").css("mix-blend-mode", "color");
  },
  function () {
    $("#iloilopin,.iloiloname").css("visibility", "hidden");
    $("#iloilopin,.iloiloname").css("opacity", "0");
    $(".iloiloname").css("transform", "translateY(-20px)");
    $("#iloilopin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#iloilopin .map-pin").css("transform", "translateY(-5vw)");
    $(".iloilopath").css("mix-blend-mode", "normal");
  }
);

$(".aklanpath,#aklanpin").hover(
  function () {
    $("#aklanpin,.aklanname").css("visibility", "visible");
    $("#aklanpin,.aklanname").css("opacity", "1");
    $(".aklanname").css("transform", "translateY(0px)");
    $("#aklanpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#aklanpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".aklanpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#aklanpin,.aklanname").css("visibility", "hidden");
    $("#aklanpin,.aklanname").css("opacity", "0");
    $(".aklanname").css("transform", "translateY(-20px)");
    $("#aklanpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#aklanpin .map-pin").css("transform", "translateY(-5vw)");
    $(".aklanpath").css("mix-blend-mode", "normal");
  }
);

$(".capizpath,#capizpin").hover(
  function () {
    $("#capizpin,.capizname").css("visibility", "visible");
    $("#capizpin,.capizname").css("opacity", "1");
    $(".capizname").css("transform", "translateY(0px)");
    $("#capizpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#capizpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".capizpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#capizpin,.capizname").css("visibility", "hidden");
    $("#capizpin,.capizname").css("opacity", "0");
    $(".capizname").css("transform", "translateY(-20px)");
    $("#capizpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#capizpin .map-pin").css("transform", "translateY(-5vw)");
    $(".capizpath").css("mix-blend-mode", "normal");
  }
);

$(".guimaraspath,#guimaraspin").hover(
  function () {
    $("#guimaraspin,.guimarasname").css("visibility", "visible");
    $("#guimaraspin,.guimarasname").css("opacity", "1");
    $(".guimarasname").css("transform", "translateY(0px)");
    $("#guimaraspin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#guimaraspin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".guimaraspath").css("mix-blend-mode", "color");
  },
  function () {
    $("#guimaraspin,.guimarasname").css("visibility", "hidden");
    $("#guimaraspin,.guimarasname").css("opacity", "0");
    $(".guimarasname").css("transform", "translateY(-20px)");
    $("#guimaraspin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#guimaraspin .map-pin").css("transform", "translateY(-5vw)");
    $(".guimaraspath").css("mix-blend-mode", "normal");
  }
);

$(".negrosoccidentalpath,#negrosoccidentalpin").hover(
  function () {
    $("#negrosoccidentalpin,.negrosoccidentalname").css(
      "visibility",
      "visible"
    );
    $("#negrosoccidentalpin,.negrosoccidentalname").css("opacity", "1");
    $(".negrosoccidentalname").css("transform", "translateY(0px)");
    $("#negrosoccidentalpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#negrosoccidentalpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".negrosoccidentalpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#negrosoccidentalpin,.negrosoccidentalname").css("visibility", "hidden");
    $("#negrosoccidentalpin,.negrosoccidentalname").css("opacity", "0");
    $(".negrosoccidentalname").css("transform", "translateY(-20px)");
    $("#negrosoccidentalpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#negrosoccidentalpin .map-pin").css("transform", "translateY(-5vw)");
    $(".negrosoccidentalpath").css("mix-blend-mode", "normal");
  }
);

$(".negrosorientalpath,#negrosorientalpin").hover(
  function () {
    $("#negrosorientalpin,.negrosorientalname").css("visibility", "visible");
    $("#negrosorientalpin,.negrosorientalname").css("opacity", "1");
    $(".negrosorientalname").css("transform", "translateY(0px)");
    $("#negrosorientalpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#negrosorientalpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".negrosorientalpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#negrosorientalpin,.negrosorientalname").css("visibility", "hidden");
    $("#negrosorientalpin,.negrosorientalname").css("opacity", "0");
    $(".negrosorientalname").css("transform", "translateY(-20px)");
    $("#negrosorientalpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#negrosorientalpin .map-pin").css("transform", "translateY(-5vw)");
    $(".negrosorientalpath").css("mix-blend-mode", "normal");
  }
);

$(".siquijorpath,#siquijorpin").hover(
  function () {
    $("#siquijorpin,.siquijorname").css("visibility", "visible");
    $("#siquijorpin,.siquijorname").css("opacity", "1");
    $(".siquijorname").css("transform", "translateY(0px)");
    $("#siquijorpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#siquijorpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".siquijorpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#siquijorpin,.siquijorname").css("visibility", "hidden");
    $("#siquijorpin,.siquijorname").css("opacity", "0");
    $(".siquijorname").css("transform", "translateY(-20px)");
    $("#siquijorpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#siquijorpin .map-pin").css("transform", "translateY(-5vw)");
    $(".siquijorpath").css("mix-blend-mode", "normal");
  }
);

$(".boholpath,#boholpin").hover(
  function () {
    $("#boholpin,.boholname").css("visibility", "visible");
    $("#boholpin,.boholname").css("opacity", "1");
    $(".boholname").css("transform", "translateY(0px)");
    $("#boholpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#boholpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".boholpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#boholpin,.boholname").css("visibility", "hidden");
    $("#boholpin,.boholname").css("opacity", "0");
    $(".boholname").css("transform", "translateY(-20px)");
    $("#boholpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#boholpin .map-pin").css("transform", "translateY(-5vw)");
    $(".boholpath").css("mix-blend-mode", "normal");
  }
);

$(".dinagatpath,#dinagatpin").hover(
  function () {
    $("#dinagatpin,.dinagatname").css("visibility", "visible");
    $("#dinagatpin,.dinagatname").css("opacity", "1");
    $(".dinagatname").css("transform", "translateY(0px)");
    $("#dinagatpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#dinagatpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".dinagatpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#dinagatpin,.dinagatname").css("visibility", "hidden");
    $("#dinagatpin,.dinagatname").css("opacity", "0");
    $(".dinagatname").css("transform", "translateY(-20px)");
    $("#dinagatpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#dinagatpin .map-pin").css("transform", "translateY(-5vw)");
    $(".dinagatpath").css("mix-blend-mode", "normal");
  }
);

$(".cebupath,#cebupin").hover(
  function () {
    $("#cebupin,.cebuname").css("visibility", "visible");
    $("#cebupin,.cebuname").css("opacity", "1");
    $(".cebuname").css("transform", "translateY(0px)");
    $("#cebupin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#cebupin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".cebupath").css("mix-blend-mode", "color");
  },
  function () {
    $("#cebupin,.cebuname").css("visibility", "hidden");
    $("#cebupin,.cebuname").css("opacity", "0");
    $(".cebuname").css("transform", "translateY(-20px)");
    $("#cebupin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#cebupin .map-pin").css("transform", "translateY(-5vw)");
    $(".cebupath").css("mix-blend-mode", "normal");
  }
);

$(".surigaodelnortepath,#surigaodelnortepin").hover(
  function () {
    $("#surigaodelnortepin,.surigaodelnortename").css("visibility", "visible");
    $("#surigaodelnortepin,.surigaodelnortename").css("opacity", "1");
    $(".surigaodelnortename").css("transform", "translateY(0px)");
    $("#surigaodelnortepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#surigaodelnortepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".surigaodelnortepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#surigaodelnortepin,.surigaodelnortename").css("visibility", "hidden");
    $("#surigaodelnortepin,.surigaodelnortename").css("opacity", "0");
    $(".surigaodelnortename").css("transform", "translateY(-20px)");
    $("#surigaodelnortepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#surigaodelnortepin .map-pin").css("transform", "translateY(-5vw)");
    $(".surigaodelnortepath").css("mix-blend-mode", "normal");
  }
);

$(".surigaodelsurpath,#surigaodelsurpin").hover(
  function () {
    $("#surigaodelsurpin,.surigaodelsurname").css("visibility", "visible");
    $("#surigaodelsurpin,.surigaodelsurname").css("opacity", "1");
    $(".surigaodelsurname").css("transform", "translateY(0px)");
    $("#surigaodelsurpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#surigaodelsurpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".surigaodelsurpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#surigaodelsurpin,.surigaodelsurname").css("visibility", "hidden");
    $("#surigaodelsurpin,.surigaodelsurname").css("opacity", "0");
    $(".surigaodelsurname").css("transform", "translateY(-20px)");
    $("#surigaodelsurpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#surigaodelsurpin .map-pin").css("transform", "translateY(-5vw)");
    $(".surigaodelsurpath").css("mix-blend-mode", "normal");
  }
);

$(".agusandelnortepath,#agusandelnortepin").hover(
  function () {
    $("#agusandelnortepin,.agusandelnortename").css("visibility", "visible");
    $("#agusandelnortepin,.agusandelnortename").css("opacity", "1");
    $(".agusandelnortename").css("transform", "translateY(0px)");
    $("#agusandelnortepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#agusandelnortepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".agusandelnortepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#agusandelnortepin,.agusandelnortename").css("visibility", "hidden");
    $("#agusandelnortepin,.agusandelnortename").css("opacity", "0");
    $(".agusandelnortename").css("transform", "translateY(-20px)");
    $("#agusandelnortepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#agusandelnortepin .map-pin").css("transform", "translateY(-5vw)");
    $(".agusandelnortepath").css("mix-blend-mode", "normal");
  }
);

$(".agusandelsurpath,#agusandelsurpin").hover(
  function () {
    $("#agusandelsurpin,.agusandelsurname").css("visibility", "visible");
    $("#agusandelsurpin,.agusandelsurname").css("opacity", "1");
    $(".agusandelsurname").css("transform", "translateY(0px)");
    $("#agusandelsurpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#agusandelsurpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".agusandelsurpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#agusandelsurpin,.agusandelsurname").css("visibility", "hidden");
    $("#agusandelsurpin,.agusandelsurname").css("opacity", "0");
    $(".agusandelsurname").css("transform", "translateY(-20px)");
    $("#agusandelsurpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#agusandelsurpin .map-pin").css("transform", "translateY(-5vw)");
    $(".agusandelsurpath").css("mix-blend-mode", "normal");
  }
);

$(".camiguinpath,#camiguinpin").hover(
  function () {
    $("#camiguinpin,.camiguinname").css("visibility", "visible");
    $("#camiguinpin,.camiguinname").css("opacity", "1");
    $(".camiguinname").css("transform", "translateY(0px)");
    $("#camiguinpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#camiguinpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".camiguinpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#camiguinpin,.camiguinname").css("visibility", "hidden");
    $("#camiguinpin,.camiguinname").css("opacity", "0");
    $(".camiguinname").css("transform", "translateY(-20px)");
    $("#camiguinpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#camiguinpin .map-pin").css("transform", "translateY(-5vw)");
    $(".camiguinpath").css("mix-blend-mode", "normal");
  }
);

$(".misamisorientalpath,#misamisorientalpin").hover(
  function () {
    $("#misamisorientalpin,.misamisorientalname").css("visibility", "visible");
    $("#misamisorientalpin,.misamisorientalname").css("opacity", "1");
    $(".misamisorientalname").css("transform", "translateY(0px)");
    $("#misamisorientalpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#misamisorientalpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".misamisorientalpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#misamisorientalpin,.misamisorientalname").css("visibility", "hidden");
    $("#misamisorientalpin,.misamisorientalname").css("opacity", "0");
    $(".misamisorientalname").css("transform", "translateY(-20px)");
    $("#misamisorientalpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#misamisorientalpin .map-pin").css("transform", "translateY(-5vw)");
    $(".misamisorientalpath").css("mix-blend-mode", "normal");
  }
);

$(".misamisoccidentalpath,#misamisoccidentalpin").hover(
  function () {
    $("#misamisoccidentalpin,.misamisoccidentalname").css(
      "visibility",
      "visible"
    );
    $("#misamisoccidentalpin,.misamisoccidentalname").css("opacity", "1");
    $(".misamisoccidentalname").css("transform", "translateY(0px)");
    $("#misamisoccidentalpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#misamisoccidentalpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".misamisoccidentalpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#misamisoccidentalpin,.misamisoccidentalname").css(
      "visibility",
      "hidden"
    );
    $("#misamisoccidentalpin,.misamisoccidentalname").css("opacity", "0");
    $(".misamisoccidentalname").css("transform", "translateY(-20px)");
    $("#misamisoccidentalpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#misamisoccidentalpin .map-pin").css("transform", "translateY(-5vw)");
    $(".misamisoccidentalpath").css("mix-blend-mode", "normal");
  }
);

$(".bukidnonpath,#bukidnonpin").hover(
  function () {
    $("#bukidnonpin,.bukidnonname").css("visibility", "visible");
    $("#bukidnonpin,.bukidnonname").css("opacity", "1");
    $(".bukidnonname").css("transform", "translateY(0px)");
    $("#bukidnonpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#bukidnonpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".bukidnonpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#bukidnonpin,.bukidnonname").css("visibility", "hidden");
    $("#bukidnonpin,.bukidnonname").css("opacity", "0");
    $(".bukidnonname").css("transform", "translateY(-20px)");
    $("#bukidnonpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#bukidnonpin .map-pin").css("transform", "translateY(-5vw)");
    $(".bukidnonpath").css("mix-blend-mode", "normal");
  }
);

$(".lanaodelnortepath,#lanaodelnortepin").hover(
  function () {
    $("#lanaodelnortepin,.lanaodelnortename").css("visibility", "visible");
    $("#lanaodelnortepin,.lanaodelnortename").css("opacity", "1");
    $(".lanaodelnortename").css("transform", "translateY(0px)");
    $("#lanaodelnortepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#lanaodelnortepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".lanaodelnortepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#lanaodelnortepin,.lanaodelnortename").css("visibility", "hidden");
    $("#lanaodelnortepin,.lanaodelnortename").css("opacity", "0");
    $(".lanaodelnortename").css("transform", "translateY(-20px)");
    $("#lanaodelnortepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#lanaodelnortepin .map-pin").css("transform", "translateY(-5vw)");
    $(".lanaodelnortepath").css("mix-blend-mode", "normal");
  }
);

$(".lanaodelsurpath,#lanaodelsurpin").hover(
  function () {
    $("#lanaodelsurpin,.lanaodelsurname").css("visibility", "visible");
    $("#lanaodelsurpin,.lanaodelsurname").css("opacity", "1");
    $(".lanaodelsurname").css("transform", "translateY(0px)");
    $("#lanaodelsurpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#lanaodelsurpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".lanaodelsurpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#lanaodelsurpin,.lanaodelsurname").css("visibility", "hidden");
    $("#lanaodelsurpin,.lanaodelsurname").css("opacity", "0");
    $(".lanaodelsurname").css("transform", "translateY(-20px)");
    $("#lanaodelsurpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#lanaodelsurpin .map-pin").css("transform", "translateY(-5vw)");
    $(".lanaodelsurpath").css("mix-blend-mode", "normal");
  }
);

$(".davaoorientalpath,#davaoorientalpin").hover(
  function () {
    $("#davaoorientalpin,.davaoorientalname").css("visibility", "visible");
    $("#davaoorientalpin,.davaoorientalname").css("opacity", "1");
    $(".davaoorientalname").css("transform", "translateY(0px)");
    $("#davaoorientalpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#davaoorientalpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".davaoorientalpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#davaoorientalpin,.davaoorientalname").css("visibility", "hidden");
    $("#davaoorientalpin,.davaoorientalname").css("opacity", "0");
    $(".davaoorientalname").css("transform", "translateY(-20px)");
    $("#davaoorientalpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#davaoorientalpin .map-pin").css("transform", "translateY(-5vw)");
    $(".davaoorientalpath").css("mix-blend-mode", "normal");
  }
);

$(".davaodeoropath,#davaodeoropin").hover(
  function () {
    $("#davaodeoropin,.davaodeoroname").css("visibility", "visible");
    $("#davaodeoropin,.davaodeoroname").css("opacity", "1");
    $(".davaodeoroname").css("transform", "translateY(0px)");
    $("#davaodeoropin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#davaodeoropin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".davaodeoropath").css("mix-blend-mode", "color");
  },
  function () {
    $("#davaodeoropin,.davaodeoroname").css("visibility", "hidden");
    $("#davaodeoropin,.davaodeoroname").css("opacity", "0");
    $(".davaodeoroname").css("transform", "translateY(-20px)");
    $("#davaodeoropin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#davaodeoropin .map-pin").css("transform", "translateY(-5vw)");
    $(".davaodeoropath").css("mix-blend-mode", "normal");
  }
);

$(".davaodelnortepath,#davaodelnortepin").hover(
  function () {
    $("#davaodelnortepin,.davaodelnortename").css("visibility", "visible");
    $("#davaodelnortepin,.davaodelnortename").css("opacity", "1");
    $(".davaodelnortename").css("transform", "translateY(0px)");
    $("#davaodelnortepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#davaodelnortepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".davaodelnortepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#davaodelnortepin,.davaodelnortename").css("visibility", "hidden");
    $("#davaodelnortepin,.davaodelnortename").css("opacity", "0");
    $(".davaodelnortename").css("transform", "translateY(-20px)");
    $("#davaodelnortepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#davaodelnortepin .map-pin").css("transform", "translateY(-5vw)");
    $(".davaodelnortepath").css("mix-blend-mode", "normal");
  }
);

$(".davaocitypath,#davaocitypin").hover(
  function () {
    $("#davaocitypin,.davaocityname").css("visibility", "visible");
    $("#davaocitypin,.davaocityname").css("opacity", "1");
    $(".davaocityname").css("transform", "translateY(0px)");
    $("#davaocitypin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#davaocitypin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".davaocitypath").css("mix-blend-mode", "color");
  },
  function () {
    $("#davaocitypin,.davaocityname").css("visibility", "hidden");
    $("#davaocitypin,.davaocityname").css("opacity", "0");
    $(".davaocityname").css("transform", "translateY(-20px)");
    $("#davaocitypin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#davaocitypin .map-pin").css("transform", "translateY(-5vw)");
    $(".davaocitypath").css("mix-blend-mode", "normal");
  }
);

$(".davaodelsurpath,#davaodelsurpin").hover(
  function () {
    $("#davaodelsurpin,.davaodelsurname").css("visibility", "visible");
    $("#davaodelsurpin,.davaodelsurname").css("opacity", "1");
    $(".davaodelsurname").css("transform", "translateY(0px)");
    $("#davaodelsurpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#davaodelsurpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".davaodelsurpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#davaodelsurpin,.davaodelsurname").css("visibility", "hidden");
    $("#davaodelsurpin,.davaodelsurname").css("opacity", "0");
    $(".davaodelsurname").css("transform", "translateY(-20px)");
    $("#davaodelsurpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#davaodelsurpin .map-pin").css("transform", "translateY(-5vw)");
    $(".davaodelsurpath").css("mix-blend-mode", "normal");
  }
);

$(".davaooccidentalpath,#davaooccidentalpin").hover(
  function () {
    $("#davaooccidentalpin,.davaooccidentalname").css("visibility", "visible");
    $("#davaooccidentalpin,.davaooccidentalname").css("opacity", "1");
    $(".davaooccidentalname").css("transform", "translateY(0px)");
    $("#davaooccidentalpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#davaooccidentalpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".davaooccidentalpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#davaooccidentalpin,.davaooccidentalname").css("visibility", "hidden");
    $("#davaooccidentalpin,.davaooccidentalname").css("opacity", "0");
    $(".davaooccidentalname").css("transform", "translateY(-20px)");
    $("#davaooccidentalpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#davaooccidentalpin .map-pin").css("transform", "translateY(-5vw)");
    $(".davaooccidentalpath").css("mix-blend-mode", "normal");
  }
);

$(".cotabatopath,#cotabatopin").hover(
  function () {
    $("#cotabatopin,.cotabatoname").css("visibility", "visible");
    $("#cotabatopin,.cotabatoname").css("opacity", "1");
    $(".cotabatoname").css("transform", "translateY(0px)");
    $("#cotabatopin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#cotabatopin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".cotabatopath").css("mix-blend-mode", "color");
  },
  function () {
    $("#cotabatopin,.cotabatoname").css("visibility", "hidden");
    $("#cotabatopin,.cotabatoname").css("opacity", "0");
    $(".cotabatoname").css("transform", "translateY(-20px)");
    $("#cotabatopin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#cotabatopin .map-pin").css("transform", "translateY(-5vw)");
    $(".cotabatopath").css("mix-blend-mode", "normal");
  }
);

$(".southcotabatopath,#southcotabatopin").hover(
  function () {
    $("#southcotabatopin,.southcotabatoname").css("visibility", "visible");
    $("#southcotabatopin,.southcotabatoname").css("opacity", "1");
    $(".southcotabatoname").css("transform", "translateY(0px)");
    $("#southcotabatopin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#southcotabatopin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".southcotabatopath").css("mix-blend-mode", "color");
  },
  function () {
    $("#southcotabatopin,.southcotabatoname").css("visibility", "hidden");
    $("#southcotabatopin,.southcotabatoname").css("opacity", "0");
    $(".southcotabatoname").css("transform", "translateY(-20px)");
    $("#southcotabatopin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#southcotabatopin .map-pin").css("transform", "translateY(-5vw)");
    $(".southcotabatopath").css("mix-blend-mode", "normal");
  }
);

$(".sultankudaratpath,#sultankudaratpin").hover(
  function () {
    $("#sultankudaratpin,.sultankudaratname").css("visibility", "visible");
    $("#sultankudaratpin,.sultankudaratname").css("opacity", "1");
    $(".sultankudaratname").css("transform", "translateY(0px)");
    $("#sultankudaratpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#sultankudaratpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".sultankudaratpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#sultankudaratpin,.sultankudaratname").css("visibility", "hidden");
    $("#sultankudaratpin,.sultankudaratname").css("opacity", "0");
    $(".sultankudaratname").css("transform", "translateY(-20px)");
    $("#sultankudaratpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#sultankudaratpin .map-pin").css("transform", "translateY(-5vw)");
    $(".sultankudaratpath").css("mix-blend-mode", "normal");
  }
);

$(".maguindanaopath,#maguindanaopin").hover(
  function () {
    $("#maguindanaopin,.maguindanaoname").css("visibility", "visible");
    $("#maguindanaopin,.maguindanaoname").css("opacity", "1");
    $(".maguindanaoname").css("transform", "translateY(0px)");
    $("#maguindanaopin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#maguindanaopin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".maguindanaopath").css("mix-blend-mode", "color");
  },
  function () {
    $("#maguindanaopin,.maguindanaoname").css("visibility", "hidden");
    $("#maguindanaopin,.maguindanaoname").css("opacity", "0");
    $(".maguindanaoname").css("transform", "translateY(-20px)");
    $("#maguindanaopin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#maguindanaopin .map-pin").css("transform", "translateY(-5vw)");
    $(".maguindanaopath").css("mix-blend-mode", "normal");
  }
);

$(".saranganipath,#saranganipin").hover(
  function () {
    $("#saranganipin,.saranganiname").css("visibility", "visible");
    $("#saranganipin,.saranganiname").css("opacity", "1");
    $(".saranganiname").css("transform", "translateY(0px)");
    $("#saranganipin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#saranganipin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".saranganipath").css("mix-blend-mode", "color");
  },
  function () {
    $("#saranganipin,.saranganiname").css("visibility", "hidden");
    $("#saranganipin,.saranganiname").css("opacity", "0");
    $(".saranganiname").css("transform", "translateY(-20px)");
    $("#saranganipin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#saranganipin .map-pin").css("transform", "translateY(-5vw)");
    $(".saranganipath").css("mix-blend-mode", "normal");
  }
);

$(".zamboangadelnortepath,#zamboangadelnortepin").hover(
  function () {
    $("#zamboangadelnortepin,.zamboangadelnortename").css(
      "visibility",
      "visible"
    );
    $("#zamboangadelnortepin,.zamboangadelnortename").css("opacity", "1");
    $(".zamboangadelnortename").css("transform", "translateY(0px)");
    $("#zamboangadelnortepin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#zamboangadelnortepin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".zamboangadelnortepath").css("mix-blend-mode", "color");
  },
  function () {
    $("#zamboangadelnortepin,.zamboangadelnortename").css(
      "visibility",
      "hidden"
    );
    $("#zamboangadelnortepin,.zamboangadelnortename").css("opacity", "0");
    $(".zamboangadelnortename").css("transform", "translateY(-20px)");
    $("#zamboangadelnortepin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#zamboangadelnortepin .map-pin").css("transform", "translateY(-5vw)");
    $(".zamboangadelnortepath").css("mix-blend-mode", "normal");
  }
);

$(".zamboangadelsurpath,#zamboangadelsurpin").hover(
  function () {
    $("#zamboangadelsurpin,.zamboangadelsurname").css("visibility", "visible");
    $("#zamboangadelsurpin,.zamboangadelsurname").css("opacity", "1");
    $(".zamboangadelsurname").css("transform", "translateY(0px)");
    $("#zamboangadelsurpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#zamboangadelsurpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".zamboangadelsurpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#zamboangadelsurpin,.zamboangadelsurname").css("visibility", "hidden");
    $("#zamboangadelsurpin,.zamboangadelsurname").css("opacity", "0");
    $(".zamboangadelsurname").css("transform", "translateY(-20px)");
    $("#zamboangadelsurpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#zamboangadelsurpin .map-pin").css("transform", "translateY(-5vw)");
    $(".zamboangadelsurpath").css("mix-blend-mode", "normal");
  }
);

$(".zamboangasibugaypath,#zamboangasibugaypin").hover(
  function () {
    $("#zamboangasibugaypin,.zamboangasibugayname").css(
      "visibility",
      "visible"
    );
    $("#zamboangasibugaypin,.zamboangasibugayname").css("opacity", "1");
    $(".zamboangasibugayname").css("transform", "translateY(0px)");
    $("#zamboangasibugaypin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#zamboangasibugaypin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".zamboangasibugaypath").css("mix-blend-mode", "color");
  },
  function () {
    $("#zamboangasibugaypin,.zamboangasibugayname").css("visibility", "hidden");
    $("#zamboangasibugaypin,.zamboangasibugayname").css("opacity", "0");
    $(".zamboangasibugayname").css("transform", "translateY(-20px)");
    $("#zamboangasibugaypin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#zamboangasibugaypin .map-pin").css("transform", "translateY(-5vw)");
    $(".zamboangasibugaypath").css("mix-blend-mode", "normal");
  }
);

$(".zamboangacitypath,#zamboangacitypin").hover(
  function () {
    $("#zamboangacitypin,.zamboangacityname").css("visibility", "visible");
    $("#zamboangacitypin,.zamboangacityname").css("opacity", "1");
    $(".zamboangacityname").css("transform", "translateY(0px)");
    $("#zamboangacitypin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#zamboangacitypin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".zamboangacitypath").css("mix-blend-mode", "color");
  },
  function () {
    $("#zamboangacitypin,.zamboangacityname").css("visibility", "hidden");
    $("#zamboangacitypin,.zamboangacityname").css("opacity", "0");
    $(".zamboangacityname").css("transform", "translateY(-20px)");
    $("#zamboangacitypin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#zamboangacitypin .map-pin").css("transform", "translateY(-5vw)");
    $(".zamboangacitypath").css("mix-blend-mode", "normal");
  }
);

$(".basilanpath,#basilanpin").hover(
  function () {
    $("#basilanpin,.basilanname").css("visibility", "visible");
    $("#basilanpin,.basilanname").css("opacity", "1");
    $(".basilanname").css("transform", "translateY(0px)");
    $("#basilanpin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#basilanpin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".basilanpath").css("mix-blend-mode", "color");
  },
  function () {
    $("#basilanpin,.basilanname").css("visibility", "hidden");
    $("#basilanpin,.basilanname").css("opacity", "0");
    $(".basilanname").css("transform", "translateY(-20px)");
    $("#basilanpin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#basilanpin .map-pin").css("transform", "translateY(-5vw)");
    $(".basilanpath").css("mix-blend-mode", "normal");
  }
);

$(".sulupath,#sulupin").hover(
  function () {
    $("#sulupin,.suluname").css("visibility", "visible");
    $("#sulupin,.suluname").css("opacity", "1");
    $(".suluname").css("transform", "translateY(0px)");
    $("#sulupin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#sulupin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".sulupath").css("mix-blend-mode", "color");
  },
  function () {
    $("#sulupin,.suluname").css("visibility", "hidden");
    $("#sulupin,.suluname").css("opacity", "0");
    $(".suluname").css("transform", "translateY(-20px)");
    $("#sulupin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#sulupin .map-pin").css("transform", "translateY(-5vw)");
    $(".sulupath").css("mix-blend-mode", "normal");
  }
);

$(".tawitawipath,#tawitawipin").hover(
  function () {
    $("#tawitawipin,.tawitawiname").css("visibility", "visible");
    $("#tawitawipin,.tawitawiname").css("opacity", "1");
    $(".tawitawiname").css("transform", "translateY(0px)");
    $("#tawitawipin .trail-pin").css("transform", "rotateZ(360deg)");
    $("#tawitawipin .map-pin").css("transform", "translateY(-3.5vw)");
    $(".tawitawipath").css("mix-blend-mode", "color");
  },
  function () {
    $("#tawitawipin,.tawitawiname").css("visibility", "hidden");
    $("#tawitawipin,.tawitawiname").css("opacity", "0");
    $(".tawitawiname").css("transform", "translateY(-20px)");
    $("#tawitawipin .trail-pin").css("transform", "rotateZ(180deg)");
    $("#tawitawipin .map-pin").css("transform", "translateY(-5vw)");
    $(".tawitawipath").css("mix-blend-mode", "normal");
  }
);
// } else {
//   $(".pin").css("visibility", "visible");
//   $(".pin").css("opacity", "1");
// }

// $("#menu").hover(
//   function () {
//     $("body").css("overflow", "hidden");
//   },
//   function () {
//     $("body").css("overflow", "auto");
//   }
// );

//////////////
var headers = ["H1", "H2", "H3", "H4", "H5", "H6"];

$(".accordion").click(function (e) {
  var target = e.target,
    name = target.nodeName.toUpperCase();

  if ($.inArray(name, headers) > -1) {
    var subItem = $(target).next();

    //slideUp all elements (except target) at current depth or greater
    var depth = $(subItem).parents().length;
    var allAtDepth = $(".accordion p, .accordion div").filter(function () {
      if ($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true;
      }
    });
    $(allAtDepth).slideUp("fast");

    //slideToggle target content and adjust bottom border if necessary
    subItem.slideToggle("fast", function () {
      $(".accordion :visible:last").css("border-radius", "0 0 10px 10px");
    });
    $(target).css({
      "border-bottom-right-radius": "0",
      "border-bottom-left-radius": "0",
    });
  }
});
