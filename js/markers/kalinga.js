var kalingamap = L.map("kalingamap").setView([17.4740422, 121.3541631], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(kalingamap);

L.marker([17.3808, 121.0075], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sapocoy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sapocoy</p> <p>Elev: 2460 m, Prom: 1140 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.0367685281!2d120.99874522884669!3d17.380853287334197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb146d7043479%3A0xcb7211b7affc6113!2sMount%20Sapocoy!5e1!3m2!1sen!2sph!4v1598005269874!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3451485, 120.9637456], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mausan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mausan</p> <p>Elev: 2394 m, Prom: 184 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.091772704956!2d120.95791192883888!3d17.333353293097012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb435a67fb193%3A0x19c1de53c3c30c65!2sMount%20Mausan!5e1!3m2!1sen!2sph!4v1598005421688!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.251389, 120.968056], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alchan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alchan</p> <p>Elev: 2389 m, Prom: 350 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15658.13267281301!2d120.96041192882538!3d17.250575603107368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fca3418d80f61%3A0xa2461639843bf7d0!2sMount%20Alchan!5e1!3m2!1sen!2sph!4v1598005502387!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.251389, 120.968056], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alimunga" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alimungao</p> <p>Elev: 2362 m, Prom: 335 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15643.589886964483!2d121.04485632885334!3d17.421131082436997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb03f81e79f4d%3A0x3bca104b81d22d79!2sMount%20Alimunga!5e1!3m2!1sen!2sph!4v1598005608826!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4, 121.083333], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alimunga" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alimungao</p> <p>Elev: 2362 m, Prom: 335 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15643.589886964483!2d121.04485632885334!3d17.421131082436997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb03f81e79f4d%3A0x3bca104b81d22d79!2sMount%20Alimunga!5e1!3m2!1sen!2sph!4v1598005608826!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.306389, 121.093889], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binulauan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binuluan</p> <p>Elev: 2329 m, Prom: 431 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15653.079762029902!2d121.09180082883509!3d17.31001999592287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb83303cb9d9f%3A0xdd43c80bb8bda46c!2sMount%20Binuluan!5e1!3m2!1sen!2sph!4v1598005711430!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.424829, 120.995546], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balait" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balait</p> <p>Elev: 2212 m, Prom: 215 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15643.280479679508!2d120.98680082885392!3d17.424742181997456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb18e8e2dd985%3A0xb51f419323242bcc!2sMount%20Balait!5e1!3m2!1sen!2sph!4v1598005922115!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.576285, 121.1439557], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lacob-ti-duyog" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lacob-ti-duyog</p> <p>Elev: 2205 m, Prom: 680 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15630.25323998494!2d121.13541192887905!3d17.576131063500377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa76b0bfbfe61%3A0xef8e9f0ce0558da5!2sMount%20Lacob-ti-duyog!5e1!3m2!1sen!2sph!4v1598006003343!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3166667, 121.1], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binuluan_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ambalatungan</p> <p>Elev: 2203 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15983.886258077917!2d121.09129358122209!3d17.316671795406574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzAwLjAiTiAxMjHCsDA2JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598006181626!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4566995, 121.1318008], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Muscut" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Muskut</p> <p>Elev: 2128 m, Prom: 274 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15640.54069601466!2d121.1229119288592!3d17.456686678105843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa4e46fd85871%3A0x15ff482cf1734aba!2sMount%20Muscut!5e1!3m2!1sen!2sph!4v1598006959045!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4427, 121.1027], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sucao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sucao</p> <p>Elev: 2125 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.732502622594!2d121.09402302885695!3d17.4427977797986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa537e7123047%3A0xf4b2e5479ac63547!2sMount%20Sucao!5e1!3m2!1sen!2sph!4v1598007027236!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.116667], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Saal" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Saal</p> <p>Elev: 2066 m, Prom: 164 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.945397875816!2d121.10791192887191!3d17.533353268741013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa666f8907ad1%3A0x8b6e6fadf04b732b!2sMount%20Saal!5e1!3m2!1sen!2sph!4v1598007099489!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.257222, 121.015833], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cauitan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cauitan</p> <p>Elev: 2061 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15657.42533878673!2d120.98985632882673!3d17.258908902101485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fc98d83b0288b%3A0xdecfdce8d1db0c1c!2sMount%20Cauitan!5e1!3m2!1sen!2sph!4v1598007205796!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.535556, 121.119444], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malamot" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malamot</p> <p>Elev: 2046 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.753805442622!2d121.10374522887228!3d17.53557556846903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa6686a34ca47%3A0xb1adf13b68b168e6!2sMount%20Malamot!5e1!3m2!1sen!2sph!4v1598007275983!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.243889, 121.063333], { icon: eIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Chumanchil" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Chumanchil</p> <p>Elev: 2008 m, Prom: 157 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15658.674741028663!2d121.05485632882433!3d17.244186703878263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fc86e95621cbf%3A0x13f38a3d1d1883dc!2sMount%20Chumanchil!5e1!3m2!1sen!2sph!4v1598007364821!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4623764, 121.0949547], { icon: dIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pallua" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pallua</p> <p>Elev: 1977 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15640.039870729379!2d121.08652302886016!3d17.46251992739455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa56e950cff4f%3A0xa7482ef605b2e9c6!2sMount%20Pallua!5e1!3m2!1sen!2sph!4v1598007492680!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.45, 121.15], { icon: dIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magsingit_(bukid_sa_Pilipinas,_Kalinga)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masingit</p> <p>Elev: 1931 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15640.039870729379!2d121.08652302886016!3d17.46251992739455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa4bdc614a521%3A0x86bad41552f37df8!2sMount%20Magsingit!5e1!3m2!1sen!2sph!4v1598007565339!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4791996, 121.1767997], { icon: dIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dalayap" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dalayap</p> <p>Elev: 1918 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.661027350376!2d121.14624522885708!3d17.44363102969707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa38bf8419b67%3A0x3f7643371b5f35d0!2sMount%20Dalayap!5e1!3m2!1sen!2sph!4v1598007712699!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.240833, 121.168333], { icon: dIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mantingoy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mantingoy</p> <p>Elev: 1855 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15658.462650934684!2d121.16402302882473!3d17.246686703576646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fc0ac946e4717%3A0x3b6e8cfc4b28976a!2sSleeping%20Beauty%20Mountain%2C%20Kalinga!5e1!3m2!1sen!2sph!4v1598007792527!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.559444, 121.198056], { icon: dIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Makelkelan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Makelkelan</p> <p>Elev: 1751 m, Prom: 137 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15632.843461183165!2d121.18735632887403!3d17.546131017176783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa0e0577c97d5%3A0x4b9bbc09b10ca55d!2sMount%20Makelkelan!5e1!3m2!1sen!2sph!4v1598007908752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5255556, 121.1486111], { icon: dIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Adalem" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Adalem</p> <p>Elev: 1730 m, Prom: 250 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15634.615756013909!2d121.13985632887062!3d17.525575569692673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa6bdfd9049ed%3A0xcdd8e41b3bf41cb!2sMount%20Adalem!5e1!3m2!1sen!2sph!4v1598008019516!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.45, 121.066667], { icon: dIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Longolung" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Longolung</p> <p>Elev: 1737 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.112880291705!2d121.0579119288581!3d17.450019978918522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fafe55ef68d11%3A0xc3156a23bae83203!2sMount%20Longolung!5e1!3m2!1sen!2sph!4v1598008101177!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4684, 121.0118], { icon: dIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panogaan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panogaan</p> <p>Elev: 1626 m, Prom: 86 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15641.112880291705!2d121.0579119288581!3d17.450019978918522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fae3fc60b6dd7%3A0xd6efdc7a809332a6!2sMount%20Panogaan!5e1!3m2!1sen!2sph!4v1598008187823!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.6225, 121.223889], { icon: dIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lubluba" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lubluba</p> <p>Elev: 1620 m, Prom: 217 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15626.311750018383!2d121.21485632888667!3d17.621686657907375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f0afdc22d01d7%3A0x2505a092e0528bcb!2sMount%20Lubluba!5e1!3m2!1sen!2sph!4v1598008258758!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4825, 121.1994444], { icon: dIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balantay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balantay</p> <p>Elev: 1525 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.321495913968!2d121.1906896288635!3d17.482519974954247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa3c0d5909a81%3A0xa1fe3896e82c543b!2sMount%20Balantay!5e1!3m2!1sen!2sph!4v1598008355518!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4723, 121.0519], { icon: cIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mabukok" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mabukok</p> <p>Elev: 1439 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15639.204787355988!2d121.04318962886178!3d17.472242176208596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fafbc947c8f83%3A0x1f02ae897e350808!2sMount%20Mabukok!5e1!3m2!1sen!2sph!4v1598008572979!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4723, 121.0519], { icon: cIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binuluan_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binutuan</p> <p>Elev: 1347 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.139131282074!2d121.13596742883878!3d17.332797793164332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb96637d4a1ad%3A0xbdc46163e5ff6372!2sMount%20Binuluan!5e1!3m2!1sen!2sph!4v1598008715271!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5361111, 121.2294444], { icon: cIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Libang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Libang</p> <p>Elev: 1346 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.705914437145!2d121.22068962887239!3d17.536131018401047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa1b293c6381b%3A0x77bcd8776354a95a!2sMount%20Libang!5e1!3m2!1sen!2sph!4v1598008845751!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.260278, 121.259167], { icon: cIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tangob_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tangob</p> <p>Elev: 1333 m, Prom: 92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15657.236661572895!2d121.24874522882705!3d17.261131101833158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fbfde722540ff%3A0x222c2d6f0f1f2838!2sMount%20Tangob!5e1!3m2!1sen!2sph!4v1598009047197!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.233333], { icon: cIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pacok" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pacok</p> <p>Elev: 1258 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15634.591830384266!2d121.21541192887068!3d17.525853219658703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa1a5b5adbcff%3A0xe4d1ea02d40299e9!2sMount%20Pacok!5e1!3m2!1sen!2sph!4v1598009135981!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4916994, 121.0782999], { icon: cIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Busingan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Busingan</p> <p>Elev: 1239 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15637.533274031113!2d121.06957852886501!3d17.491686623834976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338faf62bdf84c41%3A0xe2f63fcee27da26c!2sMount%20Busingan!5e1!3m2!1sen!2sph!4v1598009202620!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.15], { icon: cIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Selet" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Selet</p> <p>Elev: 1184 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.945397875823!2d121.14124522887191!3d17.53335326874101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa6c1b340f7a5%3A0xa70e62478749be6f!2sMount%20Selet!5e1!3m2!1sen!2sph!4v1598009287771!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.536389, 121.280278], { icon: cIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maybinulong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maybinulong</p> <p>Elev: 1184 m, Prom: 270 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.63406008452!2d121.27180082887253!3d17.536964368299053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f9f999d37b90b%3A0xfd5d48f567c9abd0!2sMount%20Maybinulong!5e1!3m2!1sen!2sph!4v1598009362417!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3738889, 121.1766667], { icon: bIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bolontoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bolontoc</p> <p>Elev: 999 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15647.630272853416!2d121.16791192884556!3d17.373908888177553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fbc7ea8471b53%3A0xa438e8b61875c306!2sMount%20Bolontoc!5e1!3m2!1sen!2sph!4v1598009475958!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3738889, 121.1766667], { icon: bIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bayekngebang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bayekngebang</p> <p>Elev: 863 m, Prom: 211 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15646.56179273032!2d121.20207852884764!3d17.386408886659304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fbce47999f2c1%3A0xeb3ee127046748f7!2sMount%20Bayekngebang!5e1!3m2!1sen!2sph!4v1598009626572!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.166667], { icon: bIcon })
  .addTo(kalingamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Portoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Portoc</p> <p>Elev: 839 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.190132320524!2d121.15541192886951!3d17.518908820508106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa6b1eb414ea5%3A0x43eeb4d2947b2148!2sMount%20Portoc!5e1!3m2!1sen!2sph!4v1598009716365!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
