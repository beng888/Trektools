var abramap = L.map("abramap").setView([17.5951122, 120.7982528], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(abramap);

L.marker([17.3451485, 120.9637456], { icon: eIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mausan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mausan</p> <p>Elev: 2394 m, Prom: 184 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15651.091772704907!2d120.95791192883888!3d17.333353293097012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb435a67fb193%3A0x19c1de53c3c30c65!2sMount%20Mausan!5e1!3m2!1sen!2sph!4v1597962237471!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.2162321, 120.9109379], { icon: eIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mengmeng" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mengmeng</p> <p>Elev: 2283 m, Prom: 128 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15661.076350789252!2d120.90152302881972!3d17.21585330729409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fcb58ff369b43%3A0x6e25330df32e5834!2sMount%20Mengmeng!5e1!3m2!1sen!2sph!4v1597962322613!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3194999, 120.9241], { icon: eIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bangbanglang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bangbanglang</p> <p>Elev: 2233 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15652.275415030517!2d120.91541192883663!3d17.319464394779462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb5147ea74cc5%3A0x3a6e8eb763293f0c!2sMount%20Bangbanglang!5e1!3m2!1sen!2sph!4v1597962404197!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.663333, 121.092222], { icon: eIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manmanoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manmanoc</p> <p>Elev: 2024 m, Prom: 357 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15622.794559060647!2d121.08430082889348!3d17.662242152917774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f08972e342305%3A0x742d9916ee1695eb!2sMount%20Manmanoc!5e1!3m2!1sen!2sph!4v1597962474560!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5231999, 120.9903001], { icon: dIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manmanoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balutictic</p> <p>Elev: 1867 m, Prom: 341 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.154334297973!2d120.98596742886379!3d17.484464374716868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fae7a12c059e1%3A0x780fb02f8326c056!2sMount%20Balutictic!5e1!3m2!1sen!2sph!4v1597962555998!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4955232, 121.0009471], { icon: dIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Madimlong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Madimlong</p> <p>Elev: 1814 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15637.198750078052!2d120.99207852886566!3d17.495575573359968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fae885ebbe04f%3A0xe32ce92f7fa558b1!2sMount%20Madimlong!5e1!3m2!1sen!2sph!4v1597962620544!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5022, 120.9738], { icon: dIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ticmo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ticmo</p> <p>Elev: 1800 m, Prom: 90 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.625127593203!2d120.96513412886677!3d17.50224217254549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fac3230eeefa9%3A0xefc609557c02a61b!2sMount%20Ticmo!5e1!3m2!1sen!2sph!4v1597962699325!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.515, 121.0356998], { icon: dIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buaguan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buagan</p> <p>Elev: 1773 m, Prom: 175 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.525079874575!2d121.0270785288689!3d17.51501997098364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338faf2719aaece1%3A0xd2a0580394ef84a1!2sMount%20Buaguan!5e1!3m2!1sen!2sph!4v1597963002577!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.066667], { icon: dIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pugao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pugao</p> <p>Elev: 1718 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.945397875821!2d121.0579119288719!3d17.53335326874101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa8b015a65025%3A0xac6f97cb785ed0ba!2sMount%20Pugao!5e1!3m2!1sen!2sph!4v1597963141016!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5587999, 120.9341999], { icon: dIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pultoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pultoc</p> <p>Elev: 1576 m, Prom: 338 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15631.740738355797!2d120.92541192887619!3d17.558908865611556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fab70ec866a9d%3A0x401d0e1a54fd22c!2sMount%20Pultoc!5e1!3m2!1sen!2sph!4v1597963217201!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5587999, 120.9341999], { icon: dIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pultoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pultoc</p> <p>Elev: 1576 m, Prom: 338 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15631.740738355797!2d120.92541192887619!3d17.558908865611556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fab70ec866a9d%3A0x401d0e1a54fd22c!2sMount%20Pultoc!5e1!3m2!1sen!2sph!4v1597963217201!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.711111, 120.961944], { icon: dIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bumalayak_North_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bumalayak</p> <p>Elev: 1563 m, Prom: 493 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.689333059314!2d120.95318962890143!3d17.709464347095537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f01604b1b6d6f%3A0xf30fd9ee70733a24!2sMount%20Bumalayak%20North%20Peak!5e1!3m2!1sen!2sph!4v1597963432711!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.745556, 120.960278], { icon: dIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manago" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manago</p> <p>Elev: 1556 m, Prom: 140 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.689333059314!2d120.95318962890143!3d17.709464347095537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f03a4723cffff%3A0xee83eb81e27982aa!2sMount%20Manago!5e1!3m2!1sen!2sph!4v1597963528265!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3499339, 120.7917461], { icon: dIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Puscoy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Posooy</p> <p>Elev: 1529 m, Prom: 517 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15649.670186241196!2d120.78291192884163!3d17.350019991076493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e499aa5ebc1cb%3A0x38ae7f9c76ffea8b!2sMount%20Puscoy!5e1!3m2!1sen!2sph!4v1597963625681!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5206, 120.942], { icon: dIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agapang_(bukid_sa_Pilipinas,_lat_17,52,_long_120,94)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agapang</p> <p>Elev: 1505 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.046557012029!2d120.9331896288698!3d17.52057552030427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fac5f60f314d9%3A0x2e1234189ed025b1!2sMount%20Agapang!5e1!3m2!1sen!2sph!4v1597963797031!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4979251, 120.9367467], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nonan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nonan</p> <p>Elev: 1483 m, Prom: 217 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.983664303498!2d120.92791192886605!3d17.49807557305456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fad06a4c7c689%3A0xba4991a267072ac5!2sMount%20Nonan!5e1!3m2!1sen!2sph!4v1597963893776!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.590833, 121.016944], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Madocay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Madocay</p> <p>Elev: 1431 m, Prom: 261 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15628.908473665197!2d121.00763412888169!3d17.591686661591964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa9b94ca1a329%3A0xb041606987695934!2sMount%20Madocay!5e1!3m2!1sen!2sph!4v1597964234240!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5293, 120.9339], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calao_(bukid_sa_Pilipinas,_lat_17,53,_long_120,93)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calao</p> <p>Elev: 1399 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15634.304556289753!2d120.92513412887122!3d17.529186619250872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fac8c455b4f89%3A0x78302541632879c5!2sMount%20Calao!5e1!3m2!1sen!2sph!4v1597964354627!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.678889, 121.101667], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pulagon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pulagon</p> <p>Elev: 1382 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15620.984731296216!2d121.11374522889702!3d17.683075550350768!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f0f2ad518bd83%3A0x500337b2e092d32e!2sMount%20Pulagon!5e1!3m2!1sen!2sph!4v1597964490926!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 121.083333], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinalitan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sinalitan</p> <p>Elev: 1370 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.945397875821!2d121.07457852887198!3d17.53335326874101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fa61cec04a075%3A0xf87fad467ed0fc43!2sMount%20Sinalitan!5e1!3m2!1sen!2sph!4v1597964587706!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.496625, 120.949947], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagbag" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagbag</p> <p>Elev: 1323 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15637.103165333468!2d120.94124522886584!3d17.496686623224246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fadac2a009143%3A0x86e58d05e078669!2sMount%20Bagbag!5e1!3m2!1sen!2sph!4v1597964670446!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.7955161, 121.0945426], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sandig" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sandig</p> <p>Elev: 1294 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15611.176010533782!2d121.08596742891599!3d17.795575536444122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f106cf143188b%3A0x790a1fc1f899e3da!2sMount%20Sandig!5e1!3m2!1sen!2sph!4v1597964739322!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.516667, 121.016667], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balac" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balac</p> <p>Elev: 1282 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.86416699124!2d121.00041192886628!3d17.499464372884894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fae8cde25cbaf%3A0x26219adc30c3f109!2sMount%20Balac!5e1!3m2!1sen!2sph!4v1597964816755!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.8, 120.75], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sagang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sagang</p> <p>Elev: 1255 m, Prom: 655 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15610.787277702926!2d120.74124522891674!3d17.80001988589318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338efafb2fea9cc7%3A0x4d87feb635397f12!2sMount%20Sagang!5e1!3m2!1sen!2sph!4v1597964903439!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.8, 120.75], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sagang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sagang</p> <p>Elev: 1255 m, Prom: 655 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15610.787277702926!2d120.74124522891674!3d17.80001988589318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338efafb2fea9cc7%3A0x4d87feb635397f12!2sMount%20Sagang!5e1!3m2!1sen!2sph!4v1597964903439!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.716667, 120.95], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tumalpoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tumalpuc</p> <p>Elev: 1210 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.78604758144!2d120.93818962890126!3d17.70835324723268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f017eacd85887%3A0x3b770e9ae0df34b5!2sMount%20Tumalpoc!5e1!3m2!1sen!2sph!4v1597964989791!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.8430994, 120.7019002], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dagot" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dagot</p> <p>Elev: 1205 m, Prom: 317 m  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.016477816383!2d120.69318962892406!3d17.843075530549683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338eeffd1f601807%3A0x2741e69f9c38d90e!2sMount%20Dagot!5e1!3m2!1sen!2sph!4v1597965096536!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.416667, 120.95], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banidas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sanidas</p> <p>Elev: 1182 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15644.303670236022!2d120.91346742885196!3d17.412797733451008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb319c8d3d143%3A0xde47a791bf5492ee!2sMount%20Banidas!5e1!3m2!1sen!2sph!4v1597965181881!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.716667, 121.016667], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gumalayan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gumalayan</p> <p>Elev: 1109 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.06053243569!2d121.00791192890264!3d17.716686646203897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338f043bfa1e01b7%3A0xd295049c2ab7b84a!2sMount%20Gumalayan!5e1!3m2!1sen!2sph!4v1597965485968!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.633333, 120.516667], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Peak_Bulagao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulagao South Peak</p> <p>Elev: 1101 m, Prom: 189 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15624.891363392548!2d120.50902302888943!3d17.638075505892207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e60a2bfeed54f%3A0x86db8344bd3e9242!2sSouth%20Peak%20Bulagao!5e1!3m2!1sen!2sph!4v1597965585867!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4130556, 120.8972222], { icon: cIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palalao_(bukid_sa_Pilipinas,_lat_17,41,_long_120,90)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palalao</p> <p>Elev: 1086 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15644.27988093663!2d120.88846742885198!3d17.413075533417214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338fb33322049c89%3A0x2e9d0506ba5c85d4!2sMount%20Palalao!5e1!3m2!1sen!2sph!4v1597965747132!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.6756, 120.5933], { icon: bIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banti_Goolong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banti Goolong</p> <p>Elev: 880 m, Prom: 187 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15621.636505141307!2d120.58457852889573!3d17.675575551275198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e5f6912887e73%3A0x19ca06db15555fdb!2sMount%20Banti%20Goolong!5e1!3m2!1sen!2sph!4v1597965998441!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3643001, 120.6410997], { icon: bIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pangpang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pangpang</p> <p>Elev: 795 m, Prom: 101 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15648.460796150008!2d120.63235632884397!3d17.36418668935777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e47407135f667%3A0x411a3663f5150014!2sMount%20Pangpang!5e1!3m2!1sen!2sph!4v1597966129820!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3382145, 120.6279634], { icon: bIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kapnis" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kapnis</p> <p>Elev: 746 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15648.460796150008!2d120.63235632884397!3d17.36418668935777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e38aee52c095b%3A0x7abab5408b736e4e!2sMount%20Kapnis!5e1!3m2!1sen!2sph!4v1597966264647!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.433333, 120.666667], { icon: bIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masisip" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masisip</p> <p>Elev: 556 m, Prom: 107 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15642.542414517104!2d120.65791192885536!3d17.43335323094903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e45d2b089ad69%3A0xc9730f85699cad8c!2sMount%20Masisip!5e1!3m2!1sen!2sph!4v1597966405808!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5007774, 120.4669575], { icon: bIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gusing" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gusing</p> <p>Elev: 537 m, Prom: 139 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.744651886476!2d120.45818962886653!3d17.500853272715204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e68e266fd61a5%3A0xcb657792c100d805!2sMount%20Gusing!5e1!3m2!1sen!2sph!4v1597966486062!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4116818, 120.6506063], { icon: bIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kakauaya" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kakauayan</p> <p>Elev: 522 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15644.39881091167!2d120.64180082885179!3d17.41168668358618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e46916c82c391%3A0x5ba7a016ae4bcc76!2sMount%20Kakauaya!5e1!3m2!1sen!2sph!4v1597966575127!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.4086001, 120.567], { icon: aIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banmika" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banmika</p> <p>Elev: 410 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15644.660435629658!2d120.55818962885125!3d17.408631083957857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e41af5f07f831%3A0xdce2dbee7b064cf0!2sMount%20Banmika!5e1!3m2!1sen!2sph!4v1597966661391!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.483333, 120.633333], { icon: aIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salayot" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salayot</p> <p>Elev: 316 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.249862953357!2d120.62457852886361!3d17.48335322485252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e449038c8898f%3A0x5e6d56fbfe22016!2sMount%20Salayot!5e1!3m2!1sen!2sph!4v1597966724565!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.533333, 120.716667], { icon: aIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calao_(bukid_sa_Pilipinas,_lat_17,53,_long_120,72)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calao</p> <p>Elev: 110 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.945397875816!2d120.70791192887192!3d17.533353268741006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e507997556907%3A0x99556f0a9e5433d4!2sMount%20Calao!5e1!3m2!1sen!2sph!4v1597966922991!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.516667, 120.716667], { icon: aIcon })
  .addTo(abramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agapang_(bukid_sa_Pilipinas,_lat_17,52,_long_120,72)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agapang</p> <p>Elev: 90 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15635.38153543624!2d120.70791192886917!3d17.51668667077984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338e500beb7fb4e3%3A0x3243f90a5a9452cf!2sMount%20Agapang!5e1!3m2!1sen!2sph!4v1597967032704!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
