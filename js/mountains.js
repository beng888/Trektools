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
  ilocosSur.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Ph_fil_ilocos_sur.png/1200px-Ph_fil_ilocos_sur.png" id="img">';
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
  benguet.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Ph_fil_benguet.png/1024px-Ph_fil_benguet.png" id="img">';
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
  nuevaVizcaya.innerHTML +=
    '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ph_fil_nueva_vizcaya.png/1024px-Ph_fil_nueva_vizcaya.png" id="img">';
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

$(".fil1").click(function () {
  blur.classList.toggle("activefirst");
  body.classList.toggle("bodyoverflow");
  $(".popup").append('<div class="blocker" onclick="hidePopup()"></div>');
});

function hidePopup() {
  for (var i = 0; i < popup.length; i++) {
    popup[i].classList.remove("open");
  }
  blur.classList.toggle("activefirst");
  body.classList.toggle("bodyoverflow");
}

$(document).on("click", ".blocker", function () {
  $("#img").remove();
  $("#divmap").remove();
  $(".blocker").remove();
});

$(document).on("click", ".blocker2", function () {
  $("#modal-body").remove();
  $(".blocker2").remove();
});

$("div.pin").append(`<img src="pin.png" >`);

///lazy loading scripts///

document.addEventListener("DOMContentLoaded", function (event) {
  let head = document.querySelector("head");
  let loadJS = function (src) {
    let jsLink = document.createElement("script");
    jsLink.src = src;
    head.appendChild(jsLink);
  };
  $("head").append(`<link rel="stylesheet" href="./css/mountainpinstyle.css">`);
  loadJS("./js/map.js");
});

///////hoverPins/////

$ilocosnortepin = $("#ilocosnortepin");
$(".ilocosnortepath,#ilocosnortepin").hover(
  function () {
    $ilocosnortepin.css("visibility", "visible");
    $ilocosnortepin.css("opacity", "1");
    $ilocosnortepin.css("transform", "translateY(0px)");
  },
  function () {
    $ilocosnortepin.css("visibility", "hidden");
    $ilocosnortepin.css("opacity", "0");
    $ilocosnortepin.css("transform", "translateY(-20px)");
  }
);

$batanespath = $(".batanespath");
$batanespin = $("#batanespin");
$(".batanespath,#batanespin").hover(
  function () {
    $batanespin.css("visibility", "visible");
    $batanespin.css("opacity", "1");
    $batanespin.css("transform", "translateY(0px)");
    $batanespath.css("mix-blend-mode", "multiply");
  },
  function () {
    $batanespin.css("visibility", "hidden");
    $batanespin.css("opacity", "0");
    $batanespin.css("transform", "translateY(-20px)");
    $batanespath.css("mix-blend-mode", "normal");
  }
);
