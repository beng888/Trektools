$(".pin").click(function () {
  blur.classList.toggle("active");
  event.preventDefault();
});
$(document).click(function (event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".mapmodal,.pin").length) {
    $("body").find(".mapmodal").removeClass("visible");
    $(".mapdiv").removeClass("active");
    event.preventDefault();
  }
});
$(".ilocos-norte-open-modal").click(function () {
  $(".ilocosnortemodal").addClass("visible");
  setTimeout(function () {
    ilocosnortemap.invalidateSize();
  }, 10);
});
$(".ilocos-sur-open-modal").click(function () {
  $(".ilocossurmodal").addClass("visible");
  setTimeout(function () {
    ilocossurmap.invalidateSize();
  }, 10);
});
$(".launion-open-modal").click(function () {
  $(".launionmodal").addClass("visible");
  setTimeout(function () {
    launionmap.invalidateSize();
  }, 10);
});
$(".pangasinan-open-modal").click(function () {
  $(".pangasinanmodal").addClass("visible");
  setTimeout(function () {
    pangasinanmap.invalidateSize();
  }, 10);
});
$(".apayao-open-modal").click(function () {
  $(".apayaomodal").addClass("visible");
  setTimeout(function () {
    apayaomap.invalidateSize();
  }, 10);
});
$(".abra-open-modal").click(function () {
  $(".abramodal").addClass("visible");
  setTimeout(function () {
    abramap.invalidateSize();
  }, 10);
});
$(".kalinga-open-modal").click(function () {
  $(".kalingamodal").addClass("visible");
  setTimeout(function () {
    kalingamap.invalidateSize();
  }, 10);
});
$(".mtprovince-open-modal").click(function () {
  $(".mtprovincemodal").addClass("visible");
  setTimeout(function () {
    mtprovincemap.invalidateSize();
  }, 10);
});
$(".ifugao-open-modal").click(function () {
  $(".ifugaomodal").addClass("visible");
  setTimeout(function () {
    ifugaomap.invalidateSize();
  }, 10);
});
$(".benguet-open-modal").click(function () {
  $(".benguetmodal").addClass("visible");
  setTimeout(function () {
    benguetmap.invalidateSize();
  }, 10);
});
$(".batanes-open-modal").click(function () {
  $(".batanesmodal").addClass("visible");
  setTimeout(function () {
    batanesmap.invalidateSize();
  }, 10);
});
$(".cagayan-open-modal").click(function () {
  $(".cagayanmodal").addClass("visible");
  setTimeout(function () {
    cagayanmap.invalidateSize();
  }, 10);
});
$(".isabela-open-modal").click(function () {
  $(".isabelamodal").addClass("visible");
  setTimeout(function () {
    isabelamap.invalidateSize();
  }, 10);
});
$(".quirino-open-modal").click(function () {
  $(".quirinomodal").addClass("visible");
  setTimeout(function () {
    quirinomap.invalidateSize();
  }, 10);
});
$(".nuevavizcaya-open-modal").click(function () {
  $(".nuevavizcayamodal").addClass("visible");
  setTimeout(function () {
    nuevavizcayamap.invalidateSize();
  }, 10);
});
$(".aurora-open-modal").click(function () {
  $(".auroramodal").addClass("visible");
  setTimeout(function () {
    auroramap.invalidateSize();
  }, 10);
});
$(".nuevaecija-open-modal").click(function () {
  $(".nuevaecijamodal").addClass("visible");
  setTimeout(function () {
    nuevaecijamap.invalidateSize();
  }, 10);
});
$(".tarlac-open-modal").click(function () {
  $(".tarlacmodal").addClass("visible");
  setTimeout(function () {
    tarlacmap.invalidateSize();
  }, 10);
});
$(".zambales-open-modal").click(function () {
  $(".zambalesmodal").addClass("visible");
  setTimeout(function () {
    zambalesmap.invalidateSize();
  }, 10);
});
$(".bataan-open-modal").click(function () {
  $(".bataanmodal").addClass("visible");
  setTimeout(function () {
    bataanmap.invalidateSize();
  }, 10);
});
$(".pampanga-open-modal").click(function () {
  $(".pampangamodal").addClass("visible");
  setTimeout(function () {
    pampangamap.invalidateSize();
  }, 10);
});
$(".bulacan-open-modal").click(function () {
  $(".bulacanmodal").addClass("visible");
  setTimeout(function () {
    bulacanmap.invalidateSize();
  }, 10);
});
var ilocosnortemap = L.map("ilocosnortemap").setView([18.228, 120.6464], 9),
  ilocossurmap = L.map("ilocossurmap").setView([17.2838, 120.5502], 9),
  launionmap = L.map("launionmap").setView([16.5, 120.4167], 9),
  pangasinanmap = L.map("pangasinanmap").setView([15.8949055, 120.2863183], 9),
  apayaomap = L.map("apayaomap").setView([18.0120304, 121.1710389], 9),
  abramap = L.map("abramap").setView([17.5951122, 120.7982528], 9),
  kalingamap = L.map("kalingamap").setView([17.4740422, 121.3541631], 9),
  mtprovincemap = L.map("mtprovincemap").setView([17.0663429, 121.03351], 9),
  ifugaomap = L.map("ifugaomap").setView([16.8330792, 121.1710389], 9),
  benguetmap = L.map("benguetmap").setView([16.5577257, 120.8039474], 9),
  batanesmap = L.map("batanesmap").setView([20.4485074, 121.9708129], 9),
  cagayanmap = L.map("cagayanmap").setView([18.609, 121.705], 8),
  isabelamap = L.map("isabelamap").setView([16.9753758, 121.8107079], 9),
  quirinomap = L.map("quirinomap").setView([16.2700424, 121.5370003], 9),
  nuevavizcayamap = L.map("nuevavizcayamap").setView(
    [16.3301107, 121.1710389],
    9
  ),
  auroramap = L.map("auroramap").setView([16.0773636, 121.7692535], 9),
  nuevaecijamap = L.map("nuevaecijamap").setView([15.578375, 121.1112615], 9),
  tarlacmap = L.map("tarlacmap").setView([15.4470354, 120.469642], 9),
  zambalesmap = L.map("zambalesmap").setView([15.5081766, 119.9697808], 9),
  bataanmap = L.map("bataanmap").setView([14.6416842, 120.4818446], 9),
  pampangamap = L.map("pampangamap").setView([15.079409, 120.6199895], 9),
  bulacanmap = L.map("bulacanmap").setView([14.7942735, 120.8799008], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(ilocosnortemap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(ilocossurmap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(launionmap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(pangasinanmap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(apayaomap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(abramap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(kalingamap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(mtprovincemap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(ifugaomap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(benguetmap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(batanesmap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(cagayanmap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(isabelamap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(quirinomap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(nuevavizcayamap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(auroramap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(nuevaecijamap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(tarlacmap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(zambalesmap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(bataanmap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(pampangamap);
L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(bulacanmap);
var magentaIcon = L.icon({
  iconUrl: "magentapin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
var redIcon = L.icon({
  iconUrl: "redpin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
var orangeIcon = L.icon({
  iconUrl: "orangepin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
var tealIcon = L.icon({
  iconUrl: "tealpin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
var cyanIcon = L.icon({
  iconUrl: "cyanpin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});
var blueIcon = L.icon({
  iconUrl: "bluepin.svg",
  iconSize: [34.948795, 25.066328],
  iconAnchor: [18, 30],
  popupAnchor: [0, -25],
});

L.marker([18.0126395, 120.9381465], { icon: redIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sicapoo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sicapoo (Lvl 3, Lvl 7)</p> <p>Elev:	2361 m, Prom:	1585 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15592.017282873458!2d120.93041182895327!3d18.01335320930838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f20ff17ee0a47%3A0x2c972d543d55bcc2!2sMount%20Sicapoo!5e1!3m2!1sen!2sph!4v1597934208777!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.9430372, 120.9216124], { icon: redIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Burnay" target= "blank"><img  title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Burnay</p> <p>Elev:	2100 m, Prom:	314 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15598.028597794537!2d120.91541192894157!3d17.94529766781878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f1fbea8ccd911%3A0x7ba1645f91b7c0ef!2sMount%20Burnay!5e1!3m2!1sen!2sph!4v1597934178049!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2599994, 120.9213473], { icon: orangeIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagdubaduban" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagdubaduban</p> <p>Elev:	1871 m, Prom:	536 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15570.045031862053!2d120.91263412899612!3d18.26001987823067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f2a5d009fc2a5%3A0x98b5f09a174e5e69!2sMount%20Nagdubaduban!5e1!3m2!1sen!2sph!4v1597934131784!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2590391, 120.8999089], { icon: orangeIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aganmala" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aganmala</p> <p>Elev:	1778 m, Prom:	102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15569.970319424297!2d120.89013412899631!3d18.260853128125067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f2a7779adbbd1%3A0xc9ec6a3a072c4956!2sMount%20Aganmala!5e1!3m2!1sen!2sph!4v1597934107551!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0241882, 120.9202336], { icon: orangeIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balbalite</p> <p>Elev:	1745 m, Prom:	1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16392.666793823395!2d120.91139022763262!3d18.024193267336127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAxJzI3LjEiTiAxMjDCsDU1JzEyLjgiRQ!5e1!3m2!1sen!2sph!4v1597934087196!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2786762, 120.9340958], { icon: orangeIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Mukmukoroya" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mukmukcroya</p> <p>Elev:	1731 m, Prom:	173 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15568.375503604757!2d120.92541192899942!3d18.27863097587109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f2ae4f6a560f7%3A0xa9aaaccfb7485889!2sMount%20Mukmukoroya!5e1!3m2!1sen!2sph!4v1597934039806!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0140127, 120.9004925], { icon: orangeIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bubuos</p> <p>Elev:	1539 m, Prom:	111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16916.140228884466!2d120.89153921925535!3d18.014017770706968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAwJzUwLjUiTiAxMjDCsDU0JzAxLjgiRQ!5e1!3m2!1sen!2sph!4v1597934017831!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.034948, 120.8592096], { icon: orangeIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Timarid</p> <p>Elev:	1516 m, Prom:	418 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16213.106855516786!2d120.85034977663018!3d18.034953064383824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAyJzA1LjgiTiAxMjDCsDUxJzMzLjIiRQ!5e1!3m2!1sen!2sph!4v1597933958168!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1431799, 120.9488565], { icon: tealIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Casiama" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Casiama</p> <p>Elev:	1477 m, Prom:	44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15580.498056015052!2d120.94013412897571!3d18.14307544300986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f288438a17879%3A0x7a9e4b8e971b429f!2sMount%20Casiama!5e1!3m2!1sen!2sph!4v1597933907186!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3531258, 120.9125855], { icon: tealIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Linao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Linao</p> <p>Elev:	1465 m, Prom:	188 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15561.505751417943!2d120.90207852901291!3d18.355019866164692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d59d85910477%3A0x952b4e208963f8dd!2sMount%20Linao!5e1!3m2!1sen!2sph!4v1597933888798!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.887222, 120.730278], { icon: tealIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cayudungan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cayudungan</p> <p>Elev:	1435 m, Prom:	444 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7851363123755!2d120.72808931489215!3d17.887227092904418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ee599936ffd05%3A0xf7570d7603c8daef!2sMount%20Cayudungan!5e1!3m2!1sen!2sph!4v1597933870196!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0394058, 120.846336], { icon: tealIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Simagaysay</p> <p>Elev:	1339 m, Prom:	71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16670.090803579325!2d120.83745576838278!3d18.039410874599742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAyJzIxLjkiTiAxMjDCsDUwJzQ2LjgiRQ!5e1!3m2!1sen!2sph!4v1597933738025!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.412344, 120.873996], { icon: tealIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pao_(bukid_sa_Pilipinas,_Rehiyon_sa_Ilocos)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pao</p> <p>Elev:	1315 m, Prom:	401 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.090482284755!2d120.86485632902352!3d18.41501980851638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338929ed457ba94d%3A0xc365344ff49c5c66!2sMount%20Pao!5e1!3m2!1sen!2sph!4v1597933669132!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0249499, 120.8780621], { icon: tealIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Saulay</p> <p>Elev:	1286 m, Prom:	118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16375.90416641409!2d120.86925281113697!3d18.024954976500688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAxJzI5LjgiTiAxMjDCsDUyJzQxLjAiRQ!5e1!3m2!1sen!2sph!4v1597933639905!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.5139062, 120.8868109], { icon: tealIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pico de Loro</p> <p>Elev:	1265 m, Prom:	890 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.128083179054!2d120.87818962904113!3d18.513908695864007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3389278e5e162817%3A0x2c796159db5d4a50!2sPico%20de%20Loro!5e1!3m2!1sen!2sph!4v1597933572405!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4015217, 120.8734446], { icon: tealIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Burburan</p> <p>Elev:	1235 m, Prom:	42 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.019311581602!2d120.8637452290217!3d18.404742009828038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3389298ab15f8351%3A0xfaaa8c85b0ba46a7!2sMount%20Burburan!5e1!3m2!1sen!2sph!4v1597933493073!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.8067002, 120.5886002], { icon: tealIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagapu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagapu</p> <p>Elev:	1225 m, Prom:	365 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15610.203987027928!2d120.57985632891787!3d17.80668658506653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ef3ba7cc74dbd%3A0xbc665e2dc5a5629b!2sMount%20Nagapu!5e1!3m2!1sen!2sph!4v1597933472378!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.8435993, 120.6074002], { icon: tealIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naltoot" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naltoot</p> <p>Elev:	1039 m, Prom:	92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15606.967774098684!2d120.59874522892417!3d17.843630980480675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ef21089a2c075%3A0xbec63ab3961b4e81!2sMount%20Naltoot!5e1!3m2!1sen!2sph!4v1597933450541!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.486417, 120.8066502], { icon: cyanIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Quebrada" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Quebrada</p> <p>Elev:	996 m, Prom:	477 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.011269021477!2d120.81568962903937!3d18.5041864971105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33892618e6afaae9%3A0xec379d3db262c199!2sMount%20Quebrada!5e1!3m2!1sen!2sph!4v1597933434114!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0459518, 120.885844], { icon: cyanIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balbalitok</p> <p>Elev:	781 m, Prom:	25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928.530136771058!2d120.87696032321729!3d18.04595686000068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAyJzQ1LjQiTiAxMjDCsDUzJzA5LjAiRQ!5e1!3m2!1sen!2sph!4v1597933389018!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.275, 120.766111], { icon: cyanIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masadsadoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masadsadac</p> <p>Elev:	755 m, Prom:	220 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15568.624797849543!2d120.76207852899893!3d18.27585312622342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ed3b8360af781%3A0x623860dda4d1630d!2sMount%20Masadsadoc!5e1!3m2!1sen!2sph!4v1597933334877!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.548288, 120.8750566], { icon: cyanIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Patapat_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Patapat Mountains</p> <p>Elev:	754 m, Prom:	7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15543.995472054605!2d120.86624522904727!3d18.548353141443332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3389276b10289b19%3A0xebbc347059d59402!2sPatapat%20Mountains!5e1!3m2!1sen!2sph!4v1597933279766!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4247029, 120.73531], { icon: cyanIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Mangrupid" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangrupid</p> <p>Elev:	551 m, Prom:	145 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.211403183015!2d120.72652302902524!3d18.424742007275043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33892dde26b9cf1d%3A0x799a7e2ad175217e!2sMount%20Mangrupid!5e1!3m2!1sen!2sph!4v1597933231830!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.498302, 120.7949058], { icon: blueIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Nagbulean" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagbulean</p> <p>Elev:	434 m, Prom:	92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.540968370347!2d120.78624522903834!3d18.498353147858126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33892f572164c7d9%3A0x2bf9ad5588650b0c!2sMount%20Nagbulean!5e1!3m2!1sen!2sph!4v1597933214258!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.281301, 120.6818972], { icon: blueIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagsabaran" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagsabaran</p> <p>Elev:	407 m, Prom:	187 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15568.12617725367!2d120.67318962899996!3d18.28140877551876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ecdc460479a01%3A0xa984eb8a0a371fc4!2sMount%20Nagsabaran!5e1!3m2!1sen!2sph!4v1597933187397!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3591745, 120.6601013], { icon: blueIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santa_Catalina" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santa Catalina</p> <p>Elev:	285 m, Prom:	19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15561.130243570955!2d120.65152302901365!3d18.359186515634256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3389332b7e220439%3A0x6a5db004de2772c2!2sMount%20Santa%20Catalina!5e1!3m2!1sen!2sph!4v1597933157166!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.595, 120.820278], { icon: blueIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dialao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dialao</p> <p>Elev:	206 m, Prom:	117 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15713.937753136992!2d120.81146761604779!3d18.595005038201805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzQyLjAiTiAxMjDCsDQ5JzEzLjAiRQ!5e1!3m2!1sen!2sph!4v1597933128478!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4, 120.766667], { icon: blueIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Carongranga_Knob" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Carongranga Knob</p> <p>Elev:	162 m, Prom:	8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.445900222481!2d120.75791192902086!3d18.40001981043047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33892c484b26a4d9%3A0x300a11a37df2dc7b!2sMount%20Carongranga%20Knob!5e1!3m2!1sen!2sph!4v1597933072017!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2085846, 120.542807], { icon: blueIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cauit" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cauit</p> <p>Elev: 162 m, Prom:	8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.671240536614!2d120.5337452289871!3d18.208353134770263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ec809cd80a76b%3A0xe68e28901fdc5faf!2sMount%20Cauit!5e1!3m2!1sen!2sph!4v1597933032538!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.9, 120.433333], { icon: blueIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palalao_(bukid_sa_Pilipinas,_lat_17,90,_long_120,43)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palalao</p> <p>Elev: 1226 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15601.762464747866!2d120.42458174590558!3d17.90000508053549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDU0JzAwLjAiTiAxMjDCsDI2JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1597933003684!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.9167155, 120.6911673], { icon: redIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Namandiraan</p> <p>Elev: 1226 m, Prom: 801 </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16390.69464888846!2d120.68270920802404!3d16.916816070436777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391d99e9a774b79%3A0x277d1685fd5db130!2sMt.%20Namandiraan!5e1!3m2!1sen!2sph!4v1597932956992!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.916667, 120.683333], { icon: redIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malaya" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malaya</p> <p>Elev: 2260 m, Prom: 2 </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15686.200639105824!2d120.6745785287717!3d16.916686743066364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391d98a2a688b3b%3A0xfd5aea584706bb38!2sMount%20Malaya!5e1!3m2!1sen!2sph!4v1597932839293!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.9310308, 120.6663144], { icon: redIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Namogoian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Namogoian</p> <p>Elev: 2076 m, Prom: 392 </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15684.904808122208!2d120.65568962877414!3d16.93224224121964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391d9766c9a638f%3A0x81a6ef3b1abd6396!2sMount%20Namogoian!5e1!3m2!1sen!2sph!4v1597932911042!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7470988, 120.6209028], { icon: orangeIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Oten</p> <p>Elev: 1897 m, Prom: 118 </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16450.408774826174!2d120.61206880751496!3d16.747103897303887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ0JzQ5LjYiTiAxMjDCsDM3JzE1LjMiRQ!5e1!3m2!1sen!2sph!4v1597932769877!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.899722, 120.624444], { icon: orangeIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Libo_Libo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Libo Libo</p> <p>Elev: 1758 m, Prom: 755 </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15687.795706466026!2d120.61596742876863!3d16.89752004533982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391db8958bbc845%3A0x67a02d83113cca1e!2sMount%20Libo%20Libo!5e1!3m2!1sen!2sph!4v1597932703710!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.046944, 120.635278], { icon: orangeIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Monserrat_(bukid_sa_Pilipinas,_Rehiyon_sa_Ilocos)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Monserrat</p> <p>Elev: 1754 m, Prom: 440 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15675.31232403136!2d120.62652302879242!3d17.046964427554894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e2727110717a3%3A0x536dde7b899beb79!2sMount%20Monserrat!5e1!3m2!1sen!2sph!4v1597932679133!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.031733, 120.6359097], { icon: orangeIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tuwato</p> <p>Elev: 1754 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17206.041790649622!2d120.62682119888919!3d17.031737974484322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAxJzU0LjIiTiAxMjDCsDM4JzA5LjMiRQ!5e1!3m2!1sen!2sph!4v1597932657629!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.156944, 120.826389], { icon: orangeIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Antinangad" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Antinangad</p> <p>Elev: 1689 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.032222223419!2d120.81652302881021!3d17.157242164344844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e321319a93a77%3A0xcbbaa21a280a2abf!2sMount%20Antinangad!5e1!3m2!1sen!2sph!4v1597932417002!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.68, 120.601389], { icon: orangeIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binmaca" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binmaca</p> <p>Elev: 1668 m, Prom: 573 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15705.636284267703!2d120.59957852873474!3d16.681686770787827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c0a57f9bdbbd%3A0xf791f779ec07ef75!2sMount%20Binmaca!5e1!3m2!1sen!2sph!4v1597932261697!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1473188, 120.6408553], { icon: tealIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Estilete" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Estilete (Summit)</p> <p>Elev: 1440 m, Prom: 259 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.641757440071!2d120.62457852880907!3d17.150020015212228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e24973a057699%3A0x16af3375fd4efea5!2sMount%20Estilete!5e1!3m2!1sen!2sph!4v1597932143405!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1388079, 120.6367877], { icon: tealIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Tirad" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tirad</p> <p>Elev: 1401 m, Prom: 165 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.047443986712!2d120.62457852880631!3d17.133353317212677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e24629dd1f1f1%3A0x5b161192a8621b80!2sMount%20Tirad!5e1!3m2!1sen!2sph!4v1597932126141!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1222619, 120.6365854], { icon: tealIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Spike_Peak_(bukid_sa_Pilipinas,_Rehiyon_sa_Ilocos)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Spike Peak</p> <p>Elev: 1361 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15669.4517963396!2d120.62457852880367!3d17.116686719211437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e246dc40324af%3A0xbf40e9021c1cce16!2sSpike%20Peak!5e1!3m2!1sen!2sph!4v1597932091444!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8075, 120.5825], { icon: tealIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Culili" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Culili</p> <p>Elev: 1138 m, Prom: 232 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15695.239109604734!2d120.5662452287545!3d16.807797855952717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c30031373c97%3A0x53d80d6dbdc82596!2sMount%20Culili!5e1!3m2!1sen!2sph!4v1597932062362!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0934003, 120.760999], { icon: tealIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Quinali" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Quinali</p> <p>Elev: 1093 m, Prom: 159 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15671.415675595641!2d120.75235632879992!3d17.093353322006934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e2ee0f9343b09%3A0xc754921be2fcb6ef!2sMount%20Quinali!5e1!3m2!1sen!2sph!4v1597932030729!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.149444, 120.635278], { icon: tealIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Three_Sisters_(tumoy_sa_bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Three Sisters</p> <p>Elev: 1082 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.64175744007!2d120.62457852880904!3d17.15002001521222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e24973a057699%3A0x5e0e9c6b86a49766!2sThree%20Sisters!5e1!3m2!1sen!2sph!4v1597932007970!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.15, 120.633333], { icon: cyanIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Estilete" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Estilete </p> <p>Elev: 978 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16845.357478761118!2d120.62441608977682!3d17.150005097738596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA5JzAwLjAiTiAxMjDCsDM4JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1597934618308!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.6495001, 120.5096], { icon: cyanIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Peak_Bulagao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulagao North Peak</p> <p>Elev: 965 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15623.903563214535!2d120.50096742889133!3d17.6494643544909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e60ec323204f5%3A0x8565d591455f4b87!2sNorth%20Peak%20Bulagao!5e1!3m2!1sen!2sph!4v1597934728460!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1812328, 120.5765546], { icon: cyanIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ampayao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ampayao</p> <p>Elev: 905 m, Prom: 378 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.03775069616!2d120.564023028814!3d17.18085331150697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e22d5e1367d53%3A0x6bcf1aa84751345b!2sMount%20Ampayao!5e1!3m2!1sen!2sph!4v1597934907053!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5250031, 120.4635249], { icon: cyanIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tetas_de_Santa_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>South Tetas de Santa</p> <p>Elev: 642 m, Prom: 494 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16629.457949905125!2d120.45457509661955!3d17.525008183096034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDMxJzMwLjAiTiAxMjDCsDI3JzQ4LjciRQ!5e1!3m2!1sen!2sph!4v1597935258766!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.537921, 120.4653101], { icon: cyanIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tetas_de_Santa_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North Tetas de Santa</p> <p>Elev: 540 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.538243387675!2d120.45652302887268!3d17.538075568163027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e689c19e2cfcb%3A0x2033f0081db8b665!2sNorth%20Tetas%20de%20Santa!5e1!3m2!1sen!2sph!4v1597935206455!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5671546, 120.4713027], { icon: cyanIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Vigan_Gap" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Vigan Gap North Shoulder</p> <p>Elev: 521 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15631.021159380312!2d120.46263412887764!3d17.567242164590258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e6648b0d272d3%3A0x10cabfb99c6430f!2sVigan%20Gap%20North%20Shoulder!5e1!3m2!1sen!2sph!4v1597935570459!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5473509, 120.466883], { icon: cyanIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Vigan_Gap" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Vigan Gap South Shoulder</p> <p>Elev: 510 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16629.457949905125!2d120.45457509661955!3d17.525008183096034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e6626825b6625%3A0x9b0a28b722b541a5!2sVigan%20Gap%20South%20Shoulder!5e1!3m2!1sen!2sph!4v1597935457138!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.495278, 120.450833], { icon: blueIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Luna_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Luna Hill</p> <p>Elev: 488 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.321495913968!2d120.44013412886346!3d17.482519974954247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e69386c864199%3A0xf90d04ab7dfa2f8d!2sLuna%20Hill!5e1!3m2!1sen!2sph!4v1597935681969!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.2566996, 120.5442], { icon: blueIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Monondon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Monondon</p> <p>Elev: 464 m, Prom: 159 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15657.613992447888!2d120.53541192882638!3d17.256686702369752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e3dec6211f6a3%3A0xbb09c3a33475f4d3!2sMount%20Monondon!5e1!3m2!1sen!2sph!4v1597935940856!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.9925, 120.521389], { icon: blueIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Suyo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Suyo</p> <p>Elev: 399 m, Prom: 97 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15680.151257572415!2d120.5131896287832!3d16.989186734446804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e07be3a94007%3A0xfeff36ed4659045f!2sMount%20Suyo!5e1!3m2!1sen!2sph!4v1597936108850!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.98331, 120.4833399], { icon: blueIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tapao_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tapao</p> <p>Elev: 353 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15681.636956408041!2d120.48318962878038!3d16.97140893656334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e0e612cbfe83%3A0x910a5d828d83f3f0!2sMount%20Tapao!5e1!3m2!1sen!2sph!4v1597936244220!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.833333, 120.516667], { icon: blueIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Cone_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Cone</p> <p>Elev: 326 m, Prom: 192 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.86872851815!2d120.50791192892241!3d17.833353181757264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e8d288397d3c7%3A0x85dd8d6e853f10de!2sSharp%20Cone!5e1!3m2!1sen!2sph!4v1597936531043!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4346199, 120.4545517], { icon: blueIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bantay-Abot" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bantay Abot</p> <p>Elev: 263 m, Prom: 253 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16182.383014402676!2d120.44566733802964!3d17.434624987165158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI2JzA0LjYiTiAxMjDCsDI3JzE2LjQiRQ!5e1!3m2!1sen!2sph!4v1597936931820!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.433333, 120.45], { icon: blueIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Narvacan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Narvacan</p> <p>Elev: 259 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16182.383014402676!2d120.44566733802964!3d17.434624987165158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e6b91823244f7%3A0xcd93587b531b666b!2sMount%20Narvacan!5e1!3m2!1sen!2sph!4v1597937218886!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.9610337, 120.546937], { icon: blueIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Suyo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balungabing</p> <p>Elev: 247 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14917.496139075367!2d120.53829049779984!3d16.961038786080763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDU3JzM5LjciTiAxMjDCsDMyJzQ5LjAiRQ!5e1!3m2!1sen!2sph!4v1597937461943!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.316667, 120.45], { icon: blueIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bacao_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bacao Hill</p> <p>Elev: 187 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15652.512030573094!2d120.44124522883615!3d17.31668664511583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e146dd286f02b%3A0x780a0eb0bed2a3b5!2sBacao%20Hill!5e1!3m2!1sen!2sph!4v1597937531893!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.2329357, 120.433352], { icon: blueIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bocong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bocong Hill</p> <p>Elev: 87 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15659.687653591373!2d120.42457852882238!3d17.23224220531887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e10cafa6aca57%3A0xa0d23fa5607c2420!2sBocong%20Hill!5e1!3m2!1sen!2sph!4v1597937668393!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5695046, 120.3817552], { icon: blueIcon })
  .addTo(ilocossurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bocong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mira Hills</p> <p>Elev: 38 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15627.819376219797!2d120.37279079833365!3d17.569564786910995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e6570fda91313%3A0xca5b51f767004ad3!2sVigan%20Fil-Hispanic%20Park!5e1!3m2!1sen!2sph!4v1597937927211!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.627778, 120.561389], { icon: orangeIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talalang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talalang</p> <p>Elev: 1521 m, Prom: 576 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15711.89713417625!2d120.58374522872286!3d16.605297879727193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391be96df9ec55d%3A0xd8cb5ba637cba40d!2sMount%20Talalang!5e1!3m2!1sen!2sph!4v1597938788208!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7527, 120.524], { icon: cyanIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gambang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gambang</p> <p>Elev: 770 m, Prom: 122 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15699.782913188841!2d120.51513412874583!3d16.752797862434456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ea0b0dcebc4b%3A0x29cc425369d7c850!2sMount%20Gambang!5e1!3m2!1sen!2sph!4v1597939097338!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8152778, 120.5166667], { icon: cyanIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Basig" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Basig</p> <p>Elev: 528 m, Prom: 166 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15694.618379374995!2d120.50791192875565!3d16.81529785506743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e82d54608445%3A0x3a9649c0d5012083!2sMount%20Basig!5e1!3m2!1sen!2sph!4v1597939258384!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4038889, 120.4161111], { icon: blueIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bana" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bana</p> <p>Elev: 407 m, Prom: 137 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15728.269109859599!2d120.40735632869195!3d16.403909003125516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919dc97a7be275%3A0xbd103551ac8babe2!2sMount%20Bana!5e1!3m2!1sen!2sph!4v1597939451554!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8258333, 120.5063889], { icon: blueIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naluo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naluo</p> <p>Elev: 407 m, Prom: 137 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15693.744308073125!2d120.49763412875733!3d16.825853353820897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e837bf75d201%3A0x517923c890f3b2bf!2sMount%20Naluo!5e1!3m2!1sen!2sph!4v1597939668803!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4166667, 120.3666667], { icon: blueIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magabang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magabang</p> <p>Elev: 306 m, Prom: 229 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.236105719674!2d120.35791192869388!3d16.41668680164821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919d1ff609cd13%3A0x930bed78511890d!2sMount%20Magabang!5e1!3m2!1sen!2sph!4v1597939827543!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.866667, 120.466667], { icon: blueIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lusong_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kimalogong</p> <p>Elev: 263 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.588609097205!2d120.45457852876332!3d16.863908949321225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e89e6651411b%3A0xefb35d18b77c0b0f!2sMount%20Lusong!5e1!3m2!1sen!2sph!4v1597939968280!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4144444, 120.3708333], { icon: blueIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kimalogong_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lusong</p> <p>Elev: 263 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.415820780367!2d120.36207852869354!3d16.41446450190521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919d1e5fbfb699%3A0xb12bb3bf4cf1dcda!2sMount%20Kimalogong!5e1!3m2!1sen!2sph!4v1597940835928!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3166667, 120.3833333], { icon: blueIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agoo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agoo</p> <p>Elev: 239 m, Prom: 147 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15735.299574696828!2d120.37457852867873!3d16.31668681318329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391771b8e64bff1%3A0x671f8cc5fe1c762b!2sMount%20Agoo!5e1!3m2!1sen!2sph!4v1597941031558!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8333333, 120.35], { icon: blueIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lone_Tree_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lone Tree Hill</p> <p>Elev: 31 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15693.122930456291!2d120.34124522875848!3d16.833353352934797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ee2f30ad07e7%3A0x96ec8af02ba142d8!2sLone%20Tree%20Hill!5e1!3m2!1sen!2sph!4v1597941226759!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.983333, 120.116667], { icon: cyanIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_San_Isidro" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount San Isidro</p> <p>Elev: 738 m, Prom: 301 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.507424973255!2d120.1064871786296!3d15.987465700731283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393e22c8ecbcd87%3A0x680055778fc641a6!2sMount%20San%20Isidro!5e1!3m2!1sen!2sph!4v1597949836888!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.890556, 120.103889], { icon: cyanIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangatarem" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangatarem</p> <p>Elev: 595 m, Prom: 149 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.16486636015!2d120.09457852861536!3d15.890020161718946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393fce78883a2e1%3A0x6464cd5821ebaf92!2sMount%20Mangatarem!5e1!3m2!1sen!2sph!4v1597949964185!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.116667, 120.616667], { icon: cyanIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Jones_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Jones</p> <p>Elev: 567 m, Prom: 225 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15751.282690927792!2d120.60791192864873!3d16.1166868360718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339113d70c8cc7eb%3A0x2d0604ae2b43b204!2sMount%20Jones!5e1!3m2!1sen!2sph!4v1597950070092!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.116667, 120.766667], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Damchak_(bukid_sa_Pilipinas,_Rehiyon_sa_Ilocos)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Damchak</p> <p>Elev: 451 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15751.282690927792!2d120.75791192864871!3d16.116686836071803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33911b1a34bb459f%3A0xc4fd4429ff41611d!2sMount%20Damchak!5e1!3m2!1sen!2sph!4v1597950178606!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.862778, 120.683333], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balungao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balungao</p> <p>Elev: 379 m, Prom: 301 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.399505834072!2d120.6780337786112!3d15.861473114926916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33913ae04f4e990b%3A0x42a2a4ab39d242f3!2sMount%20Balungao!5e1!3m2!1sen!2sph!4v1597950316707!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.837778, 120.806389], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amorong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amorong</p> <p>Elev: 373 m, Prom: 271 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31546.164616572056!2d120.77755437477414!3d15.839942583606282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339125d19e956f7d%3A0xdea2dcb47b8fdb34!2sMount%20Amorong!5e1!3m2!1sen!2sph!4v1597950430520!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.047222, 120.074722], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Verde_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Verde</p> <p>Elev: 347 m, Prom: 92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15755.619588691652!2d120.06245612864062!3d16.06200034228806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393e0ca3ea0f3cd%3A0xd8bca6fca1e1662e!2sMount%20Verde!5e1!3m2!1sen!2sph!4v1597950502120!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.719444, 120.309444], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malabobo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malabobo</p> <p>Elev: 323 m, Prom: 198 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.457626628486!2d120.29874522859066!3d15.719464580811517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339152d1b61ef48d%3A0xe4088132e0b9e75a!2sMount%20Malabobo!5e1!3m2!1sen!2sph!4v1597950874431!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.695278, 120.329722], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabaluyan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabaluyan</p> <p>Elev: 293 m, Prom: 191 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.28681069205!2d120.31902302858732!3d15.695853483440692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ad45b540c43f%3A0x7b0904b5a6d775a8!2sMount%20Cabaluyan!5e1!3m2!1sen!2sph!4v1597950997545!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.695, 120.3225], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Canalietan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canalietan</p> <p>Elev: 290 m, Prom: 148 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.351318609408!2d120.31374522858721!3d15.695020183533444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ad473c8c3873%3A0xe1a1571725885205!2sMount%20Canalietan!5e1!3m2!1sen!2sph!4v1597951096142!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.873611, 119.945278], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maliang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maliang</p> <p>Elev: 260 m, Prom: 97 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.469512647176!2d120.0115230286148!3d15.886131312156246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393fafe1df99beb%3A0x631654d24e14b32d!2sMount%20Maliang!5e1!3m2!1sen!2sph!4v1597951414068!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.983333, 119.983333], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ariba" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ariba</p> <p>Elev: 254 m, Prom: 73 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.85337180588!2d119.97291192862897!3d15.983075801227505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393e58f65e6d9fd%3A0x8714bc4083fe3293!2sMount%20Ariba!5e1!3m2!1sen!2sph!4v1597951498617!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.8592826, 120.6723091], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Minor Peak</p> <p>Elev: 237 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16313.792181660117!2d120.66341975164327!3d15.859287732791579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUxJzMzLjQiTiAxMjDCsDQwJzIwLjMiRQ!5e1!3m2!1sen!2sph!4v1597951729491!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.848333, 119.974444], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nangradian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangradian</p> <p>Elev: 220 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15772.229804156335!2d119.97652302860966!3d15.850853466119036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393fa04addc1ef1%3A0x46ad338495030d55!2sMount%20Nangradian!5e1!3m2!1sen!2sph!4v1597952000752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.1500077, 120.5000071], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alava_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alava</p> <p>Elev: 199 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15748.587939527357!2d120.48624522865379!3d16.15057573221053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33916d1b66e0c13f%3A0x1ec3a79114368f96!2sMount%20Alava!5e1!3m2!1sen!2sph!4v1597952095842!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.896944, 119.918333], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bayambang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bayambang</p> <p>Elev: 180 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.642438734336!2d119.91041192861631!3d15.89668686096907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393f1077888732b%3A0x3fe85430c42c6459!2sMount%20Bayambang!5e1!3m2!1sen!2sph!4v1597952194105!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7083333, 120.3333333], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Candong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Candong</p> <p>Elev: 176 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.232667445796!2d120.32207852858923!3d15.709464581925472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339152b2bec64691%3A0xa017915ead8d474c!2sMount%20Candong!5e1!3m2!1sen!2sph!4v1597952336556!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.983333, 119.933333], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sol" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sol</p> <p>Elev: 163 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.787714509292!2d119.92902302862909!3d15.983909051133317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393ef06757d313f%3A0x61caa7000cf1ae78!2sMount%20Sol!5e1!3m2!1sen!2sph!4v1597952432618!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9, 119.916667], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bayambang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talagtalag</p> <p>Elev: 153 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.487093582564!2d119.90787977587705!3d15.900005128429985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU0JzAwLjAiTiAxMTnCsDU1JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1597952612369!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.05, 119.816667], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Sapa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North Sapa</p> <p>Elev: 143 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15756.567754714824!2d119.80791192863883!3d16.05002019364743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393eb68a11bdd47%3A0x5fd1cfb54a5117f0!2sNorth%20Sapa!5e1!3m2!1sen!2sph!4v1597952803622!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.102, 119.7827778], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagtoon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagtoon</p> <p>Elev: 127 m, Prom: 56 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.407554449026!2d119.77402302864662!3d16.102520137683882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33939536ab55e211%3A0x46647dcec0eeedc2!2sMount%20Nagtoon!5e1!3m2!1sen!2sph!4v1597952879694!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.15, 119.783333], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calambayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calambayan</p> <p>Elev: 125 m, Prom: 82 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.40755444903!2d119.77402302864665!3d16.10252013768389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393c00a7e27618d%3A0xf89102e58210550e!2sMount%20Calambayan!5e1!3m2!1sen!2sph!4v1597953061016!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.133333, 119.8], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Namacalan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Namacalan</p> <p>Elev: 113 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15749.604641861884!2d119.80541192865186!3d16.137797933667237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393c03da59fdb7f%3A0x357f7c7c44a748bd!2sMount%20Namacalan!5e1!3m2!1sen!2sph!4v1597953162229!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.096389, 119.793889], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagtoon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bogton</p> <p>Elev: 104 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.40755444903!2d119.77402302864665!3d16.10252013768389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33939536ab55e211%3A0x46647dcec0eeedc2!2sMount%20Nagtoon!5e1!3m2!1sen!2sph!4v1597953253051!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.1, 119.8], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Arwas_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Arwas Hill</p> <p>Elev: 103 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.605959343158!2d119.7912452286462!3d16.100020137968244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393eac8acf9ece3%3A0x7a7349ec61f72b8e!2sArwas%20Hill!5e1!3m2!1sen!2sph!4v1597953598975!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.116667, 119.816667], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mayo_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mayo</p> <p>Elev: 101 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15750.488091710096!2d119.80957852865022!3d16.126686834933135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393c026d1c08371%3A0xa64679541269ebfe!2sMount%20Mayo!5e1!3m2!1sen!2sph!4v1597953705708!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7, 120.3166667], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Poelis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Poelis</p> <p>Elev: 98 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.050236320823!2d120.31402302858771!3d15.69890913310063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ad47d73c974b%3A0x610537fe504a9c42!2sMount%20Poelis!5e1!3m2!1sen!2sph!4v1597953789892!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.066667, 119.783333], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bocot_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bocot Hill</p> <p>Elev: 97 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15754.588358732028!2d119.76402302864255!3d16.075020140809734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339394c48a7a9fcf%3A0xc636881689e06387!2sBocot%20Hill!5e1!3m2!1sen!2sph!4v1597953924297!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.083333, 119.9], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Simimbahan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Simimbahan</p> <p>Elev: 97 m, Prom: 51 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15753.44334177779!2d119.8879119286447!3d16.089464539168443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393e99324b7c259%3A0xbcc4b8c2f1d28d04!2sMount%20Simimbahan!5e1!3m2!1sen!2sph!4v1597954016258!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.0, 119.816667], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Sapa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>South Sapa</p> <p>Elev: 94 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.517554746482!2d119.80791192863146!3d16.000020199311464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393ece17476a2c5%3A0x8c01dd120a179c68!2sSouth%20Sapa!5e1!3m2!1sen!2sph!4v1597954297426!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.0657778, 120.0065002], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="#" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Camagsingalan Natural Stone Bridge</p> <p>Elev: 87 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.629753274356!2d119.99773282468787!3d16.06578293139733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAzJzU2LjgiTiAxMjDCsDAwJzIzLjQiRQ!5e1!3m2!1sen!2sph!4v1597954578682!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.866667, 120.25], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ninoy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ninoy</p> <p>Elev: 76 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.556582139998!2d120.23013412861091!3d15.859464615152435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391573ab04ce1a5%3A0x3797f4ca5cff024c!2sMount%20Ninoy!5e1!3m2!1sen!2sph!4v1597954649896!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.933333, 120.5], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cabaruan_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cabaruan Hills</p> <p>Elev: 55 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15766.245259732983!2d120.4837452286208!3d15.927242407528679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391472fcdb02457%3A0xffd1f336181c74d8!2sCabaruan%20Hills!5e1!3m2!1sen!2sph!4v1597954764851!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9811111, 119.7602778], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caludigan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caludigan hill</p> <p>Elev: 53 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.006578896915!2d119.75152302862868!3d15.981131301447272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393929477389c67%3A0xee53f9c627b66084!2sCaludigan%20Hill!5e1!3m2!1sen!2sph!4v1597954948478!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.35, 120], { icon: blueIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kabuyao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kabuyao</p> <p>Elev: 53 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.006578896915!2d119.75152302862868!3d15.981131301447272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393929477389c67%3A0xee53f9c627b66084!2sCaludigan%20Hill!5e1!3m2!1sen!2sph!4v1597954948478!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.649444, 121.185556], { icon: orangeIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lungod" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lungod</p> <p>Elev: 1921 m, Prom: 426 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15623.87946514304!2d121.1776341288914!3d17.649742104456713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f0bc269528be1%3A0xd4f4e08e29b7da74!2sMount%20Lungod!5e1!3m2!1sen!2sph!4v1597955863103!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.166667, 120.983333], { icon: orangeIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Licud" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Licud</p> <p>Elev: 1804 m, Prom: 458 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15578.491945572781!2d120.97068962897963!3d18.165575440172688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f28d10496d30d%3A0x7f7c5bc03c9b751a!2sMount%20Licud!5e1!3m2!1sen!2sph!4v1597955936770!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1547627, 120.9678056], { icon: orangeIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agamomata" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agamomata</p> <p>Elev: 1649 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15579.45815645166!2d120.9590230289778!3d18.154742041539137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f28c0890fd9ff%3A0xc283c7f118d7303b!2sMount%20Agamomata!5e1!3m2!1sen!2sph!4v1597956026470!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1090738, 120.9358052], { icon: orangeIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kilang</p> <p>Elev: 1584 m, Prom: 145 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.7823244786864!2d121.03132131489615!3d18.24792318221826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f2de0a0e9ce7f%3A0x530758dc9e3c2663!2sMt.%20Kilang!5e1!3m2!1sen!2sph!4v1597956091516!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2131339, 120.9242618], { icon: orangeIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dinawanan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dianawanan</p> <p>Elev: 1525 m, Prom: 147 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.248930075166!2d120.91541192898792!3d18.213075484173203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f299221879d89%3A0x25fcbdc731dd0d3e!2sMount%20Dinawanan!5e1!3m2!1sen!2sph!4v1597956242471!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.6691667, 121.2527778], { icon: orangeIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bangbang_(bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bangbang</p> <p>Elev: 1505 m, Prom: 193 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15622.191509736696!2d121.24402302889465!3d17.669186652062393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f0cafbe5a1e33%3A0xbddbcc1284536fd3!2sMount%20Bangbang!5e1!3m2!1sen!2sph!4v1597956353946!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1463832, 120.9611347], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bener" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bener</p> <p>Elev: 1470 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15580.201009042554!2d120.95235632897631!3d18.14640874258973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f28970fe2de8b%3A0xa0b4d617cd59f9fa!2sMount%20Bener!5e1!3m2!1sen!2sph!4v1597956682568!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.739722, 121.1175], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Macopa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Macopa</p> <p>Elev: 1380 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15616.003129480623!2d121.10763412890664!3d17.740297743286746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f0fb0e3baeb8d%3A0xc78370e574bef126!2sMount%20Macopa!5e1!3m2!1sen!2sph!4v1597956755084!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2137001, 121.1569], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lambayo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lambayo</p> <p>Elev: 1375 m, Prom: 825 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.199250321457!2d121.14846742898801!3d18.21363093410297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f33905c5d0c0d%3A0x37100b972f3b0968!2sMount%20Lambayo!5e1!3m2!1sen!2sph!4v1597956846687!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4364153, 121.0046899], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Catatuen" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cataluan</p> <p>Elev: 1308 m, Prom: 541 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15554.155907109549!2d120.9959674290273!3d18.436408755784704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d0c477969601%3A0xe51695a605d6b9fe!2sMount%20Catatuen!5e1!3m2!1sen!2sph!4v1597956977827!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.789444, 121.108333], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tinaclauan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinadauan</p> <p>Elev: 1305 m, Prom: 141 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15611.880368224896!2d121.11263412891464!3d17.78751993744244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f103596f6a567%3A0xaf568480dd8f906b!2sMount%20Tinaclauan!5e1!3m2!1sen!2sph!4v1597957103857!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.442878, 121.0131523], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naklikid" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naklikid</p> <p>Elev: 1261 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.577627194143!2d121.00430082902844!3d18.442797654968217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d09525f94481%3A0x110fd55f54b28716!2sMount%20Naklikid!5e1!3m2!1sen!2sph!4v1597957197068!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4469777, 121.0356283], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabitcongan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabitcongan</p> <p>Elev: 1258 m, Prom: 232 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.20039514846!2d121.02680082902916!3d18.4469642044356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d062ef36ecc3%3A0x949cf568575368da!2sMount%20Cabitcongan!5e1!3m2!1sen!2sph!4v1597957283409!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4530671, 121.0133403], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magsingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magsingan</p> <p>Elev: 1242 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.646944624888!2d121.00457852903031!3d18.453075453654225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d0982ceb41a5%3A0xe77802b3b4499313!2sMount%20Magsingan!5e1!3m2!1sen!2sph!4v1597957389322!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.166667, 121.166667], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Asi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Asi</p> <p>Elev: 1227 m, Prom: 457 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15578.392812670487!2d121.15791192897986!3d18.166686590032512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f314c12befc2d%3A0x48659e01865c8f24!2sMount%20Asi!5e1!3m2!1sen!2sph!4v1597957459534!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.819444, 121.101667], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Wata" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Wala</p> <p>Elev: 1188 m, Prom: 95 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15608.988120072521!2d121.09152302892024!3d17.820575533343472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f108cefb205bf%3A0x3729231c6b4f0a10!2sMount%20Wata!5e1!3m2!1sen!2sph!4v1597957584634!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.756111, 121.182222], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lipay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lipay</p> <p>Elev: 1185 m, Prom: 247 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15614.597737038648!2d121.17430082890937!3d17.756408791294316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f0df7fc83cc95%3A0x6c33f8db2fd1dfa6!2sMount%20Lipay!5e1!3m2!1sen!2sph!4v1597957672811!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2830338, 120.9726826], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magsingit_(bukid_sa_Pilipinas,_Apayao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magsingit</p> <p>Elev: 1183 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15567.802001882674!2d120.96291192900055!3d18.285019875060627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f2b43f3a6d535%3A0xf135c3fa9dc35237!2sMount%20Magsingit!5e1!3m2!1sen!2sph!4v1597957752914!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.849167, 121.078889], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Muju)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Muji</p> <p>Elev: 1161 m, Prom: 275 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15606.529291312076!2d121.05846742892501!3d17.848630979859404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f1a102dfd86fb%3A0x84ae22dbaf9101c4!2sMount%20Muju!5e1!3m2!1sen!2sph!4v1597957838450!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.864444, 121.161389], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Wayan)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Wayan</p> <p>Elev: 1145 m, Prom: 502 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.969099087575!2d121.16652302892999!3d17.877797726232327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f142915ec2ae1%3A0x8abbd608b8954661!2sMount%20Wayan!5e1!3m2!1sen!2sph!4v1597957928830!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4530671, 121.0133403], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magsingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magsingan</p> <p>Elev: 1140 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.646944624883!2d121.00457852903027!3d18.45307545365423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d0982ceb41a5%3A0xe77802b3b4499313!2sMount%20Magsingan!5e1!3m2!1sen!2sph!4v1597958002672!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4664564, 121.0269209], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ambongan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ambongan</p> <p>Elev: 1138 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.438837076556!2d121.01818962903265!3d18.4664087019487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388da7be362176b%3A0xe8f7dc3b3a1abb28!2sMount%20Ambongan!5e1!3m2!1sen!2sph!4v1597958086727!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.796944, 121.203056], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calauag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calauag</p> <p>Elev: 1138 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15610.981653672863!2d121.19430082891638!3d17.797797736168665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f13b2f9091a7b%3A0xf96f6979a805a068!2sMount%20Calauag!5e1!3m2!1sen!2sph!4v1597958178101!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.116667, 121.216667], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sulu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Solu</p> <p>Elev: 1110 m, Prom: 344 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15583.515066733064!2d121.21152302896982!3d18.109186597277407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f37a1d0d10c77%3A0xb26c952313d4f80a!2sMount%20Sulu!5e1!3m2!1sen!2sph!4v1597958268689!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4449795, 120.960033], { icon: tealIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magnas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magnas</p> <p>Elev: 1056 m, Prom: 137 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.175240704497!2d120.95013412902922!3d18.447242004400103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d713f81dbe59%3A0xc4be508c144f7fe1!2sMount%20Magnas!5e1!3m2!1sen!2sph!4v1597958379376!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.116667, 121.183333], { icon: cyanIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agnuwan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agnuwan</p> <p>Elev: 961 m, Prom: 161 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15583.737421889808!2d121.17485632896941!3d18.10668654759197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f37456dcffdfb%3A0xcfc3f091486d1dd4!2sMount%20Agnuwan!5e1!3m2!1sen!2sph!4v1597958616977!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2908227, 121.2117935], { icon: cyanIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nanuddalan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nanuddalan</p> <p>Elev: 933 m, Prom: 461 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15566.30499893656!2d121.20263412900347!3d18.301686572945187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388cbaa1ee0796b%3A0x3814091ada21444d!2sMount%20Nanuddalan!5e1!3m2!1sen!2sph!4v1597958691228!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.926389, 121.266111], { icon: cyanIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bajucan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bajucan</p> <p>Elev: 815 m, Prom: 520 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15599.693139859648!2d121.2573563289383!3d17.926408820175922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f40097d1ef937%3A0xf0d6f855893d86e7!2sMount%20Bajucan!5e1!3m2!1sen!2sph!4v1597958878598!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3860448, 121.232754], { icon: cyanIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magalino" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magalino</p> <p>Elev: 771 m, Prom: 421 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15558.69996258458!2d121.22402302901838!3d18.386130962201587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388c84c1929a611%3A0xf536f6043519855e!2sMount%20Magalino!5e1!3m2!1sen!2sph!4v1597958950541!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.010278, 121.213889], { icon: cyanIcon })
  .addTo(apayaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taburub" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taburub</p> <p>Elev: 709 m, Prom: 180 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15592.287649900796!2d121.20513412895272!3d18.01029765969107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f3929783dde3b%3A0x47e80e8d850020c9!2sMount%20Taburub!5e1!3m2!1sen!2sph!4v1597959019112!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3451485, 120.9637456], { icon: redIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mausan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mausan</p> <p>Elev: 2394 m, Prom: 184 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.091772704907!2d120.95791192883888!3d17.333353293097012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb435a67fb193%3A0x19c1de53c3c30c65!2sMount%20Mausan!5e1!3m2!1sen!2sph!4v1597962237471!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.2162321, 120.9109379], { icon: redIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mengmeng" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mengmeng</p> <p>Elev: 2283 m, Prom: 128 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15661.076350789252!2d120.90152302881972!3d17.21585330729409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fcb58ff369b43%3A0x6e25330df32e5834!2sMount%20Mengmeng!5e1!3m2!1sen!2sph!4v1597962322613!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3194999, 120.9241], { icon: redIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bangbanglang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bangbanglang</p> <p>Elev: 2233 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15652.275415030517!2d120.91541192883663!3d17.319464394779462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb5147ea74cc5%3A0x3a6e8eb763293f0c!2sMount%20Bangbanglang!5e1!3m2!1sen!2sph!4v1597962404197!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.663333, 121.092222], { icon: redIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manmanoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manmanoc</p> <p>Elev: 2024 m, Prom: 357 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15622.794559060647!2d121.08430082889348!3d17.662242152917774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f08972e342305%3A0x742d9916ee1695eb!2sMount%20Manmanoc!5e1!3m2!1sen!2sph!4v1597962474560!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5231999, 120.9903001], { icon: orangeIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manmanoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balutictic</p> <p>Elev: 1867 m, Prom: 341 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.154334297973!2d120.98596742886379!3d17.484464374716868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fae7a12c059e1%3A0x780fb02f8326c056!2sMount%20Balutictic!5e1!3m2!1sen!2sph!4v1597962555998!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4955232, 121.0009471], { icon: orangeIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Madimlong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Madimlong</p> <p>Elev: 1814 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15637.198750078052!2d120.99207852886566!3d17.495575573359968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fae885ebbe04f%3A0xe32ce92f7fa558b1!2sMount%20Madimlong!5e1!3m2!1sen!2sph!4v1597962620544!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5022, 120.9738], { icon: orangeIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ticmo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ticmo</p> <p>Elev: 1800 m, Prom: 90 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.625127593203!2d120.96513412886677!3d17.50224217254549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fac3230eeefa9%3A0xefc609557c02a61b!2sMount%20Ticmo!5e1!3m2!1sen!2sph!4v1597962699325!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.515, 121.0356998], { icon: orangeIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buaguan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buagan</p> <p>Elev: 1773 m, Prom: 175 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.525079874575!2d121.0270785288689!3d17.51501997098364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338faf2719aaece1%3A0xd2a0580394ef84a1!2sMount%20Buaguan!5e1!3m2!1sen!2sph!4v1597963002577!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.066667], { icon: orangeIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pugao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pugao</p> <p>Elev: 1718 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.945397875821!2d121.0579119288719!3d17.53335326874101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa8b015a65025%3A0xac6f97cb785ed0ba!2sMount%20Pugao!5e1!3m2!1sen!2sph!4v1597963141016!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5587999, 120.9341999], { icon: orangeIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pultoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pultoc</p> <p>Elev: 1576 m, Prom: 338 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15631.740738355797!2d120.92541192887619!3d17.558908865611556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fab70ec866a9d%3A0x401d0e1a54fd22c!2sMount%20Pultoc!5e1!3m2!1sen!2sph!4v1597963217201!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5587999, 120.9341999], { icon: orangeIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pultoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pultoc</p> <p>Elev: 1576 m, Prom: 338 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15631.740738355797!2d120.92541192887619!3d17.558908865611556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fab70ec866a9d%3A0x401d0e1a54fd22c!2sMount%20Pultoc!5e1!3m2!1sen!2sph!4v1597963217201!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.711111, 120.961944], { icon: orangeIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bumalayak_North_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bumalayak</p> <p>Elev: 1563 m, Prom: 493 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.689333059314!2d120.95318962890143!3d17.709464347095537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f01604b1b6d6f%3A0xf30fd9ee70733a24!2sMount%20Bumalayak%20North%20Peak!5e1!3m2!1sen!2sph!4v1597963432711!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.745556, 120.960278], { icon: orangeIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manago" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manago</p> <p>Elev: 1556 m, Prom: 140 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.689333059314!2d120.95318962890143!3d17.709464347095537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f03a4723cffff%3A0xee83eb81e27982aa!2sMount%20Manago!5e1!3m2!1sen!2sph!4v1597963528265!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3499339, 120.7917461], { icon: orangeIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Puscoy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Posooy</p> <p>Elev: 1529 m, Prom: 517 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15649.670186241196!2d120.78291192884163!3d17.350019991076493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e499aa5ebc1cb%3A0x38ae7f9c76ffea8b!2sMount%20Puscoy!5e1!3m2!1sen!2sph!4v1597963625681!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5206, 120.942], { icon: orangeIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agapang_(bukid_sa_Pilipinas,_lat_17,52,_long_120,94)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agapang</p> <p>Elev: 1505 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.046557012029!2d120.9331896288698!3d17.52057552030427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fac5f60f314d9%3A0x2e1234189ed025b1!2sMount%20Agapang!5e1!3m2!1sen!2sph!4v1597963797031!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4979251, 120.9367467], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nonan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nonan</p> <p>Elev: 1483 m, Prom: 217 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.983664303498!2d120.92791192886605!3d17.49807557305456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fad06a4c7c689%3A0xba4991a267072ac5!2sMount%20Nonan!5e1!3m2!1sen!2sph!4v1597963893776!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.590833, 121.016944], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Madocay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Madocay</p> <p>Elev: 1431 m, Prom: 261 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15628.908473665197!2d121.00763412888169!3d17.591686661591964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa9b94ca1a329%3A0xb041606987695934!2sMount%20Madocay!5e1!3m2!1sen!2sph!4v1597964234240!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5293, 120.9339], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calao_(bukid_sa_Pilipinas,_lat_17,53,_long_120,93)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calao</p> <p>Elev: 1399 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15634.304556289753!2d120.92513412887122!3d17.529186619250872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fac8c455b4f89%3A0x78302541632879c5!2sMount%20Calao!5e1!3m2!1sen!2sph!4v1597964354627!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.678889, 121.101667], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pulagon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pulagon</p> <p>Elev: 1382 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15620.984731296216!2d121.11374522889702!3d17.683075550350768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f0f2ad518bd83%3A0x500337b2e092d32e!2sMount%20Pulagon!5e1!3m2!1sen!2sph!4v1597964490926!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.083333], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinalitan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sinalitan</p> <p>Elev: 1370 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.945397875821!2d121.07457852887198!3d17.53335326874101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa61cec04a075%3A0xf87fad467ed0fc43!2sMount%20Sinalitan!5e1!3m2!1sen!2sph!4v1597964587706!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.496625, 120.949947], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagbag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagbag</p> <p>Elev: 1323 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15637.103165333468!2d120.94124522886584!3d17.496686623224246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fadac2a009143%3A0x86e58d05e078669!2sMount%20Bagbag!5e1!3m2!1sen!2sph!4v1597964670446!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.7955161, 121.0945426], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sandig" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sandig</p> <p>Elev: 1294 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15611.176010533782!2d121.08596742891599!3d17.795575536444122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f106cf143188b%3A0x790a1fc1f899e3da!2sMount%20Sandig!5e1!3m2!1sen!2sph!4v1597964739322!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.516667, 121.016667], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balac" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balac</p> <p>Elev: 1282 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.86416699124!2d121.00041192886628!3d17.499464372884894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fae8cde25cbaf%3A0x26219adc30c3f109!2sMount%20Balac!5e1!3m2!1sen!2sph!4v1597964816755!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.8, 120.75], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sagang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sagang</p> <p>Elev: 1255 m, Prom: 655 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15610.787277702926!2d120.74124522891674!3d17.80001988589318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338efafb2fea9cc7%3A0x4d87feb635397f12!2sMount%20Sagang!5e1!3m2!1sen!2sph!4v1597964903439!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.8, 120.75], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sagang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sagang</p> <p>Elev: 1255 m, Prom: 655 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15610.787277702926!2d120.74124522891674!3d17.80001988589318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338efafb2fea9cc7%3A0x4d87feb635397f12!2sMount%20Sagang!5e1!3m2!1sen!2sph!4v1597964903439!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.716667, 120.95], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tumalpoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tumalpuc</p> <p>Elev: 1210 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.78604758144!2d120.93818962890126!3d17.70835324723268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f017eacd85887%3A0x3b770e9ae0df34b5!2sMount%20Tumalpoc!5e1!3m2!1sen!2sph!4v1597964989791!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.8430994, 120.7019002], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dagot" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dagot</p> <p>Elev: 1205 m, Prom: 317 m  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.016477816383!2d120.69318962892406!3d17.843075530549683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338eeffd1f601807%3A0x2741e69f9c38d90e!2sMount%20Dagot!5e1!3m2!1sen!2sph!4v1597965096536!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.416667, 120.95], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banidas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sanidas</p> <p>Elev: 1182 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15644.303670236022!2d120.91346742885196!3d17.412797733451008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb319c8d3d143%3A0xde47a791bf5492ee!2sMount%20Banidas!5e1!3m2!1sen!2sph!4v1597965181881!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.716667, 121.016667], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gumalayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gumalayan</p> <p>Elev: 1109 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.06053243569!2d121.00791192890264!3d17.716686646203897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f043bfa1e01b7%3A0xd295049c2ab7b84a!2sMount%20Gumalayan!5e1!3m2!1sen!2sph!4v1597965485968!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.633333, 120.516667], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Peak_Bulagao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulagao South Peak</p> <p>Elev: 1101 m, Prom: 189 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15624.891363392548!2d120.50902302888943!3d17.638075505892207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e60a2bfeed54f%3A0x86db8344bd3e9242!2sSouth%20Peak%20Bulagao!5e1!3m2!1sen!2sph!4v1597965585867!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4130556, 120.8972222], { icon: tealIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palalao_(bukid_sa_Pilipinas,_lat_17,41,_long_120,90)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palalao</p> <p>Elev: 1086 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15644.27988093663!2d120.88846742885198!3d17.413075533417214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb33322049c89%3A0x2e9d0506ba5c85d4!2sMount%20Palalao!5e1!3m2!1sen!2sph!4v1597965747132!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.6756, 120.5933], { icon: cyanIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banti_Goolong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banti Goolong</p> <p>Elev: 880 m, Prom: 187 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15621.636505141307!2d120.58457852889573!3d17.675575551275198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e5f6912887e73%3A0x19ca06db15555fdb!2sMount%20Banti%20Goolong!5e1!3m2!1sen!2sph!4v1597965998441!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3643001, 120.6410997], { icon: cyanIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pangpang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pangpang</p> <p>Elev: 795 m, Prom: 101 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15648.460796150008!2d120.63235632884397!3d17.36418668935777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e47407135f667%3A0x411a3663f5150014!2sMount%20Pangpang!5e1!3m2!1sen!2sph!4v1597966129820!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3382145, 120.6279634], { icon: cyanIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kapnis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kapnis</p> <p>Elev: 746 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15648.460796150008!2d120.63235632884397!3d17.36418668935777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e38aee52c095b%3A0x7abab5408b736e4e!2sMount%20Kapnis!5e1!3m2!1sen!2sph!4v1597966264647!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.433333, 120.666667], { icon: cyanIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masisip" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masisip</p> <p>Elev: 556 m, Prom: 107 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15642.542414517104!2d120.65791192885536!3d17.43335323094903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e45d2b089ad69%3A0xc9730f85699cad8c!2sMount%20Masisip!5e1!3m2!1sen!2sph!4v1597966405808!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5007774, 120.4669575], { icon: cyanIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gusing" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gusing</p> <p>Elev: 537 m, Prom: 139 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.744651886476!2d120.45818962886653!3d17.500853272715204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e68e266fd61a5%3A0xcb657792c100d805!2sMount%20Gusing!5e1!3m2!1sen!2sph!4v1597966486062!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4116818, 120.6506063], { icon: cyanIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kakauaya" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kakauayan</p> <p>Elev: 522 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15644.39881091167!2d120.64180082885179!3d17.41168668358618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e46916c82c391%3A0x5ba7a016ae4bcc76!2sMount%20Kakauaya!5e1!3m2!1sen!2sph!4v1597966575127!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4086001, 120.567], { icon: blueIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banmika" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banmika</p> <p>Elev: 410 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15644.660435629658!2d120.55818962885125!3d17.408631083957857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e41af5f07f831%3A0xdce2dbee7b064cf0!2sMount%20Banmika!5e1!3m2!1sen!2sph!4v1597966661391!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.483333, 120.633333], { icon: blueIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salayot" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salayot</p> <p>Elev: 316 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.249862953357!2d120.62457852886361!3d17.48335322485252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e449038c8898f%3A0x5e6d56fbfe22016!2sMount%20Salayot!5e1!3m2!1sen!2sph!4v1597966724565!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 120.716667], { icon: blueIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calao_(bukid_sa_Pilipinas,_lat_17,53,_long_120,72)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calao</p> <p>Elev: 110 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.945397875816!2d120.70791192887192!3d17.533353268741006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e507997556907%3A0x99556f0a9e5433d4!2sMount%20Calao!5e1!3m2!1sen!2sph!4v1597966922991!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.516667, 120.716667], { icon: blueIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agapang_(bukid_sa_Pilipinas,_lat_17,52,_long_120,72)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agapang</p> <p>Elev: 90 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.38153543624!2d120.70791192886917!3d17.51668667077984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e500beb7fb4e3%3A0x3243f90a5a9452cf!2sMount%20Agapang!5e1!3m2!1sen!2sph!4v1597967032704!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3808, 121.0075], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sapocoy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sapocoy</p> <p>Elev: 2460 m, Prom: 1140 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.0367685281!2d120.99874522884669!3d17.380853287334197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb146d7043479%3A0xcb7211b7affc6113!2sMount%20Sapocoy!5e1!3m2!1sen!2sph!4v1598005269874!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3451485, 120.9637456], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mausan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mausan</p> <p>Elev: 2394 m, Prom: 184 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.091772704956!2d120.95791192883888!3d17.333353293097012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb435a67fb193%3A0x19c1de53c3c30c65!2sMount%20Mausan!5e1!3m2!1sen!2sph!4v1598005421688!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.251389, 120.968056], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alchan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alchan</p> <p>Elev: 2389 m, Prom: 350 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15658.13267281301!2d120.96041192882538!3d17.250575603107368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fca3418d80f61%3A0xa2461639843bf7d0!2sMount%20Alchan!5e1!3m2!1sen!2sph!4v1598005502387!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.251389, 120.968056], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alimunga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alimungao</p> <p>Elev: 2362 m, Prom: 335 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15643.589886964483!2d121.04485632885334!3d17.421131082436997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb03f81e79f4d%3A0x3bca104b81d22d79!2sMount%20Alimunga!5e1!3m2!1sen!2sph!4v1598005608826!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4, 121.083333], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alimunga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alimungao</p> <p>Elev: 2362 m, Prom: 335 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15643.589886964483!2d121.04485632885334!3d17.421131082436997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb03f81e79f4d%3A0x3bca104b81d22d79!2sMount%20Alimunga!5e1!3m2!1sen!2sph!4v1598005608826!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.306389, 121.093889], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binulauan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binuluan</p> <p>Elev: 2329 m, Prom: 431 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15653.079762029902!2d121.09180082883509!3d17.31001999592287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb83303cb9d9f%3A0xdd43c80bb8bda46c!2sMount%20Binuluan!5e1!3m2!1sen!2sph!4v1598005711430!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.424829, 120.995546], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balait" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balait</p> <p>Elev: 2212 m, Prom: 215 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15643.280479679508!2d120.98680082885392!3d17.424742181997456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb18e8e2dd985%3A0xb51f419323242bcc!2sMount%20Balait!5e1!3m2!1sen!2sph!4v1598005922115!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.576285, 121.1439557], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lacob-ti-duyog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lacob-ti-duyog</p> <p>Elev: 2205 m, Prom: 680 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15630.25323998494!2d121.13541192887905!3d17.576131063500377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa76b0bfbfe61%3A0xef8e9f0ce0558da5!2sMount%20Lacob-ti-duyog!5e1!3m2!1sen!2sph!4v1598006003343!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3166667, 121.1], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binuluan_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ambalatungan</p> <p>Elev: 2203 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15983.886258077917!2d121.09129358122209!3d17.316671795406574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzAwLjAiTiAxMjHCsDA2JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598006181626!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4566995, 121.1318008], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Muscut" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Muskut</p> <p>Elev: 2128 m, Prom: 274 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15640.54069601466!2d121.1229119288592!3d17.456686678105843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa4e46fd85871%3A0x15ff482cf1734aba!2sMount%20Muscut!5e1!3m2!1sen!2sph!4v1598006959045!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4427, 121.1027], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sucao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sucao</p> <p>Elev: 2125 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.732502622594!2d121.09402302885695!3d17.4427977797986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa537e7123047%3A0xf4b2e5479ac63547!2sMount%20Sucao!5e1!3m2!1sen!2sph!4v1598007027236!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.116667], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Saal" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Saal</p> <p>Elev: 2066 m, Prom: 164 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.945397875816!2d121.10791192887191!3d17.533353268741013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa666f8907ad1%3A0x8b6e6fadf04b732b!2sMount%20Saal!5e1!3m2!1sen!2sph!4v1598007099489!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.257222, 121.015833], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cauitan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cauitan</p> <p>Elev: 2061 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15657.42533878673!2d120.98985632882673!3d17.258908902101485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fc98d83b0288b%3A0xdecfdce8d1db0c1c!2sMount%20Cauitan!5e1!3m2!1sen!2sph!4v1598007205796!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.535556, 121.119444], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malamot" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malamot</p> <p>Elev: 2046 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.753805442622!2d121.10374522887228!3d17.53557556846903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa6686a34ca47%3A0xb1adf13b68b168e6!2sMount%20Malamot!5e1!3m2!1sen!2sph!4v1598007275983!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.243889, 121.063333], { icon: redIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Chumanchil" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Chumanchil</p> <p>Elev: 2008 m, Prom: 157 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15658.674741028663!2d121.05485632882433!3d17.244186703878263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fc86e95621cbf%3A0x13f38a3d1d1883dc!2sMount%20Chumanchil!5e1!3m2!1sen!2sph!4v1598007364821!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4623764, 121.0949547], { icon: orangeIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pallua" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pallua</p> <p>Elev: 1977 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15640.039870729379!2d121.08652302886016!3d17.46251992739455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa56e950cff4f%3A0xa7482ef605b2e9c6!2sMount%20Pallua!5e1!3m2!1sen!2sph!4v1598007492680!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.45, 121.15], { icon: orangeIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magsingit_(bukid_sa_Pilipinas,_Kalinga)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masingit</p> <p>Elev: 1931 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15640.039870729379!2d121.08652302886016!3d17.46251992739455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa4bdc614a521%3A0x86bad41552f37df8!2sMount%20Magsingit!5e1!3m2!1sen!2sph!4v1598007565339!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4791996, 121.1767997], { icon: orangeIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dalayap" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dalayap</p> <p>Elev: 1918 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.661027350376!2d121.14624522885708!3d17.44363102969707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa38bf8419b67%3A0x3f7643371b5f35d0!2sMount%20Dalayap!5e1!3m2!1sen!2sph!4v1598007712699!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.240833, 121.168333], { icon: orangeIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mantingoy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mantingoy</p> <p>Elev: 1855 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15658.462650934684!2d121.16402302882473!3d17.246686703576646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fc0ac946e4717%3A0x3b6e8cfc4b28976a!2sSleeping%20Beauty%20Mountain%2C%20Kalinga!5e1!3m2!1sen!2sph!4v1598007792527!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.559444, 121.198056], { icon: orangeIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Makelkelan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Makelkelan</p> <p>Elev: 1751 m, Prom: 137 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.843461183165!2d121.18735632887403!3d17.546131017176783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa0e0577c97d5%3A0x4b9bbc09b10ca55d!2sMount%20Makelkelan!5e1!3m2!1sen!2sph!4v1598007908752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5255556, 121.1486111], { icon: orangeIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Adalem" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Adalem</p> <p>Elev: 1730 m, Prom: 250 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15634.615756013909!2d121.13985632887062!3d17.525575569692673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa6bdfd9049ed%3A0xcdd8e41b3bf41cb!2sMount%20Adalem!5e1!3m2!1sen!2sph!4v1598008019516!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.45, 121.066667], { icon: orangeIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Longolung" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Longolung</p> <p>Elev: 1737 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.112880291705!2d121.0579119288581!3d17.450019978918522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fafe55ef68d11%3A0xc3156a23bae83203!2sMount%20Longolung!5e1!3m2!1sen!2sph!4v1598008101177!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4684, 121.0118], { icon: orangeIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panogaan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panogaan</p> <p>Elev: 1626 m, Prom: 86 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.112880291705!2d121.0579119288581!3d17.450019978918522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fae3fc60b6dd7%3A0xd6efdc7a809332a6!2sMount%20Panogaan!5e1!3m2!1sen!2sph!4v1598008187823!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.6225, 121.223889], { icon: orangeIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lubluba" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lubluba</p> <p>Elev: 1620 m, Prom: 217 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15626.311750018383!2d121.21485632888667!3d17.621686657907375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f0afdc22d01d7%3A0x2505a092e0528bcb!2sMount%20Lubluba!5e1!3m2!1sen!2sph!4v1598008258758!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4825, 121.1994444], { icon: orangeIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balantay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balantay</p> <p>Elev: 1525 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.321495913968!2d121.1906896288635!3d17.482519974954247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa3c0d5909a81%3A0xa1fe3896e82c543b!2sMount%20Balantay!5e1!3m2!1sen!2sph!4v1598008355518!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4723, 121.0519], { icon: tealIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mabukok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mabukok</p> <p>Elev: 1439 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15639.204787355988!2d121.04318962886178!3d17.472242176208596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fafbc947c8f83%3A0x1f02ae897e350808!2sMount%20Mabukok!5e1!3m2!1sen!2sph!4v1598008572979!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4723, 121.0519], { icon: tealIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binuluan_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binutuan</p> <p>Elev: 1347 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.139131282074!2d121.13596742883878!3d17.332797793164332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb96637d4a1ad%3A0xbdc46163e5ff6372!2sMount%20Binuluan!5e1!3m2!1sen!2sph!4v1598008715271!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5361111, 121.2294444], { icon: tealIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Libang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Libang</p> <p>Elev: 1346 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.705914437145!2d121.22068962887239!3d17.536131018401047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa1b293c6381b%3A0x77bcd8776354a95a!2sMount%20Libang!5e1!3m2!1sen!2sph!4v1598008845751!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.260278, 121.259167], { icon: tealIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tangob_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tangob</p> <p>Elev: 1333 m, Prom: 92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15657.236661572895!2d121.24874522882705!3d17.261131101833158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fbfde722540ff%3A0x222c2d6f0f1f2838!2sMount%20Tangob!5e1!3m2!1sen!2sph!4v1598009047197!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.233333], { icon: tealIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pacok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pacok</p> <p>Elev: 1258 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15634.591830384266!2d121.21541192887068!3d17.525853219658703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa1a5b5adbcff%3A0xe4d1ea02d40299e9!2sMount%20Pacok!5e1!3m2!1sen!2sph!4v1598009135981!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4916994, 121.0782999], { icon: tealIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Busingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Busingan</p> <p>Elev: 1239 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15637.533274031113!2d121.06957852886501!3d17.491686623834976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338faf62bdf84c41%3A0xe2f63fcee27da26c!2sMount%20Busingan!5e1!3m2!1sen!2sph!4v1598009202620!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.15], { icon: tealIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Selet" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Selet</p> <p>Elev: 1184 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.945397875823!2d121.14124522887191!3d17.53335326874101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa6c1b340f7a5%3A0xa70e62478749be6f!2sMount%20Selet!5e1!3m2!1sen!2sph!4v1598009287771!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.536389, 121.280278], { icon: tealIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maybinulong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maybinulong</p> <p>Elev: 1184 m, Prom: 270 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.63406008452!2d121.27180082887253!3d17.536964368299053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f9f999d37b90b%3A0xfd5d48f567c9abd0!2sMount%20Maybinulong!5e1!3m2!1sen!2sph!4v1598009362417!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3738889, 121.1766667], { icon: cyanIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bolontoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bolontoc</p> <p>Elev: 999 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.630272853416!2d121.16791192884556!3d17.373908888177553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fbc7ea8471b53%3A0xa438e8b61875c306!2sMount%20Bolontoc!5e1!3m2!1sen!2sph!4v1598009475958!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3738889, 121.1766667], { icon: cyanIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bayekngebang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bayekngebang</p> <p>Elev: 863 m, Prom: 211 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15646.56179273032!2d121.20207852884764!3d17.386408886659304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fbce47999f2c1%3A0xeb3ee127046748f7!2sMount%20Bayekngebang!5e1!3m2!1sen!2sph!4v1598009626572!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.166667], { icon: cyanIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Portoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Portoc</p> <p>Elev: 839 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.190132320524!2d121.15541192886951!3d17.518908820508106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa6b1eb414ea5%3A0x43eeb4d2947b2148!2sMount%20Portoc!5e1!3m2!1sen!2sph!4v1598009716365!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1829114, 120.8712865], { icon: redIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Camingingel" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Camingingel</p> <p>Elev: 2372 m, Prom: 317 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.896861369036!2d120.86235632881431!3d17.182520011306533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e331f398d56df%3A0x33f527c8478486a6!2sMount%20Camingingel!5e1!3m2!1sen!2sph!4v1598013010344!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1769828, 120.8712206], { icon: redIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Loco-ono" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Loco-ono</p> <p>Elev: 2335 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15664.366435278804!2d120.86263412881338!3d17.17696441197462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e32e03dfd1319%3A0x3a1938b8f6a31803!2sMount%20Loco-ono!5e1!3m2!1sen!2sph!4v1598013085396!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.161912, 120.8848462], { icon: redIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sipitan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sipitan</p> <p>Elev: 2288 m, Prom: 123 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15665.985316147167!2d120.87152302881033!3d17.157797814278094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e32c71eee3ebf%3A0x8981077b5a6b8985!2sMount%20Sipitan!5e1!3m2!1sen!2sph!4v1598013153077!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.2162321, 120.9109379], { icon: redIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mengmeng" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mengmeng</p> <p>Elev: 2283 m, Prom: 128 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15661.076350789252!2d120.90152302881972!3d17.21585330729409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fcb58ff369b43%3A0x6e25330df32e5834!2sMount%20Mengmeng!5e1!3m2!1sen!2sph!4v1598013236531!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1821994, 120.8893458], { icon: redIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matoni" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matoni</p> <p>Elev: 2272 m, Prom: 59 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15663.920345252978!2d120.88096742881429!3d17.182242211339943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e332e8481f779%3A0x9ceb06c3843e79f!2sMount%20Matoni!5e1!3m2!1sen!2sph!4v1598013322396!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8725629, 120.8814918], { icon: redIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Data_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Data</p> <p>Elev: 2193 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15689.250536596901!2d120.83902302876584!3d16.880020047413645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391d382458e68bf%3A0xf2d1a161be8e8dac!2sMount%20Data!5e1!3m2!1sen!2sph!4v1598013448660!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1532149, 120.8521623], { icon: redIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masbit</p> <p>Elev: 2153 m, Prom: 163 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16345.631453453565!2d120.84329646102123!3d17.153219990122082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA5JzExLjYiTiAxMjDCsDUxJzA3LjgiRQ!5e1!3m2!1sen!2sph!4v1598013612478!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.112222, 121.132222], { icon: redIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lamagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lamagan</p> <p>Elev: 2137 m, Prom: 270 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15669.849463265991!2d121.12152302880288!3d17.11196441977747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fc4de0d9a9ef7%3A0xb2599d0a536ff95!2sMount%20Lamagan!5e1!3m2!1sen!2sph!4v1598013723851!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.060278, 121.094167], { icon: redIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Puguis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Puguis</p> <p>Elev: 2094 m, Prom: 197 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.216697915605!2d121.06624522879456!3d17.060020025994792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fd07e17f5c89b%3A0xbec29d9458265313!2sMount%20Puguis!5e1!3m2!1sen!2sph!4v1598013794251!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.135308, 120.8802253], { icon: redIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Danac</p> <p>Elev: 2057 m, Prom: 160 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16801.650579164478!2d120.87131264820296!3d17.135313095219697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA4JzA3LjEiTiAxMjDCsDUyJzQ4LjgiRQ!5e1!3m2!1sen!2sph!4v1598014071146!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.123056, 121.251389], { icon: orangeIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Oyayao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Oyayao</p> <p>Elev: 1914 m, Prom: 415 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.91361488628!2d121.24263412880472!3d17.123075618445434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fc27ab3a1ede9%3A0xfc1feb131df0c339!2sMount%20Oyayao!5e1!3m2!1sen!2sph!4v1598014148185!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.066865, 120.8836569], { icon: orangeIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ampakaw</p> <p>Elev: 1894 m, Prom: 182 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.637623449631!2d120.87524052879569!3d17.06691642517029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e2cb9d958df09%3A0x15662c96cfb761ff!2sMount%20Ampacao!5e1!3m2!1sen!2sph!4v1598014503630!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.146389, 120.982222], { icon: orangeIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patoc</p> <p>Elev: 1840 m, Prom: 289 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.969869825462!2d120.97291192880844!3d17.146131115679133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fcdece4f83a5d%3A0x84db3c37392ebc31!2sPatoc!5e1!3m2!1sen!2sph!4v1598014646869!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.008333, 120.824167], { icon: orangeIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amo</p> <p>Elev: 1764 m, Prom: 153 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15678.547804995935!2d120.81374522878627!3d17.00835333216277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e2a3740768f33%3A0xa69f59bdf3cc157f!2sMount%20Amo!5e1!3m2!1sen!2sph!4v1598014720639!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1272698, 120.8557207], { icon: orangeIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nadango" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nadango</p> <p>Elev: 1752 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15668.515705940576!2d120.84680082880548!3d17.127797817879106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e2d775522dd5d%3A0x40df69e868b4abaf!2sMount%20Nadango!5e1!3m2!1sen!2sph!4v1598014784054!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1391917, 120.974132], { icon: orangeIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kofafey</p> <p>Elev: 1711 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15765.2376998687!2d120.96534856706754!3d17.133870097876684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fcdff01ffa7ed%3A0x9f4521f87cccd57c!2sMt.%20Kupapey%20(Kufafey)!5e1!3m2!1sen!2sph!4v1598014871936!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1391917, 120.974132], { icon: orangeIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kofafey/Kupapey</p> <p>Elev: 1711 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15765.2376998687!2d120.96534856706754!3d17.133870097876684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fcdff01ffa7ed%3A0x9f4521f87cccd57c!2sMt.%20Kupapey%20(Kufafey)!5e1!3m2!1sen!2sph!4v1598014871936!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0615999, 120.8348002], { icon: orangeIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tinandanan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinangdanan</p> <p>Elev: 1707 m, Prom: 220 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.076769850271!2d120.82596742879483!3d17.061686725795557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e2c76c295da43%3A0x3416e8f1a2aace22!2sMount%20Tinandanan!5e1!3m2!1sen!2sph!4v1598015070467!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1572222, 120.8252778], { icon: orangeIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Antinangad" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Antinangad</p> <p>Elev: 1689 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15666.032222223419!2d120.81652302881021!3d17.157242164344844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e321319a93a77%3A0xcbbaa21a280a2abf!2sMount%20Antinangad!5e1!3m2!1sen!2sph!4v1598015155674!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0665503, 120.9172171], { icon: orangeIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Marlboro Country</p> <p>Elev: 1542 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16214.306881171997!2d120.91647869827976!3d17.07068159624093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fd3113a9621e3%3A0x4f998205af42363e!2sMarlboro%20Hill!5e1!3m2!1sen!2sph!4v1598015606980!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0604068, 120.9765161], { icon: orangeIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palikot Aso</p> <p>Elev: 1533 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16572.784010887033!2d120.96756920560755!3d17.060411890435905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAzJzM3LjUiTiAxMjDCsDU4JzM1LjUiRQ!5e1!3m2!1sen!2sph!4v1598015897560!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0743, 120.8], { icon: tealIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nalibo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nalibo</p> <p>Elev: 1428 m, Prom: 55 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.02690760582!2d120.79124522879683!3d17.074186724300773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e2ea626d551a5%3A0xcf7751f47ff1cc0a!2sMount%20Nalibo!5e1!3m2!1sen!2sph!4v1598015964413!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.9458879, 120.8317646], { icon: tealIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mogao</p> <p>Elev: 1309 m, Prom: 221 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15671.418838140347!2d120.85501662879989!3d17.093315722011443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e2ce2f3dbdc09%3A0xcb41acc2c31a7a72!2sMt.%20Mogao!5e1!3m2!1sen!2sph!4v1598016030410!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.087, 120.7962001], { icon: tealIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tinimogan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinimogan</p> <p>Elev: 1246 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15671.95295059845!2d120.78735632879892!3d17.086964422771807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e2e98ee3bc1cf%3A0xf821941af281fb28!2sMount%20Tinimogan!5e1!3m2!1sen!2sph!4v1598016223907!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0893708, 120.9676832], { icon: tealIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Chata</p> <p>Elev: 1156 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15683.287159584097!2d120.95900850911093!3d17.089375844917186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA1JzIxLjciTiAxMjDCsDU4JzAzLjciRQ!5e1!3m2!1sen!2sph!4v1598016529420!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1038889, 120.8347222], { icon: tealIcon })
  .addTo(mtprovincemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cacamtanan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cacamtanan</p> <p>Elev: 1055 m, Prom: 26 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15670.527574743237!2d120.82596742880162!3d17.103908920742708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e2db3c7b670eb%3A0x9426f081724e5f23!2sMount%20Cacamtanan!5e1!3m2!1sen!2sph!4v1598016588728!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5977263, 120.8987919], { icon: magentaIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pulag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pulag</p> <p>Elev: 2928 m, Prom: 2928 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.533037874122!2d120.89041182872167!3d16.597520080635384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904accf133372f%3A0xa20b501379e7d400!2sMount%20Pulag!5e1!3m2!1sen!2sph!4v1598016806401!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.866667, 121.416667], { icon: magentaIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amuyan_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amuyao</p> <p>Elev: 2692 m, Prom: 830 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.42719114663!2d121.40707852876362!3d16.865853299091114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33901d65f279bde9%3A0xfc3f97aeba504b45!2sMount%20Amuyan!5e1!3m2!1sen!2sph!4v1598016975472!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.866667, 121.416667], { icon: magentaIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amuyan_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amuyao</p> <p>Elev: 2692 m, Prom: 830 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.42719114663!2d121.40707852876362!3d16.865853299091114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33901d65f279bde9%3A0xfc3f97aeba504b45!2sMount%20Amuyan!5e1!3m2!1sen!2sph!4v1598016975472!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.6466426, 120.8833181], { icon: magentaIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panatoan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panotoan</p> <p>Elev: 2687 m, Prom: 320 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.050265423064!2d120.87874522873206!3d16.664464472806323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cad1293c929f%3A0x237ec3a333950b8f!2sMount%20Panatoan!5e1!3m2!1sen!2sph!4v1598017090791!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.960833, 120.970556], { icon: magentaIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kalawitan</p> <p>Elev: 2672 m, Prom: 667 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16883.49657247562!2d120.96144674917407!3d16.96123530496806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fd5f20071ef41%3A0xf44eec07a86dd8de!2sMt.%20Kalawitan%2C%20Bontoc%2C%20Mountain%20Province!5e1!3m2!1sen!2sph!4v1598017254164!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.845833, 120.941111], { icon: magentaIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kapiligan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kapiligan</p> <p>Elev: 2669 m, Prom: 636 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15692.132769332922!2d120.93235632876036!3d16.845297851522886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33902cf5fd6a7309%3A0xad151c6e8a2dec42!2sMount%20Kapiligan!5e1!3m2!1sen!2sph!4v1598017498086!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8307085, 120.9605513], { icon: magentaIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Napalauan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Napulauan</p> <p>Elev: 2612 m, Prom: 285 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.842492804659!2d120.96688891488179!3d16.854494022390984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33902dc7efff1dc7%3A0x94bad28551718caf!2sMt.%20Napulauan!5e1!3m2!1sen!2sph!4v1598017565934!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8323069, 120.9148864], { icon: magentaIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Abao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Abao</p> <p>Elev: 2597 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15693.122930456297!2d120.90791192875848!3d16.833353352934804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33902d2077786545%3A0x5d1fcf732a5e5c22!2sMount%20Abao!5e1!3m2!1sen!2sph!4v1598017660641!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7, 120.883333], { icon: redIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tabeyo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tabayoc</p> <p>Elev: 2498 m, Prom: 185 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15705.020077516656!2d120.87735632873591!3d16.689186769908265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cb37a3f345bf%3A0x14283dd882cc545b!2sMount%20Tabeyo!5e1!3m2!1sen!2sph!4v1598018059743!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8523225, 120.9681709], { icon: redIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Peak</p> <p>Elev: 2274 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16621.590240769547!2d120.95838094704446!3d16.851116096245136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzA0LjAiTiAxMjDCsDU4JzAyLjAiRQ!5e1!3m2!1sen!2sph!4v1598017906587!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8073553, 120.9583404], { icon: redIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Peak</p> <p>Elev: 2259 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16898.0725472009!2d120.94719115340693!3d16.813894105654395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ4JzUwLjAiTiAxMjDCsDU3JzIyLjAiRQ!5e1!3m2!1sen!2sph!4v1598017886986!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.783333, 120.883333], { icon: redIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palugloko" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palugloko</p> <p>Elev: 2243 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.260368216355!2d120.87457852875065!3d16.783353358835743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cd459bcca1df%3A0x1e38b5e0b14a8ed5!2sMount%20Palugloko!5e1!3m2!1sen!2sph!4v1598018132922!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.739444, 120.95], { icon: redIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guibul" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guibul</p> <p>Elev: 2206 m, Prom: 437 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15700.950946697647!2d120.94180082874364!3d16.738631164101033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339033add5997429%3A0x66d8f481dd268182!2sMount%20Guibul!5e1!3m2!1sen!2sph!4v1598018239264!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.974722, 121.029167], { icon: redIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Polis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Polis</p> <p>Elev: 2021 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15322.390624752548!2d121.01801366369364!3d16.965879805000274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fd64969ae8877%3A0x5c1d7d51a6498f5!2sMount%20Polis!5e1!3m2!1sen!2sph!4v1598018346840!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0296574, 121.2930954], { icon: orangeIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ampalauag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ampalauag</p> <p>Elev: 1701 m, Prom: 410 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.756366306907!2d121.28457852878971!3d17.029742229611305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fe7a45a65aff1%3A0x86c599bca4002685!2sMount%20Ampalauag!5e1!3m2!1sen!2sph!4v1598018505710!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7681896, 121.011106], { icon: orangeIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nazagarray" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nazagarry</p> <p>Elev: 1527 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15698.84321118523!2d121.05624522874761!3d16.764186761093775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390301c5551cc41%3A0xfc83d8ef6a2ec74b!2sMount%20Nazagarray!5e1!3m2!1sen!2sph!4v1598018567291!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7603251, 121.034746], { icon: orangeIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Indalmogan</p> <p>Elev: 1520 m, Prom: 117 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.7903711960716!2d121.03255731488079!3d16.76033022499756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzM3LjIiTiAxMjHCsDAyJzA1LjEiRQ!5e1!3m2!1sen!2sph!4v1598018702033!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.880278, 121.1325], { icon: tealIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Jamalapah" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Jamalapah</p> <p>Elev: 1422 m, Prom: 430 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15689.204370314388!2d121.12263412876595!3d16.880575647347822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339026fde721dea7%3A0x4bb32b5359812abb!2sMount%20Jamalapah!5e1!3m2!1sen!2sph!4v1598018772296!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7905446, 121.0523458], { icon: tealIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Puloy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Puloy</p> <p>Elev: 1390 m, Prom: 106 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15696.70939770809!2d121.0434674287517!3d16.79002005804982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33902fbf60165437%3A0xed617c12733eb38c!2sMount%20Puloy!5e1!3m2!1sen!2sph!4v1598018830887!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.866667, 121.15], { icon: tealIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kaanducuan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kaanducuan</p> <p>Elev: 1191 m, Prom: 81 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.357993446365!2d121.14124522876375!3d16.86668674899244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339026c2e997bced%3A0x4814f1c6b1512868!2sMount%20Kaanducuan!5e1!3m2!1sen!2sph!4v1598018902813!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.810833, 121.187222], { icon: tealIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binhagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binhagan</p> <p>Elev: 1160 m, Prom: 541 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15696.181186611784!2d121.1923563287527!3d16.796408957296393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339023a4ca7f066f%3A0x3634ae9cc98a2746!2sMount%20Binhagan!5e1!3m2!1sen!2sph!4v1598018960633!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7928531, 121.0816088], { icon: tealIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kappugan</p> <p>Elev: 1039 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.386872751506!2d121.07285782356064!3d16.792858205761398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ3JzM0LjMiTiAxMjHCsDA0JzUzLjgiRQ!5e1!3m2!1sen!2sph!4v1598019170064!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7741536, 121.0813587], { icon: tealIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Atade</p> <p>Elev: 1007 m, Prom: 42 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15044.611639122635!2d121.07270447869608!3d16.774158696250133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ2JzI3LjAiTiAxMjHCsDA0JzUyLjkiRQ!5e1!3m2!1sen!2sph!4v1598019663847!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.861944, 121.223611], { icon: cyanIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dome_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dome</p> <p>Elev: 660 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.081210966595!2d121.19680082876427!3d16.870020048597848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339020fd4d0b6625%3A0xb4d442abf6625d98!2sMount%20Dome!5e1!3m2!1sen!2sph!4v1598019961980!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.75, 121.283333], { icon: cyanIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mabitayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mabittayon</p> <p>Elev: 635 m, Prom: 183 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15700.676205031592!2d121.27430082874413!3d16.741964463709014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339018179948dfe9%3A0x205ffed1bf04324a!2sMount%20Mabitayan!5e1!3m2!1sen!2sph!4v1598020120919!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.833333, 121.3], { icon: cyanIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baong</p> <p>Elev: 537 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15694.319414271551!2d121.29374522875622!3d16.818908954641067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33901f2f2a7d1923%3A0x12e21644d100930d!2sMount%20Baong!5e1!3m2!1sen!2sph!4v1598020187536!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.866667, 121.416667], { icon: cyanIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amuyan_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baong</p> <p>Elev: 387 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.427191146626!2d121.40707852876366!3d16.8658532990911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33901d65f279bde9%3A0xfc3f97aeba504b45!2sMount%20Amuyan!5e1!3m2!1sen!2sph!4v1598020260566!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.6541667, 120.7866667], { icon: magentaIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mongawto" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mongawto</p> <p>Elev: 2720 m, Prom: 965 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29026.75056386102!2d120.76911414466585!3d16.65420677732746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c9e609f788ab%3A0xbea938ca75c15c81!2sMount%20Mongawto!5e1!3m2!1sen!2sph!4v1598031988877!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5788889, 120.8841667], { icon: magentaIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Babadak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Babadak</p> <p>Elev: 2603 m, Prom: 120 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.053483960104!2d120.87541192871878!3d16.57890898280713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b4da7fb2cf67%3A0x389961643cc0259e!2sMount%20Babadak!5e1!3m2!1sen!2sph!4v1598032074960!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7302741, 120.7628452], { icon: magentaIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Osdung" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Osdung</p> <p>Elev: 2570 m, Prom: 329 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.591812162085!2d120.75485632874239!3d16.730853365015516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c92b62391ec5%3A0xdd006f660b199343!2sMount%20Osdung!5e1!3m2!1sen!2sph!4v1598032188945!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.68, 120.7825], { icon: magentaIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nangaoto" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nangaoto</p> <p>Elev: 2556 m, Prom: 179 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15706.069751746752!2d120.77485632873392!3d16.676408971406588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c997816ff453%3A0xe631ec6e0e92b5ce!2sMount%20Nangaoto!5e1!3m2!1sen!2sph!4v1598032265036!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.65, 120.783333], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Singakalsa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Singakalsa</p> <p>Elev: 2470 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.938971327563!2d120.78513412873035!3d16.653631174075105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c9faa2074793%3A0xcc762e786839b3df!2sMount%20Singakalsa!5e1!3m2!1sen!2sph!4v1598032354463!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.6333333, 120.75], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pawoi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pawoi</p> <p>Elev: 2459 m, Prom: 170 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15709.600944083348!2d120.74124522872721!3d16.63335337644811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b7c919c84339%3A0xc8a92751e2470d56!2sMount%20Pawoi!5e1!3m2!1sen!2sph!4v1598032477549!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.643432, 120.8665437], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aki" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aki</p> <p>Elev: 2354 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15708.235081839764!2d120.85791192872983!3d16.650020074497878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ca93789546fd%3A0x14ce6a40d0629344!2sMount%20Aki!5e1!3m2!1sen!2sph!4v1598032571515!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.503056, 120.883889], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pauadan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pauadan</p> <p>Elev: 2347 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.231592201948!2d120.87596742870711!3d16.50307569163449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b32805d4a497%3A0x6018451187ed33ec!2sMount%20Pauadan!5e1!3m2!1sen!2sph!4v1598032659451!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.829444, 120.895], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Peak</p> <p>Elev: 2342 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15240.312510155305!2d120.8863851868873!3d16.829449104713845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ5JzQ2LjAiTiAxMjDCsDUzJzQyLjAiRQ!5e1!3m2!1sen!2sph!4v1598033017028!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.6258378, 120.8618542], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ambobongan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ambubungan</p> <p>Elev: 2257 m, Prom: 135 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15710.237883917323!2d120.85457852872602!3d16.625575677357617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b56493261b81%3A0xf03edad2cf750a8c!2sMount%20Ambobongan!5e1!3m2!1sen!2sph!4v1598033083215!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3349316, 120.5610265], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santo_Tomas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santo Tomas</p> <p>Elev: 2251 m, Prom: 887 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15733.82486228582!2d120.55207852868148!3d16.335020111073064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33910a9a9657ec6f%3A0x1964074191bf3f01!2sMount%20Santo%20Tomas!5e1!3m2!1sen!2sph!4v1598033168852!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5686207, 120.736075], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Toyangan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Toyangan</p> <p>Elev: 2206 m, Prom: 337 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.915093815658!2d120.72735632871714!3d16.56835338403792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b0cab6c8c88f%3A0x660725985be6b2b3!2sMount%20Toyangan!5e1!3m2!1sen!2sph!4v1598033247185!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5495886, 120.8711302], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palansa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palansa</p> <p>Elev: 2170 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15716.410297376196!2d120.85791192871433!3d16.55002008617403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b49dd30d43b3%3A0xfb3dc6518a46a590!2sMount%20Palansa!5e1!3m2!1sen!2sph!4v1598033386749!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.769444, 120.684167], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lobo_(bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lobo</p> <p>Elev: 2123 m, Prom: 473 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15698.54512858123!2d120.67707852874821!3d16.767797860668516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c5bf0b6eb88d%3A0xe7058b15eb84a421!2sMount%20Lobo!5e1!3m2!1sen!2sph!4v1598033477714!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5798001, 120.7305957], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Damocnoc</p> <p>Elev: 2122 m, Prom: 164 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16882.572848826065!2d120.72161373706801!3d16.579805209483524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDM0JzQ3LjMiTiAxMjDCsDQzJzUwLjEiRQ!5e1!3m2!1sen!2sph!4v1598033612138!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7601586, 120.6388645], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagpew</p> <p>Elev: 2105 m, Prom: 473 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16715.679434100806!2d120.63005067936106!3d16.760163681087036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzM2LjYiTiAxMjDCsDM4JzE5LjkiRQ!5e1!3m2!1sen!2sph!4v1598033743709!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.716944, 120.796944], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pa%27pa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pa\'pa</p> <p>Elev: 2084 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15703.466956198547!2d120.75735632873885!3d16.70807566769151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c9190442a907%3A0xa410b314e1208e55!2sMount%20Pa&#39;pa!5e1!3m2!1sen!2sph!4v1598034024596!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7, 120.85], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bulbul" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulbul</p> <p>Elev: 2076 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15704.12952876236!2d120.84124522873758!3d16.700020068637155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cb75803cea69%3A0x70d70453ec6de741!2sMount%20Bulbul!5e1!3m2!1sen!2sph!4v1598034110974!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.566667, 120.866667], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Libung_(bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Libung</p> <p>Elev: 2032 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.051082708474!2d120.8579119287169!3d16.566686784232193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b49364f2c329%3A0x4e56d98178256e7e!2sMount%20Libung!5e1!3m2!1sen!2sph!4v1598034191146!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.35941, 120.5651687], { icon: redIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kabuyao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kabuyao</p> <p>Elev: 2010 m, Prom: 69 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.995356964064!2d120.56364301494118!3d16.357903435981637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a0644ee774ff%3A0xced6ec37967aca5b!2sMount%20Kabuyao%20View%20Deck!5e1!3m2!1sen!2sph!4v1598034391596!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.673889, 120.699167], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bakoko" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bakoko</p> <p>Elev: 1999 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.91618501837!2d120.6801341287304!3d16.653909024042573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b873351a15e1%3A0x2a1282ee088fe09e!2sMount%20Bakoko!5e1!3m2!1sen!2sph!4v1598034582503!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.75, 120.75], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulog_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pulog Mountain</p> <p>Elev: 1993 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15700.012016311219!2d120.7412452287454!3d16.750020062761344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cf247a951d27%3A0xa203df7231db4831!2sPulog%20Mountain!5e1!3m2!1sen!2sph!4v1598034661012!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.833333, 120.65], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tenglawan</p> <p>Elev: 1981 m, Prom: 396 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.638719567834!2d120.64269405818212!3d16.832913791378186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c4ccfc2068e7%3A0x68aa6b3d42a725ad!2sMt%20Tenglawan%20Summit!5e1!3m2!1sen!2sph!4v1598034782807!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5830556, 120.7741667], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bayabas_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bayabas</p> <p>Elev: 1912 m, Prom: 115 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15713.713226697666!2d120.76541192871939!3d16.583075682321084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b6c20e77353f%3A0x3ef2390871e1238c!2sBayabas!5e1!3m2!1sen!2sph!4v1598035031146!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7265485, 120.6321923], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagpaya</p> <p>Elev: 1830 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16137.22207637032!2d120.62330202089437!3d16.726553594909237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQzJzM1LjYiTiAxMjDCsDM3JzU1LjkiRQ!5e1!3m2!1sen!2sph!4v1598035376991!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.833333, 120.833333], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lusong_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lusong</p> <p>Elev: 1829 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15693.122930456291!2d120.82457852875852!3d16.833353352934793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391d24424d84847%3A0x1975c92119fc3b71!2sMount%20Lusong!5e1!3m2!1sen!2sph!4v1598035468214!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.2904204, 120.6311489], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ulap Summit</p> <p>Elev: 1829 m, Prom: 529 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16987.86990936509!2d120.62223070557445!3d16.29036541206638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a0d629940071%3A0xf738f1e7f7475a27!2sMount%20Ulap%20-%20Summit!5e1!3m2!1sen!2sph!4v1598035561134!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.266667, 120.616667], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Poris" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Poris</p> <p>Elev: 1802 m, Prom: 99 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15739.068394912294!2d120.61346742867163!3d16.2697423685775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391095faf99b991%3A0xeecf02ee030565d4!2sMount%20Poris!5e1!3m2!1sen!2sph!4v1598035684966!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.6, 120.816667], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Andok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Andok</p> <p>Elev: 1801 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.32867241686!2d120.80791192872205!3d16.600020080343498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b5cd74795ab5%3A0xa4cc20951257a078!2sMount%20Andok!5e1!3m2!1sen!2sph!4v1598035757308!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.2870681, 120.6322888], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ulap</p> <p>Elev: 1792 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15737.438089356796!2d120.62221162867469!3d16.290065616243872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339109782260604b%3A0x77b32d74b730ec29!2sMt.%20Ulap!5e1!3m2!1sen!2sph!4v1598035846448!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.2952667, 120.6371278], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Gungal Peak - 2nd Peak</p> <p>Elev: 1788 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15737.037543233417!2d120.62805882867544!3d16.29505501567057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391099c1b2a9ea7%3A0xb91486e0a9b1db2f!2sGungal%20Rock!5e1!3m2!1sen!2sph!4v1598035975800!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4502469, 120.8578323], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bukas_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bukas</p> <p>Elev: 1776 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.380062499513!2d120.85318962869928!3d16.45196454756446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ad6fdafa3649%3A0xeffcd986e530bb7f!2sMount%20Bukas!5e1!3m2!1sen!2sph!4v1598036064422!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8027463, 120.6325811], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Kabunian Peak</p> <p>Elev: 1767 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16395.46475411269!2d120.62369153885075!3d16.802751374253408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ4JzA5LjkiTiAxMjDCsDM3JzU3LjMiRQ!5e1!3m2!1sen!2sph!4v1598036172790!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3000061, 120.6333279], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tuey_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tuey Peak</p> <p>Elev: 1760 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15736.638829433507!2d120.6245785286762!3d16.30002011509992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391099aec0d43fb%3A0x29bb96f94f3018a5!2sTuey%20Peak!5e1!3m2!1sen!2sph!4v1598036298468!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.566667, 120.683333], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Atok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Atok</p> <p>Elev: 1755 m, Prom: 222 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.20973048939!2d120.6784674287166!3d16.56474228445883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ba3d15d430ef%3A0x3c234f0540c02bbe!2sMount%20Atok!5e1!3m2!1sen!2sph!4v1598036367752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.405556, 120.854167], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ambagyew" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ambagyew</p> <p>Elev: 1709 m, Prom: 186 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.95479975095!2d120.84763412869252!3d16.407797902676002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391acf159f85e25%3A0x1fc495fdc2d71a22!2sMount%20Ambagyew!5e1!3m2!1sen!2sph!4v1598036456635!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.45, 120.883333], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caual" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caual</p> <p>Elev: 1674 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.101314007672!2d120.87013412869413!3d16.418353401455462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391acd8b5c16ce9%3A0x40a92a3b3e7def19!2sMount%20Caual!5e1!3m2!1sen!2sph!4v1598036774742!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4539741, 120.6084949], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Jumbo</p> <p>Elev: 1660 m, Prom: 239 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.053892089441!2d120.60486331487792!3d16.4539941333818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a35c28b55395%3A0x3630364b2c870c47!2sMt.%20Yangbew!5e1!3m2!1sen!2sph!4v1598036955925!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.366667, 120.779167], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lusod" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lusod</p> <p>Elev: 1642 m, Prom: 176 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15731.296230365699!2d120.77096742868623!3d16.366409007455363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a91343d46017%3A0xc0bd594f80eed694!2sMount%20Lusod!5e1!3m2!1sen!2sph!4v1598037079506!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.301111, 120.691389], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ananeto" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ananeto</p> <p>Elev: 1635 m, Prom: 365 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15736.080973130463!2d120.68596742867723!3d16.306964514301537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33910814078cfc29%3A0x7cfee98ae15c7a18!2sMount%20Ananeto!5e1!3m2!1sen!2sph!4v1598037140443!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8077778, 120.8108333], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sinakiay_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sinakiay Hill</p> <p>Elev: 1602 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15695.239109604734!2d120.80207852875446!3d16.807797855952717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cdf8bf26af7d%3A0x5e1635fe6cec35fb!2sSinakiay%20Hill!5e1!3m2!1sen!2sph!4v1598037214470!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5281479, 120.8099688], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dusong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dusong</p> <p>Elev: 1555 m, Prom: 285 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.130055838583!2d120.80041192871109!3d16.528908988631276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b3d9643585b7%3A0x834c8efbe35a416b!2sMount%20Dusong!5e1!3m2!1sen!2sph!4v1598037326452!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4092507, 120.5797512], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mirador" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mirador</p> <p>Elev: 1539 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.82007901212!2d120.57152302869281!3d16.409464502483345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a173fb0f5ab3%3A0x8220edf55b2f0993!2sMount%20Mirador!5e1!3m2!1sen!2sph!4v1598037477512!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.533333, 120.816667], { icon: orangeIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Obudan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Obudan</p> <p>Elev: 1534 m, Prom: 38 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.768182180067!2d120.80791192871176!3d16.53335338811419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b3c2bf7def6b%3A0x7e71abd81c5f72dc!2sMount%20Obudan!5e1!3m2!1sen!2sph!4v1598037601282!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5211667, 120.8116667], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Daclan</p> <p>Elev: 1494 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15995.524666460087!2d120.80533004590377!3d16.521657566993948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b3d1ca10b987%3A0xe2f852eb0005190!2sDaclan%20Sulfur%20Spring!5e1!3m2!1sen!2sph!4v1598037950596!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4452778, 120.8338889], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Koros_Widi_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Koros Widi Hill</p> <p>Elev: 1474 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.920243126066!2d120.82513412869825!3d16.445297898336772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391adbdcb230a7f%3A0x776f7defc245f0c3!2sKoros%20Widi%20Hill!5e1!3m2!1sen!2sph!4v1598038096727!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4616391, 120.8122678], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bugdan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bugdan</p> <p>Elev: 1468 m, Prom: 138 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.591913262011!2d120.80346742870077!3d16.461686796437693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ade4d47e957d%3A0xf3c96c2a94c00a6a!2sMount%20Bugdan!5e1!3m2!1sen!2sph!4v1598038242196!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7194663, 120.6433783], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buga</p> <p>Elev: 1461 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15273.076275226755!2d120.63458946094082!3d16.719471405145555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQzJzEwLjEiTiAxMjDCsDM4JzM2LjIiRQ!5e1!3m2!1sen!2sph!4v1598038333921!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4616081, 120.5799859], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Windy Hill</p> <p>Elev: 1458 m, Prom: 45 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.922175777892!2d120.56859856414815!3d16.462106911579443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a3ac6453bb21%3A0xeac090e31e46579!2sWindy%20Hill%20Buyagan%20La%20Trinidad%20Benguet!5e1!3m2!1sen!2sph!4v1598038491794!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4282275, 120.8502389], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangaku" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangaku</p> <p>Elev: 1453 m, Prom: 45 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15726.26976934602!2d120.84263412869569!3d16.42863120026637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ad00c8091079%3A0xb68094dbfba2203a!2sMount%20Mangaku!5e1!3m2!1sen!2sph!4v1598038616511!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.440285, 120.8164656], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pao_(bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pao</p> <p>Elev: 1452 m, Prom: 101 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15725.34773800779!2d120.80791192869746!3d16.440020098947997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391adcff5af45e9%3A0xc760d7967835b406!2sMount%20Pao!5e1!3m2!1sen!2sph!4v1598038673304!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.425556, 120.678056], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kadang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kadang</p> <p>Elev: 1450 m, Prom: 86 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15726.427119436323!2d120.67041192869543!3d16.426686850491375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a5c66baffe93%3A0xd0ba201c113b1978!2sMount%20Kadang!5e1!3m2!1sen!2sph!4v1598038760281!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5848617, 120.5698799], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salat</p> <p>Elev: 1445 m, Prom: 206 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.325625036392!2d120.55957852871828!3d16.575575683195865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391bdca02cd41f3%3A0x51fb6a8115bfccd6!2sMount%20Salat!5e1!3m2!1sen!2sph!4v1598038812465!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.383333, 120.766667], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Inoman" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Inoman</p> <p>Elev: 1421 m, Prom: 138 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.660173823371!2d120.75346742868932!3d16.38668685511508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a92897c1ecf7%3A0x58f1fcc14eb58f9e!2sMount%20Inoman!5e1!3m2!1sen!2sph!4v1598038882158!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3369444, 120.7838889], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anap" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anap</p> <p>Elev: 1414 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.617079005808!2d120.74124522868375!3d16.350020109344992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a996f63b4459%3A0x3392da23b4340c17!2sMount%20Anap!5e1!3m2!1sen!2sph!4v1598038963452!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.466667, 120.716667], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patoktok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patoktok</p> <p>Elev: 1371 m, Prom: 169 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.659491863571!2d120.70291192870066!3d16.46085339653431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a5627470b211%3A0x6455cdeb682f33d7!2sMount%20Patoktok!5e1!3m2!1sen!2sph!4v1598039079849!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5013062, 120.8556709], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Padoc, Karao</p> <p>Elev: 1346 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.91955355794!2d120.8468396556824!3d16.501311304513585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzA0LjciTiAxMjDCsDUxJzIwLjQiRQ!5e1!3m2!1sen!2sph!4v1598039240317!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4, 120.7], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buneco" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buñeco</p> <p>Elev: 1340 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.61796486783!2d120.68735632869316!3d16.411964502194294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a5e3f342f9fd%3A0xf7b8226810a495b!2sMount%20Buneco!5e1!3m2!1sen!2sph!4v1598039356902!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4544337, 120.7658245], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kotkot_(bukid_sa_Pilipinas,_lat_16,46,_long_120,77)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kotkot</p> <p>Elev: 1334 m, Prom: 114 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.13240839682!2d120.75707852869976!3d16.455020097210394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ae491792c8e3%3A0x4bf63819e9d68c39!2sMount%20Kotkot!5e1!3m2!1sen!2sph!4v1598039433752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.45, 120.716667], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kanote" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kanote</p> <p>Elev: 1333 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.537638017311!2d120.70791192869898!3d16.45002009778975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391af814158ec55%3A0xa502f00989bf4857!2sMount%20Kanote!5e1!3m2!1sen!2sph!4v1598039594209!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4563889, 120.8458333], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maidit_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maidit Hill</p> <p>Elev: 1331 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.019822461267!2d120.83707852869995!3d16.456408997049444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ad9ccb3363eb%3A0x711bca29f9c71199!2sMaidit%20Hill!5e1!3m2!1sen!2sph!4v1598039653306!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4410615, 120.7726864], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Damchak_(bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Damchak</p> <p>Elev: 1309 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15725.257747402977!2d120.76430082869763!3d16.441131248819335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ae5971d4d513%3A0xa90fd9a553374274!2sMount%20Damchak!5e1!3m2!1sen!2sph!4v1598039779852!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4897851, 120.7868395], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Darac_(bukid_sa_Pilipinas,_Province_of_Benguet)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Darac</p> <p>Elev: 1283 m, Prom: 114 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.315012602998!2d120.77846742870507!3d16.489742293182974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b1eed6fba35b%3A0x3ab6579be192c08d!2sMount%20Darac!5e1!3m2!1sen!2sph!4v1598039855122!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8904981, 120.7431642], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tungutigan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tongungan</p> <p>Elev: 1281 m, Prom: 111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15688.673401903996!2d120.66818962876695!3d16.886964446590913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391da4f7ad72c9d%3A0x831fec1c49341d69!2sMount%20Tungutigan!5e1!3m2!1sen!2sph!4v1598039931372!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3241667, 120.6877778], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kotkot_(bukid_sa_Pilipinas,_lat_16,32,_long_120,69)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kotkot</p> <p>Elev: 1274 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15734.696476875462!2d120.67902302867985!3d16.32418681232026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339108200ba5891d%3A0xcb801e3f72be9509!2sMount%20Kotkot!5e1!3m2!1sen!2sph!4v1598040046158!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.466667, 120.766667], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Indian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Indian</p> <p>Elev: 1263 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.006141372976!2d120.75596742870188!3d16.468908995600298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ae31e5f53e91%3A0x7e7483f22c902e3b!2sMount%20Indian!5e1!3m2!1sen!2sph!4v1598040226657!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.387778, 120.515833], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calugong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calugong</p> <p>Elev: 1248 m, Prom: 143 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.615331308165!2d120.50596742868943!3d16.387242305050954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919f9b143aef63%3A0x9fe4dec9761b43d!2sMount%20Calugong!5e1!3m2!1sen!2sph!4v1598040355081!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.433333, 120.75], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kamalkatan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kamalkatan</p> <p>Elev: 1221 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15725.954998644225!2d120.74263412869631!3d16.43252009981628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391af04631addbd%3A0xc6edc8238a6992d1!2sMount%20Kamalkatan!5e1!3m2!1sen!2sph!4v1598040435920!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4590681, 120.7898183], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agat</p> <p>Elev: 1216 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.862191493161!2d120.78068962870026!3d16.458353396824087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ae13b283690f%3A0xf7aeecb008fc37b2!2sMount%20Agat!5e1!3m2!1sen!2sph!4v1598040504896!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5026188, 120.8498125], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Dawed, Karao</p> <p>Elev: 1200 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15498.289822479897!2d120.84118667802984!3d16.502623913934357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzA5LjQiTiAxMjDCsDUwJzU5LjMiRQ!5e1!3m2!1sen!2sph!4v1598040602787!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5294025, 120.7978562], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ponopen" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ponopen</p> <p>Elev: 1197 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.016978444284!2d120.78707852871136!3d16.530297888469686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b16456502e4d%3A0x83c2498926163362!2sMount%20Ponopen!5e1!3m2!1sen!2sph!4v1598040706291!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.366667, 120.7], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Umkalang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Umkalang</p> <p>Elev: 1175 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.079937625967!2d120.68957852868476!3d16.356686808576516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a7cfad7e93eb%3A0x36baf262a3920f9c!2sMount%20Umkalang!5e1!3m2!1sen!2sph!4v1598040776048!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.35, 120.75], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anapol" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anapol</p> <p>Elev: 1152 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.617079005808!2d120.74124522868375!3d16.350020109344992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a8512320681b%3A0x5921fc8c59c3e891!2sMount%20Anapol!5e1!3m2!1sen!2sph!4v1598040819299!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4938265, 120.7606225], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Batangbang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Batangbang</p> <p>Elev: 1128 m, Prom: 100 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.95396435641!2d120.75235632870574!3d16.494186792666923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b1cc5694e90f%3A0x8a1094d148691e46!2sMount%20Batangbang!5e1!3m2!1sen!2sph!4v1598040874057!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5373867, 120.7908977], { icon: tealIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caas</p> <p>Elev: 1024 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.4288336238!2d120.78235632871238!3d16.537520087629296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b168154a7791%3A0x9196b413ec3aa63c!2sMount%20Caas!5e1!3m2!1sen!2sph!4v1598040958176!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.466111, 120.491389], { icon: cyanIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bilbil" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bilbil Mountain</p> <p>Elev: 836 m, Prom: 142 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.974790363924!2d120.47041192870007!3d16.456964496985062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919927262de177%3A0x602489f24af5af4a!2sMount%20Bilbil!5e1!3m2!1sen!2sph!4v1598041032700!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4, 120.483333], { icon: cyanIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apni" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apni</p> <p>Elev: 790 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.054564083981!2d120.48207852869047!3d16.394186804248886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919fa8e1337a05%3A0xa06b1892dd1b8ea8!2sMount%20Apni!5e1!3m2!1sen!2sph!4v1598041089154!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.383333, 120.483333], { icon: cyanIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lusen_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lusen</p> <p>Elev: 778 m, Prom: 81 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.929258405995!2d120.47457852868882!3d16.383353405499985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919fb3601adb97%3A0x69c2f5503a268d02!2sMount%20Lusen!5e1!3m2!1sen!2sph!4v1598041153960!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.420833, 120.497778], { icon: cyanIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lomboy_(bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lomboy</p> <p>Elev: 698 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15726.831674484383!2d120.48846742869466!3d16.42168680106988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919f3c43b6532f%3A0xe57dc9f0979636c7!2sMount%20Lomboy!5e1!3m2!1sen!2sph!4v1598041238155!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.468056, 122.011111], { icon: cyanIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Irada" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iraya</p> <p>Elev: 997 m, Prom: 997 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7680.283838261369!2d122.01159602480007!3d20.467947796745076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479bfde23f3fac1%3A0x65bcac32001758e9!2sMount%20Iraya!5e1!3m2!1sen!2sph!4v1598048133562!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.7046887, 121.9291199], { icon: cyanIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Diogo_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Diogo</p> <p>Elev: 518 m, Prom: 518 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15336.96665344441!2d121.91930082946185!3d20.70251945102487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479f3b4dd4452dd%3A0xc19129634eba756a!2sDiogo%20Island!5e1!3m2!1sen!2sph!4v1598048249994!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.391944, 121.942778], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matarem" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mahtarem</p> <p>Elev: 433 m, Prom: 373 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15368.240559236296!2d121.93430082939838!3d20.391130644694176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479c6d9de287fc5%3A0xfa2a1124836d2ce0!2sMount%20Matarem!5e1!3m2!1sen!2sph!4v1598048377273!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.4774518, 122.0075579], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bapbap</p> <p>Elev: 421 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15789.057979052932!2d121.99873674873909!3d20.477456794070893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI4JzM4LjgiTiAxMjLCsDAwJzI3LjIiRQ!5e1!3m2!1sen!2sph!4v1598048558844!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.2813, 121.8557], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tungaru" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tungaru</p> <p>Elev: 353 m, Prom: 353 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15379.152249746256!2d121.84680082937629!3d20.281408459946363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479ce580fe1957f%3A0xdb44037d548d42!2sMount%20Tungaru!5e1!3m2!1sen!2sph!4v1598048735440!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.316667, 121.85], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Navanga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Navanga</p> <p>Elev: 317 m, Prom: 124 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15375.429278971922!2d121.83902302938382!3d20.318908454741514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cf990833d391%3A0x68cd012831232c89!2sMount%20Navanga!5e1!3m2!1sen!2sph!4v1598048914715!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.283333, 121.85], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aharung" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aharung</p> <p>Elev: 313 m, Prom: 78 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15379.097148207105!2d121.83874522937641!3d20.281963959869305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479ce5af6fcadc3%3A0x928ba469cb49892!2sMount%20Aharung!5e1!3m2!1sen!2sph!4v1598049684140!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.813889, 121.855], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santa_Rosa_(bungtod_sa_Pilipinas,_Lupot_sa_Cagayan)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santa Rosa</p> <p>Elev: 281 m, Prom: 281 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15325.725898245597!2d121.84652302948473!3d20.813352785344716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479f7b2c4674637%3A0xe81eb184b35852d2!2sMount%20Santa%20Rosa!5e1!3m2!1sen!2sph!4v1598049887448!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.283333, 121.866667], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Valungot" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Valungot</p> <p>Elev: 273 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15378.57355691535!2d121.86680082937747!3d20.287241759137252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cee1b79646f7%3A0x6ffe35b10f3b46c3!2sMount%20Valungot!5e1!3m2!1sen!2sph!4v1598050059364!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.333333, 121.85], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Changatuan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Changatuan</p> <p>Elev: 271 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15373.993498007672!2d121.8359674293867!3d20.333352802734527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cf889f98a7ad%3A0x27359f13c45f0aca!2sMount%20Changatuan!5e1!3m2!1sen!2sph!4v1598050151120!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3166667, 121.8666667], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulo_sa_Sabtang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sabtang</p> <p>Elev: 244 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61505.94551129872!2d121.82854198174046!3d20.308267463353893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cf0d0e0d1ef1%3A0x70355789cb068a4f!2sSabtang%20Island!5e1!3m2!1sen!2sph!4v1598050238230!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.7282327, 121.8444703], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Riposet" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Riposet</p> <p>Elev: 237 m, Prom: 147 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15334.351754322857!2d121.83541192946718!3d20.728352797376512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479f0f00fdf90a3%3A0x46271e98681a4d0f!2sMount%20Riposet!5e1!3m2!1sen!2sph!4v1598050400382!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3833333, 121.9333333], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matarem" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Matarem (mafarem)</p> <p>Elev: 230 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15368.240559236296!2d121.93430082939838!3d20.391130644694176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479c6d9de287fc5%3A0xfa2a1124836d2ce0!2sMount%20Matarem!5e1!3m2!1sen!2sph!4v1598050508051!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.9333333, 121.9166667], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulo_sa_Mabudis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mabudis</p> <p>Elev: 206 m, Prom: 206 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15295.115970120356!2d121.94169752954723!3d21.112346242687025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x347a15ac54647aab%3A0xba0819d4558a093a!2sY&#39;Ami%20Island!5e1!3m2!1sen!2sph!4v1598050827271!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3, 121.85], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alapad" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alapad</p> <p>Elev: 176 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15377.057166522993!2d121.84930082938055!3d20.30251955701724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cf07d94c4143%3A0x25e943d26bf65e8c!2sMount%20Alapad!5e1!3m2!1sen!2sph!4v1598050905598!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([21.1166667, 121.95], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Y%27Ami_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Yami</p> <p>Elev: 174 m, Prom: 174 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15295.115970120356!2d121.94169752954723!3d21.112346242687025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x347a15ac54647aab%3A0xba0819d4558a093a!2sY&#39;Ami%20Island!5e1!3m2!1sen!2sph!4v1598051043445!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.43, 121.967], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mahatao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mahatao</p> <p>Elev: 169 m, Prom: 99 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30732.94187320492!2d121.93329667796907!3d20.408871797415777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479c0d7054716d1%3A0x53a5f1029760f6d!2sMahatao%2C%20Batanes!5e1!3m2!1sen!2sph!4v1598051135168!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.9083333, 121.9], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulo_sa_Siayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Stayan</p> <p>Elev: 159 m, Prom: 159 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7658.2320790057065!2d121.8985462248226!3d20.904251066929408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x347a1ea76dee1f59%3A0x801822d8a36b8c11!2sSiayan%20Island!5e1!3m2!1sen!2sph!4v1598051200304!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3033809, 121.874122], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Padang</p> <p>Elev: 148 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15198.769431020788!2d121.86534905583936!3d20.30338590092454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE4JzEyLjIiTiAxMjHCsDUyJzI2LjgiRQ!5e1!3m2!1sen!2sph!4v1598051350337!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3062344, 121.8031787], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ibahos_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ibahos</p> <p>Elev: 97 m, Prom: 97 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15375.65005104949!2d121.80791222938333!3d20.316686555050143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cfdc01159015%3A0xec1c1101b9af2875!2sIvuhos!5e1!3m2!1sen!2sph!4v1598051452953!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3333333, 121.7833333], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dequey_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dequey</p> <p>Elev: 67 m, Prom: 67 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15404.867679948033!2d121.77537911832867!3d20.332886944175478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479d06b91c50927%3A0xf0be8e7b86438d6b!2sDequey%20Island!5e1!3m2!1sen!2sph!4v1598051533272!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([21.0666667, 121.9333333], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Island_(pulo_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North (batanes)</p> <p>Elev: 2 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15310.048764948744!2d121.92258016773984!3d21.0654085442034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x347a1693e69c0093%3A0x9ba2ee410b1bf074!2sNorth%20Island!5e1!3m2!1sen!2sph!4v1598051677714!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3300265, 121.7500107], { icon: blueIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Unnamed volcano (Ibugos)</p> <p>Elev: 2 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18718.58385078728!2d121.73988627533997!3d20.330031500623026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE5JzQ4LjEiTiAxMjHCsDQ1JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598051797103!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.7, 122.05], { icon: orangeIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cetaceo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cetaceo</p> <p>Elev: 1823 m, Prom: 1304 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15619.511223622392!2d122.04124522889985!3d17.70001994826106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385be91d95fa717%3A0x74f5cfb301e8aab4!2sMount%20Cetaceo!5e1!3m2!1sen!2sph!4v1598052465119!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.716667, 122.1], { icon: tealIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Flat_Peak_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Flat Peak</p> <p>Elev: 1391 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.060532435644!2d122.09124522890264!3d17.716686646203897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385b927259e2db5%3A0xda6b4741a0f9f134!2sFlat%20Peak!5e1!3m2!1sen!2sph!4v1598052583510!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2149518, 122.1199829], { icon: tealIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cagua" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cagua</p> <p>Elev: 1142 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.111241698938!2d122.14539522898822!3d18.21461488397854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33867060fa251baf%3A0xbf1b17b1434ea89d!2sMount%20Cagua!5e1!3m2!1sen!2sph!4v1598052648504!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.52579, 121.9525788], { icon: tealIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pangasun" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pangasun</p> <p>Elev: 1075 m, Prom: 1075 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.99661979029!2d121.9412452292278!3d19.523352963388493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780b07d48c0af3%3A0x91e7e38ea8bba306!2sBabuyan%20Claro%20Volcano!5e1!3m2!1sen!2sph!4v1598052720205!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2309737, 122.1719519], { icon: tealIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baua" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baua</p> <p>Elev: 1032 m, Prom: 247 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15572.658156559854!2d122.16318962899105!3d18.230853181924317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386700ae175ffe5%3A0xb8717dc5af8ccdc7!2sMount%20Baua!5e1!3m2!1sen!2sph!4v1598052803206!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.5240185, 121.9470059], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Babuyan_Claro_Volcano" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Babuyan Claro</p> <p>Elev: 1009 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.996619790292!2d121.94124522922779!3d19.523352963388504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780b07d48c0af3%3A0x91e7e38ea8bba306!2sBabuyan%20Claro%20Volcano!5e1!3m2!1sen!2sph!4v1598053234697!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.52579, 121.9525788], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pangasun" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pangasun</p> <p>Elev: 843 m, Prom: 173 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.772325932096!2d121.94382622944873!3d19.525795020661555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMxJzMyLjgiTiAxMjHCsDU3JzA5LjMiRQ!5e1!3m2!1sen!2sph!4v1598053492092!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.5333333, 121.95], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pangasun" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pangasun</p> <p>Elev: 843 m, Prom: 173 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16207.315245754216!2d121.94110416041154!3d19.533338314869017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMyJzAwLjAiTiAxMjHCsDU3JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598053562972!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.95, 121.9333333], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Balatubat</p> <p>Elev: 821 m, Prom: 821 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62043.770629284794!2d121.87478382735755!3d18.908094419857253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3387c949c9d51673%3A0xe2c23d5e8a1305c1!2sBalatubat%2C%20Cagayan!5e1!3m2!1sen!2sph!4v1598053721903!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3396655, 122.1985501], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tapha" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tapha</p> <p>Elev: 762 m, Prom: 50 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15562.881921423252!2d122.18985632901021!3d18.339742018108772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386666d5fb0dda9%3A0xbbf43ba9ef397463!2sMount%20Tapha!5e1!3m2!1sen!2sph!4v1598053844666!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.511585, 120.9633915], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_San_Miguel" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount San Miguel</p> <p>Elev: 751 m, Prom: 245 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.329992138004!2d120.95457852904073!3d18.51168649614897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d9a1ca1f2ff5%3A0xbb936966b1ee0047!2sMount%20San%20Miguel!5e1!3m2!1sen!2sph!4v1598091535430!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.833611, 121.861111], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Camiguin" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Camiguin</p> <p>Elev: 718 m, Prom: 667 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15196.820138506762!2d121.85393507792992!3d18.830914043131884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3387ccdc2be620d3%3A0x825b82e00e603615!2sMount%20Camiguin!5e1!3m2!1sen!2sph!4v1598091560185!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.8333333, 121.86], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Camiguin_de_Babuyanes" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Camiguin de Babuyanes</p> <p>Elev: 712 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15517.860239224272!2d121.85124522909882!3d18.83335280459513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3387ccde38f7c4a7%3A0x470014866e8e8657!2sCamiguin%20de%20Babuyanes!5e1!3m2!1sen!2sph!4v1598091632724!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.5911111, 121.0252778], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Macagutogut" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Macagutogut</p> <p>Elev: 698 m, Prom: 443 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15540.097153692208!2d121.01652302905495!3d18.591130885943315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388ddac56a854c1%3A0x8d82c5c858cdf226!2sMount%20Macagutogut!5e1!3m2!1sen!2sph!4v1598091758670!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.5385049, 121.9126542], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Smith_Volcano" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Smith</p> <p>Elev: 689 m, Prom: 491 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15451.632976632101!2d121.90318102923055!3d19.53760731147463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780bdcdbbca825%3A0x49fb59202b05b2ee!2sSmith%20Volcano!5e1!3m2!1sen!2sph!4v1598091930876!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.538, 121.9121639], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Babuyan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Babuyan</p> <p>Elev: 687 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15451.632976632101!2d121.90318102923055!3d19.53760731147463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780bdcdbbca825%3A0x49fb59202b05b2ee!2sSmith%20Volcano!5e1!3m2!1sen!2sph!4v1598097288876!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.516667, 121.133333], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kimalogong_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kimalogong</p> <p>Elev: 660 m, Prom: 222 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15451.632976632101!2d121.90318102923055!3d19.53760731147463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780bdcdbbca825%3A0x49fb59202b05b2ee!2sSmith%20Volcano!5e1!3m2!1sen!2sph!4v1598097288876!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2989998, 122.2703722], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Abriringan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Abriringan</p> <p>Elev: 659 m, Prom: 278 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15566.479721795424!2d122.26041192900313!3d18.29974207319208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338663f4243bd37f%3A0x83c3e5e1d3b28df6!2sMount%20Abriringan!5e1!3m2!1sen!2sph!4v1598097544564!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.15238, 122.1744479], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cagagangan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cagagangan</p> <p>Elev: 645 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15579.656281511954!2d122.16568962897738!3d18.152519841819334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386775881839f53%3A0x54872d89c68de020!2sMount%20Cagagangan!5e1!3m2!1sen!2sph!4v1598097599487!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2959685, 122.2893492], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alegon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alegan</p> <p>Elev: 627 m, Prom: 181 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15566.82910923374!2d122.28068962900248!3d18.295853123685795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338663c1f3257b65%3A0x7eccffb91e8c087d!2sMount%20Alegon!5e1!3m2!1sen!2sph!4v1598097672248!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1820757, 122.22835], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Canapauan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canapauan</p> <p>Elev: 623 m, Prom: 147 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15577.029195833116!2d122.2195785289825!3d18.18196428810423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33867bb6d4e1b441%3A0xf7762e52043b554f!2sMount%20Canapauan!5e1!3m2!1sen!2sph!4v1598097779267!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1985756, 122.2291527], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calolocob" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calolocob</p> <p>Elev: 617 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15575.540344606205!2d122.22041192898541!3d18.198630935999052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33867b0799f1a14d%3A0xa11816ef0fa3a810!2sMount%20Calolocob!5e1!3m2!1sen!2sph!4v1598097842492!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1266802, 122.1517531], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lagit" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lagit</p> <p>Elev: 589 m, Prom: 86 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31163.654972223954!2d122.13728417624353!3d18.128150044399924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338677a0168c9ca7%3A0x4167099a6946c7c!2sMount%20Lagit!5e1!3m2!1sen!2sph!4v1598097915109!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2575729, 122.2680487], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mananingo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mananingo</p> <p>Elev: 586 m, Prom: 159 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15570.269171829688!2d122.2593008289957!3d18.257519878547463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338663619dcafaab%3A0x7eb97aba6ced708f!2sMount%20Mananingo!5e1!3m2!1sen!2sph!4v1598097996564!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.5425124, 120.9683496], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caraballo_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caraballo Mountain</p> <p>Elev: 570 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.52639149739!2d120.95957852904625!3d18.54251979219249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d946f0b0e70f%3A0x8e52280edf5cf5f6!2sCaraballo%20Mountains!5e1!3m2!1sen!2sph!4v1598098140495!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3254361, 122.2704692], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patunungan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patunungan</p> <p>Elev: 550 m, Prom: 186 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15564.181999813929!2d122.26180082900765!3d18.32529761994552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338661521b1b750f%3A0xe88fb30d04c7a9c4!2sMount%20Patunungan!5e1!3m2!1sen!2sph!4v1598098232381!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.41605, 121.2903931], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malaqui_Babui" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malaqui Babui</p> <p>Elev: 535 m, Prom: 371 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.91470139181!2d121.28152302902386!3d18.41696425826816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388b821389ee9af%3A0x2e260a36964cbd45!2sMount%20Malaqui%20Babui!5e1!3m2!1sen!2sph!4v1598098298877!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.320278, 121.468333], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calayan</p> <p>Elev: 535 m, Prom: 535 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15472.291733137336!2d121.45874522918928!3d19.320575340484716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33880e0d5b391e4b%3A0xf87084731d360ddc!2sMount%20Calayan!5e1!3m2!1sen!2sph!4v1598098359552!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.556944, 121.98], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Knob_Peak_(bukid_sa_Pilipinas,_Lupot_sa_Cagayan)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Knob Peak</p> <p>Elev: 505 m, Prom: 64 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15449.779680982812!2d121.97124522923424!3d19.55696405887373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780ca5a1fefd49%3A0x53a39f80fc3d827a!2sKnob%20Peak!5e1!3m2!1sen!2sph!4v1598098423303!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.8583333, 121.8833333], { icon: cyanIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malabsing" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malabsing</p> <p>Elev: 503 m, Prom: 366 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15514.778357837742!2d121.87457852910491!3d18.86668650025381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3387cc695e05b37d%3A0xccbbeb1ae2d449c8!2sMount%20Malabsing!5e1!3m2!1sen!2sph!4v1598098667565!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.287866, 122.3003496], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apulagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apulagan</p> <p>Elev: 493 m, Prom: 120 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15567.55259585977!2d122.29152302900106!3d18.28779762470817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338663b7ed2188ab%3A0x356defe94d476640!2sMount%20Apulagan!5e1!3m2!1sen!2sph!4v1598098768796!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1627761, 122.2187488], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Osoguen" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Osoguen</p> <p>Elev: 463 m, Prom: 146 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15578.739745505154!2d122.21013412897915!3d18.162797640523134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33867a2b5f4653e1%3A0xf86a81e1629ef1a!2sMount%20Osoguen!5e1!3m2!1sen!2sph!4v1598098853615!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.3280214, 121.4335011], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nangabaywanan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nongabaywanan</p> <p>Elev: 458 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15471.5815324439!2d121.42485632919072!3d19.328075289486865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338811effb0d7b87%3A0x1e0e4765220becdc!2sMount%20Nangabaywanan!5e1!3m2!1sen!2sph!4v1598098919972!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.516667, 120.983333], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_San_Miguel" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount San Miguel</p> <p>Elev: 441 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.719242534984!2d120.98114431489904!3d18.516672074126113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzAwLjAiTiAxMjDCsDU5JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598099192056!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.407084, 122.2505668], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pasmacanan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pasmacanan</p> <p>Elev: 436 m, Prom: 224 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.918918439938!2d122.24346742902189!3d18.405853159686263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33865df70eb2c0c7%3A0x301f70bbddc50374!2sMount%20Pasmacanan!5e1!3m2!1sen!2sph!4v1598099291721!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.3166667, 121.4333333], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Bagua</p> <p>Elev: 423 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15531.67884566301!2d121.42456511994843!3d19.316671728547828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE5JzAwLjAiTiAxMjHCsDI2JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598099473575!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2038781, 122.2798527], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nimamandum" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nimamandum</p> <p>Elev: 417 m, Prom: 215 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15575.06859783359!2d122.27096742898632!3d18.203908735332057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33867c96d5260a5f%3A0x19897a1688bad3b0!2sMount%20Nimamandum!5e1!3m2!1sen!2sph!4v1598099568988!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3012799, 122.3240447], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agyaboy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agyaboy</p> <p>Elev: 403 m, Prom: 169 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15566.329961726356!2d122.31541192900343!3d18.301408772980455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338662266864a6c9%3A0xcaa66ddecdd4c704!2sMount%20Agyaboy!5e1!3m2!1sen!2sph!4v1598099643034!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4641569, 121.2269681], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lico" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lico</p> <p>Elev: 387 m, Prom: 295 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.640241533325!2d121.21818962903228!3d18.464186552233006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388c7a8601fd181%3A0x678bd6dd65aeda7a!2sMount%20Lico!5e1!3m2!1sen!2sph!4v1598099710226!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4852557, 122.2292545], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Leson" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Leson</p> <p>Elev: 340 m, Prom: 158 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31100.521180673102!2d122.19685062649238!3d18.479403448606288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33865c89378c417b%3A0xf9a430e14f4446d5!2sMount%20Leson!5e1!3m2!1sen!2sph!4v1598099787788!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4833329, 122.2333329], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lacalacay_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lacalacay Mountain</p> <p>Elev: 330 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.902308449624!2d122.22457852903567!3d18.48335314977967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33865c70ef0446af%3A0xe537ddbeed9c5120!2sLacalacay%20Mountain!5e1!3m2!1sen!2sph!4v1598099862944!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.9965785, 122.1776418], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Capulutan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Capulutan</p> <p>Elev: 328 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31187.682175101385!2d122.15221862614926!3d17.992731780953758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385da06db7c3929%3A0xcbf36c07c9c810cf!2sMount%20Capulutan!5e1!3m2!1sen!2sph!4v1598099938914!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.7810022, 121.8197513], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Jungle_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Jungle Mountain</p> <p>Elev: 321 m, Prom: 127 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15612.438775192393!2d121.81096742891354!3d17.78113103823392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385929adc420dc9%3A0x14c5517e404d8194!2sJungle%20Mountain!5e1!3m2!1sen!2sph!4v1598100001417!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2727698, 122.3152527], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Paglawayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Paglawayan</p> <p>Elev: 320 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15568.898967138959!2d122.30652302899838!3d18.272797626610885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33866253cbe0f80b%3A0x92743a872d7bcdc0!2sMount%20Paglawayan!5e1!3m2!1sen!2sph!4v1598100083255!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0387846, 122.1625489], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Macarabur" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Macarabur</p> <p>Elev: 305 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31177.233238907116!2d122.13848572619023!3d18.051743065050523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385d836c0386b9b%3A0x962e4e836614a14b!2sMount%20Macarabur!5e1!3m2!1sen!2sph!4v1598100143006!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3, 122.316667], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Marotang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Marotang</p> <p>Elev: 299 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15566.454761201121!2d122.30791192900321!3d18.300019873156813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386622e9e9e02a1%3A0xa03248516aea90e0!2sMount%20Marotang!5e1!3m2!1sen!2sph!4v1598100199010!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3, 122.316667], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulo_sa_Dalupiri" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dalupiri</p> <p>Elev: 283 m, Prom: 283 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29574.124352898543!2d121.2065658645638!3d19.092256797567792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33885d2467395433%3A0x113ffe4fca040866!2sDalupiri%2C%20Calayan%2C%20Cagayan!5e1!3m2!1sen!2sph!4v1598100310557!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.843056, 121.829167], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Negrito_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Negrito Hill</p> <p>Elev: 269 m, Prom: 104 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.016477816383!2d121.82041192892407!3d17.843075530549672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385ed7238901fa9%3A0x3e3252aac7062df8!2sNegrito%20Hill!5e1!3m2!1sen!2sph!4v1598100790722!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.843056, 121.829167], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Negrito_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Negrito Hill</p> <p>Elev: 269 m, Prom: 104 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.016477816383!2d121.82041192892407!3d17.843075530549672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385ed7238901fa9%3A0x3e3252aac7062df8!2sNegrito%20Hill!5e1!3m2!1sen!2sph!4v1598100790722!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.564587, 122.1449483], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Palaui_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Palaui High Peak</p> <p>Elev: 254 m, Prom: 254 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.331617693959!2d122.13609357455442!3d18.56459205936319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzUyLjUiTiAxMjLCsDA4JzQxLjgiRQ!5e1!3m2!1sen!2sph!4v1598100913012!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3585832, 122.3208225], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinago" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinago</p> <p>Elev: 253 m, Prom: 180 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15561.18031573828!2d122.31207852901356!3d18.35863096570498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386605aa0542257%3A0x538246ebacd9346d!2sMount%20Sinago!5e1!3m2!1sen!2sph!4v1598101018556!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.883333, 121.95], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cone_Hill_(bungtod_sa_Pilipinas,_Lupot_sa_Cagayan)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cone Hill</p> <p>Elev: 234 m, Prom: 85 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.480991226677!2d121.94124522893094!3d17.8833532255409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385e99d20dc1e49%3A0x44cea70dbba2faec!2sCone%20Hill!5e1!3m2!1sen!2sph!4v1598101101504!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.891944, 121.402778], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nanguringan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nanguringan</p> <p>Elev: 197 m, Prom: 197 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15512.437800946951!2d121.39402302910955!3d18.891964146957314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388882c55f6c9cf%3A0xa25d4acd1afd2e2b!2sMount%20Nanguringan!5e1!3m2!1sen!2sph!4v1598101555494!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4925577, 122.1701528], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Rayray_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Rayray Hill</p> <p>Elev: 187 m, Prom: 127 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.070506550755!2d122.16152302903733!3d18.492519798605557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386435212a3451b%3A0x87f8b7edc4d3664d!2sRayray%20Hill!5e1!3m2!1sen!2sph!4v1598101627164!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4507, 121.2888], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maturao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maturao</p> <p>Elev: 154 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.797902812816!2d121.27930082902996!3d18.45140875386735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388b85e6156bfc3%3A0xf681a95d989e0db2!2sMount%20Maturao!5e1!3m2!1sen!2sph!4v1598101719482!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4513889, 121.2880556], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maturao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maturao</p> <p>Elev: 154 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.797902812816!2d121.27930082902996!3d18.45140875386735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388b85e6156bfc3%3A0xf681a95d989e0db2!2sMount%20Maturao!5e1!3m2!1sen!2sph!4v1598101719482!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.4333333, 121.5083333], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulo_sa_Panuitan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Panuitan</p> <p>Elev: 110 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15461.207194491602!2d121.50256632921139!3d19.437314374915097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33880448557f1085%3A0x19d9b3a6e8f17e41!2sPanultan%20Island!5e1!3m2!1sen!2sph!4v1598101942471!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4161371, 122.1371683], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Rayray_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Rayray Hill</p> <p>Elev: 84 m, Prom: 50 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15687.904794227235!2d122.1283793025753!3d18.416142159806373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzU4LjEiTiAxMjLCsDA4JzEzLjgiRQ!5e1!3m2!1sen!2sph!4v1598102284825!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4448604, 122.1703545], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Marede_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Marede Hill</p> <p>Elev: 78 m, Prom: 62 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.401594902933!2d122.16152302902883!3d18.44474205471968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338642cc0adc11bb%3A0xc47fa7f1bf60188f!2sMarede%20Hill!5e1!3m2!1sen!2sph!4v1598102587754!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4895575, 122.1581534], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pinas_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinas Hill</p> <p>Elev: 68 m, Prom: 56 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.347822610845!2d122.14930082903673!3d18.48946419899699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338643440597df37%3A0xda4f1036f03a8427!2sPinas%20Hill!5e1!3m2!1sen!2sph!4v1598102638374!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.483858, 122.1604569], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Talibing_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Talibing Hill</p> <p>Elev: 59 m, Prom: 50 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.851903419529!2d122.15180082903574!3d18.48390874970852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338643479d187bef%3A0xe31186847fa42b60!2sTalibing%20Hill!5e1!3m2!1sen!2sph!4v1598102693247!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.2529012, 121.5021201], { icon: blueIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Bangan_Hill_National_Park" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bangaan Hill</p> <p>Elev: 49 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.672255378932!2d121.49829931490743!3d19.252891251391365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33880cfae648d5a7%3A0x3caa9daa1a39280!2sBangaan%20Hill!5e1!3m2!1sen!2sph!4v1598102745851!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.9999999], { icon: orangeIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dos_Cuernos" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dos Cuernos</p> <p>Elev: 1737 m, Prom: 925 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.634060084569!2d121.98957852887251!3d17.536964368299053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385a2067521e1d3%3A0x4e604ce87571324f!2sMount%20Dos%20Cuernos!5e1!3m2!1sen!2sph!4v1598103169096!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.31, 122.085556], { icon: orangeIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cresta" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cresta</p> <p>Elev: 1543 m, Prom: 468 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.159636564353!2d122.09707852883106!3d17.285575548879823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33850e69db5f7745%3A0x9185ce804d70ef8a!2sMount%20Cresta!5e1!3m2!1sen!2sph!4v1598103219088!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.529444, 122.078333], { icon: tealIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dos_Hermanos" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dos Hermanos</p> <p>Elev: 1389 m, Prom: 676 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.576620954445!2d122.02874522870836!3d16.51113119069843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339ac0d7ce39af47%3A0x41f0ab1f0b0ddad9!2sMount%20Dos%20Hermanos!5e1!3m2!1sen!2sph!4v1598103286620!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0617496, 122.2755916], { icon: tealIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palanan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palanan</p> <p>Elev: 1195 m, Prom: 143 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.799573368837!2d122.24818962879344!3d17.05307562682475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385221b27e5cfc9%3A0xdd4914c087b84f4b!2sMount%20Palanan!5e1!3m2!1sen!2sph!4v1598103377986!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.497222, 122.140556], { icon: tealIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bukid_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bukid Mountain</p> <p>Elev: 1120 m, Prom: 365 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.154334297973!2d122.12930082886382!3d17.484464374716868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385a667ab558f4b%3A0x8528a8de3eb761df!2sBukid%20Mountain!5e1!3m2!1sen!2sph!4v1598103458709!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.213889, 122.121389], { icon: tealIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Moises" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Moises</p> <p>Elev: 1055 m, Prom: 219 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15661.405684778394!2d122.1118008288191!3d17.211964407762565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33851107a0f2032b%3A0x9c0eb1bf3adb200b!2sMount%20Moises!5e1!3m2!1sen!2sph!4v1598103520929!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.219167, 122.278611], { icon: tealIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Divilacan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Divilacan Peak</p> <p>Elev: 1047 m, Prom: 132 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15661.005764388427!2d122.26735632881984!3d17.2166867071937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33851ca550c75f79%3A0x1810ac007474bcc7!2sDivilacan%20Peak!5e1!3m2!1sen!2sph!4v1598103578664!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5000001, 122.1333329], { icon: tealIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Thumb_Peak_(bukid_sa_Pilipinas,_Lupot_sa_Cagayan)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Thumb Peak</p> <p>Elev: 1014 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.816358609985!2d122.1245785288664!3d17.500019972817014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385a67eea20b38f%3A0xe7e1afc4ea641859!2sThumb%20Peak!5e1!3m2!1sen!2sph!4v1598103670131!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5111111, 122.1269439], { icon: tealIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nagtakneg_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Naglakneg Mountain</p> <p>Elev: 894 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.31432487235!2d122.12707852886736!3d17.505853272104208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385a5d689c0477f%3A0x38b26d670df26555!2sNagtakneg%20Mountain!5e1!3m2!1sen!2sph!4v1598103775552!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.781944, 122.369167], { icon: tealIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Diminalno" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Diminalno</p> <p>Elev: 543 m, Prom: 207 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.375127333915!2d122.40180082875041!3d16.781964458999454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384d42f2de60bf9%3A0x1a1c80fadfd5511c!2sMount%20Diminalno!5e1!3m2!1sen!2sph!4v1598103838733!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.543333, 122.284722], { icon: blueIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Rocky" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Rocky</p> <p>Elev: 371 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.821470614572!2d122.28124522871546!3d16.557242285332777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339ad9dfba7f34e1%3A0x12458689f61cee30!2sMount%20Rocky!5e1!3m2!1sen!2sph!4v1598103897320!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3176, 121.662], { icon: blueIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caraballo_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caraballo Mountain</p> <p>Elev: 345 m, Prom: 214 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15941.005640709118!2d121.65318660390622!3d17.317605092906238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzAzLjQiTiAxMjHCsDM5JzQzLjIiRQ!5e1!3m2!1sen!2sph!4v1598104279328!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.530278, 122.243611], { icon: blueIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dinapiqui" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dinapiqui</p> <p>Elev: 331 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.175287466554!2d122.23596742871098!3d16.528353388695912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339ada35a6746b2f%3A0xa7faa2ce348a4b18!2sMount%20Dinapiqui!5e1!3m2!1sen!2sph!4v1598104403703!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.064444, 122.454167], { icon: blueIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dikaclong_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dikaclong</p> <p>Elev: 266 m, Prom: 227 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.77355387317!2d122.45096742879538!3d17.065297825363825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384e7266dbf9567%3A0x430444beedba2019!2sDikaclong%20Mountain!5e1!3m2!1sen!2sph!4v1598104463226!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7952778, 121.9936111], { icon: blueIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gawed" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Gawed</p> <p>Elev: 208 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15696.273062352186!2d121.9848563287525!3d16.795297857427443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385355f9c95ee9d%3A0x86db5133c42810a5!2sGawed!5e1!3m2!1sen!2sph!4v1598104551434!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0458333, 122.4505556], { icon: blueIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dilanasan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dilanasan Hill</p> <p>Elev: 157 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15675.405529977596!2d122.44180082879228!3d17.04585332768762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384e74b8e8e5e1b%3A0xb93b76e451f6e0cd!2sDilanasan%20Hill!5e1!3m2!1sen!2sph!4v1598104621451!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1, 122.5], { icon: blueIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ditolong_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ditolong Peak</p> <p>Elev: 148 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15670.854831232275!2d122.49124522880099!3d17.100020021208557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384e67973b64d4f%3A0x5f2a36a10f9696f5!2sDitolong%20Peak!5e1!3m2!1sen!2sph!4v1598104712185!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1147222, 122.5011111], { icon: blueIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nagtagayan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nagtagayan Hill</p> <p>Elev: 146 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15669.615556417206!2d122.49235632880333!3d17.114742219444533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384e5cfd0c0b605%3A0x38031fa602979291!2sNagtagayan%20Hill!5e1!3m2!1sen!2sph!4v1598104801782!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0, 122.45], { icon: blueIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/The_Knobs_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>The Knobs</p> <p>Elev: 85 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15679.245173516741!2d122.44124522878494!3d17.0000200331561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384ddd9b621c4a5%3A0x823a35b90c4793f2!2sThe%20Knobs!5e1!3m2!1sen!2sph!4v1598104899395!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.476667, 122.219722], { icon: blueIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Duro_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Duro Hill</p> <p>Elev: 13 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15722.37502697641!2d122.21096742870306!3d16.47668679469813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339adc881edf38bd%3A0x2713c0f271ee00d2!2sDuro%20Hill!5e1!3m2!1sen!2sph!4v1598105249014!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.412778, 121.590278], { icon: tealIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Difun" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Difun</p> <p>Elev: 847 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.258572407096!2d121.53818962869384!3d16.416409001680346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339076b7bd4e071d%3A0x320c9c07c73fef1a!2sMount%20Difun!5e1!3m2!1sen!2sph!4v1598105824798!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([16.346111, 121.777222], { icon: tealIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dumapata" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dumapata</p> <p>Elev: 660 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.93031244257!2d121.76707852868316!3d16.346131209793135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339a9afaa32b97ad%3A0x8c0176b28c6a94bf!2sMount%20Dumapata!5e1!3m2!1sen!2sph!4v1598105752029!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5, 121.416667], { icon: tealIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Blanco" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Blanco</p> <p>Elev: 265 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.479953609412!2d121.40791192870664!3d16.500020091989448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33906d09f363f86d%3A0xf51af96f6c8e9c4a!2sMount%20Blanco!5e1!3m2!1sen!2sph!4v1598105887223!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4932638, 120.9417368], { icon: magentaIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pual_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pual</p> <p>Elev: 2726 m, Prom: 111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15877.136582597064!2d120.93296937089589!3d16.49326891458931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904d15e1006209%3A0x40160c0d42c5c945!2sMount%20Pual!5e1!3m2!1sen!2sph!4v1598110667406!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.46, 120.891389], { icon: redIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pack_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pack</p> <p>Elev: 2296 m, Prom: 221 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.772107365561!2d120.88235632870047!3d16.459464496695304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ad55f66d9eaf%3A0x331ea80a6df27da3!2sMount%20Pack!5e1!3m2!1sen!2sph!4v1598110777587!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3193704, 120.8027473], { icon: redIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ugu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ugo</p> <p>Elev: 2157 m, Prom: 702 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16492.34180478088!2d120.79285397363935!3d16.318727221269764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a9f63cb998a1%3A0x86d46349544f6c7f!2sMount%20Ugo%20Summit%20Marker!5e1!3m2!1sen!2sph!4v1598110854489!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4793992, 120.8887162], { icon: redIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Purgatory</p> <p>Elev: 2144 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16376.328567611085!2d120.87980412255028!3d16.479404319159993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI4JzQ1LjgiTiAxMjDCsDUzJzE5LjQiRQ!5e1!3m2!1sen!2sph!4v1598111136354!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.356389, 120.855556], { icon: redIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Yabnong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Yabnong</p> <p>Elev: 2028 m, Prom: 284 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.191859980501!2d120.84680082868458!3d16.355297908736638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ab0bff9f2343%3A0x2ab4b309e4d7bf69!2sMount%20Yabnong!5e1!3m2!1sen!2sph!4v1598111201249!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.45, 120.933333], { icon: orangeIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Awapanniki" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Awapanniki</p> <p>Elev: 1994 m, Prom: 471 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.537638017311!2d120.924578528699!3d16.45002009778975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33905283ab25dc57%3A0xe6b12f78f321be6f!2sMount%20Awapanniki!5e1!3m2!1sen!2sph!4v1598111927750!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.945278, 121.286389], { icon: orangeIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guiwan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guiwan</p> <p>Elev: 1947 m, Prom: 1061 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.913977620132!2d121.27846742862326!3d15.944186905618384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339094e7be955985%3A0xd1e1c2d6f25c8fb5!2sMount%20Guiwan!5e1!3m2!1sen!2sph!4v1598111966546!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.975, 121.242222], { icon: orangeIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dalimonoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dalimonoc</p> <p>Elev: 1933 m, Prom: 401 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.487958019294!2d121.23346742862776!3d15.975020152137816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390eb5d222410d3%3A0x75c24e8cb8aece80!2sMount%20Dalimonoc!5e1!3m2!1sen!2sph!4v1598112008526!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.194167, 120.872222], { icon: orangeIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Imugan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Imugan</p> <p>Elev: 1702 m, Prom: 730 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15745.134169170484!2d120.86430082866023!3d16.193909027263018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33910215f4fe93cd%3A0xe85c49a35c253fe2!2sMount%20Imugan!5e1!3m2!1sen!2sph!4v1598112047889!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.45, 120.883333], { icon: orangeIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caual" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caual</p> <p>Elev: 1674 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.101314007667!2d120.87013412869413!3d16.418353401455466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391acd8b5c16ce9%3A0x40a92a3b3e7def19!2sMount%20Caual!5e1!3m2!1sen!2sph!4v1598112094873!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.95, 121.233333], { icon: orangeIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Susongdalaga_(bukid_sa_Pilipinas,_Lupot_sa_Cagayan)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Susongdalaga</p> <p>Elev: 1655 m, Prom: 206 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.193208701878!2d121.22013412862462!3d15.95335350458422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390eb1acf1102fb%3A0xa838912b687f1978!2sMount%20Susongdalaga!5e1!3m2!1sen!2sph!4v1598112140835!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4275149, 121.2224737], { icon: orangeIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palali" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palali</p> <p>Elev: 1655 m, Prom: 801 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15726.292251929497!2d121.21291192869566!3d16.42835340029852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339042e72472fdf7%3A0x50ef0aa3f4b06a10!2sMount%20Palali!5e1!3m2!1sen!2sph!4v1598112201950!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.040556, 121.233889], { icon: orangeIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nanaabung" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nanaabung</p> <p>Elev: 1615 m, Prom: 602 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15757.380643622188!2d121.22541192863736!3d16.03974234481295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390ed172d710f2b%3A0x1f1be598d2a17899!2sMount%20Nanaabung!5e1!3m2!1sen!2sph!4v1598112244283!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.953611, 121.428056], { icon: tealIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Otunao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Otundo</p> <p>Elev: 1455 m, Prom: 498 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.14951288782!2d121.42013412862468!3d15.953909054521525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390974cac108067%3A0xf02617916b936617!2sMount%20Otunao!5e1!3m2!1sen!2sph!4v1598112287541!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.341667, 121.215], { icon: tealIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sehat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sehat</p> <p>Elev: 1415 m, Prom: 492 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15733.534199091206!2d121.17346742868205!3d16.338631210657176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33905c0555c9da4f%3A0xcd8f96eb9441ca5c!2sMount%20Sehat!5e1!3m2!1sen!2sph!4v1598112328015!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.55, 121.083333], { icon: tealIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cunig" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cunig</p> <p>Elev: 1329 m, Prom: 464 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.56458465003!2d121.08068962871215!3d16.535853387823263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339046233fdd52fb%3A0x52fdf137485cba5b!2sMount%20Cunig!5e1!3m2!1sen!2sph!4v1598112374474!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.566667, 121.083333], { icon: tealIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tiblac" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tiblac</p> <p>Elev: 1279 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.458985921972!2d121.06791192871613!3d16.561686784814935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904878e063e98d%3A0xaa1d2f8b9fcfdc08!2sMount%20Tiblac!5e1!3m2!1sen!2sph!4v1598112411263!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.066667, 121.233333], { icon: tealIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naminudut" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naminudut</p> <p>Elev: 1247 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15753.729689883494!2d121.22902302864418!3d16.085853439578887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390f295bbb4ce7b%3A0x67b2f613179cd166!2sMount%20Naminudut!5e1!3m2!1sen!2sph!4v1598112454920!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.204167, 121.024167], { icon: tealIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kanabuy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kanabuy</p> <p>Elev: 1224 m, Prom: 215 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15744.269321272379!2d121.01485632866188!3d16.204742326024366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390f9725e5274f3%3A0x8ae1539e2a48b62f!2sMount%20Kanabuy!5e1!3m2!1sen!2sph!4v1598112491832!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.028611, 121.396667], { icon: tealIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Katgipsipan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Katgipsipan</p> <p>Elev: 1188 m, Prom: 264 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.2808147379!2d121.38707852863567!3d16.02835344610372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339091cc6ba4b093%3A0x6d44a92dbf19d33!2sMount%20Katgipsipan!5e1!3m2!1sen!2sph!4v1598112532066!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4512486, 121.3758187], { icon: tealIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tutun" target= "blank"><img 1150="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Batong Baket</p> <p>Elev: 1455 m, Prom: 430 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16235.100997484846!2d121.36695572435015!3d16.451253710507796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI3JzA0LjUiTiAxMjHCsDIyJzMzLjAiRQ!5e1!3m2!1sen!2sph!4v1598112983491!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.566667, 121.066667], { icon: tealIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nannak_Mount" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nannak</p> <p>Elev: 1046 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.779083465733!2d121.07096742871744!3d16.570020083843634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339047d8abf7becd%3A0x8ab133526157d343!2sNannak%20Mount!5e1!3m2!1sen!2sph!4v1598112733010!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5157453, 121.0703351], { icon: cyanIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Labbi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Labbi</p> <p>Elev: 964 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.237715746463!2d121.06180082870898!3d16.515297890214114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339048ad21a840ef%3A0x8d1c5023d684adda!2sMount%20Labbi!5e1!3m2!1sen!2sph!4v1598112784514!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4822528, 121.0001717], { icon: cyanIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Orcog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Orcog</p> <p>Elev: 939 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.83384814078!2d120.99124522870413!3d16.483353393924567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904e62a44ab4f9%3A0x2d5de2d3dcae58fd!2sMount%20Orcog!5e1!3m2!1sen!2sph!4v1598112830701!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4666667, 121.3666667], { icon: cyanIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tutun" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tutun</p> <p>Elev: 936 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.18640423799!2d121.35791192870153!3d16.466686795857985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33906c1d38b54387%3A0x9387189f282eaf5!2sMount%20Tutun!5e1!3m2!1sen!2sph!4v1598112876644!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.2335536, 121.0289001], { icon: cyanIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santa_Clara" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santa Clara</p> <p>Elev: 915 m, Prom: 127 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15742.09362468279!2d121.02041192866594!3d16.231964522908708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390f8feb8858f1f%3A0x32153132d0c1a4cc!2sMount%20Santa%20Clara!5e1!3m2!1sen!2sph!4v1598113016712!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3, 120.983333], { icon: cyanIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apatani" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apatani</p> <p>Elev: 748 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15737.062650112373!2d120.97457852867541!3d16.294742315706507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339055e11882b1ed%3A0x26a7f1a9dcb0fb0b!2sMount%20Apatani!5e1!3m2!1sen!2sph!4v1598113047254!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.466667, 121.233333], { icon: cyanIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mafurao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mafurao</p> <p>Elev: 715 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.18640423799!2d121.22457852870154!3d16.46668679585799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904238a8a441d9%3A0xa3ef4027761ee58!2sMount%20Mafurao!5e1!3m2!1sen!2sph!4v1598113082692!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.516667, 121.1], { icon: cyanIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pawac" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pawac</p> <p>Elev: 686 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.77992254861!2d121.07791192870796!3d16.50863119098898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339045fc4a38052f%3A0x222ba3249c199d84!2sMount%20Pawac!5e1!3m2!1sen!2sph!4v1598113139022!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5165523, 121.1352124], { icon: cyanIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Bangan_Hill_National_Park" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bangan Hill</p> <p>Elev: 512 m, Prom: 211 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15722.07108351559!2d121.12420852870359!3d16.480431294263663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904449a7bae65d%3A0x2164e03aaf35679!2sBangan%20Hill!5e1!3m2!1sen!2sph!4v1598113175563!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3268963, 121.105906], { icon: blueIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulit</p> <p>Elev: 435 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.191859980501!2d120.84680082868458!3d16.355297908736638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ab0bff9f2343%3A0x2ab4b309e4d7bf69!2sMount%20Yabnong!5e1!3m2!1sen!2sph!4v1598111201249!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3131877, 121.1297478], { icon: blueIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Wonderland</p> <p>Elev: 409 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15810.990911534773!2d121.12097326686614!3d16.31319282454253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzQ3LjUiTiAxMjHCsDA3JzQ3LjEiRQ!5e1!3m2!1sen!2sph!4v1598113520646!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4808177, 121.4049729], { icon: orangeIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mingan</p> <p>Elev: 1887 m, Prom: 1585 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.926617653895!2d122.33874522804672!3d10.917242895042683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afaa7af82049a9%3A0xcfd15570d430272a!2sMount%20Mingan!5e1!3m2!1sen!2sph!4v1598118162821!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.253889, 121.8894643], { icon: orangeIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anacuao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anacuao</p> <p>Elev: 1834 m, Prom: 1365 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15740.314903670696!2d121.88041192866928!3d16.25418682036198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339a8e62bdd5492f%3A0x9c0dfd7a9e141937!2sMount%20Anacuao!5e1!3m2!1sen!2sph!4v1598118206199!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4728484, 121.4019709], { icon: orangeIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mingan Peak 4</p> <p>Elev: 1762 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16824.268815234933!2d121.39307514893046!3d15.47285354426677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI4JzIyLjMiTiAxMjHCsDI0JzA3LjEiRQ!5e1!3m2!1sen!2sph!4v1598118269772!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4623933, 121.3949997], { icon: orangeIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Salakot Peak</p> <p>Elev: 1737 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18179.12036220365!2d121.38535548298815!3d15.462398444487102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI3JzQ0LjYiTiAxMjHCsDIzJzQyLjAiRQ!5e1!3m2!1sen!2sph!4v1598118432540!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4640141, 121.3992163], { icon: orangeIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mingan Peak 3</p> <p>Elev: 1724 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16139.343527551791!2d121.39051561690894!3d15.464019248471688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI3JzUwLjUiTiAxMjHCsDIzJzU3LjIiRQ!5e1!3m2!1sen!2sph!4v1598118486231!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4483254, 121.3928195], { icon: orangeIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mingan Peak 1</p> <p>Elev: 1587 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.825337313102!2d121.39063081486873!3d15.448330559880501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI2JzU0LjAiTiAxMjHCsDIzJzM0LjIiRQ!5e1!3m2!1sen!2sph!4v1598118516177!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.933611, 121.485278], { icon: tealIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pungugupanunga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pungugupanunga</p> <p>Elev: 1361 m, Prom: 631 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15765.634354805112!2d121.4787452286219!3d15.935020156652046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339099833a6c0815%3A0x6d3b85f85c45497d!2sMount%20Pungugupanunga!5e1!3m2!1sen!2sph!4v1598118572352!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.059167, 121.696389], { icon: cyanIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dabukid" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dabukid</p> <p>Elev: 880 m, Prom: 193 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15755.842324347823!2d121.6876341286402!3d16.059186842607378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339a793f7ecb56a1%3A0xc141a5e29a806c2c!2sMount%20Dabukid!5e1!3m2!1sen!2sph!4v1598118700247!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1876968, 121.337831], { icon: cyanIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Peak</p> <p>Elev: 732 m, Prom: 151 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16700.148042583776!2d121.41370499781871!3d15.05059815693922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDAzJzAyLjEiTiAxMjHCsDI1JzIxLjQiRQ!5e1!3m2!1sen!2sph!4v1598119163586!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.024444, 121.670278], { icon: cyanIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dimanjotol" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dimanjotol</p> <p>Elev: 645 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.588048220457!2d121.66152302863507!3d16.02446454654429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339a784c7714979d%3A0x9aabd76a4594583a!2sMount%20Dimanjotol!5e1!3m2!1sen!2sph!4v1598119198726!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.701111, 121.59], { icon: cyanIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Disogsip_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Disogsip Mountain</p> <p>Elev: 625 m, Prom: 345 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.652324309689!2d121.59735632858661!3d15.691131283966119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a7e9faeb2fa5%3A0xd32ba70f46d0ff8e!2sDisogsip%20Mountain!5e1!3m2!1sen!2sph!4v1598119241454!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.6602778, 121.6069444], { icon: cyanIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Susong_Dalaga_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Susong Dalaga Mountain</p> <p>Elev: 586 m, Prom: 262 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15787.036286121405!2d121.59818962858215!3d15.660297987393529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a8149f8ee649%3A0xac69cfcdbc3fdd70!2sSusong%20Dalaga%20Mountain!5e1!3m2!1sen!2sph!4v1598119335231!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.083333, 122.05], { icon: cyanIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Baltimore_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Baltimore Peak</p> <p>Elev: 509 m, Prom: 493 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15753.927894831875!2d122.04124522864377!3d16.083353439862996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339a5f6d7eccef1f%3A0x1bf7b77d9bfacad1!2sBaltimore%20Peak!5e1!3m2!1sen!2sph!4v1598119419816!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7180556, 121.6213889], { icon: blueIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dibudalan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dibudalan Mountain</p> <p>Elev: 448 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.565289169326!2d121.61263412859046!3d15.718075830966258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a779217a78df%3A0x9dc0008d0cc10daa!2sDibudalan%20Mountain!5e1!3m2!1sen!2sph!4v1598119451467!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7261111, 121.6258333], { icon: blueIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Magtaca_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Magtaca Mountain</p> <p>Elev: 422 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15781.94066307403!2d121.6170785285916!3d15.726131280068548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a762ddfc8f6d%3A0x32ed2f1ba429123a!2sMagtaca%20Mountain!5e1!3m2!1sen!2sph!4v1598119526216!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.449444, 122.173333], { icon: blueIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dilaguidi_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dilaguidi hill</p> <p>Elev: 346 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.582659740227!2d122.1645785286989!3d16.449464497854127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339ac2d4a0643a59%3A0x7deb3f9b96149ed4!2sDilaguidi%20Hill!5e1!3m2!1sen!2sph!4v1598119628411!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.733333, 121.466667], { icon: blueIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dimanibung" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dimanibung</p> <p>Elev: 264 m, Prom: 171 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15781.380378753278!2d121.45791192859267!3d15.73335352926336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a522472df1eb%3A0xffdcb05c01c75c0e!2sMount%20Dimanibung!5e1!3m2!1sen!2sph!4v1598119671992!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.6644444, 121.6036111], { icon: blueIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Susungdalaga_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Susungdalaga Mountain</p> <p>Elev: 262 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.714864809965!2d121.59485632858278!3d15.664464586930704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a86d11686b63%3A0xf6dc06367acb9092!2sSusungdalaga%20Mountain!5e1!3m2!1sen!2sph!4v1598119870614!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.196389, 122.103611], { icon: blueIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Wheeling_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Wheeling Peak</p> <p>Elev: 294 m, Prom: 192 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15744.95727010876!2d122.09374522866057!3d16.196131277008988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339af141dc969461%3A0xa8a07940b06b3a3!2sWheeling%20Peak!5e1!3m2!1sen!2sph!4v1598119926844!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.2972222, 122.2255556], { icon: blueIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Diluran" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Diluran</p> <p>Elev: 229 m, Prom: 139 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15736.862368695633!2d122.21680082867579!3d16.297242365419198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339ae44bd7bcedf5%3A0x864871dcf446fba7!2sMount%20Diluran!5e1!3m2!1sen!2sph!4v1598119959837!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.329722, 122.174444], { icon: blueIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Borogyod" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Borogyod</p> <p>Elev: 223 m, Prom: 135 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15735.188371585711!2d122.15568962867887!3d16.31807571302349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339aef5b23a5e6db%3A0x6f3fe0ddb4e1066b!2sMount%20Borogyod!5e1!3m2!1sen!2sph!4v1598120024872!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.476667, 122.219722], { icon: blueIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Duro_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Duro Hill</p> <p>Elev: 168 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15722.375488822625!2d122.21096742870306!3d16.47668679469813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339adc881edf38bd%3A0x2713c0f271ee00d2!2sDuro%20Hill!5e1!3m2!1sen!2sph!4v1598120085537!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.0302595, 121.9942227], { icon: blueIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Peak</p> <p>Elev: 138 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.5324495800824!2d121.9920340148739!3d16.03026464473882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAxJzQ4LjkiTiAxMjHCsDU5JzM5LjIiRQ!5e1!3m2!1sen!2sph!4v1598120451016!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.960556, 121.156389], { icon: tealIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Olong_Amo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Olong Amo</p> <p>Elev: 1188 m, Prom: 315 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.60318426142!2d121.14791192862572!3d15.960853503737711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390e976d7e857c5%3A0x41f9a3225b8afc93!2sMount%20Olong%20Amo!5e1!3m2!1sen!2sph!4v1598125601100!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.476667, 122.219722], { icon: tealIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Real" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Real</p> <p>Elev: 1045 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15765.765290547379!2d120.92457852862167!3d15.933353456839928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dfc926dc2c4d%3A0xdc7a5e649864ecf3!2sMount%20Real!5e1!3m2!1sen!2sph!4v1598125645573!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.05, 121.15], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nadumular" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nadumular</p> <p>Elev: 886 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15755.358480051962!2d121.1168008286411!3d16.065297941913727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390ee4aac0114e7%3A0x8102ee6f49c555a6!2sMount%20Nadumular!5e1!3m2!1sen!2sph!4v1598125683303!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.0, 121.116667], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Deugunug" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Deugurug</p> <p>Elev: 863 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.298438450587!2d121.1179119286319!3d16.0027979489972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390eed5355405e7%3A0x538fde1846e2fc68!2sMount%20Deugunug!5e1!3m2!1sen!2sph!4v1598125724039!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.873889, 121.066111], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maloyon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maloyon</p> <p>Elev: 829 m, Prom: 533 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.426511197647!2d121.05735632861301!3d15.873909063530041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dcc5a72b411d%3A0x813b861a331656c9!2sMount%20Maloyon!5e1!3m2!1sen!2sph!4v1598125762849!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.455556, 121.261944], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dalumpa_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dalumpa Peak</p> <p>Elev: 815 m, Prom: 250 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.812511162545!2d121.25374522855307!3d15.454742460095071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33973627566551ed%3A0x2659600e7d30e5e3!2sDalumpa%20Peak!5e1!3m2!1sen!2sph!4v1598125796870!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.264444, 121.219167], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balintigon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balintingon</p> <p>Elev: 803 m, Prom: 352 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.130263509458!2d121.20902302852683!3d15.265853530729068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33973fb3470d32b7%3A0x39070584eab14650!2sMount%20Balintigon!5e1!3m2!1sen!2sph!4v1598125837157!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9002954, 120.9740925], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount 387</p> <p>Elev: 777 m, Prom:174  m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.087677078248!2d120.97142491487263!3d15.900408448163398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390ddd6974dd869%3A0x16779e8dbed8c3bf!2sMount%20387!5e1!3m2!1sen!2sph!4v1598125890356!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.8816125, 121.0427797], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangalo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangpolo</p> <p>Elev: 776 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.056845491037!2d121.0395785286137!3d15.878631312999365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dcef711ab75d%3A0x954f9abb7bd1658c!2sMount%20Mangalo!5e1!3m2!1sen!2sph!4v1598126005959!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.392222, 121.207222], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baca" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Boca</p> <p>Elev: 747 m, Prom: 229 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15807.44242683232!2d121.19707852854457!3d15.393909116764172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339739cf8235031b%3A0x8bfe3539a837d419!2sMount%20Baca!5e1!3m2!1sen!2sph!4v1598126077912!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.834722, 121.067222], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balukbok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balukbok</p> <p>Elev: 634 m, Prom: 270 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.35827120935!2d121.06930082860755!3d15.8364090677394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390db533d0e423f%3A0xab22e3adc96021de!2sMount%20Balukbok!5e1!3m2!1sen!2sph!4v1598126120322!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9822987, 121.0933463], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pinaglorihan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pangloriahan</p> <p>Elev: 612 m, Prom: 164 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.85337180588!2d121.08430082862895!3d15.983075801227505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390e8972343c31b%3A0xdabb0fc21dfe4169!2sMount%20Pinaglorihan!5e1!3m2!1sen!2sph!4v1598126156628!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.868611, 120.970278], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Williams_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Williams</p> <p>Elev: 591 m, Prom: 64 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.904739408492!2d120.96207852861211!3d15.867797964216598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390deb12e905f11%3A0xa47dff333d430134!2sMount%20Williams!5e1!3m2!1sen!2sph!4v1598126207376!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9079562, 121.1626341], { icon: cyanIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pulong_Mabilog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pulong Mabilog</p> <p>Elev: 525 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15767.727682573908!2d121.15374522861804!3d15.908353509656136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c206801a9141%3A0x4745b337163b076d!2sMount%20Pulong%20Mabilog!5e1!3m2!1sen!2sph!4v1598126322585!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.75, 121.166667], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dibonag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dibonag</p> <p>Elev: 470 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15778.899196102537!2d121.18207852859726!3d15.765298025698142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c66b03df4865%3A0xd02e679b7ca290f4!2sMount%20Dibonag!5e1!3m2!1sen!2sph!4v1598126443739!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.866389, 120.988611], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Regal_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Regal</p> <p>Elev: 455 m, Prom: 52 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.752073420234!2d120.98263412861056!3d15.85696456543311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dbff63070ebf%3A0xa7813559f9614f33!2sMount%20Regal!5e1!3m2!1sen!2sph!4v1598126523225!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.85, 121.1], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pantabaron" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pantabaron</p> <p>Elev: 408 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15772.815865895982!2d121.08707852860854!3d15.843353466960535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c35927d931fd%3A0xf6da6beae9261759!2sMount%20Pantabaron!5e1!3m2!1sen!2sph!4v1598126557163!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.778889, 120.733889], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bangcay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bangcay</p> <p>Elev: 393 m, Prom: 307 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.840509023434!2d120.72513412859924!3d15.77890912417716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33912fc9c1516069%3A0xc6a2125c829771a9!2sMount%20Bangcay!5e1!3m2!1sen!2sph!4v1598126617091!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.416667, 121.133333], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Taclandamulac_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Taklang Damulag Hill</p> <p>Elev: 390 m, Prom: 152 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15805.710936574907!2d121.12457852854777!3d15.416686914269711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33973a788cccb0bf%3A0xc2980fb8c6da3f80!2sTaclandamulac%20Hill!5e1!3m2!1sen!2sph!4v1598126715839!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.966667, 121.116667], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anao</p> <p>Elev: 383 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15775.828720347283!2d121.11068962860297!3d15.80474237128733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c4fa1d8feced%3A0x83e7002b8bb82fb2!2sMount%20Anao!5e1!3m2!1sen!2sph!4v1598126829331!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9328013, 121.0366342], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Carranglan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Carranglan</p> <p>Elev: 369 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15766.616028057222!2d121.01541192862008!3d15.92252015806075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dd9af7fa3d03%3A0x1067ec68b85103d8!2sMount%20Carranglan!5e1!3m2!1sen!2sph!4v1598126872126!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7919444, 121.065], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangeoban" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangeoban</p> <p>Elev: 367 m, Prom: 69 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776.82420052353!2d121.05624522860111!3d15.791964622717213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dac4e019c3bf%3A0xaaed8b3353541118!2sMount%20Mangeoban!5e1!3m2!1sen!2sph!4v1598126919807!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.885, 121.0736111], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mulaven" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mulaven</p> <p>Elev: 360 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.556545016527!2d121.06485632861462!3d15.885020162281188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dcd609e75e2f%3A0xfe3c7c9a1b9012b2!2sMount%20Mulaven!5e1!3m2!1sen!2sph!4v1598127017789!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7991903, 121.133297], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aja" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aja</p> <p>Elev: 357 m, Prom: 69 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776.521309834116!2d121.12263412860169!3d15.795853522282133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c45378a29f2d%3A0x9bd23a1016f1a34!2sMount%20Aja!5e1!3m2!1sen!2sph!4v1598127115170!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5102273, 121.1260696], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mapait" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mapait</p> <p>Elev: 354 m, Prom: 160 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.589969760558!2d121.11763412856085!3d15.510020254015481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339733d320ebcd11%3A0xf8c83fc91f810681!2sMount%20Mapait!5e1!3m2!1sen!2sph!4v1598127242899!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.8947625, 121.1112601], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agsil" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agsil</p> <p>Elev: 348 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.751291836434!2d121.10207852861612!3d15.895298011125313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c2ee87458289%3A0xbb2734f15c4f68e2!2sMount%20Agsil!5e1!3m2!1sen!2sph!4v1598127278388!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.8672222, 121.1447222], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kaanducian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kaanducian</p> <p>Elev: 328 m, Prom: 26 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.948205448387!2d121.135967428612!3d15.867242414278994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c3b6fb081505%3A0xe0a51ae5d5f2d907!2sMount%20Kaanducian!5e1!3m2!1sen!2sph!4v1598127326002!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.476667, 122.219722], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anao</p> <p>Elev: 328 m, Prom: 41 m </p></li></div> '
  );
