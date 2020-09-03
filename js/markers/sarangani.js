var saranganimap = L.map("saranganimap").setView([5.9267175, 124.994751], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(saranganimap);
L.marker([6.118611, 124.683333], { icon: eIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Busa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Busa</p> <p>Elev: 2012 m, Prom: 1642 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8086.69597501742!2d124.68139380554734!3d6.1094596487969905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7dd4d7d8c6a6d%3A0xdd6cc4dcecfbee8d!2sMount%20Busa!5e1!3m2!1sen!2sph!4v1599004140332!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.4379989, 125.1155705], { icon: dIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magolo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magolo</p> <p>Elev: 1488 m, Prom: 536 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8145.767397159809!2d125.09376517439885!3d6.460699192029918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f82eced010a383%3A0x42629836acf56913!2sMount%20Magolo!5e1!3m2!1sen!2sph!4v1599004173653!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.051667, 124.704722], { icon: cIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Balokon_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Balokon Mountain</p> <p>Elev: 1254 m, Prom: 69 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.289336192534!2d124.69596742779545!3d6.0516878680728405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7c4a108bf537d%3A0xfec51b7bc1536f7f!2sBalokon%20Mountain!5e1!3m2!1sen!2sph!4v1599004199011!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.050556, 124.73], { icon: cIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cabaay_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cabaay Mountain</p> <p>Elev: 1226 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.331233804858!2d124.7209674277954!3d6.050298918143532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7c48081a1773d%3A0x7164bfea127a91a3!2sCabaay%20Mountain!5e1!3m2!1sen!2sph!4v1599004236427!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.869444, 125.373056], { icon: cIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Molar_Peaks" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Molar Peaks</p> <p>Elev: 1157 m, Prom: 486 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16309.704225342983!2d125.36430082779192!3d5.869465577240928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f704a3ec8681af%3A0x5ec78cde5127c093!2sMolar%20Peaks!5e1!3m2!1sen!2sph!4v1599004260530!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.4747624, 125.4097995], { icon: cIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tangali" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tangali</p> <p>Elev: 1124 m, Prom: 613 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16291.010377418907!2d125.39930082780528!3d6.476965545847647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9da93c943b487%3A0x124ae022207a0391!2sMount%20Tangali!5e1!3m2!1sen!2sph!4v1599004286346!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.725833, 125.381111], { icon: cIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Saddle_Peak_(bukid_sa_Pilipinas,_Soccsksargen)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Saddle Peak</p> <p>Elev: 1102 m, Prom: 506 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16313.855513253358!2d125.37235632778946!3d5.725854484316198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f6fca8c11b20c5%3A0xce38fdd61ed583bc!2sSaddle%20Peak!5e1!3m2!1sen!2sph!4v1599004322330!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.023611, 124.755833], { icon: cIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tinungkop_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tinungkop Mountain</p> <p>Elev: 1056 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.133774164717!2d124.74707852779488!3d6.0236322694982665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7c43766647dff%3A0xe612aac1d49cea53!2sTinungkop%20Mountain!5e1!3m2!1sen!2sph!4v1599004364916!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.95, 124.866667], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Green_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Green Peak</p> <p>Elev: 915 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.330789018706!2d124.85791192779342!3d5.95002117321424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7b7deb8e94cb5%3A0x6ec9247198fcbdb6!2sGreen%20Peak!5e1!3m2!1sen!2sph!4v1599004387992!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.491389, 125.379444], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tagmungun_Hump" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tagmungun Hump</p> <p>Elev: 915 m, Prom: 262 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16290.543596872347!2d125.37068962780566!3d6.491409995072429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9d011df14e231%3A0x6c3e106b283aa7f4!2sTagmungun%20Hump!5e1!3m2!1sen!2sph!4v1599004420963!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.3086411, 125.1711552], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bald_Dome_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bald Dome</p> <p>Elev: 899 m, Prom: 149 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16296.321397784586!2d125.16068962780116!3d6.310298954695826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f78178c9ee369b%3A0xc7144fa972a5a2e5!2sBald%20Dome%20Peak!5e1!3m2!1sen!2sph!4v1599004512532!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.1538693, 125.3877945], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bee_Hive_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bee Hive Peak</p> <p>Elev: 851 m, Prom: 242 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16301.145421327412!2d125.3776341277976!3d6.155021162779219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f771fcb62088eb%3A0x9a27e84d8bfd931a!2sBee%20Hive%20Peak!5e1!3m2!1sen!2sph!4v1599004556082!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.467778, 125.441111], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lumobat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lumobat</p> <p>Elev: 748 m, Prom: 177 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16291.306064241355!2d125.43235632780505!3d6.467798946338918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9db04183f6d2b%3A0xef08720152734fe8!2sMount%20Lumobat!5e1!3m2!1sen!2sph!4v1599004594734!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.521944, 125.368333], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Malabakid_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malabakid Hill</p> <p>Elev: 722 m, Prom: 154 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16289.552765443792!2d125.35957852780649!3d6.521965543428135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9cfc003c4a615%3A0xed9be12e75cdc5b8!2sMalabakid%20Hill!5e1!3m2!1sen!2sph!4v1599004618487!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.495833, 125.339722], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dangulog_(bukid_sa_Pilipinas,_lat_6,50,_long_125,34)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dangulog</p> <p>Elev: 643 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16290.399765283904!2d125.33096742780579!3d6.495854394833635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9d1ce5d927bab%3A0x296e89a4c53910b8!2sMount%20Dangulog!5e1!3m2!1sen!2sph!4v1599004644997!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.821944, 125.358056], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tachu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tachu</p> <p>Elev: 641 m, Prom: 158 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.08862392916!2d125.34930082779108!3d5.821965579595758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f702e549a7726f%3A0x3b910d385efefe5b!2sMount%20Tachu!5e1!3m2!1sen!2sph!4v1599004687787!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.486667, 125.364444], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kabuludan_Hump" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kabuludan Hump</p> <p>Elev: 627 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16290.696311342026!2d125.35568962780556!3d6.486687795326012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9d040a02a5395%3A0x9f86687ef8092a77!2sKabuludan%20Hump!5e1!3m2!1sen!2sph!4v1599004712267!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.474444, 125.356111], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Balitan_Hump" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Balitan Hump</p> <p>Elev: 622 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16290.696311342026!2d125.35568962780556!3d6.486687795326012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9d050c9b1104b%3A0xcb93acdbfe323d44!2sBalitan%20Hump!5e1!3m2!1sen!2sph!4v1599004737782!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.614444, 125.330833], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taltak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taltak</p> <p>Elev: 602 m, Prom: 362 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16316.82609954905!2d125.31824592778783!3d5.6208448894058565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f6f11f8d5e0285%3A0x1d1c80971c39ccf2!2sMount%20Taltak!5e1!3m2!1sen!2sph!4v1599004780846!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.861944, 125.320278], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mudan_(bukid_sa_Pilipinas,_lat_5,86,_long_125,32)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mudan</p> <p>Elev: 586 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64795.344242202875!2d125.28174478864898!3d5.866031223422976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f703f3c68e16e9%3A0xbda5f3cd53247966!2sMount%20Mudan!5e1!3m2!1sen!2sph!4v1599004932728!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.875, 125.283611], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matalangad" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matalangad</p> <p>Elev: 577 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16309.541573860575!2d125.27485632779202!3d5.875021176964559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f706b68043e3db%3A0xfb094d110d9e8e74!2sMount%20Matalangad!5e1!3m2!1sen!2sph!4v1599005029096!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.5, 125.361944], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Takalon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Takalon Hill</p> <p>Elev: 568 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16290.264831718474!2d125.35318962780588!3d6.5000210946096395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9d024190970a5%3A0xebac201de304e091!2sTakalon%20Hill!5e1!3m2!1sen!2sph!4v1599005059000!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.516111, 125.365556], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kibawalan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kibawalan Hill</p> <p>Elev: 567 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16290.264831718474!2d125.35318962780588!3d6.5000210946096395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9cfc3ac145c59%3A0x42bae49a15424345!2sKibawalan%20Hill!5e1!3m2!1sen!2sph!4v1599005085147!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.35, 125.2], { icon: bIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tandanauan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tandanauan</p> <p>Elev: 510 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16295.06812058004!2d125.19124522780213!3d6.350021102603163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7803a4b49a4e3%3A0xeeb6d4a61b6fbc3d!2sMount%20Tandanauan!5e1!3m2!1sen!2sph!4v1599005120031!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.627222, 125.325556], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balanayo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balanayo</p> <p>Elev: 476 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16316.646662193058!2d125.31680082778792!3d5.627243389097761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f6f0e7762a01ef%3A0xc6acaf8d120d3f5c!2sMount%20Balanayo!5e1!3m2!1sen!2sph!4v1599005142550!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.936944, 125.303611], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mulang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mulang</p> <p>Elev: 420 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.717640900024!2d125.29485632779318!3d5.936965523869671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f705fe3a50fbd9%3A0xe6bf71b598928694!2sMount%20Mulang!5e1!3m2!1sen!2sph!4v1599005167896!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.444444, 125.335833], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Reden" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Reden</p> <p>Elev: 413 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16292.056847550864!2d125.32707852780446!3d6.4444655475870025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9d12555a02da9%3A0xdb296fe8589ec7ac!2sMount%20Reden!5e1!3m2!1sen!2sph!4v1599005194374!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8, 125.366389], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kulpidong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kulpidong</p> <p>Elev: 406 m, Prom: 56 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.724412751324!2d125.35763412779069!3d5.800021180678774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f70298facfb495%3A0x1e917f2e3a1719ec!2sMount%20Kulpidong!5e1!3m2!1sen!2sph!4v1599005219147!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.616667, 125.333333], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dome_Peak_(bukid_sa_Pilipinas,_Soccsksargen)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dome Peak</p> <p>Elev: 373 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16316.942567993834!2d125.32457852778778!3d5.616687889605882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f6f11c8c8b3ba3%3A0xfcecfdf17dfd6d04!2sDome%20Peak!5e1!3m2!1sen!2sph!4v1599005252134!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.941667, 125.313333], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tudoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tudoc</p> <p>Elev: 355 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.57781220223!2d125.30457852779328!3d5.941687823632724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f70f577bf36881%3A0x78f5936016b6b201!2sMount%20Tudoc!5e1!3m2!1sen!2sph!4v1599005292499!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.675, 125.366944], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Abnataclayong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Abnataclayong</p> <p>Elev: 355 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16315.300365318699!2d125.35818962778868!3d5.675021186788858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f6fae98a6aa07b%3A0x1896d754c5a7b4e6!2sMount%20Abnataclayong!5e1!3m2!1sen!2sph!4v1599005332459!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.878889, 125.265], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Barungis_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Barungis Hill</p> <p>Elev: 339 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16309.427627171079!2d125.25624522779209!3d5.878910076770985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f706d0da86d96d%3A0x670223b7695d57d7!2sBarungis%20Hill!5e1!3m2!1sen!2sph!4v1599005357933!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8875, 125.246111], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kapatan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kapatan Hill</p> <p>Elev: 337 m, Prom: 118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16309.175050309608!2d125.23735632779227!3d5.887521176342009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7073c94a1e7bd%3A0x74c71f4c04fbcb15!2sKapatan%20Hill!5e1!3m2!1sen!2sph!4v1599005383860!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.817778, 125.294167], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mudan_(bukid_sa_Pilipinas,_lat_5,82,_long_125,29)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mudan</p> <p>Elev: 327 m, Prom: 64 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.209525662634!2d125.28541192779102!3d5.81779897980163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7018d21f0cb2f%3A0x9f9cbb2c567bd863!2sMount%20Mudan!5e1!3m2!1sen!2sph!4v1599004852627!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.870833, 125.240556], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bawi_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bawi Hill</p> <p>Elev: 317 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16309.175050309608!2d125.23735632779227!3d5.887521176342009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f700cba4b28863%3A0xb76c612c0f935344!2sBawi%20Hill!5e1!3m2!1sen!2sph!4v1599005417009!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.328333, 125.264167], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tibo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tibo Hill</p> <p>Elev: 245 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16295.752698000659!2d125.2554119278016!3d6.3283544537458685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f77efc0ace45f7%3A0x582e36f6edfd0840!2sTibo%20Hill!5e1!3m2!1sen!2sph!4v1599005440081!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.905556, 125.248889], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kabog_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kabog Hill</p> <p>Elev: 228 m, Prom: 71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.644255665935!2d125.24013412779259!3d5.905576775441005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7070639ed6a8f%3A0x7a42437852e5ace2!2sKabog%20Hill!5e1!3m2!1sen!2sph!4v1599005479597!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9905419, 124.6086487], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Buko_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Buko Mountain</p> <p>Elev: 228 m, Prom: 218 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.115393956585!2d124.60096742779425!3d5.9908544211572226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7da083e653bcb%3A0x10d931dc5e831c39!2sBuko%20Mountain!5e1!3m2!1sen!2sph!4v1599005526576!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.335556, 125.270278], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kidama_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kidama Hill</p> <p>Elev: 225 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16295.524763392366!2d125.26152302780177!3d6.335576703365299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f77e582ce3e6bd%3A0xf4cd29e5502153b8!2sKidama%20Hill!5e1!3m2!1sen!2sph!4v1599005552392!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.884167, 125.228611], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ta%C3%B1go_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tañgo Hill</p> <p>Elev: 209 m, Prom: 90 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16309.272864846926!2d125.2198563277922!3d5.884187876508123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f707459e1b14f9%3A0x84265d4c2c19b960!2sTango%20Hill!5e1!3m2!1sen!2sph!4v1599005577284!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.819722, 125.183611], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sumbang_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sumbang Hill</p> <p>Elev: 178 m, Prom: 109 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.153115974977!2d125.17485632779103!3d5.819743379705569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7aac49a25f869%3A0x1b20fdb7ae6d657!2sSumbang%20Hill!5e1!3m2!1sen!2sph!4v1599005607266!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.352778, 125.285], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tinagakar_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tinagakar Hill</p> <p>Elev: 168 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16294.980183365053!2d125.27624522780219!3d6.3527989524564425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f77e1467a65373%3A0x9b1832190578aac3!2sTinagakar%20Hill!5e1!3m2!1sen!2sph!4v1599005633181!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.362222, 125.281111], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nakab_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nakab Hill</p> <p>Elev: 167 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16294.980183365053!2d125.27624522780219!3d6.3527989524564425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f77e189b6192d7%3A0xc80ee4dfd5d60e66!2sNakab%20Hill!5e1!3m2!1sen!2sph!4v1599005654931!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.216667, 125.265833], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/West_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>West Hill</p> <p>Elev: 154 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16299.243949229167!2d125.257078527799!3d6.216687859587498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f77770eb1df575%3A0x1d4bb4a24e0cae20!2sWest%20Hill!5e1!3m2!1sen!2sph!4v1599005692754!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.811944, 125.209167], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Glan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Glan Hill</p> <p>Elev: 129 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.378647810627!2d125.2004119277909!3d5.811965580089669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7aaaf2b9e8d9f%3A0x6e33553639b6e929!2sGlan%20Hill!5e1!3m2!1sen!2sph!4v1599005725169!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.073333, 125.298889], { icon: aIcon })
  .addTo(saranganimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lago_Hill_(bungtod_sa_Pilipinas,_Soccsksargen)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lago Hill</p> <p>Elev: 88 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.63452524916!2d125.2901341277959!3d6.073354416968567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f70b57616973a7%3A0xbb7ba8825c5ebf7a!2sLago%20Hill!5e1!3m2!1sen!2sph!4v1599005756297!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
