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

var popup = document.querySelectorAll(".popup");
var blur = document.getElementById("blur");

const batangas = document.querySelector(".batangas");
function showBatangas() {
  batangas.classList.add("open");
  blur.classList.toggle("active");
}
const quezon = document.querySelector(".quezon");
function showQuezon() {
  quezon.classList.add("open");
  blur.classList.toggle("active");
}
const laguna = document.querySelector(".laguna");
function showLaguna() {
  laguna.classList.add("open");
  blur.classList.toggle("active");
}
const cavite = document.querySelector(".cavite");
function showCavite() {
  cavite.classList.add("open");
  blur.classList.toggle("active");
}
const rizal = document.querySelector(".rizal");
function showRizal() {
  rizal.classList.add("open");
  blur.classList.toggle("active");
}
const manila = document.querySelector(".manila");
function showManila() {
  manila.classList.add("open");
  blur.classList.toggle("active");
}
const bulacan = document.querySelector(".bulacan");
function showBulacan() {
  bulacan.classList.add("open");
  blur.classList.toggle("active");
}
const aurora = document.querySelector(".aurora");
function showAurora() {
  aurora.classList.add("open");
  blur.classList.toggle("active");
}
const nuevaEcija = document.querySelector(".nuevaEcija");
function showNuevaEcija() {
  nuevaEcija.classList.add("open");
  blur.classList.toggle("active");
}
const pampanga = document.querySelector(".pampanga");
function showPampanga() {
  pampanga.classList.add("open");
  blur.classList.toggle("active");
}
const bataan = document.querySelector(".bataan");
function showBataan() {
  bataan.classList.add("open");
  blur.classList.toggle("active");
}
const tarlac = document.querySelector(".tarlac");
function showTarlac() {
  tarlac.classList.add("open");
  blur.classList.toggle("active");
}
const zambales = document.querySelector(".zambales");
function showZambales() {
  zambales.classList.add("open");
  blur.classList.toggle("active");
}
const pangasinan = document.querySelector(".pangasinan");
function showPangasinan() {
  pangasinan.classList.add("open");
  blur.classList.toggle("active");
}
const laUnion = document.querySelector(".laUnion");
function showLaUnion() {
  laUnion.classList.add("open");
  blur.classList.toggle("active");
}
const ilocosSur = document.querySelector(".ilocosSur");
function showIlocosSur() {
  ilocosSur.classList.add("open");
  blur.classList.toggle("active");
}

function showIlocosNorte() {
  document.querySelector(".ilocosNorte").classList.add("open");
  blur.classList.toggle("active");
}