L.marker([15.8504764, 121.1663117], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mates" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mates</p> <p>Elev: 293 m, Prom: 4 m </p></li></div> 15.8504764, <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15772.294928960446!2d121.15791192860952!3d15.850020216212553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c3e0a1ea5c23%3A0x8ba4668b609cbe0!2sMount%20Mates!5e1!3m2!1sen!2sph!4v1598127538819!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.85, 121.116667], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bonaba" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bonaba</p> <p>Elev: 278 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.860657590547!2d121.1026341286103!3d15.85557576558903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c36db11aee9f%3A0x84314f89bcaab38f!2sMount%20Bonaba!5e1!3m2!1sen!2sph!4v1598127609393!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.783333, 121.083333], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangeoban" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangcolobon</p> <p>Elev: 262 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776.82420052353!2d121.05624522860111!3d15.791964622717213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dac4e019c3bf%3A0xaaed8b3353541118!2sMount%20Mangeoban!5e1!3m2!1sen!2sph!4v1598127638637!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.264722, 121.145833], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Biscal" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Biscal</p> <p>Elev: 262 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.109328735225!2d121.13568962852683!3d15.26613138069888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33973d9470233215%3A0xf4794f16dba566d4!2sMount%20Biscal!5e1!3m2!1sen!2sph!4v1598127684559!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.797448, 120.6640323], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cuyapo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cuyapo</p> <p>Elev: 245 m, Prom: 192 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776.110127090105!2d120.64985632860245!3d15.801131321691523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339130f3bc2e71bf%3A0x816cd4a2bf21caef!2sMount%20Cuyapo!5e1!3m2!1sen!2sph!4v1598127731850!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5091667, 121.1088889], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dillman" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dillman</p> <p>Elev: 157 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.653736596218!2d121.10013412856074!3d15.509186904107274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33973226b998f20d%3A0x198dd17635327549!2sMount%20Dillman!5e1!3m2!1sen!2sph!4v1598127766377!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.75, 121.116667], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anunas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anunas</p> <p>Elev: 153 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15779.482174252566!2d121.09957852859617!3d15.75779802653574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c5622b4d96c1%3A0xc8d9fdfd00d8a03c!2sMount%20Anunas!5e1!3m2!1sen!2sph!4v1598127925075!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7833333, 120.875], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Limlingan</p> <p>Elev: 118 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15821.182087384346!2d120.86624402944493!3d15.783338440607727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ3JzAwLjAiTiAxMjDCsDUyJzMwLjAiRQ!5e1!3m2!1sen!2sph!4v1598128040314!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.8333333, 120.875], { icon: blueIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Burgos</p> <p>Elev: 96 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15745.975924099337!2d120.86625068138645!3d15.833338435315898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzAwLjAiTiAxMjDCsDUyJzMwLjAiRQ!5e1!3m2!1sen!2sph!4v1598128156834!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.363889, 120.169167], { icon: orangeIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Iba_(bukid_sa_Pilipinas,_lat_15,36,_long_120,17)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iba</p> <p>Elev: 1677 m, Prom: 292 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15809.719108084562!2d120.16013412854039!3d15.363909170044733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969fd04879ac4b%3A0x4f216e99a1a6489!2sMount%20Iba!5e1!3m2!1sen!2sph!4v1598132017923!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.426944, 120.314722], { icon: cyanIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gatas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gates</p> <p>Elev: 509 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.737048246929!2d120.3118008285257!3d15.257798031604215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969a678836ca7f%3A0xb6fc29fb50f9ebb0!2sMount%20Gatas!5e1!3m2!1sen!2sph!4v1598132070606!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.437016, 120.4315408], { icon: blueIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Monasterio_de_Tarlac" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mt. Resurrection</p> <p>Elev: 306 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16220.974462056678!2d120.4227481628892!3d15.437021142417759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI2JzEzLjMiTiAxMjDCsDI1JzUzLjYiRQ!5e1!3m2!1sen!2sph!4v1598132177684!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5666667, 120.4], { icon: blueIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Pitongbayog II</p> <p>Elev: 283 m, Prom: 199 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.299982993132!2d120.39129199572326!3d15.566671828696961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM0JzAwLjAiTiAxMjDCsDI0JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598132503477!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.3236111, 120.4241667], { icon: blueIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Hog_Back_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Hog Back Hill</p> <p>Elev: 201 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.7689578764!2d120.41541192853481!3d15.323631324440582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969664b4bc21cb%3A0x4a4589f37c0c356c!2sHog%20Back%20Hill!5e1!3m2!1sen!2sph!4v1598132597742!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5666667, 120.3833333], { icon: blueIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Pitongbayog I</p> <p>Elev: 79 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.506318519087!2d120.3745736113663!3d15.566671844132378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM0JzAwLjAiTiAxMjDCsDIzJzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598132438064!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4807954, 120.1205575], { icon: redIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Tapulao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tapulao</p> <p>Elev: 2038 m, Prom: 2013 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15800.819805048546!2d120.11235622855676!3d15.480853207225662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941e7bac14496f%3A0x3563d4b185ba825a!2sMount%20Tapulao!5e1!3m2!1sen!2sph!4v1598138020756!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.441389, 120.151389], { icon: orangeIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sawtooth_Mountain_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sawtooth</p> <p>Elev: 1704 m, Prom: 120 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15803.087846633243!2d120.14791192855253!3d15.451131310491588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941e287a41b005%3A0xb2488ab9387cda6a!2sSawtooth%20Mountain!5e1!3m2!1sen!2sph!4v1598138157667!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.363889, 120.169167], { icon: orangeIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Iba_(bukid_sa_Pilipinas,_lat_15,36,_long_120,17)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iba</p> <p>Elev: 1677 m, Prom: 292 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15809.719108084562!2d120.16013412854039!3d15.363909170044733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969fd04879ac4b%3A0x4f216e99a1a6489!2sMount%20Iba!5e1!3m2!1sen!2sph!4v1598138254491!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.3319444, 120.1833333], { icon: tealIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dome_Peak_(tumoy_sa_bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dome Peak</p> <p>Elev: 1362 m, Prom: 62 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.138599207266!2d120.17457852853597!3d15.331964623531912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969e6aa225e489%3A0x86904887b8e953b9!2sDome%20Peak!5e1!3m2!1sen!2sph!4v1598138303124!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0306917, 120.3618122], { icon: tealIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mt. Cuadrado</p> <p>Elev: 1320 m, Prom: 403 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15834.600148917743!2d120.3379119284949!3d15.032242505947456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339662ab9eef9013%3A0x9352f7fc1dfb80bb!2sMount%20Cuadrado!5e1!3m2!1sen!2sph!4v1598138420964!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1623238, 120.1735364], { icon: tealIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lunitan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lunitan</p> <p>Elev: 1320 m, Prom: 972 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15824.807010281022!2d120.15957852851277!3d15.163631341804974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396820dba8386c9%3A0xd91b96199f829030!2sMount%20Lunitan!5e1!3m2!1sen!2sph!4v1598138511311!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.647778, 120.039722], { icon: tealIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lanat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lanat</p> <p>Elev: 1112 m, Prom: 609 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15788.644489877883!2d120.03318962857924!3d15.639464589706071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339404425e2c7795%3A0x1e4f6129e56c6ec!2sMount%20Lanat!5e1!3m2!1sen!2sph!4v1598138547596!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8566915, 120.1259478], { icon: tealIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balingkilat</p> <p>Elev: 1093 m, Prom: 1036 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.058883398742!2d120.11959782847049!3d14.849822075408017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d8f1c1605c0f%3A0xe496d4b02c024b99!2sMt.%20Balingkilat!5e1!3m2!1sen!2sph!4v1598138604186!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0245581, 120.3315788], { icon: tealIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balitog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balitog</p> <p>Elev: 1060 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.094832002535!2d120.32068962849401!3d15.025575856662226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967d45abe8cc3d%3A0x4a168a87fb562fd0!2sMount%20Balitog!5e1!3m2!1sen!2sph!4v1598138726622!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.896944, 120.106389], { icon: tealIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maubanban" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maubanban</p> <p>Elev: 1035 m, Prom: 206 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.534838917478!2d120.0981896284769!3d14.89779812030967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d9d15f7c5b33%3A0x9cddd902b59bd57!2sMount%20Maubanban!5e1!3m2!1sen!2sph!4v1598138814156!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.319506, 120.184069], { icon: tealIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cahapatan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cahapatan</p> <p>Elev: 1016 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.084015554314!2d120.17568962853423!3d15.319464624894765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969e72fb958487%3A0xc1d4114029638960!2sMount%20Cahapatan!5e1!3m2!1sen!2sph!4v1598138864260!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.986944, 120.376111], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bitnung" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bitnung</p> <p>Elev: 976 m, Prom: 279 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.852881279723!2d120.334856328489!3d14.988353610648087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396632ccb244735%3A0xd58366de96d32ff5!2sMount%20Bitnung!5e1!3m2!1sen!2sph!4v1598138896584!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.534722, 120.026944], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masinloc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masinloc</p> <p>Elev: 962 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.654157914554!2d120.02152302856445!3d15.535298051229164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941bafbd303d15%3A0xe17b178d6a8f1338!2sMount%20Masinloc!5e1!3m2!1sen!2sph!4v1598138930199!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1499563, 120.1453285], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Quimalogong_(bukid_sa_Pilipinas,_lat_15,15,_long_120,14)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Quimalogong</p> <p>Elev: 957 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15825.763060523457!2d120.135689628511!3d15.150853593184985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339429f6354641cf%3A0x32e21cf09a219912!2sMount%20Quimalogong!5e1!3m2!1sen!2sph!4v1598139085778!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.130833, 120.169167], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nagdayap_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nagdayap Mountain</p> <p>Elev: 952 m, Prom: 113 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.299405730475!2d120.16013412850818!3d15.130298045402897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339681e6757078f9%3A0x96139d5ddf0ecd1e!2sNagdayap%20Mountain!5e1!3m2!1sen!2sph!4v1598139162263!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1445511, 120.3509967], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pinatubo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pinatubo</p> <p>Elev: 927 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.357980030862!2d120.34080172850994!3d15.142897094043777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33968f671dda71cd%3A0x608b6fdf07e78094!2sMt%20Pinatubo!5e1!3m2!1sen!2sph!4v1598139237258!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.929444, 120.33], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balakibak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balakibok</p> <p>Elev: 926 m, Prom: 289 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.038860104818!2d120.31680082848138!3d14.931687016699847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967b3ecf83d5e7%3A0xa54edb91b5074ea0!2sMount%20Balakibak!5e1!3m2!1sen!2sph!4v1598139444612!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8067417, 120.1373646], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dayungan</p> <p>Elev: 925 m, Prom: 563 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8271986160753!2d120.1365709148632!3d14.80544337599294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395df462ad03b97%3A0xa8a38d6f052e91e9!2sRounded%20Peak!5e1!3m2!1sen!2sph!4v1598139287466!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.790872, 120.1626011], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cinco_Picos" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cinco Picos</p> <p>Elev: 919 m, Prom: 279 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.503674373958!2d120.15395162846247!3d14.78909413184132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396758ba78106ab%3A0x39aba1fd076fd2b6!2sCinco%20Picos!5e1!3m2!1sen!2sph!4v1598139520339!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9, 120.116667], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agudo_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agudo</p> <p>Elev: 891 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.984342609985!2d120.10096742847607!3d14.891687020959875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d9cda0ce5459%3A0x671dd03066a6bc51!2sMount%20Agudo!5e1!3m2!1sen!2sph!4v1598139603202!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2025, 120.157222], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cawayen" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cawayen</p> <p>Elev: 885 m, Prom: 163 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.017504393174!2d120.14680082851785!3d15.200853537779283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339428262e45c5ed%3A0xeb82f2faff93758a!2sMount%20Cawayen!5e1!3m2!1sen!2sph!4v1598139645083!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.783333, 120.166667], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Silanguin" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Silanguin</p> <p>Elev: 876 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.15514432843!2d120.16519542846129!3d14.780172782784524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967590851cb587%3A0xccbde68935a405e3!2sMount%20Silanguin!5e1!3m2!1sen!2sph!4v1598139686979!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.949722, 120.284444], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mabulinoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mabolinoc</p> <p>Elev: 859 m, Prom: 293 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.501702705391!2d120.27374522848417!3d14.952520264477222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967b8e31c8bfab%3A0xcc953dd8982f9c86!2sMount%20Mabulinoc!5e1!3m2!1sen!2sph!4v1598139724353!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.75, 121.116667], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Boars Tusk</p> <p>Elev: 854 m, Prom: 20 m </p></li></div> '
  );
