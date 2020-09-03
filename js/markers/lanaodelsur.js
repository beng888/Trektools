var lanaodelsurmap = L.map("lanaodelsurmap").setView(
  [7.823176, 124.4198243],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(lanaodelsurmap);

L.marker([7.7095387, 124.5336359], { icon: fIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ragang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ragang</p> <p>Elev: 2714 m, Prom: 332 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.182276815587!2d124.52457852784727!3d7.716687724458188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff57bf20cd015d%3A0xd1c576441ab8909c!2sMount%20Ragang!5e1!3m2!1sen!2sph!4v1599066359421!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.6542716, 124.3033143], { icon: dIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Volcano_Makaturing" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Makaturing</p> <p>Elev: 1925 m, Prom: 393 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.732868688141!2d124.3079122278445!3d7.6500210285467105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255e32703ace069%3A0x88bbd4104639abc1!2sMount%20Makaturing!5e1!3m2!1sen!2sph!4v1599066384561!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9089709, 124.1109297], { icon: dIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gurain_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gurain</p> <p>Elev: 1859 m, Prom: 1080 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.497059151607!2d124.12346742785579!3d7.914187712179848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255c012a2f3e279%3A0xa7d13e3f412f234d!2sGurain%20Mountains!5e1!3m2!1sen!2sph!4v1599066413912!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.775556, 124.559167], { icon: dIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maranat_(bukid_sa_Pilipinas,_Mindanawng_Muslim)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maranat</p> <p>Elev: 1858 m, Prom: 281 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d258586.567919251!2d124.02740782531528!3d7.93659395990643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff590727b70867%3A0x48e7302e32936c4b!2sMount%20Maranat!5e1!3m2!1sen!2sph!4v1599066475492!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.640278, 124.58], { icon: dIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Punug" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Punug</p> <p>Elev: 1633 m, Prom: 49 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.102990963238!2d124.5712452278441!3d7.640298829140584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff546b78566cd9%3A0xeef62ba69b95f3eb!2sMount%20Punug!5e1!3m2!1sen!2sph!4v1599066533309!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.795, 124.619444], { icon: dIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Barambang_(bukid_sa_Pilipinas,_Mindanawng_Muslim)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Barambang</p> <p>Elev: 1604 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.157227229984!2d124.61068962785062!3d7.795021019618015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff5b92ada9d49b%3A0x6b6f929c0bdfe9e2!2sMount%20Barambang!5e1!3m2!1sen!2sph!4v1599066563598!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7871667, 124.0955], { icon: cIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Baya" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baya</p> <p>Elev: 1396 m, Prom: 519 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.49124950788!2d124.08791222785021!3d7.786410020151993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255c3303a5529ab%3A0x5b46955542e6c68e!2sMount%20Baya!5e1!3m2!1sen!2sph!4v1599066595698!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9493643, 124.584741], { icon: cIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tupi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tupi</p> <p>Elev: 1395 m, Prom: 141 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16238.104001842787!2d124.57541192785737!3d7.9494654099605375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff615a44d51b2f%3A0x63adf9866921ca97!2sMount%20Tupi!5e1!3m2!1sen!2sph!4v1599066651650!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.783333, 124.083333], { icon: cIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/West_Ganassi_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>West Ganassi Peak</p> <p>Elev: 1385 m, Prom: 366 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.609692470469!2d124.07457852785012!3d7.783354320341371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255c34bb5e847fb%3A0xb6075f33315b118!2sWest%20Ganassi%20Peak!5e1!3m2!1sen!2sph!4v1599066684512!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7783333, 124.0783333], { icon: cIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gadungan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gadungan</p> <p>Elev: 1358 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.835670580142!2d124.07068962784984!3d7.777521020702733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255dcb3a2825233%3A0xe89aa1991f08cb9!2sGadungan%20Mountain!5e1!3m2!1sen!2sph!4v1599066709236!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9525564, 124.1659523], { icon: cIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cabun_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cabun Peak</p> <p>Elev: 1314 m, Prom: 123 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16237.421685818788!2d124.17457852785813!3d7.966687708874216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325595bb22466f89%3A0x2eb463a907de9caa!2sCabun%20Peak!5e1!3m2!1sen!2sph!4v1599066757236!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.049167, 124.459722], { icon: cIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sumarangay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sumarangay</p> <p>Elev: 1296 m, Prom: 262 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16234.132841388951!2d124.45096742786191!3d8.04918770364423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255862dc8c803cd%3A0xa1cdf2359816c55e!2sMount%20Sumarangay!5e1!3m2!1sen!2sph!4v1599066784401!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.783333, 124.1], { icon: cIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/East_Ganassi_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>East Ganassi Peak</p> <p>Elev: 1290 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.609692470469!2d124.09124522785008!3d7.783354320341372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255c32e7eaa118b%3A0x5d816a710ceb268e!2sEast%20Ganassi%20Peak!5e1!3m2!1sen!2sph!4v1599066808983!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.766667, 124.666667], { icon: cIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mamaya" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mamaya</p> <p>Elev: 1262 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16245.25489858467!2d124.6579119278494!3d7.766687721373224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff5b210c734b69%3A0x842f4b4551c001d7!2sMount%20Mamaya!5e1!3m2!1sen!2sph!4v1599066837222!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9416012, 124.195694], { icon: cIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bantayao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bantayao</p> <p>Elev: 1157 m, Prom: 117 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16238.740963977727!2d124.19124522785664!3d7.933354360975061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325594df04c579f5%3A0x77b5374c3553221c!2sMount%20Bantayao!5e1!3m2!1sen!2sph!4v1599066861562!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.0208551, 124.2976667], { icon: bIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sacred_Mountain_National_Park" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mupo</p> <p>Elev: 965 m, Prom: 232 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4058.8164744206806!2d124.2954780148256!3d8.020860406170154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMDEnMTUuMSJOIDEyNMKwMTcnNTEuNiJF!5e1!3m2!1sen!2sph!4v1599066920135!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7833333, 124.05], { icon: bIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bukid_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bukid Peak</p> <p>Elev: 840 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.609692470473!2d124.04124522785008!3d7.7833543203413695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255c4b32911dd81%3A0x95c4d6a6762539da!2sBukid%20Peak!5e1!3m2!1sen!2sph!4v1599066986655!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.801944, 124.345], { icon: bIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gatong_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Gatong Mountain</p> <p>Elev: 839 m, Prom: 81 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16243.887583468446!2d124.33624522785088!3d7.801965469187032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255f1cf789348e1%3A0xb44120685b827e84!2sGatong%20Mountain!5e1!3m2!1sen!2sph!4v1599067030451!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.0, 124.25], { icon: bIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Three_Tree_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Three Tree Hill</p> <p>Elev: 833 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16236.09691386732!2d124.24124522785964!3d8.0000210067663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255914ee77c1627%3A0x225548816d48a029!2sThree%20Tree%20Hill!5e1!3m2!1sen!2sph!4v1599067061977!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.011667, 124.282222], { icon: bIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Signal_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Signal Hill</p> <p>Elev: 827 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16235.631943597456!2d124.27346742786017!3d8.011687706026871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32559108a3a5ecc7%3A0x28784b0147fc6b8!2sSignal%20Hill!5e1!3m2!1sen!2sph!4v1599067101040!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.539722, 124.228056], { icon: bIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabugao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabugao</p> <p>Elev: 821 m, Prom: 305 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16253.934962500858!2d124.22041192784005!3d7.538909935297987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32560c0f112e5425%3A0x93f26315d5edbebc!2sMount%20Cabugao!5e1!3m2!1sen!2sph!4v1599067125530!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.883333, 124.166667], { icon: bIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tugaya" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tugaya</p> <p>Elev: 818 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16240.70957662643!2d124.15791192785441!3d7.88335431411308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255ea62838d2cb5%3A0x5b3c4263dd4a3588!2sMount%20Tugaya!5e1!3m2!1sen!2sph!4v1599067150143!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.05, 124.3], { icon: bIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Wheeler_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Wheeler Peak</p> <p>Elev: 809 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16234.09945035409!2d124.29124522786192!3d8.05002100359118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32559070f8fa3a1f%3A0x1432fe887beb4765!2sWheeler%20Peak!5e1!3m2!1sen!2sph!4v1599067182359!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.028889, 124.246944], { icon: bIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pantao_Marig_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pantao Marig Hill</p> <p>Elev: 787 m, Prom: 118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16234.09945035409!2d124.29124522786192!3d8.05002100359118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325590d40f9f1b1f%3A0xf8a4a6f529eee855!2sPantao%20Marig%20Hill!5e1!3m2!1sen!2sph!4v1599067209418!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.468056, 124.179444], { icon: bIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Abunabun" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Abunabun</p> <p>Elev: 615 m, Prom: 313 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16256.58189226653!2d124.17068962783728!3d7.46807663956085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32561299bd2011f9%3A0x373b50f168dc2422!2sMount%20Abunabun!5e1!3m2!1sen!2sph!4v1599067235255!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.483333, 124.191389], { icon: bIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tobu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tobu</p> <p>Elev: 560 m, Prom: 113 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16256.01308989589!2d124.18263412783789!3d7.483354338644125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32560d7a0f9ccd5f%3A0x213c6a787cb7f0d6!2sMount%20Tobu!5e1!3m2!1sen!2sph!4v1599067265907!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.6408333, 124.1291667], { icon: aIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dos_Hermanos_Peaks_(kabukiran)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dos Hermanas</p> <p>Elev: 411 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.229785145319!2d124.141800827844!3d7.636965429344075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255dfe2fdae33d1%3A0x6932174c7f74b4ce!2sDos%20Hermanos%20Peaks!5e1!3m2!1sen!2sph!4v1599067292987!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.483333, 124.183333], { icon: aIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Peak_(bukid_sa_Pilipinas,_Mindanawng_Muslim)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Peak</p> <p>Elev: 352 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16256.013089895885!2d124.17457852783788!3d7.483354338644124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32560d65989e1a93%3A0xaa863e6d1d794d0c!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1599067414169!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.6973, 123.9004], { icon: aIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mangapu_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mangapu Peak</p> <p>Elev: 331 m, Prom: 66 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.92847354808!2d123.89152302784646!3d7.697243225653604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255d69105188a07%3A0x655e69bb70f7b4ee!2sMangapu%20Peak!5e1!3m2!1sen!2sph!4v1599067461744!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.725, 123.9], { icon: aIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Micbacan_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Micbacan</p> <p>Elev: 249 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.92847354808!2d123.89152302784646!3d7.697243225653604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255d6b56fab3ca5%3A0xfa4303a8209efa8f!2sMicbacan%20Mountains!5e1!3m2!1sen!2sph!4v1599067491094!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7059, 123.9575], { icon: aIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Oguing_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Oguing Hill</p> <p>Elev: 224 m, Prom: 76 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.598247219208!2d123.94874522784683!3d7.705854325124515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255d74664a2f327%3A0x75d26440bab5e6a5!2sOguing%20Hill!5e1!3m2!1sen!2sph!4v1599067522050!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.6544, 123.9883], { icon: aIcon })
  .addTo(lanaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tuka_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tuka Hill</p> <p>Elev: 112 m, Prom: 91 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.563515408907!2d123.97957852784471!3d7.654465428275031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255d8172e72ecc7%3A0x146ffcdecd65171d!2sTuka%20Hill!5e1!3m2!1sen!2sph!4v1599067550716!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
