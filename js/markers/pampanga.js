var pampangamap = L.map("pampangamap").setView([15.079409, 120.6199895], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(pampangamap);

L.marker([15.0928842, 120.3680854], { icon: dIcon })
  .addTo(pampangamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Negron</p> <p>Elev: 1585 m, Prom: 1153 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.993453736035!2d120.3584674285033!3d15.09418699929298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339688eacf0a0ddb%3A0xc35fb3f06ea9affe!2sMount%20Negron!5e1!3m2!1sen!2sph!4v1598187821124!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1260533, 120.3690393], { icon: cIcon })
  .addTo(pampangamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Donald_McDoneld" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount McDonald</p> <p>Elev: 1322 m, Prom: 280 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16454.6931965312!2d120.36248911352125!3d15.125805447327023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33968f3744759015%3A0xb4fca325e2c84675!2sMount%20Donald%20McDonald!5e1!3m2!1sen!2sph!4v1598187958539!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2051885, 120.7427214], { icon: cIcon })
  .addTo(pampangamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Peak_(tumoy_sa_bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Arayat North Peak</p> <p>Elev: 1037 m, Prom: 1002 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15821.89244236716!2d120.73402302851808!3d15.202520237598833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396e5b96fb3a433%3A0x227ee93f7f86f5a2!2sNorth%20Peak!5e1!3m2!1sen!2sph!4v1598188022214!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1965737, 120.7434961], { icon: bIcon })
  .addTo(pampangamap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Arayat" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Arayat South Peak</p> <p>Elev: 994 m, Prom: 71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.538434555232!2d120.73402302851694!3d15.193909188530988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396e5a4f7d89329%3A0xd06ba391a0d46b36!2sSouth%20Peak!5e1!3m2!1sen!2sph!4v1598188100982!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1963942, 120.746871], { icon: bIcon })
  .addTo(pampangamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pinacle_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinacle Peak></p> <p>Elev: 914 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.413428313403!2d120.73707852851712!3d15.195575888350593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396e5a551cc6ab3%3A0x34602e1b286b8d62!2sPinacle%20Peak!5e1!3m2!1sen!2sph!4v1598188288427!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1353835, 120.4326988], { icon: bIcon })
  .addTo(pampangamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dorst" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dorst</p> <p>Elev: 852 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.801355917258!2d120.42291192850912!3d15.136964694683854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33968e9cec661e69%3A0x6b097e695a50e839!2sMount%20Dorst!5e1!3m2!1sen!2sph!4v1598188335030!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1993952, 120.4738233], { icon: aIcon })
  .addTo(pampangamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>peak one</p> <p>Elev: 428 m, Prom: 26 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.8190549313!2d120.46502881877898!3d15.199400350725119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDExJzU3LjgiTiAxMjDCsDI4JzI1LjgiRQ!5e1!3m2!1sen!2sph!4v1598188707449!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.119722, 120.483333], { icon: aIcon })
  .addTo(pampangamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cutuno" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cutuno</p> <p>Elev: 372 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.444634408595!2d120.45235632850793!3d15.128353545612574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33968c40da8d1c69%3A0xc780ca62bcad8d2a!2sMount%20Cutuno!5e1!3m2!1sen!2sph!4v1598188623039!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
