var northernsamarmap = L.map("northernsamarmap").setView(
  [12.3613199, 124.7740793],
  10
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(northernsamarmap);
L.marker([12.3577062, 124.3825824], { icon: bIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Soomong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Saamong</p> <p>Elev: 514 m, Prom: 402 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16015.910759201828!2d124.3740230281789!3d12.35557617097252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a7508c4488d693%3A0x5841c7a212b99097!2sMount%20Soomong!5e1!3m2!1sen!2sph!4v1598889468429!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.45, 125.15], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Palapag_Mesa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Palapag Mesa</p> <p>Elev: 321 m, Prom: 241 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16010.106021971524!2d125.14124522818851!3d12.450020612374749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330a2b933cc9c3d3%3A0xa59b8f1aad358970!2sPalapag%20Mesa!5e1!3m2!1sen!2sph!4v1598889493124!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.4347401, 125.1591701], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Boboyaon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Boboyaon</p> <p>Elev: 289 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16010.106021971524!2d125.14124522818851!3d12.450020612374749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330a2b76573bb331%3A0xcb29eb9419bcfdf5!2sMount%20Boboyaon!5e1!3m2!1sen!2sph!4v1598889520786!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.5619444, 124.2855556], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tagongtang_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tagongtang Mountain</p> <p>Elev: 200 m, Prom: 128 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16003.169366716273!2d124.27680082820002!3d12.561965002112133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0b3b2dca88b93%3A0x89c95ca2426e524!2sTagongtang%20Mountain!5e1!3m2!1sen!2sph!4v1598889547603!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.499244, 124.8892157], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kinaliman_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kinaliman Mountain</p> <p>Elev: 197 m, Prom: 120 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16006.791627692166!2d124.87763412819399!3d12.503631657469608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330a22204575151b%3A0xf4e20453064d4980!2sKinaliman%20Mountain!5e1!3m2!1sen!2sph!4v1598889600471!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.5051005, 124.5055984], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Taasah_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Taasah Hill</p> <p>Elev: 193 m, Prom: 95 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16006.70557242466!2d124.49680082819414!3d12.505020607342292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0aa9c4b9b7ad5%3A0xfb8203ce774065e!2sTaasah%20Hill!5e1!3m2!1sen!2sph!4v1598889631335!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.5129002, 124.5027004], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Palason_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Palason Hill</p> <p>Elev: 186 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16006.223512034661!2d124.49402302819499!3d12.512798356629114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0aa840bced35d%3A0x979f38ed2afa05cc!2sPalason%20Hill!5e1!3m2!1sen!2sph!4v1598889657707!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.5175, 124.4988889], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Hinarog_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Hinarog Hill</p> <p>Elev: 163 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16005.930688941831!2d124.49013412819541!3d12.517520556195938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0aa87b86eae35%3A0xaaaeb8f5bf342a22!2sHinarog%20Hill!5e1!3m2!1sen!2sph!4v1598889691332!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.55, 124.2666667], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lipata_(bungtod_sa_Pilipinas,_Sidlakang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lipata</p> <p>Elev: 129 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16003.912415470806!2d124.2579119281988!3d12.55002060321085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0b30b04538b2b%3A0x3e0acc1c60baa047!2sMount%20Lipata!5e1!3m2!1sen!2sph!4v1598889736288!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.605, 124.3747222], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pantalan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pantalan Hill</p> <p>Elev: 103 m, Prom: 103 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16000.485153828211!2d124.3659674282045!3d12.605020548144257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0ae586d646223%3A0x95775206acd89d7c!2sPantalan%20Hill!5e1!3m2!1sen!2sph!4v1598889801789!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.5572222, 124.2769444], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Iraya_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Iraya Hill</p> <p>Elev: 80 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16003.463213017287!2d124.2681896281995!3d12.557242802546607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0b3af38bda35b%3A0xa69f3d37f05ff066!2sIraya%20Hill!5e1!3m2!1sen!2sph!4v1598889854294!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.6025, 124.3613889], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cagutsan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cagutsan Hill</p> <p>Elev: 80 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16000.641258471409!2d124.35263412820427!3d12.602520548374974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0ae439c4aa2e5%3A0xf8e98458216d2016!2sCagutsan%20Hill!5e1!3m2!1sen!2sph!4v1598889886523!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.6222222, 124.3583333], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Santol_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Santol Hill</p> <p>Elev: 71 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15999.40893993436!2d124.34957852820632!3d12.622242746553878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0afb473161baf%3A0x5a84f8865185fce4!2sSantol%20Hill!5e1!3m2!1sen!2sph!4v1598889942728!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.5966667, 124.3672222], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caloyahan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caloyahan Hill</p> <p>Elev: 65 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16001.005378970804!2d124.35846742820364!3d12.596687298913118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0ae6776723233%3A0xb214f574e76ceeae!2sCaloyahan%20Hill!5e1!3m2!1sen!2sph!4v1598890003880!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.4458997, 125.0362], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nailo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nailo Hill</p> <p>Elev: 61 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16010.363035811746!2d125.02735632818806!3d12.445853862755241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330a262982128b5f%3A0x258a6fd8f450f496!2sNailo%20Hill!5e1!3m2!1sen!2sph!4v1598889981479!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.3798736, 124.3337611], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ilo_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ilo Hill</p> <p>Elev: 48 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234923.2924216112!2d124.19820475318872!3d12.36965463512832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a7502a73624285%3A0xde0cc543fe100da6!2sIlo%20Hill!5e1!3m2!1sen!2sph!4v1598890084623!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.4538004, 125.0269], { icon: aIcon })
  .addTo(northernsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dang-o_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dang-o Hill</p> <p>Elev: 34 m, Prom: 26 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16009.866073193287!2d125.0181896281889!3d12.453909462019542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330a263ad99d4d59%3A0xd9ea83115b35d9ca!2sDang-o%20Hill!5e1!3m2!1sen!2sph!4v1598890112118!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
