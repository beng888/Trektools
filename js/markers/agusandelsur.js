var agusandelsurmap = L.map("agusandelsurmap").setView(
  [8.3463888, 125.6615384],
  10
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(agusandelsurmap);
L.marker([8.237222, 125.416389], { icon: dIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Datu_Masuyapa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Datu Masuyapa</p> <p>Elev: 1633 m, Prom: 669 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16226.510256585701!2d125.40763412787076!3d8.237243191560934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe5ac91f28832d%3A0xa0b71418b4fe3a05!2sMount%20Datu%20Masuyapa!5e1!3m2!1sen!2sph!4v1598981532265!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.208333, 125.434444], { icon: cIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kinabalian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kinabalian</p> <p>Elev: 1359 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16226.510256585701!2d125.40763412787076!3d8.237243191560934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe5b01d8b87123%3A0x57670d1f6d2f75bc!2sMount%20Kinabalian!5e1!3m2!1sen!2sph!4v1598981562907!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.470556, 125.263611], { icon: cIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gitangilang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gitangilang</p> <p>Elev: 1323 m, Prom: 193 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16216.809398650166!2d125.25485632788245!3d8.470576576256036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe346365ff2435%3A0x644acd17b3786db!2sMount%20Gitangilang!5e1!3m2!1sen!2sph!4v1598981652690!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.221667, 125.371944], { icon: cIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bahaoan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bahaoan</p> <p>Elev: 1278 m, Prom: 292 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16227.14741132161!2d125.36318962787004!3d8.221687692568963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe50688d91ad01%3A0xbd65f8e03441054f!2sMount%20Bahaoan!5e1!3m2!1sen!2sph!4v1598981698584!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.35, 125.3], { icon: cIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baliagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baliagan</p> <p>Elev: 1225 m, Prom: 140 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16221.855100789497!2d125.29124522787632!3d8.350020984206736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe4bdfaca9f9b5%3A0x6228a3fd15eb9ada!2sMount%20Baliagan!5e1!3m2!1sen!2sph!4v1598981722872!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.45, 125.266667], { icon: cIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taguimot" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taguimot</p> <p>Elev: 1183 m, Prom: 85 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16217.674805057251!2d125.2579119278814!3d8.450020977618214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe34510ea99cdf%3A0xd243937e53a2310e!2sMount%20Taguimot!5e1!3m2!1sen!2sph!4v1598981760179!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.250278, 125.505556], { icon: bIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salibugnug" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salibugnug</p> <p>Elev: 928 m, Prom: 55 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16225.974574816883!2d125.49680082787141!3d8.250298790713721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe433e9d7f2c23%3A0xd4c77b379bd44874!2sMount%20Salibugnug!5e1!3m2!1sen!2sph!4v1598981792556!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.412222, 125.42], { icon: bIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calauhan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calauhan</p> <p>Elev: 760 m, Prom: 127 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16219.259835751423!2d125.41124522787943!3d8.412243180114672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe3843adfbb8ed%3A0x4a4427c1d4fc6cac!2sMount%20Calauhan!5e1!3m2!1sen!2sph!4v1598981814725!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.5, 125.4], { icon: bIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Angilut_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Angilut Peak</p> <p>Elev: 516 m, Prom: 189 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16215.566130699115!2d125.39124522788394!3d8.500020974300147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe3a7c98f389e9%3A0x85b6b008e8dbaff5!2sAngilut%20Peak!5e1!3m2!1sen!2sph!4v1598981839954!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.4, 125.433333], { icon: aIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Saga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Saga</p> <p>Elev: 481 m, Prom: 95 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16219.771128952887!2d125.42457852787885!3d8.400020980920415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe3862bc277e4d%3A0xef943f8c213987ce!2sMount%20Saga!5e1!3m2!1sen!2sph!4v1598981880326!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.140556, 126.056944], { icon: aIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Saugon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Saugon</p> <p>Elev: 429 m, Prom: 294 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16230.450349851555!2d126.04818962786617!3d8.140576597800214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fdd1b29cf10147%3A0xeb9ad0b11067e712!2sMount%20Saugon!5e1!3m2!1sen!2sph!4v1598981905861!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.5836111, 125.3691667], { icon: aIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caliduan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caliduan</p> <p>Elev: 384 m, Prom: 89 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16212.012371258337!2d125.36041192788832!3d8.583632018716168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe2f7528c81c97%3A0xd7983e0187f84577!2sMount%20Caliduan!5e1!3m2!1sen!2sph!4v1598981930048!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.549167, 125.407778], { icon: aIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Timuyug" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Timuyug</p> <p>Elev: 351 m, Prom: 151 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16212.012371258337!2d125.36041192788832!3d8.583632018716168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe2548a5259e03%3A0xee3e86996bd94819!2sMount%20Timuyug!5e1!3m2!1sen!2sph!4v1598981975392!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.128333, 125.595278], { icon: aIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kumakata" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kumakata</p> <p>Elev: 333 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16230.945236340147!2d125.5865230278656!3d8.12835429858487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe60eedce9d12f%3A0x588e77ae070de9c4!2sMount%20Kumakata!5e1!3m2!1sen!2sph!4v1598982007692!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.15, 126.066667], { icon: aIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Range_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Range Peak</p> <p>Elev: 291 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16230.067435946103!2d126.05791192786661!3d8.15002099719325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fdd0480eca3c53%3A0x794360f06eebd680!2sRange%20Peak!5e1!3m2!1sen!2sph!4v1598982051879!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.516667, 125.8], { icon: aIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tauaua" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tauaua</p> <p>Elev: 88 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16214.860493563803!2d125.79124522788481!3d8.516687673190598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe05961299db79%3A0xb93632f92bd2a859!2sMount%20Tauaua!5e1!3m2!1sen!2sph!4v1598982077067!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.666667, 125.8], { icon: aIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kiluntadun" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kiluntadun</p> <p>Elev: 65 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16208.44803763837!2d125.79124522789277!3d8.66668766312538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3301fdbdc2b752d7%3A0x6236bebb688ea2d1!2sMount%20Kiluntadun!5e1!3m2!1sen!2sph!4v1598982101988!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.616667, 125.75], { icon: aIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lanumbaan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lanumbaan</p> <p>Elev: 58 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16208.44803763837!2d125.79124522789277!3d8.66668766312538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe02d7bee110e9%3A0x62ed9d37a5a199ea!2sMount%20Lanumbaan!5e1!3m2!1sen!2sph!4v1598982128080!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.65, 125.783333], { icon: aIcon })
  .addTo(agusandelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gabongabon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gabongabon</p> <p>Elev: 44 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16209.166020954932!2d125.77457852789186!3d8.650020964250785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3301fd7f9361dd45%3A0x538e86984f3d885e!2sMount%20Gabongabon!5e1!3m2!1sen!2sph!4v1598982154695!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
