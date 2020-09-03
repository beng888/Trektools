var southcotabatomap = L.map("southcotabatomap").setView(
  [6.3357565, 124.7740793],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(southcotabatomap);

L.marker([6.3601587, 125.0763965], { icon: eIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matutum" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matutum</p> <p>Elev: 2286 m, Prom: 1954 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16294.733761101312!2d125.06596742780238!3d6.360576752045366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f787a458cd1c09%3A0x84057027fe51d51c!2sMount%20Matutum!5e1!3m2!1sen!2sph!4v1599011400829!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.0833333, 124.8833333], { icon: dIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Thumb_Peak_(tumoy_sa_bukid_sa_Pilipinas,_Soccsksargen)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Thumb Peak</p> <p>Elev: 1854 m, Prom: 811 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.331516841652!2d124.87457852779607!3d6.083354416457883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7bf988d8fb56f%3A0xf57cd55360af925b!2sThumb%20Peak!5e1!3m2!1sen!2sph!4v1599011444819!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.1087874, 124.9039615], { icon: dIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Parker_Volcano" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Parker</p> <p>Elev: 1809 m, Prom: 252 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15490.95333222579!2d124.8846698395514!3d6.112696418403807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79562051a5819%3A0xeba6be0f32dabe88!2sParker%20Volcano!5e1!3m2!1sen!2sph!4v1599011554040!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.1087874, 124.9039615], { icon: dIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Melibengoy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Melibengoy</p> <p>Elev: 1794 m, Prom: 229 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16258.216388959947!2d124.88599491311241!3d6.104252100780534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7bfc3379e7409%3A0x7852015bca87eba4!2sMount%20Melibengoy!5e1!3m2!1sen!2sph!4v1599011625231!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.1166667, 124.8833333], { icon: dIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Spire_Peak_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Spire Peak</p> <p>Elev: 1750 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302.317898554911!2d124.87457852779677!3d6.11668786475098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7955e124378c5%3A0x97b18d41f57ae966!2sSpire%20Peak!5e1!3m2!1sen!2sph!4v1599011686239!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.1342223, 124.9368456], { icon: dIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Horse_Mountain_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Horse Mountain</p> <p>Elev: 1654 m, Prom: 352 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16301.809024043467!2d124.92457852779712!3d6.133354463894859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f795c68f158953%3A0x579870ee91a5eca3!2sHorse%20Mountain!5e1!3m2!1sen!2sph!4v1599011740621!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.0666667, 124.8666667], { icon: dIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tooth_Peak_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tooth Peak</p> <p>Elev: 1621 m, Prom: 91 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.836251416928!2d124.85791192779574!3d6.066687867308659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7bf63978e89e1%3A0x3031f6d19be09659!2sTooth%20Peak!5e1!3m2!1sen!2sph!4v1599011793661!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.05, 124.8666667], { icon: dIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Saw_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Saw Peak</p> <p>Elev: 1589 m, Prom: 139 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.339612479152!2d124.85791192779541!3d6.0500211181576695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7bf573d314723%3A0x5623ce363a032fba!2sSaw%20Peak!5e1!3m2!1sen!2sph!4v1599011844470!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.260278, 124.598889], { icon: dIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pitol_Kalabaw_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pitol Kalabaw Peak</p> <p>Elev: 1572 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16297.887819027303!2d124.59013412779998!3d6.26029890731558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7e4a038ce5fd3%3A0x92e0b7a05ed50dc8!2sPitol%20Kalabaw%20Peak!5e1!3m2!1sen!2sph!4v1599011913460!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.1805556, 124.9086111], { icon: dIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malibato" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malibato</p> <p>Elev: 1547 m, Prom: 290 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16300.359715586317!2d124.89985632779818!3d6.180576711459486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7947fb1d6781d%3A0xe7db8ecd6f66070e!2sMount%20Malibato!5e1!3m2!1sen!2sph!4v1599011937173!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.2166667, 124.9], { icon: dIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Breast_Peak_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Breast Peak</p> <p>Elev: 1514 m, Prom: 342 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16299.24394922917!2d124.89124522779899!3d6.216687859587495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f793023481de99%3A0x5af8b83c969e204b!2sBreast%20Peak!5e1!3m2!1sen!2sph!4v1599011979245!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.184444, 124.671667], { icon: cIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Talili_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Talili Mountain</p> <p>Elev: 1413 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16300.239870096706!2d124.66291192779828!3d6.184465511258291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7e616ffa10813%3A0xe454fc81308df6b8!2sTalili%20Mountain!5e1!3m2!1sen!2sph!4v1599012024018!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.05, 124.9166667], { icon: cIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Strange_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Strange Peak</p> <p>Elev: 1343 m, Prom: 231 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.339612479152!2d124.90791192779541!3d6.050021118157664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7bedad96dca2f%3A0xe5bdcfa86244a2d4!2sStrange%20Peak!5e1!3m2!1sen!2sph!4v1599012047573!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.3837515, 125.0360512], { icon: cIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Navaro</p> <p>Elev: 1229 m, Prom: 126 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16893.40681963841!2d125.02730534468868!3d6.3837568193555665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjMnMDEuNSJOIDEyNcKwMDInMDkuOCJF!5e1!3m2!1sen!2sph!4v1599012538206!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.3921978, 125.0243301], { icon: cIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alpha</p> <p>Elev: 1094 m, Prom: 189 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16293.736225812854!2d124.99957852780315!3d6.391965550382454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f827f23ca438cb%3A0xe55c3ade2c7c69d6!2sMount%20Alpha!5e1!3m2!1sen!2sph!4v1599012128169!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.4049027, 125.0052651], { icon: cIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Landayao</p> <p>Elev: 1000 m, Prom: 246 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16293.3565023725!2d124.99669562780343!3d6.40387379974992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f82799fd592615%3A0xf2df636578288397!2sMt.%20Landayao%20Peak!5e1!3m2!1sen!2sph!4v1599012193466!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.247778, 124.913611], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Talayok_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Talayok Peak</p> <p>Elev: 980 m, Prom: 175 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.277483129585!2d124.9048563277997!3d6.247798957968012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7927bbe551265%3A0xc9d4eea65eefecd2!2sTalayok%20Peak!5e1!3m2!1sen!2sph!4v1599012255271!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.2213889, 124.7566667], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Talihik_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Talihik Mountain</p> <p>Elev: 855 m, Prom: 164 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16299.097563468289!2d124.74791192779908!3d6.221410059342083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7ee8def2eaf91%3A0xb5ae4ca0288a4ccb!2sTalihik%20Mountain!5e1!3m2!1sen!2sph!4v1599012291724!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.016667, 124.933333], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talompong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talompong</p> <p>Elev: 848 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.342188200158!2d124.92457852779474!3d6.0166878698503155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7b96be83ee219%3A0x769b972c008334ef!2sMount%20Talompong!5e1!3m2!1sen!2sph!4v1599012338117!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.2327778, 124.8438889], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tamguitit_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tamguitit Mountain</p> <p>Elev: 830 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.744059499071!2d124.83513412779936!3d6.232798908749614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7ed3cc361ac2b%3A0x76737e9e4bad40c7!2sTamguitit%20Mountain!5e1!3m2!1sen!2sph!4v1599012361093!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.3909416, 125.0097527], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Navaro_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Navaro Peak</p> <p>Elev: 770 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16293.736225812854!2d124.99957852780315!3d6.391965550382454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f82788fe8be4e9%3A0x19f00d0661deae27!2sNavaro%20Peak!5e1!3m2!1sen!2sph!4v1599012477118!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.257166, 125.1776567], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Sanchez Peak</p> <p>Elev: 722 m, Prom: 125 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16297.970135803505!2d125.16874102779994!3d6.257660357453382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f782e466f2ecc1%3A0x6fdfb77cfae221ed!2sSanchez%20Peak!5e1!3m2!1sen!2sph!4v1599012635899!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.353889, 124.8725], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Milas_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Milas Peak</p> <p>Elev: 696 m, Prom: 238 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16294.945000604579!2d124.86374522780221!3d6.3539100023977415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f78b306c8b240b%3A0x15509fb2bae41014!2sMilas%20Peak!5e1!3m2!1sen!2sph!4v1599012702751!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.252778, 124.852778], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pito_del_Carabao_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pito del Carabao Mountain</p> <p>Elev: 658 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.121709952407!2d124.84402302779984!3d6.2527989577071565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7ed50c0abe525%3A0x5ee902ce781a93d!2sPito%20del%20Carabao%20Mountain!5e1!3m2!1sen!2sph!4v1599012748284!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.2358333, 124.7461111], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lamulas_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lamulas Mountain</p> <p>Elev: 638 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.64910725477!2d124.73735632779942!3d6.235854458590515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7ee5bf49fd98b%3A0x842b364c6d0c06ed!2sLamulas%20Mountain!5e1!3m2!1sen!2sph!4v1599012785684!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.421041, 124.9736805], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Susong Dalaga</p> <p>Elev: 631 m, Prom: 208 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16797.9028780501!2d124.96513947486257!3d6.420532519200372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f827186909e2f7%3A0x442e32f1c4f751e!2sMount%20Susong%20Dalaga!5e1!3m2!1sen!2sph!4v1599012828805!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.246677, 125.1474765], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Base_Peak_(tumoy_sa_bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Base Peak</p> <p>Elev: 624 m, Prom: 127 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.320733332152!2d125.13680082779966!3d6.246410008040446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f783464fa76be1%3A0xd608b79b2f706662!2sBase%20Peak!5e1!3m2!1sen!2sph!4v1599012903543!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.233056, 125.140556], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nopol_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nopol Hill</p> <p>Elev: 593 m, Prom: 90 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.735427132746!2d125.13180082779934!3d6.233076758735154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f79cb24ac3d673%3A0x447a90e506440dfe!2sNopol%20Hill!5e1!3m2!1sen!2sph!4v1599012933982!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.265, 124.820556], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sabu_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sabu Mountain</p> <p>Elev: 544 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16297.740410814122!2d124.81180082780008!3d6.265021107068843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7f280d3323303%3A0x53fd7469a40a95e5!2sSabu%20Mountain!5e1!3m2!1sen!2sph!4v1599012959702!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.266667, 124.933333], { icon: bIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/New_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>New Peak</p> <p>Elev: 535 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16297.688355106393!2d124.92457852780012!3d6.266687856981726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f78debc2e65bf3%3A0x8a58c44f05a2ad75!2sNew%20Peak!5e1!3m2!1sen!2sph!4v1599013001189!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.3400235, 124.9713037], { icon: aIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Potok Hill</p> <p>Elev: 429 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16385.285650525064!2d124.96251658949747!3d6.34002882257157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjAnMjQuMSJOIDEyNMKwNTgnMTYuNyJF!5e1!3m2!1sen!2sph!4v1599013080035!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.283333, 125.2], { icon: aIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nipple_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nipple Peak</p> <p>Elev: 425 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16297.167069239054!2d125.19124522780052!3d6.283354406109575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f7826cf40b0e77%3A0x1028b235df8d8720!2sNipple%20Peak!5e1!3m2!1sen!2sph!4v1599013131242!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.3425, 124.950833], { icon: aIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Norona_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Norona Hill</p> <p>Elev: 358 m, Prom: 45 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16295.3053519933!2d124.94207852780194!3d6.342521152999056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f78961d51dfbd7%3A0x6ac5882871c0d7c2!2sNorona%20Hill!5e1!3m2!1sen!2sph!4v1599013161913!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.4633333, 124.7986111], { icon: aIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Matulas_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Matulas Mountain</p> <p>Elev: 230 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16291.449281889454!2d124.78985632780496!3d6.463354396576922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f81ec0d9640675%3A0x32b590b4e0cbc450!2sMatulas%20Mountain!5e1!3m2!1sen!2sph!4v1599013190701!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.383333, 124.9], { icon: aIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bunut_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bunut Hill</p> <p>Elev: 149 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16294.01037312962!2d124.89124522780293!3d6.383354450839282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f78a8c14a76129%3A0x2caffe7131650241!2sBunut%20Hill!5e1!3m2!1sen!2sph!4v1599013226925!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.5166667, 124.8333333], { icon: aIcon })
  .addTo(southcotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_May_Manok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount May Manok</p> <p>Elev: 51 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16289.724237563953!2d124.82457852780634!3d6.516687843712573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8185bbe41f887%3A0x7a81af5ac878cc88!2sMount%20May%20Manok!5e1!3m2!1sen!2sph!4v1599013249452!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
