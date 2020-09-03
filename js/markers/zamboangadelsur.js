var zamboangadelsurmap = L.map("zamboangadelsurmap").setView(
  [7.8383054, 123.2966657],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(zamboangadelsurmap);

L.marker([7.9966, 123.2565], { icon: cIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sugarloaf_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sugarloaf</p> <p>Elev: 1376 m, Prom: 1062 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16236.229637164955!2d123.24763412785947!3d7.996687706977409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32540d57aeba4e8b%3A0xbd3b26d5e5e03e50!2sMount%20Sugarloaf!5e1!3m2!1sen!2sph!4v1599077862312!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9833333, 123.2333333], { icon: cIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Pinukis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinukis</p> <p>Elev: 1213 m, Prom: 253 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.437857398403!2d123.25789982785587!3d7.915690112085493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325411e44f05ba31%3A0xccb326f9ada86c16!2sMount%20Pinukis!5e1!3m2!1sen!2sph!4v1599077928387!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.0, 123.25], { icon: bIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="<img title="No Available Wikis" src="wikilogo.svg"/>" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sugarloaf Complex</p> <p>Elev: 865 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16418.889695977196!2d123.24122550272403!3d8.000005300065855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDAnMDAuMCJOIDEyM8KwMTUnMDAuMCJF!5e1!3m2!1sen!2sph!4v1599078025348!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8541667, 123.2833333], { icon: bIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bigong_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bigong</p> <p>Elev: 736 m, Prom: 415 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.756066437923!2d123.30714822785212!3d7.831040017379306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32541a6811677737%3A0x6233d8033fa71a25!2sBigong%2C%20Tigbao%2C%20Zamboanga%20del%20Sur!5e1!3m2!1sen!2sph!4v1599078067772!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.6869444, 123.2361111], { icon: bIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Imbing" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Imbing</p> <p>Elev: 723 m, Prom: 432 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16248.322135581166!2d123.22735632784602!3d7.686965426284491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256a8401c48ed65%3A0xf2001e5a3cc3115d!2sMount%20Imbing!5e1!3m2!1sen!2sph!4v1599078124855!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.2255, 123.4259], { icon: bIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dapiak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dapiak</p> <p>Elev: 548 m, Prom: 181 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16226.988235793015!2d123.41707852787026!3d8.225576542317102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325460bb207313e3%3A0x6d4531cf2a818eeb!2sMount%20Dapiak!5e1!3m2!1sen!2sph!4v1599078156187!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7036111, 123.1769444], { icon: bIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bulibu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulibu</p> <p>Elev: 546 m, Prom: 279 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.68350130868!2d123.16818962784673!3d7.703632125261089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256a9fa5c1948ab%3A0xf1cca9bb53981e18!2sMount%20Bulibu!5e1!3m2!1sen!2sph!4v1599078178882!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5958333, 123.275], { icon: bIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buga_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buga</p> <p>Elev: 530 m, Prom: 293 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16251.789025906683!2d123.26624522784229!3d7.595854331847787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256a59bf80e14ff%3A0xb7825b79cc6af08b!2sMount%20Buga!5e1!3m2!1sen!2sph!4v1599078224965!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.615, 123.2966667], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bacauan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bacauan</p> <p>Elev: 482 m, Prom: 104 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16251.789025906683!2d123.26624522784229!3d7.595854331847787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256a5ce5fda6f77%3A0xbbbd0e8a5a0ea74f!2sMount%20Bacauan!5e1!3m2!1sen!2sph!4v1599078259309!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.6363889, 123.3216667], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dupungan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dupungan</p> <p>Elev: 385 m, Prom: 148 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16251.063122179936!2d123.28791192784304!3d7.615021030681861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256a696dc6cc9b7%3A0x6cf2b310046426b3!2sMount%20Dupungan!5e1!3m2!1sen!2sph!4v1599078288410!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5297222, 123.145], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tarranosa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tarranosa</p> <p>Elev: 367 m, Prom: 225 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16254.278907259666!2d123.13624522783968!3d7.529743235851457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256b24a8cb2eb47%3A0xc0cacf74a02c319a!2sMount%20Tarranosa!5e1!3m2!1sen!2sph!4v1599078315206!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.85, 123.1666667], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Wood</p> <p>Elev: 325 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4060.5039313328098!2d123.16447801482526!3d7.850005308498489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTEnMDAuMCJOIDEyM8KwMTAnMDAuMCJF!5e1!3m2!1sen!2sph!4v1599078835209!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4283, 123.3922], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Flecha" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Flecha</p> <p>Elev: 304 m, Prom: 296 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16258.055379330724!2d123.38346742783575!3d7.428354341937407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256bf00b78f66cb%3A0x1078809f4132cb98!2sMount%20Flecha!5e1!3m2!1sen!2sph!4v1599078884026!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.2118, 123.4172], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Baba-an_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Baba-an Hill</p> <p>Elev: 284 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16227.556380647302!2d123.40846742786951!3d8.211687693216172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3254674a67deb911%3A0x60b7bf0657d4e0e4!2sBaba-an%20Hill!5e1!3m2!1sen!2sph!4v1599078944713!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.6596, 123.1564], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pang_Pang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pang Pang</p> <p>Elev: 240 m, Prom: 164 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.362278537894!2d123.1476341278449!3d7.659743227952235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256abc3205c3db1%3A0x403e4c44f54d9946!2sMount%20Pang%20Pang!5e1!3m2!1sen!2sph!4v1599078972036!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.073333, 125.298889], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lago_Hill_(bungtod_sa_Pilipinas,_Zamboanga_Peninsula)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lago Hill</p> <p>Elev: 225 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16253.527948679137!2d123.24930082784047!3d7.549743234643203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256b0074330f815%3A0xdcc97f556811fcd5!2sLago%20Hill!5e1!3m2!1sen!2sph!4v1599078999764!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.6705, 123.1402], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bauk_(bungtod_sa_Pilipinas,_lat_7,67,_long_123,14)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bauk</p> <p>Elev: 202 m, Prom: 139 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16248.948780610652!2d123.13152302784536!3d7.670576627289104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256abb1291ba72d%3A0x2a9cfc1e9c216001!2sMount%20Bauk!5e1!3m2!1sen!2sph!4v1599079031486!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.478056, 123.18], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Botetian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Botetian</p> <p>Elev: 190 m, Prom: 176 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16256.209714039212!2d123.17124522783767!3d7.478076638960975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256b6a554e34bb1%3A0xf55e18126a2cf35e!2sMount%20Botetian!5e1!3m2!1sen!2sph!4v1599079075755!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.65, 123.166667], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pinangian_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinangian Hill</p> <p>Elev: 170 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.732868688141!2d123.15791192784452!3d7.6500210285467105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256abe24fd8a69b%3A0xb69a9d646f07c991!2sPinangian%20Hill!5e1!3m2!1sen!2sph!4v1599079103665!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5005, 123.3028], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panaga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panaga</p> <p>Elev: 161 m, Prom: 122 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.370502497899!2d123.29402302783855!3d7.5005766376089165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256ba4ca6ef143d%3A0xc3bd487e6eeb5fff!2sMount%20Panaga!5e1!3m2!1sen!2sph!4v1599079127241!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.526667, 123.378611], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bacayawan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bacayawan Hill</p> <p>Elev: 115 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.370502497899!2d123.29402302783855!3d7.5005766376089165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256bcc27721150f%3A0x7490c5ce9959f4f7!2sBacayawan%20Hill!5e1!3m2!1sen!2sph!4v1599079151903!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4833333, 123.1833333], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Batelian</p> <p>Elev: 99 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16260.731152949153!2d123.17461118201929!3d7.483338606624606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjknMDAuMCJOIDEyM8KwMTEnMDAuMCJF!5e1!3m2!1sen!2sph!4v1599079231094!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.583333, 123.333333], { icon: aIcon })
  .addTo(zamboangadelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sambulauan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sambulauan Hill</p> <p>Elev: 16 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16252.261458871406!2d123.32457852784182!3d7.583354382606918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3256a4890d05db55%3A0x2e43dfe8849be1a4!2sSambulauan%20Hill!5e1!3m2!1sen!2sph!4v1599079274882!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
