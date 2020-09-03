var camiguinmap = L.map("camiguinmap").setView([9.1732164, 124.7298765], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(camiguinmap);

L.marker([9.1711603, 124.7240854], { icon: dIcon })
  .addTo(camiguinmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mambajao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mambajao</p> <p>Elev: 1713 m, Prom: 1713 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16186.029465406484!2d124.71387857792169!3d9.171986928169941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33006e516b865d03%3A0x8558de1d0678b9e0!2sMount%20Mambajao!5e1!3m2!1sen!2sph!4v1599064982505!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.1782427, 124.7275221], { icon: dIcon })
  .addTo(camiguinmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Timpoong</p> <p>Elev: 1627 m, Prom: 186 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64744.10076424383!2d124.68761267009815!3d9.172091059962897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb5f24612c8a5a641!2smont%20Timpoong!5e1!3m2!1sen!2sph!4v1599065032519!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.1997697, 124.6739804], { icon: cIcon })
  .addTo(camiguinmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cartarman" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Catarman</p> <p>Elev: 1303 m, Prom: 678 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16184.7615170621!2d124.6651341279233!3d9.199743126203012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3300701791de52b5%3A0x28d4cac7f8949523!2sMount%20Cartarman!5e1!3m2!1sen!2sph!4v1599065085037!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.2042086, 124.6703471], { icon: cIcon })
  .addTo(camiguinmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Hibok_Hibok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Hibok-hibok</p> <p>Elev: 1294 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16184.622267684033!2d124.66306672792356!3d9.202786325987057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33006fb2a9524135%3A0xc9f2d5351dad464f!2sMount%20Hibok-Hibok!5e1!3m2!1sen!2sph!4v1599065132377!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.2161957, 124.6691943], { icon: bIcon })
  .addTo(camiguinmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Carling" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Carling</p> <p>Elev: 819 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16184.622267684033!2d124.66306672792356!3d9.202786325987057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330070098a3c86e5%3A0x154cf07906551d9b!2sMount%20Carling!5e1!3m2!1sen!2sph!4v1599065193119!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.193333, 124.683611], { icon: bIcon })
  .addTo(camiguinmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tres_Marias" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tres Marias</p> <p>Elev: 731 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16185.053708929292!2d124.67485632792301!3d9.193354226656192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33007020c34f2c7f%3A0x63d2c5d96c027475!2sMount%20Tres%20Marias!5e1!3m2!1sen!2sph!4v1599065222803!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.104759, 124.7691868], { icon: bIcon })
  .addTo(camiguinmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Butay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Butay</p> <p>Elev: 686 m, Prom: 355 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16286.937545463827!2d124.75585858019855!3d9.11693878330239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33006c0c37be5017%3A0xf7131064aac6e700!2sButay!5e1!3m2!1sen!2sph!4v1599065300038!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.2083333, 124.7083333], { icon: bIcon })
  .addTo(camiguinmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Campana</p> <p>Elev: 652 m, Prom: 118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16184.36737831875!2d124.6995785279239!3d9.208354175591795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33006f8ca8e894ab%3A0xfc73aa66efc8cb01!2sCampana!5e1!3m2!1sen!2sph!4v1599065341789!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.215388, 124.6466184], { icon: bIcon })
  .addTo(camiguinmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Camiguin_Volcano" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Camiguin Volcano</p> <p>Elev: 558 m, Prom: 222 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16184.049253409406!2d124.63791192792432!3d9.21529867509854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3300707c01e0493b%3A0xf3a3cc33f1827440!2sCamiguin%20Volcano!5e1!3m2!1sen!2sph!4v1599065421015!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.2166667, 124.65], { icon: aIcon })
  .addTo(camiguinmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Minokol" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Minokol</p> <p>Elev: 333 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16183.985597605524!2d124.64124522792446!3d9.216687624999837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33007079a61b5b33%3A0x8c78115da1f45f0d!2sMinokol!5e1!3m2!1sen!2sph!4v1599065445568!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.099981, 124.7666733], { icon: aIcon })
  .addTo(camiguinmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Guinsiliban_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Guinsiliban Peak</p> <p>Elev: 288 m, Prom: 51 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16189.601285777759!2d124.759100627917!3d9.093345933716355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33006c875a9d06db%3A0xdb4c5dd6d893d259!2sMount%20Guinsiliban!5e1!3m2!1sen!2sph!4v1599065470656!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