L.marker([14.933333, 120.333333], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Boars_Tusk_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dangas</p> <p>Elev: 842 m, Prom: 197 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.915969012136!2d120.32457852848165!3d14.933353616522156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967b37e7dacc5b%3A0xa21b5ea1085bf869!2sBoars%20Tusk!5e1!3m2!1sen!2sph!4v1598139759384!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.74796, 120.090068], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cardoues" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cardoues</p> <p>Elev: 806 m, Prom: 94 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15780.086460328444!2d120.07791192859507!3d15.75002022740402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393ff5e88392d4f%3A0x8d288edde19c58f3!2sMount%20Cardoues!5e1!3m2!1sen!2sph!4v1598139817267!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.983333, 120.366667], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anopus" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anopus</p> <p>Elev: 801 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.22285600864!2d120.35791192848832!3d14.983353611182864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396631878647d33%3A0x810d256e94261980!2sMount%20Anopus!5e1!3m2!1sen!2sph!4v1598139894086!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.072778, 120.190833], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maquineng" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maquineng</p> <p>Elev: 787 m, Prom: 566 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.668876224214!2d120.18152302850021!3d15.071687001712775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396806e51fb3a3b%3A0x4e06f56581132a64!2sMount%20Maquineng!5e1!3m2!1sen!2sph!4v1598139929323!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.37473, 120.0611706], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patugo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patugo</p> <p>Elev: 781 m, Prom: 385 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15808.897478091742!2d120.0537452285419!3d15.374742418860736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394222bbc1aeb07%3A0xb5fe8d5efdae7f15!2sMount%20Patugo!5e1!3m2!1sen!2sph!4v1598139962320!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.233333, 120.1], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mobanghil" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mobanghil</p> <p>Elev: 760 m, Prom: 154 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15819.5764251824!2d120.09124522852231!3d15.233353584257392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394289b409f2645%3A0x270dc4a968d8a20f!2sMount%20Mobanghil!5e1!3m2!1sen!2sph!4v1598140007099!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.566667, 120.116667], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dalayap_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dalayap Hill</p> <p>Elev: 758 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15793.776691560031!2d120.10596742856974!3d15.572797997088463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941d2ace58acd1%3A0x364b1960c7afb7cc!2sDalayap%20Hill!5e1!3m2!1sen!2sph!4v1598140044864!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9, 120.383333], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tambo_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tambo</p> <p>Elev: 722 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.371343356048!2d120.37457852847717!3d14.900020270073187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396650405240ab7%3A0x5c43c8e64edcf1aa!2sMount%20Tambo!5e1!3m2!1sen!2sph!4v1598140087682!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2189851, 120.1077375], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naparel" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naparel</p> <p>Elev: 718 m, Prom: 100 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15820.641104544029!2d120.09902302852038!3d15.219186985793364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394288b684072f1%3A0x5abe627f3714f90c!2sMount%20Naparel!5e1!3m2!1sen!2sph!4v1598140172863!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.045278, 120.164722], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Paete" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Payte</p> <p>Elev: 703 m, Prom: 313 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15833.69267253162!2d120.15541192849653!3d15.044464704636326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967ff486877405%3A0x3135f31e83ee88a2!2sMount%20Paete!5e1!3m2!1sen!2sph!4v1598140208300!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.234722, 120.099722], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bear_Peak_(tumoy_sa_bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bear Peak</p> <p>Elev: 703 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15819.200427079228!2d120.08846742852303!3d15.238353533715003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394289dba024eb9%3A0xaeb389bde1b2440a!2sBear%20Peak!5e1!3m2!1sen!2sph!4v1598140252164!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.239167, 120.077778], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Catongohan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Catongohan</p> <p>Elev: 676 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7909.572828977781!2d120.07401647457785!3d15.239081709200512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339428a61f5aa759%3A0xe8e165a01a5d666a!2sMount%20Catongohan!5e1!3m2!1sen!2sph!4v1598140327230!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.030278, 120.180278], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pimmayong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pimmayong</p> <p>Elev: 665 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15834.744450691775!2d120.17180082849465!3d15.030298106155954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967f9794a98129%3A0x9561fc2e7a44f8be!2sMount%20Pimmayong!5e1!3m2!1sen!2sph!4v1598140435724!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.324722, 120.150278], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangkirat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangkirat</p> <p>Elev: 656 m, Prom: 79 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.663916285042!2d120.14068962853497!3d15.325020274289162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339420afbae628fb%3A0x610af6b403b82ce4!2sMount%20Mangkirat!5e1!3m2!1sen!2sph!4v1598140476244!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1225, 120.1475], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Binawawan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Binawawan Mountain</p> <p>Elev: 654 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.398503996414!2d120.14763412850621!3d15.115575896989812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942a7833e0949f%3A0xe15f0a4d4934d2fb!2sBinawawan%20Mountain!5e1!3m2!1sen!2sph!4v1598140518676!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.195556, 120.198611], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pundillo_Ni_Luna" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pundillo Ni Luna</p> <p>Elev: 615 m, Prom: 0 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15823.850165498163!2d120.14457852851451!3d15.176409190423968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339429d962d6096b%3A0x8befe254d6e5bc57!2sMount%20Pundillo%20Ni%20Luna!5e1!3m2!1sen!2sph!4v1598140561812!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.836944, 120.184444], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Redondo_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Redondo</p> <p>Elev: 615 m, Prom: 226 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.981066094864!2d120.17624522846883!3d14.837242526742504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967646e25e1bef%3A0x8dc6ff9a5b3742a6!2sMount%20Redondo!5e1!3m2!1sen!2sph!4v1598140599874!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8401459, 120.1045795], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagsasa</p> <p>Elev: 606 m, Prom: 184 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16599.869077130104!2d120.09576050044342!3d14.840151062679036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDUwJzI0LjUiTiAxMjDCsDA2JzE2LjUiRQ!5e1!3m2!1sen!2sph!4v1598140718897!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.895833, 120.071111], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pundaquit" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pundaquit</p> <p>Elev: 600 m, Prom: 224 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.24869592618!2d120.06291192847739!3d14.901687019895782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d9f979f4a8c3%3A0xa5b8ced1456b00f1!2sMount%20Pundaquit!5e1!3m2!1sen!2sph!4v1598140820306!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.916667, 120.1], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Capalngan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calpalngan</p> <p>Elev: 599 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.059343108189!2d120.09457852848136!3d14.93140921672947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d70e7006ca2d%3A0xa77eb667416083a2!2sMount%20Capalngan!5e1!3m2!1sen!2sph!4v1598140864158!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0917194, 120.2517413], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagano" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagano</p> <p>Elev: 590 m, Prom: 151 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.558688925059!2d120.24124522850408!3d15.100020298665125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396812cdfa9aa25%3A0x6e0a1764f2576025!2sMount%20Bagano!5e1!3m2!1sen!2sph!4v1598140908547!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8380259, 120.1422189], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bira-Bira</p> <p>Elev: 582 m, Prom: 99 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16907.639893473737!2d120.13323309063756!3d14.838031062027868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDUwJzE2LjkiTiAxMjDCsDA4JzMyLjAiRQ!5e1!3m2!1sen!2sph!4v1598141012534!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.058889, 120.220556], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Piluca" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Piluca</p> <p>Elev: 572 m, Prom: 161 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.639918953102!2d120.21207852849847!3d15.058631403115454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396809c403654d9%3A0x1ef2ccf598d577f7!2sMount%20Piluca!5e1!3m2!1sen!2sph!4v1598141049155!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.233611, 120.043056], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Botolan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Botolan</p> <p>Elev: 568 m, Prom: 362 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9049251127303!2d120.03948571486676!3d15.232778015354754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942f698a140041%3A0xbf55fb5a13b403a!2sMount%20Botolan!5e1!3m2!1sen!2sph!4v1598141078481!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.205, 120.188056], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Culianan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Culianan</p> <p>Elev: 564 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.4134283134!2d120.18902302851714!3d15.195575888350593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339682e4eb1dcb35%3A0x547315e35fe64460!2sMount%20Culianan!5e1!3m2!1sen!2sph!4v1598141117324!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.95, 120.3666667], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Balikabok</p> <p>Elev: 542 m, Prom: </p></li></div> '
  );
