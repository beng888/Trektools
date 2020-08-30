var lagunamap = L.map("lagunamap").setView([14.1406629, 121.4691774], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(lagunamap);

L.marker([14.0644312, 121.4267993], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_San_Cristobal" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount San Cristobal</p> <p>Elev: 1488 m, Prom: 641 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14860.127012695275!2d121.41323645472106!3d14.069600892155437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5ac092c43847%3A0x628c6a9cd5f75446!2sMount%20San%20Cristobal!5e1!3m2!1sen!2sph!4v1598279987830!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1352241, 121.1944517], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Makiling" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Makiling</p> <p>Elev: 1090 m, Prom: 972 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.149621243721!2d121.18568962837905!3d14.136409249557959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd66ed51c83ba3%3A0xf90b0e11330117af!2sMount%20Makiling!5e1!3m2!1sen!2sph!4v1598280181856!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1347691, 121.1885382], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Makiling" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Makiling Peak 3</p> <p>Elev: 1088 m, Prom: 76 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.262712428073!2d121.17978392837885!3d14.134790999722616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd668dd9fae14b%3A0xf9f5035141c523fb!2sMount%20Makiling%20Peak%203!5e1!3m2!1sen!2sph!4v1598280232559!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1358471, 121.1939045], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Makiling" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Makiling Peak 2</p> <p>Elev: 1074 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.187461816258!2d121.18514832837899!3d14.135867799613042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd668d554f6ff9%3A0x297edb3299bf2a61!2sMount%20Makiling%20Peak%202!5e1!3m2!1sen!2sph!4v1598280280007!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1325, 121.1966858], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Makiling" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Makiling Peak 1</p> <p>Elev: 1058 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.42137860897!2d121.18793112837857!3d14.132520299953597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd66f307111ee1%3A0xd1dc74608a962ed2!2sMount%20Makiling%20Peak%201!5e1!3m2!1sen!2sph!4v1598280313045!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9938366, 121.2361151], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dalaga" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dalaga</p> <p>Elev: 751 m, Prom: 100 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15910.231423085526!2d121.22430082835949!3d13.976964815703006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6a38bbc3687f%3A0x5043dda7ec0e1661!2sMount%20Dalaga!5e1!3m2!1sen!2sph!4v1598280347231!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9877778, 121.2383], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mataas_na_Bundoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mataas na Bundoc</p> <p>Elev: 730 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15909.4823741578!2d121.22957852836082!3d13.987798214610983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6a228cac1bd7%3A0xeee969fbfd2ed902!2sMount%20Mataas%20na%20Bundoc!5e1!3m2!1sen!2sph!4v1598280421765!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0721096, 121.4075409], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Tayak Hill</p> <p>Elev: 689 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15902.944317207077!2d121.39944077837234!3d14.082010505083836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5ae4e1d3cc65%3A0xed9815cf8efb2c86!2sTayak%20Hill!5e1!3m2!1sen!2sph!4v1598280524010!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1491997, 121.3657835], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Atimbia" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Atimbia</p> <p>Elev: 665 m, Prom: 454 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15898.193799541541!2d121.35343542838072!3d14.150079098166499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd595106577ab7%3A0x1368d9c5d2c49b6f!2sMount%20Atimbia!5e1!3m2!1sen!2sph!4v1598280569846!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1471221, 121.3445844], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Kalisungan</p> <p>Elev: 650 m, Prom: 197 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15898.228727463349!2d121.33850092838067!3d14.149579798217344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5ea94bdb470d%3A0xc8d91fd4ed877d5e!2sMount%20Kalisungan!5e1!3m2!1sen!2sph!4v1598280705948!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1184259, 121.2141173], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabulugan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabulugan</p> <p>Elev: 571 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15900.410712227864!2d121.20513412837681!3d14.118353701394078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd665462eb1611%3A0x83fc104a915b9ed5!2sMount%20Cabulugan!5e1!3m2!1sen!2sph!4v1598280740270!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1011578, 121.2260463], { icon: bIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bulalo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>mount Bulalo</p> <p>Elev: 539 m, Prom: 234 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15900.410712227864!2d121.20513412837681!3d14.118353701394078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd67b9dbd9f9d5%3A0xb45fb9314d266439!2sMount%20Bulalo!5e1!3m2!1sen!2sph!4v1598280812183!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1242101, 121.3217944], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lagula" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lagula</p> <p>Elev: 495 m, Prom: 351 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.999770683353!2d121.31303472837759!3d14.124239800795726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5c46439bed29%3A0x5797e6555adc98fd!2sMount%20Lagula!5e1!3m2!1sen!2sph!4v1598280866819!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.131341, 121.2298609], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Puting_Lupa" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Putinglupa</p> <p>Elev: 464 m, Prom: 55 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.033127384566!2d121.21957852837919!3d14.138075999388365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd67177d522725%3A0xd6b07ec16297e957!2sMount%20Puting%20Lupa!5e1!3m2!1sen!2sph!4v1598280908401!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1325537, 121.3584879], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mabilog_(bungtod_sa_Pilipinas,_lat_14,13,_long_121,36)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mabilog</p> <p>Elev: 444 m, Prom: 109 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.188915447387!2d121.34716982837897!3d14.135846999615167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5bf8f5ddc341%3A0xed56617e1fe6f621!2sMount%20Mabilog!5e1!3m2!1sen!2sph!4v1598281122231!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1300808, 121.2422971], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mahanggulod" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mahanggulod</p> <p>Elev: 417 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.537817140987!2d121.23374522837837!3d14.130853700123135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd676d0873928f%3A0xaa58278697ff4574!2sMount%20Mahanggulod!5e1!3m2!1sen!2sph!4v1598281150930!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.112663, 121.3043169], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Imoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Imoc Hill</p> <p>Elev: 410 m, Prom: 210 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.537817140987!2d121.23374522837837!3d14.130853700123135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5dabb6628ecb%3A0xb79daf26f36550f8!2sImoc%20Hill!5e1!3m2!1sen!2sph!4v1598281177237!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0777995, 121.2140529], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Olilia</p> <p>Elev: 384 m, Prom: 152 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15903.23409747626!2d121.20522732837179!3d14.077847905505928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd68811fd80cd7%3A0x2bce40d4fc0c18d0!2sMount%20Olilia!5e1!3m2!1sen!2sph!4v1598281205263!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0445144, 121.2374222], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mapait_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mapait Hills</p> <p>Elev: 380 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15905.16998507427!2d121.23291172836836!3d14.050008508326144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6838ee261d7b%3A0x984cf90fd1378d38!2sMapait%20Hills!5e1!3m2!1sen!2sph!4v1598281270670!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1350113, 121.2457506], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Putong_Bay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Putong Bay</p> <p>Elev: 378 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.582569666252!2d121.23302312837829!3d14.130213100188287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd676d6d0ebb17%3A0x6e417beda4203508!2sMount%20Putong%20Bay!5e1!3m2!1sen!2sph!4v1598281300407!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.12, 121.3827778], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Basiling" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Basiling</p> <p>Elev: 363 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15900.294367614808!2d121.37402302837702!3d14.120020401224673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5bc74b56b525%3A0x6500c1821aefa0f5!2sBasiling!5e1!3m2!1sen!2sph!4v1598281353798!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0357606, 121.2375453], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bunsulan_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bunsulan Hills</p> <p>Elev: 354 m, Prom: 59 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.290825938944!2d121.23267172836643!3d14.033865309959307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd69ca5f1441cd%3A0x7ba3e4fc0b1692b5!2sBunsulan%20Hills!5e1!3m2!1sen!2sph!4v1598281396391!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0402978, 121.2362317], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mapait_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mapaet Hill</p> <p>Elev: 348 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15905.555032865825!2d121.22957852836774!3d14.044464808887176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6849ca76ae37%3A0xed7379d0dd9929ad!2sMapait%20Hills!5e1!3m2!1sen!2sph!4v1598281544400!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1614784, 121.165823], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bijiang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bijiang</p> <p>Elev: 324 m, Prom: 95 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15897.394692304048!2d121.15706832838215!3d14.16149774700332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd64035c7f1a53%3A0x1e3c3696cee48fcf!2sMount%20Bijiang!5e1!3m2!1sen!2sph!4v1598281616271!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1181532, 121.3713555], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malauban" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malauban</p> <p>Elev: 313 m, Prom: 49 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15900.423904593745!2d121.36259922837678!3d14.118164701413287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5b94801af6ab%3A0x51b7919d50fd8c10!2sMount%20Malauban!5e1!3m2!1sen!2sph!4v1598281651369!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1093996, 121.2456023], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mabilog_(bungtod_sa_Pilipinas,_lat_14,11,_long_121,26)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mabilog</p> <p>Elev: 313 m, Prom: 123 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15901.034054300617!2d121.23684782837572!3d14.109420702301756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd679a20851a3d%3A0x20ff7782f2075ef0!2sMount%20Mabilog!5e1!3m2!1sen!2sph!4v1598281688237!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1269347, 121.3992076], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Malauban - Lansay</p> <p>Elev: 304 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.809857495264!2d121.39045122837786!3d14.126959200519211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5bd2a7f1cfb9%3A0xed3e33356b2152b2!2sMount%20Malauban%20Lansay!5e1!3m2!1sen!2sph!4v1598281747113!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1568141, 121.3959889], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bayaquitos" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bayaguitos</p> <p>Elev: 302 m, Prom: 92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15897.720737180412!2d121.38722592838154!3d14.156839897477893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5974e988621b%3A0x3c42df636b3b0710!2sMount%20Bayaguitos!5e1!3m2!1sen!2sph!4v1598281812333!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1491317, 121.1642862], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>La Mesa</p> <p>Elev: 301 m, Prom: 56 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15898.258659724663!2d121.15553142838063!3d14.14915189826093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd64223dfaac17%3A0x9e9d378d23b3bed6!2sMount%20La%20Mesa!5e1!3m2!1sen!2sph!4v1598281953370!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1534502, 121.1563105], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masaia" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masaia</p> <p>Elev: 294 m, Prom: 89 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15898.258659724663!2d121.15553142838063!3d14.14915189826093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd64164e48a6df%3A0x5a26b1c66259a189!2sMount%20Masaia!5e1!3m2!1sen!2sph!4v1598282025419!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.033333, 121.233333], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tranza_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tranza Hill</p> <p>Elev: 286 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.326326270791!2d121.22457852836637!3d14.033353710011038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd69b3f1d3146f%3A0x9af8af1f0cb1badb!2sTranza%20Hill!5e1!3m2!1sen!2sph!4v1598282162094!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.162613, 121.2067064], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>hilltop</p> <p>Elev: 283 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16144.545766582765!2d121.1978841181363!3d14.162618176421681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA5JzQ1LjQiTiAxMjHCsDEyJzI0LjEiRQ!5e1!3m2!1sen!2sph!4v1598282366525!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0800449, 121.2421173], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tamlong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tamlong</p> <p>Elev: 262 m, Prom: 56 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15902.851028893487!2d121.23291312837252!3d14.083350304947965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd67e7308df487%3A0x1454349732ce2e0e!2sMount%20Tamlong!5e1!3m2!1sen!2sph!4v1598283130816!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0358417, 121.2612371], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tanzo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tanza Hill</p> <p>Elev: 260 m, Prom: 62 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.320795907648!2d121.24843772836638!3d14.033433410002978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd69d4a692888b%3A0xe28f41fc497d873f!2sTanza%20Hill!5e1!3m2!1sen!2sph!4v1598283162523!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0358556, 121.2615528], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Palindan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Palindan Hill</p> <p>Elev: 259 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.325674008713!2d121.25063982836642!3d14.033363110010102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd69d4d0b1ffb3%3A0xb53ae1d204d5ce1b!2sPalindan%20Hill!5e1!3m2!1sen!2sph!4v1598283213190!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0358621, 121.2613634], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mani_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mani Hill</p> <p>Elev: 258 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.326395660351!2d121.24957762836632!3d14.03335271001114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd69d4b87a3d19%3A0x4c4541e3e15a5e2d!2sMani%20Hill!5e1!3m2!1sen!2sph!4v1598283243751!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.45683, 121.4790293], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Romelo</p> <p>Elev: 253 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.13228163427!2d121.4768279148604!3d14.456524434466868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397f227c506c55f%3A0x3cd168ee0398b6a2!2sMount%20Romelo!5e1!3m2!1sen!2sph!4v1598283276636!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1622222, 121.1522222], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Camotes" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Camotes</p> <p>Elev: 243 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15897.342543799507!2d121.14346742838224!3d14.162242596927413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd641274672daf%3A0x6eaeea41e4544b1c!2sMount%20Camotes!5e1!3m2!1sen!2sph!4v1598283390379!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1514069, 121.2534614], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tuntungin_Putho" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tuntungin Putho</p> <p>Elev: 235 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15795.465769804108!2d121.2447217336551!3d14.151421878409316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDA5JzA1LjEiTiAxMjHCsDE1JzEyLjUiRQ!5e1!3m2!1sen!2sph!4v1598283593582!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1429952, 121.2464584], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tayog_Pato" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tayog Pato</p> <p>Elev: 231 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15795.465769804108!2d121.2447217336551!3d14.151421878409316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6743ee675f3d%3A0x6fed7a729343245e!2sMount%20Tayog%20Pato!5e1!3m2!1sen!2sph!4v1598283619389!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([4.1441667, 121.1622222], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mapinggon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mapinggon</p> <p>Elev: 227 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15898.605890268074!2d121.15346742837995!3d14.144187098766391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6424f4f0a27d%3A0xef7ec05ec9da2cbf!2sMount%20Mapinggon!5e1!3m2!1sen!2sph!4v1598283646320!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0966298, 121.2433925], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buboy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buboy</p> <p>Elev: 224 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15898.605890268074!2d121.15346742837995!3d14.144187098766391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd67eb17c17599%3A0x31dfdf14c0d3c6bc!2sMount%20Buboy!5e1!3m2!1sen!2sph!4v1598283695780!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.112918, 121.2425523], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Luyong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>  </p> <p>Elev: 220 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15901.924483809711!2d121.23463772837412!3d14.096650503598493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd679fae0c6a5d%3A0xef77be2d556d3441!2sMount%20Luyong!5e1!3m2!1sen!2sph!4v1598283723562!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>  '
  );
