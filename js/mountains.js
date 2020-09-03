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
  $("body").css("overflow", "hidden");
  $(".popup").append('<div class="blocker" onclick="hidePopup()"></div>');
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

$("div.pin").append(`<img src="pin.png" >`);

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

$ilocossurpin = $("#ilocossurpin");
$(".ilocossurpath,#ilocossurpin").hover(
  function () {
    $ilocossurpin.css("visibility", "visible");
    $ilocossurpin.css("opacity", "1");
    $ilocossurpin.css("transform", "translateY(0px)");
  },
  function () {
    $ilocossurpin.css("visibility", "hidden");
    $ilocossurpin.css("opacity", "0");
    $ilocossurpin.css("transform", "translateY(-20px)");
  }
);

$launionpin = $("#launionpin");
$(".launionpath,#launionpin").hover(
  function () {
    $launionpin.css("visibility", "visible");
    $launionpin.css("opacity", "1");
    $launionpin.css("transform", "translateY(0px)");
  },
  function () {
    $launionpin.css("visibility", "hidden");
    $launionpin.css("opacity", "0");
    $launionpin.css("transform", "translateY(-20px)");
  }
);

$pangasinanpin = $("#pangasinanpin");
$(".pangasinanpath,#pangasinanpin").hover(
  function () {
    $pangasinanpin.css("visibility", "visible");
    $pangasinanpin.css("opacity", "1");
    $pangasinanpin.css("transform", "translateY(0px)");
  },
  function () {
    $pangasinanpin.css("visibility", "hidden");
    $pangasinanpin.css("opacity", "0");
    $pangasinanpin.css("transform", "translateY(-20px)");
  }
);

$apayaopin = $("#apayaopin");
$(".apayaopath,#apayaopin").hover(
  function () {
    $apayaopin.css("visibility", "visible");
    $apayaopin.css("opacity", "1");
    $apayaopin.css("transform", "translateY(0px)");
  },
  function () {
    $apayaopin.css("visibility", "hidden");
    $apayaopin.css("opacity", "0");
    $apayaopin.css("transform", "translateY(-20px)");
  }
);

$abrapin = $("#abrapin");
$(".abrapath,#abrapin").hover(
  function () {
    $abrapin.css("visibility", "visible");
    $abrapin.css("opacity", "1");
    $abrapin.css("transform", "translateY(0px)");
  },
  function () {
    $abrapin.css("visibility", "hidden");
    $abrapin.css("opacity", "0");
    $abrapin.css("transform", "translateY(-20px)");
  }
);

$kalingapin = $("#kalingapin");
$(".kalingapath,#kalingapin").hover(
  function () {
    $kalingapin.css("visibility", "visible");
    $kalingapin.css("opacity", "1");
    $kalingapin.css("transform", "translateY(0px)");
  },
  function () {
    $kalingapin.css("visibility", "hidden");
    $kalingapin.css("opacity", "0");
    $kalingapin.css("transform", "translateY(-20px)");
  }
);

$mtprovincepin = $("#mtprovincepin");
$(".mtprovincepath,#mtprovincepin").hover(
  function () {
    $mtprovincepin.css("visibility", "visible");
    $mtprovincepin.css("opacity", "1");
    $mtprovincepin.css("transform", "translateY(0px)");
  },
  function () {
    $mtprovincepin.css("visibility", "hidden");
    $mtprovincepin.css("opacity", "0");
    $mtprovincepin.css("transform", "translateY(-20px)");
  }
);

$ifugaopin = $("#ifugaopin");
$(".ifugaopath,#ifugaopin").hover(
  function () {
    $ifugaopin.css("visibility", "visible");
    $ifugaopin.css("opacity", "1");
    $ifugaopin.css("transform", "translateY(0px)");
  },
  function () {
    $ifugaopin.css("visibility", "hidden");
    $ifugaopin.css("opacity", "0");
    $ifugaopin.css("transform", "translateY(-20px)");
  }
);

$benguetpin = $("#benguetpin");
$(".benguetpath,#benguetpin").hover(
  function () {
    $benguetpin.css("visibility", "visible");
    $benguetpin.css("opacity", "1");
    $benguetpin.css("transform", "translateY(0px)");
  },
  function () {
    $benguetpin.css("visibility", "hidden");
    $benguetpin.css("opacity", "0");
    $benguetpin.css("transform", "translateY(-20px)");
  }
);

$batanespath = $(".batanespath");
$batanespin = $("#batanespin");
$(".batanespath,#batanespin").hover(
  function () {
    $batanespin.css("visibility", "visible");
    $batanespin.css("opacity", "1");
    $batanespin.css("transform", "translateY(0px)");
    $batanespath.css("mix-blend-mode", "color");
  },
  function () {
    $batanespin.css("visibility", "hidden");
    $batanespin.css("opacity", "0");
    $batanespin.css("transform", "translateY(-20px)");
    $batanespath.css("mix-blend-mode", "normal");
  }
);

$cagayanpath = $(".cagayanpath");
$cagayanpin = $("#cagayanpin");
$(".cagayanpath,#cagayanpin").hover(
  function () {
    $cagayanpin.css("visibility", "visible");
    $cagayanpin.css("opacity", "1");
    $cagayanpin.css("transform", "translateY(0px)");
    $cagayanpath.css("mix-blend-mode", "color");
  },
  function () {
    $cagayanpin.css("visibility", "hidden");
    $cagayanpin.css("opacity", "0");
    $cagayanpin.css("transform", "translateY(-20px)");
    $cagayanpath.css("mix-blend-mode", "normal");
  }
);

