var dinagatmap = L.map("dinagatmap").setView([10.1281816, 125.6095474], 10);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(dinagatmap);
L.marker([10.351667, 125.643056], { icon: bIcon })
  .addTo(dinagatmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Redondo_(bukid_sa_Pilipinas,_Caraga)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Redondo</p> <p>Elev: 929 m, Prom: 929 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16128.749708882837!2d125.63346742800196!3d10.352520840217009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33068c32a0e7d269%3A0x3134c52768f69dab!2sMount%20Redondo!5e1!3m2!1sen!2sph!4v1598970927021!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.390278, 125.644444], { icon: bIcon })
  .addTo(dinagatmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kanbinlio" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kanbinlio</p> <p>Elev: 905 m, Prom: 246 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16127.233439301655!2d125.62818962800426!3d10.381965187911128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33068c0e75690ce9%3A0x12d2fcd8030d5ca9!2sMount%20Kanbinlio!5e1!3m2!1sen!2sph!4v1598971006608!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.333333, 125.633333], { icon: bIcon })
  .addTo(dinagatmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maringing" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maringing</p> <p>Elev: 801 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16129.73443322825!2d125.62457852800053!3d10.333354091715083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33068dea9b704d91%3A0x740c2a7d187f41e2!2sMount%20Maringing!5e1!3m2!1sen!2sph!4v1598971055969!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.204444, 125.640278], { icon: bIcon })
  .addTo(dinagatmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pelhi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pelhi</p> <p>Elev: 727 m, Prom: 675 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16136.309433494362!2d125.63152302799094!3d10.204465201729121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330694322f66b89f%3A0x13e17e936ea40139!2sMount%20Pelhi!5e1!3m2!1sen!2sph!4v1598971087461!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.139444, 125.640556], { icon: bIcon })
  .addTo(dinagatmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tristan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tristan</p> <p>Elev: 615 m, Prom: 594 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16139.678253021046!2d125.62874522798607!3d10.137798606867785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3306be6eb7e967f7%3A0x2f6c576f3bfdc9e0!2sMount%20Tristan!5e1!3m2!1sen!2sph!4v1598971115630!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.880833, 125.686944], { icon: bIcon })
  .addTo(dinagatmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gabo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gabo</p> <p>Elev: 532 m, Prom: 494 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16152.457819915053!2d125.67818962796775!3d9.88085412641135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3306b31a91d40fed%3A0xb05626ffdf37835f!2sMount%20Gabo!5e1!3m2!1sen!2sph!4v1598971167548!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.3, 125.633333], { icon: aIcon })
  .addTo(dinagatmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malinao_(bukid_sa_Pilipinas,_Caraga)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malinao</p> <p>Elev: 384 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16131.442688862167!2d125.62457852799801!3d10.300020794314936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330692149afae53b%3A0x10e0b01b3ec00edc!2sMount%20Malinao!5e1!3m2!1sen!2sph!4v1598971200768!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
