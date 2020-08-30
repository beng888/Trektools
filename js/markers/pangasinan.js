var pangasinanmap = L.map("pangasinanmap").setView(
  [15.8949055, 120.2863183],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(pangasinanmap);

L.marker([15.983333, 120.116667], { icon: bIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_San_Isidro" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount San Isidro</p> <p>Elev: 738 m, Prom: 301 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.507424973255!2d120.1064871786296!3d15.987465700731283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393e22c8ecbcd87%3A0x680055778fc641a6!2sMount%20San%20Isidro!5e1!3m2!1sen!2sph!4v1597949836888!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.890556, 120.103889], { icon: bIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangatarem" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangatarem</p> <p>Elev: 595 m, Prom: 149 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.16486636015!2d120.09457852861536!3d15.890020161718946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393fce78883a2e1%3A0x6464cd5821ebaf92!2sMount%20Mangatarem!5e1!3m2!1sen!2sph!4v1597949964185!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.116667, 120.616667], { icon: bIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Jones_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Jones</p> <p>Elev: 567 m, Prom: 225 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15751.282690927792!2d120.60791192864873!3d16.1166868360718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339113d70c8cc7eb%3A0x2d0604ae2b43b204!2sMount%20Jones!5e1!3m2!1sen!2sph!4v1597950070092!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.116667, 120.766667], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Damchak_(bukid_sa_Pilipinas,_Rehiyon_sa_Ilocos)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Damchak</p> <p>Elev: 451 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15751.282690927792!2d120.75791192864871!3d16.116686836071803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33911b1a34bb459f%3A0xc4fd4429ff41611d!2sMount%20Damchak!5e1!3m2!1sen!2sph!4v1597950178606!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.862778, 120.683333], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balungao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balungao</p> <p>Elev: 379 m, Prom: 301 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.399505834072!2d120.6780337786112!3d15.861473114926916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33913ae04f4e990b%3A0x42a2a4ab39d242f3!2sMount%20Balungao!5e1!3m2!1sen!2sph!4v1597950316707!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.837778, 120.806389], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amorong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amorong</p> <p>Elev: 373 m, Prom: 271 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31546.164616572056!2d120.77755437477414!3d15.839942583606282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339125d19e956f7d%3A0xdea2dcb47b8fdb34!2sMount%20Amorong!5e1!3m2!1sen!2sph!4v1597950430520!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.047222, 120.074722], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Verde_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Verde</p> <p>Elev: 347 m, Prom: 92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15755.619588691652!2d120.06245612864062!3d16.06200034228806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393e0ca3ea0f3cd%3A0xd8bca6fca1e1662e!2sMount%20Verde!5e1!3m2!1sen!2sph!4v1597950502120!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.719444, 120.309444], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malabobo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malabobo</p> <p>Elev: 323 m, Prom: 198 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.457626628486!2d120.29874522859066!3d15.719464580811517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339152d1b61ef48d%3A0xe4088132e0b9e75a!2sMount%20Malabobo!5e1!3m2!1sen!2sph!4v1597950874431!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.695278, 120.329722], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabaluyan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabaluyan</p> <p>Elev: 293 m, Prom: 191 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.28681069205!2d120.31902302858732!3d15.695853483440692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ad45b540c43f%3A0x7b0904b5a6d775a8!2sMount%20Cabaluyan!5e1!3m2!1sen!2sph!4v1597950997545!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.695, 120.3225], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Canalietan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canalietan</p> <p>Elev: 290 m, Prom: 148 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.351318609408!2d120.31374522858721!3d15.695020183533444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ad473c8c3873%3A0xe1a1571725885205!2sMount%20Canalietan!5e1!3m2!1sen!2sph!4v1597951096142!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.873611, 119.945278], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maliang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maliang</p> <p>Elev: 260 m, Prom: 97 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.469512647176!2d120.0115230286148!3d15.886131312156246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393fafe1df99beb%3A0x631654d24e14b32d!2sMount%20Maliang!5e1!3m2!1sen!2sph!4v1597951414068!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.983333, 119.983333], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ariba" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ariba</p> <p>Elev: 254 m, Prom: 73 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.85337180588!2d119.97291192862897!3d15.983075801227505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393e58f65e6d9fd%3A0x8714bc4083fe3293!2sMount%20Ariba!5e1!3m2!1sen!2sph!4v1597951498617!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.8592826, 120.6723091], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Minor Peak</p> <p>Elev: 237 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16313.792181660117!2d120.66341975164327!3d15.859287732791579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUxJzMzLjQiTiAxMjDCsDQwJzIwLjMiRQ!5e1!3m2!1sen!2sph!4v1597951729491!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.848333, 119.974444], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nangradian" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangradian</p> <p>Elev: 220 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15772.229804156335!2d119.97652302860966!3d15.850853466119036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393fa04addc1ef1%3A0x46ad338495030d55!2sMount%20Nangradian!5e1!3m2!1sen!2sph!4v1597952000752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.1500077, 120.5000071], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alava_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alava</p> <p>Elev: 199 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15748.587939527357!2d120.48624522865379!3d16.15057573221053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33916d1b66e0c13f%3A0x1ec3a79114368f96!2sMount%20Alava!5e1!3m2!1sen!2sph!4v1597952095842!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.896944, 119.918333], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bayambang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bayambang</p> <p>Elev: 180 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.642438734336!2d119.91041192861631!3d15.89668686096907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393f1077888732b%3A0x3fe85430c42c6459!2sMount%20Bayambang!5e1!3m2!1sen!2sph!4v1597952194105!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7083333, 120.3333333], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Candong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Candong</p> <p>Elev: 176 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.232667445796!2d120.32207852858923!3d15.709464581925472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339152b2bec64691%3A0xa017915ead8d474c!2sMount%20Candong!5e1!3m2!1sen!2sph!4v1597952336556!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.983333, 119.933333], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sol" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sol</p> <p>Elev: 163 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.787714509292!2d119.92902302862909!3d15.983909051133317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393ef06757d313f%3A0x61caa7000cf1ae78!2sMount%20Sol!5e1!3m2!1sen!2sph!4v1597952432618!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9, 119.916667], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bayambang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talagtalag</p> <p>Elev: 153 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.487093582564!2d119.90787977587705!3d15.900005128429985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU0JzAwLjAiTiAxMTnCsDU1JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1597952612369!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.05, 119.816667], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Sapa" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North Sapa</p> <p>Elev: 143 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15756.567754714824!2d119.80791192863883!3d16.05002019364743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393eb68a11bdd47%3A0x5fd1cfb54a5117f0!2sNorth%20Sapa!5e1!3m2!1sen!2sph!4v1597952803622!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.102, 119.7827778], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagtoon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagtoon</p> <p>Elev: 127 m, Prom: 56 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.407554449026!2d119.77402302864662!3d16.102520137683882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33939536ab55e211%3A0x46647dcec0eeedc2!2sMount%20Nagtoon!5e1!3m2!1sen!2sph!4v1597952879694!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.15, 119.783333], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calambayan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calambayan</p> <p>Elev: 125 m, Prom: 82 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.40755444903!2d119.77402302864665!3d16.10252013768389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393c00a7e27618d%3A0xf89102e58210550e!2sMount%20Calambayan!5e1!3m2!1sen!2sph!4v1597953061016!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.133333, 119.8], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Namacalan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Namacalan</p> <p>Elev: 113 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15749.604641861884!2d119.80541192865186!3d16.137797933667237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393c03da59fdb7f%3A0x357f7c7c44a748bd!2sMount%20Namacalan!5e1!3m2!1sen!2sph!4v1597953162229!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.096389, 119.793889], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagtoon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bogton</p> <p>Elev: 104 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.40755444903!2d119.77402302864665!3d16.10252013768389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33939536ab55e211%3A0x46647dcec0eeedc2!2sMount%20Nagtoon!5e1!3m2!1sen!2sph!4v1597953253051!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.1, 119.8], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Arwas_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Arwas Hill</p> <p>Elev: 103 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15752.605959343158!2d119.7912452286462!3d16.100020137968244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393eac8acf9ece3%3A0x7a7349ec61f72b8e!2sArwas%20Hill!5e1!3m2!1sen!2sph!4v1597953598975!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.116667, 119.816667], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mayo_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mayo</p> <p>Elev: 101 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15750.488091710096!2d119.80957852865022!3d16.126686834933135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393c026d1c08371%3A0xa64679541269ebfe!2sMount%20Mayo!5e1!3m2!1sen!2sph!4v1597953705708!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7, 120.3166667], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Poelis" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Poelis</p> <p>Elev: 98 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.050236320823!2d120.31402302858771!3d15.69890913310063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ad47d73c974b%3A0x610537fe504a9c42!2sMount%20Poelis!5e1!3m2!1sen!2sph!4v1597953789892!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.066667, 119.783333], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bocot_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bocot Hill</p> <p>Elev: 97 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15754.588358732028!2d119.76402302864255!3d16.075020140809734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339394c48a7a9fcf%3A0xc636881689e06387!2sBocot%20Hill!5e1!3m2!1sen!2sph!4v1597953924297!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.083333, 119.9], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Simimbahan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Simimbahan</p> <p>Elev: 97 m, Prom: 51 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15753.44334177779!2d119.8879119286447!3d16.089464539168443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393e99324b7c259%3A0xbcc4b8c2f1d28d04!2sMount%20Simimbahan!5e1!3m2!1sen!2sph!4v1597954016258!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.0, 119.816667], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Sapa" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>South Sapa</p> <p>Elev: 94 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.517554746482!2d119.80791192863146!3d16.000020199311464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393ece17476a2c5%3A0x8c01dd120a179c68!2sSouth%20Sapa!5e1!3m2!1sen!2sph!4v1597954297426!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.0657778, 120.0065002], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="#" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Camagsingalan Natural Stone Bridge</p> <p>Elev: 87 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.629753274356!2d119.99773282468787!3d16.06578293139733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAzJzU2LjgiTiAxMjDCsDAwJzIzLjQiRQ!5e1!3m2!1sen!2sph!4v1597954578682!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.866667, 120.25], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ninoy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ninoy</p> <p>Elev: 76 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.556582139998!2d120.23013412861091!3d15.859464615152435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391573ab04ce1a5%3A0x3797f4ca5cff024c!2sMount%20Ninoy!5e1!3m2!1sen!2sph!4v1597954649896!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.933333, 120.5], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cabaruan_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cabaruan Hills</p> <p>Elev: 55 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15766.245259732983!2d120.4837452286208!3d15.927242407528679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391472fcdb02457%3A0xffd1f336181c74d8!2sCabaruan%20Hills!5e1!3m2!1sen!2sph!4v1597954764851!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9811111, 119.7602778], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caludigan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caludigan hill</p> <p>Elev: 53 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.006578896915!2d119.75152302862868!3d15.981131301447272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393929477389c67%3A0xee53f9c627b66084!2sCaludigan%20Hill!5e1!3m2!1sen!2sph!4v1597954948478!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.35, 120], { icon: aIcon })
  .addTo(pangasinanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kabuyao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kabuyao</p> <p>Elev: 53 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.006578896915!2d119.75152302862868!3d15.981131301447272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393929477389c67%3A0xee53f9c627b66084!2sCaludigan%20Hill!5e1!3m2!1sen!2sph!4v1597954948478!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
