var biliranmap = L.map("biliranmap").setView([11.5833152, 124.4641848], 11);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(biliranmap);
L.marker([11.6500005, 124.4617916], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naliwatan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maliwatan</p> <p>Elev: 1348 m, Prom: 1348 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16057.913672004994!2d124.45291192811071!3d11.649742833470803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a78908543f9261%3A0x9edbda6da994d853!2sMount%20Naliwatan!5e1!3m2!1sen!2sph!4v1598911915390!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5293804, 124.5737909], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Suiro" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Suiro</p> <p>Elev: 1288 m, Prom: 860 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16064.605884137713!2d124.55791192810008!3d11.533353993478237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330821d9a9de3dfb%3A0x993a5bb2c5dcd95c!2sMount%20Suiro!5e1!3m2!1sen!2sph!4v1598911959619!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6545021, 124.4562652], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Tres Marias Peak 2</p> <p>Elev: 1278 m, Prom: 133 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16058.258907148524!2d124.45640802811016!3d11.643766683986707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a789a0643c3171%3A0x23d93329afb7e2ef!2sMt.%20Tres%20Marias!5e1!3m2!1sen!2sph!4v1598911994623!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6615563, 124.4485151], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Tres Marias Peak 1</p> <p>Elev: 1174 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4014.3076011283324!2d124.4463264148413!3d11.66156154541998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM5JzQxLjYiTiAxMjTCsDI2JzU0LjciRQ!5e1!3m2!1sen!2sph!4v1598912195280!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6462592, 124.4666803], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Biliran</p> <p>Elev: 1150 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15759.04173508554!2d124.45804351959161!3d11.646264436391585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM4JzQ2LjUiTiAxMjTCsDI4JzAwLjEiRQ!5e1!3m2!1sen!2sph!4v1598912426057!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.520278, 124.537222], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lauaan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lauaan</p> <p>Elev: 1146 m, Prom: 320 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16065.35242447592!2d124.5284674280989!3d11.520298494595506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33081f914ec89673%3A0x8ee660fd64a98b6!2sMount%20Lauaan!5e1!3m2!1sen!2sph!4v1598912473013!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.65, 124.466667], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Yusan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Yusan</p> <p>Elev: 1100 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16057.897616687927!2d124.45791192811075!3d11.650020683446808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a789a7b5f1b093%3A0xd150ee0f2614b44b!2sMount%20Yusan!5e1!3m2!1sen!2sph!4v1598912510249!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5243769, 124.5861013], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sayao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sayao</p> <p>Elev: 1093 m, Prom: 197 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16595.801068992645!2d124.57720389902983!3d11.524382140411944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMxJzI3LjgiTiAxMjTCsDM1JzEwLjAiRQ!5e1!3m2!1sen!2sph!4v1598912686068!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.666667, 124.45], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sua" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sua</p> <p>Elev: 1084 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16056.933855444107!2d124.44124522811227!3d11.666687382006812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a788e3a15a0035%3A0x64627b5ce6c74208!2sMount%20Sua!5e1!3m2!1sen!2sph!4v1598912778451!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.611667, 124.485278], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guiauasan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guiauasan</p> <p>Elev: 1079 m, Prom: 240 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16059.100406035755!2d124.47707852810875!3d11.62918733524436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a78992a82cc491%3A0x21e3782aab84bc24!2sMount%20Guiauasan!5e1!3m2!1sen!2sph!4v1598912807293!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6679261, 124.3933975], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panamao_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panamao</p> <p>Elev: 1079 m, Prom: 685 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16056.96600521659!2d124.38930082811225!3d11.666131782054853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a78ede1b4124d5%3A0xfb316bd6d7d5cab!2sMount%20Panamao!5e1!3m2!1sen!2sph!4v1598912853366!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5233333, 124.5752778], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sayoa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sayoa</p> <p>Elev: 1056 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16065.177779465757!2d124.56652302809918!3d11.523353994334121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33081f5df4bc5d23%3A0xf2e6554e0e1f9787!2sMount%20Sayoa!5e1!3m2!1sen!2sph!4v1598912901420!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6140394, 124.5281109], { icon: cIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Camalobagoan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Camalobagoan</p> <p>Elev: 1016 m, Prom: 335 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16059.949097759943!2d124.51957852810747!3d11.614465086513016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308274adbc6d299%3A0xc593a6a79a4181c9!2sMount%20Camalobagoan!5e1!3m2!1sen!2sph!4v1598912943449!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>  '
  );
