var maguindanaomap = L.map("maguindanaomap").setView(
  [6.9422581, 124.4198243],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(maguindanaomap);

L.marker([6.9583333, 124.2166667], { icon: cIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Blik" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Blik</p> <p>Elev: 1231 m, Prom: 738 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16274.867573313453!2d124.20680082781928!3d6.959187819245509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257cbdf5efc73bd%3A0x6f109a3540e80ca9!2sMount%20Blik!5e1!3m2!1sen!2sph!4v1599015380637!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5003967, 124.2819583], { icon: cIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bita" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bito</p> <p>Elev: 1060 m, Prom: 545 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.277102029064!2d124.28430082783862!3d7.503076637458494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32560f0744d15735%3A0x1feee2fee1474a53!2sMount%20Bita!5e1!3m2!1sen!2sph!4v1599015410146!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.949167, 124.0175], { icon: cIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binaca" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binaca</p> <p>Elev: 1024 m, Prom: 492 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16275.214043085833!2d124.00874522781895!3d6.949187769812269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257b1a7ba00f20b%3A0x6e2641d1600744ce!2sMount%20Binaca!5e1!3m2!1sen!2sph!4v1599015437299!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.972778, 124.125556], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mamot" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mamot</p> <p>Elev: 984 m, Prom: 274 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16274.395197316095!2d124.11680082781972!3d6.972798868473066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257b5dc79aae939%3A0x9e9c70e2dd0d656c!2sMount%20Mamot!5e1!3m2!1sen!2sph!4v1599015467261!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.0475, 124.173889], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tubo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tubo Hill</p> <p>Elev: 796 m, Prom: 295 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16271.785576823047!2d124.16513412782217!3d7.047521114211419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325635470d7f18f3%3A0xf99d3ce95e1ac7ee!2sTubo%20Hill!5e1!3m2!1sen!2sph!4v1599015492271!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.837778, 124.254722], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talayan</p> <p>Elev: 779 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16279.039792508123!2d124.24596742781551!3d6.83779887608209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257c43072d96125%3A0x76f0d7ec17396003!2sMount%20Talayan!5e1!3m2!1sen!2sph!4v1599015532302!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.091389, 124.138611], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tobo_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tobo</p> <p>Elev: 768 m, Prom: 263 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16270.23988874475!2d124.12985632782362!3d7.091409961691669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32564a6cfa0b8145%3A0x77230381e3cd01fb!2sMount%20Tobo!5e1!3m2!1sen!2sph!4v1599015560820!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.831667, 123.986667], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Corobong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Corobong</p> <p>Elev: 713 m, Prom: 349 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16279.24790335453!2d123.97791192781531!3d6.831687776423773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257bb58068ab8d9%3A0x7cf6a1d058a4d390!2sMount%20Corobong!5e1!3m2!1sen!2sph!4v1599015594175!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.795, 124.334167], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Montod_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Montod Mountain</p> <p>Elev: 701 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16280.492680961319!2d124.32541192781419!3d6.795021128468869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257dcad84804ce1%3A0xbfd09ffb03c0318c!2sMontod%20Mountain!5e1!3m2!1sen!2sph!4v1599015649148!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.384929, 124.456775], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Croft" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Croft</p> <p>Elev: 698 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16259.71520040541!2d124.45791192783406!3d7.383354344617562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32561dd3066e853d%3A0xf5e563265520a6b4!2sMount%20Croft!5e1!3m2!1sen!2sph!4v1599015688192!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.146111, 124.148333], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabalalaan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabalalaan</p> <p>Elev: 685 m, Prom: 222 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16268.299295114874!2d124.13957852782552!3d7.146132208532718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325649d4975fa339%3A0x3b9d767c3e7fa1f2!2sMount%20Cabalalaan!5e1!3m2!1sen!2sph!4v1599015723858!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.45, 124.2], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabagao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabagao</p> <p>Elev: 651 m, Prom: 335 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16257.252626270072!2d124.19124522783659!3d7.450021090642347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32561258dbbd08ab%3A0x19da0ac5c4b31dcf!2sMount%20Cabagao!5e1!3m2!1sen!2sph!4v1599015747559!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.020556, 124.213889], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Biaring" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Biaring</p> <p>Elev: 650 m, Prom: 232 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16272.729782943035!2d124.20513412782128!3d7.02057666575226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257cb3bd3c8a8eb%3A0xab6ad593cd8227d4!2sMount%20Biaring!5e1!3m2!1sen!2sph!4v1599015775682!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.865833, 124.279167], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kalipapa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kalipapa</p> <p>Elev: 579 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16278.081998028858!2d124.27041192781635!3d6.8658543745103815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257c59913d187c5%3A0x4fd74d23396d1e62!2sMount%20Kalipapa!5e1!3m2!1sen!2sph!4v1599015798943!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.001389, 124.013889], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tubuan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tubuan</p> <p>Elev: 561 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16273.399243541537!2d124.00513412782065!3d7.001410016845497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257b24e76437cd3%3A0xde591ec88516c108!2sMount%20Tubuan!5e1!3m2!1sen!2sph!4v1599015821850!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.533333, 124.25], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Diapialaloa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Diapialaloa</p> <p>Elev: 536 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16254.143464445367!2d124.24124522783984!3d7.53335433563349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32560ea584d36e27%3A0xe95ab9cda5b81c39!2sMount%20Diapialaloa!5e1!3m2!1sen!2sph!4v1599015848092!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.8, 124.3], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dilafungan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dilafungan</p> <p>Elev: 536 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16280.323331084557!2d124.29124522781434!3d6.800021128190499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257c364fbac9683%3A0xc0e657aaeb0c1093!2sMount%20Dilafungan!5e1!3m2!1sen!2sph!4v1599015873080!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.050556, 124.105], { icon: bIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kalaniog_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kalaniog Hill</p> <p>Elev: 505 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16271.678273178622!2d124.09624522782227!3d7.05057671403639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32564b2626f3485d%3A0x824ca64a91d69391!2sKalaniog%20Hill!5e1!3m2!1sen!2sph!4v1599015899282!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.7, 124.866667], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buluan_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buluan</p> <p>Elev: 492 m, Prom: 137 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16283.686770380475!2d124.85791192781139!3d6.700021133727525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8401c6716b0a3%3A0xf1bdc7e17574675c!2sMount%20Buluan!5e1!3m2!1sen!2sph!4v1599015933566!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.1205676, 124.084873], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Minandar</p> <p>Elev: 465 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16325.545020707932!2d124.07755393198255!3d7.13110950755251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325649b4172f2e35%3A0x871aad2343dac775!2sMt.%20Minandar!5e1!3m2!1sen!2sph!4v1599015970223!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.15, 124.133333], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabalata" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabalata</p> <p>Elev: 450 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16268.160821570758!2d124.12457852782568!3d7.150021058307513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256483518d099d5%3A0xdaa91884ca34e1b!2sMount%20Cabalata!5e1!3m2!1sen!2sph!4v1599016024453!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.105556, 124.295556], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Taviran_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taviran</p> <p>Elev: 425 m, Prom: 208 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16269.738922556051!2d124.28680082782411!3d7.105576710875702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325631850635a45b%3A0xdacbd795947c7db8!2sTaviran%20Mountains!5e1!3m2!1sen!2sph!4v1599016049690!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3275385, 124.4482004], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Payong-Payong</p> <p>Elev: 416 m, Prom: 133 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17171.238820008024!2d124.43931222622611!3d7.327543808911877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTknMzkuMSJOIDEyNMKwMjYnNTMuNSJF!5e1!3m2!1sen!2sph!4v1599016113964!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.928611, 124.283056], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Blit" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Blit</p> <p>Elev: 353 m, Prom: 103 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16275.924670248314!2d124.2743008278183!3d6.92863222097526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257cef6e33e3869%3A0xa425c4f1c9ee531f!2sMount%20Blit!5e1!3m2!1sen!2sph!4v1599016170874!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4, 124.366667], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Knob_Mountain_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Knob Mountain</p> <p>Elev: 321 m, Prom: 172 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16259.101620032585!2d124.35791192783465!3d7.400021043626419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32561a372f6140e3%3A0xb8a1d05bc3c3b6cf!2sKnob%20Mountain!5e1!3m2!1sen!2sph!4v1599016206588!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.891389, 124.346389], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alas</p> <p>Elev: 303 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16277.206151531656!2d124.33763412781714!3d6.891409973074346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257d01660188099%3A0x16092f26709fb0db!2sMount%20Alas!5e1!3m2!1sen!2sph!4v1599016237418!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.820556, 124.024444], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dinandingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dinandingan</p> <p>Elev: 298 m, Prom: 101 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16279.625812553984!2d124.01568962781495!3d6.8205766770444045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257bc7c9789030f%3A0xc71b4d95dbcbff70!2sMount%20Dinandingan!5e1!3m2!1sen!2sph!4v1599016264244!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.217778, 124.178611], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Timako_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Timako Hill</p> <p>Elev: 209 m, Prom: 203 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16642.948785766017!2d124.16808416581297!3d7.218330219036833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325638f561c8cc77%3A0xb26cb10f5caca86f!2sTimako%20Hill!5e1!3m2!1sen!2sph!4v1599016301510!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.943611, 124.373889], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Perez_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Perez Hill</p> <p>Elev: 113 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16275.406312645655!2d124.36513412781878!3d6.943632170126859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257d181b5aa84cd%3A0x3403e16f8711cd30!2sPerez%20Hill!5e1!3m2!1sen!2sph!4v1599016345435!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.22, 124.244444], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>PC Hill</p> <p>Elev: 65 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4066.4155258787896!2d124.24187421482381!3d7.219836266679201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32563bd7b3cb1167%3A0xff16a9d57208be94!2sPedro%20Colina%20Hill!5e1!3m2!1sen!2sph!4v1599016378334!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.333333, 124.216667], { icon: aIcon })
  .addTo(maguindanaomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Banisilan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Banisilan Hill</p> <p>Elev: 12 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16261.547682645052!2d124.2079119278322!3d7.333354347580367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256158d98fada81%3A0x7fecdf394e4363cd!2sBanisilan%20Hill!5e1!3m2!1sen!2sph!4v1599016437067!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
