var boholmap = L.map("boholmap").setView([9.8499911, 124.1435427], 10);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(boholmap);
L.marker([9.7289248, 124.3372358], { icon: bIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matunog (Mayana Peak)</p> <p>Elev: 866 m, Prom: 866 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15820.900869624918!2d124.33619859026422!3d9.734819170387006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa0dbc48c0223f%3A0xb2bc17f7ec411d6c!2sMayana%20Peak%2F%20Mt.%20Matunog!5e1!3m2!1sen!2sph!4v1598882837571!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.756667, 124.395833], { icon: bIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sagungan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sagungan Mountain</p> <p>Elev: 658 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16158.51705255766!2d124.3870785279592!3d9.756687535706558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa0c41bc0dc589%3A0x7a0d5a384b7be93b!2sSagungan%20Mountain!5e1!3m2!1sen!2sph!4v1598882975201!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.641667, 124.087222], { icon: bIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tayong_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tayong Peak</p> <p>Elev: 511 m, Prom: 149 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16164.327460722283!2d124.06374522795113!3d9.636131994638442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa438fa78a3d71%3A0x4142696a41ba6e93!2sTayong%20Peak!5e1!3m2!1sen!2sph!4v1598882999937!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.766667, 124.266667], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amicay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amicay</p> <p>Elev: 479 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16158.031869760714!2d124.2579119279599!3d9.766687534961555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa13bd197de3cd%3A0x9d3e26ffe6fadf5b!2sMount%20Amicay!5e1!3m2!1sen!2sph!4v1598883023915!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.9524014, 124.4843068], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Labawan Peak</p> <p>Elev: 444 m, Prom: 411 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16581.373092634367!2d124.47317942298989!3d9.950004069977139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa017eee9437bb%3A0xc640062a7415218b!2sLabawan%20Mt.!5e1!3m2!1sen!2sph!4v1598883112470!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.866667, 123.916667], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Candungao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Candungao</p> <p>Elev: 435 m, Prom: 176 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16152.934993315728!2d123.91402302796708!3d9.871131927142665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa310762da1179%3A0x753b2fac0c120075!2sMount%20Candungao!5e1!3m2!1sen!2sph!4v1598883224451!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.8999997, 123.9666661], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tanauan_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tan-awan</p> <p>Elev: 435 m, Prom: 215 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16151.379054164914!2d123.9554119279693!3d9.902798674758456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa3002d3f87a49%3A0x34d0c6dc7a46c235!2sMount%20Tanauan!5e1!3m2!1sen!2sph!4v1598883335801!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.621667, 124.072778], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binalao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binaloo</p> <p>Elev: 431 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16164.779629466882!2d124.03707852795051!3d9.6266875953343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa448a6a799a17%3A0xdec1485731c1fad2!2sMount%20Binalao!5e1!3m2!1sen!2sph!4v1598883392005!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.970278, 124.480278], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kabudlan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malibalibod Mountain</p> <p>Elev: 429 m, Prom: 158 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16149.488954530356!2d124.45985632797196!3d9.941131971863857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa00de6b4ada8b%3A0x809bd3b908454524!2sKabudlan%20Mountain!5e1!3m2!1sen!2sph!4v1598883420174!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.7558333, 123.8233333], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Guibanderahan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Guibanderahan Mountain</p> <p>Elev: 426 m, Prom: 219 m</p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16158.557465472111!2d123.81457852795917!3d9.755854135768624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4a9723f5890f%3A0x39171a71f24b7366!2sGuibanderahan%20Mountain!5e1!3m2!1sen!2sph!4v1598883443807!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.7982496, 124.1684616], { icon: abcIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Chocolate_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Chocolate Hills (1,260 - 1776 Hills)</p> <p>Elev: 30 - 120 m , Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64617.20786461932!2d124.10469292634703!3d9.82972867495851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa3da1a65d72f7%3A0xd89c856a3307dd67!2sChocolate%20Hills!5e1!3m2!1sen!2sph!4v1598883520113!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.95, 124.483333], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cogton" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cogton</p> <p>Elev: 410 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16149.049637126649!2d124.47457852797258!3d9.950020871191324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa00ed80e0c57b%3A0xe4668184a2d944f5!2sMount%20Cogton!5e1!3m2!1sen!2sph!4v1598883570534!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.686389, 124.338889], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sagungan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sagungan</p> <p>Elev: 387 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16161.912924874105!2d124.33013412795448!3d9.68640974092454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa729973d9db83%3A0x900e4b7ff53e2cea!2sMount%20Sagungan!5e1!3m2!1sen!2sph!4v1598883615912!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.786944, 124.555278], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pugitan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pugatin</p> <p>Elev: 377 m, Prom: 364 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16157.235641752924!2d124.562356327961!3d9.783076483739203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3300a6ec73ea74c1%3A0xcb2a8d75475cdf5f!2sMount%20Pugitan!5e1!3m2!1sen!2sph!4v1598883805080!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.869444, 124.416944], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Batuanan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Batuanan</p> <p>Elev: 371 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16153.234692973665!2d124.40846742796667!3d9.865020827602038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa05e2548aae51%3A0x13ac290192df6cf6!2sMount%20Batuanan!5e1!3m2!1sen!2sph!4v1598883829234!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.9, 124.183333], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pinoonan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pinoonan</p> <p>Elev: 370 m, Prom: 144 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16151.515738203967!2d124.1745785279691!3d9.90002087496785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa184773120f33%3A0x7ec3bbf180065863!2sMount%20Pinoonan!5e1!3m2!1sen!2sph!4v1598883855935!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.7981585, 124.1562191], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Camanayon_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Camanayon Mountain</p> <p>Elev: 351 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16156.43810150879!2d124.14707852796217!3d9.799465232515168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa15f8fe53ceb9%3A0xa2c051b81f14727e!2sCamanayon%20Mountain!5e1!3m2!1sen!2sph!4v1598883897306!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.783333, 123.816667], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calmanoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canmanoc</p> <p>Elev: 314 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16157.843051668571!2d123.81652302796016!3d9.77057648467166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa3563c38499d5%3A0xfd130a84cd58af6!2sMount%20Calmanoc!5e1!3m2!1sen!2sph!4v1598883986452!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.606389, 124.253056], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gorda" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gorda</p> <p>Elev: 306 m, Prom: 122 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16165.855092853159!2d124.24485632794902!3d9.604187546989815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa6f27fc818067%3A0xb907ab808c760cdf!2sMount%20Gorda!5e1!3m2!1sen!2sph!4v1598884024789!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.815833, 124.173056], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Aipes_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Aipes Hill</p> <p>Elev: 303 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16156.492213723539!2d124.15957852796207!3d9.798354132598202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa15e448571e41%3A0x78eac421bc882a85!2sAipes%20Hill!5e1!3m2!1sen!2sph!4v1598884048713!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.676212, 124.366684], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palingkod</p> <p>Elev: 292 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2020.3037665134134!2d124.3644404080689!3d9.675661742324547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa72fa8bb710a9%3A0x23c57ba4c34fd308!2sMount%20Palingkod!5e1!3m2!1sen!2sph!4v1598884075408!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.933333, 124.033333], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alimono" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alimono</p> <p>Elev: 290 m, Prom: 130 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16149.777043332157!2d124.02513412797157!3d9.935298672304938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa2458821b2449%3A0x39f996736fa49ff7!2sMount%20Alimono!5e1!3m2!1sen!2sph!4v1598884116316!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.666667, 123.983333], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Udahan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Udahan</p> <p>Elev: 277 m, Prom: 146 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16162.981654969013!2d123.98152302795299!3d9.664187592568009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa45e5bf4d1057%3A0xee1bedd1ce10a8ba!2sMount%20Udahan!5e1!3m2!1sen!2sph!4v1598884140980!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.9275276, 124.0732727], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Sagbayan Peak</p> <p>Elev: 276 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4037.5632976175057!2d124.07112181483258!3d9.925650077033252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa237a2670e1bb%3A0xf224c366adeeeeed!2sSagbayan%20Peak%20Park!5e1!3m2!1sen!2sph!4v1598884234831!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([9.653611, 124.013611], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Giumba" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guimba</p> <p>Elev: 269 m, Prom: 131 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16163.461791851572!2d124.00874522795233!3d9.654187593306554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa45cb6fd85c61%3A0xf23e7bf82f0518ca!2sMount%20Giumba!5e1!3m2!1sen!2sph!4v1598884268425!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.8525202, 124.2319179], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Fatima_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Fatima Hill</p> <p>Elev: 210 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16153.846154655965!2d124.22316312796579!3d9.852541028539443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa173776fd0d37%3A0xb659d437571232fe!2sFatima%20Hill!5e1!3m2!1sen!2sph!4v1598884460022!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.690833, 124.066389], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ilag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ilag</p> <p>Elev: 199 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16161.752406749174!2d124.07013412795469!3d9.68974304067776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa413b17cf6293%3A0x9fc50ec69a3498e!2sMount%20Ilag!5e1!3m2!1sen!2sph!4v1598884504785!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.6363889, 123.9141667], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Angungani_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Angungani Hill</p> <p>Elev: 156 m, Prom: 49 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16164.314153865635!2d123.90541192795115!3d9.636409794617968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4e5b8cfbf305%3A0xfbc9154a334a044b!2sAngungani%20Hill!5e1!3m2!1sen!2sph!4v1598884528995!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.6347222, 123.8813889], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Banate_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Banate Hill</p> <p>Elev: 151 m, Prom: 85 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16164.393986910925!2d123.87263412795103!3d9.634743044740825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4dd999cebfb9%3A0x216de52b61289e1!2sBanate%20Hill!5e1!3m2!1sen!2sph!4v1598884575956!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.0560406, 124.5466666], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Basiao_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Basiao Hill</p> <p>Elev: 132 m, Prom: 132 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16143.77528376702!2d124.53791192798013!3d10.056131913124528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330755ce0d4ee96b%3A0xffe6e3dc73c6c0f5!2sBasiao%20Hill!5e1!3m2!1sen!2sph!4v1598884625119!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.9127778, 124.4322222], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nagasnas_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nagasnas Hill</p> <p>Elev: 127 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16150.886683692912!2d124.42346742796998!3d9.91279862400424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa06bca215c04d%3A0x7cd86ffdbbf46671!2sNagasnas%20Hill!5e1!3m2!1sen!2sph!4v1598884645916!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.916667, 123.95], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ilihan_(bukid_sa_Pilipinas,_Central_Visayas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ilihan</p> <p>Elev: 124 m, Prom: 49 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16150.695071915801!2d123.9412452279703!3d9.916687523710769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa2fc2d7f4cf9b%3A0xfe7bcaabdf2f6061!2sMount%20Ilihan!5e1!3m2!1sen!2sph!4v1598884720023!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.133333, 124.25], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cantamulig_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cantamulig Hill</p> <p>Elev: 85 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16139.902067145478!2d124.24124522798571!3d10.133354107209371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9f17baed3e471%3A0xdecb03e63b49de4d!2sCantamulig%20Hill!5e1!3m2!1sen!2sph!4v1598884774429!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.683333, 123.866667], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Paminuitan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Paminuitan Hill</p> <p>Elev: 52 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16161.752406749176!2d123.85652302795471!3d9.689743040677756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa4bf4ecb78fdd%3A0xe8f1fd7a78b71740!2sPaminuitan%20Hill!5e1!3m2!1sen!2sph!4v1598884800510!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.133333, 124.15], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Corte" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Corte</p> <p>Elev: 49 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16139.902067145478!2d124.14124522798575!3d10.13335410720937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a98cca7b4157cd%3A0xc5f5ae550ee80446!2sMount%20Corte!5e1!3m2!1sen!2sph!4v1598884851582!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.0549394, 124.4183627], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Camambugan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Camambugan Hill</p> <p>Elev: 36 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16143.830798970497!2d124.40957852798005!3d10.055020813209373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9f932e846138f%3A0x8f1ea9c6e6b3f87c!2sCamambugan%20Hill!5e1!3m2!1sen!2sph!4v1598884874203!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.583333, 123.833333], { icon: aIcon })
  .addTo(boholmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Biking" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Biking</p> <p>Elev: 27 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16166.848670429694!2d123.82457852794764!3d9.58335414851986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa52fa5d627e17%3A0xcb78d736414e9010!2sMount%20Biking!5e1!3m2!1sen!2sph!4v1598884899698!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
