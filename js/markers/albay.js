var albaymap = L.map("albaymap").setView([13.1774827, 123.5280072], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(albaymap);

L.marker([13.2557663, 123.6858831], { icon: eIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mayon_(bolkan)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mayon</p> <p>Elev: 2460 m, Prom: 2445 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.876253070985!2d123.67735762827493!3d13.254852486862292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1a9954fa1731f%3A0xdff71d3eddd0ea0d!2sMayon%20Volcano!5e1!3m2!1sen!2sph!4v1598303190538!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4023086, 123.6078192], { icon: dIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Summit_(tumoy_sa_bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>South Summit</p> <p>Elev: 1613 m, Prom: 1325 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15949.300398534502!2d123.59124522829141!3d13.400020472815312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1a54925a2af99%3A0x7cd4b820c8902579!2sSouth%20Summit!5e1!3m2!1sen!2sph!4v1598303238029!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.3100329, 123.5979285], { icon: cIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masaraga" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masaraga</p> <p>Elev: 1302 m, Prom: 976 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.504952464165!2d123.58327252828073!3d13.306138081914582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1a641ac9322e5%3A0xc5a68bccad703da1!2sMount%20Masaraga!5e1!3m2!1sen!2sph!4v1598303366180!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.1999617, 124.1590123], { icon: bIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Rapu_Rapu" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Rapu rapu</p> <p>Elev: 521 m, Prom: 521 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15962.466535872567!2d124.15041192826878!3d13.200020492134144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0607c25e99dcb%3A0x7bf88ba25b4b28d0!2sMount%20Rapu%20Rapu!5e1!3m2!1sen!2sph!4v1598303399360!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2320105, 124.014462], { icon: aIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Vizcaya" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Vizcaya</p> <p>Elev: 370 m, Prom: 370 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.848859833575!2d124.00874522827328!3d13.24002053829015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a059a0cfdfbea1%3A0x30742b4ec4907a4b!2sMount%20Vizcaya!5e1!3m2!1sen!2sph!4v1598303448883!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.066667, 123.333333], { icon: aIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caburauan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caburauan</p> <p>Elev: 467 m, Prom: 353 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15971.135914211281!2d123.324578528254!3d13.066687204876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a16e963dc97a01%3A0x1485ee1fa2306cbf!2sMount%20Caburauan!5e1!3m2!1sen!2sph!4v1598303476009!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.166667, 123.35], { icon: aIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pantao_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pantao</p> <p>Elev: 452 m, Prom: 270 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15964.641984735292!2d123.34124522826508!3d13.166687195329912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a173d597fea0bd%3A0xcbf503465b227677!2sMount%20Pantao!5e1!3m2!1sen!2sph!4v1598303510058!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.272222, 124.010833], { icon: aIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bilbao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bilbao</p> <p>Elev: 262 m, Prom: 201 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15957.98997400763!2d124.00207852827646!3d13.268353785561345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a05a28fb9cd4e9%3A0xb607b15570bf36dd!2sMount%20Bilbao!5e1!3m2!1sen!2sph!4v1598303538287!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.08808, 123.35487], { icon: aIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/San_Antonio_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>San Antonio</p> <p>Elev: 334 m, Prom: 134 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16020.799588356003!2d123.34614713301045!3d13.08808850000857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA1JzE3LjEiTiAxMjPCsDIxJzE3LjUiRQ!5e1!3m2!1sen!2sph!4v1598303771915!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.1608916, 123.7293198], { icon: aIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Lig%C3%B1on_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ligñon</p> <p>Elev: 156 m, Prom: 129 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15965.04023059949!2d123.72041192826438!3d13.160576095915065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a101427ca15797%3A0xb147a0699833c67a!2sLig%C3%B1on%20Hill!5e1!3m2!1sen!2sph!4v1598303956361!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.116667, 123.733333], { icon: aIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bariwy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bariw</p> <p>Elev: 198 m, Prom: 106 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3991.982962104751!2d123.72421331485053!3d13.116120215239407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a10399008f4927%3A0xcf6171ce151fbcc4!2sMount%20Bariw!5e1!3m2!1sen!2sph!4v1598304104502!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.422436, 123.6024977], { icon: cIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Summit_(tumoy_sa_bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North Summit</p> <p>Elev: 1514 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15948.19444381761!2d123.5912452282933!3d13.416687171194251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1bab75a5d6787%3A0x30ac99258d729563!2sNorth%20Summit!5e1!3m2!1sen!2sph!4v1598304173368!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2075528, 124.0610423], { icon: aIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Babayon_Point_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Babayon Point Hill</p> <p>Elev: 41 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15961.976314801597!2d124.0526341282696!3d13.207520491414147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a058cd7886f4a7%3A0x6566f3ad51dbeb2d!2sBabayon%20Point%20Hill!5e1!3m2!1sen!2sph!4v1598304230803!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.1432303, 123.7602522], { icon: aIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Kapuntukan Hill / Sleeping Lion Hill</p> <p>Elev: 42 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15981.81338458051!2d123.75034356529149!3d13.142456102046559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a10229d4c4b2a5%3A0xdf12038174257a6!2sSleeping%20Lion%20%2F%20Kapuntukan%20Hill!5e1!3m2!1sen!2sph!4v1598304271686!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.410833, 123.627222], { icon: cIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malinao_(bukid_sa_Pilipinas,_Bicol)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malinao</p> <p>Elev: 1341 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15948.321626214616!2d123.59627722829308!3d13.414771571380655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1bab038b02e91%3A0xf28574752c0aedb3!2sMt.%20Malinao!5e1!3m2!1sen!2sph!4v1598304348057!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2, 124.15], { icon: aIcon })
  .addTo(albaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/West_Rapu_Rapu_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>West Rapu Rapu Mountain</p> <p>Elev: 492 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15962.466535872567!2d124.14124522826879!3d13.200020492134147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a05fd42e93d8bd%3A0x6567ddfb7b90d024!2sWest%20Rapu%20Rapu%20Mountain!5e1!3m2!1sen!2sph!4v1598304378386!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