L.marker([15.75, 121.116667], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balakibak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gata</p> <p>Elev: 520 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.038860104822!2d120.31680082848138!3d14.931687016699836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967b3ecf83d5e7%3A0xa54edb91b5074ea0!2sMount%20Balakibak!5e1!3m2!1sen!2sph!4v1598141209817!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2536111, 120.3227778], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sinilong_Bondok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sinilong Bondok</p> <p>Elev: 516 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.050784407202!2d120.3140230285251!3d15.253631332056727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969a60d1bb6675%3A0x3dc79a31515862de!2sSinilong%20Bondok!5e1!3m2!1sen!2sph!4v1598141260272!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.883333, 120.35], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Susongdalaga_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Susongdalaga</p> <p>Elev: 516 m, Prom: 186 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.597017711216!2d120.34124522847495!3d14.88335362184615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396654ea2b037f3%3A0x347190c5b88e8462!2sMount%20Susongdalaga!5e1!3m2!1sen!2sph!4v1598141324038!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.125556, 120.103889], { icon: cyanIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pamalingpingan Mountain</p> <p>Elev: 505 m, Prom: 167 m </p></li></div> '
  );
L.marker([15.75, 121.116667], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pamalingpi%C3%B1gan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cunonoyo</p> <p>Elev: 492 m, Prom: 200 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.942399978387!2d120.08235632850705!3d15.121686996331254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942ba23df2d09b%3A0xd12558db02cba277!2sPamalingpingan%20Mountain!5e1!3m2!1sen!2sph!4v1598141377855!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.147222, 120.093611], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santa_Cruz" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santa Cruz</p> <p>Elev: 470 m, Prom: 89 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31652.76682742329!2d120.0816069743789!3d15.142556851041311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942bc5a5365cc7%3A0x26d545c1c356a7a2!2sMount%20Santa%20Cruz!5e1!3m2!1sen!2sph!4v1598141408604!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.560278, 120.009444], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bakil" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bakil</p> <p>Elev: 467 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15794.907166234676!2d120.00096742856763!3d15.558075848715085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941ae54f60c4d1%3A0x6b76381c89782297!2sMount%20Bakil!5e1!3m2!1sen!2sph!4v1598141448170!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.833333, 120.166667], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maybe" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maybe</p> <p>Elev: 462 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.510170174797!2d120.15568962846787!3d14.830020277508229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396761ed26a5ffb%3A0x223f143d3309d186!2sMount%20Maybe!5e1!3m2!1sen!2sph!4v1598141484580!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.309722, 120.113333], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bunglo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bunglo</p> <p>Elev: 451 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.86078439742!2d120.10430082853279!3d15.30918697601461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942727867b3e83%3A0xeb1eaa2e0239504d!2sMount%20Bunglo!5e1!3m2!1sen!2sph!4v1598141529116!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.886944, 120.419444], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malasimbo_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malasimbo</p> <p>Elev: 442 m, Prom: 234 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.290722060157!2d120.4104119284755!3d14.887520321403056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339665c42d5bacfb%3A0xf32165da82df6386!2sMount%20Malasimbo!5e1!3m2!1sen!2sph!4v1598141564853!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.279167, 120.166944], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pera" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pera</p> <p>Elev: 439 m, Prom: 128 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.083336861948!2d120.15485632852872!3d15.279742479219271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969d868dd5d22f%3A0x5170f047d3bf2747!2sMount%20Pera!5e1!3m2!1sen!2sph!4v1598141602911!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8747222, 120.0877778], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Twin_Peaks_(tumoy_sa_bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Twin Peaks</p> <p>Elev: 438 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.229757289771!2d120.07902302847378!3d14.87474252276153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d9983b77edc1%3A0x3c792a635676f286!2sTwin%20Peaks!5e1!3m2!1sen!2sph!4v1598141765471!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.916667, 120.116667], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nacday" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nacday</p> <p>Elev: 417 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.366521354697!2d120.0979119284808!3d14.927242517173669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d70c839732f1%3A0x7a241d8ba27fd798!2sMount%20Nacday!5e1!3m2!1sen!2sph!4v1598141853139!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2438889, 120.0386111], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Binonton_Senora_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Binonton Senora Hill</p> <p>Elev: 386 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.782502596003!2d120.02985632852378!3d15.243909133112147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942f614c3f6b63%3A0x88b5a3bf41b9d31a!2sBinonton%20Senora%20Hill!5e1!3m2!1sen!2sph!4v1598141905484!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.883333, 120.316667], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kalaklan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kalaklan</p> <p>Elev: 384 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.903222213534!2d120.30818962847438!3d14.879187022289113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967a992d9a73af%3A0x10ef4e2dca2475bd!2sMount%20Kalaklan!5e1!3m2!1sen!2sph!4v1598141975664!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.299444, 120.158611], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lanitoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lanitoc</p> <p>Elev: 372 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.637059502615!2d120.13874522853133!3d15.298909127133824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394275cd2ec95df%3A0xcf90aaee2795d633!2sMount%20Lanitoc!5e1!3m2!1sen!2sph!4v1598142019338!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5936111, 120.0736111], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Banganbatang_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Banganbatang Hill</p> <p>Elev: 364 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.175176111157!2d120.0648563285727!3d15.593631294784368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394035bc0f0747d%3A0xbac28e4f20ef9ad8!2sBanganbatang%20Hill!5e1!3m2!1sen!2sph!4v1598142080422!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.932778, 120.409444], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Quadrant" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Quadrant</p> <p>Elev: 356 m, Prom: 49 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.95693174103!2d120.40068962848154!3d14.932798116581376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396646d8487630d%3A0x87286be21240ca5a!2sMount%20Quadrant!5e1!3m2!1sen!2sph!4v1598142166534!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.078333, 120.139722], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Laba%C3%B1gan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Labañgan</p> <p>Elev: 356 m, Prom: 154 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.193386336336!2d120.13124522850111!3d15.078075901025995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942ab9c19c3bc1%3A0x41cad7558ff53f4a!2sMount%20Labangan!5e1!3m2!1sen!2sph!4v1598142201076!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1501482, 120.2500376], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Moraza_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Moraza Hill</p> <p>Elev: 349 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.012337277656!2d120.23485632851056!3d15.147520243544816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339683f0e5ed524d%3A0xc6f3bc32697db8cb!2sMoraza%20Hill!5e1!3m2!1sen!2sph!4v1598142237998!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.078056, 120.107222], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Quimalogong_(bukid_sa_Pilipinas,_lat_15,08,_long_120,11)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Quimalagong</p> <p>Elev: 337 m, Prom: 125 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.25542649605!2d120.09846742850094!3d15.077242451115604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942b294d8a9227%3A0x5083b3116b31589b!2sMount%20Quimalogong!5e1!3m2!1sen!2sph!4v1598142342994!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.883333, 120.333333], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nabunton_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nabunton Mountain</p> <p>Elev: 329 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.597017711216!2d120.32457852847497!3d14.88335362184615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967ab06a464471%3A0xc50a1b681ebd68f3!2sNabunton%20Mountain!5e1!3m2!1sen!2sph!4v1598142416625!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.007222, 120.251944], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagang</p> <p>Elev: 326 m, Prom: 186 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15836.557023631314!2d120.24291192849138!3d15.005853558775206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967c2a7dfb022f%3A0xa164afc34b220eb2!2sMount%20Bagang!5e1!3m2!1sen!2sph!4v1598142455357!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5847222, 120.0258333], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pinanabunan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinanabunan Hill</p> <p>Elev: 306 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.858742860411!2d120.01707852857143!3d15.584742445767764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941b2b63a76a8b%3A0x5c23abbc063119d!2sPinanabunan%20Hill!5e1!3m2!1sen!2sph!4v1598142486974!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8882582, 120.2035566], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Saddle_Mountain_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Saddle Mountain</p> <p>Elev: 301 m, Prom: 231 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.351988629513!2d120.2062452284754!3d14.886686971491681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396777d170eead9%3A0xe675f892b308c7b7!2sSaddle%20Mountain!5e1!3m2!1sen!2sph!4v1598142570748!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8522222, 120.1636111], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Basillio" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Basillio</p> <p>Elev: 296 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.88136087815!2d120.15485632847086!3d14.852242475151172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396762b72007eaf%3A0xeab4495917c8d895!2sMount%20Basillio!5e1!3m2!1sen!2sph!4v1598142613793!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.886111, 120.124444], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pink" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pink</p> <p>Elev: 0 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.944050741804!2d120.10235632847436!3d14.87863137234817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d9b4951e273b%3A0x46e5595df698e836!2sMount%20Pink!5e1!3m2!1sen!2sph!4v1598142708236!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.770556, 120.011944], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Natalisbong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Natalisbong</p> <p>Elev: 288 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15780.345347730688!2d120.04763412859461!3d15.746686927776016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339407576d2e79fb%3A0x5a0b656464d40090!2sMount%20Natalisbong!5e1!3m2!1sen!2sph!4v1598142739624!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.275833, 120.140278], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mulbao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mulbao</p> <p>Elev: 263 m, Prom: 124 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.627850638552!2d120.12985632852774!3d15.272520280004512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394279f1ddc868b%3A0x43d0e0340c214338!2sMount%20Mulbao!5e1!3m2!1sen!2sph!4v1598142773006!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8871591, 120.2148013], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabitoagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabitoagan</p> <p>Elev: 253 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.597017711216!2d120.20791192847494!3d14.883353621846144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396776354b24dd3%3A0x1abbe8b9ba8b9c7!2sMount%20Cabitoagan!5e1!3m2!1sen!2sph!4v1598142814803!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8825242, 120.1676326], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cawag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cauag</p> <p>Elev: 252 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.33156926277!2d120.15180082847547!3d14.88696472146216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339677e4eee13215%3A0x3e9d6353b04c3dcf!2sMount%20Cayuag!5e1!3m2!1sen!2sph!4v1598142855383!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.252778, 120.065], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Munti" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Munti</p> <p>Elev: 250 m, Prom: 142 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.15534077341!2d120.05596742852494!3d15.25224248220753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339425fdbca9c23b%3A0x20d39b47b56fd828!2sMount%20Munti!5e1!3m2!1sen!2sph!4v1598142913630!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.777778, 120.194444], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Macmany" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Macmany</p> <p>Elev: 245 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.328488930818!2d120.18568962846098!3d14.7777980830355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339675b012497f5b%3A0x2949919433b66bf6!2sMacmany!5e1!3m2!1sen!2sph!4v1598142946022!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8793439, 120.1542859], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Casagoton_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Casagoton</p> <p>Elev: 243 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.331569262766!2d120.15180082847544!3d14.886964721462148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339677e4eee13215%3A0x3e9d6353b04c3dcf!2sMount%20Cayuag!5e1!3m2!1sen!2sph!4v1598142984970!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.933333, 120.083333], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Rogostoco" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Rogostoco</p> <p>Elev: 241 m, Prom: 45 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.331569262766!2d120.15180082847544!3d14.886964721462148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d739e4d8ce03%3A0x7577426aaeafd475!2sMount%20Rogostoco!5e1!3m2!1sen!2sph!4v1598143042957!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.713611, 119.972222], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lacapon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lacapon</p> <p>Elev: 237 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.909789615922!2d119.96346742858984!3d15.713631281461396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394088244847d99%3A0x23d278cdeb500028!2sMount%20Lacapon!5e1!3m2!1sen!2sph!4v1598143075176!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.3261111, 120.0513889], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binandilaan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binandilaan</p> <p>Elev: 229 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.579884641233!2d120.04263412853511!3d15.326131324168031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339424092fd3068b%3A0x2541736082915996!2sMount%20Binandilaan!5e1!3m2!1sen!2sph!4v1598143109082!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.933333, 120.233333], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lomboy_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lomboy</p> <p>Elev: 199 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.509838108386!2d120.24180082848055!3d14.92529811738093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396797ff9d54c8d%3A0xfef67d5e90c9d2fb!2sMount%20Lomboy!5e1!3m2!1sen!2sph!4v1598143348862!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.566667, 120.083333], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Coto Hill</p> <p>Elev: 193 m, Prom: 3 m </p></li></div> '
  );
