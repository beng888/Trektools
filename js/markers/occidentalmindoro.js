var occidentalmindoromap = L.map("occidentalmindoromap").setView(
  [13.1024111, 120.7651284],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(occidentalmindoromap);

L.marker([12.805556, 121.143333], { icon: eIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baco" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baco</p> <p>Elev: 2309 m, Prom: 1509 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15960.285681029882!2d121.30791192827252!3d13.233353838931512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb65be912d39dd%3A0x79cfc7b7fddf0fed!2sMount%20Baco!5e1!3m2!1sen!2sph!4v1598372014805!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.7451623, 121.2097394], { icon: eIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Wood_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Wood</p> <p>Elev: 2005 m, Prom: 277 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15960.285681029882!2d121.30791192827252!3d13.233353838931512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb68f11da12c49%3A0xcb9e6285a0c6ed75!2sMount%20Wood!5e1!3m2!1sen!2sph!4v1598372046029!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.85, 121.078611], { icon: dIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinclair_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sinclair</p> <p>Elev: 1807 m, Prom: 392 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15959.806281049772!2d121.3079119!3d13.2333538!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb649570120015%3A0xb91c0837e37964e4!2sMount%20Sinclair!5e1!3m2!1sen!2sph!4v1598372092236!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.977222, 121.086389], { icon: dIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patrick_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patrick</p> <p>Elev: 1618 m, Prom: 203 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15976.885303627461!2d121.0773563282442!3d12.977520563335741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc9d36b36ea273%3A0xddfa20274ef2f154!2sMount%20Patrick!5e1!3m2!1sen!2sph!4v1598372128270!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.9186572, 121.0722312], { icon: dIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Indie" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Indie</p> <p>Elev: 1668 m, Prom: 263 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15980.643424501206!2d121.06207852823786!3d12.918909418869701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb7d2ed63a4931%3A0x705a06e25cb0e4bf!2sMount%20Indie!5e1!3m2!1sen!2sph!4v1598372165762!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.481534, 120.4030832], { icon: dIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calavite" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calavite</p> <p>Elev: 1511 m, Prom: 1459 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.296118610986!2d120.38200372829832!3d13.460268716947256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc3b8214a1c951%3A0x3627bca7d46adc6b!2sMount%20Calavite!5e1!3m2!1sen!2sph!4v1598372201186!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.7886898, 120.989452], { icon: cIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tallulah" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tallulah</p> <p>Elev: 1488 m, Prom: 584 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15988.760905931604!2d120.99041192822415!3d12.79140943083452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb70a55f76965b%3A0x42c9c956538a32e4!2sMount%20Tallulah!5e1!3m2!1sen!2sph!4v1598372228887!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3847926, 120.7946218], { icon: cIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Babuy_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Babuy Peak</p> <p>Elev: 1450 m, Prom: 388 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.405003681219!2d120.79124522828948!3d13.383353774434658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc5c1e9a282445%3A0x852bb8f9590af64a!2sBabuy%20Peak!5e1!3m2!1sen!2sph!4v1598372261983!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.75, 121.2], { icon: cIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Roosevelt_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Roosevelt</p> <p>Elev: 1392 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15991.378972602888!2d121.19124522821974!3d12.750020534696873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb68ec0b84471f%3A0x271414fd1e81420d!2sMount%20Roosevelt!5e1!3m2!1sen!2sph!4v1598372294374!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3834844, 120.7692634], { icon: cIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Burburungan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Burburungan</p> <p>Elev: 1297 m, Prom: 170 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.281975577716!2d120.80291192829145!3d13.400298272788307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc5953a79d6073%3A0x7b5e4be5db6ea03c!2sMount%20Burburungan!5e1!3m2!1sen!2sph!4v1598372327019!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2544444, 120.8288889], { icon: cIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Micnic" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Micnic</p> <p>Elev: 1239 m, Prom: 231 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.901683592614!2d120.82013412827486!3d13.254464886899626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc6115a7784f87%3A0xdce52dc2cf4a7bad!2sMount%20Micnic!5e1!3m2!1sen!2sph!4v1598372359086!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2786059, 120.7655708], { icon: cIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tandrac_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tandrac Peak</p> <p>Elev: 1111 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.971728806193!2d120.69707852827649!3d13.26863158553457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc6898ae963e8d%3A0x7aff4c6dc85d6788!2sTandrac%20Peak!5e1!3m2!1sen!2sph!4v1598372413731!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.994444, 121.021111], { icon: cIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Fechel" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Fechel</p> <p>Elev: 1103 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15976.06378010495!2d121.0079119282456!3d12.990298312126468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc8245dc01df37%3A0xfe52832ddcf20601!2sMount%20Fechel!5e1!3m2!1sen!2sph!4v1598372440831!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4545261, 120.673642], { icon: cIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Abra_de_Ilog" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Abra de Ilog</p> <p>Elev: 1077 m, Prom: 538 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.867551137213!2d120.66263412829733!3d13.451687167784451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc44f95a29b949%3A0x50846a97b8b4fcf1!2sMount%20Abra%20de%20Ilog!5e1!3m2!1sen!2sph!4v1598372481786!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.684167, 120.993889], { icon: bIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tusk_Peak_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tusk Peak</p> <p>Elev: 885 m, Prom: 225 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15995.787850733064!2d120.98513412821237!3d12.680020541204987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb73821979a2b1%3A0x617d60d388b2a031!2sTusk%20Peak!5e1!3m2!1sen!2sph!4v1598372525711!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.016667, 121.033333], { icon: bIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Fechet" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Fechet</p> <p>Elev: 796 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15974.364636116152!2d121.0245785282485!3d13.016687209625847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc83a09e5f6793%3A0x164aaf78b32707b7!2sMount%20Fechet!5e1!3m2!1sen!2sph!4v1598372616873!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3954548, 120.7503755], { icon: bIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Abongabong_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Abongabong</p> <p>Elev: 794 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.300398534502!2d120.74124522829139!3d13.400020472815308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc5c84659f3cb9%3A0x3009b123287a2857!2sMount%20Abongabong!5e1!3m2!1sen!2sph!4v1598372643278!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.195833, 120.838056], { icon: bIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pamucuban" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pamucuban</p> <p>Elev: 793 m, Prom: 146 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15963.282963181175!2d120.84957852826739!3d13.187520493333366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc62563487e86b%3A0x4375e0e093d8a672!2sMount%20Pamucuban!5e1!3m2!1sen!2sph!4v1598372676052!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.7987909, 120.2977176], { icon: bIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Benagongon_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Benagongon</p> <p>Elev: 749 m, Prom: 749 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15922.536947091978!2d120.28902302833791!3d13.797798233658456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdd1801f4d37e9%3A0x14d78cf86a9146d7!2sBenagongon%20Mountain!5e1!3m2!1sen!2sph!4v1598372712969!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4575302, 120.5182488], { icon: bIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabignayan_(bukid_sa_Pilipinas,_lat_13,45,_long_120,50)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabignayan</p> <p>Elev: 616 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.97849270351!2d120.4912452282971!3d13.45002046794699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc38c61b795bb5%3A0x3aa3053ca0fe2c06!2sMount%20Cabignayan!5e1!3m2!1sen!2sph!4v1598372782968!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.7602778, 120.1783333], { icon: bIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ambonong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ambonong</p> <p>Elev: 616 m, Prom: 612 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.092822584596!2d120.16957852833343!3d13.760298237391572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdd56d901fae29%3A0xce3be0ad39bd5878!2sMount%20Ambonong!5e1!3m2!1sen!2sph!4v1598372807312!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8138889, 120.2994444], { icon: bIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kayparet_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kayparet Mountain</p> <p>Elev: 531 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15921.436773268346!2d120.29068962833979!3d13.813909332051953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdd19e4fae1769%3A0x2bc3615d3a76655c!2sKayparet%20Mountain!5e1!3m2!1sen!2sph!4v1598372876303!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.416667, 121.166667], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Hagdanan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Hagdanan Peak</p> <p>Elev: 497 m, Prom: 160 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16012.159718671135!2d121.15791192818511!3d12.416687315415588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb1a2b9639b153%3A0xbcf1068d54ac3056!2sHagdanan%20Peak!5e1!3m2!1sen!2sph!4v1598372950558!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.7777778, 120.1566667], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ambulong_(bukid_sa_Pilipinas,_lat_13,78,_long_120,16)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ambulong</p> <p>Elev: 465 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.900929556852!2d120.1479119283355!3d13.777798235650538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33be7f7e5c985a85%3A0xfe50c37b38f852be!2sMount%20Ambulong!5e1!3m2!1sen!2sph!4v1598373155580!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.603889, 121.067778], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Canoling" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canoling</p> <p>Elev: 426 m, Prom: 305 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16000.675943908342!2d121.05846742820421!3d12.601964998426222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb0d6f6606f3c9%3A0x81d077ba490952ee!2sMount%20Canoling!5e1!3m2!1sen!2sph!4v1598373330141!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.5847571, 121.1064057], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Hileman_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Hileman Hill</p> <p>Elev: 422 m, Prom: 292 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16001.76777916106!2d121.09763412820236!3d12.58446495004004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb12f595a218c9%3A0xe6969eaf78b604f2!2sHileman%20Hill!5e1!3m2!1sen!2sph!4v1598373360816!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.771389, 120.203056], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gonting" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gonting</p> <p>Elev: 416 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.336238039195!2d120.19430082833472!3d13.77140933628637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdd5ab11b9f1b7%3A0x5613ce91663335ff!2sMount%20Gonting!5e1!3m2!1sen!2sph!4v1598373387417!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.366667, 121.216667], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bogao_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bogao Peak</p> <p>Elev: 396 m, Prom: 217 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16015.230104960598!2d121.20791192818002!3d12.366687319963889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb192aabb3544b%3A0xf0ca9f4343873aa0!2sBogao%20Peak!5e1!3m2!1sen!2sph!4v1598373417582!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2557224, 120.5625668], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masombrero" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masombrero</p> <p>Elev: 329 m, Prom: 186 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.77409715944!2d120.55291192827511!3d13.25640938671233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc6c90086c207b%3A0xecd71b80118a6add!2sMount%20Masombrero!5e1!3m2!1sen!2sph!4v1598373478072!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.7213889, 120.2258333], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palim" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palim</p> <p>Elev: 305 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15927.736155402707!2d120.21707852832881!3d13.721409341253791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc2b35044d8c11%3A0xfe77bca05ac55fc8!2sMount%20Palim!5e1!3m2!1sen!2sph!4v1598373506424!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.633333, 121.083333], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Exline" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Exline</p> <p>Elev: 286 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15998.696454438092!2d121.07457852820752!3d12.63363164550117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb6d56e936a9d7%3A0x4a3b01ca701329e1!2sMount%20Exline!5e1!3m2!1sen!2sph!4v1598373549894!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2561972, 120.5152198], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igsoso" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igsoso</p> <p>Elev: 264 m, Prom: 188 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.241672294955!2d120.49763412827774!3d13.279742684463073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc14a222941821%3A0x877e84cd95d7543f!2sMount%20Igsoso!5e1!3m2!1sen!2sph!4v1598373576743!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.1666667, 120.7016667], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Balisong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Balisong Hill</p> <p>Elev: 235 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15964.641984735292!2d120.69291192826508!3d13.166687195329912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc6ffd5c6a60a7%3A0xd5e9381fc3cda8fe!2sBalisong%20Hill!5e1!3m2!1sen!2sph!4v1598373626151!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8091667, 120.3188889], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pontong_Maigsi_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pontong Maigsi Hill</p> <p>Elev: 231 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15921.759367135173!2d120.31013412833927!3d13.809187132522993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdd19360297c25%3A0xc960b06e402b559b!2sPontong%20Maigsi%20Hill!5e1!3m2!1sen!2sph!4v1598373684695!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.283333, 121.05], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ilin" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ilin</p> <p>Elev: 229 m, Prom: 229 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16020.320318525695!2d121.04124522817163!3d12.283353877509875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bafd1384aceb85%3A0xfca18b54baa93a32!2sMount%20Ilin!5e1!3m2!1sen!2sph!4v1598373736848!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2344444, 120.5525], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tayamaam_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tayamaam Hill</p> <p>Elev: 225 m, Prom: 163 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15960.212896870122!2d120.54374522827264!3d13.234464888824638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc6ce70ae28caf%3A0xd760984d24e9d234!2sTayamaam%20Hill!5e1!3m2!1sen!2sph!4v1598373762471!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.25, 121.233333], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alibug" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alibug</p> <p>Elev: 221 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16021.570686097413!2d121.23346742816956!3d12.26279842936457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bae01525e725c9%3A0x387c258c90eb74a0!2sMount%20Alibug!5e1!3m2!1sen!2sph!4v1598373802444!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.7875, 120.2883333], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tabao_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tabao Hill</p> <p>Elev: 204 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.238126378214!2d120.27957852833666!3d13.787520434682476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdd3d029e6f6af%3A0x5bda9d9301b2d08d!2sTabao%20Hill!5e1!3m2!1sen!2sph!4v1598373831915!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.5510682, 120.9705938], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sair  " target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sair</p> <p>Elev: 198 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16003.77422737126!2d120.96402302819904!3d12.552242803006513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb095ba9ae9bfb%3A0x2b6cee155198c6ac!2sMount%20Sair!5e1!3m2!1sen!2sph!4v1598373879966!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2966667, 120.4919444], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binarira" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binarira</p> <p>Elev: 192 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.127175965214!2d120.48318962827965!3d13.296687182827567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc14f2b581592f%3A0xdc17851d9155b6ab!2sMount%20Binarira!5e1!3m2!1sen!2sph!4v1598373920814!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.25, 121.05], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Higdirip_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Higdirip Hill</p> <p>Elev: 182 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16022.34691065021!2d121.04124522816831!3d12.250020580516187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bafcec0fd6742f%3A0xc71e162bef0c3030!2sHigdirip%20Hill!5e1!3m2!1sen!2sph!4v1598373968492!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2716814, 120.5008653], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mahabang_Buhangin" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mahabang Buhangin</p> <p>Elev: 179 m, Prom: 38 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.949477714563!2d120.48735632827824!3d13.284187184034254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc149af5ba6b65%3A0xf4bf55c4b0eaf108!2sMount%20Mahabang%20Buhangin!5e1!3m2!1sen!2sph!4v1598374029211!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.2, 121.083333], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Natangdol" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Natangdol</p> <p>Elev: 178 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16025.359831122207!2d121.08041192816336!3d12.200298434987742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bae4c82092dbe9%3A0xe3cae471869c9285!2sMount%20Natangdol!5e1!3m2!1sen!2sph!4v1598374058703!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>  '
  );
