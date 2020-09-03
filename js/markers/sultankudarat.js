var sultankudaratmap = L.map("sultankudaratmap").setView(
  [6.5069401, 124.4198243],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(sultankudaratmap);

L.marker([6.4588518, 124.5337003], { icon: dIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pitot_Kalabaw_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pitot Kalabaw Mountain</p> <p>Elev: 1503 m, Prom: 612 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16291.511904255449!2d124.52541192780491!3d6.461410046681002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8005f6fde9ef7%3A0xee9063794d0fb93f!2sPitot%20Kalabaw%20Mountain!5e1!3m2!1sen!2sph!4v1599013783555!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.5733333, 124.5025], { icon: cIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Itim-Itim" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Itim-Itim</p> <p>Elev: 1452 m, Prom: 594 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16287.875920503704!2d124.49374522780785!3d6.573354390649261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257e2acaf7ae06b%3A0x14a45cacde3f0d0!2sMount%20Itim-Itim!5e1!3m2!1sen!2sph!4v1599013809511!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.2671829, 124.300226], { icon: cIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balugo</p> <p>Elev: 1227 m, Prom: 414 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16708.518144987152!2d124.29144102225042!3d6.2671882231607565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTYnMDEuOSJOIDEyNMKwMTgnMDAuOCJF!5e1!3m2!1sen!2sph!4v1599013876775!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.4130757, 124.5065653], { icon: cIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Bagumbayan Green Chocolate Hills</p> <p>Elev: 1112 m, Prom: 71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16400.452520651175!2d124.49780052119321!3d6.413081021239063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjQnNDcuMSJOIDEyNMKwMzAnMjMuNiJF!5e1!3m2!1sen!2sph!4v1599013989101!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.7, 124.3833333], { icon: cIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lubangan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lubangan</p> <p>Elev: 1086 m, Prom: 76 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16283.686770380475!2d124.37457852781141!3d6.700021133727525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257e70f7c35517b%3A0xf518eb2c817fcd71!2sMount%20Lubangan!5e1!3m2!1sen!2sph!4v1599014025654!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.3913889, 124.5938889], { icon: bIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Daguma_Mountain_Range" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Daguma Mountain Range</p> <p>Elev: 979 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16293.753923688691!2d124.58513412780314!3d6.391410000411939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7ff2c5b978ab3%3A0xd1c63509685e2e44!2sDaguma%20Mountain%20Range!5e1!3m2!1sen!2sph!4v1599014081469!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.6885259, 124.4500156], { icon: bIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Ugis Peak</p> <p>Elev: 928 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16284.088194754813!2d124.44016452781105!3d6.687986784389563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257e0e3ca835b2f%3A0x7e6ae08eadb98e9b!2sUgis%20Peak!5e1!3m2!1sen!2sph!4v1599014119341!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.3232945, 124.2018715], { icon: bIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kidapong_Range" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kidapong Range</p> <p>Elev: 892 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16295.919098764925!2d124.19346742780145!3d6.32307675402376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325819ca30cbecab%3A0x3a3b72c1b15938be!2sKidapong%20Range!5e1!3m2!1sen!2sph!4v1599014174747!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.6252778, 124.3563889], { icon: bIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><a href="6.6252778!4d124.3563889" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sulatan</p> <p>Elev: 800 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16286.167626910252!2d124.34763412780927!3d6.625298937823159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257e5a3d15c084b%3A0x989a2c7733c7a7eb!2sMount%20Sulatan!5e1!3m2!1sen!2sph!4v1599014215706!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.8408333, 124.2616667], { icon: bIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Talayan Mountain Range</p> <p>Elev: 729 m, Prom: 213 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16278.935669342016!2d124.25291192781557!3d6.8408543759111575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257c4367d69b881%3A0x87c41d76d32910ec!2sMount%20Talayan%20Range!5e1!3m2!1sen!2sph!4v1599014783867!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.7083414, 124.3007802], { icon: bIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Marawir Peak</p> <p>Elev: 693 m, Prom: 134 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16333.429530554617!2d124.29180843349299!3d6.708570910027966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3257e844ffb7b3a3%3A0xc65ab27e3e42c8cd!2sMarawir%20Mountain!5e1!3m2!1sen!2sph!4v1599014332625!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.4200435, 124.0828499], { icon: bIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sandang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sandang</p> <p>Elev: 600 m, Prom: 174 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16292.84048071554!2d124.07402302780385!3d6.420021148890786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3258212164f9716d%3A0xbb142d73d8d3318d!2sMount%20Sandang!5e1!3m2!1sen!2sph!4v1599014377453!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.4798333, 124.0748341], { icon: bIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gawer" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gawer</p> <p>Elev: 510 m, Prom: 183 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16290.866861173068!2d124.06596742780539!3d6.481410045609253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32578a232837a979%3A0xd9ba24aa95d46754!2sMount%20Gawer!5e1!3m2!1sen!2sph!4v1599014404069!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.470278, 124.051111], { icon: aIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Syniop" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Syniop</p> <p>Elev: 479 m, Prom: 140 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16291.270247332817!2d124.04346742780507!3d6.4689099962794065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325789e4dab5f40d%3A0x5589840ec098ef2b!2sMount%20Syniop!5e1!3m2!1sen!2sph!4v1599014431938!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.170833, 124.271667], { icon: aIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sinangkangan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sinangcangan Mountain</p> <p>Elev: 204 m, Prom: 89 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16300.659010017716!2d124.26291192779797!3d6.170854411962055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3258133b8c03d6f5%3A0xd7833eff3748efdf!2sSinangkangan%20Mountain!5e1!3m2!1sen!2sph!4v1599014467688!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.6833333, 124.9333333], { icon: aIcon })
  .addTo(sultankudaratmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Macaya" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Macaya</p> <p>Elev: 70 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16284.242524139532!2d124.92457852781091!3d6.683354384644153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f840a0a5bf13f3%3A0x7eb7e0f3dfad3ae8!2sMount%20Macaya!5e1!3m2!1sen!2sph!4v1599014497727!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