L.marker([14.0986616, 121.2807959], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mapula" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mapula</p> <p>Elev: 201 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15901.782593198017!2d121.27201432837437!3d14.09868620339185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5d6c11346baf%3A0x1d6f47b00af9da3!2sMount%20Mapula!5e1!3m2!1sen!2sph!4v1598283750503!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0736111, 121.2602778], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Buroi_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Buroi Hill</p> <p>Elev: 164 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15901.782593198017!2d121.27201432837437!3d14.09868620339185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd68005d9afd0b%3A0xbd33fd2b31d7aeea!2sBuroi%20Hill!5e1!3m2!1sen!2sph!4v1598283773252!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1598854, 121.2518044], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pulong_Malake" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pulong Malake</p> <p>Elev: 160 m, Prom: 115 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15897.506020037346!2d121.24304782838196!3d14.159907497165358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd60ad67b3eac9%3A0x712388d4bf141b90!2sMount%20Pulong%20Malake!5e1!3m2!1sen!2sph!4v1598283879925!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0785352, 121.2652552], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Del_Carmen_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Del Carmen</p> <p>Elev: 130 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15903.179553411863!2d121.25707852837192!3d14.078631505426491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd5d5432035887%3A0xb9a30745f79c0afe!2sDel%20Carmen!5e1!3m2!1sen!2sph!4v1598283938109!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1759865, 121.1783704], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>RockPoint</p> <p>Elev: 124 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.097171110313!2d121.1761226648582!3d14.175860041144313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd615116712bc3%3A0x72fd6dbc502fc8f0!2sRockpoint!5e1!3m2!1sen!2sph!4v1598284031845!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1959391, 121.2383412], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mayondon_Point" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mayondon</p> <p>Elev: 96 m, Prom: 82 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15894.97958904763!2d121.22943162838642!3d14.195953093488585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd60f367a5162d%3A0x30b7a6304b1f0151!2sMount%20Mayondon!5e1!3m2!1sen!2sph!4v1598284154696!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.2014232, 121.1640041], { icon: aIcon })
  .addTo(lagunamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lecheria_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lecheria Hill</p> <p>Elev: 66 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15894.557617719314!2d121.15680082838713!3d14.2019647928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd63d7544eaf1d%3A0x8aeda5ae87c36061!2sLecheria%20Hill!5e1!3m2!1sen!2sph!4v1598284316223!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
