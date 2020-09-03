var davaooccidentalmap = L.map("davaooccidentalmap").setView(
  [6.0941396, 125.6095474],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(davaooccidentalmap);

L.marker([6.209167, 125.5075], { icon: dIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Latian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Latian</p> <p>Elev: 1624 m, Prom: 1449 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16299.47621933875!2d125.49874522779884!3d6.209187809976986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f766276dcf890f%3A0x5e0db34b57bd4d5b!2sMount%20Latian!5e1!3m2!1sen!2sph!4v1599000537682!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.955278, 125.494444], { icon: dIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tudul" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tudul </p> <p>Elev: 1609 m, Prom: 715 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.174162231515!2d125.48568962779352!3d5.955298972948966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f71724770037f9%3A0x8a06e6682dab7681!2sMount%20Tudul!5e1!3m2!1sen!2sph!4v1599000563870!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9666667, 125.5166667], { icon: dIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Peak_(bukid_sa_Pilipinas,_Davao,_Province_of_Davao_del_Sur,_lat_5,97,_long_125,52)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Peak</p> <p>Elev: 1559 m, Prom: 55 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.835709245066!2d125.50791192779374!3d5.966687822375938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f716f987b1aa25%3A0x784971809b8efe35!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1599000866635!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.885278, 125.545556], { icon: cIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nara" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nara</p> <p>Elev: 1461 m, Prom: 241 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16309.240266134433!2d125.53680082779222!3d5.885298976452761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7188ae8c5b727%3A0xac4df08df93d0449!2sMount%20Nara!5e1!3m2!1sen!2sph!4v1599003195299!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.933611, 125.476111], { icon: cIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Volcanic_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Volcanic Peak</p> <p>Elev: 1436 m, Prom: 174 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.816272724027!2d125.46735632779317!3d5.933632274036843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f710acfcb1be8b%3A0x7b19c4154d372db5!2sVolcanic%20Peak!5e1!3m2!1sen!2sph!4v1599003226237!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.822778, 125.496944], { icon: cIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Macaayao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Macaayao</p> <p>Elev: 1414 m, Prom: 484 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.064430908931!2d125.48818962779112!3d5.822798979554569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f71e8ba43f026b%3A0x6ed77c34a4ad13d8!2sMount%20Macaayao!5e1!3m2!1sen!2sph!4v1599003247504!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.961667, 125.601944], { icon: cIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kibongcal" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kibongcal</p> <p>Elev: 1214 m, Prom: 136 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.984378208299!2d125.59318962779368!3d5.961687822627611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f73dae2f97e5bb%3A0x5cacf99a8eb1678d!2sMount%20Kibongcal!5e1!3m2!1sen!2sph!4v1599003272982!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8166667, 125.5], { icon: cIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Peak_(bukid_sa_Pilipinas,_Davao,_Province_of_Davao_del_Sur,_lat_5,82,_long_125,50)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Peak</p> <p>Elev: 1200 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.241751750053!2d125.49124522779096!3d5.816687879856509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f71e609dbc3ba1%3A0x5a20e8d392066b48!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1599000957207!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.853333, 125.538056], { icon: cIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabituroan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabituroan</p> <p>Elev: 1185 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310.175043398784!2d125.52930082779169!3d5.853354478041272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f718cc98d14195%3A0xd73ec3cc999848eb!2sMount%20Cabituroan!5e1!3m2!1sen!2sph!4v1599000995459!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.881944, 125.573611], { icon: cIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagsak_(bukid_sa_Pilipinas,_Davao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagsak</p> <p>Elev: 1135 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310.175043398784!2d125.52930082779169!3d5.853354478041272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7227c5a252803%3A0x7c31f9db813b5be2!2sMount%20Bagsak!5e1!3m2!1sen!2sph!4v1599001022486!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.056667, 125.633611], { icon: cIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kigangi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kigangi</p> <p>Elev: 1082 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.138432096714!2d125.62485632779554!3d6.056687867818274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f73f5f86789047%3A0xa371488738459b19!2sMount%20Kigangi!5e1!3m2!1sen!2sph!4v1599001078682!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.033333, 125.583333], { icon: cIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lone_Tree_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lone Tree Peak</p> <p>Elev: 1013 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.841590912874!2d125.5745785277951!3d6.033354469004885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f73fc8be9bdbe3%3A0xf006526c202c7b5a!2sLone%20Tree%20Peak!5e1!3m2!1sen!2sph!4v1599001128353!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.919167, 125.583333], { icon: cIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bontod_Bato" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bontod Bato</p> <p>Elev: 1007 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.243048846158!2d125.57457852779284!3d5.9191878747604045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f722b4b446ce09%3A0xdc761338bd6c79cb!2sMount%20Bontod%20Bato!5e1!3m2!1sen!2sph!4v1599001163549!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.936667, 125.615833], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lambato" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lambato</p> <p>Elev: 947 m, Prom: 71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.725860230292!2d125.60707852779318!3d5.936687823883611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f73ce726518b61%3A0xafe7a8379376ee2b!2sMount%20Lambato!5e1!3m2!1sen!2sph!4v1599001186389!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.913333, 125.602222], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taco" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taco</p> <p>Elev: 891 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.415109427897!2d125.59346742779273!3d5.913354475052246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f722d1639b7875%3A0x4819bf66182fca2c!2sMount%20Taco!5e1!3m2!1sen!2sph!4v1599001232906!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.771389, 125.490833], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Daingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Daingan</p> <p>Elev: 873 m, Prom: 125 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16312.54976036929!2d125.48207852779021!3d5.771410082086159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f6e1eddc86b8a5%3A0xa89b6459b205cfc!2sMount%20Daingan!5e1!3m2!1sen!2sph!4v1599001257907!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.398611, 125.374444], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balut" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balut</p> <p>Elev: 842 m, Prom: 842 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16322.93149007867!2d125.36568962778485!3d5.39863229994252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f68fcf4e104107%3A0x2ed5ea83f164469f!2sMount%20Balut!5e1!3m2!1sen!2sph!4v1599001283381!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.885556, 125.592222], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calugon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calugon</p> <p>Elev: 832 m, Prom: 78 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16309.232114764425!2d125.58346742779223!3d5.885576776438917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f722f5cce956b1%3A0x613b49d8cd89d018!2sMount%20Calugon!5e1!3m2!1sen!2sph!4v1599001314310!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.763889, 125.493889], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sibulan_(bukid_sa_Pilipinas,_lat_5,76,_long_125,49)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sibulan</p> <p>Elev: 774 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16312.76544082387!2d125.48513412779009!3d5.763910082454214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f6e193ed4d3d77%3A0x1ec41a09a899576a!2sMount%20Sibulan!5e1!3m2!1sen!2sph!4v1599001343811!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.178889, 125.678889], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sumadil" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sumadil</p> <p>Elev: 773 m, Prom: 210 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16300.411055612238!2d125.67013412779816!3d6.178910061545681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f744c1bb862e8d%3A0x9c1b69cf8362a74a!2sMount%20Sumadil!5e1!3m2!1sen!2sph!4v1599001400279!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.001111, 125.655278], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palnabao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palnabao</p> <p>Elev: 751 m, Prom: 151 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.808172244197!2d125.64652302779444!3d6.001132220637784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7394aed6ecdb3%3A0x96f40172626c314b!2sMount%20Palnabao!5e1!3m2!1sen!2sph!4v1599001426778!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.953611, 125.6275], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pigbaluyan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pigbaluyan</p> <p>Elev: 744 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.808172244197!2d125.64652302779444!3d6.001132220637784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f73c5ee1d5762d%3A0x9c9fa67fbdbf2b1e!2sMount%20Pigbaluyan!5e1!3m2!1sen!2sph!4v1599001451979!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.825833, 125.554167], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lantalon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lantalon</p> <p>Elev: 743 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310.975703809267!2d125.54541192779116!3d5.825854429403512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f71f6f8df5b031%3A0x89def949492c712!2sMount%20Lantalon!5e1!3m2!1sen!2sph!4v1599001477644!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.868333, 125.588611], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Busao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Busao</p> <p>Elev: 717 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310.975703809267!2d125.54541192779116!3d5.825854429403512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f72241ccbf7ca5%3A0xd7565c333b2b4f78!2sMount%20Busao!5e1!3m2!1sen!2sph!4v1599001594980!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.143333, 125.678056], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salungcatan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salungcatan</p> <p>Elev: 708 m, Prom: 199 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16301.503036005592!2d125.66930082779737!3d6.1433544633803185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f74440f44cf1f7%3A0x4212f1f91800ab0d!2sMount%20Salungcatan!5e1!3m2!1sen!2sph!4v1599001641578!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.806944, 125.528333], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maylaw" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maylaw</p> <p>Elev: 706 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.523473424564!2d125.51957852779083!3d5.806965580336382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f71fb19ba9d2f3%3A0x6835a709babaab59!2sMount%20Maylaw!5e1!3m2!1sen!2sph!4v1599001668707!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.99, 125.653889], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Biao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Biao</p> <p>Elev: 696 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.1402782869!2d125.64513412779422!3d5.990021171199308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7395348b5a337%3A0x317f3a552bbd8784!2sMount%20Biao!5e1!3m2!1sen!2sph!4v1599001776188!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.125833, 125.651667], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agsam" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agsam</p> <p>Elev: 692 m, Prom: 103 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302.03818919077!2d125.64291192779699!3d6.125854464280324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f74155663d462f%3A0x696dbb44f3aaa805!2sMount%20Agsam!5e1!3m2!1sen!2sph!4v1599001800823!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.233611, 125.628333], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apo_(bukid_sa_Pilipinas,_Davao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apo</p> <p>Elev: 680 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.718167464589!2d125.61957852779936!3d6.233632258706228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75cf5994c8a93%3A0xa5db520a97a3f2bb!2sMount%20Apo!5e1!3m2!1sen!2sph!4v1599001834903!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.282222, 125.633333], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patulangon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patulangon</p> <p>Elev: 671 m, Prom: 336 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.718167464589!2d125.61957852779936!3d6.233632258706228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75ebdc5a8f74f%3A0xade4231672f8647a!2sMount%20Patulangon!5e1!3m2!1sen!2sph!4v1599001878993!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.993333, 125.670833], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balunao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balunao</p> <p>Elev: 657 m, Prom: 165 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.040711309777!2d125.66207852779429!3d5.993354471030934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7394341b758f3%3A0x360fbd0ebe1c63cd!2sMount%20Balunao!5e1!3m2!1sen!2sph!4v1599001903666!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.727778, 125.454722], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balocol" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balocol</p> <p>Elev: 652 m, Prom: 152 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16313.799989065223!2d125.44596742778951!3d5.727798984221283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f6e392e6fc8b25%3A0xf7177a545b70d5d2!2sMount%20Balocol!5e1!3m2!1sen!2sph!4v1599001926066!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.366667, 125.596389], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tabacanon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tabacanon</p> <p>Elev: 642 m, Prom: 429 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16294.539933864471!2d125.5876341278025!3d6.366687851722108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9e045c8d550c7%3A0xc2d08a8ae1c0ef03!2sMount%20Tabacanon!5e1!3m2!1sen!2sph!4v1599001947752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.349444, 125.603889], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taginusa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taginusa</p> <p>Elev: 635 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16294.539933864471!2d125.5876341278025!3d6.366687851722108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9e02e817402ab%3A0x4cc4293e5b899816!2sMount%20Taginusa!5e1!3m2!1sen!2sph!4v1599001977637!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.224722, 125.6825], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Laguli" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Laguli</p> <p>Elev: 583 m, Prom: 185 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.994166231518!2d125.67374522779919!3d6.224743359168767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75b0ee82d85fb%3A0x36892f003b5cb86b!2sMount%20Laguli!5e1!3m2!1sen!2sph!4v1599001999912!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8125, 125.551111], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bayawa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bayawa</p> <p>Elev: 565 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.36254711992!2d125.5423563277909!3d5.812521180062244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f71f9c69839f7d%3A0xdcec9a3fe150cf2a!2sMount%20Bayawa!5e1!3m2!1sen!2sph!4v1599002022920!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.75, 125.493611], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lagman" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lagman</p> <p>Elev: 563 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16313.164112734616!2d125.48485632778984!3d5.750021133134853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f6e19df17c476b%3A0x2d38b4da63515d01!2sMount%20Lagman!5e1!3m2!1sen!2sph!4v1599002051953!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.322222, 125.608889], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tala" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tala</p> <p>Elev: 561 m, Prom: 338 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16295.945362418126!2d125.60013412780143!3d6.322243354067625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75fa0858f38a1%3A0xd655b5c96258c00e!2sMount%20Tala!5e1!3m2!1sen!2sph!4v1599002081191!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.219444, 125.685], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bandera" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bandera</p> <p>Elev: 553 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16299.157855372508!2d125.67624522779907!3d6.219465559443157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75b106662de07%3A0x5ee0977d2ef2ea20!2sMount%20Bandera!5e1!3m2!1sen!2sph!4v1599002107184!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.293333, 125.618611], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Silangan_(bukid_sa_Pilipinas,_Davao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Silangan</p> <p>Elev: 552 m, Prom: 49 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16296.853633609237!2d125.60985632780078!3d6.293354405585432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75ef18ee2e961%3A0x30c6cab2a1ae757e!2sMount%20Silangan!5e1!3m2!1sen!2sph!4v1599002136948!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.107222, 125.678333], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balsinong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balsinong</p> <p>Elev: 549 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302.605652833123!2d125.66957852779662!3d6.107243315235322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f74694da6efacb%3A0x77194acc44a800db!2sMount%20Balsinong!5e1!3m2!1sen!2sph!4v1599002177572!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.233889, 125.678611], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bantala" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bantala</p> <p>Elev: 546 m, Prom: 91 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.709535502305!2d125.66985632779938!3d6.233910058691764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75ba112ba8257%3A0xbfd0ef514d24f5ad!2sMount%20Bantala!5e1!3m2!1sen!2sph!4v1599002199988!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.283889, 125.624167], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lasubong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lasubong</p> <p>Elev: 524 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16297.149667780248!2d125.61541192780061!3d6.283910006080476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75e93d95d1beb%3A0xb404d6cbe381c2a9!2sMount%20Lasubong!5e1!3m2!1sen!2sph!4v1599002222073!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.269167, 125.646111], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salimbao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salimbao</p> <p>Elev: 522 m, Prom: 49 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16297.610251153645!2d125.63735632780018!3d6.269187806851021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75ea9c3555547%3A0x3e82f34d73c18bfc!2sMount%20Salimbao!5e1!3m2!1sen!2sph!4v1599002243895!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.33, 125.578611], { icon: bIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tungco" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tungco</p> <p>Elev: 519 m, Prom: 111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16295.700121415914!2d125.56985632780165!3d6.330021103658077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75fe8efd32ecf%3A0x5ca1aba3defeb737!2sMount%20Tungco!5e1!3m2!1sen!2sph!4v1599002265813!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.3999957, 125.5800223], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Transmitter_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Transmitter Peak</p> <p>Elev: 487 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16293.461708863077!2d125.56874522780333!3d6.400576699925147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9e0bd264a0ce3%3A0xa60fc49077d1d5bf!2sMount%20Transmitter%20Peak!5e1!3m2!1sen!2sph!4v1599002289262!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.265278, 125.610833], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kibusao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kibusao</p> <p>Elev: 470 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16297.731735560359!2d125.60207852780007!3d6.2652989070543255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75c2cc2b7cb91%3A0x78f90f381f234fe2!2sMount%20Kibusao!5e1!3m2!1sen!2sph!4v1599002313747!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.099444, 125.685], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dinagat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dinagat</p> <p>Elev: 460 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302.84229084658!2d125.67624522779644!3d6.099465565633767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f746efcb453e23%3A0x66f26590026b62e9!2sMount%20Dinagat!5e1!3m2!1sen!2sph!4v1599002335408!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.558611, 125.483611], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Monkiaua" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Monkiaua</p> <p>Elev: 444 m, Prom: 414 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.357652778457!2d125.47485632780747!3d6.5586321914470975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c3f9f5ecb5f7%3A0xd5f51e5b5ec75133!2sMount%20Monkiaua!5e1!3m2!1sen!2sph!4v1599002358788!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.249722, 125.659444], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Migtango" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Migtango</p> <p>Elev: 434 m, Prom: 71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.216920804913!2d125.65068962779976!3d6.24974335786659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75b8cb29cd5ef%3A0x84ee7eb5581a4eff!2sMount%20Migtango!5e1!3m2!1sen!2sph!4v1599002383525!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.395003, 125.5733496], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Labo-o" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Labo-o</p> <p>Elev: 406 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16293.594586065028!2d125.56346742780325!3d6.396410000146486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9e099241dc4d9%3A0x99e7aaf4dff545ed!2sMount%20Labo-o!5e1!3m2!1sen!2sph!4v1599002409571!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.3825, 125.603889], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Inaburan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Inaburan</p> <p>Elev: 378 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16294.036884547606!2d125.59513412780295!3d6.382521100883471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9e0f9527c04cd%3A0x492acca1b250855e!2sMount%20Inaburan!5e1!3m2!1sen!2sph!4v1599002433290!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.106111, 125.6925], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Limulan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Limulan</p> <p>Elev: 371 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302.639474917036!2d125.68374522779656!3d6.106132265292266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7468b45f68ddb%3A0x1cd3cd32363f4b5c!2sMount%20Limulan!5e1!3m2!1sen!2sph!4v1599002467872!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.084722, 125.666667], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gayana" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gayana</p> <p>Elev: 354 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302.639474917036!2d125.68374522779656!3d6.106132265292266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f74725cdcc1dc7%3A0x3e82c453eaa8479f!2sMount%20Gayana!5e1!3m2!1sen!2sph!4v1599002502789!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.087222, 125.695833], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pispis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pispis</p> <p>Elev: 349 m, Prom: 169 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.213544263652!2d125.68707852779616!3d6.0872433662591074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f747001904fa45%3A0xbe3d0ae445756bea!2sMount%20Pispis!5e1!3m2!1sen!2sph!4v1599002585367!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.504722, 125.551111], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bitu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bitu</p> <p>Elev: 341 m, Prom: 158 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16290.11180480743!2d125.542356327806!3d6.504743294355654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c2bc45dda1b7%3A0x7729478d89874b55!2sMount%20Bitu!5e1!3m2!1sen!2sph!4v1599002608541!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.098611, 125.668889], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagongos" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagongos</p> <p>Elev: 331 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302.867627698564!2d125.66013412779641!3d6.098632215676435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f746c4b2f16739%3A0x19a5a940e0776e74!2sMount%20Bagongos!5e1!3m2!1sen!2sph!4v1599002632919!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.541944, 125.503056], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Munkayawa_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Munkayawa Hill</p> <p>Elev: 329 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.901714123387!2d125.494300827807!3d6.54196549234864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c3bc3397719b%3A0x6a2fa662b8403408!2sMunkayawa%20Hill!5e1!3m2!1sen!2sph!4v1599002657679!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.511944, 125.543889], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Basiawan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Basiawan</p> <p>Elev: 326 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16289.877547611892!2d125.53513412780622!3d6.511965543966932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c2eb4d2b1ac3%3A0x16ff813dad631781!2sMount%20Basiawan!5e1!3m2!1sen!2sph!4v1599002681774!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.378889, 125.413889], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ten_Seventy_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ten Seventy Hill</p> <p>Elev: 324 m, Prom: 174 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16323.46150516655!2d125.40513412778459!3d5.37891010086235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f6906d6a8ca5f7%3A0x45122d9a48ad0091!2sMount%20Ten%20Seventy%20Hill!5e1!3m2!1sen!2sph!4v1599002706643!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.489167, 125.454444], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Miglinog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Miglinog</p> <p>Elev: 322 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16290.615474291966!2d125.4456896278056!3d6.489187845191774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9db3791c64743%3A0x337712fc51c62b18!2sMount%20Miglinog!5e1!3m2!1sen!2sph!4v1599002735510!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.587222, 125.464722], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bagnusan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bagnusan Hill</p> <p>Elev: 319 m, Prom: 308 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16287.420469237262!2d125.45596742780826!3d6.58724328989531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c6c7a1dad5fb%3A0xa2b19c43887c6e9!2sBagnusan%20Hill!5e1!3m2!1sen!2sph!4v1599002757924!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.0875, 125.688611], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magaluwayon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magaluwayon</p> <p>Elev: 301 m, Prom: 111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.205114234952!2d125.67985632779619!3d6.087521166244905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7470288fa008f%3A0x560eef16cffb0846!2sMount%20Magaluwayon!5e1!3m2!1sen!2sph!4v1599002781797!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.552778, 125.453889], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caputian_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caputian Hill</p> <p>Elev: 289 m, Prom: 183 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.54822792631!2d125.44513412780731!3d6.552798941762839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c43fa5e04b83%3A0x1dd079f0f7dd2168!2sCaputian%20Hill!5e1!3m2!1sen!2sph!4v1599002809189!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.312778, 125.648889], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kalapi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kalapi</p> <p>Elev: 279 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16296.24275259193!2d125.64013412780122!3d6.312798904564421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75f2df5f0a321%3A0xf3d77d82f723b9ac!2sMount%20Kalapi!5e1!3m2!1sen!2sph!4v1599002833589!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.529722, 125.416389], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kabakungan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kabakungan Hill</p> <p>Elev: 270 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16289.299813309737!2d125.40763412780666!3d6.5297433430086365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c50c4aff0d8b%3A0x589137c5a8c6c3e2!2sKabakungan%20Hill!5e1!3m2!1sen!2sph!4v1599002857619!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.599167, 125.452778], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dulumoon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dulumoon Hill</p> <p>Elev: 261 m, Prom: 66 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16287.02801417158!2d125.44402302780857!3d6.599187789245924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c6e6e892f2ed%3A0x10a92274804c9c80!2sDulumoon%20Hill!5e1!3m2!1sen!2sph!4v1599002880543!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.475833, 125.563333], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tubalan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tubalan</p> <p>Elev: 250 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16291.046240356705!2d125.55457852780528!3d6.475854445907227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9dd58d73b7525%3A0x1c561b3460950a50!2sMount%20Tubalan!5e1!3m2!1sen!2sph!4v1599002904251!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.610833, 125.438611], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Langlad_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Langlad Hill</p> <p>Elev: 240 m, Prom: 187 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16286.644004969328!2d125.42985632780888!3d6.610854438610762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c706b5d12b59%3A0x4b7586c294cf508a!2sLanglad%20Hill!5e1!3m2!1sen!2sph!4v1599002939685!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.141667, 125.695556], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kimpis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kimpis</p> <p>Elev: 193 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16301.554067986095!2d125.68680082779736!3d6.141687813466115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7444a959fb01b%3A0x33397b23c4e463da!2sMount%20Kimpis!5e1!3m2!1sen!2sph!4v1599002971861!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.618611, 125.431389], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Magbato_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Magbato Hill</p> <p>Elev: 141 m, Prom: 59 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16286.387622583086!2d125.4226341278091!3d6.618632238186833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c7a6e3bb4b41%3A0x403c0b6eb0fc5a7f!2sMagbato%20Hill!5e1!3m2!1sen!2sph!4v1599003000581!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.5175, 125.572222], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Botak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Botak</p> <p>Elev: 139 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16289.697172891303!2d125.56346742780636!3d6.517521143667675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9e82edb6e11cd%3A0x4e1a4cbb335bdeec!2sMount%20Botak!5e1!3m2!1sen!2sph!4v1599003033772!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.616111, 125.435556], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dangadang_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dangadang Hill</p> <p>Elev: 138 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16286.470063701736!2d125.42680082780905!3d6.616132238323138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c70813826273%3A0x27d2b536cd6a1fc2!2sDangadang%20Hill!5e1!3m2!1sen!2sph!4v1599003089277!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.614444, 125.425833], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sulok_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sulok Hill</p> <p>Elev: 132 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16286.525008320039!2d125.41707852780901!3d6.614465538413995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c7afa60561bb%3A0xd39f3fd8418ee856!2sSulok%20Hill!5e1!3m2!1sen!2sph!4v1599003115781!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.628333, 125.425556], { icon: aIcon })
  .addTo(davaooccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kulasing_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kulasing Hill</p> <p>Elev: 120 m, Prom: 50 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16286.066724210546!2d125.41680082780934!3d6.628354437656385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c799a2e91fef%3A0x45831034101be4d0!2sKulasing%20Hill!5e1!3m2!1sen!2sph!4v1599003138824!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