const ifugao = document.querySelector(".ifugao");
function showIfugao() {
  ifugao.classList.add("open");
  blur.classList.toggle("active");
}
const benguet = document.querySelector(".benguet");
function showBenguet() {
  benguet.classList.add("open");
  blur.classList.toggle("active");
}
const mtProvince = document.querySelector(".mtProvince");
function showMtProvince() {
  mtProvince.classList.add("open");
  blur.classList.toggle("active");
}
const kalinga = document.querySelector(".kalinga");
function showKalinga() {
  kalinga.classList.add("open");
  blur.classList.toggle("active");
}
const abra = document.querySelector(".abra");
function showAbra() {
  abra.classList.add("open");
  blur.classList.toggle("active");
}
const apayao = document.querySelector(".apayao");
function showApayao() {
  apayao.classList.add("open");
  blur.classList.toggle("active");
}
const nuevaVizcaya = document.querySelector(".nuevaVizcaya");
function showNuevaVizcaya() {
  nuevaVizcaya.classList.add("open");
  blur.classList.toggle("active");
}
const quirino = document.querySelector(".quirino");
function showQuirino() {
  quirino.classList.add("open");
  blur.classList.toggle("active");
}
const isabela = document.querySelector(".isabela");
function showIsabela() {
  isabela.classList.add("open");
  blur.classList.toggle("active");
}
const cagayan = document.querySelector(".cagayan");
function showCagayan() {
  cagayan.classList.add("open");
  blur.classList.toggle("active");
}
const marinduque = document.querySelector(".marinduque");
function showMarinduque() {
  marinduque.classList.add("open");
  blur.classList.toggle("active");
}
const orientalMindoro = document.querySelector(".orientalMindoro");
function showOrientalMindoro() {
  orientalMindoro.classList.add("open");
  blur.classList.toggle("active");
}
const occidentalMindoro = document.querySelector(".occidentalMindoro");
function showOccidentalMindoro() {
  occidentalMindoro.classList.add("open");
  blur.classList.toggle("active");
}
const palawan = document.querySelector(".palawan");
function showPalawan() {
  palawan.classList.add("open");
  blur.classList.toggle("active");
}
const romblon = document.querySelector(".romblon");
function showRomblon() {
  romblon.classList.add("open");
  blur.classList.toggle("active");
}
const camarinesNorte = document.querySelector(".camarinesNorte");
function showCamarinesNorte() {
  camarinesNorte.classList.add("open");
  blur.classList.toggle("active");
}
const camarinesSur = document.querySelector(".camarinesSur");
function showCamarinesSur() {
  camarinesSur.classList.add("open");
  blur.classList.toggle("active");
}
const catanduanes = document.querySelector(".catanduanes");
function showCatanduanes() {
  catanduanes.classList.add("open");
  blur.classList.toggle("active");
}
const albay = document.querySelector(".albay");
function showAlbay() {
  albay.classList.add("open");
  blur.classList.toggle("active");
}
const sorsogon = document.querySelector(".sorsogon");
function showSorsogon() {
  sorsogon.classList.add("open");
  blur.classList.toggle("active");
}
const masbate = document.querySelector(".masbate");
function showMasbate() {
  masbate.classList.add("open");
  blur.classList.toggle("active");
}
const northernSamar = document.querySelector(".northernSamar");
function showNorthernSamar() {
  northernSamar.classList.add("open");
  blur.classList.toggle("active");
}
const easternSamar = document.querySelector(".easternSamar");
function showEasternSamar() {
  easternSamar.classList.add("open");
  blur.classList.toggle("active");
}
const samar = document.querySelector(".samar");
function showSamar() {
  samar.classList.add("open");
  blur.classList.toggle("active");
}
const leyte = document.querySelector(".leyte");
function showLeyte() {
  leyte.classList.add("open");
  blur.classList.toggle("active");
}
const biliran = document.querySelector(".biliran");
function showBiliran() {
  biliran.classList.add("open");
  blur.classList.toggle("active");
}
const southernLeyte = document.querySelector(".southernLeyte");
function showSouthernLeyte() {
  southernLeyte.classList.add("open");
  blur.classList.toggle("active");
}
const cebu = document.querySelector(".cebu");
function showCebu() {
  cebu.classList.add("open");
  blur.classList.toggle("active");
}
const bohol = document.querySelector(".bohol");
function showBohol() {
  bohol.classList.add("open");
  blur.classList.toggle("active");
}
const siquijor = document.querySelector(".siquijor");
function showSiquijor() {
  siquijor.classList.add("open");
  blur.classList.toggle("active");
}
const negrosOriental = document.querySelector(".negrosOriental");
function showNegrosOriental() {
  negrosOriental.classList.add("open");
  blur.classList.toggle("active");
}
const negrosOccidental = document.querySelector(".negrosOccidental");
function showNegrosOccidental() {
  negrosOccidental.classList.add("open");
  blur.classList.toggle("active");
}
const guimaras = document.querySelector(".guimaras");
function showGuimaras() {
  guimaras.classList.add("open");
  blur.classList.toggle("active");
}
const iloilo = document.querySelector(".iloilo");
function showIloilo() {
  iloilo.classList.add("open");
  blur.classList.toggle("active");
}
const capiz = document.querySelector(".capiz");
function showCapiz() {
  capiz.classList.add("open");
  blur.classList.toggle("active");
}
const aklan = document.querySelector(".aklan");
function showAklan() {
  aklan.classList.add("open");
  blur.classList.toggle("active");
}
const antique = document.querySelector(".antique");
function showAntique() {
  antique.classList.add("open");
  blur.classList.toggle("active");
}
const surigaoDelNorte = document.querySelector(".surigaoDelNorte");
function showSurigaoDelNorte() {
  surigaoDelNorte.classList.add("open");
  blur.classList.toggle("active");
}
const surigaoDelSur = document.querySelector(".surigaoDelSur");
function showSurigaoDelSur() {
  surigaoDelSur.classList.add("open");
  blur.classList.toggle("active");
}
const agusanDelNorte = document.querySelector(".agusanDelNorte");
function showAgusanDelNorte() {
  agusanDelNorte.classList.add("open");
  blur.classList.toggle("active");
}
const agusanDelSur = document.querySelector(".agusanDelSur");
function showAgusanDelSur() {
  agusanDelSur.classList.add("open");
  blur.classList.toggle("active");
}
const davaoOriental = document.querySelector(".davaoOriental");
function showDavaoOriental() {
  davaoOriental.classList.add("open");
  blur.classList.toggle("active");
}
const davaoDelNorte = document.querySelector(".davaoDelNorte");
function showDavaoDelNorte() {
  davaoDelNorte.classList.add("open");
  blur.classList.toggle("active");
}
const davaoCity = document.querySelector(".davaoCity");
function showDavaoCity() {
  davaoCity.classList.add("open");
  blur.classList.toggle("active");
}
const davaoDelSur = document.querySelector(".davaoDelSur");
function showDavaoDelSur() {
  davaoDelSur.classList.add("open");
  blur.classList.toggle("active");
}
const camiguin = document.querySelector(".camiguin");
function showCamiguin() {
  camiguin.classList.add("open");
  blur.classList.toggle("active");
}
const misamisOriental = document.querySelector(".misamisOriental");
function showMisamisOriental() {
  misamisOriental.classList.add("open");
  blur.classList.toggle("active");
}
const bukidnon = document.querySelector(".bukidnon");
function showBukidnon() {
  bukidnon.classList.add("open");
  blur.classList.toggle("active");
}
const misamisOccidental = document.querySelector(".misamisOccidental");
function showMisamisOccidental() {
  misamisOccidental.classList.add("open");
  blur.classList.toggle("active");
}
const lanaoDelNorte = document.querySelector(".lanaoDelNorte");
function showLanaoDelNorte() {
  lanaoDelNorte.classList.add("open");
  blur.classList.toggle("active");
}
const lanaoDelSur = document.querySelector(".lanaoDelSur");
function showLanaoDelSur() {
  lanaoDelSur.classList.add("open");
  blur.classList.toggle("active");
}
const maguindanao = document.querySelector(".maguindanao");
function showMaguindanao() {
  maguindanao.classList.add("open");
  blur.classList.toggle("active");
}
const cotabato = document.querySelector(".cotabato");
function showCotabato() {
  cotabato.classList.add("open");
  blur.classList.toggle("active");
}
const sultanKudarat = document.querySelector(".sultanKudarat");
function showSultanKudarat() {
  sultanKudarat.classList.add("open");
  blur.classList.toggle("active");
}
const southCotabato = document.querySelector(".southCotabato");
function showSouthCotabato() {
  southCotabato.classList.add("open");
  blur.classList.toggle("active");
}
const sarangani = document.querySelector(".sarangani");
function showSarangani() {
  sarangani.classList.add("open");
  blur.classList.toggle("active");
}
const zamboangaDelNorte = document.querySelector(".zamboangaDelNorte");
function showZamboangaDelNorte() {
  zamboangaDelNorte.classList.add("open");
  blur.classList.toggle("active");
}
const zamboangaDelSur = document.querySelector(".zamboangaDelSur");
function showZamboangaDelSur() {
  zamboangaDelSur.classList.add("open");
  blur.classList.toggle("active");
}
const zamboangaCity = document.querySelector(".zamboangaCity");
function showZamboangaCity() {
  zamboangaCity.classList.add("open");
  blur.classList.toggle("active");
}
const zamboangaSibugay = document.querySelector(".zamboangaSibugay");
function showZamboangaSibugay() {
  zamboangaSibugay.classList.add("open");
  blur.classList.toggle("active");
}
const basilan = document.querySelector(".basilan");
function showBasilan() {
  basilan.classList.add("open");
  blur.classList.toggle("active");
}
const sulu = document.querySelector(".sulu");
function showSulu() {
  sulu.classList.add("open");
  blur.classList.toggle("active");
}
const tawitawi = document.querySelector(".tawitawi");
function showTawitawi() {
  tawitawi.classList.add("open");
  blur.classList.toggle("active");
}
const batanes = document.querySelector(".batanes");
function showBatanes() {
  batanes.classList.add("open");
  blur.classList.toggle("active");
}
const dinagat = document.querySelector(".dinagat");
function showDinagat() {
  dinagat.classList.add("open");
  blur.classList.toggle("active");
}
const davaoOccidental = document.querySelector(".davaoOccidental");
function showDavaoOccidental() {
  davaoOccidental.classList.add("open");
  blur.classList.toggle("active");
}
function hidePopup() {
  for (var i = 0; i < popup.length; i++) {
    popup[i].classList.remove("open");
  }
  blur.classList.toggle("active");
}