L.marker([12.233333, 121.083333], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Monturidao_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Monturidao Hill</p> <p>Elev: 160 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16025.359831122207!2d121.08041192816336!3d12.200298434987742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bae34db75677ff%3A0xd9fcd68d0863d1ea!2sMonturidao%20Hill!5e1!3m2!1sen!2sph!4v1598374084824!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.233333, 121.066667], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bundagit_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bundagit Hill</p> <p>Elev: 153 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16023.358173140765!2d121.05791192816659!3d12.233353932016746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bafca54bab9acf%3A0x2234ca14f85d2fa3!2sBundagit%20Hill!5e1!3m2!1sen!2sph!4v1598374112777!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.743333, 120.251111], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Antimolan_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Antimolan</p> <p>Elev: 150 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.716556871086!2d120.24013412833233!3d13.751131538302795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdd49d2e82dd1f%3A0xfc74f7cc2cd02eb!2sAntimolan%20Mountains!5e1!3m2!1sen!2sph!4v1598374151031!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.2233594, 121.0145469], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ambulong_(bukid_sa_Pilipinas,_lat_12,23,_long_121,02)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ambulong</p> <p>Elev: 149 m, Prom: 149 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16023.358173140765!2d121.00791192816662!3d12.233353932016746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bafc7698caad1f%3A0x82e50ff9b7d16b7a!2sMount%20Ambulong!5e1!3m2!1sen!2sph!4v1598373111047!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.516667, 121.033333], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Iba_(bukid_sa_Pilipinas,_Mimaropa)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iba</p> <p>Elev: 144 m, Prom: 82 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16005.982366580763!2d121.02457852819533!3d12.516687306272381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb0ef8aa4ca8eb%3A0x9aba909b9cb7c60c!2sMount%20Iba!5e1!3m2!1sen!2sph!4v1598374183349!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1912177, 121.1090456], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Manimoc_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Manimoc Hill</p> <p>Elev: 143 m, Prom: 118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16025.376630550592!2d121.10791192816329!3d12.200020635012683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bae48c52c7d023%3A0xd0128ec4d0bcdfe3!2sManimoc%20Hill!5e1!3m2!1sen!2sph!4v1598374215618!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.1527778, 120.7002778], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Balante_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Balante Hill</p> <p>Elev: 142 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15965.546828665934!2d120.69152302826352!3d13.152798296659459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc7011d9109975%3A0x180f7e2cb3da3c3f!2sBalante%20Hill!5e1!3m2!1sen!2sph!4v1598374241994!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8086111, 120.2816667], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Buanbuan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Buanbuan Hill</p> <p>Elev: 133 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15921.797315458634!2d120.27291192833918!3d13.808631532578401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdd1658ce8bf69%3A0xd7678ffe0182720b!2sBuanbuan%20Hill!5e1!3m2!1sen!2sph!4v1598374277036!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.55, 121.083333], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Obelisk_Peak_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Obelisk Peak</p> <p>Elev: 130 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16003.636015197964!2d121.08402302819924!3d12.554465002802129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb121a9da41aa1%3A0xd6ffa284802b0b95!2sObelisk%20Peak!5e1!3m2!1sen!2sph!4v1598374328974!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.066667, 120.8], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Paragpagan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Paragpagan</p> <p>Elev: 125 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15971.674883538388!2d120.8168008282531!3d13.058353805668721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc7ea2b7cb6373%3A0xf214e54d3e5ed0fb!2sMount%20Paragpagan!5e1!3m2!1sen!2sph!4v1598374365568!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8246843, 120.3130445], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tayrohat_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tayrohat Hill</p> <p>Elev: 123 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15921.000147786799!2d120.30485632834058!3d13.820298231414437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdd1bbf5e4eb21%3A0x2047eba351ff16af!2sTayrohat%20Hill!5e1!3m2!1sen!2sph!4v1598374392051!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4047222, 120.4777778], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lumang_Bayan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lumang Bayan Hill</p> <p>Elev: 121 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15948.987183813626!2d120.46902302829194!3d13.404742672356182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc3efeebdec077%3A0x43ead334273fc057!2sLumang%20Bayan%20Hill!5e1!3m2!1sen!2sph!4v1598374510707!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.085, 120.7372222], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Alawa_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Alawa Hill</p> <p>Elev: 113 m, Prom: 101 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15969.949004107066!2d120.72846742825601!3d13.08502050313052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc7a222893ec37%3A0xc14ea0b5d535678e!2sAlawa%20Hill!5e1!3m2!1sen!2sph!4v1598374587353!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2419444, 120.5905556], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pansianan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pansianan Hill</p> <p>Elev: 100 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.721419777361!2d120.58180082827349!3d13.241964888103043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc6c42059d1adb%3A0x3ed923d8302ba474!2sPansianan%20Hill!5e1!3m2!1sen!2sph!4v1598374670968!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.533333, 121.083333], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Hospital_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Hospital Hill</p> <p>Elev: 97 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16004.240520384594!2d121.09180082819826!3d12.544742803696057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb121fbf45bb0b%3A0xc020f9e071e39bb6!2sHospital%20Hill!5e1!3m2!1sen!2sph!4v1598375113655!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.2541667, 121.1302778], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Santa_Teresa_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Santa Teresa Hill</p> <p>Elev: 96 m, Prom: 90 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16022.093880911729!2d121.12152302816868!3d12.254187280140766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bae3ab6577c093%3A0xb7b8251a817c2d52!2sSanta%20Teresa%20Hill!5e1!3m2!1sen!2sph!4v1598375167943!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.23478, 121.0394484], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maralubungan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maralubungan Hill</p> <p>Elev: 85 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16023.358173140761!2d121.02457852816661!3d12.233353932016758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bafc7df7a0afb9%3A0x50990aaec759f400!2sMaralubungan%20Hill!5e1!3m2!1sen!2sph!4v1598375215966!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.533333, 121.116667], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Telescope_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Telescope Hill</p> <p>Elev: 73 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16004.810057517368!2d121.1093008281973!3d12.53557620453836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb118418760e15%3A0x1603306d8e658619!2sTelescope%20Hill!5e1!3m2!1sen!2sph!4v1598375249888!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2266667, 120.6069444], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dapi_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dapi Hill</p> <p>Elev: 57 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15960.722279597461!2d120.59818962827178!3d13.226687239572588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc6c31b85d26d7%3A0x8ddae943da581cba!2sDapi%20Hill!5e1!3m2!1sen!2sph!4v1598375309156!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2280556, 120.6166667], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sinambalam_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sinambalam Hill</p> <p>Elev: 52 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15960.631341018556!2d120.60791192827189!3d13.228076089439046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc6c288f5e0f6d%3A0xb92809727e67dd5!2sSinambalam%20Hill!5e1!3m2!1sen!2sph!4v1598375352351!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6788889, 120.3108333], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kaywaco_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kaywaco Hill</p> <p>Elev: 46 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.616548317648!2d120.30207852832379!3d13.678909345463985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc2d0fa41904f3%3A0xc716ebd5203d6561!2sKaywaco%20Hill!5e1!3m2!1sen!2sph!4v1598375410234!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2219444, 120.6155556], { icon: aIcon })
  .addTo(occidentalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tuburan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tuburan Peak</p> <p>Elev: 32 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15961.031414361645!2d120.60680082827122!3d13.221964940026513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc6c2b97b16b4f%3A0x42541c4ecc3ab9b0!2sTuburan%20Peak!5e1!3m2!1sen!2sph!4v1598375446757!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
