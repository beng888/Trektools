var cebumap = L.map("cebumap").setView([10.3156992, 123.8854366], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(cebumap);

L.marker([9.82, 123.4425], { icon: cIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mantalongon,_Cebu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Labalasan (Osmeña Peak)</p> <p>Elev: 1016 m, Prom: 1016 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16155.313888605713!2d123.43957822796374!3d9.822520830790332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abc01a1529c095%3A0xbcb3e3fcd30c76c6!2sOsme%C3%B1a%20Peak!5e1!3m2!1sen!2sph!4v1598877307162!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.8073146, 123.4363719], { icon: cIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Lugsangan Peak</p> <p>Elev: 1008 m, Prom: 55 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16649.406083139576!2d123.42911493348427!3d9.806743271299462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab9518cd3d6ee1%3A0xd8d11d496f430d9f!2sLUGSANGAN%20PEAK!5e1!3m2!1sen!2sph!4v1598877385322!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4532122, 123.8156434], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Manunggal" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manunggal</p> <p>Elev: 983 m, Prom: 825 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16123.520884022888!2d123.80856892800968!3d10.453712782269506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a0b7b63fce45%3A0xde7a53887d6e65b4!2sMount%20Manunggal!5e1!3m2!1sen!2sph!4v1598877479572!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.8668938, 123.4594008], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Candungao Peak</p> <p>Elev: 943 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16264.514716866246!2d123.92715974958118!3d9.864952270064908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aa31a9328809c1%3A0x3143516959498e7b!2sCandungao%20Peak%2C%20San%20Isidro%2C%20Bohol!5e1!3m2!1sen!2sph!4v1598877535105!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4608874, 123.8287306], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mauyog</p> <p>Elev: 906 m, Prom: 52 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16506.682061204727!2d123.81997762436147!3d10.460704459021132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a0ccc611b949%3A0x94cc88c697cc09c!2sMount%20Mauyog%20Rock%20Monolith!5e1!3m2!1sen!2sph!4v1598877591720!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4457595, 123.8103592], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Manunggal" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manunggal Monolith</p> <p>Elev: 882 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4031.026107407993!2d123.80247741483494!3d10.442467668124271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a1743eeb3ac3%3A0x1ce91a57da6b7e40!2sMount%20Manunggal%20Monolith!5e1!3m2!1sen!2sph!4v1598877680475!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5914652, 123.9068582], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mago Peak</p> <p>Elev: 758 m, Prom: 465 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16929.479343250045!2d123.89861494852221!3d10.59232875369466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9af024ffc8981%3A0x6602dfcb1b04a117!2sMt.%20Mago!5e1!3m2!1sen!2sph!4v1598877846298!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.3938783, 123.8545049], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Pung-ol Peak</p> <p>Elev: 737 m, Prom: 226 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16735.37956857008!2d123.84565609060826!3d10.393883561137244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIzJzM4LjAiTiAxMjPCsDUxJzE2LjIiRQ!5e1!3m2!1sen!2sph!4v1598877974851!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4032811, 123.8681281], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Kan-irag_Nature_Park" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kan-irag (Sirao Peak)</p> <p>Elev: 733 m, Prom: 157 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4031.541430473706!2d123.86529151483478!3d10.402649668825898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a196b8848713%3A0xe84c0fe0ef2df789!2sMount%20Kan-irag%2FSirao%20Peak!5e1!3m2!1sen!2sph!4v1598878022738!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.3643547, 123.8546724], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Babag highest point</p> <p>Elev: 729 m, Prom: 291 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16337.737527409634!2d123.85001692319243!3d10.326791261314415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a99f308f0c095f%3A0x1ff6e9863b84bc24!2sMt.%20Babag!5e1!3m2!1sen!2sph!4v1598878097805!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([10.6419531, 123.938142], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kapayas</p> <p>Elev: 728 m, Prom: 104 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4028.4085589256993!2d123.93548011483588!3d10.642445964562484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9ad071efd420f%3A0x1cf498e119b3fc2!2sMount%20Kapayas!5e1!3m2!1sen!2sph!4v1598878210391!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.3540478, 123.8397312], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Bocawe Peak</p> <p>Elev: 692 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16421.22076643487!2d123.83091230879391!3d10.354053060865413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIxJzE0LjYiTiAxMjPCsDUwJzIzLjAiRQ!5e1!3m2!1sen!2sph!4v1598878362778!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.7038692, 123.3527328], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lanaya</p> <p>Elev: 663 m, Prom: 161 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17579.785622186544!2d123.34415462848814!3d9.703645169437992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab972a12183cc1%3A0xca02aeab7787ef62!2sMount%20Lanaya!5e1!3m2!1sen!2sph!4v1598878428899!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5546744, 123.9723571], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manghilao</p> <p>Elev: 648 m, Prom: 99 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16858.437335646035!2d123.9642229576805!3d10.551392657783337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9afd64cc8fcc3%3A0xa19f3092a1ec6726!2sMount%20Manghilao!5e1!3m2!1sen!2sph!4v1598878550423!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.294722, 123.7125], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Uling" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Uling</p> <p>Elev: 623 m, Prom: 285 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16131.570588067667!2d123.70596742799782!3d10.297520794509639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a976c9a583e953%3A0x9b2f78ea23e6269!2sMount%20Uling!5e1!3m2!1sen!2sph!4v1598878510304!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.3042106, 123.7668022], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Kalbasaan Peak</p> <p>Elev: 609 m, Prom: 128 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16507.75893129579!2d123.7579255467233!3d10.304215860669222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE4JzE1LjIiTiAxMjPCsDQ2JzAwLjUiRQ!5e1!3m2!1sen!2sph!4v1598878652002!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5576638, 123.9568796], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lantouan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lantouan</p> <p>Elev: 567 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16118.0900565138!2d123.94818962801774!3d10.55779857402762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9afcb98964029%3A0x1a53582eb3fc1c26!2sMount%20Lantouan!5e1!3m2!1sen!2sph!4v1598878696404!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.2753675, 123.7321787], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naupa</p> <p>Elev: 539 m, Prom: 95 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16132.683005530982!2d123.72243032799624!3d10.275751396203443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9771f0a1d79f1%3A0xdea5fe978ba6968!2sMt.%20Naupa!5e1!3m2!1sen!2sph!4v1598878729774!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4512706, 123.9144602], { icon: bIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Acsubing" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Acsubing</p> <p>Elev: 508 m, Prom: 151 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16123.56834802928!2d123.90624522800962!3d10.452798582341595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a47692dbe581%3A0x7696ea5d91c22f14!2sMount%20Acsubing!5e1!3m2!1sen!2sph!4v1598878788793!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.3884261, 123.7206062], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Tagaytay Hill</p> <p>Elev: 496 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16951.578358672257!2d123.71172239545757!3d10.388431360616197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIzJzE4LjMiTiAxMjPCsDQzJzE0LjIiRQ!5e1!3m2!1sen!2sph!4v1598878876777!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([10.436944, 123.7175], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabalasan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabalasan</p> <p>Elev: 454 m, Prom: 163 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16124.231324178167!2d123.71096742800864!3d10.440020783348624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a90b9b69f4d8d1%3A0x7c1ffe3126d997d6!2sMount%20Cabalasan!5e1!3m2!1sen!2sph!4v1598878959608!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.2992574, 123.7061266], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Putingbato Monolith</p> <p>Elev: 445 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16379.831691203155!2d123.69731469920735!3d10.299262660729653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE3JzU3LjMiTiAxMjPCsDQyJzIyLjEiRQ!5e1!3m2!1sen!2sph!4v1598879063722!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.233333, 123.683333], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alpaco" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alpaco</p> <p>Elev: 432 m, Prom: 130 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16134.800454687282!2d123.67152302799315!3d10.234187499429108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a97a6dc647a57d%3A0x46b4a9ac8571a819!2sMount%20Alpaco!5e1!3m2!1sen!2sph!4v1598879145738!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.2668604, 123.7559969], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guindaruhan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guindaruhan</p> <p>Elev: 423 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16135.350961149892!2d123.69180082799231!3d10.223354100268084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a97a220e3759f1%3A0x393b67d1b849103f!2sMount%20Guindaruhan!5e1!3m2!1sen!2sph!4v1598879174804!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.216667, 123.683333], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guindaruhan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guindulman</p> <p>Elev: 406 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16135.350961149892!2d123.69180082799231!3d10.223354100268084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a97a220e3759f1%3A0x393b67d1b849103f!2sMount%20Guindaruhan!5e1!3m2!1sen!2sph!4v1598879204357!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.6545559, 124.4453522], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Three_Peaks" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Three Peaks</p> <p>Elev: 380 m, Prom: 380 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16112.998695748342!2d124.43652302802538!3d10.654465166312285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a82b0a7b2ead3b%3A0x740bd9108b4b8265!2sMount%20Three%20Peaks!5e1!3m2!1sen!2sph!4v1598879238243!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.3325803, 123.8587047], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Bokatol</p> <p>Elev: 377 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16379.267110808138!2d123.84990324565457!3d10.332585562110362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDE5JzU3LjMiTiAxMjPCsDUxJzMxLjMiRQ!5e1!3m2!1sen!2sph!4v1598879519746!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.649942, 124.449954], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ilihan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ilihan Hill</p> <p>Elev: 367 m, Prom: 26 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16112.998695748342!2d124.43652302802538!3d10.654465166312285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a82b0929367599%3A0x9b1668fc9ff08df5!2sIlihan%20Hill!5e1!3m2!1sen!2sph!4v1598879287964!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5166667, 123.9166667], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Licos" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Licos</p> <p>Elev: 366 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16120.241444453879!2d123.90791192801457!3d10.516687477291075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a5902c51ba7f%3A0x90a15bcbec1b996b!2sMount%20Licos!5e1!3m2!1sen!2sph!4v1598879379844!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.2675825, 123.7403303], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lanas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lanas</p> <p>Elev: 343 m, Prom: 50 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16132.706118910563!2d123.72430082799616!3d10.27529859623864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9771ef0d3cb95%3A0xd077ee8aff77aabd!2sMount%20Lanas!5e1!3m2!1sen!2sph!4v1598879421416!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([10.083333, 123.616667], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Capilan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Capilan</p> <p>Elev: 292 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16142.413249848725!2d123.60791192798207!3d10.083354161043614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abd81e11b0c48f%3A0x558ce98d2c875dbd!2sMount%20Capilan!5e1!3m2!1sen!2sph!4v1598879472830!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.2474839, 123.7250125], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lutac" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lutac</p> <p>Elev: 290 m, Prom: 123 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16134.291786027723!2d123.70957852799386!3d10.244187498654032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a97759d83d48e1%3A0x750219deff6a956f!2sLutac!5e1!3m2!1sen!2sph!4v1598879596814!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9649076, 123.9812804], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tangob_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tangob</p> <p>Elev: 290 m, Prom: 162 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16096.331663058822!2d123.97235632805065!3d10.965020741128965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a842b602fe2f27%3A0x77872b994ff6ead!2sMount%20Tangob!5e1!3m2!1sen!2sph!4v1598879628397!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9126351, 123.9565518], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kampatanit" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kampatanit</p> <p>Elev: 278 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16099.182483559542!2d123.9479119280463!3d10.91252074542872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a85ca119a7d809%3A0xc0a805e0ee94237a!2sMount%20Kampatanit!5e1!3m2!1sen!2sph!4v1598879674305!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4502778, 123.9138889], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lanibga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lanibga</p> <p>Elev: 265 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16123.698123628996!2d123.90513412800944!3d10.450298582538705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9a47606463a53%3A0xff6185da2807eb7a!2sMount%20Lanibga!5e1!3m2!1sen!2sph!4v1598879720512!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.2461111, 123.6202778], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Anislag_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Anislag</p> <p>Elev: 238 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16134.192820875836!2d123.61152302799398!3d10.24613194850325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a97aacf640da01%3A0x4dba44f2632301cc!2sAnislag!5e1!3m2!1sen!2sph!4v1598879769007!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.7525857, 124.510069], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Apuli_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Apuli Mountain</p> <p>Elev: 151 m, Prom: 151 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16107.92077292382!2d124.491245228033!3d10.750020758627986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8281a2d859889%3A0x89cc3c6f876fc0f!2sApuli%20Mountain!5e1!3m2!1sen!2sph!4v1598879897184!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.99339, 123.4110229], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Libo-o_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Libo-o Hill</p> <p>Elev: 135 m, Prom: 104 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16146.914482438488!2d123.40199942797561!3d9.993110917924078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abe7bc7397e5ff%3A0x1937795787f85f1d!2sLibo-o%20Hill!5e1!3m2!1sen!2sph!4v1598879930134!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1936109, 123.9763891], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dalingding_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dalingding Hills</p> <p>Elev: 130 m, Prom: 124 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16083.976245219812!2d123.9684674280697!3d11.18974292252912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8709d2fb0006d%3A0x8111fedd10cd7e30!2sDalingding%20Hills!5e1!3m2!1sen!2sph!4v1598879971198!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.0251954, 123.4136369], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cambuang_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cambuang Hill</p> <p>Elev: 113 m, Prom: 66 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16145.313590968794!2d123.40318962797795!3d10.025298615475856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33abe7158a68b42f%3A0xc3ddcc46b95e624f!2sCambuang%20Hill!5e1!3m2!1sen!2sph!4v1598880003794!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.05, 123.933333], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Guintorijan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Guintorijan Hill</p> <p>Elev: 69 m, Prom: 42 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16091.687396765647!2d123.92457852805776!3d11.050020734130847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a86660f518e8c7%3A0xae5f4fad3245ea89!2sGuintorijan%20Hill!5e1!3m2!1sen!2sph!4v1598880029210!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.2852778, 124.1], { icon: aIcon })
  .addTo(cebumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabac" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabac</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99181.4187421025!2d124.04168934105343!3d10.26051083369184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9946500abc22b%3A0xd0b79a30fca236a6!2sMount%20Cabac!5e1!3m2!1sen!2sph!4v1598880102080!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
