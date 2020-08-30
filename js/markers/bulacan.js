var bulacanmap = L.map("bulacanmap").setView([14.7942735, 120.8799008], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(bulacanmap);

L.marker([14.87, 121.221667], { icon: cIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Oriod_(bukid_sa_Pilipinas,_lat_14,87,_long_121,22)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Oriod</p> <p>Elev: 1187 m, Prom: 512 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.944164940756!2d121.20803822847249!3d14.865014123795104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a0bd5145aeb7%3A0x1c35a4556c1e00c!2sMount%20Oriod!5e1!3m2!1sen!2sph!4v1598189537862!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9183732, 121.3006505], { icon: cIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Etnora" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Etnora</p> <p>Elev: 1121 m, Prom: 238 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.144320951324!2d121.2912452284794!3d14.9166870182985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397750ce19f8a37%3A0x52cf92c51b92f450!2sMount%20Etnora!5e1!3m2!1sen!2sph!4v1598189587408!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9160927, 121.2994695], { icon: cIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mabitoan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mabitoan</p> <p>Elev: 1114 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.16478752804!2d121.29152302847933!3d14.916409168328109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397750ce7606fef%3A0xd34bea3ccf20a279!2sMount%20Mabitoan!5e1!3m2!1sen!2sph!4v1598189623399!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.866667, 121.216667], { icon: cIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Oriod_(bukid_sa_Pilipinas,_lat_14,87,_long_121,22)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Driod</p> <p>Elev: 1039 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.944164940762!2d121.20803822847249!3d14.86501412379511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a0bd5145aeb7%3A0x1c35a4556c1e00c!2sMount%20Oriod!5e1!3m2!1sen!2sph!4v1598189726658!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.9, 121.316667], { icon: cIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Enamong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Enamong</p> <p>Elev: 1039 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.37134335605!2d121.30791192847714!3d14.90002027007318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33977584fc028ed9%3A0x5eed972576659803!2sMount%20Enamong!5e1!3m2!1sen!2sph!4v1598189760304!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.024722, 121.283611], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sumay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sumag</p> <p>Elev: 970 m, Prom: 282 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15835.156653705359!2d121.27541192849392!3d15.024742506751567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339772de3f41e9b1%3A0xfa2635758759ceff!2sMount%20Sumay!5e1!3m2!1sen!2sph!4v1598189792433!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.029722, 121.313889], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kalaonan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kalaonan</p> <p>Elev: 907 m, Prom: 169 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15834.847515402527!2d121.30568962849446!3d15.028909206304892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397725a28cf853d%3A0xa9186f8e5e9e655a!2sMount%20Kalaonan!5e1!3m2!1sen!2sph!4v1598189848704!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.883333, 121.233333], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Inuman" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Inuman</p> <p>Elev: 902 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.454087228767!2d121.21902302847519!3d14.885298121639373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a067e4d46e91%3A0xcf5686e56007a4ce!2sMount%20Inuman!5e1!3m2!1sen!2sph!4v1598189884082!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1, 121.15], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bulacan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bulacan Peak</p> <p>Elev: 901 m, Prom: 376 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.558688925059!2d121.14124522850409!3d15.100020298665129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339711ea46dda66f%3A0x2577b48a2b4bd815!2sBulacan%20Peak!5e1!3m2!1sen!2sph!4v1598189915684!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.094722, 121.154167], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Silad" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Silad</p> <p>Elev: 894 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15829.786451677635!2d121.14346742850367!3d15.096964648994062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339711e96b23d9b1%3A0x9d6bdbc0f0693e81!2sMount%20Silad!5e1!3m2!1sen!2sph!4v1598189955929!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.85, 121.2], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maranat_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maranat</p> <p>Elev: 843 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.20877572419!2d121.19318962847204!3d14.861409224177965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a11b9868efcb%3A0xdc5cd0928a9fc4cc!2sMount%20Maranat!5e1!3m2!1sen!2sph!4v1598189988602!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.193333, 121.179167], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sumacbao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sumacbao</p> <p>Elev: 833 m, Prom: 133 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.4134283134!2d121.16763412851714!3d15.1955758883506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33971428d6797031%3A0xb02127544c30e900!2sMount%20Sumacbao!5e1!3m2!1sen!2sph!4v1598190029904!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.009167, 121.178889], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tabernaculo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tabernaculo</p> <p>Elev: 746 m, Prom: 180 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15836.268852983489!2d121.16791192849188!3d15.009742458358748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33970c1c764a2983%3A0x229109d7662393b1!2sMount%20Tabernaculo!5e1!3m2!1sen!2sph!4v1598190067690!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.899167, 121.230556], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ooncaan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ooncaan</p> <p>Elev: 737 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.41222040047!2d121.22068962847712!3d14.899464720132306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a070b6dcf09b%3A0xbfd78c5faf63fb55!2sMount%20Ooncaan!5e1!3m2!1sen!2sph!4v1598190098664!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8427778, 121.2102778], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Holong_Ipu" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Holong Ipu</p> <p>Elev: 670 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.573889903313!2d121.20152302846957!3d14.842798126153271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a1739b1c9641%3A0x7da32a61ca9b1368!2sMount%20Holong%20Ipu!5e1!3m2!1sen!2sph!4v1598190218036!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.133333, 121.15], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palanas_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palanas</p> <p>Elev: 587 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.274134598103!2d121.14568962850646!3d15.117242496810238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397119bdd6d0af7%3A0xd0abf5c3a2efa1ca!2sMount%20Palanas!5e1!3m2!1sen!2sph!4v1598190250732!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.978889, 121.146944], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tincugan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tincugan</p> <p>Elev: 577 m, Prom: 205 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15838.448891888751!2d121.1370785284879!3d14.980298061509583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397093fd0e68f29%3A0xef95d659f19b4d39!2sMount%20Tincugan!5e1!3m2!1sen!2sph!4v1598190298034!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.016667, 121.133333], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maon</p> <p>Elev: 563 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15836.351190134965!2d121.13096742849173!3d15.008631408477736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33970ecef77838e7%3A0x4fe708def1c8874a!2sMount%20Maon!5e1!3m2!1sen!2sph!4v1598190326494!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.063611, 121.106111], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lumot" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lumot</p> <p>Elev: 545 m, Prom: 181 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15832.164835047939!2d121.09652302849933!3d15.065020252429182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33970fbe8ae9dc45%3A0xb7ba3c95f7f30d69!2sMount%20Lumot!5e1!3m2!1sen!2sph!4v1598190358488!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.933333, 121.166667], { icon: bIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cruz" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cruz</p> <p>Elev: 507 m, Prom: 141 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.884856990471!2d121.16151802848171!3d14.933775516477162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339709f544a612a9%3A0x5b6633405e8b7e30!2sMount%20Cruz!5e1!3m2!1sen!2sph!4v1598190390096!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.0, 121.166667], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mayapa" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mayapa</p> <p>Elev: 464 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15837.359391554894!2d121.12957852848987!3d14.995020309934826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33970931bec2981b%3A0x1e4c393b84ebab87!2sMount%20Mayapa!5e1!3m2!1sen!2sph!4v1598190429886!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1422219, 121.0877781], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nablo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mablo</p> <p>Elev: 446 m, Prom: 251 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15826.323855090044!2d121.07763412850998!3d15.143353593994515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33971084bfb1ad59%3A0xdf688223f1986677!2sMount%20Nablo!5e1!3m2!1sen!2sph!4v1598190546075!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1303243, 121.0910588], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Susungdalaga_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon,_Province_of_Bulacan,_lat_15,13,_long_121,09)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Susungdalaga</p> <p>Elev: 407 m, Prom: 97 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.174918034138!2d121.08068962850845!3d15.131964645223174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397107d3d8dff19%3A0xe622401ad9f24043!2sMount%20Susungdalaga!5e1!3m2!1sen!2sph!4v1598190694542!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1147111, 121.0934778], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Silid" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Silid</p> <p>Elev: 404 m, Prom: 183 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15828.460694865938!2d121.08013412850609!3d15.114742447079616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33971072eee4964f%3A0x29bf7adb0d0e6e99!2sMount%20Silid!5e1!3m2!1sen!2sph!4v1598190727384!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.966667, 121.2], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baliguiran" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baliguiran</p> <p>Elev: 381 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15840.132468120888!2d121.18485632848484!3d14.957520313943395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33970bc9fc0cac6d%3A0xd5fd9be12c499f88!2sMount%20Baliguiran!5e1!3m2!1sen!2sph!4v1598190759160!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.916667, 121.116667], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Susungdalaga_(bukid_sa_Pilipinas,_Tunga-tungang_Luzon,_Province_of_Bulacan,_lat_14,92,_long_121,12)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Susungdalaga</p> <p>Elev: 292 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15843.144320951327!2d121.10791192847938!3d14.91668701829851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a7842b2579f9%3A0x4c5581917212258b!2sMount%20Susungdalaga!5e1!3m2!1sen!2sph!4v1598190795554!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.966667, 121.15], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Asan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Asan</p> <p>Elev: 290 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15839.496292218008!2d121.13124522848602!3d14.966131363023669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397090edb926b57%3A0x5ca71b807232ee5!2sMount%20Asan!5e1!3m2!1sen!2sph!4v1598190831441!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.216667, 121.133333], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caronon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caronon Hill</p> <p>Elev: 290 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15820.828893378224!2d121.12457852852006!3d15.216686936064297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397165118eedb41%3A0x8977b188c247e775!2sCaronon%20Hill!5e1!3m2!1sen!2sph!4v1598190861523!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.816667, 121.133333], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Katitingo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Katinga</p> <p>Elev: 262 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.120353504797!2d121.15402302846675!3d14.82168702839135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a40f7e996085%3A0xe0f17ad5c43e9bd6!2sMount%20Katitingo!5e1!3m2!1sen!2sph!4v1598190888259!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1635928, 121.0936202], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gola</p> <p>Elev: 202 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2016080062963!2d121.09160431486625!3d15.163639067095355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339710ba7d12a2cf%3A0x86826d8d7913aeed!2sMount%20Gola!5e1!3m2!1sen!2sph!4v1598190923304!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1629422, 121.0909286], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manalmon</p> <p>Elev: 180 m, Prom: 42 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.2182881688773!2d121.08884851493056!3d15.162741467117886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339710bacda3f75f%3A0xe1ff6714c89b39ae!2sMount%20Manalmon!5e1!3m2!1sen!2sph!4v1598191010828!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.25, 121.133333], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Biscal" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bisal</p> <p>Elev: 176 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.10932873518!2d121.13568962852685!3d15.266131380698894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33973d9470233215%3A0xf4794f16dba566d4!2sMount%20Biscal!5e1!3m2!1sen!2sph!4v1598191105551!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.2, 121.083333], { icon: aIcon })
  .addTo(bulacanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Catanpacan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Catampacan Hill</p> <p>Elev: 144 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.663427408135!2d121.08318962851665!3d15.192242488711349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339717433c85d9a5%3A0x7109b4dbc62906a8!2sCatanpacan%20Hill!5e1!3m2!1sen!2sph!4v1598191138216!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
