var aklanmap = L.map("aklanmap").setView([11.8166109, 122.0941541], 10);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(aklanmap);

L.marker([11.3935617, 122.1660901], { icon: dIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Madiac" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Madiac</p> <p>Elev: 1718 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31998.287851196364!2d122.14889627986672!3d11.39277096778357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af8f9317cef88f%3A0x763a953df52bc5cb!2sMount%20Madiac!5e1!3m2!1sen!2sph!4v1598646652790!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.369167, 122.214444], { icon: dIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nausang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nausang</p> <p>Elev: 1567 m, Prom: 228 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16074.104904599715!2d122.20541192808513!3d11.366131757708374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af852eb2f9b4fb%3A0xd4d9d173a9509694!2sMount%20Nausang!5e1!3m2!1sen!2sph!4v1598646757738!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.433333, 122.200278], { icon: cIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magosolon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magosolon</p> <p>Elev: 1170 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16070.932783596472!2d122.17846742809012!3d11.42224290295295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af8592bf1b5e9b%3A0xa045bc399ddab1b6!2sMount%20Magosolon!5e1!3m2!1sen!2sph!4v1598646785915!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.611944, 122.151667], { icon: cIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Usigan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Usigan</p> <p>Elev: 1069 m, Prom: 501 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16059.132451008523!2d122.1298563281088!3d11.62863178529227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a564f2cef407a7%3A0xd54b85664c3d3f25!2sMount%20Usigan!5e1!3m2!1sen!2sph!4v1598646831008!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.471667, 122.130556], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Toctocan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Toctocan</p> <p>Elev: 957 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16068.188003951049!2d122.12013412809443!3d11.470576298840914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af891ffc6c5b65%3A0x467fe29858a452d!2sMount%20Toctocan!5e1!3m2!1sen!2sph!4v1598646865782!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.335833, 122.241944], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dalangnan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dalangnan</p> <p>Elev: 939 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16075.919545133675!2d122.23374522808226!3d11.333909610430302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af9b14cdaeccfd%3A0x75198c1c0ea20550!2sMount%20Dalangnan!5e1!3m2!1sen!2sph!4v1598646891485!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.546944, 122.159167], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Camantara" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amantara</p> <p>Elev: 885 m, Prom: 202 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16063.285480443148!2d122.14652302810217!3d11.556409591502565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a562c32d2728d5%3A0x57cd3a8720574f66!2sMount%20Camantara!5e1!3m2!1sen!2sph!4v1598646921752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.601667, 122.1475], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balabac_(bukid_sa_Pilipinas,_Kasadpang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balabac</p> <p>Elev: 842 m, Prom: 79 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16060.269082306108!2d122.13485632810696!3d11.608909536991396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5649d9f648309%3A0xa8f121439388a05b!2sMount%20Balabac!5e1!3m2!1sen!2sph!4v1598646954223!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.583889, 122.131667], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agotay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Acotay</p> <p>Elev: 809 m, Prom: 64 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16060.269082306108!2d122.13485632810696!3d11.608909536991396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5636a94c2df6d%3A0xbb62f7e22e9e48d7!2sMount%20Agotay!5e1!3m2!1sen!2sph!4v1598646985029!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.8359413, 121.9746221], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Butong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Butong</p> <p>Elev: 772 m, Prom: 129 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16047.058531935741!2d121.9656896281281!3d11.836131717268511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a540372189bf01%3A0x24ec0f66b4a1a664!2sMount%20Butong!5e1!3m2!1sen!2sph!4v1598647009431!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.8427982, 121.9833529], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guimbarogtog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guimbarogtog</p> <p>Elev: 761 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16046.650804706785!2d121.97374522812875!3d11.843076266660658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a540234481f8c5%3A0xe7626f4b54fc3047!2sMount%20Guimbarogtog!5e1!3m2!1sen!2sph!4v1598647044673!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.449444, 122.213889], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lacaon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lacaon</p> <p>Elev: 749 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16069.688009290836!2d122.20763412809204!3d11.444187351087805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af867e9b43ebab%3A0x46e091ac06c3b09!2sMount%20Lacaon!5e1!3m2!1sen!2sph!4v1598647070481!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.334722, 122.268333], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maasim" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maasim</p> <p>Elev: 713 m, Prom: 86 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16075.184916985861!2d122.2645785280834!3d11.346965109328234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af9caef2dc780b%3A0xf8d5e1ca2346fd1e!2sMount%20Maasim!5e1!3m2!1sen!2sph!4v1598647093857!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.4, 122.233333], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Iguiaua" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iguiaua</p> <p>Elev: 708 m, Prom: 45 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16072.332301506654!2d122.2231896280879!3d11.39752065505058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af84f7fb1b97bb%3A0xdd64f8a59df1d743!2sMount%20Iguiaua!5e1!3m2!1sen!2sph!4v1598647119464!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.666667, 122.216667], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malondong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malondong</p> <p>Elev: 599 m, Prom: 300 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16056.08140584716!2d122.19068962811366!3d11.681409580733376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a570757209b291%3A0xa635a23c491aad4e!2sMount%20Malondong!5e1!3m2!1sen!2sph!4v1598647176370!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.829167, 122.02], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Potol" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Potol</p> <p>Elev: 572 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16047.840690608124!2d122.01652302812685!3d11.822798468434724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a56af7c3b742b7%3A0x37adccab0ac54c94!2sMount%20Potol!5e1!3m2!1sen!2sph!4v1598647200024!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.683333, 122.216667], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caguman" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caguman</p> <p>Elev: 572 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16055.807754944388!2d122.18096742811407!3d11.686131780324642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5700930fb46a7%3A0x9a57112006f62657!2sMount%20Caguman!5e1!3m2!1sen!2sph!4v1598647223680!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.833333, 121.95], { icon: bIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talipas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talipas</p> <p>Elev: 518 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16048.150058238602!2d121.92263412812633!3d11.81752066889605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a54113eb412acf%3A0x2eb96f221c3d4303!2sMount%20Talipas!5e1!3m2!1sen!2sph!4v1598647248481!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.354444, 122.327222], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nacuron" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nacuron</p> <p>Elev: 482 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16074.621656200372!2d122.30374522808427!3d11.356965108483372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af82d7be875435%3A0x6cc12ff2fed1db7b!2sMount%20Nacuron!5e1!3m2!1sen!2sph!4v1598647279455!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.8551996, 121.9949905], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tinagtacan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinagtacan</p> <p>Elev: 419 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16045.9489757269!2d121.9862452281299!3d11.855020665614456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a56aa7cf916147%3A0xed81410e616393b3!2sMount%20Tinagtacan!5e1!3m2!1sen!2sph!4v1598647323914!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.816667, 122.066667], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banjao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banjao</p> <p>Elev: 414 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16048.1663382072!2d122.04041192812632!3d11.817242868920326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a56ba8711d4567%3A0xb5714846c9e2557d!2sMount%20Banjao!5e1!3m2!1sen!2sph!4v1598647349446!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.8789043, 121.9591281], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cumaingin" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cumaingan</p> <p>Elev: 363 m, Prom: 38 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16044.543222812588!2d121.95041192813216!3d11.878909513519378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a53f8f8ce8e42b%3A0xc94c9400d84a13bb!2sMount%20Cumaingin!5e1!3m2!1sen!2sph!4v1598647375756!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.4005556, 122.3188889], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Boray" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Boray</p> <p>Elev: 325 m, Prom: 160 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16072.159484293767!2d122.31013412808817!3d11.400576304791523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af824ee474dedf%3A0x3a8fa696b8220f7b!2sMount%20Boray!5e1!3m2!1sen!2sph!4v1598647411471!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.7, 122.183333], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Natpec" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Natpec</p> <p>Elev: 322 m, Prom: 91 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16055.823856439132!2d122.16624522811404!3d11.68585398034868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a570002c9ab0b5%3A0xbabfa4f38d285817!2sMount%20Natpec!5e1!3m2!1sen!2sph!4v1598647457455!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.7873059, 122.1128791], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Omdoy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Omdoy</p> <p>Elev: 314 m, Prom: 185 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16050.214432028211!2d122.10457852812304!3d11.782242871975194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a56c3b6a6e5341%3A0xf3905ea29afd38bc!2sMount%20Omdoy!5e1!3m2!1sen!2sph!4v1598647481390!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.8652189, 121.9292506], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malagud" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malagud</p> <p>Elev: 308 m, Prom: 55 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16045.246449400403!2d121.92068962813103!3d11.866965064567363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a54099705df677%3A0xb730a0f464953e7e!2sMount%20Malagud!5e1!3m2!1sen!2sph!4v1598647505651!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.733333, 122.233333], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/End_Peak_(bukid_sa_Pilipinas,_Kasadpang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>End Peak</p> <p>Elev: 304 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16052.838894893313!2d122.23207852811882!3d11.737242875891639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5716af6c80b45%3A0xd3566e854e3be3b1!2sEnd%20Peak!5e1!3m2!1sen!2sph!4v1598647532621!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.7380483, 122.188636], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabotos" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabotos</p> <p>Elev: 294 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16053.016736933923!2d122.18402302811853!3d11.734187376157129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a571c68df49247%3A0x6d49f8292a7168e4!2sMount%20Cabotos!5e1!3m2!1sen!2sph!4v1598647574891!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.8619111, 121.9226356], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taobun" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taobun</p> <p>Elev: 292 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16045.360859481358!2d121.92068962813084!3d11.865020664737877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a54099edbd618f%3A0xcc5bc4d92da47cb4!2sMount%20Taobun!5e1!3m2!1sen!2sph!4v1598647600193!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5533333, 122.3513889], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lumati" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lumati</p> <p>Elev: 291 m, Prom: 213 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16063.460625431786!2d122.34263412810188!3d11.553353991764595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a57f6369c31993%3A0x4a5e8d4881350dc2!2sMount%20Lumati!5e1!3m2!1sen!2sph!4v1598647629073!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.4811111, 122.4938889], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Elihan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Elihan</p> <p>Elev: 287 m, Prom: 182 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16067.587051968585!2d122.48513412809537!3d11.481131797940952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7d7f1644a623%3A0xd94a3f33a02f1afb!2sMount%20Elihan!5e1!3m2!1sen!2sph!4v1598647703547!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5108333, 122.5], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baguio</p> <p>Elev: 282 m, Prom: 212 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16065.891960442743!2d122.49124522809805!3d11.510853995403096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a587a4510cd7db%3A0xa48ee93afdf90f23!2sMount%20Baguio!5e1!3m2!1sen!2sph!4v1598647757973!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5221909, 122.4858905], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Polilan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Polilan</p> <p>Elev: 281 m, Prom: 158 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16065.225413414879!2d122.47652302809914!3d11.522520694405413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a58703c8d4fe57%3A0x1c50cedd576a9d88!2sMount%20Polilan!5e1!3m2!1sen!2sph!4v1598647831896!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.8781172, 121.9252586], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sapinitan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sapinitan</p> <p>Elev: 261 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16044.625026844347!2d121.91680082813203!3d11.87752066364128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a53f608e149fd5%3A0x447ac1fd423d0368!2sMount%20Sapinitan!5e1!3m2!1sen!2sph!4v1598647862266!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.4763889, 122.4422222], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agtotulan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agtotulan</p> <p>Elev: 254 m, Prom: 123 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16067.85596647065!2d122.43346742809494!3d11.47640959834366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7e095f18d4db%3A0x5d874d56112413d2!2sMount%20Agtotulan!5e1!3m2!1sen!2sph!4v1598647884085!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5136962, 122.3807554], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Linuisan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Linuisan</p> <p>Elev: 252 m, Prom: 210 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16065.622244168731!2d122.3706896280985!3d11.51557629499938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5806b3070ca2b%3A0xd4e6ce421b6f29c6!2sMount%20Linuisan!5e1!3m2!1sen!2sph!4v1598647919071!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.508611, 122.351111], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kuraan</p> <p>Elev: 244 m, Prom: 137 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15986.15874827658!2d122.34242861043496!3d11.508616215252028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMwJzMxLjAiTiAxMjLCsDIxJzA0LjAiRQ!5e1!3m2!1sen!2sph!4v1598648274459!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5677694, 122.3419227], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ugsip" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ugsip</p> <p>Elev: 226 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16062.584455112084!2d122.3329119281033!3d11.56863179045389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a57f447c5e3faf%3A0xd161c99d4b752bbe!2sMount%20Ugsip!5e1!3m2!1sen!2sph!4v1598648318650!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5025, 122.4888889], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mogosarok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mogosarok</p> <p>Elev: 222 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16066.367654372036!2d122.48013412809728!3d11.502520696115194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a587745430b789%3A0xf65a590516df8cf1!2sMount%20Mogosarok!5e1!3m2!1sen!2sph!4v1598648336556!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5, 122.466667], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Range_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Range Hill</p> <p>Elev: 218 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16066.415203360819!2d122.41957852809725!3d11.50168739618638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a580a340791f5f%3A0xf7dae91e363ffeb6!2sRange%20Hill!5e1!3m2!1sen!2sph!4v1598648374231!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.5702832, 122.3535248], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Adgawan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agdawan</p> <p>Elev: 217 m, Prom: 91 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16062.504748980384!2d122.34541192810335!3d11.570020640334658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a57f58442c07e7%3A0x49c87b644c1d9600!2sMount%20Adgawan!5e1!3m2!1sen!2sph!4v1598648436008!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.4888889, 122.4902778], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Asinan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Asinan</p> <p>Elev: 214 m, Prom: 107 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16067.143892690137!2d122.48152302809609!3d11.488909597277372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5877f3e02e8dd%3A0x8e613aab71372932!2sMount%20Asinan!5e1!3m2!1sen!2sph!4v1598648476087!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5386111, 122.3927778], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bulunagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulunagan</p> <p>Elev: 209 m, Prom: 169 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16064.30385192884!2d122.38402302810056!3d11.53863179302626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a581ad1db6fce7%3A0x1c6bf2d63bc2b9e3!2sMount%20Bulunagan!5e1!3m2!1sen!2sph!4v1598648548388!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.555, 122.509444], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinalay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sinalay</p> <p>Elev: 206 m, Prom: 172 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16063.3650998101!2d122.50068962810207!3d11.555020641621685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a58673d1617351%3A0xe7f67f233238052!2sMount%20Sinalay!5e1!3m2!1sen!2sph!4v1598648599329!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5155556, 122.4561111], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dahol_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dahol Hill</p> <p>Elev: 195 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16065.622244168735!2d122.4473563280985!3d11.51557629499937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a58730e9b2f9d7%3A0x3b4ea0f7bffca411!2sDahol%20Hill!5e1!3m2!1sen!2sph!4v1598648632735!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.4858333, 122.4836111], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agsowa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agsowa</p> <p>Elev: 184 m, Prom: 71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16067.318031173063!2d122.47485632809577!3d11.485853947538127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7d877f0ab9af%3A0x8a7dc08842fb9e88!2sMount%20Agsowa!5e1!3m2!1sen!2sph!4v1598648673884!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.511944, 122.456667], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ilijan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ilijan</p> <p>Elev: 176 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16065.574641395457!2d122.45346742809853!3d11.516409544928106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5873b0cdf4357%3A0x7c88db7602e36dd2!2sMount%20Ilijan!5e1!3m2!1sen!2sph!4v1598648726768!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.551667, 122.505278], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Rough_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Rough Peak</p> <p>Elev: 154 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16063.556134596298!2d122.49652302810179!3d11.551687391907487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5866fc657b887%3A0xca094cfe353c832!2sRough%20Peak!5e1!3m2!1sen!2sph!4v1598648752829!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5080556, 122.4566667], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Canisayan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Canisayan Hill</p> <p>Elev: 121 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16066.050559041976!2d122.4479119280978!3d11.50807629564052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a58748157ad085%3A0xebd6002d87d14a08!2sCanisayan%20Hill!5e1!3m2!1sen!2sph!4v1598648771949!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6341452, 122.3315415], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Manduyog_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Manduyog Hill (Cross)</p> <p>Elev: 112 m, Prom: 85 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16058.795801060123!2d122.32252832810933!3d11.634466834789102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5784283d15391%3A0x17b5f320bad1d557!2sManduyog%20Hill!5e1!3m2!1sen!2sph!4v1598648811950!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.5059213, 122.29448], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Kapitungan Hill</p> <p>Elev: 109 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16067.297253328!2d122.28571958172083!3d11.505926540354636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDMwJzIxLjMiTiAxMjLCsDE3JzQwLjEiRQ!5e1!3m2!1sen!2sph!4v1598648948944!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.65, 122.316667], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Malinao_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malinao Hill</p> <p>Elev: 99 m, Prom: 76 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16057.41590879712!2d122.30957852811153!3d11.658353982727041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5782ef6db127f%3A0xccb79b3867f0dbfc!2sMalinao%20Hill!5e1!3m2!1sen!2sph!4v1598648983243!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9768946, 121.928908], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Luho</p> <p>Elev: 94 m, Prom: 94 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16038.6230040733!2d121.91923132814173!3d11.979000254702687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a53c417c9dc28d%3A0x834f75c55ed95103!2sMount%20Luho!5e1!3m2!1sen!2sph!4v1598649029835!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5305556, 122.4613889], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Macabong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Macabong Hill</p> <p>Elev: 92 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16064.764788589493!2d122.45263412809982!3d11.530576293716038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a586d8fb9c8f63%3A0xda0117f642355255!2sMacabong%20Hill!5e1!3m2!1sen!2sph!4v1598649080086!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5313889, 122.4541667], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bongod_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bongod Hill</p> <p>Elev: 92 m, Prom: 73 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16064.717121790498!2d122.44541192809986!3d11.531409593644698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a586d65b88891d%3A0x789e98f19244c3c1!2sBongod%20Hill!5e1!3m2!1sen!2sph!4v1598649113127!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6760159, 122.3469566], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Tigayon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tigayon Hill</p> <p>Elev: 53 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16019.467601628163!2d122.33822082917891!3d11.675822585905879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a577e5c88d46fd%3A0x3518a9680589f8b6!2sTigayon%20Hill!5e1!3m2!1sen!2sph!4v1598649164037!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5837982, 122.5286864], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mandong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mandong Hill</p> <p>Elev: 44 m, Prom: 38 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16060.46526452493!2d122.51992749606481!3d11.583803438954337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM1JzAxLjciTiAxMjLCsDMxJzQzLjMiRQ!5e1!3m2!1sen!2sph!4v1598649275671!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.6247222, 122.3566667], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ba%C3%B1ga_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bañga Hill</p> <p>Elev: 24 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16059.356726426076!2d122.34791192810843!3d11.6247428856275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a58281e7854c05%3A0x12d7622fbee78435!2sBanga%20Hill!5e1!3m2!1sen!2sph!4v1598649317279!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5333333, 122.4833333], { icon: aIcon })
  .addTo(aklanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pilot_Mount" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pilot Mount</p> <p>Elev: 14 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16064.605884137713!2d122.47457852810007!3d11.533353993478237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a586fafee2d11b%3A0xdb142c4bc5bd2859!2sPilot%20Mount!5e1!3m2!1sen!2sph!4v1598649358088!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
