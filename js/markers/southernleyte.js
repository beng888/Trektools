var southernleytemap = L.map("southernleytemap").setView(
  [10.3346206, 125.1708741],
  10
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(southernleytemap);
L.marker([10.3624251, 125.0706812], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bitanhuan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bitanjuan</p> <p>Elev: 965 m, Prom: 819 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16128.249526950067!2d125.06180082800273!3d10.362242989456231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33071ae8b8bf942b%3A0x5e011cc13f3109b3!2sMount%20Bitanhuan!5e1!3m2!1sen!2sph!4v1598927757546!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.453889, 124.9470443], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Llave" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Llave</p> <p>Elev: 950 m, Prom: 507 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16122.890135170515!2d124.92235632801062!3d10.46585408131162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33070c1374f4c5a1%3A0x701a8d43a8dab033!2sMount%20Llave!5e1!3m2!1sen!2sph!4v1598927875442!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.45, 125.1], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nacolod" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nacolod</p> <p>Elev: 916 m, Prom: 195 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16123.957582736528!2d125.08430082800902!3d10.4452985829328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33070430bb1d6155%3A0xfa5581257d04cde3!2sMount%20Nacolod!5e1!3m2!1sen!2sph!4v1598927898357!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5010161, 125.053369], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Milo_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Milo</p> <p>Elev: 910 m, Prom: 126 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16121.024344090514!2d125.04457852801339!3d10.501687478479147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307063331ced16d%3A0x5f4f883507c3a1be!2sMount%20Milo!5e1!3m2!1sen!2sph!4v1598927931330!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.2851159, 125.2178533], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cantocloc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cantocloc</p> <p>Elev: 905 m, Prom: 766 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16131.982498525645!2d125.21152302799725!3d10.289465245136764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3306e1ff4b44a7e1%3A0xb6e1cb6bf578d48c!2sMount%20Cantocloc!5e1!3m2!1sen!2sph!4v1598927958119!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.2777127, 125.2192013], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabalian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabalian</p> <p>Elev: 858 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32264.89776367755!2d125.20637497231058!3d10.280336856988056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3306e1fade60c95d%3A0x93f225fcc8ea08b5!2sMount%20Cabalian!5e1!3m2!1sen!2sph!4v1598927990891!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.3, 125.2166667], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cantocloc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cantoloc</p> <p>Elev: 804 m, Prom: 189 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16131.610424954211!2d125.20311352799773!3d10.296741994570299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33071df9144b5d7b%3A0x7053a092b6461c94!2sMount%20Cantoloc!5e1!3m2!1sen!2sph!4v1598928031466!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.483333, 125.116667], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ilihan_(bukid_sa_Pilipinas,_Sidlakang_Kabisay-an,_Habagatang_Leyte,_lat_10,48,_long_125,12)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ilihan</p> <p>Elev: 798 m, Prom: 188 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4030.4951369216087!2d125.11447831483517!3d10.4833382674016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI5JzAwLjAiTiAxMjXCsDA3JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598928218641!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5868325, 125.1157843], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Hingatungan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Hingatungan</p> <p>Elev: 745 m, Prom: 386 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32230.902353179416!2d125.09123302241204!3d10.608010098200918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307a94979ae0dab%3A0x9780f475656acb10!2sMount%20Hingatungan!5e1!3m2!1sen!2sph!4v1598928246906!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.9320651, 125.2720662], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Nelangcapan</p> <p>Elev: 699 m, Prom: 698 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16149.957013209883!2d125.26321647797131!3d9.931652872580507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3306d4e5e649fcf9%3A0xcfe8abc9752736f9!2sMount%20Nilangcapan!5e1!3m2!1sen!2sph!4v1598928298529!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.254722, 124.915833], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lunas_(bukid_sa_Pilipinas,_Sidlakang_Kabisay-an,_Habagatang_Leyte)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lunas</p> <p>Elev: 695 m, Prom: 556 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16133.754325087993!2d124.90707852799464!3d10.254743047835206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307158645d3ee2f%3A0x933a27e76ba11cad!2sMount%20Lunas!5e1!3m2!1sen!2sph!4v1598928350195!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.247778, 124.85], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Janlog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Janlog</p> <p>Elev: 587 m, Prom: 271 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16134.107979903847!2d124.84124522799416!3d10.247798598373992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33074010355ff56d%3A0xc617e6ee3785af79!2sMount%20Janlog!5e1!3m2!1sen!2sph!4v1598928384773!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.478611, 124.997778], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panjongon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pangonjon</p> <p>Elev: 585 m, Prom: 140 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16122.557936717802!2d124.98096742801113!3d10.472242980807199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307092b51051229%3A0xbceba22cc11f1166!2sMount%20Panjongon!5e1!3m2!1sen!2sph!4v1598928414850!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.0942611, 125.1619053], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baganting" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baganting</p> <p>Elev: 572 m, Prom: 297 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16141.730870155661!2d125.15735632798308!3d10.096965210001413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307264df0bade73%3A0x31fc40cea72483dc!2sMount%20Baganting!5e1!3m2!1sen!2sph!4v1598928439172!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.22, 124.915], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Camunjan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Camunjan</p> <p>Elev: 565 m, Prom: 113 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16135.520226429571!2d124.90624522799206!3d10.220020850526064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33073e50e31deed3%3A0x64128ce7f06f9519!2sMount%20Camunjan!5e1!3m2!1sen!2sph!4v1598928464061!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1, 125.2], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Siaob" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Siaob</p> <p>Elev: 555 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16141.57755475592!2d125.19124522798332!3d10.10002080976728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307279c4be0f877%3A0xa6a362ae833a8da8!2sMount%20Siaob!5e1!3m2!1sen!2sph!4v1598928489148!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.2, 124.916667], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sompungon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sompungon</p> <p>Elev: 512 m, Prom: 50 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16136.534696611518!2d124.90791192799061!3d10.200020852072559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33073ee5ec47a6af%3A0x3b464db1736e0bdb!2sMount%20Sompungon!5e1!3m2!1sen!2sph!4v1598928515589!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.0113848, 125.2530063], { icon: bIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caningan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caningan</p> <p>Elev: 505 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16146.21223404457!2d125.24568962797665!3d10.007243016849984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3306d6596a4c8f05%3A0xdb56324ee4425aa2!2sMount%20Caningan!5e1!3m2!1sen!2sph!4v1598928537069!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5208333, 125.1148665], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ilihan_(bukid_sa_Pilipinas,_Sidlakang_Kabisay-an,_Habagatang_Leyte,_lat_10,51,_long_125,11)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ilihan</p> <p>Elev: 489 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16120.720016151434!2d125.10374522801384!3d10.507520778017291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307073bb74c76d5%3A0x252efaff8dc50ab3!2sMount%20Ilihan!5e1!3m2!1sen!2sph!4v1598928119732!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.233333, 124.95], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Canumay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canumay</p> <p>Elev: 477 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16134.84282494618!2d124.94124522799308!3d10.233354099493676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33073e09f9ddc7e1%3A0xdc7ee0d2aa6a999e!2sMount%20Canumay!5e1!3m2!1sen!2sph!4v1598928565542!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.283333, 124.916667], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guilonon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guilonon</p> <p>Elev: 461 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16132.29476925378!2d124.90791192799678!3d10.28335414561224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330715ae3bbb7e0f%3A0x2b0b4b8ea6a7566f!2sMount%20Guilonon!5e1!3m2!1sen!2sph!4v1598928588978!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.166667, 124.916667], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anislag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anislag</p> <p>Elev: 430 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16138.221111723718!2d124.90791192798815!3d10.16668750464446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307392fe90f1caf%3A0x52430f89a10661d!2sMount%20Anislag!5e1!3m2!1sen!2sph!4v1598928610689!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.361667, 125.143056], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Catmon_(bukid_sa_Pilipinas,_Sidlakang_Kabisay-an,_Habagatang_Leyte)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Catmon</p> <p>Elev: 418 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16128.063626006617!2d125.13235632800297!3d10.365854089173506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33071cba670e7943%3A0x69d076a89f4bc84!2sMount%20Catmon!5e1!3m2!1sen!2sph!4v1598928643967!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.333333, 125.2], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tamar" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tamar</p> <p>Elev: 402 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16129.563303798537!2d125.18624522800077!3d10.336687491454713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33071d737ca19de3%3A0x74d0f27ee49ca7f!2sMount%20Tamar!5e1!3m2!1sen!2sph!4v1598928685962!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.083333, 125.183333], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Marayag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Marayag</p> <p>Elev: 393 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16142.413249848725!2d125.17457852798209!3d10.083354161043612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330727c7b535ec27%3A0x24c722e04af19eb3!2sMount%20Marayag!5e1!3m2!1sen!2sph!4v1598928709716!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.166667, 124.966667], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sauejon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sauejon</p> <p>Elev: 378 m, Prom: 79 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16138.221111723718!2d124.95791192798815!3d10.166687504644457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33073bf6879ee92f%3A0x9317f06888156774!2sMount%20Sauejon!5e1!3m2!1sen!2sph!4v1598928732724!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.383333, 125.1], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Abuyog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Abuyog</p> <p>Elev: 369 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16127.505533639327!2d125.0859674280038!3d10.376687488324828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33071b31ef1fc59b%3A0xf566a4d400aa4898!2sMount%20Abuyog!5e1!3m2!1sen!2sph!4v1598928755292!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.060556, 125.224444], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Jinauanan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Jinauanan</p> <p>Elev: 360 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16143.553157243608!2d125.21568962798047!3d10.060576412785112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3306d7f86aadef99%3A0x81e00bc725dc7618!2sMount%20Jinauanan!5e1!3m2!1sen!2sph!4v1598928777975!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.116667, 124.95], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagacay_(bukid_sa_Pilipinas,_Sidlakang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagacay</p> <p>Elev: 323 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16140.740491318002!2d124.94124522798452!3d10.116687508489193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307398a7b56b59f%3A0xdffef0b18d0cc54d!2sMount%20Bagacay!5e1!3m2!1sen!2sph!4v1598928805227!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.15, 124.95], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lana" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lana</p> <p>Elev: 317 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16139.062272248231!2d124.94124522798697!3d10.150020805927781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330739602e0721c7%3A0x35c8ac4f67d5f092!2sMount%20Lana!5e1!3m2!1sen!2sph!4v1598928841502!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.083333, 124.983333], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Capinajan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Capinajan</p> <p>Elev: 298 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16142.413249848725!2d124.97457852798208!3d10.083354161043614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307309ad17720dd%3A0x108f3beb4c7cafb!2sMount%20Capinajan!5e1!3m2!1sen!2sph!4v1598928871752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.3878992, 125.2314012], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Anan_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Anan Hills</p> <p>Elev: 258 m, Prom: 248 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16127.376662005834!2d125.21791192800399!3d10.379187488128883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3306fd44b984594f%3A0x3ac58fe773e03b7e!2sAnan%20Hills!5e1!3m2!1sen!2sph!4v1598928895628!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.35, 124.9], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cagbano" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cagbano</p> <p>Elev: 251 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16129.35752610383!2d124.89764207800107!3d10.340694391141636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307139db8cd07cf%3A0x495129fd0d079c61!2sMount%20Cagbano!5e1!3m2!1sen!2sph!4v1598928918889!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.216667, 125.1], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gacat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gacat</p> <p>Elev: 205 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16135.689442174717!2d125.09124522799185!3d10.216687500783992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3307226c2fce9ab1%3A0xbc0749cb0ad6e377!2sMount%20Gacat!5e1!3m2!1sen!2sph!4v1598928942889!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1833333, 124.8166667], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cagbatin" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cagbatin</p> <p>Elev: 199 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16137.378590702387!2d124.80791192798938!3d10.183354103359383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330746d5c3b0b183%3A0xc153715f85f4f3ef!2sMount%20Cagbatin!5e1!3m2!1sen!2sph!4v1598928970575!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.183333, 124.816667], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Malinao</p> <p>Elev: 191 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16277.134960822248!2d124.80788508331993!3d10.183338265017408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDExJzAwLjAiTiAxMjTCsDQ5JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598929075370!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1666667, 124.85], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Peak_(bukid_sa_Pilipinas,_Sidlakang_Kabisay-an,_Habagatang_Leyte)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Peak</p> <p>Elev: 134 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16138.221111723722!2d124.8412452279881!3d10.16668750464446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33074743202757eb%3A0xf050c6509a89fb40!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1598929116055!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.15, 124.766667], { icon: aIcon })
  .addTo(southernleytemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Green Cone</p> <p>Elev: 13 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4034.7657638849773!2d124.76447831483341!3d10.150005273218223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA5JzAwLjAiTiAxMjTCsDQ2JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598929206017!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
