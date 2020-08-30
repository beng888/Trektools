var tarlacmap = L.map("tarlacmap").setView([15.4470354, 120.469642], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(tarlacmap);

L.marker([15.363889, 120.169167], { icon: dIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Iba_(bukid_sa_Pilipinas,_lat_15,36,_long_120,17)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iba</p> <p>Elev: 1677 m, Prom: 292 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15809.719108084562!2d120.16013412854039!3d15.363909170044733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969fd04879ac4b%3A0x4f216e99a1a6489!2sMount%20Iba!5e1!3m2!1sen!2sph!4v1598132017923!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.426944, 120.314722], { icon: bIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gatas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gates</p> <p>Elev: 509 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.737048246929!2d120.3118008285257!3d15.257798031604215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969a678836ca7f%3A0xb6fc29fb50f9ebb0!2sMount%20Gatas!5e1!3m2!1sen!2sph!4v1598132070606!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.437016, 120.4315408], { icon: aIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Monasterio_de_Tarlac" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Resurrection</p> <p>Elev: 306 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16220.974462056678!2d120.4227481628892!3d15.437021142417759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI2JzEzLjMiTiAxMjDCsDI1JzUzLjYiRQ!5e1!3m2!1sen!2sph!4v1598132177684!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5666667, 120.4], { icon: aIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Pitongbayog II</p> <p>Elev: 283 m, Prom: 199 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.299982993132!2d120.39129199572326!3d15.566671828696961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM0JzAwLjAiTiAxMjDCsDI0JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598132503477!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.3236111, 120.4241667], { icon: aIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Hog_Back_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Hog Back Hill</p> <p>Elev: 201 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.7689578764!2d120.41541192853481!3d15.323631324440582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969664b4bc21cb%3A0x4a4589f37c0c356c!2sHog%20Back%20Hill!5e1!3m2!1sen!2sph!4v1598132597742!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5666667, 120.3833333], { icon: aIcon })
  .addTo(tarlacmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Pitongbayog I</p> <p>Elev: 79 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.506318519087!2d120.3745736113663!3d15.566671844132378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDM0JzAwLjAiTiAxMjDCsDIzJzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598132438064!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