$isabelapin = $("#isabelapin");
$(".isabelapath,#isabelapin").hover(
  function () {
    $isabelapin.css("visibility", "visible");
    $isabelapin.css("opacity", "1");
    $isabelapin.css("transform", "translateY(0px)");
  },
  function () {
    $isabelapin.css("visibility", "hidden");
    $isabelapin.css("opacity", "0");
    $isabelapin.css("transform", "translateY(-20px)");
  }
);

$quirinopin = $("#quirinopin");
$(".quirinopath,#quirinopin").hover(
  function () {
    $quirinopin.css("visibility", "visible");
    $quirinopin.css("opacity", "1");
    $quirinopin.css("transform", "translateY(0px)");
  },
  function () {
    $quirinopin.css("visibility", "hidden");
    $quirinopin.css("opacity", "0");
    $quirinopin.css("transform", "translateY(-20px)");
  }
);

$nuevavizcayapin = $("#nuevavizcayapin");
$(".nuevavizcayapath,#nuevavizcayapin").hover(
  function () {
    $nuevavizcayapin.css("visibility", "visible");
    $nuevavizcayapin.css("opacity", "1");
    $nuevavizcayapin.css("transform", "translateY(0px)");
  },
  function () {
    $nuevavizcayapin.css("visibility", "hidden");
    $nuevavizcayapin.css("opacity", "0");
    $nuevavizcayapin.css("transform", "translateY(-20px)");
  }
);

$aurorapin = $("#aurorapin");
$(".aurorapath,#aurorapin").hover(
  function () {
    $aurorapin.css("visibility", "visible");
    $aurorapin.css("opacity", "1");
    $aurorapin.css("transform", "translateY(0px)");
  },
  function () {
    $aurorapin.css("visibility", "hidden");
    $aurorapin.css("opacity", "0");
    $aurorapin.css("transform", "translateY(-20px)");
  }
);

$nuevaecijapin = $("#nuevaecijapin");
$(".nuevaecijapath,#nuevaecijapin").hover(
  function () {
    $nuevaecijapin.css("visibility", "visible");
    $nuevaecijapin.css("opacity", "1");
    $nuevaecijapin.css("transform", "translateY(0px)");
  },
  function () {
    $nuevaecijapin.css("visibility", "hidden");
    $nuevaecijapin.css("opacity", "0");
    $nuevaecijapin.css("transform", "translateY(-20px)");
  }
);

$tarlacpin = $("#tarlacpin");
$(".tarlacpath,#tarlacpin").hover(
  function () {
    $tarlacpin.css("visibility", "visible");
    $tarlacpin.css("opacity", "1");
    $tarlacpin.css("transform", "translateY(0px)");
  },
  function () {
    $tarlacpin.css("visibility", "hidden");
    $tarlacpin.css("opacity", "0");
    $tarlacpin.css("transform", "translateY(-20px)");
  }
);

$zambalespin = $("#zambalespin");
$(".zambalespath,#zambalespin").hover(
  function () {
    $zambalespin.css("visibility", "visible");
    $zambalespin.css("opacity", "1");
    $zambalespin.css("transform", "translateY(0px)");
  },
  function () {
    $zambalespin.css("visibility", "hidden");
    $zambalespin.css("opacity", "0");
    $zambalespin.css("transform", "translateY(-20px)");
  }
);

$pampangapin = $("#pampangapin");
$(".pampangapath,#pampangapin").hover(
  function () {
    $pampangapin.css("visibility", "visible");
    $pampangapin.css("opacity", "1");
    $pampangapin.css("transform", "translateY(0px)");
  },
  function () {
    $pampangapin.css("visibility", "hidden");
    $pampangapin.css("opacity", "0");
    $pampangapin.css("transform", "translateY(-20px)");
  }
);

$bataanpin = $("#bataanpin");
$(".bataanpath,#bataanpin").hover(
  function () {
    $bataanpin.css("visibility", "visible");
    $bataanpin.css("opacity", "1");
    $bataanpin.css("transform", "translateY(0px)");
  },
  function () {
    $bataanpin.css("visibility", "hidden");
    $bataanpin.css("opacity", "0");
    $bataanpin.css("transform", "translateY(-20px)");
  }
);

$bulacanpin = $("#bulacanpin");
$(".bulacanpath,#bulacanpin").hover(
  function () {
    $bulacanpin.css("visibility", "visible");
    $bulacanpin.css("opacity", "1");
    $bulacanpin.css("transform", "translateY(0px)");
  },
  function () {
    $bulacanpin.css("visibility", "hidden");
    $bulacanpin.css("opacity", "0");
    $bulacanpin.css("transform", "translateY(-20px)");
  }
);
$cavitepin = $("#cavitepin");
$(".cavitepath,#cavitepin").hover(
  function () {
    $cavitepin.css("visibility", "visible");
    $cavitepin.css("opacity", "1");
    $cavitepin.css("transform", "translateY(0px)");
  },
  function () {
    $cavitepin.css("visibility", "hidden");
    $cavitepin.css("opacity", "0");
    $cavitepin.css("transform", "translateY(-20px)");
  }
);
$lagunapin = $("#lagunapin");
$(".lagunapath,#lagunapin").hover(
  function () {
    $lagunapin.css("visibility", "visible");
    $lagunapin.css("opacity", "1");
    $lagunapin.css("transform", "translateY(0px)");
  },
  function () {
    $lagunapin.css("visibility", "hidden");
    $lagunapin.css("opacity", "0");
    $lagunapin.css("transform", "translateY(-20px)");
  }
);

