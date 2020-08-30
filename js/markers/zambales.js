var zambalesmap = L.map("zambalesmap").setView([15.5081766, 119.9697808], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(zambalesmap);

L.marker([15.4807954, 120.1205575], { icon: eIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Tapulao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tapulao</p> <p>Elev: 2038 m, Prom: 2013 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15800.819805048546!2d120.11235622855676!3d15.480853207225662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941e7bac14496f%3A0x3563d4b185ba825a!2sMount%20Tapulao!5e1!3m2!1sen!2sph!4v1598138020756!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.441389, 120.151389], { icon: dIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sawtooth_Mountain_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sawtooth</p> <p>Elev: 1704 m, Prom: 120 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15803.087846633243!2d120.14791192855253!3d15.451131310491588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941e287a41b005%3A0xb2488ab9387cda6a!2sSawtooth%20Mountain!5e1!3m2!1sen!2sph!4v1598138157667!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.363889, 120.169167], { icon: dIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Iba_(bukid_sa_Pilipinas,_lat_15,36,_long_120,17)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iba</p> <p>Elev: 1677 m, Prom: 292 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15809.719108084562!2d120.16013412854039!3d15.363909170044733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969fd04879ac4b%3A0x4f216e99a1a6489!2sMount%20Iba!5e1!3m2!1sen!2sph!4v1598138254491!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.3319444, 120.1833333], { icon: cIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dome_Peak_(tumoy_sa_bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dome Peak</p> <p>Elev: 1362 m, Prom: 62 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.138599207266!2d120.17457852853597!3d15.331964623531912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969e6aa225e489%3A0x86904887b8e953b9!2sDome%20Peak!5e1!3m2!1sen!2sph!4v1598138303124!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0306917, 120.3618122], { icon: cIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cuadrado</p> <p>Elev: 1320 m, Prom: 403 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15834.600148917743!2d120.3379119284949!3d15.032242505947456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339662ab9eef9013%3A0x9352f7fc1dfb80bb!2sMount%20Cuadrado!5e1!3m2!1sen!2sph!4v1598138420964!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1623238, 120.1735364], { icon: cIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lunitan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lunitan</p> <p>Elev: 1320 m, Prom: 972 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15824.807010281022!2d120.15957852851277!3d15.163631341804974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396820dba8386c9%3A0xd91b96199f829030!2sMount%20Lunitan!5e1!3m2!1sen!2sph!4v1598138511311!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.647778, 120.039722], { icon: cIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lanat" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lanat</p> <p>Elev: 1112 m, Prom: 609 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15788.644489877883!2d120.03318962857924!3d15.639464589706071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339404425e2c7795%3A0x1e4f6129e56c6ec!2sMount%20Lanat!5e1!3m2!1sen!2sph!4v1598138547596!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8566915, 120.1259478], { icon: cIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balingkilat</p> <p>Elev: 1093 m, Prom: 1036 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.058883398742!2d120.11959782847049!3d14.849822075408017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d8f1c1605c0f%3A0xe496d4b02c024b99!2sMount%20Balingkilat!5e1!3m2!1sen!2sph!4v1598138604186!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0245581, 120.3315788], { icon: cIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balitog" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balitog</p> <p>Elev: 1060 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.094832002535!2d120.32068962849401!3d15.025575856662226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967d45abe8cc3d%3A0x4a168a87fb562fd0!2sMount%20Balitog!5e1!3m2!1sen!2sph!4v1598138726622!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.896944, 120.106389], { icon: cIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maubanban" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maubanban</p> <p>Elev: 1035 m, Prom: 206 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.534838917478!2d120.0981896284769!3d14.89779812030967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d9d15f7c5b33%3A0x9cddd902b59bd57!2sMount%20Maubanban!5e1!3m2!1sen!2sph!4v1598138814156!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.319506, 120.184069], { icon: cIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cahapatan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cahapatan</p> <p>Elev: 1016 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.084015554314!2d120.17568962853423!3d15.319464624894765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969e72fb958487%3A0xc1d4114029638960!2sMount%20Cahapatan!5e1!3m2!1sen!2sph!4v1598138864260!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.986944, 120.376111], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bitnung" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bitnung</p> <p>Elev: 976 m, Prom: 279 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.852881279723!2d120.334856328489!3d14.988353610648087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396632ccb244735%3A0xd58366de96d32ff5!2sMount%20Bitnung!5e1!3m2!1sen!2sph!4v1598138896584!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.534722, 120.026944], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masinloc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masinloc</p> <p>Elev: 962 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.654157914554!2d120.02152302856445!3d15.535298051229164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941bafbd303d15%3A0xe17b178d6a8f1338!2sMount%20Masinloc!5e1!3m2!1sen!2sph!4v1598138930199!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1499563, 120.1453285], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Quimalogong_(bukid_sa_Pilipinas,_lat_15,15,_long_120,14)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Quimalogong</p> <p>Elev: 957 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15825.763060523457!2d120.135689628511!3d15.150853593184985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339429f6354641cf%3A0x32e21cf09a219912!2sMount%20Quimalogong!5e1!3m2!1sen!2sph!4v1598139085778!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.130833, 120.169167], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nagdayap_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nagdayap Mountain</p> <p>Elev: 952 m, Prom: 113 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.299405730475!2d120.16013412850818!3d15.130298045402897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339681e6757078f9%3A0x96139d5ddf0ecd1e!2sNagdayap%20Mountain!5e1!3m2!1sen!2sph!4v1598139162263!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1445511, 120.3509967], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pinatubo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pinatubo</p> <p>Elev: 927 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.357980030862!2d120.34080172850994!3d15.142897094043777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33968f671dda71cd%3A0x608b6fdf07e78094!2sMt%20Pinatubo!5e1!3m2!1sen!2sph!4v1598139237258!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.929444, 120.33], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balakibak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balakibok</p> <p>Elev: 926 m, Prom: 289 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.038860104818!2d120.31680082848138!3d14.931687016699847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967b3ecf83d5e7%3A0xa54edb91b5074ea0!2sMount%20Balakibak!5e1!3m2!1sen!2sph!4v1598139444612!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8067417, 120.1373646], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dayungan</p> <p>Elev: 925 m, Prom: 563 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.8271986160753!2d120.1365709148632!3d14.80544337599294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395df462ad03b97%3A0xa8a38d6f052e91e9!2sRounded%20Peak!5e1!3m2!1sen!2sph!4v1598139287466!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.790872, 120.1626011], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cinco_Picos" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cinco Picos</p> <p>Elev: 919 m, Prom: 279 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.503674373958!2d120.15395162846247!3d14.78909413184132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396758ba78106ab%3A0x39aba1fd076fd2b6!2sCinco%20Picos!5e1!3m2!1sen!2sph!4v1598139520339!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9, 120.116667], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agudo_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agudo</p> <p>Elev: 891 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.984342609985!2d120.10096742847607!3d14.891687020959875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d9cda0ce5459%3A0x671dd03066a6bc51!2sMount%20Agudo!5e1!3m2!1sen!2sph!4v1598139603202!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2025, 120.157222], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cawayen" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cawayen</p> <p>Elev: 885 m, Prom: 163 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.017504393174!2d120.14680082851785!3d15.200853537779283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339428262e45c5ed%3A0xeb82f2faff93758a!2sMount%20Cawayen!5e1!3m2!1sen!2sph!4v1598139645083!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.783333, 120.166667], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Silanguin" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Silanguin</p> <p>Elev: 876 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.15514432843!2d120.16519542846129!3d14.780172782784524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967590851cb587%3A0xccbde68935a405e3!2sMount%20Silanguin!5e1!3m2!1sen!2sph!4v1598139686979!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.949722, 120.284444], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mabulinoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mabolinoc</p> <p>Elev: 859 m, Prom: 293 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.501702705391!2d120.27374522848417!3d14.952520264477222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967b8e31c8bfab%3A0xcc953dd8982f9c86!2sMount%20Mabulinoc!5e1!3m2!1sen!2sph!4v1598139724353!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.933333, 120.333333], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Boars_Tusk_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Boars Tusk</p> <p>Elev: 854 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.915969012136!2d120.32457852848165!3d14.933353616522156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967b37e7dacc5b%3A0xa21b5ea1085bf869!2sBoars%20Tusk!5e1!3m2!1sen!2sph!4v1598139759384!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.933333, 120.366667], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dangas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dangas</p> <p>Elev: 842 m, Prom: 197 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.916434369876!2d120.3579119284816!3d14.933353616522144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33966495f609004f%3A0x2bf7645c16127b73!2sMount%20Dangas!5e1!3m2!1sen!2sph!4v1598210352094!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.74796, 120.090068], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cardoues" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cardoues</p> <p>Elev: 806 m, Prom: 94 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15780.086460328444!2d120.07791192859507!3d15.75002022740402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393ff5e88392d4f%3A0x8d288edde19c58f3!2sMount%20Cardoues!5e1!3m2!1sen!2sph!4v1598139817267!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.983333, 120.366667], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anopus" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anopus</p> <p>Elev: 801 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.22285600864!2d120.35791192848832!3d14.983353611182864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396631878647d33%3A0x810d256e94261980!2sMount%20Anopus!5e1!3m2!1sen!2sph!4v1598139894086!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.072778, 120.190833], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maquineng" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maquineng</p> <p>Elev: 787 m, Prom: 566 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.668876224214!2d120.18152302850021!3d15.071687001712775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396806e51fb3a3b%3A0x4e06f56581132a64!2sMount%20Maquineng!5e1!3m2!1sen!2sph!4v1598139929323!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.37473, 120.0611706], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patugo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patugo</p> <p>Elev: 781 m, Prom: 385 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15808.897478091742!2d120.0537452285419!3d15.374742418860736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394222bbc1aeb07%3A0xb5fe8d5efdae7f15!2sMount%20Patugo!5e1!3m2!1sen!2sph!4v1598139962320!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.233333, 120.1], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mobanghil" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mobanghil</p> <p>Elev: 760 m, Prom: 154 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15819.5764251824!2d120.09124522852231!3d15.233353584257392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394289b409f2645%3A0x270dc4a968d8a20f!2sMount%20Mobanghil!5e1!3m2!1sen!2sph!4v1598140007099!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.566667, 120.116667], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dalayap_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dalayap Hill</p> <p>Elev: 758 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15793.776691560031!2d120.10596742856974!3d15.572797997088463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941d2ace58acd1%3A0x364b1960c7afb7cc!2sDalayap%20Hill!5e1!3m2!1sen!2sph!4v1598140044864!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9, 120.383333], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tambo_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tambo</p> <p>Elev: 722 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.371343356048!2d120.37457852847717!3d14.900020270073187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396650405240ab7%3A0x5c43c8e64edcf1aa!2sMount%20Tambo!5e1!3m2!1sen!2sph!4v1598140087682!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2189851, 120.1077375], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naparel" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naparel</p> <p>Elev: 718 m, Prom: 100 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15820.641104544029!2d120.09902302852038!3d15.219186985793364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394288b684072f1%3A0x5abe627f3714f90c!2sMount%20Naparel!5e1!3m2!1sen!2sph!4v1598140172863!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.045278, 120.164722], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Paete" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Payte</p> <p>Elev: 703 m, Prom: 313 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15833.69267253162!2d120.15541192849653!3d15.044464704636326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967ff486877405%3A0x3135f31e83ee88a2!2sMount%20Paete!5e1!3m2!1sen!2sph!4v1598140208300!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.234722, 120.099722], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bear_Peak_(tumoy_sa_bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bear Peak</p> <p>Elev: 703 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15819.200427079228!2d120.08846742852303!3d15.238353533715003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394289dba024eb9%3A0xaeb389bde1b2440a!2sBear%20Peak!5e1!3m2!1sen!2sph!4v1598140252164!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.239167, 120.077778], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Catongohan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Catongohan</p> <p>Elev: 676 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7909.572828977781!2d120.07401647457785!3d15.239081709200512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339428a61f5aa759%3A0xe8e165a01a5d666a!2sMount%20Catongohan!5e1!3m2!1sen!2sph!4v1598140327230!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.030278, 120.180278], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pimmayong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pimmayong</p> <p>Elev: 665 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15834.744450691775!2d120.17180082849465!3d15.030298106155954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967f9794a98129%3A0x9561fc2e7a44f8be!2sMount%20Pimmayong!5e1!3m2!1sen!2sph!4v1598140435724!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.324722, 120.150278], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangkirat" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangkirat</p> <p>Elev: 656 m, Prom: 79 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.663916285042!2d120.14068962853497!3d15.325020274289162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339420afbae628fb%3A0x610af6b403b82ce4!2sMount%20Mangkirat!5e1!3m2!1sen!2sph!4v1598140476244!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1225, 120.1475], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Binawawan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Binawawan Mountain</p> <p>Elev: 654 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.398503996414!2d120.14763412850621!3d15.115575896989812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942a7833e0949f%3A0xe15f0a4d4934d2fb!2sBinawawan%20Mountain!5e1!3m2!1sen!2sph!4v1598140518676!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.195556, 120.198611], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pundillo_Ni_Luna" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pundillo Ni Luna</p> <p>Elev: 615 m, Prom: 0 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15823.850165498163!2d120.14457852851451!3d15.176409190423968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339429d962d6096b%3A0x8befe254d6e5bc57!2sMount%20Pundillo%20Ni%20Luna!5e1!3m2!1sen!2sph!4v1598140561812!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.836944, 120.184444], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Redondo_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Redondo</p> <p>Elev: 615 m, Prom: 226 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.981066094864!2d120.17624522846883!3d14.837242526742504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967646e25e1bef%3A0x8dc6ff9a5b3742a6!2sMount%20Redondo!5e1!3m2!1sen!2sph!4v1598140599874!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8401459, 120.1045795], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagsasa</p> <p>Elev: 606 m, Prom: 184 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16599.869077130104!2d120.09576050044342!3d14.840151062679036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDUwJzI0LjUiTiAxMjDCsDA2JzE2LjUiRQ!5e1!3m2!1sen!2sph!4v1598140718897!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.895833, 120.071111], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pundaquit" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pundaquit</p> <p>Elev: 600 m, Prom: 224 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.24869592618!2d120.06291192847739!3d14.901687019895782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d9f979f4a8c3%3A0xa5b8ced1456b00f1!2sMount%20Pundaquit!5e1!3m2!1sen!2sph!4v1598140820306!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.916667, 120.1], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Capalngan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calpalngan</p> <p>Elev: 599 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.059343108189!2d120.09457852848136!3d14.93140921672947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d70e7006ca2d%3A0xa77eb667416083a2!2sMount%20Capalngan!5e1!3m2!1sen!2sph!4v1598140864158!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0917194, 120.2517413], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagano" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagano</p> <p>Elev: 590 m, Prom: 151 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.558688925059!2d120.24124522850408!3d15.100020298665125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396812cdfa9aa25%3A0x6e0a1764f2576025!2sMount%20Bagano!5e1!3m2!1sen!2sph!4v1598140908547!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8380259, 120.1422189], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bira-Bira</p> <p>Elev: 582 m, Prom: 99 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16907.639893473737!2d120.13323309063756!3d14.838031062027868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDUwJzE2LjkiTiAxMjDCsDA4JzMyLjAiRQ!5e1!3m2!1sen!2sph!4v1598141012534!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.058889, 120.220556], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Piluca" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Piluca</p> <p>Elev: 572 m, Prom: 161 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.639918953102!2d120.21207852849847!3d15.058631403115454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396809c403654d9%3A0x1ef2ccf598d577f7!2sMount%20Piluca!5e1!3m2!1sen!2sph!4v1598141049155!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.233611, 120.043056], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Botolan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Botolan</p> <p>Elev: 568 m, Prom: 362 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.9049251127303!2d120.03948571486676!3d15.232778015354754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942f698a140041%3A0xbf55fb5a13b403a!2sMount%20Botolan!5e1!3m2!1sen!2sph!4v1598141078481!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.205, 120.188056], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Culianan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Culianan</p> <p>Elev: 564 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.4134283134!2d120.18902302851714!3d15.195575888350593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339682e4eb1dcb35%3A0x547315e35fe64460!2sMount%20Culianan!5e1!3m2!1sen!2sph!4v1598141117324!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.95, 120.3666667], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balakibak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Balikabok</p> <p>Elev: 542 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.038860104822!2d120.31680082848138!3d14.931687016699836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967b3ecf83d5e7%3A0xa54edb91b5074ea0!2sMount%20Balakibak!5e1!3m2!1sen!2sph!4v1598141209817!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.260556, 120.320833], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gatas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gata</p> <p>Elev: 520 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.737512894393!2d120.3118008285257!3d15.257798031604215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969a678836ca7f%3A0xb6fc29fb50f9ebb0!2sMount%20Gatas!5e1!3m2!1sen!2sph!4v1598210247235!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2536111, 120.3227778], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sinilong_Bondok" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sinilong Bondok</p> <p>Elev: 516 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.050784407202!2d120.3140230285251!3d15.253631332056727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969a60d1bb6675%3A0x3dc79a31515862de!2sSinilong%20Bondok!5e1!3m2!1sen!2sph!4v1598141260272!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.883333, 120.35], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Susongdalaga_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Susongdalaga</p> <p>Elev: 516 m, Prom: 186 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.597017711216!2d120.34124522847495!3d14.88335362184615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396654ea2b037f3%3A0x347190c5b88e8462!2sMount%20Susongdalaga!5e1!3m2!1sen!2sph!4v1598141324038!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.125556, 120.103889], { icon: bIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pamalingpi%C3%B1gan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pamalingpingan Mountain</p> <p>Elev: 505 m, Prom: 167 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.942399978387!2d120.08235632850705!3d15.121686996331254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942ba23df2d09b%3A0xd12558db02cba277!2sPamalingpingan%20Mountain!5e1!3m2!1sen!2sph!4v1598141377855!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1871804, 120.0911985], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pamalingpi%C3%B1gan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cunonoyo</p> <p>Elev: 492 m, Prom: 200 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7911.517400267922!2d120.08887592457624!3d15.187295611875475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339429176d617fc7%3A0x6cce5235f5d9684e!2sMount%20Cunonoyo!5e1!3m2!1sen!2sph!4v1598210057758!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.147222, 120.093611], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santa_Cruz" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santa Cruz</p> <p>Elev: 470 m, Prom: 89 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31652.76682742329!2d120.0816069743789!3d15.142556851041311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942bc5a5365cc7%3A0x26d545c1c356a7a2!2sMount%20Santa%20Cruz!5e1!3m2!1sen!2sph!4v1598141408604!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.560278, 120.009444], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bakil" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bakil</p> <p>Elev: 467 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15794.907166234676!2d120.00096742856763!3d15.558075848715085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941ae54f60c4d1%3A0x6b76381c89782297!2sMount%20Bakil!5e1!3m2!1sen!2sph!4v1598141448170!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.833333, 120.166667], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maybe" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maybe</p> <p>Elev: 462 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.510170174797!2d120.15568962846787!3d14.830020277508229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396761ed26a5ffb%3A0x223f143d3309d186!2sMount%20Maybe!5e1!3m2!1sen!2sph!4v1598141484580!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.309722, 120.113333], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bunglo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bunglo</p> <p>Elev: 451 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15813.86078439742!2d120.10430082853279!3d15.30918697601461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942727867b3e83%3A0xeb1eaa2e0239504d!2sMount%20Bunglo!5e1!3m2!1sen!2sph!4v1598141529116!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.886944, 120.419444], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malasimbo_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malasimbo</p> <p>Elev: 442 m, Prom: 234 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.290722060157!2d120.4104119284755!3d14.887520321403056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339665c42d5bacfb%3A0xf32165da82df6386!2sMount%20Malasimbo!5e1!3m2!1sen!2sph!4v1598141564853!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.279167, 120.166944], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pera" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pera</p> <p>Elev: 439 m, Prom: 128 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.083336861948!2d120.15485632852872!3d15.279742479219271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33969d868dd5d22f%3A0x5170f047d3bf2747!2sMount%20Pera!5e1!3m2!1sen!2sph!4v1598141602911!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8747222, 120.0877778], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Twin_Peaks_(tumoy_sa_bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Twin Peaks</p> <p>Elev: 438 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.229757289771!2d120.07902302847378!3d14.87474252276153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d9983b77edc1%3A0x3c792a635676f286!2sTwin%20Peaks!5e1!3m2!1sen!2sph!4v1598141765471!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.916667, 120.116667], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nacday" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nacday</p> <p>Elev: 417 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.366521354697!2d120.0979119284808!3d14.927242517173669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d70c839732f1%3A0x7a241d8ba27fd798!2sMount%20Nacday!5e1!3m2!1sen!2sph!4v1598141853139!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2438889, 120.0386111], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Binonton_Senora_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Binonton Senora Hill</p> <p>Elev: 386 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.782502596003!2d120.02985632852378!3d15.243909133112147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942f614c3f6b63%3A0x88b5a3bf41b9d31a!2sBinonton%20Senora%20Hill!5e1!3m2!1sen!2sph!4v1598141905484!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.883333, 120.316667], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kalaklan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kalaklan</p> <p>Elev: 384 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.903222213534!2d120.30818962847438!3d14.879187022289113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967a992d9a73af%3A0x10ef4e2dca2475bd!2sMount%20Kalaklan!5e1!3m2!1sen!2sph!4v1598141975664!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.299444, 120.158611], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lanitoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lanitoc</p> <p>Elev: 372 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15814.637059502615!2d120.13874522853133!3d15.298909127133824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394275cd2ec95df%3A0xcf90aaee2795d633!2sMount%20Lanitoc!5e1!3m2!1sen!2sph!4v1598142019338!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5936111, 120.0736111], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Banganbatang_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Banganbatang Hill</p> <p>Elev: 364 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.175176111157!2d120.0648563285727!3d15.593631294784368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394035bc0f0747d%3A0xbac28e4f20ef9ad8!2sBanganbatang%20Hill!5e1!3m2!1sen!2sph!4v1598142080422!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.932778, 120.409444], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Quadrant" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Quadrant</p> <p>Elev: 356 m, Prom: 49 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.95693174103!2d120.40068962848154!3d14.932798116581376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396646d8487630d%3A0x87286be21240ca5a!2sMount%20Quadrant!5e1!3m2!1sen!2sph!4v1598142166534!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.078333, 120.139722], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Laba%C3%B1gan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Labañgan</p> <p>Elev: 356 m, Prom: 154 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.193386336336!2d120.13124522850111!3d15.078075901025995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942ab9c19c3bc1%3A0x41cad7558ff53f4a!2sMount%20Labangan!5e1!3m2!1sen!2sph!4v1598142201076!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1501482, 120.2500376], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Moraza_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Moraza Hill</p> <p>Elev: 349 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.012337277656!2d120.23485632851056!3d15.147520243544816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339683f0e5ed524d%3A0xc6f3bc32697db8cb!2sMoraza%20Hill!5e1!3m2!1sen!2sph!4v1598142237998!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.078056, 120.107222], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Quimalogong_(bukid_sa_Pilipinas,_lat_15,08,_long_120,11)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Quimalagong</p> <p>Elev: 337 m, Prom: 125 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.25542649605!2d120.09846742850094!3d15.077242451115604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942b294d8a9227%3A0x5083b3116b31589b!2sMount%20Quimalogong!5e1!3m2!1sen!2sph!4v1598142342994!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.883333, 120.333333], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nabunton_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nabunton Mountain</p> <p>Elev: 329 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.597017711216!2d120.32457852847497!3d14.88335362184615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967ab06a464471%3A0xc50a1b681ebd68f3!2sNabunton%20Mountain!5e1!3m2!1sen!2sph!4v1598142416625!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.007222, 120.251944], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagang</p> <p>Elev: 326 m, Prom: 186 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15836.557023631314!2d120.24291192849138!3d15.005853558775206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967c2a7dfb022f%3A0xa164afc34b220eb2!2sMount%20Bagang!5e1!3m2!1sen!2sph!4v1598142455357!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5847222, 120.0258333], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pinanabunan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinanabunan Hill</p> <p>Elev: 306 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.858742860411!2d120.01707852857143!3d15.584742445767764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941b2b63a76a8b%3A0x5c23abbc063119d!2sPinanabunan%20Hill!5e1!3m2!1sen!2sph!4v1598142486974!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8882582, 120.2035566], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Saddle_Mountain_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Saddle Mountain</p> <p>Elev: 301 m, Prom: 231 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.351988629513!2d120.2062452284754!3d14.886686971491681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396777d170eead9%3A0xe675f892b308c7b7!2sSaddle%20Mountain!5e1!3m2!1sen!2sph!4v1598142570748!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8522222, 120.1636111], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Basillio" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Basillio</p> <p>Elev: 296 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.88136087815!2d120.15485632847086!3d14.852242475151172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396762b72007eaf%3A0xeab4495917c8d895!2sMount%20Basillio!5e1!3m2!1sen!2sph!4v1598142613793!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.886111, 120.124444], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pink" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pink</p> <p>Elev: 0 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.944050741804!2d120.10235632847436!3d14.87863137234817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d9b4951e273b%3A0x46e5595df698e836!2sMount%20Pink!5e1!3m2!1sen!2sph!4v1598142708236!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.770556, 120.011944], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Natalisbong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Natalisbong</p> <p>Elev: 288 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15780.345347730688!2d120.04763412859461!3d15.746686927776016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339407576d2e79fb%3A0x5a0b656464d40090!2sMount%20Natalisbong!5e1!3m2!1sen!2sph!4v1598142739624!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.275833, 120.140278], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mulbao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mulbao</p> <p>Elev: 263 m, Prom: 124 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15816.627850638552!2d120.12985632852774!3d15.272520280004512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394279f1ddc868b%3A0x43d0e0340c214338!2sMount%20Mulbao!5e1!3m2!1sen!2sph!4v1598142773006!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8871591, 120.2148013], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabitoagan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabitoagan</p> <p>Elev: 253 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.597017711216!2d120.20791192847494!3d14.883353621846144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396776354b24dd3%3A0x1abbe8b9ba8b9c7!2sMount%20Cabitoagan!5e1!3m2!1sen!2sph!4v1598142814803!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8825242, 120.1676326], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cawag" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cauag</p> <p>Elev: 252 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.33156926277!2d120.15180082847547!3d14.88696472146216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339677e4eee13215%3A0x3e9d6353b04c3dcf!2sMount%20Cayuag!5e1!3m2!1sen!2sph!4v1598142855383!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.252778, 120.065], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Munti" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Munti</p> <p>Elev: 250 m, Prom: 142 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.15534077341!2d120.05596742852494!3d15.25224248220753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339425fdbca9c23b%3A0x20d39b47b56fd828!2sMount%20Munti!5e1!3m2!1sen!2sph!4v1598142913630!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.777778, 120.194444], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Macmany" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Macmany</p> <p>Elev: 245 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.328488930818!2d120.18568962846098!3d14.7777980830355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339675b012497f5b%3A0x2949919433b66bf6!2sMacmany!5e1!3m2!1sen!2sph!4v1598142946022!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8793439, 120.1542859], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Casagoton_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Casagoton</p> <p>Elev: 243 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.331569262766!2d120.15180082847544!3d14.886964721462148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339677e4eee13215%3A0x3e9d6353b04c3dcf!2sMount%20Cayuag!5e1!3m2!1sen!2sph!4v1598142984970!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.933333, 120.083333], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Rogostoco" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Rogostoco</p> <p>Elev: 241 m, Prom: 45 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.331569262766!2d120.15180082847544!3d14.886964721462148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d739e4d8ce03%3A0x7577426aaeafd475!2sMount%20Rogostoco!5e1!3m2!1sen!2sph!4v1598143042957!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.713611, 119.972222], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lacapon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lacapon</p> <p>Elev: 237 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.909789615922!2d119.96346742858984!3d15.713631281461396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394088244847d99%3A0x23d278cdeb500028!2sMount%20Lacapon!5e1!3m2!1sen!2sph!4v1598143075176!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.3261111, 120.0513889], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binandilaan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binandilaan</p> <p>Elev: 229 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.579884641233!2d120.04263412853511!3d15.326131324168031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339424092fd3068b%3A0x2541736082915996!2sMount%20Binandilaan!5e1!3m2!1sen!2sph!4v1598143109082!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.933333, 120.233333], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lomboy_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lomboy</p> <p>Elev: 199 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15842.509838108386!2d120.24180082848055!3d14.92529811738093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396797ff9d54c8d%3A0xfef67d5e90c9d2fb!2sMount%20Lomboy!5e1!3m2!1sen!2sph!4v1598143348862!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.566667, 120.083333], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Coto_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Coto Hill</p> <p>Elev: 193 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15795.33349494663!2d120.07957852856687!3d15.55252024932857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941c94c19a2d73%3A0x693d52e1a056da73!2sCoto%20Hill!5e1!3m2!1sen!2sph!4v1598143394501!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.533333, 120.0], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bolja_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bolja Peak</p> <p>Elev: 166 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15807.769289523705!2d119.99124522856417!3d15.533353551443627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941a4232b92c87%3A0x52bf7987e104ca0!2sBolja%20Peak!5e1!3m2!1sen!2sph!4v1598279776637!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8836259, 120.2501559], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Booitlao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Boouillao</p> <p>Elev: 166 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.066505343924!2d120.24735632847408!3d14.876964722525331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339670ac0edd895f%3A0xbab56cc47096f6bc!2sMount%20Booitlao!5e1!3m2!1sen!2sph!4v1598143461932!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2416667, 120.0244444], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maoato_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maoato Hill</p> <p>Elev: 131 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15818.949687227618!2d120.01568962852348!3d15.241686933353312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942f79c0f79327%3A0xe9e5cee58147dc2f!2sMaoato%20Hill!5e1!3m2!1sen!2sph!4v1598143616148!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.317778, 120.0525], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binandilaan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binalayan</p> <p>Elev: 130 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15812.579884641233!2d120.04263412853511!3d15.326131324168031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339424092fd3068b%3A0x2541736082915996!2sMount%20Binandilaan!5e1!3m2!1sen!2sph!4v1598143718439!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0975, 120.0602778], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Carmen_Hill_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Carmen Hill</p> <p>Elev: 130 m, Prom: 106 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.745037857481!2d120.05152302850375!3d15.097520298934242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942ca223927553%3A0x5411cf4f70bd70cd!2sCarmen%20Hill!5e1!3m2!1sen!2sph!4v1598143771297!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9683333, 120.2691667], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagbakil" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagbakil</p> <p>Elev: 129 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.332060190023!2d120.26041192848632!3d14.968353562786254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33967c0be6689cef%3A0x6fef1ee7e9388ead!2sMount%20Nagbakil!5e1!3m2!1sen!2sph!4v1598143863755!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8961341, 120.2023092], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Namapagan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Namapagan Mountain</p> <p>Elev: 124 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.778449615173!2d120.20791192847825!3d14.908075869215631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339679c7e1d9b85f%3A0xb8f0ec435238cec6!2sMount%20Namapagan!5e1!3m2!1sen!2sph!4v1598143956020!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.866667, 120.25], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panaigar" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panaigar</p> <p>Elev: 123 m, Prom: 90 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.82135127923!2d120.24124522847274!3d14.866686973617409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396774b41aae043%3A0x21381687b30d835c!2sMount%20Panaigar!5e1!3m2!1sen!2sph!4v1598144048723!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0727778, 120.0733333], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sindol_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sindol Hill</p> <p>Elev: 119 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15831.586201162228!2d120.06457852850043!3d15.07279805159337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d4ac6ec5bd89%3A0x52387060526d60d2!2sSindol%20Hill!5e1!3m2!1sen!2sph!4v1598144080989!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9, 120.183333], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alinup" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alinup</p> <p>Elev: 115 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.371343356048!2d120.17457852847717!3d14.900020270073183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396782269909721%3A0x2143802ec614fd24!2sMount%20Alinup!5e1!3m2!1sen!2sph!4v1598144139824!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7122222, 119.9252778], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Malpay_Hill_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malpay Hill</p> <p>Elev: 104 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.017420958988!2d119.91652302858964!3d15.712242431616085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394091dd69f0cd5%3A0xcfda3eb40ce743c1!2sMalpay%20Hill!5e1!3m2!1sen!2sph!4v1598144187093!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.99, 120.1522222], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Simminoblan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Simminoblan Hill</p> <p>Elev: 103 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.729530800867!2d120.14346742848922!3d14.990020260469802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d5fa3c7bb3e1%3A0x79dac00f4a3aac66!2sSimminoblan%20Hill!5e1!3m2!1sen!2sph!4v1598144280613!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8830063, 120.2115224], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>mountain hills</p> <p>Elev: 87 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.405541349692!2d120.2093337148638!3d14.883011474083267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDUyJzU4LjgiTiAxMjDCsDEyJzQxLjUiRQ!5e1!3m2!1sen!2sph!4v1598144434417!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9002558, 120.2147327], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Namiranlic" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mamiranlic</p> <p>Elev: 86 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.187376382288!2d120.20957852847754!3d14.90252026980708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339679c5c0ef05af%3A0xc94a00f8c36bec11!2sMount%20Namiranlic!5e1!3m2!1sen!2sph!4v1598144478688!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1077778, 120.0561111], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tictic_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tictic Hill</p> <p>Elev: 83 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.978742305566!2d120.04735632850513!3d15.107798097827656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33942c9a8bc38f91%3A0xb5fea37f236259a6!2sTictic%20Hill!5e1!3m2!1sen!2sph!4v1598144508193!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8836111, 120.0763889], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lone_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lone Hill</p> <p>Elev: 71 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.57659913823!2d120.06763412847496!3d14.883631421816606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d98dc0ec8fa9%3A0xb403e2b3f60dde16!2sLone%20Hill!5e1!3m2!1sen!2sph!4v1598144603328!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.705, 119.9025], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Naulo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Naulo Hill</p> <p>Elev: 56 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15783.576968391217!2d119.8937452285886!3d15.705020232420363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33940940cd7d25c5%3A0xe9e80fa4ca39d827!2sNaulo%20Hill!5e1!3m2!1sen!2sph!4v1598144652020!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5344444, 119.9755556], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Babo_Puti_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Babo Puti Hill</p> <p>Elev: 55 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.718033785086!2d119.96680082856433!3d15.534464601321098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33941a75bd9d9ddf%3A0x4969e81ecd738478!2sBabo%20Puti%20Hill!5e1!3m2!1sen!2sph!4v1598144715115!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4094444, 119.9522222], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bawot_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bawot Hill</p> <p>Elev: 55 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.260221527655!2d119.94346742854673!3d15.409464615060983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33943d4014845b25%3A0xfb39de974e6f5c3b!2sBawot%20Hill!5e1!3m2!1sen!2sph!4v1598144766136!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.72, 119.9222222], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maagoso_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maagoso Hill</p> <p>Elev: 53 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.414547386323!2d119.91346742859075!3d15.72002023074961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339409037c29db25%3A0xfba7acb12b847f5!2sMaagoso%20Hill!5e1!3m2!1sen!2sph!4v1598144846323!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4088889, 119.9413889], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bandera_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bandera Hill</p> <p>Elev: 35 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.30245913473!2d119.93263412854665!3d15.408909115121835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33943d12c302c057%3A0xe4eb4ab5b30dc3e0!2sBandera%20Hill!5e1!3m2!1sen!2sph!4v1598144917620!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9, 120.166667], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Looc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Looc</p> <p>Elev: 33 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.371343356048!2d120.15791192847718!3d14.900020270073183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396780391cbd75f%3A0x303cdee1dd59d743!2sMount%20Looc!5e1!3m2!1sen!2sph!4v1598144976340!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4002778, 119.9455556], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pandmuzwan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pandmuzwan Hill</p> <p>Elev: 29 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15806.957012842378!2d119.93680082854547!3d15.400298066064817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33943d1736103f69%3A0x247ef909e1e80e0!2sPandmuzwan%20Hill!5e1!3m2!1sen!2sph!4v1598145003904!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5, 119.966667], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mapait_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mapait Hill</p> <p>Elev: 17 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15799.354939730882!2d119.95791192855945!3d15.500020205116687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3394175a6d01513d%3A0xbe7cfe1b705c7959!2sMapait%20Hill!5e1!3m2!1sen!2sph!4v1598145085587!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.933333, 120.066667], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Corrat" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Corral</p> <p>Elev: 15 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.082937402034!2d120.06596742847951!3d14.917520318209732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3395d751b13e43a3%3A0xa7cc96609ee69d39!2sMount%20Corrat!5e1!3m2!1sen!2sph!4v1598145122928!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.86, 120.2666667], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Labao_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Labao Mountain</p> <p>Elev: 13 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.310712198354!2d120.25791192847183!3d14.860020274325445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339670c763b47a81%3A0xd22561b0a3ab8abb!2sMount%20Labao!5e1!3m2!1sen!2sph!4v1598145166045!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5833333, 119.9166667], { icon: aIcon })
  .addTo(zambalesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lana_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lana Mountain</p> <p>Elev: 17 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15792.965520994452!2d119.90791192857124!3d15.583353495921388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339411c873968f55%3A0x1021978fd0b4b21d!2sLana%20Mountain!5e1!3m2!1sen!2sph!4v1598145215449!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