L.marker([15.75, 121.116667], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Coto_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bolja Peak</p> <p>Elev: 166 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15795.33349494663!2d120.07957852856687!3d15.55252024932857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941c94c19a2d73%3A0x693d52e1a056da73!2sCoto%20Hill!5e1!3m2!1sen!2sph!4v1598143394501!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8836259, 120.2501559], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Booitlao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Boouillao</p> <p>Elev: 166 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.066505343924!2d120.24735632847408!3d14.876964722525331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339670ac0edd895f%3A0xbab56cc47096f6bc!2sMount%20Booitlao!5e1!3m2!1sen!2sph!4v1598143461932!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2416667, 120.0244444], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maoato_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maoato Hill</p> <p>Elev: 131 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.949687227618!2d120.01568962852348!3d15.241686933353312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942f79c0f79327%3A0xe9e5cee58147dc2f!2sMaoato%20Hill!5e1!3m2!1sen!2sph!4v1598143616148!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.317778, 120.0525], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binandilaan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binalayan</p> <p>Elev: 130 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.579884641233!2d120.04263412853511!3d15.326131324168031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339424092fd3068b%3A0x2541736082915996!2sMount%20Binandilaan!5e1!3m2!1sen!2sph!4v1598143718439!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0975, 120.0602778], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Carmen_Hill_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Carmen Hill</p> <p>Elev: 130 m, Prom: 106 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.745037857481!2d120.05152302850375!3d15.097520298934242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942ca223927553%3A0x5411cf4f70bd70cd!2sCarmen%20Hill!5e1!3m2!1sen!2sph!4v1598143771297!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9683333, 120.2691667], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagbakil" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagbakil</p> <p>Elev: 129 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.332060190023!2d120.26041192848632!3d14.968353562786254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967c0be6689cef%3A0x6fef1ee7e9388ead!2sMount%20Nagbakil!5e1!3m2!1sen!2sph!4v1598143863755!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8961341, 120.2023092], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Namapagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Namapagan Mountain</p> <p>Elev: 124 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.778449615173!2d120.20791192847825!3d14.908075869215631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339679c7e1d9b85f%3A0xb8f0ec435238cec6!2sMount%20Namapagan!5e1!3m2!1sen!2sph!4v1598143956020!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.866667, 120.25], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panaigar" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panaigar</p> <p>Elev: 123 m, Prom: 90 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.82135127923!2d120.24124522847274!3d14.866686973617409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396774b41aae043%3A0x21381687b30d835c!2sMount%20Panaigar!5e1!3m2!1sen!2sph!4v1598144048723!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0727778, 120.0733333], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sindol_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sindol Hill</p> <p>Elev: 119 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.586201162228!2d120.06457852850043!3d15.07279805159337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d4ac6ec5bd89%3A0x52387060526d60d2!2sSindol%20Hill!5e1!3m2!1sen!2sph!4v1598144080989!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9, 120.183333], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alinup" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alinup</p> <p>Elev: 115 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.371343356048!2d120.17457852847717!3d14.900020270073183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396782269909721%3A0x2143802ec614fd24!2sMount%20Alinup!5e1!3m2!1sen!2sph!4v1598144139824!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7122222, 119.9252778], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Malpay_Hill_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malpay Hill</p> <p>Elev: 104 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.017420958988!2d119.91652302858964!3d15.712242431616085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394091dd69f0cd5%3A0xcfda3eb40ce743c1!2sMalpay%20Hill!5e1!3m2!1sen!2sph!4v1598144187093!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.99, 120.1522222], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Simminoblan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Simminoblan Hill</p> <p>Elev: 103 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.729530800867!2d120.14346742848922!3d14.990020260469802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d5fa3c7bb3e1%3A0x79dac00f4a3aac66!2sSimminoblan%20Hill!5e1!3m2!1sen!2sph!4v1598144280613!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8830063, 120.2115224], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg" style="border: 3px solid #B80f0a;"/><li title="Popup Info Sourced From Peakvisor.com"><p>mountain hills</p> <p>Elev: 87 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.405541349692!2d120.2093337148638!3d14.883011474083267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDUyJzU4LjgiTiAxMjDCsDEyJzQxLjUiRQ!5e1!3m2!1sen!2sph!4v1598144434417!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9002558, 120.2147327], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Namiranlic" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mamiranlic</p> <p>Elev: 86 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.187376382288!2d120.20957852847754!3d14.90252026980708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339679c5c0ef05af%3A0xc94a00f8c36bec11!2sMount%20Namiranlic!5e1!3m2!1sen!2sph!4v1598144478688!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1077778, 120.0561111], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tictic_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tictic Hill</p> <p>Elev: 83 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.978742305566!2d120.04735632850513!3d15.107798097827656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942c9a8bc38f91%3A0xb5fea37f236259a6!2sTictic%20Hill!5e1!3m2!1sen!2sph!4v1598144508193!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8836111, 120.0763889], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lone_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lone Hill</p> <p>Elev: 71 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.57659913823!2d120.06763412847496!3d14.883631421816606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d98dc0ec8fa9%3A0xb403e2b3f60dde16!2sLone%20Hill!5e1!3m2!1sen!2sph!4v1598144603328!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.705, 119.9025], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Naulo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Naulo Hill</p> <p>Elev: 56 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.576968391217!2d119.8937452285886!3d15.705020232420363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33940940cd7d25c5%3A0xe9e80fa4ca39d827!2sNaulo%20Hill!5e1!3m2!1sen!2sph!4v1598144652020!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5344444, 119.9755556], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Babo_Puti_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Babo Puti Hill</p> <p>Elev: 55 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.718033785086!2d119.96680082856433!3d15.534464601321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941a75bd9d9ddf%3A0x4969e81ecd738478!2sBabo%20Puti%20Hill!5e1!3m2!1sen!2sph!4v1598144715115!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4094444, 119.9522222], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bawot_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bawot Hill</p> <p>Elev: 55 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.260221527655!2d119.94346742854673!3d15.409464615060983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33943d4014845b25%3A0xfb39de974e6f5c3b!2sBawot%20Hill!5e1!3m2!1sen!2sph!4v1598144766136!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.72, 119.9222222], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maagoso_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maagoso Hill</p> <p>Elev: 53 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.414547386323!2d119.91346742859075!3d15.72002023074961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339409037c29db25%3A0xfba7acb12b847f5!2sMaagoso%20Hill!5e1!3m2!1sen!2sph!4v1598144846323!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4088889, 119.9413889], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bandera_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bandera Hill</p> <p>Elev: 35 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.30245913473!2d119.93263412854665!3d15.408909115121835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33943d12c302c057%3A0xe4eb4ab5b30dc3e0!2sBandera%20Hill!5e1!3m2!1sen!2sph!4v1598144917620!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9, 120.166667], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Looc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Looc</p> <p>Elev: 33 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.371343356048!2d120.15791192847718!3d14.900020270073183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396780391cbd75f%3A0x303cdee1dd59d743!2sMount%20Looc!5e1!3m2!1sen!2sph!4v1598144976340!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4002778, 119.9455556], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pandmuzwan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pandmuzwan Hill</p> <p>Elev: 29 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.957012842378!2d119.93680082854547!3d15.400298066064817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33943d1736103f69%3A0x247ef909e1e80e0!2sPandmuzwan%20Hill!5e1!3m2!1sen!2sph!4v1598145003904!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5, 119.966667], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mapait_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mapait Hill</p> <p>Elev: 17 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.354939730882!2d119.95791192855945!3d15.500020205116687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394175a6d01513d%3A0xbe7cfe1b705c7959!2sMapait%20Hill!5e1!3m2!1sen!2sph!4v1598145085587!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.933333, 120.066667], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Corrat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Corral</p> <p>Elev: 15 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.082937402034!2d120.06596742847951!3d14.917520318209732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d751b13e43a3%3A0xa7cc96609ee69d39!2sMount%20Corrat!5e1!3m2!1sen!2sph!4v1598145122928!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.86, 120.2666667], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Labao_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Labao Mountain</p> <p>Elev: 13 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.310712198354!2d120.25791192847183!3d14.860020274325445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339670c763b47a81%3A0xd22561b0a3ab8abb!2sMount%20Labao!5e1!3m2!1sen!2sph!4v1598145166045!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5833333, 119.9166667], { icon: blueIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lana_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lana Mountain</p> <p>Elev: 17 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.965520994452!2d119.90791192857124!3d15.583353495921388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339411c873968f55%3A0x1021978fd0b4b21d!2sLana%20Mountain!5e1!3m2!1sen!2sph!4v1598145215449!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Baktutan Peak</p> <p>Elev: 1400 m, Prom: 1258 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pantingan Peak</p> <p>Elev: 1394 m, Prom: 27 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bataan </p> <p>Elev: 1390 m, Prom: 119 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Garuchas Peak</p> <p>Elev: 1373 m, Prom: </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kilabot Peak</p> <p>Elev: 1355 m, Prom: 13 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Coybubu</p> <p>Elev: 1303 m, Prom: 265 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Natib</p> <p>Elev: 1233 m, Prom: 1073 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>El Saco Peak</p> <p>Elev: 1190 m, Prom: 104 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tarak Peak</p> <p>Elev: 112 m, Prom: 11 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mariveles Mountain</p> <p>Elev: 1081 m, Prom: 34 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bataan Peak</p> <p>Elev: 1063 m, Prom: 190 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santa Rosa</p> <p>Elev: 942 m, Prom: 116 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Silangan</p> <p>Elev: 939 m, Prom: 116 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Limay</p> <p>Elev: 931 m, Prom: 186 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Samat</p> <p>Elev: 562 m, Prom: 220 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santa Rita</p> <p>Elev: 451 m, Prom: 200 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Gorda Peak</p> <p>Elev: 204 m, Prom: 4 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Familiar Peak</p> <p>Elev: 198 m, Prom: 50 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pucot</p> <p>Elev: 190 m, Prom: 137 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maritan</p> <p>Elev: 186 m, Prom: 64 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mauakis</p> <p>Elev: 177 m, Prom: 73 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagtung</p> <p>Elev: 159 m, Prom: 10 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Orion Hill</p> <p>Elev: 0 m, Prom: 0 m </p></li></div> '
  );
L.marker([], { icon: magentaIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>San Miguel Rock</p> <p>Elev: 107 m, Prom: 83 m </p></li></div> '
  );