$rizalpath = $(".rizalpath");
$rizalpin = $("#rizalpin");
$(".rizalpath,#rizalpin").hover(
  function () {
    $rizalpin.css("visibility", "visible");
    $rizalpin.css("opacity", "1");
    $rizalpin.css("transform", "translateY(0px)");
    $rizalpath.css("mix-blend-mode", "color");
  },
  function () {
    $rizalpin.css("visibility", "hidden");
    $rizalpin.css("opacity", "0");
    $rizalpin.css("transform", "translateY(-20px)");
    $rizalpath.css("mix-blend-mode", "normal");
  }
);

$quezonpath = $(".quezonpath");
$quezonpin = $("#quezonpin");
$(".quezonpath,#quezonpin").hover(
  function () {
    $quezonpin.css("visibility", "visible");
    $quezonpin.css("opacity", "1");
    $quezonpin.css("transform", "translateY(0px)");
    $quezonpath.css("mix-blend-mode", "color");
  },
  function () {
    $quezonpin.css("visibility", "hidden");
    $quezonpin.css("opacity", "0");
    $quezonpin.css("transform", "translateY(-20px)");
    $quezonpath.css("mix-blend-mode", "normal");
  }
);

$batangaspath = $(".batangaspath");
$batangaspin = $("#batangaspin");
$(".batangaspath,#batangaspin").hover(
  function () {
    $batangaspin.css("visibility", "visible");
    $batangaspin.css("opacity", "1");
    $batangaspin.css("transform", "translateY(0px)");
    $batangaspath.css("mix-blend-mode", "color");
  },
  function () {
    $batangaspin.css("visibility", "hidden");
    $batangaspin.css("opacity", "0");
    $batangaspin.css("transform", "translateY(-20px)");
    $batangaspath.css("mix-blend-mode", "normal");
  }
);

$marinduquepin = $("#marinduquepin");
$(".marinduquepath,#marinduquepin").hover(
  function () {
    $marinduquepin.css("visibility", "visible");
    $marinduquepin.css("opacity", "1");
    $marinduquepin.css("transform", "translateY(0px)");
  },
  function () {
    $marinduquepin.css("visibility", "hidden");
    $marinduquepin.css("opacity", "0");
    $marinduquepin.css("transform", "translateY(-20px)");
  }
);

$occidentalmindoropath = $(".occidentalmindoropath");
$occidentalmindoropin = $("#occidentalmindoropin");
$(".occidentalmindoropath,#occidentalmindoropin").hover(
  function () {
    $occidentalmindoropin.css("visibility", "visible");
    $occidentalmindoropin.css("opacity", "1");
    $occidentalmindoropin.css("transform", "translateY(0px)");
    $occidentalmindoropath.css("mix-blend-mode", "color");
  },
  function () {
    $occidentalmindoropin.css("visibility", "hidden");
    $occidentalmindoropin.css("opacity", "0");
    $occidentalmindoropin.css("transform", "translateY(-20px)");
    $occidentalmindoropath.css("mix-blend-mode", "normal");
  }
);

$orientalmindoropath = $(".orientalmindoropath");
$orientalmindoropin = $("#orientalmindoropin");
$(".orientalmindoropath,#orientalmindoropin").hover(
  function () {
    $orientalmindoropin.css("visibility", "visible");
    $orientalmindoropin.css("opacity", "1");
    $orientalmindoropin.css("transform", "translateY(0px)");
    $orientalmindoropath.css("mix-blend-mode", "color");
  },
  function () {
    $orientalmindoropin.css("visibility", "hidden");
    $orientalmindoropin.css("opacity", "0");
    $orientalmindoropin.css("transform", "translateY(-20px)");
    $orientalmindoropath.css("mix-blend-mode", "normal");
  }
);

$palawanpath = $(".palawanpath");
$palawanpin = $("#palawanpin");
$(".palawanpath,#palawanpin").hover(
  function () {
    $palawanpin.css("visibility", "visible");
    $palawanpin.css("opacity", "1");
    $palawanpin.css("transform", "translateY(0px)");
    $palawanpath.css("mix-blend-mode", "color");
  },
  function () {
    $palawanpin.css("visibility", "hidden");
    $palawanpin.css("opacity", "0");
    $palawanpin.css("transform", "translateY(-20px)");
    $palawanpath.css("mix-blend-mode", "normal");
  }
);
$romblonpath = $(".romblonpath");
$romblonpin = $("#romblonpin");
$(".romblonpath,#romblonpin").hover(
  function () {
    $romblonpin.css("visibility", "visible");
    $romblonpin.css("opacity", "1");
    $romblonpin.css("transform", "translateY(0px)");
    $romblonpath.css("mix-blend-mode", "color");
  },
  function () {
    $romblonpin.css("visibility", "hidden");
    $romblonpin.css("opacity", "0");
    $romblonpin.css("transform", "translateY(-20px)");
    $romblonpath.css("mix-blend-mode", "normal");
  }
);

