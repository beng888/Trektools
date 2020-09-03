var davaodelsurmap = L.map("davaodelsurmap").setView(
  [6.7662687, 125.3284269],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(davaodelsurmap);
L.marker([6.9871872, 125.2707835], { icon: fIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apo_(bukid_sa_Pilipinas,_Davao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apo</p> <p>Elev: 2954 m, Prom: 2954 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16273.88475104679!2d125.2622416278202!3d6.987477217638732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9011b1d616fe9%3A0x83086f84a0a9e915!2sMount%20Apo!5e1!3m2!1sen!2sph!4v1598993113785!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.985783, 125.2718247], { icon: fIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apo_(bukid_sa_Pilipinas,_Davao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apo Kapatagan Peak</p> <p>Elev: 2936 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17508.11261892703!2d125.26291815704076!3d6.985788305675778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTknMDguOCJOIDEyNcKwMTYnMTguNiJF!5e1!3m2!1sen!2sph!4v1598993174629!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.8985643, 125.3030418], { icon: dIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tampurong</p> <p>Elev: 1672 m, Prom: 337 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17253.03323260171!2d125.29413343097511!3d6.898569606150247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTMnNTQuOCJOIDEyNcKwMTgnMTEuMCJF!5e1!3m2!1sen!2sph!4v1598993370947!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.8885986, 125.4006087], { icon: cIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagaytay</p> <p>Elev: 1311 m, Prom: 211 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4069.325619843335!2d125.39842001482292!3d6.888603920722149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTMnMTkuMCJOIDEyNcKwMjQnMDIuMiJF!5e1!3m2!1sen!2sph!4v1598993531923!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.282222, 125.633333], { icon: cIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patulangon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Patulangon</p> <p>Elev: 1270 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16297.201862862283!2d125.6245785278005!3d6.282243356167773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f75ebdc5a8f74f%3A0xade4231672f8647a!2sMount%20Patulangon!5e1!3m2!1sen!2sph!4v1598993627198!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.9175614, 125.4068742], { icon: cIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sibulan_(bukid_sa_Pilipinas,_lat_6,92,_long_125,41)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sibulan</p> <p>Elev: 1264 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16277.079703006748!2d125.40052412781728!3d6.895091722867113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9a86ce095ab5f%3A0x67456706c5b59c9e!2sMount%20Sibulan!5e1!3m2!1sen!2sph!4v1598993666111!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.8824647, 125.3992796], { icon: cIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Juloy</p> <p>Elev: 1159 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15998.1210913542!2d125.39056881883904!3d6.882470005097289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTInNTYuOSJOIDEyNcKwMjMnNTcuNCJF!5e1!3m2!1sen!2sph!4v1598993792367!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.886708, 125.4043141], { icon: cIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinako</p> <p>Elev: 1108 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16289.175209839806!2d125.40212541482298!3d6.886713320744713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTMnMTIuMiJOIDEyNcKwMjQnMTUuNSJF!5e1!3m2!1sen!2sph!4v1598993902137!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.8973798, 125.331316], { icon: cIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Boribing" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Boribing</p> <p>Elev: 1024 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16276.910300827012!2d125.32457852781745!3d6.900021072589531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9a908f8be3117%3A0xeb73155e584246c9!2sMount%20Boribing!5e1!3m2!1sen!2sph!4v1598993952802!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.8842389, 125.408096], { icon: cIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Loay</p> <p>Elev: 1022 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16429.38632670553!2d125.39923129551634!3d6.884103911792064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9a7eccf2e37bd%3A0x4f601516a0efeda0!2sMt.%20Loay%20Nature%20Park!5e1!3m2!1sen!2sph!4v1598994011843!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.864444, 125.301944], { icon: bIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Napan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Napan Hill</p> <p>Elev: 871 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16278.12950418833!2d125.29318962781632!3d6.864465524588307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9ac01f7c2c6c5%3A0xde0507836e6c94ad!2sNapan%20Hill!5e1!3m2!1sen!2sph!4v1598994058937!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.9025, 125.406944], { icon: bIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kabayawa_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kabayawa Hill</p> <p>Elev: 829 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16276.824337992062!2d125.3981896278175!3d6.902521122448681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9a7ced34b709b%3A0xb0a0be7f1a3ffe16!2sKabayawa%20Hill!5e1!3m2!1sen!2sph!4v1598994089180!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.542778, 125.346944], { icon: bIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pagyasgas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pagyasgas</p> <p>Elev: 741 m, Prom: 384 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.874540040797!2d125.33818962780704!3d6.542798942303599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9cf001eb67ac1%3A0x48738793e3f70aa4!2sMount%20Pagyasgas!5e1!3m2!1sen!2sph!4v1598994112437!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.5333333, 125.3466667], { icon: bIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pagyasgas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pagyasngan</p> <p>Elev: 668 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16960.24430691631!2d125.33779752714723!3d6.533338610525059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzInMDAuMCJOIDEyNcKwMjAnNDguMCJF!5e1!3m2!1sen!2sph!4v1598994169087!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.825556, 125.334444], { icon: bIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ruparan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ruparan</p> <p>Elev: 635 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16277.240647674946!2d125.29641142781712!3d6.890405223130886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9a9619c0d8b23%3A0x6478bab250e0aef5!2sMount%20Ruparan!5e1!3m2!1sen!2sph!4v1598994279830!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.553889, 125.346944], { icon: bIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salimbagao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salimbagao</p> <p>Elev: 527 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.511942392262!2d125.33818962780735!3d6.553909991702714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9cf1d8956ad47%3A0xdbf3bf3b1841472!2sMount%20Salimbagao!5e1!3m2!1sen!2sph!4v1598994309373!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.838056, 125.28], { icon: bIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tinuntungan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinuntungan</p> <p>Elev: 521 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16279.030326046035!2d125.27124522781548!3d6.838076726066547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9ac4a6d47d3c7%3A0xa3ad901a4dc2139!2sMount%20Tinuntungan!5e1!3m2!1sen!2sph!4v1598994334989!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.824444, 125.35], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binaton" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binaton</p> <p>Elev: 499 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16279.030326046035!2d125.27124522781548!3d6.838076726066547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9afab87c38179%3A0x1f81ba8f481eae58!2sMount%20Binaton!5e1!3m2!1sen!2sph!4v1598994362929!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.568889, 125.328889], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lamandang_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lamandang Hill</p> <p>Elev: 445 m, Prom: 159 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.021461200562!2d125.32013412780775!3d6.568909990890262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9cec66a425359%3A0x647c7ed99647f535!2sLamandang%20Hill!5e1!3m2!1sen!2sph!4v1598994390803!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.5425, 125.364722], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kawayon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kawayon Hill</p> <p>Elev: 435 m, Prom: 76 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.883597907883!2d125.35596742780703!3d6.542521142318622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9cf0a4b96f811%3A0x40ae84cca44e367f!2sKawayon%20Hill!5e1!3m2!1sen!2sph!4v1598994419967!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.5355561, 125.371389], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Luya_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Luya Hill</p> <p>Elev: 391 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.883597907883!2d125.35596742780703!3d6.542521142318622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9cf9ed5731317%3A0x6d39870466a5e23!2sLuya%20Hill!5e1!3m2!1sen!2sph!4v1598994584936!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.799722, 125.342222], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bandarin" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bandarin</p> <p>Elev: 355 m, Prom: 95 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16280.332743416591!2d125.33346742781433!3d6.799743328205968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9ae2c375bcdc7%3A0xe4aa5e56f9d6771a!2sMount%20Bandarin!5e1!3m2!1sen!2sph!4v1598994636544!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.514722, 125.317778], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ngu-Ub" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ngu-Ub</p> <p>Elev: 324 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16289.787381019365!2d125.30902302780629!3d6.514743293817329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9ce1bb62e3de7%3A0x8c31ec530cb4f1bb!2sMount%20Ngu-Ub!5e1!3m2!1sen!2sph!4v1598994662852!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.496389, 125.309167], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kitakal_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kitakal Hill</p> <p>Elev: 296 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16289.787381019365!2d125.30902302780629!3d6.514743293817329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9d1f14466d6ef%3A0x294028424122e5dc!2sKitakal%20Hill!5e1!3m2!1sen!2sph!4v1598994691108!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.562222, 125.401111], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dalag_Bong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dalag Bong Hill</p> <p>Elev: 187 m, Prom: 129 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.239590120898!2d125.39235632780758!3d6.562243341251529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c5f02c9c16e9%3A0x39668841da6744e2!2sDalag%20Bong%20Hill!5e1!3m2!1sen!2sph!4v1598994718804!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.587778, 125.378611], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Baclayon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Baclayon Hill</p> <p>Elev: 186 m, Prom: 117 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16287.402228193429!2d125.36985632780825!3d6.587798939865109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c8bb443c60d7%3A0xc4da109122bc7ca9!2sBaclayon%20Hill!5e1!3m2!1sen!2sph!4v1598994748419!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.644976, 125.3793387], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Piapi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Piape Hill</p> <p>Elev: 184 m, Prom: 178 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16285.51552105047!2d125.37041192780985!3d6.645021086745635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c81d2e70e631%3A0xb32062cfbd137f4c!2sMount%20Piapi!5e1!3m2!1sen!2sph!4v1598994797071!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.593611, 125.378333], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Titangs_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Titangs Hill</p> <p>Elev: 172 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16287.21063842965!2d125.36957852780841!3d6.593632239548078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c897e7d33eb5%3A0xe1352f972815ec7f!2sTitangs%20Hill!5e1!3m2!1sen!2sph!4v1598994829629!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.768889, 125.359167], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Holy Hill of Zion</p> <p>Elev: 156 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.884094440024!2d125.35035649582387!3d6.768894310372947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDYnMDguMCJOIDEyNcKwMjEnMzMuMCJF!5e1!3m2!1sen!2sph!4v1598994901136!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.903333, 125.449167], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Astorga_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Astorga Hill</p> <p>Elev: 151 m m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16276.795678546805!2d125.44041192781752!3d6.903354422401723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9a710e68a9dd3%3A0xc4c34b6ee89d79ff!2sAstorga%20Hill!5e1!3m2!1sen!2sph!4v1598994944413!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.6688889, 125.3197222], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tolagan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tolagan Hill</p> <p>Elev: 144 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16284.723057276044!2d125.31096742781051!3d6.66891003543711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9b614a5016589%3A0xd5340b519c8ef193!2sTolagan%20Hill!5e1!3m2!1sen!2sph!4v1598994973351!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.6033333, 125.3088889], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lanturi_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lanturi Hill</p> <p>Elev: 143 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16286.89094754528!2d125.30013412780868!3d6.6033543890191835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c964032b7c4f%3A0xe862ee853d6f6db7!2sLanturi%20Hill!5e1!3m2!1sen!2sph!4v1598995058760!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.5425, 125.384722], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pito_Peak_(tumoy_sa_bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pito Peak</p> <p>Elev: 140 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.88359790788!2d125.37596742780704!3d6.542521142318612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9cf794c0f6377%3A0xfb2adb69a61fa3ef!2sPito%20Peak!5e1!3m2!1sen!2sph!4v1598995100029!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.592778, 125.408333], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Malalag_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malalag Hill</p> <p>Elev: 140 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16287.238017793316!2d125.39957852780836!3d6.592798939593383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c63e5fd82bdf%3A0x11b344823dc28495!2sMalalag%20Hill!5e1!3m2!1sen!2sph!4v1598998090316!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.875833, 125.440556], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Balulangon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Balulangon Hill</p> <p>Elev: 130 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16277.73966174182!2d125.43180082781666!3d6.875854373948953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9a6f3454e3709%3A0xad1db77007b06f1c!2sBalulangon%20Hill!5e1!3m2!1sen!2sph!4v1598998194303!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.6286111, 125.2869444], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Puganoh_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Puganoh Hill</p> <p>Elev: 127 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16286.057548040273!2d125.27818962780937!3d6.628632237641216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9ca3a3d2d2217%3A0x8d35439a70d495e8!2sPuganoh%20Hill!5e1!3m2!1sen!2sph!4v1598998226564!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.561944, 125.375833], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lubo_Hill_(bungtod_sa_Pilipinas,_Davao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lubo Hill</p> <p>Elev: 110 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16288.248674789795!2d125.36707852780754!3d6.561965541266576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9cf44761e9a11%3A0x4c0a9565166a4e50!2sLubo%20Hill!5e1!3m2!1sen!2sph!4v1598998274146!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.894722, 125.448889], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Simuno_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Simuno Hill</p> <p>Elev: 105 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16277.09167157233!2d125.4401341278173!3d6.894743322886724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9a71db2dc73eb%3A0xd933af1a072db7e9!2sSimuno%20Hill!5e1!3m2!1sen!2sph!4v1598998333994!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.6877778, 125.2777778], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bautista_Heights" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bautista Heights</p> <p>Elev: 100 m, Prom: 52 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16284.094456754272!2d125.26902302781102!3d6.6877988843998875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9b5b44bb9e503%3A0x351c4b2f845ee121!2sMount%20Bautista%20Heights!5e1!3m2!1sen!2sph!4v1598998419181!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.574444, 125.414167], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kalangkangan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kalangkangan Hill</p> <p>Elev: 92 m, Prom: 64 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16287.839518378101!2d125.40541192780789!3d6.574465540588987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c6751de12529%3A0xb9a8ad4e586ab945!2sKalangkangan%20Hill!5e1!3m2!1sen!2sph!4v1598998454956!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.598889, 125.395278], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ellas_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ellas Hill</p> <p>Elev: 72 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16287.03714976114!2d125.38652302780854!3d6.598909989261047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c62665314f81%3A0xe2b40f8a5f210f56!2sEllas%20Hill!5e1!3m2!1sen!2sph!4v1598998495776!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.669444, 125.355278], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Palique_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Paligue Hill</p> <p>Elev: 71 m, Prom: 59 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16284.7045960957!2d125.34652302781052!3d6.669465535406638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9b7b704b7c00f%3A0xbe00418a3ba0bc10!2sPalique%20Hill!5e1!3m2!1sen!2sph!4v1598998572514!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.764167, 125.365278], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cogon_Hill_(bungtod_sa_Pilipinas,_Davao,_Province_of_Davao_del_Sur,_lat_6,76,_long_125,37)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cogon Hill</p> <p>Elev: 68 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16281.534264348307!2d125.35652302781327!3d6.764187830181952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9b05cd05a8b83%3A0xc1823740b95a6bcc!2sCogon%20Hill!5e1!3m2!1sen!2sph!4v1598998760109!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.6244444, 125.3313889], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Talas_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Talas Hill</p> <p>Elev: 66 m, Prom: 51 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16286.195140490849!2d125.32263412780927!3d6.624465537868645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c9bb47ae8605%3A0xe16a5faa5a18de23!2sTalas%20Hill!5e1!3m2!1sen!2sph!4v1598998940804!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.6358333, 125.31], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cogon_Hill_(bungtod_sa_Pilipinas,_Davao,_Province_of_Davao_del_Sur,_lat_6,64,_long_125,31)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cogon Hill</p> <p>Elev: 63 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16285.818854725812!2d125.3012452278096!3d6.635854387246768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9c9f316b9067d%3A0xdf20754c53a7033e!2sCogon%20Hill!5e1!3m2!1sen!2sph!4v1598998743355!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.6952778, 125.2988889], { icon: aIcon })
  .addTo(davaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maning_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maning Hill</p> <p>Elev: 22 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16283.844372310828!2d125.29013412781127!3d6.695298933987414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9b42917274321%3A0x96cfb1e2daee8ac9!2sManing%20Hill!5e1!3m2!1sen!2sph!4v1598998981737!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
