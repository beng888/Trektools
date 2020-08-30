var ifugaomap = L.map("ifugaomap").setView([16.8330792, 121.1710389], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(ifugaomap);

L.marker([16.5977263, 120.8987919], { icon: fIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pulag" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pulag</p> <p>Elev: 2928 m, Prom: 2928 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.533037874122!2d120.89041182872167!3d16.597520080635384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904accf133372f%3A0xa20b501379e7d400!2sMount%20Pulag!5e1!3m2!1sen!2sph!4v1598016806401!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.866667, 121.416667], { icon: fIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amuyan_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amuyao</p> <p>Elev: 2692 m, Prom: 830 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.42719114663!2d121.40707852876362!3d16.865853299091114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33901d65f279bde9%3A0xfc3f97aeba504b45!2sMount%20Amuyan!5e1!3m2!1sen!2sph!4v1598016975472!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.866667, 121.416667], { icon: fIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amuyan_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amuyao</p> <p>Elev: 2692 m, Prom: 830 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.42719114663!2d121.40707852876362!3d16.865853299091114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33901d65f279bde9%3A0xfc3f97aeba504b45!2sMount%20Amuyan!5e1!3m2!1sen!2sph!4v1598016975472!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.6466426, 120.8833181], { icon: fIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panatoan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panotoan</p> <p>Elev: 2687 m, Prom: 320 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.050265423064!2d120.87874522873206!3d16.664464472806323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cad1293c929f%3A0x237ec3a333950b8f!2sMount%20Panatoan!5e1!3m2!1sen!2sph!4v1598017090791!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.960833, 120.970556], { icon: fIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kalawitan</p> <p>Elev: 2672 m, Prom: 667 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16883.49657247562!2d120.96144674917407!3d16.96123530496806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fd5f20071ef41%3A0xf44eec07a86dd8de!2sMount%20Kalawitan%2C%20Bontoc%2C%20Mountain%20Province!5e1!3m2!1sen!2sph!4v1598017254164!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.845833, 120.941111], { icon: fIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kapiligan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kapiligan</p> <p>Elev: 2669 m, Prom: 636 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15692.132769332922!2d120.93235632876036!3d16.845297851522886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33902cf5fd6a7309%3A0xad151c6e8a2dec42!2sMount%20Kapiligan!5e1!3m2!1sen!2sph!4v1598017498086!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8307085, 120.9605513], { icon: fIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Napalauan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Napulauan</p> <p>Elev: 2612 m, Prom: 285 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.842492804659!2d120.96688891488179!3d16.854494022390984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33902dc7efff1dc7%3A0x94bad28551718caf!2sMount%20Napulauan!5e1!3m2!1sen!2sph!4v1598017565934!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8323069, 120.9148864], { icon: fIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Abao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Abao</p> <p>Elev: 2597 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15693.122930456297!2d120.90791192875848!3d16.833353352934804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33902d2077786545%3A0x5d1fcf732a5e5c22!2sMount%20Abao!5e1!3m2!1sen!2sph!4v1598017660641!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7, 120.883333], { icon: eIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tabeyo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tabayoc</p> <p>Elev: 2498 m, Prom: 185 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15705.020077516656!2d120.87735632873591!3d16.689186769908265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cb37a3f345bf%3A0x14283dd882cc545b!2sMount%20Tabeyo!5e1!3m2!1sen!2sph!4v1598018059743!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8523225, 120.9681709], { icon: eIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Peak</p> <p>Elev: 2274 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16621.590240769547!2d120.95838094704446!3d16.851116096245136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDUxJzA0LjAiTiAxMjDCsDU4JzAyLjAiRQ!5e1!3m2!1sen!2sph!4v1598017906587!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8073553, 120.9583404], { icon: eIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Peak</p> <p>Elev: 2259 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16898.0725472009!2d120.94719115340693!3d16.813894105654395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ4JzUwLjAiTiAxMjDCsDU3JzIyLjAiRQ!5e1!3m2!1sen!2sph!4v1598017886986!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.783333, 120.883333], { icon: eIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palugloko" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palugloko</p> <p>Elev: 2243 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.260368216355!2d120.87457852875065!3d16.783353358835743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cd459bcca1df%3A0x1e38b5e0b14a8ed5!2sMount%20Palugloko!5e1!3m2!1sen!2sph!4v1598018132922!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.739444, 120.95], { icon: eIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guibul" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guibul</p> <p>Elev: 2206 m, Prom: 437 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15700.950946697647!2d120.94180082874364!3d16.738631164101033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339033add5997429%3A0x66d8f481dd268182!2sMount%20Guibul!5e1!3m2!1sen!2sph!4v1598018239264!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.974722, 121.029167], { icon: eIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Polis" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Polis</p> <p>Elev: 2021 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15322.390624752548!2d121.01801366369364!3d16.965879805000274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fd64969ae8877%3A0x5c1d7d51a6498f5!2sMount%20Polis!5e1!3m2!1sen!2sph!4v1598018346840!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0296574, 121.2930954], { icon: dIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ampalauag" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ampalauag</p> <p>Elev: 1701 m, Prom: 410 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.756366306907!2d121.28457852878971!3d17.029742229611305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fe7a45a65aff1%3A0x86c599bca4002685!2sMount%20Ampalauag!5e1!3m2!1sen!2sph!4v1598018505710!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7681896, 121.011106], { icon: dIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nazagarray" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nazagarry</p> <p>Elev: 1527 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15698.84321118523!2d121.05624522874761!3d16.764186761093775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390301c5551cc41%3A0xfc83d8ef6a2ec74b!2sMount%20Nazagarray!5e1!3m2!1sen!2sph!4v1598018567291!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7603251, 121.034746], { icon: dIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Indalmogan</p> <p>Elev: 1520 m, Prom: 117 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.7903711960716!2d121.03255731488079!3d16.76033022499756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzM3LjIiTiAxMjHCsDAyJzA1LjEiRQ!5e1!3m2!1sen!2sph!4v1598018702033!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.880278, 121.1325], { icon: cIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Jamalapah" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Jamalapah</p> <p>Elev: 1422 m, Prom: 430 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15689.204370314388!2d121.12263412876595!3d16.880575647347822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339026fde721dea7%3A0x4bb32b5359812abb!2sMount%20Jamalapah!5e1!3m2!1sen!2sph!4v1598018772296!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7905446, 121.0523458], { icon: cIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Puloy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Puloy</p> <p>Elev: 1390 m, Prom: 106 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15696.70939770809!2d121.0434674287517!3d16.79002005804982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33902fbf60165437%3A0xed617c12733eb38c!2sMount%20Puloy!5e1!3m2!1sen!2sph!4v1598018830887!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.866667, 121.15], { icon: cIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kaanducuan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kaanducuan</p> <p>Elev: 1191 m, Prom: 81 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.357993446365!2d121.14124522876375!3d16.86668674899244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339026c2e997bced%3A0x4814f1c6b1512868!2sMount%20Kaanducuan!5e1!3m2!1sen!2sph!4v1598018902813!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.810833, 121.187222], { icon: cIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binhagan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binhagan</p> <p>Elev: 1160 m, Prom: 541 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15696.181186611784!2d121.1923563287527!3d16.796408957296393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339023a4ca7f066f%3A0x3634ae9cc98a2746!2sMount%20Binhagan!5e1!3m2!1sen!2sph!4v1598018960633!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7928531, 121.0816088], { icon: cIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kappugan</p> <p>Elev: 1039 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15609.386872751506!2d121.07285782356064!3d16.792858205761398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ3JzM0LjMiTiAxMjHCsDA0JzUzLjgiRQ!5e1!3m2!1sen!2sph!4v1598019170064!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7741536, 121.0813587], { icon: cIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Atade</p> <p>Elev: 1007 m, Prom: 42 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15044.611639122635!2d121.07270447869608!3d16.774158696250133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ2JzI3LjAiTiAxMjHCsDA0JzUyLjkiRQ!5e1!3m2!1sen!2sph!4v1598019663847!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.861944, 121.223611], { icon: bIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dome_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dome</p> <p>Elev: 660 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.081210966595!2d121.19680082876427!3d16.870020048597848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339020fd4d0b6625%3A0xb4d442abf6625d98!2sMount%20Dome!5e1!3m2!1sen!2sph!4v1598019961980!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.75, 121.283333], { icon: bIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mabitayan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mabittayon</p> <p>Elev: 635 m, Prom: 183 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15700.676205031592!2d121.27430082874413!3d16.741964463709014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339018179948dfe9%3A0x205ffed1bf04324a!2sMount%20Mabitayan!5e1!3m2!1sen!2sph!4v1598020120919!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.833333, 121.3], { icon: bIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baong</p> <p>Elev: 537 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15694.319414271551!2d121.29374522875622!3d16.818908954641067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33901f2f2a7d1923%3A0x12e21644d100930d!2sMount%20Baong!5e1!3m2!1sen!2sph!4v1598020187536!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.866667, 121.416667], { icon: bIcon })
  .addTo(ifugaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amuyan_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baong</p> <p>Elev: 387 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.427191146626!2d121.40707852876366!3d16.8658532990911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33901d65f279bde9%3A0xfc3f97aeba504b45!2sMount%20Amuyan!5e1!3m2!1sen!2sph!4v1598020260566!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
