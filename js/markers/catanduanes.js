var catanduanesmap = L.map("catanduanesmap").setView(
  [13.7088684, 124.2421597],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(catanduanesmap);

L.marker([13.684444, 124.101389], { icon: bIcon })
  .addTo(catanduanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tamboo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tamboo</p> <p>Elev: 695 m, Prom: 695 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.173437202062!2d124.09057612832454!3d13.685455844816193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a02305c48f593d%3A0x8ae21b21e87431ad!2sMount%20Tambo!5e1!3m2!1sen!2sph!4v1598302393044!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.65, 124.1], { icon: bIcon })
  .addTo(catanduanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baboy_(bukid_sa_Pilipinas,_Bicol)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baboy</p> <p>Elev: 622 m, Prom: 269 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.65388904966!2d124.09381622832025!3d13.648770148442923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a03cd37ade812b%3A0x9747598cf75c8eb7!2sMount%20Baboy!5e1!3m2!1sen!2sph!4v1598302419272!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.85, 124.15], { icon: bIcon })
  .addTo(catanduanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Conical_Peak_(bukid_sa_Pilipinas,_Bicol,_Province_of_Catanduanes)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Conical Peak</p> <p>Elev: 532 m, Prom: 94 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.63204278231!2d124.14818962834298!3d13.84029822941714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339ff52a4f3ce0cf%3A0x957368b6a5cda40d!2sConical%20Peak!5e1!3m2!1sen!2sph!4v1598302460078!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.633333, 124.15], { icon: aIcon })
  .addTo(catanduanesmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Peak</p> <p>Elev: 492 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15934.443439321298!2d124.12430082831712!3d13.622242651060269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a03d6b0d5332df%3A0xd042901a26d9c798!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1598302495657!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.783333, 124.25], { icon: aIcon })
  .addTo(catanduanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cantilamo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cantilamo</p> <p>Elev: 271 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.44930481095!2d124.24206722833631!3d13.7844235349909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a01df9a84f45ad%3A0x4420746e3410b7de!2sMount%20Cantilamo!5e1!3m2!1sen!2sph!4v1598302570234!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.616667, 124.133333], { icon: aIcon })
  .addTo(catanduanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Round_Peak_(bukid_sa_Pilipinas,_Bicol)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Round Peak</p> <p>Elev: 397 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15935.098445507005!2d124.11818962831596!3d13.612520452018423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a03d0c72626b7b%3A0xc2bd0cb7a6ef77eb!2sRound%20Peak!5e1!3m2!1sen!2sph!4v1598302600238!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.566667, 124.316667], { icon: aIcon })
  .addTo(catanduanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Buti_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Buti Hill</p> <p>Elev: 43 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15938.683465684262!2d124.31707852830975!3d13.559187157264217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a011de84a80663%3A0x8705cd20aa0466e8!2sButi%20Hill!5e1!3m2!1sen!2sph!4v1598302654982!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
