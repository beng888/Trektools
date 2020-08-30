var marinduquemap = L.map("marinduquemap").setView(
  [13.4767171, 121.9032192],
  10
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(marinduquemap);

L.marker([13.241389, 122.013611], { icon: cIcon })
  .addTo(marinduquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malindig" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malindig</p> <p>Elev: 1168 m, Prom: 1168 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.757831224708!2d122.00485632827343!3d13.241409388156498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3160d1a7f6711%3A0x41ccecc475ffc8e3!2sMount%20Malindig!5e1!3m2!1sen!2sph!4v1598363976103!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.359167, 121.917778], { icon: bIcon })
  .addTo(marinduquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gasan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gasan</p> <p>Elev: 800 m, Prom: 422 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.293044300004!2d121.91245077828626!3d13.35481902720312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3236c5c535b55%3A0x85b289e0cc8cb548!2sMount%20Gasan!5e1!3m2!1sen!2sph!4v1598364009545!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.387222, 121.988056], { icon: bIcon })
  .addTo(marinduquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_San_Antonio_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount San Antonio</p> <p>Elev: 709 m, Prom: 367 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.018541754818!2d121.94402302829015!3d13.389187173868073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a32233fe833587%3A0x190664290ad715e9!2sMount%20San%20Antonio!5e1!3m2!1sen!2sph!4v1598364044153!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.466667, 122.0], { icon: bIcon })
  .addTo(marinduquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tapian" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tapian</p> <p>Elev: 582 m, Prom: 238 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.226615782067!2d121.98682297829842!3d13.461312116845432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a31ff44f5e215b%3A0x1dc5c6084724c2cb!2sMount%20Tapian!5e1!3m2!1sen!2sph!4v1598364080613!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3733999, 121.970385], { icon: aIcon })
  .addTo(marinduquemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>AguaViva</p> <p>Elev: 468 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15759.165565177354!2d121.96170752208509!3d13.373405089570735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDIyJzI0LjIiTiAxMjHCsDU4JzEzLjQiRQ!5e1!3m2!1sen!2sph!4v1598364156707!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.366667, 122.083333], { icon: aIcon })
  .addTo(marinduquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dark_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dark Hill</p> <p>Elev: 457 m, Prom: 291 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.508252548761!2d122.07457852828762!3d13.366687176052274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3195ff34c4cf9%3A0x14966c1af8f040da!2sDark%20Hill!5e1!3m2!1sen!2sph!4v1598364195312!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.321389, 121.891389], { icon: aIcon })
  .addTo(marinduquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Catala" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Catala</p> <p>Elev: 351 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.443665928387!2d121.88291192828255!3d13.32224268035756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a33b50148a27e9%3A0x99d25bacb98cb855!2sMount%20Catala!5e1!3m2!1sen!2sph!4v1598364232028!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4474012, 121.9208826], { icon: aIcon })
  .addTo(marinduquemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>AguaFlora</p> <p>Elev: 142 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16051.514951752051!2d121.91207739397042!3d13.447406393928935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI2JzUwLjYiTiAxMjHCsDU1JzE1LjIiRQ!5e1!3m2!1sen!2sph!4v1598364269481!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
