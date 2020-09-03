var samarmap = L.map("samarmap").setView([11.819524, 124.823327], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(samarmap);
L.marker([12.0641144, 125.0542193], { icon: bIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Huraw" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Huraw</p> <p>Elev: 890 m, Prom: 890 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16033.562375375803!2d125.03707852814993!3d12.063909497174365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3309a2c938d28ba7%3A0x4e6b095bf66a4989!2sMount%20Huraw!5e1!3m2!1sen!2sph!4v1598895694302!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1527778, 124.935], { icon: bIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Yaua_(bukid_sa_Pilipinas,_lat_12,15,_long_124,94)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Capotoan</p> <p>Elev: 838 m, Prom: 616 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16028.226831408265!2d124.92624522815865!3d12.152798389245113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3309943a11b58a6b%3A0x13d094be54466440!2sMount%20Yaua!5e1!3m2!1sen!2sph!4v1598896034727!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.733333, 125.266667], { icon: bIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Yacgem" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Yacgem</p> <p>Elev: 607 m, Prom: 134 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16053.0652390561!2d125.25791192811847!3d11.733353926229514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308fe31b1fa101f%3A0xc2e44d3f43d5ee04!2sMount%20Yacgem!5e1!3m2!1sen!2sph!4v1598895752141!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1540539, 125.020082], { icon: bIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Canyaba" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canyaba</p> <p>Elev: 590 m, Prom: 153 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16028.394152479917!2d125.00791192815836!3d12.150020589493638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33099715551198a5%3A0x4d874fce6fb382cc!2sMount%20Canyaba!5e1!3m2!1sen!2sph!4v1598895777223!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1489361, 125.026313], { icon: bIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Yaua_(bukid_sa_Pilipinas,_lat_12,15,_long_125,03)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Yaua</p> <p>Elev: 545 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16028.46106614414!2d125.01763412815825!3d12.148909539593028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330997429f6534ad%3A0x7bcd55e27dfdc175!2sMount%20Yaua!5e1!3m2!1sen!2sph!4v1598896094727!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9130937, 124.3029047], { icon: bIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Opao</p> <p>Elev: 531 m, Prom: 531 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16042.740567387411!2d124.29383392813506!3d11.90947406083367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a777a4a32a5f51%3A0x93e79b87cd747af8!2sMount%20Opao!5e1!3m2!1sen!2sph!4v1598896118850!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.561389, 125.213889], { icon: bIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sohoton" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sohoton</p> <p>Elev: 514 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16066.510296848157!2d125.12457852809708!3d11.500020696328745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33085e848e179b15%3A0x6a706c7f30f637e6!2sMount%20Sohoton!5e1!3m2!1sen!2sph!4v1598896168733!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.75, 125.25], { icon: bIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caputian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caputian</p> <p>Elev: 506 m, Prom: 117 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16052.094682347777!2d125.24124522812!3d11.750020674780844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33090028fa5009c3%3A0xd30536cff2c9cd9d!2sMount%20Caputian!5e1!3m2!1sen!2sph!4v1598896198389!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6446896, 125.0872447], { icon: bIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Catalutuan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Catalutuan</p> <p>Elev: 504 m, Prom: 262 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16057.897616687927!2d125.09124522811075!3d11.650020683446813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330850e18ff1b9f9%3A0x25af2ca350f1e653!2sMount%20Catalutuan!5e1!3m2!1sen!2sph!4v1598896225734!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.423333, 125.209722], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Asgad" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Asgad</p> <p>Elev: 498 m, Prom: 144 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16070.869817187999!2d125.20096742809017!3d11.423353952858585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33086021fbe4f523%3A0x24a2b25eca419c36!2sMount%20Asgad!5e1!3m2!1sen!2sph!4v1598896255631!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.75, 125.166667], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cantomay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cantomay</p> <p>Elev: 475 m, Prom: 140 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16052.094682347777!2d125.15791192812001!3d11.750020674780844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330854d7426a722f%3A0x9f975455cc355d7a!2sMount%20Cantomay!5e1!3m2!1sen!2sph!4v1598896286631!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.907194, 124.4344122], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sto. Nino</p> <p>Elev: 468 m, Prom: 468 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17015.76398550225!2d124.42552076467057!3d11.907199231213536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU0JzI1LjkiTiAxMjTCsDI2JzAzLjkiRQ!5e1!3m2!1sen!2sph!4v1598896366352!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1825, 124.950278], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Saraug" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sarauag</p> <p>Elev: 433 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16026.568330423699!2d124.92930082816137!3d12.180298436782026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330994083cdd86eb%3A0xdc62d618ab028b10!2sMount%20Saraug!5e1!3m2!1sen!2sph!4v1598896426218!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9736395, 124.4232294], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Camandag_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Camandag</p> <p>Elev: 417 m, Prom: 417 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16113.380559400486!2d124.41439436783367!3d11.973644731226706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU4JzI1LjEiTiAxMjTCsDI1JzIzLjYiRQ!5e1!3m2!1sen!2sph!4v1598896510759!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.216667, 125.216667], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Round_Peak_(bukid_sa_Pilipinas,_Sidlakang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Round Peak</p> <p>Elev: 358 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16082.478201001071!2d125.20791192807205!3d11.216687370277755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308875643b7222b%3A0x95e01db25b340ef9!2sRound%20Peak!5e1!3m2!1sen!2sph!4v1598896558124!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6413657, 124.8590166], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Campundoy</p> <p>Elev: 357 m, Prom: 357 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16804.963317695896!2d124.85018921076882!3d11.641370934245556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM4JzI4LjkiTiAxMjTCsDUxJzMyLjUiRQ!5e1!3m2!1sen!2sph!4v1598896614210!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6374827, 124.8576851], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinuy-an</p> <p>Elev: 351 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16840.274864387913!2d124.84883379865327!3d11.637487937137001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM4JzE0LjkiTiAxMjTCsDUxJzI3LjciRQ!5e1!3m2!1sen!2sph!4v1598896698832!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.2409243, 124.6421317], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Adga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Adga</p> <p>Elev: 347 m, Prom: 194 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16022.903272343628!2d124.63346742816739!3d12.2408539313417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3309e5cad9975333%3A0x8397d5024e83866c!2sMount%20Adga!5e1!3m2!1sen!2sph!4v1598896730617!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.183333, 125.233333], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Peak_(bukid_sa_Pilipinas,_Sidlakang_Kabisay-an,_Province_of_Samar)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Peak</p> <p>Elev: 340 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16084.330930435086!2d125.22457852806913!3d11.183354023062282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308809390913c1f%3A0x8ed8c10a26ad6d7c!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1598896774222!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.983333, 125.216667], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabalantian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabalantian</p> <p>Elev: 332 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16038.36438124524!2d125.20791192814215!3d11.983353904317767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330909ffbbbe60d5%3A0x19d99177465c3a6d!2sMount%20Cabalantian!5e1!3m2!1sen!2sph!4v1598896823735!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9333333, 124.3166667], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabalantian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Costa Rica</p> <p>Elev: 286 m, Prom: 104 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16040.88233582286!2d124.31592462813806!3d11.940900208066166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a7775bc29dd245%3A0xe80256af40b0f4fc!2sMount%20Costa%20Rica!5e1!3m2!1sen!2sph!4v1598896869505!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.561389, 125.213889], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sohoton" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sohoton</p> <p>Elev: 280 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16066.510296848157!2d125.12457852809708!3d11.500020696328745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33085e848e179b15%3A0x6a706c7f30f637e6!2sMount%20Sohoton!5e1!3m2!1sen!2sph!4v1598896898011!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9, 125.05], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pua" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pua</p> <p>Elev: 278 m, Prom: 111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16043.298603679601!2d125.04124522813419!3d11.900020661664957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3309afcfd85555fb%3A0xa42c7617805e9c5f!2sMount%20Pua!5e1!3m2!1sen!2sph!4v1598896923946!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.266667, 125.25], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pasayahon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pasayahon</p> <p>Elev: 268 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16079.688902180469!2d125.24124522807637!3d11.266687366087927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330887c8faf9e265%3A0x9a4ba66904c40976!2sMount%20Pasayahon!5e1!3m2!1sen!2sph!4v1598896950531!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.2893217, 124.9771129], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tinaogan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinaogan</p> <p>Elev: 263 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16057.897616687927!2d124.84124522811074!3d11.650020683446808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330837f77552b33f%3A0xec471879dfeb3ac3!2sMount%20Tinaogan!5e1!3m2!1sen!2sph!4v1598896974960!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.019107, 124.936223], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Durungan</p> <p>Elev: 241 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16135.628805644148!2d124.92744747651295!3d12.0191122287922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAxJzA4LjgiTiAxMjTCsDU2JzEwLjQiRQ!5e1!3m2!1sen!2sph!4v1598897025485!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.3, 125], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Danglay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Danglay</p> <p>Elev: 239 m, Prom: 218 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16077.822565578648!2d124.99124522807928!3d11.300020713286026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330870342b4752d3%3A0x61a4b001abecf359!2sMount%20Danglay!5e1!3m2!1sen!2sph!4v1598897091001!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9410887, 124.3670822], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kirikite_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kirikite</p> <p>Elev: 212 m, Prom: 212 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16040.563444770352!2d124.3594837281386!3d11.94628505759134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a77986ddfe14bd%3A0xab912dcaaac25ec0!2sKirikite%20Island!5e1!3m2!1sen!2sph!4v1598897147710!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.166667, 124.666667], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Conduyson" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Conduyson</p> <p>Elev: 207 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16027.389666978419!2d124.65791192816003!3d12.166687288001704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3309e7c6da041e63%3A0xfcfb1bcc92033603!2sMount%20Conduyson!5e1!3m2!1sen!2sph!4v1598897189274!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.85, 125.116667], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pangnagagtan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pangnagagtan</p> <p>Elev: 192 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16046.242850555516!2d125.10791192812938!3d11.850020666052506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3309aeaf6f34b137%3A0xc623943ef4a9eb9f!2sMount%20Pangnagagtan!5e1!3m2!1sen!2sph!4v1598897213697!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.866667, 125.066667], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Camangan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Camangan</p> <p>Elev: 191 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16045.262790625888!2d125.05791192813102!3d11.86668736459172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3309ae69612e737b%3A0xa5de47d2edbe94a1!2sMount%20Camangan!5e1!3m2!1sen!2sph!4v1598897243449!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([12.0104543, 124.8028884], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Lambda Peak</p> <p>Elev: 134 m, Prom: 124 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16327.823978582679!2d124.79405577986296!3d12.01045953033062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzM3LjYiTiAxMjTCsDQ4JzEwLjQiRQ!5e1!3m2!1sen!2sph!4v1598897288520!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.59176, 124.8836621], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Labuan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Labuan</p> <p>Elev: 124, Prom: 124 </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16060.780741783641!2d124.87457852810614!3d11.600020687756404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33084774bc599e71%3A0x853d16180bf39af2!2sMount%20Labuan!5e1!3m2!1sen!2sph!4v1598897344688!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([12.0020798, 124.7939113], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Bukid Dau Peak</p> <p>Elev: 112 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16350.242664567531!2d124.78512080387708!3d12.002085026271121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzA3LjUiTiAxMjTCsDQ3JzM4LjEiRQ!5e1!3m2!1sen!2sph!4v1598897413626!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9624719, 124.735723], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kaluluma</p> <p>Elev: 108 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16246.20438241736!2d124.72691044185581!3d11.96247713011791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU3JzQ0LjkiTiAxMjTCsDQ0JzA4LjYiRQ!5e1!3m2!1sen!2sph!4v1598897505488!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0167377, 124.8092007], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Bukid han Paluyu</p> <p>Elev: 92 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16195.282292403648!2d124.80039788351696!3d12.01674292363542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAxJzAwLjMiTiAxMjTCsDQ4JzMzLjEiRQ!5e1!3m2!1sen!2sph!4v1598897565009!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0178207, 124.8098394], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Peter Peak</p> <p>Elev: 83 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16223.237857393531!2d124.80104684145364!3d12.017825930387506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAxJzA0LjIiTiAxMjTCsDQ4JzM1LjQiRQ!5e1!3m2!1sen!2sph!4v1598897622939!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9631662, 124.7231591], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bukid</p> <p>Elev: 69 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16081.520766772295!2d124.71438856671529!3d11.963171432466469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU3JzQ3LjQiTiAxMjTCsDQzJzIzLjQiRQ!5e1!3m2!1sen!2sph!4v1598897693929!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9685888, 124.7215939], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Bukid han Naluyu</p> <p>Elev: 42 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16003.394006064102!2d124.71285037648481!3d11.96859403047775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU4JzA2LjkiTiAxMjTCsDQzJzE3LjciRQ!5e1!3m2!1sen!2sph!4v1598897763565!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.079023, 124.5918943], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Dagum Hills</p> <p>Elev: 40 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16001.21197973865!2d124.58314570529637!3d12.079028228317991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA0JzQ0LjUiTiAxMjTCsDM1JzMwLjgiRQ!5e1!3m2!1sen!2sph!4v1598897809543!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9045389, 124.7858579], { icon: aIcon })
  .addTo(samarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pagi_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pagi Island</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16042.678881358468!2d124.77710653082622!3d11.904544125428743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDU0JzE2LjMiTiAxMjTCsDQ3JzA5LjEiRQ!5e1!3m2!1sen!2sph!4v1598897865578!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