const div = document.createElement("div");
div.className = "svg";

div.innerHTML = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   inkscape:version="1.0 (4035a4fb49, 2020-05-01)"
   sodipodi:docname="pin.svg"
   viewBox="0 0 32.603359 37.192037"
   width="2vw"
   preserveAspectRatio="xMidYMid meet"
   id="svg1573"
   version="1.1">
  <metadata
     id="metadata1579">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <defs
     id="defs1577" />
  <sodipodi:namedview
     inkscape:current-layer="g37"
     inkscape:window-maximized="1"
     inkscape:window-y="-8"
     inkscape:window-x="-8"
     inkscape:cy="13.601619"
     inkscape:cx="18.39325"
     inkscape:zoom="8.6980985"
     showgrid="false"
     id="namedview1575"
     inkscape:window-height="837"
     inkscape:window-width="1600"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0"
     guidetolerance="10"
     gridtolerance="10"
     objecttolerance="10"
     borderopacity="1"
     bordercolor="#666666"
     pagecolor="#ffffff"
     inkscape:document-rotation="0"
     fit-margin-top="0"
     fit-margin-left="0"
     fit-margin-right="0"
     fit-margin-bottom="0"
     lock-margins="true"
     scale-x="1"
     inkscape:pagecheckerboard="true"
     inkscape:showpageshadow="false"
     showborder="false" />
  <g
     id="g1581"
     inkscape:label="Image"
     inkscape:groupmode="layer"
     transform="translate(-7.0413781,-7.7604203)">
    <g
       id="g1600"
       transform="rotate(-0.55819479,19.993702,22.525281)">
      <g
         id="g37"
         transform="matrix(0.82360786,-3.3410713e-5,-3.3410713e-5,0.82703686,6.9558242,7.809364)">
        <g
           transform="matrix(0.2140371,0,0,0.20972488,-62.694007,-22.617228)"
           id="g1585">
          <path
             id="path1589"
             d="m 382.97937,320.13199 c -0.47877,-1.27505 -2.11175,-6.14328 -3.62883,-10.81828 -4.00108,-12.32958 -11.03048,-30.07927 -16.23721,-41 -2.49115,-5.225 -5.61396,-11.90942 -6.93959,-14.85426 -1.32562,-2.94485 -4.64515,-9.0677 -7.37672,-13.60635 -2.73158,-4.53864 -4.9665,-8.53966 -4.9665,-8.89114 0,-0.35149 -3.53865,-6.15363 -7.86366,-12.89366 -16.63459,-25.92305 -42.13634,-68.76483 -42.13634,-70.78711 0,-1.60286 35.43373,-36.96748 37.03972,-36.96748 0.92763,0 3.69816,2.1375 6.15675,4.75 7.84335,8.33437 27.53821,26.25 28.85692,26.25 0.69971,0 5.27238,-4.05 10.1615,-9 5.74855,-5.82014 9.6536,-9 11.05251,-9 1.38661,0 4.96667,2.87205 9.97213,8 5.47591,5.60991 8.52615,8 10.20961,8 1.68221,0 5.22037,-2.76835 11.82217,-9.25 13.39611,-13.1523 22.74615,-21.75 23.65322,-21.75 1.55854,0 36.07512,34.37654 36.0628,35.91649 -0.007,0.87093 -1.2696,4.05851 -2.80586,7.08351 -3.74342,7.37107 -24.91392,42.78106 -37.06781,62 -20.85609,32.97972 -32.74786,57.41405 -45.01813,92.5 -4.8156,13.76986 -5.9078,16.04436 -7.83586,16.31828 -1.59182,0.22615 -2.49231,-0.35279 -3.11082,-2 z"
             style="fill:#ffffff" />
        </g>
        <g
           id="g66">
          <path
             style="fill:#5094cb"
             d="m 369.87843,270.56371 c -0.53297,-0.9625 -4.94793,-9.625 -9.81102,-19.25 -4.86309,-9.625 -14.78084,-27.13065 -22.03944,-38.90145 -7.2586,-11.77079 -13.19745,-21.82087 -13.19745,-22.33351 0,-1.27091 60.24351,-62.73396 61.50615,-62.75126 1.909,-0.0262 61.97414,60.9084 60.96578,61.84823 -0.53456,0.49823 -7.49693,1.65592 -15.47193,2.57265 -40.61918,4.66918 -67.46102,13.58772 -72.43377,24.06702 -3.21598,6.77716 -1.82839,9.64014 10.41953,21.49832 8.58754,8.31428 11.10382,11.3847 12.08796,14.75 1.69834,5.80756 0.0662,10.87474 -5.19835,16.13934 -4.59108,4.59108 -5.43149,4.88166 -6.82746,2.36066 z m 24.33718,-120.5 c 0.37697,-1.19479 1.58403,-1.75 3.80464,-1.75 h 3.25249 l -6.44222,-6.5 c -3.54322,-3.575 -7.11717,-6.5 -7.94211,-6.5 -1.56458,0 -13.05789,10.8086 -13.05789,12.27997 0,0.46342 2.0308,0.53804 4.51289,0.16583 4.31024,-0.64636 4.72238,-0.48366 9.17799,3.62338 4.99669,4.60579 4.81342,4.64191 6.69421,-1.31918 z m 15.53649,93.17334 c -1.75705,-1.71757 -5.7207,-4.71241 -8.80811,-6.6552 -20.58973,-12.95635 -18.13567,-21.91441 8.38653,-30.61342 7.92522,-2.59939 25.96936,-6.65472 29.61008,-6.65472 1.03946,0 1.88992,0.4441 1.88992,0.98689 0,0.5428 -3.31688,6.2803 -7.37084,12.75 -4.05396,6.46971 -9.9442,16.37392 -13.08941,22.00935 -3.14522,5.63544 -6.10219,10.48333 -6.57105,10.7731 -0.46886,0.28978 -2.29007,-0.87842 -4.04712,-2.596 z m -90.1609,-61.06214 c -2.82158,-3.77732 -18.99896,-31.34427 -20.08152,-34.21976 -0.55332,-1.46973 2.47852,-5.07855 14.49208,-17.25 8.35549,-8.46529 15.77101,-15.39144 16.47894,-15.39144 1.36148,0 29.22602,26.02739 30.71719,28.69198 0.67807,1.21163 -3.59852,6.03299 -19.1112,21.54568 l -19.98475,19.98475 z m 18.60735,-50.8612 c 1.99758,0 3.63197,-0.4151 3.63197,-0.92245 0,-0.97516 -10.02048,-10.07755 -11.09399,-10.07755 -1.2003,0 -9.90601,8.64677 -9.90601,9.83894 0,0.75371 0.85871,0.98364 2.31163,0.61898 1.81825,-0.45635 2.56789,-0.0178 3.51227,2.05493 l 1.20063,2.63511 3.35577,-2.07398 c 1.84567,-1.14069 4.99015,-2.07398 6.98773,-2.07398 z m 91.88197,32.76049 c -10.5875,-10.60359 -19.25,-19.78177 -19.25,-20.39595 0,-1.27828 30.31621,-30.36454 31.64854,-30.36454 0.48161,0 7.84521,6.98063 16.36356,15.51251 l 15.4879,15.51251 -2.75135,5.23749 c -6.15794,11.72232 -19.56374,33.25512 -20.86086,33.50736 -0.76329,0.14843 -10.05029,-8.40579 -20.63779,-19.00938 z m 16.25,-32.76049 c 0.45751,-1.44149 1.51303,-2 3.7798,-2 h 3.14502 l -4.92482,-5 c -2.70865,-2.75 -5.52351,-5 -6.25525,-5 -1.57579,0 -11.24475,8.82881 -11.24475,10.26768 0,0.57014 1.43646,0.7609 3.3686,0.44736 2.31395,-0.37551 4.27072,0.0303 6.25,1.29605 3.7815,2.41834 5.11112,2.41584 5.8814,-0.0111 z"
             id="path1587"
             transform="matrix(0.2140371,0,0,0.20972488,-62.694007,-22.617228)" />
         
        </g>
      </g>
    </g>
  </g>
