ilocosnortemap = L.map("ilocosnortemap").setView([18.228, 120.6464], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(ilocosnortemap);

L.marker([18.0126395, 120.9381465], { icon: eIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sicapoo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sicapoo (Lvl 3, Lvl 7)</p> <p>Elev:	2361 m, Prom:	1585 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15592.017282873458!2d120.93041182895327!3d18.01335320930838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f20ff17ee0a47%3A0x2c972d543d55bcc2!2sMount%20Sicapoo!5e1!3m2!1sen!2sph!4v1597934208777!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.9430372, 120.9216124], { icon: eIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Burnay" target= "blank"><img  title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Burnay</p> <p>Elev:	2100 m, Prom:	314 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15598.028597794537!2d120.91541192894157!3d17.94529766781878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f1fbea8ccd911%3A0x7ba1645f91b7c0ef!2sMount%20Burnay!5e1!3m2!1sen!2sph!4v1597934178049!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2599994, 120.9213473], { icon: dIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagdubaduban" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagdubaduban</p> <p>Elev:	1871 m, Prom:	536 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15570.045031862053!2d120.91263412899612!3d18.26001987823067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f2a5d009fc2a5%3A0x98b5f09a174e5e69!2sMount%20Nagdubaduban!5e1!3m2!1sen!2sph!4v1597934131784!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2590391, 120.8999089], { icon: dIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aganmala" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aganmala</p> <p>Elev:	1778 m, Prom:	102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15569.970319424297!2d120.89013412899631!3d18.260853128125067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f2a7779adbbd1%3A0xc9ec6a3a072c4956!2sMount%20Aganmala!5e1!3m2!1sen!2sph!4v1597934107551!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0241882, 120.9202336], { icon: dIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balbalite</p> <p>Elev:	1745 m, Prom:	1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16392.666793823395!2d120.91139022763262!3d18.024193267336127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAxJzI3LjEiTiAxMjDCsDU1JzEyLjgiRQ!5e1!3m2!1sen!2sph!4v1597934087196!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2786762, 120.9340958], { icon: dIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Mukmukoroya" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mukmukcroya</p> <p>Elev:	1731 m, Prom:	173 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15568.375503604757!2d120.92541192899942!3d18.27863097587109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f2ae4f6a560f7%3A0xa9aaaccfb7485889!2sMount%20Mukmukoroya!5e1!3m2!1sen!2sph!4v1597934039806!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0140127, 120.9004925], { icon: dIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bubuos</p> <p>Elev:	1539 m, Prom:	111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16916.140228884466!2d120.89153921925535!3d18.014017770706968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAwJzUwLjUiTiAxMjDCsDU0JzAxLjgiRQ!5e1!3m2!1sen!2sph!4v1597934017831!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.034948, 120.8592096], { icon: dIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Timarid</p> <p>Elev:	1516 m, Prom:	418 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16213.106855516786!2d120.85034977663018!3d18.034953064383824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAyJzA1LjgiTiAxMjDCsDUxJzMzLjIiRQ!5e1!3m2!1sen!2sph!4v1597933958168!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1431799, 120.9488565], { icon: cIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Casiama" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Casiama</p> <p>Elev:	1477 m, Prom:	44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15580.498056015052!2d120.94013412897571!3d18.14307544300986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f288438a17879%3A0x7a9e4b8e971b429f!2sMount%20Casiama!5e1!3m2!1sen!2sph!4v1597933907186!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3531258, 120.9125855], { icon: cIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Linao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Linao</p> <p>Elev:	1465 m, Prom:	188 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15561.505751417943!2d120.90207852901291!3d18.355019866164692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d59d85910477%3A0x952b4e208963f8dd!2sMount%20Linao!5e1!3m2!1sen!2sph!4v1597933888798!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.887222, 120.730278], { icon: cIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cayudungan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cayudungan</p> <p>Elev:	1435 m, Prom:	444 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.7851363123755!2d120.72808931489215!3d17.887227092904418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ee599936ffd05%3A0xf7570d7603c8daef!2sMount%20Cayudungan!5e1!3m2!1sen!2sph!4v1597933870196!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0394058, 120.846336], { icon: cIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Simagaysay</p> <p>Elev:	1339 m, Prom:	71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16670.090803579325!2d120.83745576838278!3d18.039410874599742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAyJzIxLjkiTiAxMjDCsDUwJzQ2LjgiRQ!5e1!3m2!1sen!2sph!4v1597933738025!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.412344, 120.873996], { icon: cIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pao_(bukid_sa_Pilipinas,_Rehiyon_sa_Ilocos)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pao</p> <p>Elev:	1315 m, Prom:	401 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.090482284755!2d120.86485632902352!3d18.41501980851638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338929ed457ba94d%3A0xc365344ff49c5c66!2sMount%20Pao!5e1!3m2!1sen!2sph!4v1597933669132!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0249499, 120.8780621], { icon: cIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Saulay</p> <p>Elev:	1286 m, Prom:	118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16375.90416641409!2d120.86925281113697!3d18.024954976500688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAxJzI5LjgiTiAxMjDCsDUyJzQxLjAiRQ!5e1!3m2!1sen!2sph!4v1597933639905!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.5139062, 120.8868109], { icon: cIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pico de Loro</p> <p>Elev:	1265 m, Prom:	890 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.128083179054!2d120.87818962904113!3d18.513908695864007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3389278e5e162817%3A0x2c796159db5d4a50!2sPico%20de%20Loro!5e1!3m2!1sen!2sph!4v1597933572405!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4015217, 120.8734446], { icon: cIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Burburan</p> <p>Elev:	1235 m, Prom:	42 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.019311581602!2d120.8637452290217!3d18.404742009828038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3389298ab15f8351%3A0xfaaa8c85b0ba46a7!2sMount%20Burburan!5e1!3m2!1sen!2sph!4v1597933493073!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.8067002, 120.5886002], { icon: cIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagapu" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagapu</p> <p>Elev:	1225 m, Prom:	365 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15610.203987027928!2d120.57985632891787!3d17.80668658506653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ef3ba7cc74dbd%3A0xbc665e2dc5a5629b!2sMount%20Nagapu!5e1!3m2!1sen!2sph!4v1597933472378!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.8435993, 120.6074002], { icon: cIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naltoot" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naltoot</p> <p>Elev:	1039 m, Prom:	92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15606.967774098684!2d120.59874522892417!3d17.843630980480675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ef21089a2c075%3A0xbec63ab3961b4e81!2sMount%20Naltoot!5e1!3m2!1sen!2sph!4v1597933450541!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.486417, 120.8066502], { icon: bIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Quebrada" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Quebrada</p> <p>Elev:	996 m, Prom:	477 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.011269021477!2d120.81568962903937!3d18.5041864971105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33892618e6afaae9%3A0xec379d3db262c199!2sMount%20Quebrada!5e1!3m2!1sen!2sph!4v1597933434114!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0459518, 120.885844], { icon: bIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balbalitok</p> <p>Elev:	781 m, Prom:	25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928.530136771058!2d120.87696032321729!3d18.04595686000068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDAyJzQ1LjQiTiAxMjDCsDUzJzA5LjAiRQ!5e1!3m2!1sen!2sph!4v1597933389018!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.275, 120.766111], { icon: bIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masadsadoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masadsadac</p> <p>Elev:	755 m, Prom:	220 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15568.624797849543!2d120.76207852899893!3d18.27585312622342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ed3b8360af781%3A0x623860dda4d1630d!2sMount%20Masadsadoc!5e1!3m2!1sen!2sph!4v1597933334877!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.548288, 120.8750566], { icon: bIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Patapat_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Patapat Mountains</p> <p>Elev:	754 m, Prom:	7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15543.995472054605!2d120.86624522904727!3d18.548353141443332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3389276b10289b19%3A0xebbc347059d59402!2sPatapat%20Mountains!5e1!3m2!1sen!2sph!4v1597933279766!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4247029, 120.73531], { icon: bIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Mangrupid" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangrupid</p> <p>Elev:	551 m, Prom:	145 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.211403183015!2d120.72652302902524!3d18.424742007275043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33892dde26b9cf1d%3A0x799a7e2ad175217e!2sMount%20Mangrupid!5e1!3m2!1sen!2sph!4v1597933231830!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.498302, 120.7949058], { icon: aIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Nagbulean" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagbulean</p> <p>Elev:	434 m, Prom:	92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15548.540968370347!2d120.78624522903834!3d18.498353147858126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33892f572164c7d9%3A0x2bf9ad5588650b0c!2sMount%20Nagbulean!5e1!3m2!1sen!2sph!4v1597933214258!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.281301, 120.6818972], { icon: aIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagsabaran" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagsabaran</p> <p>Elev:	407 m, Prom:	187 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15568.12617725367!2d120.67318962899996!3d18.28140877551876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ecdc460479a01%3A0xa984eb8a0a371fc4!2sMount%20Nagsabaran!5e1!3m2!1sen!2sph!4v1597933187397!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3591745, 120.6601013], { icon: aIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santa_Catalina" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santa Catalina</p> <p>Elev:	285 m, Prom:	19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15561.130243570955!2d120.65152302901365!3d18.359186515634256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3389332b7e220439%3A0x6a5db004de2772c2!2sMount%20Santa%20Catalina!5e1!3m2!1sen!2sph!4v1597933157166!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.595, 120.820278], { icon: aIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dialao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dialao</p> <p>Elev:	206 m, Prom:	117 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15713.937753136992!2d120.81146761604779!3d18.595005038201805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzQyLjAiTiAxMjDCsDQ5JzEzLjAiRQ!5e1!3m2!1sen!2sph!4v1597933128478!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4, 120.766667], { icon: aIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.m.wikipedia.org/wiki/Mount_Carongranga_Knob" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Carongranga Knob</p> <p>Elev:	162 m, Prom:	8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.445900222481!2d120.75791192902086!3d18.40001981043047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33892c484b26a4d9%3A0x300a11a37df2dc7b!2sMount%20Carongranga%20Knob!5e1!3m2!1sen!2sph!4v1597933072017!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2085846, 120.542807], { icon: aIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cauit" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cauit</p> <p>Elev: 162 m, Prom:	8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.671240536614!2d120.5337452289871!3d18.208353134770263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ec809cd80a76b%3A0xe68e28901fdc5faf!2sMount%20Cauit!5e1!3m2!1sen!2sph!4v1597933032538!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.9, 120.433333], { icon: aIcon })
  .addTo(ilocosnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palalao_(bukid_sa_Pilipinas,_lat_17,90,_long_120,43)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palalao</p> <p>Elev: 1226 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15601.762464747866!2d120.42458174590558!3d17.90000508053549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDU0JzAwLjAiTiAxMjDCsDI2JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1597933003684!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
