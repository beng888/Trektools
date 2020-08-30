var quezonmap = L.map("quezonmap").setView([14.1746903, 121.947311], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(quezonmap);

L.marker([14.0675334, 121.4923178], { icon: eIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banahaw_Crater" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banahaw</p> <p>Elev: 2169 m, Prom: 1925 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15903.952686070577!2d121.48374522837054!3d14.067520406552694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd50491acfe50d%3A0x3aac71c10f398f73!2sMount%20Banahaw!5e1!3m2!1sen!2sph!4v1598291675080!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.075548, 121.513256], { icon: dIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banahao_De_Lucban" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Banahao De Lucban</p> <p>Elev: 1871 m, Prom: 319 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15903.411553920454!2d121.50430082837153!3d14.075298205764419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd51a1eddaf3c1%3A0xfafcf64e38f839fc!2sMount%20Banahao%20De%20Lucban!5e1!3m2!1sen!2sph!4v1598291732807!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0120087, 122.7898516], { icon: cIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Labo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Labo</p> <p>Elev: 1056 m, Prom: 1482 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.713148329189!2d122.7787452283639!3d14.013353712032098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3398a0a00abed67d%3A0xde476f726352def3!2sMount%20Labo!5e1!3m2!1sen!2sph!4v1598291779281!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.816667, 121.35], { icon: cIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caladang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caladang</p> <p>Elev: 1435 m, Prom: 59 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.486306225055!2d121.34124522846608!3d14.816687028921024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979ea65dc787fd%3A0x31249e1cbb02a536!2sMount%20Caladang!5e1!3m2!1sen!2sph!4v1598291810381!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.685278, 121.436667], { icon: cIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malabito" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malabito</p> <p>Elev: 1334 m, Prom: 758 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.039308190831!2d121.42763412844884!3d14.685575942755642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979022fcb9080d%3A0x4c0b89568618cc03!2sMount%20Malabito!5e1!3m2!1sen!2sph!4v1598291876206!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6385233, 121.5486482], { icon: cIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binangonan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binangonan</p> <p>Elev: 1079 m, Prom: 781 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.897060067788!2d121.54652302844372!3d14.646131446897163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339789213cbfc7c3%3A0xd34e537e94d91946!2sMount%20Binangonan!5e1!3m2!1sen!2sph!4v1598291904963!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6385233, 121.5486482], { icon: cIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binuang_(bukid_sa_Pilipinas,_Calabarzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binuang</p> <p>Elev: 1076 m, Prom: 562 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.531220182667!2d121.54818962846059!3d14.775020333329032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397814b02879a87%3A0xcf012a515c9991a7!2sMount%20Binuang!5e1!3m2!1sen!2sph!4v1598291958328!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.646747, 121.5553693], { icon: cIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palokong_Simbahan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palokong Simbahan</p> <p>Elev: 1019 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.670356632958!2d121.56068962844596!3d14.663075895119235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339788edd955df9f%3A0x5ea23faa23681cda!2sMount%20Palokong%20Simbahan!5e1!3m2!1sen!2sph!4v1598292008913!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9988109, 121.3858723], { icon: bIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>summit</p> <p>Elev: 974 m, Prom: 423 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16929.405961873148!2d121.37696138682492!3d14.998816057901621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDU5JzU1LjciTiAxMjHCsDIzJzA5LjEiRQ!5e1!3m2!1sen!2sph!4v1598292236109!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.050593, 121.4226146], { icon: bIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>peak</p> <p>Elev: 857 m, Prom: 279 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16700.1500984772!2d121.41370499786746!3d15.050598154988744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDAzJzAyLjEiTiAxMjHCsDI1JzIxLjQiRQ!5e1!3m2!1sen!2sph!4v1598292381638!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0113221, 121.4443346], { icon: bIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_San_Cristobal" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>San Cristobal</p> <p>Elev: 733 m, Prom: 202 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15387.480943412309!2d121.41297036286538!3d14.069645261587944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5ac092c43847%3A0x628c6a9cd5f75446!2sMount%20San%20Cristobal!5e1!3m2!1sen!2sph!4v1598292547737!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.274444, 121.698056], { icon: bIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Luntao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Luntan</p> <p>Elev: 512 m, Prom: 128 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.494136102225!2d121.69207852839617!3d14.273909285509497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339803ebc1764547%3A0x5e53fb27d6995297!2sMount%20Luntao!5e1!3m2!1sen!2sph!4v1598292589397!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3905695, 122.5600399], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kodiapi</p> <p>Elev: 457 m, Prom: 418 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16387.94765736512!2d122.55124926222888!3d13.390574697953033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDIzJzI2LjEiTiAxMjLCsDMzJzM2LjEiRQ!5e1!3m2!1sen!2sph!4v1598293774219!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1420013, 122.021985], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Camagon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Camagong</p> <p>Elev: 419 m, Prom: 419 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15898.780691267168!2d122.0129119283797!3d14.14168709902086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3398756ece685561%3A0x53cbc9bf99200229!2sMount%20Camagon!5e1!3m2!1sen!2sph!4v1598292696485!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.379396, 122.5612556], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Codiapi_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount South Kodiapi</p> <p>Elev: 414 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.77290106222!2d122.55235632828888!3d13.377798274974042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b2eabcd39a85%3A0xfca969c9bf42d006!2sSouth%20Codiapi%20Mountain!5e1!3m2!1sen!2sph!4v1598292729466!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9750244, 121.4542003], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mayabobo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mayabobo</p> <p>Elev: 408 m, Prom: 145 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16392.426940806028!2d121.4443734852154!3d13.97449262832531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd4f50916fc90b%3A0x5d1bc93b844a1876!2sMount%20Mayabobo!5e1!3m2!1sen!2sph!4v1598292785002!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3233333, 122.6069444], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anuing" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anuing</p> <p>Elev: 397 m, Prom: 162 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.370398411142!2d122.59818962828267!3d13.323353780250079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b3e84f2ffdff%3A0xdf9d3d6e1b347ee9!2sMount%20Anuing!5e1!3m2!1sen!2sph!4v1598292807266!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3963421, 122.6014731], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balinsog</p> <p>Elev: 391 m, Prom: 116 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.705572265624!2d122.58541192829068!3d13.393909423409262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a24ccd54ab0ec3%3A0x60c1e20dfa1fdb5a!2sBalinsog%20Hill!5e1!3m2!1sen!2sph!4v1598292849122!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9603757, 121.2789484], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>211 DH Tracks</p> <p>Elev: 390 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15642.96097670987!2d121.27017053463588!3d13.960380888096923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU3JzM3LjQiTiAxMjHCsDE2JzQ0LjIiRQ!5e1!3m2!1sen!2sph!4v1598292986617!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9990172, 121.8122839], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Pinagbanderahan</p> <p>Elev: 387 m, Prom: 308 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.1781656415824!2d121.8101289148567!3d13.998921895290303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a2a555bf00266f%3A0x26c7462ab7c39231!2sPinagbanderahan!5e1!3m2!1sen!2sph!4v1598293066046!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3266667, 122.6363889], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Hamaca" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Hamaca</p> <p>Elev: 387 m, Prom: 144 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.150553264373!2d122.62763412828306!3d13.326687179927575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b40d2858e1f7%3A0x6e75a0f679845643!2sMount%20Hamaca!5e1!3m2!1sen!2sph!4v1598293188908!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.5228094, 122.4372621], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maclayao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maclayao</p> <p>Elev: 382 m, Prom: 279 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15940.972865588436!2d122.4293008283058!3d13.52502046061559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a256cf01a7fa4f%3A0xa11ab2b703f828b4!2sMount%20Maclayao!5e1!3m2!1sen!2sph!4v1598293243427!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0296084, 122.7283515], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bayabas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bayabas</p> <p>Elev: 382 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.019979577664!2d122.74846742836513!3d14.02335371102188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3398a07bfc35e14f%3A0x3eae54e71ec0e8e5!2sMount%20Bayabas!5e1!3m2!1sen!2sph!4v1598293273560!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4040668, 122.5600792], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Codiapi_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount North Kodiapi</p> <p>Elev: 371 m, Prom: 38 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.245135171397!2d122.54818962829151!3d13.400853772734301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a24d4b1dd9c78b%3A0xfefdcf341213857d!2sNorth%20Codiapi%20Mountain!5e1!3m2!1sen!2sph!4v1598293311588!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.288962, 122.6257025], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banaba" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banaba</p> <p>Elev: 368 m, Prom: 97 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.328252827849!2d122.61180082827931!3d13.293631633122617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b14937ba918f%3A0x1ca3f0ea9f1a9569!2sMount%20Banaba!5e1!3m2!1sen!2sph!4v1598293339882!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3551336, 122.5707878], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amunbay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amunbay</p> <p>Elev: 364 m, Prom: 93 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.096103141886!2d122.56152302828659!3d13.35779827691431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b2f7ee921ec1%3A0x4bbe39dd8f1779bc!2sMount%20Amunbay!5e1!3m2!1sen!2sph!4v1598293422895!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.316667, 122.65], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_San_Andres" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount San Andres</p> <p>Elev: 363 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.80991351585!2d122.64124522828192!3d13.316687180894865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b417dea765cf%3A0x7b4c45d4f1070232!2sMount%20San%20Andres!5e1!3m2!1sen!2sph!4v1598293472440!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1545991, 122.01452], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>summit</p> <p>Elev: 349 m, Prom: 168 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15990.093234926786!2d122.00584495930968!3d14.154604277962667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA5JzE2LjYiTiAxMjLCsDAwJzUyLjMiRQ!5e1!3m2!1sen!2sph!4v1598293548113!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4, 122.55], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Godiap" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Godiap</p> <p>Elev: 349 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.300398534502!2d122.54124522829139!3d13.400020472815308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b2b2b5f55bd5%3A0x547edcc543a275b0!2sMount%20Godiap!5e1!3m2!1sen!2sph!4v1598293617182!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2634769, 122.635832], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guinamuan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ginamuan</p> <p>Elev: 341 m, Prom: 42 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.172385690075!2d122.6259674282761!3d13.265576085829103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b72995478017%3A0x87eed21d2997f7d2!2sMount%20Guinamuan!5e1!3m2!1sen!2sph!4v1598293850457!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4515658, 122.6164145], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dagmit" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dagmit</p> <p>Elev: 335 m, Prom: 154 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.608639447855!2d122.60457852829776!3d13.45557606740511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a24c13b5f59343%3A0xc5c004b532740c81!2sMount%20Dagmit!5e1!3m2!1sen!2sph!4v1598293879533!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7914431, 121.9443699], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malolo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malolo</p> <p>Elev: 325 m, Prom: 325 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15562.591208293836!2d121.96080918942276!3d14.78335017850225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33983537e77fc72d%3A0x16fcdc185d229d4!2sMount%20Malolo!5e1!3m2!1sen!2sph!4v1598293961948!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.383333, 122.566667], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Codiapi_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Codiapi</p> <p>Elev: 319 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15942.193216871778!2d122.55789293728331!3d13.383338199712929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDIzJzAwLjAiTiAxMjLCsDM0JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598294040098!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4783481, 122.5967602], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabagao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cambagaco</p> <p>Elev: 302 m, Prom: 164 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15944.053633369324!2d122.59041192830045!3d13.478909365127159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a24e9c0130c093%3A0x6ebf1927e018094b!2sMount%20Cambagaco!5e1!3m2!1sen!2sph!4v1598294066060!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.5311111, 122.5516667], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pajao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pajao</p> <p>Elev: 298 m, Prom: 94 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15940.563796820412!2d122.54291192830648!3d13.53113156001669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a24fcf791397f1%3A0xc72bdc12d5e18bab!2sMount%20Pajao!5e1!3m2!1sen!2sph!4v1598294132345!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.1997222, 122.5613889], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Candago" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Candago</p> <p>Elev: 285 m, Prom: 152 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15962.484685140835!2d122.55263412826874!3d13.199742742160808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3bae0f2a17143%3A0xa2c264dc81d9053e!2sMount%20Candago!5e1!3m2!1sen!2sph!4v1598294168203!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.225, 122.5758333], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bunsaua" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bunsaua</p> <p>Elev: 270 m, Prom: 103 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15960.831402023628!2d122.56707852827157!3d13.225020489732822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3ba85f684c1b9%3A0xf1547d9c029e71b!2sMount%20Bunsaua!5e1!3m2!1sen!2sph!4v1598294202171!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3525315, 122.6434524], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Morabi" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Morabe</p> <p>Elev: 265 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952.444958803831!2d122.634578528286!3d13.352520477425912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b48ebf6ff33b%3A0xd87dfcb86353440c!2sMount%20Morabi!5e1!3m2!1sen!2sph!4v1598294258931!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3649898, 122.6274775], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matsimbahan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matsimbahan</p> <p>Elev: 263 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15951.930809175466!2d122.61957852828688!3d13.360298276671914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b49d65c45081%3A0xdccf37151f7c5997!2sMount%20Matsimbahan!5e1!3m2!1sen!2sph!4v1598294287195!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2336111, 122.5625], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Compare" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Compare</p> <p>Elev: 261 m, Prom: 67 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15960.267486371433!2d122.55374522827255!3d13.23363158890479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3ba9f1ccfb921%3A0xa2da7d7603282da1!2sMount%20Compare!5e1!3m2!1sen!2sph!4v1598294320356!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2819444, 122.6480556], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cambaldis" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cambaldis</p> <p>Elev: 257 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15960.267486371433!2d122.55374522827255!3d13.23363158890479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b6c1a577e267%3A0xc6c0468f44f4304b!2sMount%20Cambaldis!5e1!3m2!1sen!2sph!4v1598294356202!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4936111, 122.4302778], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Canguit" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canguit</p> <p>Elev: 241 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15943.071138097852!2d122.42152302830216!3d13.493631563688139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a2541c065f2b49%3A0xf2d5b38ce1e866f4!2sMount%20Canguit!5e1!3m2!1sen!2sph!4v1598294392516!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2522222, 122.5430556], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baga-Simbaban" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baga-Simbaban</p> <p>Elev: 214 m, Prom: 71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.047468528785!2d122.53430082827462!3d13.252242687113627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a3b01b80253d6b%3A0xb9c98308f2ac26c4!2sMount%20Baga-Simbaban!5e1!3m2!1sen!2sph!4v1598294468678!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4880556, 122.4572222], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cancalao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cancalao</p> <p>Elev: 200 m, Prom: 111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15943.442011547088!2d122.44846742830151!3d13.488076064231313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a253fb39b119a5%3A0xccc4f18306fdb1c3!2sMount%20Cancalao!5e1!3m2!1sen!2sph!4v1598294516172!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9, 122.183333], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pinaglaoatan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pinaglapatan</p> <p>Elev: 183 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.726123472914!2d122.17235632834982!3d13.897242623716885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a28e2c6fbc53e3%3A0xbca2e48a2b5cf28!2sMount%20Pinaglaoatan!5e1!3m2!1sen!2sph!4v1598294557430!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4497222, 122.4588889], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cantagay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cantagay</p> <p>Elev: 176 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15945.996982762039!2d122.4501341282971!3d13.449742667974084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a25377437cd667%3A0x438a3b9b7579c64b!2sMount%20Cantagay!5e1!3m2!1sen!2sph!4v1598294606404!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.889722, 121.789444], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lipata_(bungtod_sa_Pilipinas,_Calabarzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lipata</p> <p>Elev: 163 m, Prom: 163 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15916.355942328642!2d121.77735632834872!3d13.888075974635845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a2b712ec73b2bb%3A0xa8951158dc875667!2sMount%20Lipata!5e1!3m2!1sen!2sph!4v1598294644962!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0847222, 122.5277778], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tuba" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tuba</p> <p>Elev: 163 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15902.75407586816!2d122.51902302837266!3d14.084742604806749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339882d046ba404d%3A0x9caa831b3453369a!2sMount%20Tuba!5e1!3m2!1sen!2sph!4v1598294689700!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.083333, 122.583333], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nalusbitan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nalusbitan</p> <p>Elev: 159 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15902.444519591101!2d122.60235632837325!3d14.089187104355876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33989c30cddbb1e1%3A0xddbcbdf81084c438!2sMount%20Nalusbitan!5e1!3m2!1sen!2sph!4v1598294753499!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0217123, 121.5235642], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>peak</p> <p>Elev: 148 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16011.435583484925!2d121.51474076655167!3d15.02171745970547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDAxJzE4LjIiTiAxMjHCsDMxJzI0LjgiRQ!5e1!3m2!1sen!2sph!4v1598294899661!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.5311111, 122.6136111], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pusgo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pusgo</p> <p>Elev: 116 m, Prom: 109 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15940.563796820412!2d122.6048563283065!3d13.531131560016693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a24f38f5f7c463%3A0x54f57341ce4d43d7!2sMount%20Pusgo!5e1!3m2!1sen!2sph!4v1598295034737!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9366667, 121.4125], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Malasanya_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malasanya Hill</p> <p>Elev: 114 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15913.011337231166!2d121.4037452283546!3d13.936687119756709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd464e3ecac549%3A0x5e052ffc98ad3af9!2sMalasanya%20Hill!5e1!3m2!1sen!2sph!4v1598295076831!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.929444, 121.774167], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mitra" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mitra</p> <p>Elev: 37 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15913.623778282996!2d121.7695785283535!3d13.927798220649983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a2b0cf9181f62d%3A0x6c02c301bf0c6dd5!2sMount%20Mitra!5e1!3m2!1sen!2sph!4v1598295115091!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0234232, 122.3073907], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Kuyaoyao Hilltop 1</p> <p>Elev: 26 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.878904945494!2d122.2986382425987!3d14.02342837419715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDAxJzI0LjMiTiAxMjLCsDE4JzI2LjYiRQ!5e1!3m2!1sen!2sph!4v1598295240362!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0177189, 122.3089785], { icon: aIcon })
  .addTo(quezonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Kuyaoyao Hilltop</p> <p>Elev: 24 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.524411685243!2d122.30021426103765!3d14.017724085764277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDAxJzAzLjgiTiAxMjLCsDE4JzMyLjMiRQ!5e1!3m2!1sen!2sph!4v1598295272641!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
