var negrosorientalmap = L.map("negrosorientalmap").setView(
  [9.6282083, 122.9888319],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(negrosorientalmap);

L.marker([9.2445975, 123.1777331], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cuernos_de_Negros" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cuernos de Negros</p> <p>Elev: 1868 m, Prom: 1447 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16182.723314508776!2d123.1687452279261!3d9.244187523043314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab674804d5b8b7%3A0xad13bf70d7ab3a06!2sMount%20Talinis!5e1!3m2!1sen!2sph!4v1598837177173!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.2568372, 123.1889569], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Yagumyum Peak</p> <p>Elev: 1699 m, Prom: 286 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17340.3899716162!2d123.17992990779003!3d9.256842478209837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMTUnMjQuNiJOIDEyM8KwMTEnMjAuMiJF!5e1!3m2!1sen!2sph!4v1598837341305!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.8395531, 122.9457574], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Carol-an" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Carol-an</p> <p>Elev: 1030 m, Prom: 570 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16154.445237562564!2d122.93846742796494!3d9.840298679458044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac731e82a6b2b1%3A0x448be7c99371256!2sMount%20Carol-an!5e1!3m2!1sen!2sph!4v1598837367533!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1251306, 123.1987105], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Hinakpan Hills</p> <p>Elev: 975 m, Prom: 535 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4034.515387846981!2d123.17864651483355!3d10.169845972877015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9566d777d5bf5%3A0x8f1a28b8b47b6b0d!2sHinakpan%20Chocolate%20Hills!5e1!3m2!1sen!2sph!4v1598837951133!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.21, 122.995833], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dome_Peak_(bukid_sa_Pilipinas,_Central_Visayas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dome Peak</p> <p>Elev: 878 m, Prom: 294 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16184.570847536213!2d122.95957852792363!3d9.203909825907312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aca3ca38131dc3%3A0x6fd3184feeca22df!2sDome%20Peak!5e1!3m2!1sen!2sph!4v1598838055181!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.195833, 122.966944], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Peak_(bukid_sa_Pilipinas,_Central_Visayas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Shark Peak</p> <p>Elev: 863 m, Prom: 161 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16184.97750525995!2d122.95985632792309!3d9.195020876537999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aca3c704de0169%3A0x93c32dd90dd282df!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1598838087565!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1255556, 123.1933333], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Razor_Back_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Razor Back Mountain</p> <p>Elev: 848 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16140.293499367455!2d123.18457852798514!3d10.125576407806836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abfdbfa5238eb9%3A0xd44bd6137445f5c8!2sRazor%20Back%20Mountain!5e1!3m2!1sen!2sph!4v1598838119305!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.1247222, 122.9763889], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malbag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malbag</p> <p>Elev: 783 m, Prom: 294 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16188.178905948915!2d122.96763412791887!3d9.124743081506654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aca5ce0d8836a1%3A0xe304cfcfeab3de6!2sMount%20Malbag!5e1!3m2!1sen!2sph!4v1598838155628!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.130833, 122.9625], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Giligaon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Giligaon</p> <p>Elev: 732 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16187.977162463978!2d122.95541192791913!3d9.129187631193362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aca5b506222a33%3A0x9b1372a0ac75e255!2sMount%20Giligaon!5e1!3m2!1sen!2sph!4v1598838191801!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.102222, 122.984722], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Telaptap" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Telaptap</p> <p>Elev: 542 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16188.53171301633!2d122.9465230279184!3d9.11696533205463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aca5bcb46c2903%3A0x9f5eeaf155008951!2sMount%20Telaptap!5e1!3m2!1sen!2sph!4v1598838217996!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> '
  );
L.marker([9.7324087, 122.9735294], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Pinayun-an Peak</p> <p>Elev: 414 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16594.40175440646!2d122.96459736143306!3d9.732058566745645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac70c43e751d13%3A0x7aac123f089e38d5!2sPinayun%20an%20Peak!5e1!3m2!1sen!2sph!4v1598838248353!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.1666667, 123.1666667], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Bontes</p> <p>Elev: 378 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.891467465002!2d123.15793855223093!3d9.166671981191337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMTAnMDAuMCJOIDEyM8KwMTAnMDAuMCJF!5e1!3m2!1sen!2sph!4v1598838387006!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.4463889, 122.7005556], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pinatucan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinatucan Hill</p> <p>Elev: 257 m, Prom: 41  m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16173.326554468507!2d122.69180082793876!3d9.446409758509091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33acf2bf576de013%3A0x8ec8c0de889497f5!2sPinatucan%20Hill!5e1!3m2!1sen!2sph!4v1598838417710!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.3927778, 122.7063889], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Marvel_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Marvel Hill</p> <p>Elev: 215 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16175.83735838888!2d122.69763412793536!3d9.392798662387433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aced2606ebceb7%3A0x4ef7052e2f3c400d!2sMarvel%20Hill!5e1!3m2!1sen!2sph!4v1598838475252!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.4422222, 122.6005556], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cotcok_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cotcok Hill</p> <p>Elev: 170 m, Prom: 38 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16173.52220379633!2d122.59180082793851!3d9.442243058811167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33acf1dea1526879%3A0xda52aa51eb9b7c7f!2sCotcok%20Hill!5e1!3m2!1sen!2sph!4v1598838520172!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.6133333, 123.1072222], { icon: aIcon })
  .addTo(negrosorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kambatohan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kambatohan Hill</p> <p>Elev: 104 m, Prom: 91 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16165.417246190053!2d123.09846742794961!3d9.613354146315737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab80cc810b3423%3A0x86e00843faa4f2e2!2sKambatohan%20Hill!5e1!3m2!1sen!2sph!4v1598838579998!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