L.marker([11.5333333, 124.5], { icon: bIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Vulcan (Biliran)</p> <p>Elev: 948 m, Prom: 195 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17049.726576100227!2d124.49111501403495!3d11.533338538366388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMyJzAwLjAiTiAxMjTCsDMwJzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598912999856!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.598611, 124.488611], { icon: bIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gumansan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gumansan</p> <p>Elev: 915 m, Prom: 42 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16060.684832738023!2d124.48068962810632!3d11.601687387612994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a78a14fed6d1e3%3A0x10b196533b7b0712!2sMount%20Gumansan!5e1!3m2!1sen!2sph!4v1598913042840!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.7890953, 124.3205366], { icon: bIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maripipi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maripipi</p> <p>Elev: 908 m, Prom: 908 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31285.981220840513!2d124.30459542245184!3d11.788801124255068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a79b50249db7bd%3A0xc30822022e654639!2sMaripipi%20Island!5e1!3m2!1sen!2sph!4v1598913107579!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6, 124.4833333], { icon: aIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Gunansan</p> <p>Elev: 741 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4015.1954075672434!2d124.48114461484106!3d11.600005246623224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM2JzAwLjAiTiAxMjTCsDI5JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598913265889!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.548889, 124.525556], { icon: bIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Giron" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Giron</p> <p>Elev: 712 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16063.71529397306!2d124.51680082810151!3d11.548909592145625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33082016ce172d19%3A0x225913fbd1f0ca54!2sMount%20Giron!5e1!3m2!1sen!2sph!4v1598913304033!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.517778, 124.491111], { icon: bIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maoc</p> <p>Elev: 634 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16065.749185420626!2d124.47596742809829!3d11.513353995189375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a7f5129440f561%3A0x9453168bcb51e3bd!2sMount%20Maoc!5e1!3m2!1sen!2sph!4v1598913331605!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6666667, 124.4333333], { icon: bIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caraycaray_(lungsod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caraycaray</p> <p>Elev: 616 m, Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16678.531442265932!2d124.42449698440032!3d11.666671938333119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDQwJzAwLjAiTiAxMjTCsDI2JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598913401501!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.533333, 124.55], { icon: bIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matinao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matinao</p> <p>Elev: 614 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16064.605884137713!2d124.5412452281001!3d11.533353993478238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308202a7d461855%3A0x7bb5ecba74667ac2!2sMount%20Matinao!5e1!3m2!1sen!2sph!4v1598913465419!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.55, 124.483333], { icon: bIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sayao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sayao</p> <p>Elev: 545 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16063.651638763917!2d124.47457852810163!3d11.550020642050377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a78ac8f422f0dd%3A0x363f7efd0fa1e1a8!2sMount%20Sayao!5e1!3m2!1sen!2sph!4v1598912623162!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5833333, 124.5], { icon: bIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Capinyayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Capinyayan</p> <p>Elev: 526 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16061.739070382991!2d124.49124522810463!3d11.583353939189466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a78a7c81d74833%3A0x87bf431eb4314025!2sMount%20Capinyayan!5e1!3m2!1sen!2sph!4v1598913493864!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.55, 124.4333333], { icon: aIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Tamburok</p> <p>Elev: 418 m, Prom: 223 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16584.743474385454!2d124.42450893505577!3d11.55000523946892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMzJzAwLjAiTiAxMjTCsDI2JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598913557228!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.523333, 124.468056], { icon: aIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Busales" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Busale</p> <p>Elev: 362 m, Prom: 71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16065.082495655757!2d124.45902302809932!3d11.525020694191527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a7f521c5301be9%3A0xf315b13a14ecdb46!2sMount%20Busales!5e1!3m2!1sen!2sph!4v1598913595032!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.566667, 124.55], { icon: aIcon })
  .addTo(biliranmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magsayao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magsayao</p> <p>Elev: 74 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16062.696028414362!2d124.54124522810308!3d11.566687390620787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308205381c92183%3A0xa3a0abd8ac0c8906!2sMount%20Magsayao!5e1!3m2!1sen!2sph!4v1598913623600!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
