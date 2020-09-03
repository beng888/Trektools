var lanaodelnortemap = L.map("lanaodelnortemap").setView(
  [7.8721811, 123.8857747],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(lanaodelnortemap);

L.marker([7.8195046, 123.9267166], { icon: dIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Iniaoan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iniaoan</p> <p>Elev: 1524 m, Prom: 499 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597136.68396597!2d122.94521136893493!3d6.684706133559446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255ce4dde55277b%3A0x3c044e95649ccf0c!2sMount%20Iniaoan!5e1!3m2!1sen!2sph!4v1599074300032!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8887041, 124.0101363], { icon: cIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Galantay_Mountain_Range" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Galantay</p> <p>Elev: 1449 m, Prom: 224 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16241.939107864506!2d123.96430082785311!3d7.851965416074926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255cf58efb648ad%3A0xaf724f0211bae393!2sGalantay%20Mountain%20Range!5e1!3m2!1sen!2sph!4v1599074332406!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.883333, 124.016667], { icon: cIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tutay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tutay</p> <p>Elev: 1279 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16240.709576626436!2d124.00791192785444!3d7.883354314113081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255c65ed50f5543%3A0x27c5689f96e4f02c!2sMount%20Tutay!5e1!3m2!1sen!2sph!4v1599074404271!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8102377, 123.9614775], { icon: cIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Beabe" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Beabe</p> <p>Elev: 1270 m, Prom: 179 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16243.315148887581!2d123.95791192785153!3d7.816687718272339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255cf8f08194163%3A0xb2683fe1bb61adcf!2sMount%20Beabe!5e1!3m2!1sen!2sph!4v1599074427765!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.818367, 123.9121184], { icon: cIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Katubuan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Katubuan</p> <p>Elev: 1238 m, Prom: 125 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16243.315148887581!2d123.95791192785153!3d7.816687718272339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255ce43c7b59115%3A0x4d2f58330baa2805!2sMount%20Katubuan!5e1!3m2!1sen!2sph!4v1599074453643!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8185484, 123.9083629], { icon: cIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/West_Latrigan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>West Latrigan</p> <p>Elev: 1232 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16243.196209706104!2d123.90291192785163!3d7.819743218082338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255ce465905b88b%3A0x66f086155aa5b761!2sWest%20Latrigan!5e1!3m2!1sen!2sph!4v1599074480359!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9669217, 124.1292349], { icon: cIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mamot</p> <p>Elev: 1173 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4059.353167977279!2d124.12704621482544!3d7.966927006910157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTgnMDAuOSJOIDEyNMKwMDcnNDUuMyJF!5e1!3m2!1sen!2sph!4v1599075859320!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.833199, 123.9833234], { icon: cIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ynoma_Pyramid" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ynoma Pyramid</p> <p>Elev: 1099 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.665819295678!2d123.97457852785222!3d7.833354317235182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255c585aa0f1c4d%3A0x8153dc749c30e780!2sYnoma%20Pyramid!5e1!3m2!1sen!2sph!4v1599074543382!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8, 123.966667], { icon: cIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Golocat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Golocat</p> <p>Elev: 1097 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6124.00591906135!2d123.9806542228258!3d7.835036127894181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255cff080a213bd%3A0x5ac1c92c6d52f27f!2sMount%20Golocat!5e1!3m2!1sen!2sph!4v1599074581360!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.833333, 123.983333], { icon: cIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Babonga_Lana_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Babonga Lana Hill</p> <p>Elev: 1084 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.665819295682!2d123.97457852785219!3d7.833354317235192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255c585aa0f1c4d%3A0x9df1229bdc5a4f0f!2sBabonga%20Lana%20Hill!5e1!3m2!1sen!2sph!4v1599074611365!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.032222, 124.118333], { icon: cIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Puerai" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Puerai</p> <p>Elev: 1051 m, Prom: 247 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16234.799968949714!2d124.10957852786112!3d8.032521004704284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255bda8c9c0aead%3A0xadd9d449194da83!2sMount%20Puerai!5e1!3m2!1sen!2sph!4v1599074637119!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.833333, 123.916667], { icon: bIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/East_Latrigan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>East Latrigan</p> <p>Elev: 880 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.665819295678!2d123.90791192785224!3d7.833354317235184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255cef7ca784e89%3A0xbbffed29172771b1!2sEast%20Latrigan!5e1!3m2!1sen!2sph!4v1599074680806!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7766142, 123.9270909], { icon: bIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tagunayon_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tagunayon Mountain</p> <p>Elev: 818 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.665819295678!2d123.90791192785224!3d7.833354317235184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255d1c5aa5d6581%3A0xf545c2c3ab00788e!2sTagunayon%20Mountain!5e1!3m2!1sen!2sph!4v1599074714118!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7882865, 123.8889922], { icon: bIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kulukuk" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kulukuk</p> <p>Elev: 754 m, Prom: 114 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.609692470473!2d123.90791192785012!3d7.783354320341377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255d1ee89215fff%3A0x6aeb78ecb73d150a!2sMount%20Kulukuk!5e1!3m2!1sen!2sph!4v1599074738796!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.766667, 123.9], { icon: bIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binetenan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binetenan</p> <p>Elev: 722 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.609692470473!2d123.89124522785009!3d7.783354320341377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255d19a56bcb61f%3A0x58c710196150edb1!2sMount%20Binetenan!5e1!3m2!1sen!2sph!4v1599074761888!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7916667, 123.7666667], { icon: bIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Sigayan</p> <p>Elev: 653 m, Prom: 194 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16952.708870176444!2d123.7578589696625!3d7.791672003603187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDcnMzAuMCJOIDEyM8KwNDYnMDAuMCJF!5e1!3m2!1sen!2sph!4v1599074839390!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.75, 123.883333], { icon: bIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bugionga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bugionga</p> <p>Elev: 586 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16245.898733961294!2d123.87457852784866!3d7.750021022403315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255d3d84c2a82cb%3A0x8426743870b969c1!2sMount%20Bugionga!5e1!3m2!1sen!2sph!4v1599074908724!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.0555194, 123.851034], { icon: bIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Catmon</p> <p>Elev: 583 m, Prom: 361 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16657.822418632735!2d123.84222753594291!3d8.055524699770652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDMnMTkuOSJOIDEyM8KwNTEnMDMuNyJF!5e1!3m2!1sen!2sph!4v1599074980150!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.048, 123.8786], { icon: bIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Catmon_(bukid_sa_Pilipinas,_Amihanang_Mindanao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Catmon</p> <p>Elev: 550 m, Prom: 224 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16234.177358762574!2d123.86985632786183!3d8.04807660371496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255b3da48891343%3A0x2a237fa4ee908c6c!2sMount%20Catmon!5e1!3m2!1sen!2sph!4v1599075046621!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.0875, 124.206667], { icon: bIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Apo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Apo Hill</p> <p>Elev: 548 m, Prom: 104 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16232.59323943612!2d124.19791192786364!3d8.087521001199411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325599b719f6dd6f%3A0xd1179f071d77a419!2sApo%20Hill!5e1!3m2!1sen!2sph!4v1599075070622!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.079, 123.8718], { icon: aIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bucas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bucas</p> <p>Elev: 427 m, Prom: 76 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16232.93972470686!2d123.86291192786325!3d8.078909901749423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255b2162cf6eacf%3A0x9944f538fa85ef11!2sMount%20Bucas!5e1!3m2!1sen!2sph!4v1599075095950!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.915, 123.9066667], { icon: aIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pana" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pana</p> <p>Elev: 315 m, Prom: 132 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.431386455277!2d123.89846742785586!3d7.915854312075182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255c9981232bc03%3A0xd5ad9511ceff960d!2sMount%20Pana!5e1!3m2!1sen!2sph!4v1599075167597!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9392249, 123.8313729], { icon: aIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kabasagan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kabasagan Hill</p> <p>Elev: 306 m, Prom: 167 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16238.455585822154!2d123.82152302785695!3d7.940576610520476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255ca8fd72f2f8b%3A0x129e34afa0720850!2sKabasagan%20Hill!5e1!3m2!1sen!2sph!4v1599075197249!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9416667, 123.825], { icon: aIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Kabanangan</p> <p>Elev: 168 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16271.841131838242!2d123.81628431294618!3d7.941672000744831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTYnMzAuMCJOIDEyM8KwNDknMzAuMCJF!5e1!3m2!1sen!2sph!4v1599075303415!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.933333, 123.866667], { icon: aIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Rabon_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Rabon Mountain</p> <p>Elev: 137 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16271.841131838242!2d123.81628431294618!3d7.941672000744831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255ca146740e561%3A0xf6c415e5e2b0930a!2sRabon%20Mountain!5e1!3m2!1sen!2sph!4v1599075335545!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9345637, 123.8165914], { icon: aIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pindulungan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pindulungan Hill</p> <p>Elev: 126 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245659.39394425508!2d123.69001776887883!3d7.938775460685042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255cabf38ea5921%3A0x99d7fdfcaab0b1ff!2sPindulungan%20Hill!5e1!3m2!1sen!2sph!4v1599075398247!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.975, 123.8083333], { icon: aIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Lauan</p> <p>Elev: 71 m, Prom: 45 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4059.2729081040584!2d123.80614461482566!3d7.975005306799657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTgnMzAuMCJOIDEyM8KwNDgnMzAuMCJF!5e1!3m2!1sen!2sph!4v1599075487227!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.1807586, 124.1153812], { icon: aIcon })
  .addTo(lanaodelnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Catmon</p> <p>Elev: 35 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4057.2046044170434!2d124.11319251482608!3d8.180763903948437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTAnNTAuNyJOIDEyNMKwMDYnNTUuNCJF!5e1!3m2!1sen!2sph!4v1599075707746!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
