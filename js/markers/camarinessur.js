var camarinessurmap = L.map("camarinessurmap").setView(
  [13.5250197, 123.3486147],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(camarinessurmap);

L.marker([13.6582205, 123.3729962], { icon: dIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Isarog" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Isarog</p> <p>Elev: 1 860 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15931.95022904435!2d123.36457852832145!3d13.659187047413967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1ebbe6f36bc91%3A0xcf18fd32314af505!2sMount%20Isarog!5e1!3m2!1sen!2sph!4v1598300862211!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.458342, 123.4508344], { icon: cIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Iriga" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iriga</p> <p>Elev: 1 156 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17492.81799202235!2d123.44185217194924!3d13.458347197142409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI3JzMwLjAiTiAxMjPCsDI3JzAzLjAiRQ!5e1!3m2!1sen!2sph!4v1598301209389!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.770833, 123.66], { icon: cIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Saddle_Peak_(bukid_sa_Pilipinas,_Bicol)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Saddle Peak</p> <p>Elev: 1 011 m, Prom: 808 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.430844709883!2d123.65124522833457!3d13.770020436424565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1d0e2da4e9c89%3A0x5791906cf4fda571!2sSaddle%20Peak!5e1!3m2!1sen!2sph!4v1598301258464!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.609824, 122.9702751], { icon: bIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bernacci" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bernacci</p> <p>Elev: 756 m, Prom: 694 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.322911704614!2d122.9615230283156!3d13.609187152346788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a223c65f6b15dd%3A0xe1d0200e8b47f05c!2sMount%20Bernacci!5e1!3m2!1sen!2sph!4v1598301291614!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8112485, 123.5049218], { icon: bIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Putianay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Putianay</p> <p>Elev: 744 m, Prom: 313 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15921.759367135173!2d123.49096742833927!3d13.809187132522991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1dc3bfe938e2f%3A0xc4fff26825e729a5!2sMount%20Putianay!5e1!3m2!1sen!2sph!4v1598301319362!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8304172, 123.5269181], { icon: bIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tiis" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tiis</p> <p>Elev: 728 m, Prom: 172 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15920.39233984514!2d123.51874522834164!3d13.82918713052706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1dead4e33eea1%3A0x7198f86b11ae2c03!2sMount%20Tiis!5e1!3m2!1sen!2sph!4v1598301343889!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.533333, 123.533333], { icon: bIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gogo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gogo</p> <p>Elev: 702 m, Prom: 264 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15940.415000797724!2d123.52457852830676!3d13.533353759798851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1b92be3e88617%3A0xcfaadb1f11d134bc!2sMount%20Gogo!5e1!3m2!1sen!2sph!4v1598301369577!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.7189786, 123.8075215], { icon: bIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Triple_Peak_(bukid_sa_Pilipinas,_Bicol)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Triple Peak</p> <p>Elev: 599 m, Prom: 395 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15927.868133171807!2d123.7990230283286!3d13.719464841446662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a02d39d784bf35%3A0x7463107ca143c168!2sTriple%20Peak!5e1!3m2!1sen!2sph!4v1598301397088!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6260509, 122.8638854], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tinalmud" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinalmud</p> <p>Elev: 490 m, Prom: 414 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15934.424713206909!2d122.87735632831715!3d13.622520501032875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a23cc56c9c3167%3A0xda1e70d66fe65c82!2sMount%20Tinalmud!5e1!3m2!1sen!2sph!4v1598301440015!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6180017, 122.8731901], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_White_Scar" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount White Scar</p> <p>Elev: 464 m, Prom: 73 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15934.424713206909!2d122.87735632831715!3d13.622520501032875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a23c92cc65667d%3A0xf311897368f9a622!2sMount%20White%20Scar!5e1!3m2!1sen!2sph!4v1598301471429!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8589036, 123.4960716], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Suguitan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Suguitan</p> <p>Elev: 402 m, Prom: 125 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.223917341176!2d123.55707852834544!3d13.860853727361787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1d8fbc7671727%3A0x726ec4addce37c5a!2sMount%20Suguitan!5e1!3m2!1sen!2sph!4v1598301498577!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.566667, 122.983333], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agustin" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agustin</p> <p>Elev: 336 m, Prom: 59 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15938.180156322214!2d122.97457852831063!3d13.566687156527584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a2241c7faf8ca5%3A0xf15aeb3cf5964de4!2sMount%20Agustin!5e1!3m2!1sen!2sph!4v1598301526939!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.587275, 122.8975967], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caguibang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caguibang</p> <p>Elev: 312 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.545973855671!2d122.91930082831172!3d13.57613155559951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a22490c0f01303%3A0x5e826830608521cc!2sMount%20Caguibang!5e1!3m2!1sen!2sph!4v1598301552436!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9844107, 122.8442584], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nadiudin" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nadiudin</p> <p>Elev: 307 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15909.789747040239!2d122.84124522836028!3d13.983353715059094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a209b58f6f3971%3A0x7fa2508fe6994e98!2sMount%20Nadiudin!5e1!3m2!1sen!2sph!4v1598301588024!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.75, 122.916667], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Culasi_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Culasi</p> <p>Elev: 197 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.792132296561!2d122.90791192833221!3d13.750020438413205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a219f5ebff50a1%3A0x327031c334fcd987!2sMount%20Culasi!5e1!3m2!1sen!2sph!4v1598301615354!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.35, 123.25], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talitig" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talitig</p> <p>Elev: 142 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.610158282832!2d123.24124522828569!3d13.350020477668183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1833049f940c7%3A0x458b9b553670da69!2sMount%20Talitig!5e1!3m2!1sen!2sph!4v1598301643367!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.583333, 122.95], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bidlayo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bidlayo</p> <p>Elev: 133 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15937.6579192828!2d122.94763412831156!3d13.57446490576331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a22470156fd2ff%3A0xe224914c665d3b84!2sMount%20Bidlayo!5e1!3m2!1sen!2sph!4v1598301676657!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9, 123.366667], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dinoranan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dinoranan</p> <p>Elev: 112 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.535186969599!2d123.35791192835015!3d13.900020423438317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1e1941e4b1d07%3A0xcce5f78bdb3d80df!2sMount%20Dinoranan!5e1!3m2!1sen!2sph!4v1598301714778!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.933333, 123.366667], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bayo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bayo</p> <p>Elev: 83 m, Prom: 7m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.535186969599!2d123.35791192835015!3d13.900020423438317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339f5f5c927fbc8b%3A0x64708c4d8728f936!2sMount%20Bayo!5e1!3m2!1sen!2sph!4v1598301762326!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.366667, 123.283333], { icon: aIcon })
  .addTo(camarinessurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taobtaob" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taobtaob</p> <p>Elev: 76 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.508252548761!2d123.27457852828759!3d13.366687176052272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a19c98f75bbe8f%3A0x35e02c35f63f0900!2sMount%20Taobtaob!5e1!3m2!1sen!2sph!4v1598301786564!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