$camarinesnortepin = $("#camarinesnortepin");
$(".camarinesnortepath,#camarinesnortepin").hover(
  function () {
    $camarinesnortepin.css("visibility", "visible");
    $camarinesnortepin.css("opacity", "1");
    $camarinesnortepin.css("transform", "translateY(0px)");
  },
  function () {
    $camarinesnortepin.css("visibility", "hidden");
    $camarinesnortepin.css("opacity", "0");
    $camarinesnortepin.css("transform", "translateY(-20px)");
  }
);
$camarinessurpath = $(".camarinessurpath");
$camarinessurpin = $("#camarinessurpin");
$(".camarinessurpath,#camarinessurpin").hover(
  function () {
    $camarinessurpin.css("visibility", "visible");
    $camarinessurpin.css("opacity", "1");
    $camarinessurpin.css("transform", "translateY(0px)");
    $camarinessurpath.css("mix-blend-mode", "color");
  },
  function () {
    $camarinessurpin.css("visibility", "hidden");
    $camarinessurpin.css("opacity", "0");
    $camarinessurpin.css("transform", "translateY(-20px)");
    $camarinessurpath.css("mix-blend-mode", "normal");
  }
);
$catanduanespath = $(".catanduanespath");
$catanduanespin = $("#catanduanespin");
$(".catanduanespath,#catanduanespin").hover(
  function () {
    $catanduanespin.css("visibility", "visible");
    $catanduanespin.css("opacity", "1");
    $catanduanespin.css("transform", "translateY(0px)");
    $catanduanespath.css("mix-blend-mode", "color");
  },
  function () {
    $catanduanespin.css("visibility", "hidden");
    $catanduanespin.css("opacity", "0");
    $catanduanespin.css("transform", "translateY(-20px)");
    $catanduanespath.css("mix-blend-mode", "normal");
  }
);
$albaypath = $(".albaypath");
$albaypin = $("#albaypin");
$(".albaypath,#albaypin").hover(
  function () {
    $albaypin.css("visibility", "visible");
    $albaypin.css("opacity", "1");
    $albaypin.css("transform", "translateY(0px)");
    $albaypath.css("mix-blend-mode", "color");
  },
  function () {
    $albaypin.css("visibility", "hidden");
    $albaypin.css("opacity", "0");
    $albaypin.css("transform", "translateY(-20px)");
    $albaypath.css("mix-blend-mode", "normal");
  }
);
$masbatepath = $(".masbatepath");
$masbatepin = $("#masbatepin");
$(".masbatepath,#masbatepin").hover(
  function () {
    $masbatepin.css("visibility", "visible");
    $masbatepin.css("opacity", "1");
    $masbatepin.css("transform", "translateY(0px)");
    $masbatepath.css("mix-blend-mode", "color");
  },
  function () {
    $masbatepin.css("visibility", "hidden");
    $masbatepin.css("opacity", "0");
    $masbatepin.css("transform", "translateY(-20px)");
    $masbatepath.css("mix-blend-mode", "normal");
  }
);
$sorsogonpin = $("#sorsogonpin");
$(".sorsogonpath,#sorsogonpin").hover(
  function () {
    $sorsogonpin.css("visibility", "visible");
    $sorsogonpin.css("opacity", "1");
    $sorsogonpin.css("transform", "translateY(0px)");
  },
  function () {
    $sorsogonpin.css("visibility", "hidden");
    $sorsogonpin.css("opacity", "0");
    $sorsogonpin.css("transform", "translateY(-20px)");
  }
);
$leytepin = $("#leytepin");
$(".leytepath,#leytepin").hover(
  function () {
    $leytepin.css("visibility", "visible");
    $leytepin.css("opacity", "1");
    $leytepin.css("transform", "translateY(0px)");
  },
  function () {
    $leytepin.css("visibility", "hidden");
    $leytepin.css("opacity", "0");
    $leytepin.css("transform", "translateY(-20px)");
  }
);
$northernsamarpath = $(".northernsamarpath");
$northernsamarpin = $("#northernsamarpin");
$(".northernsamarpath,#northernsamarpin").hover(
  function () {
    $northernsamarpin.css("visibility", "visible");
    $northernsamarpin.css("opacity", "1");
    $northernsamarpin.css("transform", "translateY(0px)");
    $northernsamarpath.css("mix-blend-mode", "color");
  },
  function () {
    $northernsamarpin.css("visibility", "hidden");
    $northernsamarpin.css("opacity", "0");
    $northernsamarpin.css("transform", "translateY(-20px)");
    $northernsamarpath.css("mix-blend-mode", "normal");
  }
);
$samarpath = $(".samarpath");
$samarpin = $("#samarpin");
$(".samarpath,#samarpin").hover(
  function () {
    $samarpin.css("visibility", "visible");
    $samarpin.css("opacity", "1");
    $samarpin.css("transform", "translateY(0px)");
    $samarpath.css("mix-blend-mode", "color");
  },
  function () {
    $samarpin.css("visibility", "hidden");
    $samarpin.css("opacity", "0");
    $samarpin.css("transform", "translateY(-20px)");
    $samarpath.css("mix-blend-mode", "normal");
  }
);
$easternsamarpath = $(".easternsamarpath");
$easternsamarpin = $("#easternsamarpin");
$(".easternsamarpath,#easternsamarpin").hover(
  function () {
    $easternsamarpin.css("visibility", "visible");
    $easternsamarpin.css("opacity", "1");
    $easternsamarpin.css("transform", "translateY(0px)");
    $easternsamarpath.css("mix-blend-mode", "color");
  },
  function () {
    $easternsamarpin.css("visibility", "hidden");
    $easternsamarpin.css("opacity", "0");
    $easternsamarpin.css("transform", "translateY(-20px)");
    $easternsamarpath.css("mix-blend-mode", "normal");
  }
);
$biliranpath = $(".biliranpath");
$biliranpin = $("#biliranpin");
$(".biliranpath,#biliranpin").hover(
  function () {
    $biliranpin.css("visibility", "visible");
    $biliranpin.css("opacity", "1");
    $biliranpin.css("transform", "translateY(0px)");
    $biliranpath.css("mix-blend-mode", "color");
  },
  function () {
    $biliranpin.css("visibility", "hidden");
    $biliranpin.css("opacity", "0");
    $biliranpin.css("transform", "translateY(-20px)");
    $biliranpath.css("mix-blend-mode", "normal");
  }
);
$southernleytepath = $(".southernleytepath");
$southernleytepin = $("#southernleytepin");
$(".southernleytepath,#southernleytepin").hover(
  function () {
    $southernleytepin.css("visibility", "visible");
    $southernleytepin.css("opacity", "1");
    $southernleytepin.css("transform", "translateY(0px)");
    $southernleytepath.css("mix-blend-mode", "color");
  },
  function () {
    $southernleytepin.css("visibility", "hidden");
    $southernleytepin.css("opacity", "0");
    $southernleytepin.css("transform", "translateY(-20px)");
    $southernleytepath.css("mix-blend-mode", "normal");
  }
);
$antiquepath = $(".antiquepath");
$antiquepin = $("#antiquepin");
$(".antiquepath,#antiquepin").hover(
  function () {
    $antiquepin.css("visibility", "visible");
    $antiquepin.css("opacity", "1");
    $antiquepin.css("transform", "translateY(0px)");
    $antiquepath.css("mix-blend-mode", "color");
  },
  function () {
    $antiquepin.css("visibility", "hidden");
    $antiquepin.css("opacity", "0");
    $antiquepin.css("transform", "translateY(-20px)");
    $antiquepath.css("mix-blend-mode", "normal");
  }
);
$iloilopath = $(".iloilopath");
$iloilopin = $("#iloilopin");
$(".iloilopath,#iloilopin").hover(
  function () {
    $iloilopin.css("visibility", "visible");
    $iloilopin.css("opacity", "1");
    $iloilopin.css("transform", "translateY(0px)");
    $iloilopath.css("mix-blend-mode", "color");
  },
  function () {
    $iloilopin.css("visibility", "hidden");
    $iloilopin.css("opacity", "0");
    $iloilopin.css("transform", "translateY(-20px)");
    $iloilopath.css("mix-blend-mode", "normal");
  }
);
$aklanpin = $("#aklanpin");
$(".aklanpath,#aklanpin").hover(
  function () {
    $aklanpin.css("visibility", "visible");
    $aklanpin.css("opacity", "1");
    $aklanpin.css("transform", "translateY(0px)");
  },
  function () {
    $aklanpin.css("visibility", "hidden");
    $aklanpin.css("opacity", "0");
    $aklanpin.css("transform", "translateY(-20px)");
  }
);
$capizpin = $("#capizpin");
$(".capizpath,#capizpin").hover(
  function () {
    $capizpin.css("visibility", "visible");
    $capizpin.css("opacity", "1");
    $capizpin.css("transform", "translateY(0px)");
  },
  function () {
    $capizpin.css("visibility", "hidden");
    $capizpin.css("opacity", "0");
    $capizpin.css("transform", "translateY(-20px)");
  }
);
$guimaraspin = $("#guimaraspin");
$(".guimaraspath,#guimaraspin").hover(
  function () {
    $guimaraspin.css("visibility", "visible");
    $guimaraspin.css("opacity", "1");
    $guimaraspin.css("transform", "translateY(0px)");
  },
  function () {
    $guimaraspin.css("visibility", "hidden");
    $guimaraspin.css("opacity", "0");
    $guimaraspin.css("transform", "translateY(-20px)");
  }
);
$negrosoccidentalpin = $("#negrosoccidentalpin");
$(".negrosoccidentalpath,#negrosoccidentalpin").hover(
  function () {
    $negrosoccidentalpin.css("visibility", "visible");
    $negrosoccidentalpin.css("opacity", "1");
    $negrosoccidentalpin.css("transform", "translateY(0px)");
  },
  function () {
    $negrosoccidentalpin.css("visibility", "hidden");
    $negrosoccidentalpin.css("opacity", "0");
    $negrosoccidentalpin.css("transform", "translateY(-20px)");
  }
);
$negrosorientalpin = $("#negrosorientalpin");
$(".negrosorientalpath,#negrosorientalpin").hover(
  function () {
    $negrosorientalpin.css("visibility", "visible");
    $negrosorientalpin.css("opacity", "1");
    $negrosorientalpin.css("transform", "translateY(0px)");
  },
  function () {
    $negrosorientalpin.css("visibility", "hidden");
    $negrosorientalpin.css("opacity", "0");
    $negrosorientalpin.css("transform", "translateY(-20px)");
  }
);
$siquijorpin = $("#siquijorpin");
$(".siquijorpath,#siquijorpin").hover(
  function () {
    $siquijorpin.css("visibility", "visible");
    $siquijorpin.css("opacity", "1");
    $siquijorpin.css("transform", "translateY(0px)");
  },
  function () {
    $siquijorpin.css("visibility", "hidden");
    $siquijorpin.css("opacity", "0");
    $siquijorpin.css("transform", "translateY(-20px)");
  }
);
$boholpin = $("#boholpin");
$(".boholpath,#boholpin").hover(
  function () {
    $boholpin.css("visibility", "visible");
    $boholpin.css("opacity", "1");
    $boholpin.css("transform", "translateY(0px)");
  },
  function () {
    $boholpin.css("visibility", "hidden");
    $boholpin.css("opacity", "0");
    $boholpin.css("transform", "translateY(-20px)");
  }
);
$dinagatpin = $("#dinagatpin");
$(".dinagatpath,#dinagatpin").hover(
  function () {
    $dinagatpin.css("visibility", "visible");
    $dinagatpin.css("opacity", "1");
    $dinagatpin.css("transform", "translateY(0px)");
  },
  function () {
    $dinagatpin.css("visibility", "hidden");
    $dinagatpin.css("opacity", "0");
    $dinagatpin.css("transform", "translateY(-20px)");
  }
);
$cebupath = $(".cebupath");
$cebupin = $("#cebupin");
$(".cebupath,#cebupin").hover(
  function () {
    $cebupin.css("visibility", "visible");
    $cebupin.css("opacity", "1");
    $cebupin.css("transform", "translateY(0px)");
    $cebupath.css("mix-blend-mode", "color");
  },
  function () {
    $cebupin.css("visibility", "hidden");
    $cebupin.css("opacity", "0");
    $cebupin.css("transform", "translateY(-20px)");
    $cebupath.css("mix-blend-mode", "normal");
  }
);
$surigaodelnortepath = $(".surigaodelnortepath");
$surigaodelnortepin = $("#surigaodelnortepin");
$(".surigaodelnortepath,#surigaodelnortepin").hover(
  function () {
    $surigaodelnortepin.css("visibility", "visible");
    $surigaodelnortepin.css("opacity", "1");
    $surigaodelnortepin.css("transform", "translateY(0px)");
    $surigaodelnortepath.css("mix-blend-mode", "color");
  },
  function () {
    $surigaodelnortepin.css("visibility", "hidden");
    $surigaodelnortepin.css("opacity", "0");
    $surigaodelnortepin.css("transform", "translateY(-20px)");
    $surigaodelnortepath.css("mix-blend-mode", "normal");
  }
);
$surigaodelsurpin = $("#surigaodelsurpin");
$(".surigaodelsurpath,#surigaodelsurpin").hover(
  function () {
    $surigaodelsurpin.css("visibility", "visible");
    $surigaodelsurpin.css("opacity", "1");
    $surigaodelsurpin.css("transform", "translateY(0px)");
  },
  function () {
    $surigaodelsurpin.css("visibility", "hidden");
    $surigaodelsurpin.css("opacity", "0");
    $surigaodelsurpin.css("transform", "translateY(-20px)");
  }
);
$agusandelnortepin = $("#agusandelnortepin");
$(".agusandelnortepath,#agusandelnortepin").hover(
  function () {
    $agusandelnortepin.css("visibility", "visible");
    $agusandelnortepin.css("opacity", "1");
    $agusandelnortepin.css("transform", "translateY(0px)");
  },
  function () {
    $agusandelnortepin.css("visibility", "hidden");
    $agusandelnortepin.css("opacity", "0");
    $agusandelnortepin.css("transform", "translateY(-20px)");
  }
);
$agusandelsurpin = $("#agusandelsurpin");
$(".agusandelsurpath,#agusandelsurpin").hover(
  function () {
    $agusandelsurpin.css("visibility", "visible");
    $agusandelsurpin.css("opacity", "1");
    $agusandelsurpin.css("transform", "translateY(0px)");
  },
  function () {
    $agusandelsurpin.css("visibility", "hidden");
    $agusandelsurpin.css("opacity", "0");
    $agusandelsurpin.css("transform", "translateY(-20px)");
  }
);
$camiguinpin = $("#camiguinpin");
$(".camiguinpath,#camiguinpin").hover(
  function () {
    $camiguinpin.css("visibility", "visible");
    $camiguinpin.css("opacity", "1");
    $camiguinpin.css("transform", "translateY(0px)");
  },
  function () {
    $camiguinpin.css("visibility", "hidden");
    $camiguinpin.css("opacity", "0");
    $camiguinpin.css("transform", "translateY(-20px)");
  }
);
$misamisorientalpin = $("#misamisorientalpin");
$(".misamisorientalpath,#misamisorientalpin").hover(
  function () {
    $misamisorientalpin.css("visibility", "visible");
    $misamisorientalpin.css("opacity", "1");
    $misamisorientalpin.css("transform", "translateY(0px)");
  },
  function () {
    $misamisorientalpin.css("visibility", "hidden");
    $misamisorientalpin.css("opacity", "0");
    $misamisorientalpin.css("transform", "translateY(-20px)");
  }
);
$misamisoccidentalpin = $("#misamisoccidentalpin");
$(".misamisoccidentalpath,#misamisoccidentalpin").hover(
  function () {
    $misamisoccidentalpin.css("visibility", "visible");
    $misamisoccidentalpin.css("opacity", "1");
    $misamisoccidentalpin.css("transform", "translateY(0px)");
  },
  function () {
    $misamisoccidentalpin.css("visibility", "hidden");
    $misamisoccidentalpin.css("opacity", "0");
    $misamisoccidentalpin.css("transform", "translateY(-20px)");
  }
);
$bukidnonpin = $("#bukidnonpin");
$(".bukidnonpath,#bukidnonpin").hover(
  function () {
    $bukidnonpin.css("visibility", "visible");
    $bukidnonpin.css("opacity", "1");
    $bukidnonpin.css("transform", "translateY(0px)");
  },
  function () {
    $bukidnonpin.css("visibility", "hidden");
    $bukidnonpin.css("opacity", "0");
    $bukidnonpin.css("transform", "translateY(-20px)");
  }
);
$lanaodelnortepin = $("#lanaodelnortepin");
$(".lanaodelnortepath,#lanaodelnortepin").hover(
  function () {
    $lanaodelnortepin.css("visibility", "visible");
    $lanaodelnortepin.css("opacity", "1");
    $lanaodelnortepin.css("transform", "translateY(0px)");
  },
  function () {
    $lanaodelnortepin.css("visibility", "hidden");
    $lanaodelnortepin.css("opacity", "0");
    $lanaodelnortepin.css("transform", "translateY(-20px)");
  }
);
$lanaodelsurpin = $("#lanaodelsurpin");
$(".lanaodelsurpath,#lanaodelsurpin").hover(
  function () {
    $lanaodelsurpin.css("visibility", "visible");
    $lanaodelsurpin.css("opacity", "1");
    $lanaodelsurpin.css("transform", "translateY(0px)");
  },
  function () {
    $lanaodelsurpin.css("visibility", "hidden");
    $lanaodelsurpin.css("opacity", "0");
    $lanaodelsurpin.css("transform", "translateY(-20px)");
  }
);
$davaoorientalpin = $("#davaoorientalpin");
$(".davaoorientalpath,#davaoorientalpin").hover(
  function () {
    $davaoorientalpin.css("visibility", "visible");
    $davaoorientalpin.css("opacity", "1");
    $davaoorientalpin.css("transform", "translateY(0px)");
  },
  function () {
    $davaoorientalpin.css("visibility", "hidden");
    $davaoorientalpin.css("opacity", "0");
    $davaoorientalpin.css("transform", "translateY(-20px)");
  }
);
$davaodeoropin = $("#davaodeoropin");
$(".davaodeoropath,#davaodeoropin").hover(
  function () {
    $davaodeoropin.css("visibility", "visible");
    $davaodeoropin.css("opacity", "1");
    $davaodeoropin.css("transform", "translateY(0px)");
  },
  function () {
    $davaodeoropin.css("visibility", "hidden");
    $davaodeoropin.css("opacity", "0");
    $davaodeoropin.css("transform", "translateY(-20px)");
  }
);
$davaodelnortepath = $(".davaodelnortepath");
$davaodelnortepin = $("#davaodelnortepin");
$(".davaodelnortepath,#davaodelnortepin").hover(
  function () {
    $davaodelnortepin.css("visibility", "visible");
    $davaodelnortepin.css("opacity", "1");
    $davaodelnortepin.css("transform", "translateY(0px)");
    $davaodelnortepath.css("mix-blend-mode", "color");
  },
  function () {
    $davaodelnortepin.css("visibility", "hidden");
    $davaodelnortepin.css("opacity", "0");
    $davaodelnortepin.css("transform", "translateY(-20px)");
    $davaodelnortepath.css("mix-blend-mode", "normal");
  }
);
$davaocitypin = $("#davaocitypin");
$(".davaocitypath,#davaocitypin").hover(
  function () {
    $davaocitypin.css("visibility", "visible");
    $davaocitypin.css("opacity", "1");
    $davaocitypin.css("transform", "translateY(0px)");
  },
  function () {
    $davaocitypin.css("visibility", "hidden");
    $davaocitypin.css("opacity", "0");
    $davaocitypin.css("transform", "translateY(-20px)");
  }
);
$davaodelsurpin = $("#davaodelsurpin");
$(".davaodelsurpath,#davaodelsurpin").hover(
  function () {
    $davaodelsurpin.css("visibility", "visible");
    $davaodelsurpin.css("opacity", "1");
    $davaodelsurpin.css("transform", "translateY(0px)");
  },
  function () {
    $davaodelsurpin.css("visibility", "hidden");
    $davaodelsurpin.css("opacity", "0");
    $davaodelsurpin.css("transform", "translateY(-20px)");
  }
);
$davaooccidentalpath = $(".davaooccidentalpath");
$davaooccidentalpin = $("#davaooccidentalpin");
$(".davaooccidentalpath,#davaooccidentalpin").hover(
  function () {
    $davaooccidentalpin.css("visibility", "visible");
    $davaooccidentalpin.css("opacity", "1");
    $davaooccidentalpin.css("transform", "translateY(0px)");
    $davaooccidentalpath.css("mix-blend-mode", "color");
  },
  function () {
    $davaooccidentalpin.css("visibility", "hidden");
    $davaooccidentalpin.css("opacity", "0");
    $davaooccidentalpin.css("transform", "translateY(-20px)");
    $davaooccidentalpath.css("mix-blend-mode", "normal");
  }
);
$cotabatopin = $("#cotabatopin");
$(".cotabatopath,#cotabatopin").hover(
  function () {
    $cotabatopin.css("visibility", "visible");
    $cotabatopin.css("opacity", "1");
    $cotabatopin.css("transform", "translateY(0px)");
  },
  function () {
    $cotabatopin.css("visibility", "hidden");
    $cotabatopin.css("opacity", "0");
    $cotabatopin.css("transform", "translateY(-20px)");
  }
);
$southcotabatopin = $("#southcotabatopin");
$(".southcotabatopath,#southcotabatopin").hover(
  function () {
    $southcotabatopin.css("visibility", "visible");
    $southcotabatopin.css("opacity", "1");
    $southcotabatopin.css("transform", "translateY(0px)");
  },
  function () {
    $southcotabatopin.css("visibility", "hidden");
    $southcotabatopin.css("opacity", "0");
    $southcotabatopin.css("transform", "translateY(-20px)");
  }
);
$sultankudaratpin = $("#sultankudaratpin");
$(".sultankudaratpath,#sultankudaratpin").hover(
  function () {
    $sultankudaratpin.css("visibility", "visible");
    $sultankudaratpin.css("opacity", "1");
    $sultankudaratpin.css("transform", "translateY(0px)");
  },
  function () {
    $sultankudaratpin.css("visibility", "hidden");
    $sultankudaratpin.css("opacity", "0");
    $sultankudaratpin.css("transform", "translateY(-20px)");
  }
);
$maguindanaopath = $(".maguindanaopath");
$maguindanaopin = $("#maguindanaopin");
$(".maguindanaopath,#maguindanaopin").hover(
  function () {
    $maguindanaopin.css("visibility", "visible");
    $maguindanaopin.css("opacity", "1");
    $maguindanaopin.css("transform", "translateY(0px)");
    $maguindanaopath.css("mix-blend-mode", "color");
  },
  function () {
    $maguindanaopin.css("visibility", "hidden");
    $maguindanaopin.css("opacity", "0");
    $maguindanaopin.css("transform", "translateY(-20px)");
    $maguindanaopath.css("mix-blend-mode", "normal");
  }
);
$saranganipath = $(".saranganipath");
$saranganipin = $("#saranganipin");
$(".saranganipath,#saranganipin").hover(
  function () {
    $saranganipin.css("visibility", "visible");
    $saranganipin.css("opacity", "1");
    $saranganipin.css("transform", "translateY(0px)");
    $saranganipath.css("mix-blend-mode", "color");
  },
  function () {
    $saranganipin.css("visibility", "hidden");
    $saranganipin.css("opacity", "0");
    $saranganipin.css("transform", "translateY(-20px)");
    $saranganipath.css("mix-blend-mode", "normal");
  }
);
$zamboangadelnortepin = $("#zamboangadelnortepin");
$(".zamboangadelnortepath,#zamboangadelnortepin").hover(
  function () {
    $zamboangadelnortepin.css("visibility", "visible");
    $zamboangadelnortepin.css("opacity", "1");
    $zamboangadelnortepin.css("transform", "translateY(0px)");
  },
  function () {
    $zamboangadelnortepin.css("visibility", "hidden");
    $zamboangadelnortepin.css("opacity", "0");
    $zamboangadelnortepin.css("transform", "translateY(-20px)");
  }
);
$zamboangadelsurpin = $("#zamboangadelsurpin");
$(".zamboangadelsurpath,#zamboangadelsurpin").hover(
  function () {
    $zamboangadelsurpin.css("visibility", "visible");
    $zamboangadelsurpin.css("opacity", "1");
    $zamboangadelsurpin.css("transform", "translateY(0px)");
  },
  function () {
    $zamboangadelsurpin.css("visibility", "hidden");
    $zamboangadelsurpin.css("opacity", "0");
    $zamboangadelsurpin.css("transform", "translateY(-20px)");
  }
);
$zamboangasibugaypin = $("#zamboangasibugaypin");
$(".zamboangasibugaypath,#zamboangasibugaypin").hover(
  function () {
    $zamboangasibugaypin.css("visibility", "visible");
    $zamboangasibugaypin.css("opacity", "1");
    $zamboangasibugaypin.css("transform", "translateY(0px)");
  },
  function () {
    $zamboangasibugaypin.css("visibility", "hidden");
    $zamboangasibugaypin.css("opacity", "0");
    $zamboangasibugaypin.css("transform", "translateY(-20px)");
  }
);
$zamboangacitypath = $(".zamboangacitypath");
$zamboangacitypin = $("#zamboangacitypin");
$(".zamboangacitypath,#zamboangacitypin").hover(
  function () {
    $zamboangacitypin.css("visibility", "visible");
    $zamboangacitypin.css("opacity", "1");
    $zamboangacitypin.css("transform", "translateY(0px)");
    $zamboangacitypath.css("mix-blend-mode", "color");
  },
  function () {
    $zamboangacitypin.css("visibility", "hidden");
    $zamboangacitypin.css("opacity", "0");
    $zamboangacitypin.css("transform", "translateY(-20px)");
    $zamboangacitypath.css("mix-blend-mode", "normal");
  }
);
$basilanpath = $(".basilanpath");
$basilanpin = $("#basilanpin");
$(".basilanpath,#basilanpin").hover(
  function () {
    $basilanpin.css("visibility", "visible");
    $basilanpin.css("opacity", "1");
    $basilanpin.css("transform", "translateY(0px)");
    $basilanpath.css("mix-blend-mode", "color");
  },
  function () {
    $basilanpin.css("visibility", "hidden");
    $basilanpin.css("opacity", "0");
    $basilanpin.css("transform", "translateY(-20px)");
    $basilanpath.css("mix-blend-mode", "normal");
  }
);
$sulupath = $(".sulupath");
$sulupin = $("#sulupin");
$(".sulupath,#sulupin").hover(
  function () {
    $sulupin.css("visibility", "visible");
    $sulupin.css("opacity", "1");
    $sulupin.css("transform", "translateY(0px)");
    $sulupath.css("mix-blend-mode", "color");
  },
  function () {
    $sulupin.css("visibility", "hidden");
    $sulupin.css("opacity", "0");
    $sulupin.css("transform", "translateY(-20px)");
    $sulupath.css("mix-blend-mode", "normal");
  }
);
$tawitawipath = $(".tawitawipath");
$tawitawipin = $("#tawitawipin");
$(".tawitawipath,#tawitawipin").hover(
  function () {
    $tawitawipin.css("visibility", "visible");
    $tawitawipin.css("opacity", "1");
    $tawitawipin.css("transform", "translateY(0px)");
    $tawitawipath.css("mix-blend-mode", "color");
  },
  function () {
    $tawitawipin.css("visibility", "hidden");
    $tawitawipin.css("opacity", "0");
    $tawitawipin.css("transform", "translateY(-20px)");
    $tawitawipath.css("mix-blend-mode", "normal");
  }
);
