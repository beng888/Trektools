var cavitemap = L.map("cavitemap").setView([14.2456329, 120.8785658], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(cavitemap);

L.marker([14.2142864, 120.6464909], { icon: bIcon })
  .addTo(cavitemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pico_de_Loro_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com">Mount Pico de Loro</p> <p>Elev: 661 m, Prom: 473 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15893.720935011557!2d120.63743582838866!3d14.213884041656593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd8eed80b78615%3A0xaf5b4790634b87ba!2sMount%20Pico%20De%20Loro!5e1!3m2!1sen!2sph!4v1598204669052!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.2052602, 120.6866363], { icon: bIcon })
  .addTo(cavitemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mataas_na_Gulad" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mataas na Gulod</p> <p>Elev: 632 m, Prom: 319 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15894.36304705915!2d120.67763412838752!3d14.204742592590813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd8f0cf6e02d55%3A0x1f829ed7680d48aa!2sMount%20Marami!5e1!3m2!1sen!2sph!4v1598204747815!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([14.1419193, 121.0220244], { icon: bIcon })
  .addTo(cavitemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gonzales" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sungay</p> <p>Elev: 620 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1987.345649158279!2d121.02113120807545!3d14.141915448446248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7a5028ff417f%3A0x6bb02aab99ef7e99!2sMount%20Sungay!5e1!3m2!1sen!2sph!4v1598204781445!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([14.2187032, 120.6732763], { icon: bIcon })
  .addTo(cavitemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kalanggaman</p> <p>Elev: 593 m, Prom: 221 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15893.3819683974!2d120.6645222837917!3d14.218707429516819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDEzJzA3LjMiTiAxMjDCsDQwJzIzLjgiRQ!5e1!3m2!1sen!2sph!4v1598204864745!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([14.2380537, 120.7101774], { icon: bIcon })
  .addTo(cavitemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buntis</p> <p>Elev: 285 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15891.635047917214!2d120.71800476742492!3d14.243540189545417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd87742e5a3ac5%3A0xacd6cad974e9e7af!2sMount%20Buntis!5e1!3m2!1sen!2sph!4v1598204955540!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([14.2488271, 120.7146406], { icon: aIcon })
  .addTo(cavitemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagpatong</p> <p>Elev: 183 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15891.262376484166!2d120.705885867425!3d14.248832289420124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDE0JzU1LjgiTiAxMjDCsDQyJzUyLjciRQ!5e1!3m2!1sen!2sph!4v1598205110580!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([14.2566884, 120.711143], { icon: aIcon })
  .addTo(cavitemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Marikabayan Hill</p> <p>Elev: 179 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15890.708530864107!2d120.70238826742508!3d14.256693589233878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDE1JzI0LjEiTiAxMjDCsDQyJzQwLjEiRQ!5e1!3m2!1sen!2sph!4v1598205163564!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([14.2677778, 120.6433333], { icon: aIcon })
  .addTo(cavitemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cannon_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cannon</p> <p>Elev: 163 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.925678198433!2d120.63457852839538!3d14.267798186136337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd89153223f827%3A0xf2a43561bd34cc72!2sMount%20Cannon!5e1!3m2!1sen!2sph!4v1598205220303!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([14.3887426, 120.5779318], { icon: aIcon })
  .addTo(cavitemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Morrison Hill</p> <p>Elev: 141 m, Prom: 141 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.3417785718634!2d120.57380321485991!3d14.38865218609303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962107c508d845%3A0x409bd38822ab4e8!2sMorrison%20Hill!5e1!3m2!1sen!2sph!4v1598205331242!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([14.3879592, 120.5908094], { icon: aIcon })
  .addTo(cavitemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Malinta_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malinta Hill</p> <p>Elev: 129 m, Prom: 117 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.433980214511!2d120.58117916742596!3d14.387711836115477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962110a198e8ed%3A0x8ad4faf4edf220b1!2sMalinta%20Hill!5e1!3m2!1sen!2sph!4v1598205416143!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.226667, 120.763056], { icon: aIcon })
  .addTo(cavitemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talipusa" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talipusa</p> <p>Elev: 125 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15893.563008080362!2d120.75124522838895!3d14.21613149142684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd8432e37cc4fb%3A0xb8daac911bfd1d!2sMount%20Talipusa!5e1!3m2!1sen!2sph!4v1598205464183!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