</svg>

  `;

document.getElementById("batanespin").appendChild(div.cloneNode(true));
document.getElementById("ilocosnortepin").appendChild(div.cloneNode(true));
document.getElementById("apayaopin").appendChild(div.cloneNode(true));
document.getElementById("cagayanpin").appendChild(div.cloneNode(true));
document.getElementById("ilocossurpin").appendChild(div.cloneNode(true));
document.getElementById("abrapin").appendChild(div.cloneNode(true));
document.getElementById("kalingapin").appendChild(div.cloneNode(true));
document.getElementById("mtprovincepin").appendChild(div.cloneNode(true));
document.getElementById("ifugaopin").appendChild(div.cloneNode(true));
document.getElementById("isabelapin").appendChild(div.cloneNode(true));
document.getElementById("launionpin").appendChild(div.cloneNode(true));
document.getElementById("benguetpin").appendChild(div.cloneNode(true));
document.getElementById("nuevavizcayapin").appendChild(div.cloneNode(true));
document.getElementById("quirinopin").appendChild(div.cloneNode(true));
document.getElementById("aurorapin").appendChild(div.cloneNode(true));
document.getElementById("nuevaecijapin").appendChild(div.cloneNode(true));
document.getElementById("pangasinanpin").appendChild(div.cloneNode(true));
document.getElementById("tarlacpin").appendChild(div.cloneNode(true));
document.getElementById("zambalespin").appendChild(div.cloneNode(true));
document.getElementById("pampangapin").appendChild(div.cloneNode(true));
document.getElementById("bulacanpin").appendChild(div.cloneNode(true));
document.getElementById("bataanpin").appendChild(div.cloneNode(true));
document.getElementById("rizalpin").appendChild(div.cloneNode(true));
document.getElementById("cavitepin").appendChild(div.cloneNode(true));
document.getElementById("batangaspin").appendChild(div.cloneNode(true));
document.getElementById("lagunapin").appendChild(div.cloneNode(true));
document.getElementById("quezonpin").appendChild(div.cloneNode(true));
document.getElementById("camarinesnortepin").appendChild(div.cloneNode(true));
document.getElementById("camarinessurpin").appendChild(div.cloneNode(true));
document.getElementById("catanduanespin").appendChild(div.cloneNode(true));
document.getElementById("albaypin").appendChild(div.cloneNode(true));
document.getElementById("sorsogonpin").appendChild(div.cloneNode(true));
document.getElementById("masbatepin").appendChild(div.cloneNode(true));
document.getElementById("romblonpin").appendChild(div.cloneNode(true));
document.getElementById("marinduquepin").appendChild(div.cloneNode(true));
document.getElementById("orientalmindoropin").appendChild(div.cloneNode(true));
document
  .getElementById("occidentalmindoropin")
  .appendChild(div.cloneNode(true));
document.getElementById("palawanpin").appendChild(div.cloneNode(true));
document.getElementById("antiquepin").appendChild(div.cloneNode(true));
document.getElementById("aklanpin").appendChild(div.cloneNode(true));
document.getElementById("capizpin").appendChild(div.cloneNode(true));
document.getElementById("iloilopin").appendChild(div.cloneNode(true));
document.getElementById("guimaraspin").appendChild(div.cloneNode(true));
document.getElementById("negrosoccidentalpin").appendChild(div.cloneNode(true));
document.getElementById("negrosorientalpin").appendChild(div.cloneNode(true));
document.getElementById("cebupin").appendChild(div.cloneNode(true));
document.getElementById("boholpin").appendChild(div.cloneNode(true));
document.getElementById("siquijorpin").appendChild(div.cloneNode(true));
document.getElementById("southernleytepin").appendChild(div.cloneNode(true));
document.getElementById("leytepin").appendChild(div.cloneNode(true));
document.getElementById("biliranpin").appendChild(div.cloneNode(true));
document.getElementById("samarpin").appendChild(div.cloneNode(true));
document.getElementById("northernsamarpin").appendChild(div.cloneNode(true));
document.getElementById("easternsamarpin").appendChild(div.cloneNode(true));
document.getElementById("dinagatpin").appendChild(div.cloneNode(true));
document.getElementById("surigaodelnortepin").appendChild(div.cloneNode(true));
document.getElementById("surigaodelsurpin").appendChild(div.cloneNode(true));
document.getElementById("agusandelnortepin").appendChild(div.cloneNode(true));
document.getElementById("agusandelsurpin").appendChild(div.cloneNode(true));
document.getElementById("davaoorientalpin").appendChild(div.cloneNode(true));
document.getElementById("davaodeoropin").appendChild(div.cloneNode(true));
document.getElementById("davaodelnortepin").appendChild(div.cloneNode(true));
document.getElementById("davaocitypin").appendChild(div.cloneNode(true));
document.getElementById("davaodelsurpin").appendChild(div.cloneNode(true));
document.getElementById("davaooccidentalpin").appendChild(div.cloneNode(true));
document.getElementById("saranganipin").appendChild(div.cloneNode(true));
document.getElementById("southcotabatopin").appendChild(div.cloneNode(true));
document.getElementById("sultankudaratpin").appendChild(div.cloneNode(true));
document.getElementById("maguindanaopin").appendChild(div.cloneNode(true));
document.getElementById("cotabatopin").appendChild(div.cloneNode(true));
document.getElementById("bukidnonpin").appendChild(div.cloneNode(true));
document.getElementById("misamisorientalpin").appendChild(div.cloneNode(true));
document.getElementById("camiguinpin").appendChild(div.cloneNode(true));
document.getElementById("lanaodelsurpin").appendChild(div.cloneNode(true));
document.getElementById("lanaodelnortepin").appendChild(div.cloneNode(true));
document
  .getElementById("misamisoccidentalpin")
  .appendChild(div.cloneNode(true));
document
  .getElementById("zamboangadelnortepin")
  .appendChild(div.cloneNode(true));
document.getElementById("zamboangadelsurpin").appendChild(div.cloneNode(true));
document.getElementById("zamboangasibugaypin").appendChild(div.cloneNode(true));
document.getElementById("zamboangacitypin").appendChild(div.cloneNode(true));
document.getElementById("basilanpin").appendChild(div.cloneNode(true));
document.getElementById("sulupin").appendChild(div.cloneNode(true));
document.getElementById("tawitawipin").appendChild(div.cloneNode(true));
