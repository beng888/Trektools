var bukidnonmap = L.map("bukidnonmap").setView([8.0515054, 124.9229946], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(bukidnonmap);

L.marker([8.1162152, 124.9226177], { icon: fIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Dulang-dulang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dulang-Dulang</p> <p>Elev: 2938 m, Prom: 2444 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16231.378871896894!2d124.91575232786508!3d8.117629699272587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff0a462202f681%3A0x14711e0e7b1909f2!2sMount%20Dulang-Dulang!5e1!3m2!1sen!2sph!4v1599054335315!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.1396623, 124.9160847], { icon: fIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Katanglad" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kitanglad</p> <p>Elev: 2879 m, Prom: 363 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16231.378871896894!2d124.91575232786508!3d8.117629699272587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff0a7a6c0e03b1%3A0x391de9fc57418cc9!2sMount%20Kitanglad!5e1!3m2!1sen!2sph!4v1599054391250!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9550885, 124.8026895], { icon: fIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kalatungan_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kalatungan</p> <p>Elev: 2875 m, Prom: 1496 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16237.884059431784!2d124.79374522785758!3d7.955021009610318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff6c423c9dba7d%3A0xa0a75a172b52d5f4!2sMount%20Kalatungan!5e1!3m2!1sen!2sph!4v1599054462785!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9496782, 124.7886369], { icon: fIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Makaupao (Wiji)</p> <p>Elev: 2814 m, Prom: 276 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16278.745559995048!2d124.78020649080577!3d7.949668485654452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff6c113aafb4bf%3A0x8b5af00864d56c8d!2sMakaupaw%20Summit%20Campsite!5e1!3m2!1sen!2sph!4v1599054547199!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.1225, 124.876944], { icon: fIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ma-agnaw" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maagnaw</p> <p>Elev: 2738 m, Prom: 327 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4067.3718320787534!2d125.49869981482348!3d7.11268091800654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f913b7ef392603%3A0x594ab85f197bf0ea!2sMount%20Maagnaw%2C%20Tugbok%2C%20Davao%20City%2C%20Davao%20del%20Sur!5e1!3m2!1sen!2sph!4v1599054610249!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.135833, 124.929167], { icon: fIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alanib" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alanib</p> <p>Elev: 2723 m, Prom: 190 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16230.641645481423!2d124.92041192786593!3d8.135854298103494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff0a0d504f42c7%3A0x9522503326e81ad7!2sMount%20Alanib!5e1!3m2!1sen!2sph!4v1599054640898!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.1358855, 124.9279537], { icon: fIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tuminungan</p> <p>Elev: 2709 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16605.83839969849!2d124.91902802591076!3d8.135890795455271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDgnMDkuMiJOIDEyNMKwNTUnNDAuNiJF!5e1!3m2!1sen!2sph!4v1599054719299!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.1082346, 124.9388043], { icon: fIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lumuluyaw</p> <p>Elev: 2694 m, Prom: 171 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16923.419785282786!2d124.92985722808534!3d8.108239897387229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDYnMjkuNiJOIDEyNMKwNTYnMTkuNyJF!5e1!3m2!1sen!2sph!4v1599054791092!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.1395364, 124.8549638], { icon: fIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nanluyaw" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nanluyaw</p> <p>Elev: 2603 m, Prom: 321 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16230.450349851555!2d124.84457852786613!3d8.140576597800216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff754fa7ba775d%3A0xe1a06be368a5ac85!2sMount%20Nanluyaw!5e1!3m2!1sen!2sph!4v1599054834028!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.5993056, 125.0978929], { icon: eIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangabon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangabon</p> <p>Elev: 2477 m, Prom: 1267 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16211.383049713264!2d125.08957852788912!3d8.598354267728347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffd1bb75d569df%3A0xeba4985c17f2e30a!2sMount%20Mangabon!5e1!3m2!1sen!2sph!4v1599054858718!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9563885, 124.8772214], { icon: eIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kilakron" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kilakron</p> <p>Elev: 2379 m, Prom: 264 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16237.829049974713!2d124.86846742785767!3d7.956409909522732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff1324c42c98ef%3A0x561077e55a9560a6!2sMount%20Kilakron!5e1!3m2!1sen!2sph!4v1599054881686!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.1370685, 124.8097969], { icon: eIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nangkabulos</p> <p>Elev: 2378 m, Prom: 286 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17805.671347450603!2d124.80082278569957!3d8.137073791711714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDgnMTMuNSJOIDEyNMKwNDgnMzUuMyJF!5e1!3m2!1sen!2sph!4v1599054939805!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.117778, 124.980833], { icon: eIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kaatoan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kaatoan</p> <p>Elev: 2176 m, Prom: 340 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16231.372038966168!2d124.9720785278651!3d8.11779879926175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff09b90a4efa7d%3A0xc592bbd247504a33!2sMount%20Kaatoan!5e1!3m2!1sen!2sph!4v1599054977466!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.396111, 125.075278], { icon: eIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tago" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tago</p> <p>Elev: 2066 m, Prom: 820 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16220.188228864585!2d125.07492537787833!3d8.39003733157787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffb700c2c342db%3A0xaf48335d4e24f3c0!2sMount%20Tago!5e1!3m2!1sen!2sph!4v1599055010729!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.570347, 125.1179444], { icon: dIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calabugao</p> <p>Elev: 1887 m, Prom: 113 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.079937625967!2d120.55041192868477!3d16.356686808576516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a00b397d720f%3A0x6611f133ab8aabfe!2sMount%20Cabuyao!5e1!3m2!1sen!2sph!4v1599055039519!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.1540056, 124.7541545], { icon: dIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Imbayao</p> <p>Elev: 1871 m, Prom: 415 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17100.91127675737!2d124.74515477341407!3d8.154010893471318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDknMTQuNCJOIDEyNMKwNDUnMTUuMCJF!5e1!3m2!1sen!2sph!4v1599055113102!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.383333, 125.1], { icon: dIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ananaso" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ananaso</p> <p>Elev: 1858 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16220.467160151984!2d125.091245227878!3d8.38335428201762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffb6f422a712ad%3A0x51127f82f005be!2sMount%20Ananaso!5e1!3m2!1sen!2sph!4v1599055233547!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([0.5666667, 125.1166667], { icon: dIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinalagas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sinalagas</p> <p>Elev: 1784 m, Prom: 26 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16212.73535654493!2d125.10791192788743!3d8.566687619851384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffce0345346223%3A0x199b33a4c1fd84ee!2sMount%20Sinalagas!5e1!3m2!1sen!2sph!4v1599055184056!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.765556, 125.229444], { icon: dIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tangulang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tangulang</p> <p>Elev: 1670 m, Prom: 990 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16245.297863193904!2d125.22068962784935!3d7.765576621441955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedf4271208647%3A0xfad790040b40f7f7!2sMount%20Tangulang!5e1!3m2!1sen!2sph!4v1599055258480!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9167056, 124.8480515], { icon: dIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maluso_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maluso Hill</p> <p>Elev: 1645 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.39854101332!2d124.8412452278559!3d7.916687712022833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff6b460acb54c1%3A0xa517de0e4d0bd37d!2sMaluso%20Hill!5e1!3m2!1sen!2sph!4v1599055284359!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9166671, 124.85], { icon: dIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Itabingon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Itabingon Hill</p> <p>Elev: 1613 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.39854101332!2d124.8412452278559!3d7.916687712022833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff6b460acb54c1%3A0xf9e5044eb77695cc!2sItabingon%20Hill!5e1!3m2!1sen!2sph!4v1599055308989!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.921389, 124.636389], { icon: dIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pudung_Peaks" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pudung Peaks</p> <p>Elev: 1560 m, Prom: 319 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.212367717877!2d124.62763412785607!3d7.921409911726142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff66f9857f8821%3A0xd01167a7cec2271b!2sPudung%20Peaks!5e1!3m2!1sen!2sph!4v1599055338580!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.333333, 125.116667], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Soldab" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Soldab</p> <p>Elev: 1453 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16222.54701427424!2d125.10791192787549!3d8.33335428529865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffb15cba2345dd%3A0xee59afecd63fe84e!2sMount%20Soldab!5e1!3m2!1sen!2sph!4v1599055363261!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.533333, 125.233333], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amaloi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amaloi</p> <p>Elev: 1399 m, Prom: 201 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16214.153488633609!2d125.22457852788567!3d8.533354272079295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe32c3a61130d5%3A0x10a514b8f773a1f4!2sMount%20Amaloi!5e1!3m2!1sen!2sph!4v1599055386338!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.623333, 125.268056], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kibundo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kibundo</p> <p>Elev: 1336 m, Prom: 307 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.746946444477!2d125.25930082784345!3d7.623354330174195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed6f04f557aeb%3A0xbc923ad73151cc5f!2sMount%20Kibundo!5e1!3m2!1sen!2sph!4v1599055414324!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.083333, 125.033333], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kalindauagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kalindauagan</p> <p>Elev: 1312 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16232.760940941875!2d125.02457852786345!3d8.083354301465606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff089eab515c9f%3A0x4256e99d1e918e95!2sMount%20Kalindauagan!5e1!3m2!1sen!2sph!4v1599055441336!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.933333, 124.633333], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kiliangliang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kiliangliang</p> <p>Elev: 1279 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16238.740963977727!2d124.62457852785663!3d7.933354360975058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff668cd9bbb00b%3A0x85fa0906a1475424!2sMount%20Kiliangliang!5e1!3m2!1sen!2sph!4v1599055464145!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.640833, 125.303056], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malambo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malambo</p> <p>Elev: 1278 m, Prom: 306 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.081855788578!2d125.29430082784415!3d7.640854329106675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed0cd4c20fd1d%3A0x45b3aecc42954851!2sMount%20Malambo!5e1!3m2!1sen!2sph!4v1599055490538!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8700626, 124.7674422], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Panagoawan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Panagoawan Hill</p> <p>Elev: 1260 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16241.36302920159!2d124.75791192785368!3d7.866687715155539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff69fdb1766267%3A0xf05ab76d50708c3!2sPanagoawan%20Hill!5e1!3m2!1sen!2sph!4v1599055515099!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8279733, 124.6930647], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Pudong Hill</p> <p>Elev: 1232 m, Prom: 206 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16801.860387915287!2d124.68420155649333!3d7.827978603412458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDknNDAuNyJOIDEyNMKwNDEnMzUuMCJF!5e1!3m2!1sen!2sph!4v1599055589211!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9, 124.85], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Topolohon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Topolohon Hill</p> <p>Elev: 1231 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16240.054745906327!2d124.84124522785515!3d7.900021013068837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff6b2597e27f6b%3A0x19f538370eeeaa9a!2sTopolohon%20Hill!5e1!3m2!1sen!2sph!4v1599055638246!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.966667, 124.95], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Balanga_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Balanga Hill</p> <p>Elev: 1226 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16237.421685818788!2d124.94124522785815!3d7.966687708874215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff12280564bf9f%3A0xb582cf5209d616e0!2sBalanga%20Hill!5e1!3m2!1sen!2sph!4v1599055662986!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8793671, 124.8119302], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Saluyong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Saluyong</p> <p>Elev: 1226 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16241.36302920159!2d124.80791192785371!3d7.866687715155541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff6a7da171e835%3A0xe7b117b75f20d73d!2sMount%20Saluyong!5e1!3m2!1sen!2sph!4v1599055688587!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.916667, 124.666667], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balabag_(bukid_sa_Pilipinas,_Amihanang_Mindanao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balabag</p> <p>Elev: 1211 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.39854101332!2d124.6579119278559!3d7.916687712022836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff66368c874127%3A0xbf63ce8b0e934fb9!2sMount%20Balabag!5e1!3m2!1sen!2sph!4v1599055730640!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.883333, 124.866667], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Macatuay_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Macatuay Hill</p> <p>Elev: 1194 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16240.70957662643!2d124.85791192785442!3d7.883354314113082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff152df31c1619%3A0xa459105ba59de10!2sMacatuay%20Hill!5e1!3m2!1sen!2sph!4v1599055767130!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8166667, 124.925], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Iniaoan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iniaoan</p> <p>Elev: 1186 m, Prom: 481 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16243.152945340506!2d123.91624522785172!3d7.820854368013217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255ce4dde55277b%3A0x3c044e95649ccf0c!2sMount%20Iniaoan!5e1!3m2!1sen!2sph!4v1599055814476!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.2593108, 125.054546], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kibuwa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kibuwa</p> <p>Elev: 1172 m, Prom: 337 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16225.724035116797!2d125.03636482787172!3d8.256397890317562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffaf8fc91ae1ed%3A0x644bdf4d5b42bd8a!2sMount%20Kibuwa!5e1!3m2!1sen!2sph!4v1599055856894!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.283333, 125.15], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pagalongan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pagalongan</p> <p>Elev: 1168 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16224.614514223496!2d125.14124522787304!3d8.283354288563805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffb26cc095e3dd%3A0xdea425b0db2e2ad6!2sMount%20Pagalongan!5e1!3m2!1sen!2sph!4v1599055883662!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.785833, 124.797222], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tagoan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagoan</p> <p>Elev: 1155 m, Prom: 411 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.512792610114!2d124.7884674278502!3d7.78585432018644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff46ca8a009bed%3A0x13d2cf3160de6d0f!2sMount%20Tagoan!5e1!3m2!1sen!2sph!4v1599055909684!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8666667, 124.6666667], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Kabaritan</p> <p>Elev: 1118 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16178.601828791125!2d124.65790969779471!3d7.866672002894784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTInMDAuMCJOIDEyNMKwNDAnMDAuMCJF!5e1!3m2!1sen!2sph!4v1599055971436!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.2129764, 125.0969423], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baclasan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baclasan</p> <p>Elev: 1077 m, Prom: 235 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16228.032888121883!2d125.091245227869!3d8.200020993970448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffa9349ab16d8f%3A0x81bed4e4a90bbf04!2sMount%20Baclasan!5e1!3m2!1sen!2sph!4v1599056006116!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.84, 124.9283333], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kolokol" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Koloko</p> <p>Elev: 1074 m, Prom: 113 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16833.389157747955!2d124.91948730178864!3d7.8400053011540916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTAnMjQuMCJOIDEyNMKwNTUnNDIuMCJF!5e1!3m2!1sen!2sph!4v1599056252081!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.666944, 125.3225], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talemo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talemo</p> <p>Elev: 1070 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.08668034461!2d125.3137452278452!3d7.666965427510232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32feda0af259ab99%3A0xfdd6b2b989cd4426!2sMount%20Talemo!5e1!3m2!1sen!2sph!4v1599056087361!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7622134, 124.8277791], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kidongin</p> <p>Elev: 1067 m, Prom: 209 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17172.748436423484!2d124.81885914270602!3d7.762218701277605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDUnNDQuMCJOIDEyNMKwNDknNDAuMCJF!5e1!3m2!1sen!2sph!4v1599056138016!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.837222, 124.9275], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kolokol" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kolokol</p> <p>Elev: 1055 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.514110257365!2d124.91874522785241!3d7.83724321699292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff3e3d96bdcc95%3A0x4995ae94e69ef157!2sMount%20Kolokol!5e1!3m2!1sen!2sph!4v1599056194462!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.866667, 124.85], { icon: cIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sarayong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sarayong Hill</p> <p>Elev: 1046 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16833.389157747955!2d124.91948730178864!3d7.8400053011540916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff6abab8078017%3A0x73079dfbfbdd01c3!2sSarayong%20Hill!5e1!3m2!1sen!2sph!4v1599056285287!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.125, 124.6833333], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Ticalan</p> <p>Elev: 993 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16545.327117117795!2d124.67453766748335!3d8.125005296869482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDcnMzAuMCJOIDEyNMKwNDEnMDAuMCJF!5e1!3m2!1sen!2sph!4v1599056347949!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.0333333, 124.9833333], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kisalum_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kisalum Mountain</p> <p>Elev: 938 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16234.766646596923!2d124.97457852786114!3d8.033354304651327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff0ef0ac119e65%3A0x49d184bc68b8411e!2sKisalum%20Mountain!5e1!3m2!1sen!2sph!4v1599056387039!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8393909, 124.8581267], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salimbal_Volcano" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salimbal</p> <p>Elev: 936 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.427386897429!2d124.8490230278525!3d7.839465416854446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff400b71d3f5ef%3A0x2257c5832fa86ed9!2sMount%20Salimbal%20Volcano!5e1!3m2!1sen!2sph!4v1599056428580!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.3312602, 124.9593809], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palaopao</p> <p>Elev: 843 m, Prom: 228 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16794.729680119195!2d124.94919354661404!3d8.332544496036343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffbbf0e2247199%3A0x47e5b834de8cda31!2sMt.%20Palaopao!5e1!3m2!1sen!2sph!4v1599056571507!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.2801187, 125.0417788], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Panimahawa Ridge</p> <p>Elev: 841 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16824.545882189872!2d125.03296008328688!3d8.280275594682635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffaffe3172cdcb%3A0xf581600747242362!2sPanimahawa%20Ridge!5e1!3m2!1sen!2sph!4v1599056616951!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.3600303, 124.7379232], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tagiptip" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagiptip</p> <p>Elev: 806 m, Prom: 213 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16221.381504268915!2d124.72763412787691!3d8.361409883459581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff910ec490e9a5%3A0x79e69dbfc6318295!2sMount%20Tagiptip!5e1!3m2!1sen!2sph!4v1599056675348!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.703333, 125.364444], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manalapan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manalapan</p> <p>Elev: 803 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.694157310332!2d125.3556896278467!3d7.703354325278164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedb19481f9c43%3A0x4eb75723ecc58bb7!2sMount%20Manalapan!5e1!3m2!1sen!2sph!4v1599056699039!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.816667, 124.783333], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Anirong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Anirong Hill</p> <p>Elev: 789 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16243.315148887581!2d124.7745785278515!3d7.816687718272341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff4165313c99ed%3A0x4f455ac330439157!2sAnirong%20Hill!5e1!3m2!1sen!2sph!4v1599056727093!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.833333, 124.8], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tawingtawing" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tawingtawing</p> <p>Elev: 780 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.665819295682!2d124.79124522785223!3d7.833354317235192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff41a339fc541b%3A0x71eb9604189ab88b!2sMount%20Tawingtawing!5e1!3m2!1sen!2sph!4v1599056754194!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8500001, 124.866667], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pandapadapa_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pandapadapa Hill</p> <p>Elev: 780 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.665819295682!2d124.79124522785223!3d7.833354317235192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff3ff947bb768b%3A0x6481fe47479b2dba!2sPandapadapa%20Hill!5e1!3m2!1sen!2sph!4v1599056779720!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7475, 125.398611], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alimutos" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alimutos</p> <p>Elev: 778 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16245.995190511152!2d125.38985632784855!3d7.74752102255768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fec34900448027%3A0x2710188f75f8eff9!2sMount%20Alimutos!5e1!3m2!1sen!2sph!4v1599056812352!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8498803, 124.8686509], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kalangyauanon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kalangyauanon Hill</p> <p>Elev: 776 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.015111418037!2d124.85791192785297!3d7.850021016196247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff3ff947bb768b%3A0x9bd5fd92ee23fc64!2sKalangyauanon%20Hill!5e1!3m2!1sen!2sph!4v1599056838019!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.833333, 124.8163674], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lanang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lanang</p> <p>Elev: 774 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.665819295682!2d124.80791192785226!3d7.833354317235192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff41b294506501%3A0xb3a8ea51d425b215!2sMount%20Lanang!5e1!3m2!1sen!2sph!4v1599056867102!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.684167, 125.366944], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pamapko" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pamapko</p> <p>Elev: 771 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16248.428437771296!2d125.35818962784593!3d7.684187726454882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedaea211f7373%3A0x6c3b861bc332cfe4!2sMount%20Pamapko!5e1!3m2!1sen!2sph!4v1599056892856!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.0103398, 125.177167], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Capistrano</p> <p>Elev: 768 m, Prom: 335 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4058.940123443683!2d125.17553241482574!3d8.008463906340646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff02f94037f415%3A0x8bba1cbac580873f!2sMt.%20Capistrano!5e1!3m2!1sen!2sph!4v1599056964007!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.2731194, 125.0799641], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Takihaopay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Takihaopay</p> <p>Elev: 751 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16224.614514223496!2d125.07457852787302!3d8.283354288563807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffb1d336e606b1%3A0x178953860c8a767c!2sMount%20Takihaopay!5e1!3m2!1sen!2sph!4v1599056994230!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.1551135, 125.1445665], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Two Trees</p> <p>Elev: 751 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16233.053554290076!2d125.13548084283985!3d8.155392295371044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffaa36a597eafb%3A0xe5fb536f09ab3fb3!2sTwo%20Trees!5e1!3m2!1sen!2sph!4v1599057027629!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.673056, 125.369722], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kinawagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kinawagan</p> <p>Elev: 749 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16248.853276103124!2d125.36096742784547!3d7.673076627135968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedabd99089759%3A0x6ba2703812374fbc!2sMount%20Kinawagan!5e1!3m2!1sen!2sph!4v1599057077529!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.833333, 124.866667], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kinakahila" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kinakahila</p> <p>Elev: 738 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.665819295678!2d124.85791192785226!3d7.833354317235182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff3f8beae993e1%3A0xcc2ecca401dacc69!2sMount%20Kinakahila!5e1!3m2!1sen!2sph!4v1599057101052!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.833333, 124.833333], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kinariga_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kinariga Hill</p> <p>Elev: 736 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.665819295678!2d124.85791192785226!3d7.833354317235182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff40445e6c29e5%3A0x89b887b64449c32f!2sKinariga%20Hill!5e1!3m2!1sen!2sph!4v1599057125120!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.833333, 124.816667], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guninalao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guninalao</p> <p>Elev: 724 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.665819295682!2d124.80791192785226!3d7.833354317235192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff41b294506501%3A0xec7e05d65878682f!2sMount%20Guninalao!5e1!3m2!1sen!2sph!4v1599057151086!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8166667, 124.9458333], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Dagumbaan</p> <p>Elev: 705 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15734.06298847571!2d124.93713565814319!3d7.8166720032360235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDknMDAuMCJOIDEyNMKwNTYnNDUuMCJF!5e1!3m2!1sen!2sph!4v1599057275143!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.727222, 125.375278], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Waranaktaha" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Waranaktaha</p> <p>Elev: 692 m, Prom: 173 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16246.77641825813!2d125.36652302784772!3d7.727243223808249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedb5b9f2c8ea7%3A0x3d45ffcf3950648b!2sMount%20Waranaktaha!5e1!3m2!1sen!2sph!4v1599057324642!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.083333, 125.183333], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pinalturan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pinalturan</p> <p>Elev: 691 m, Prom: 181 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16232.760940941875!2d125.17457852786346!3d8.083354301465603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff004d38203d97%3A0xd2c61739845337a0!2sMount%20Pinalturan!5e1!3m2!1sen!2sph!4v1599057351283!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.825, 124.9666667], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Inayauan_(lungsod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Inayawan</p> <p>Elev: 683 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16426.704446019852!2d124.95786887057714!3d7.825005302332923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDknMzAuMCJOIDEyNMKwNTgnMDAuMCJF!5e1!3m2!1sen!2sph!4v1599057414496!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.701667, 125.379722], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nilayapan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nilayapan</p> <p>Elev: 682 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.75807762928!2d125.37096742784667!3d7.701687725380577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedb2f542a4d31%3A0xe36eba01e6649bee!2sMount%20Nilayapan!5e1!3m2!1sen!2sph!4v1599057441373!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.748889, 125.3775], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bulo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulo</p> <p>Elev: 681 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16245.94160499967!2d125.36874522784862!3d7.748909972471922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedcb9bad42f1d%3A0xed6e125cf9900e39!2sMount%20Bulo!5e1!3m2!1sen!2sph!4v1599057469166!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.2330888, 125.1207976], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calasugon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calasugon</p> <p>Elev: 664 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16226.669658425279!2d125.10791192787059!3d8.233354291813086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffae86173e65e5%3A0x45c84a9173f6b13e!2sMount%20Calasugon!5e1!3m2!1sen!2sph!4v1599057494831!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.747222, 125.371944], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinakawan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sinakawan</p> <p>Elev: 655 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16246.005906853567!2d125.36318962784857!3d7.747243222574829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedcbc30106657%3A0x2cc69b7f85cd2935!2sMount%20Sinakawan!5e1!3m2!1sen!2sph!4v1599057526342!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8769858, 125.0696915], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Musuan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Musuan</p> <p>Elev: 643 m, Prom: 271 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16241.035302393131!2d125.05986212785405!3d7.8750509146326655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff19b306f2dd2b%3A0xe7866fe0894e6432!2sMt.%20Musuan!5e1!3m2!1sen!2sph!4v1599057548414!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.748889, 125.385556], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tamusan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tamusan</p> <p>Elev: 641 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16245.941604999665!2d125.37680082784864!3d7.748909972471924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedcb5d2de833f%3A0xfa2ed7bc90b50de2!2sMount%20Tamusan!5e1!3m2!1sen!2sph!4v1599057584678!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.773333, 125.386389], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bato_(bukid_sa_Pilipinas,_Amihanang_Mindanao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bato</p> <p>Elev: 636 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.99698263569!2d125.37763412784965!3d7.773354320960707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedd2bf2aab98d%3A0xa00c445ff9c211e4!2sMount%20Bato!5e1!3m2!1sen!2sph!4v1599057634446!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.666667, 125.15], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kiokong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kiokong</p> <p>Elev: 622 m, Prom: 118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.097282112563!2d125.1412452278452!3d7.666687727527235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff2895943e0953%3A0x24f65a1938e3545d!2sMount%20Kiokong!5e1!3m2!1sen!2sph!4v1599057667918!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.712222, 125.386667], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kilatan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kilatan</p> <p>Elev: 619 m, Prom: 130 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.353002691018!2d125.37791192784708!3d7.712243224731643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedb35b4be6f3f%3A0x24063dd740ef084b!2sMount%20Kilatan!5e1!3m2!1sen!2sph!4v1599057697213!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.778889, 125.391944], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Libuan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Libuan</p> <p>Elev: 587 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.781880803328!2d125.38318962784987!3d7.778909920616705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fec2cd6a6b94e1%3A0x4b1989954e2f0d79!2sMount%20Libuan!5e1!3m2!1sen!2sph!4v1599057720661!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.831389, 125.368889], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Miganangan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Miganangan</p> <p>Elev: 586 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.741643804691!2d125.36013412785215!3d7.831409917356271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fee7c75ea5fe41%3A0xbea2cfb0411bde76!2sMount%20Miganangan!5e1!3m2!1sen!2sph!4v1599057744494!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.3078193, 125.0368287], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Engkalumad Ridge</p> <p>Elev: 583 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15746.875821603711!2d125.02811948735321!3d8.30782459582788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTgnMjguMiJOIDEyNcKwMDInMTIuNiJF!5e1!3m2!1sen!2sph!4v1599057809168!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.714167, 125.3775], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kilalom" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kilalom</p> <p>Elev: 580 m, Prom: 26 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.278320949756!2d125.36874522784717!3d7.714187724612018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fedb386801fb91%3A0xab783f269311ba80!2sMount%20Kilalom!5e1!3m2!1sen!2sph!4v1599057858277!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.1000106, 125.1500134], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panasihon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panasihon</p> <p>Elev: 554 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16232.089623870153!2d125.14124522786426!3d8.100021000400165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff00ea1ef5472f%3A0xfdb02be42ee3df4a!2sMount%20Panasihon!5e1!3m2!1sen!2sph!4v1599057887874!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7597147, 124.9396416], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Culcot" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Culcot</p> <p>Elev: 542 m, Prom: 114 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16245.25489858467!2d124.92457852784936!3d7.766687721373224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff3948a50b9153%3A0x668728f6707c006!2sMount%20Culcot!5e1!3m2!1sen!2sph!4v1599057911188!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8, 124.85], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Barambang_(bukid_sa_Pilipinas,_Amihanang_Mindanao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Barambang</p> <p>Elev: 541 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16243.963107930856!2d124.84124522785075!3d7.80002101930774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff40bd3d7d8019%3A0x5195c119e458da76!2sMount%20Barambang!5e1!3m2!1sen!2sph!4v1599057941245!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.016667, 125.333333], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pantadon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pantadon</p> <p>Elev: 534 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16235.432465123486!2d125.3245785278604!3d8.016687705709693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fefbc66469c393%3A0xfce85a393b9d7c39!2sMount%20Pantadon!5e1!3m2!1sen!2sph!4v1599057975149!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7, 124.816667], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tangoon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tangoon</p> <p>Elev: 524 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.821988035272!2d124.80791192784659!3d7.700021025482976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff488995a4d9a1%3A0x7b5068f343a6e101!2sMount%20Tangoon!5e1!3m2!1sen!2sph!4v1599058000973!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5148666, 124.94582], { icon: bIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pigtuyuan</p> <p>Elev: 517 m, Prom: 219 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.535629564063!2d124.93709779103774!3d7.5148719055498425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzAnNTMuNSJOIDEyNMKwNTYnNDUuMCJF!5e1!3m2!1sen!2sph!4v1599058044016!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7538326, 125.0705579], { icon: aIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Butung" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Butung</p> <p>Elev: 489 m, Prom: 151 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16245.770078401833!2d125.06124522784883!3d7.753354322197445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff249076489f3b%3A0xa2af7ce2f593b278!2sMount%20Butung!5e1!3m2!1sen!2sph!4v1599058082653!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7455254, 124.9126109], { icon: aIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Squash</p> <p>Elev: 459 m, Prom: 94 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16246.058418353026!2d124.90381312784848!3d7.745881822658864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff3904055258c7%3A0xcc7d720a0d9bb609!2sSquash%20Mountain!5e1!3m2!1sen!2sph!4v1599058139954!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7056545, 125.0358832], { icon: aIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Kiokong White Rock Wall</p> <p>Elev: 357 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16117.837200957236!2d125.02715695613648!3d7.705659791896046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDInMjAuNCJOIDEyNcKwMDInMDkuMiJF!5e1!3m2!1sen!2sph!4v1599058207416!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.05, 125.15], { icon: aIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mampunay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mampunay</p> <p>Elev: 351 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16234.09945035409!2d125.14124522786194!3d8.05002100359118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff016016989699%3A0x7bec604f16f54f61!2sMount%20Mampunay!5e1!3m2!1sen!2sph!4v1599058284286!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.033333, 125.166667], { icon: aIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pagataan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pagataan</p> <p>Elev: 339 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16234.766646596927!2d125.15791192786119!3d8.033354304651327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff03cbf33d8e51%3A0x9c6a69336b9b91bd!2sMount%20Pagataan!5e1!3m2!1sen!2sph!4v1599058308962!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.033333, 125.15], { icon: aIcon })
  .addTo(bukidnonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panaslon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panaslon</p> <p>Elev: 328 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16234.766646596927!2d125.14124522786116!3d8.033354304651327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff03c1c9606f31%3A0x6cc736792b65fe55!2sMount%20Panaslon!5e1!3m2!1sen!2sph!4v1599058334926!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
