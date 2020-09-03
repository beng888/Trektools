var sulumap = L.map("sulumap").setView([5.9749011, 121.03351], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(sulumap);

L.marker([5.9972622, 120.9622694], { icon: bIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tumatangas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tumatangas</p> <p>Elev: 803 m, Prom: 803 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4072.2956962334893!2d122.29781131482247!3d6.533338624861321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244f93e3304134f%3A0x7aac39694e5e89e4!2sMount%20Tumatangas!5e1!3m2!1sen!2sph!4v1599087813451!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.0375, 121.100833], { icon: bIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinumaan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sinumaan</p> <p>Elev: 770 m, Prom: 640 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4072.2956962334893!2d122.29781131482247!3d6.533338624861321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e322f4ce41c7%3A0x41265dbca788f6eb!2sMount%20Sinumaan!5e1!3m2!1sen!2sph!4v1599087879382!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.036667, 121.108056], { icon: bIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gasam" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gasam</p> <p>Elev: 675 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4072.2956962334893!2d122.29781131482247!3d6.533338624861321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e31a28068dc1%3A0x27fdd7ccb3f9447b!2sMount%20Gasam!5e1!3m2!1sen!2sph!4v1599087899223!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.013056, 121.058333], { icon: bIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dajo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dajo</p> <p>Elev: 660 m, Prom: 294 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.450469197527!2d121.0495785277947!3d6.013076770033263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fca1b11fca03%3A0x764a06fba37dd876!2sMount%20Dajo!5e1!3m2!1sen!2sph!4v1599087993537!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.035833, 121.116667], { icon: bIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tunggol" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tunggol</p> <p>Elev: 641 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.450469197527!2d121.0495785277947!3d6.013076770033263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e305a74d8d5b%3A0x4e5f68f5b7f950dd!2sMount%20Tunggol!5e1!3m2!1sen!2sph!4v1599088016004!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.033333, 121.1166669], { icon: bIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lambagu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lambagu</p> <p>Elev: 640 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.841590912874!2d121.10791192779504!3d6.033354469004885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e30f757072af%3A0xd02f8e2a82c99cb8!2sMount%20Lambagu!5e1!3m2!1sen!2sph!4v1599088043058!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.033333, 121.133333], { icon: bIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matungkup" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matungkup</p> <p>Elev: 611 m, Prom: 154 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.841590912874!2d121.10791192779504!3d6.033354469004885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e3af7d897661%3A0x33e1e0c14db6fac2!2sMount%20Matungkup!5e1!3m2!1sen!2sph!4v1599088064381!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.028056, 121.139444], { icon: bIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagsak_(bukid_sa_Pilipinas,_Mindanawng_Muslim)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagsak</p> <p>Elev: 594 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.841590912874!2d121.12457852779512!3d6.033354469004898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e3bc80c9d30f%3A0xd466bc52f9ce1ea4!2sMount%20Bagsak!5e1!3m2!1sen!2sph!4v1599088092091!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.031751, 121.1166463], { icon: bIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p><Mount Pang</p> <p>Elev: 586 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.000260955487!2d121.13068962779498!3d6.028076769272791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e30f757072af%3A0xe0e502cf384e525b!2sMount%20Pang!5e1!3m2!1sen!2sph!4v1599088122908!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9328, 120.9482], { icon: bIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tukay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tukay</p> <p>Elev: 575 m, Prom: 394 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.840921686364!2d120.93957852779309!3d5.932798974078615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244f770c79a3f4d%3A0xa61a0e52f36531a9!2sMount%20Tukay!5e1!3m2!1sen!2sph!4v1599088146572!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.031389, 121.124722], { icon: bIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Munguit" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Munguit</p> <p>Elev: 508 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.900063917754!2d121.11596742779501!3d6.031410069103606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e309d3a58be7%3A0xe23c95980355d1dc!2sMount%20Munguit!5e1!3m2!1sen!2sph!4v1599088167799!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.5278, 120.8567], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gorro_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Gorro Peak</p> <p>Elev: 482 m, Prom: 482 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16319.41245072102!2d120.8479119277865!3d5.527798993856448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32447fa3cec62eb9%3A0x6481a1097deeb1c9!2sGorro%20Peak!5e1!3m2!1sen!2sph!4v1599088192154!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.016667, 121.083333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kaga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kaga</p> <p>Elev: 477 m, Prom: 92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.342188200158!2d121.07457852779477!3d6.016687869850317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e352417b8a9d%3A0xced5461ab03317c0!2sMount%20Kaga!5e1!3m2!1sen!2sph!4v1599088220530!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.7292767, 120.9057292], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tapul_Island_(pulo_sa_Pilipinas,_Mindanawng_Muslim)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tapul</p> <p>Elev: 472 m, Prom: 472 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17123.28649311091!2d120.89685703849456!3d5.729282027748533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDMnNDUuNCJOIDEyMMKwNTQnMjAuNiJF!5e1!3m2!1sen!2sph!4v1599088295926!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.7316571, 120.9060381], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/w/index.php?search=Mount+Tapul&title=Espesyal%3APangita&go=Sige%21&ns0=1" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dakut</p> <p>Elev: 470 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17123.28649311091!2d120.89685703849456!3d5.729282027748533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32448a0580e0aea5%3A0xe8e0c1dd69398e53!2sMount%20Dakut!5e1!3m2!1sen!2sph!4v1599088331123!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.016667, 121.066667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matandang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matandang</p> <p>Elev: 470 m, Prom: 66 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.342188200158!2d121.05791192779473!3d6.0166878698503155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fca59e345d6d%3A0x268cf5d06a430027!2sMount%20Matandang!5e1!3m2!1sen!2sph!4v1599088359552!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.031667, 121.074167], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kagai_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kagai Hill</p> <p>Elev: 464 m, Prom: 100 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.342188200158!2d121.05791192779473!3d6.0166878698503155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fccbe44d0417%3A0x9540ed94b0066a76!2sKagai%20Hill!5e1!3m2!1sen!2sph!4v1599088382481!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.033333, 121.083333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bahu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bahu</p> <p>Elev: 451 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.841590912874!2d121.07457852779507!3d6.033354469004898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e333b950b32b%3A0x5133bb7a3aa66d98!2sMount%20Bahu!5e1!3m2!1sen!2sph!4v1599088406688!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9440028, 121.0751502], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talipao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talipau</p> <p>Elev: 448 m, Prom: 326 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.487277435479!2d121.06707852779333!3d5.94474337347933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fab279cdf543%3A0x380cd6be55102f48!2sMount%20Talipao!5e1!3m2!1sen!2sph!4v1599088429343!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.0, 120.95], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kagay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kagay</p> <p>Elev: 432 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.841408797847!2d120.9412452277944!3d6.0000211706939695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244f9225ea6393d%3A0x91fba94e48a6809a!2sMount%20Kagay!5e1!3m2!1sen!2sph!4v1599088459662!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.9395, 120.9776], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Makam" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Makam</p> <p>Elev: 432 m, Prom: 180 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.643627480427!2d120.96874522779322!3d5.939465573744246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244f75798c79e9b%3A0xa05d22f7c2836e06!2sMount%20Makam!5e1!3m2!1sen!2sph!4v1599088480063!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9833333, 121.2583333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Urot" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Urot</p> <p>Elev: 430 m, Prom: 408 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.438651062628!2d121.25152302779401!3d5.980021171704004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e75fced0623f%3A0xcd4793dd4dbaffc0!2sMount%20Urot!5e1!3m2!1sen!2sph!4v1599088518419!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.0165575, 121.0852322], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Libung_(bukid_sa_Pilipinas,_Mindanawng_Muslim)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Libung</p> <p>Elev: 421 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.342188200158!2d121.07457852779477!3d6.016687869850317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e352417b8a9d%3A0x6227503022c006f6!2sMount%20Libung!5e1!3m2!1sen!2sph!4v1599088552435!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.7360048, 120.9077852], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kaumpang_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kaumpang Peak</p> <p>Elev: 416 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16313.4823569338!2d120.89957852778969!3d5.738910083678464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32448a121147e681%3A0x552bad24ce788417!2sKaumpang%20Peak!5e1!3m2!1sen!2sph!4v1599088577592!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.033056, 121.065278], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tambong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tambong Hill</p> <p>Elev: 416 m, Prom: 79 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.849943200632!2d121.0565230277951!3d6.033076769018983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fcc5d596f8bd%3A0xef56af561fde7250!2sTambong%20Hill!5e1!3m2!1sen!2sph!4v1599088600256!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.8123, 121.1624], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Payao_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Payao</p> <p>Elev: 401 m, Prom: 401 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.37059765698!2d121.15374522779094!3d5.812243380075954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244ec84fde31349%3A0x805c93b93af7a089!2sPayao%20Hill!5e1!3m2!1sen!2sph!4v1599088622719!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.811667, 121.163889], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Parang_Parang_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Parang Parang Hill</p> <p>Elev: 400 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.386694683168!2d121.1551341277909!3d5.811687880103383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244ec8493337c8b%3A0x14da7f85979c63ed!2sParang%20Parang%20Hill!5e1!3m2!1sen!2sph!4v1599088689239!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8135, 121.1638], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palan</p> <p>Elev: 400 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.386694683168!2d121.1551341277909!3d5.811687880103383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244ec8415565d77%3A0xbad5ede12d0ddd5!2sMount%20Palan!5e1!3m2!1sen!2sph!4v1599088713035!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8166667, 121.1583333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pata_Island_(pulo_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pata</p> <p>Elev: 397 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16681.417238765112!2d121.14952864744609!3d5.816672026905313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNDknMDAuMCJOIDEyMcKwMDknMzAuMCJF!5e1!3m2!1sen!2sph!4v1599088785690!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.981111, 121.180833], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dakula" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dakula</p> <p>Elev: 396 m, Prom: 283 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.40552488354!2d121.17207852779403!3d5.98113222164796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e699b90f4f17%3A0xc7dc6e9c94a50c6e!2sMount%20Dakula!5e1!3m2!1sen!2sph!4v1599088824292!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.812, 121.1685], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Langgai" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Langgai</p> <p>Elev: 391 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.378647810627!2d121.15985632779093!3d5.8119655800896695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244ec82f93effb9%3A0x20d53cef47cfd29e!2sMount%20Langgai!5e1!3m2!1sen!2sph!4v1599088845052!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9792, 121.4002], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Parangan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Parangan</p> <p>Elev: 387 m, Prom: 355 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.513166644028!2d121.39318962779396!3d5.977521171830076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244da32e4951b11%3A0x71745840d9e2feca!2sMount%20Parangan!5e1!3m2!1sen!2sph!4v1599088865881!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9083333, 121.3], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sandahan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sandahan</p> <p>Elev: 386 m, Prom: 308 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.611540360645!2d121.29318962779259!3d5.906687825385493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244c2dc10a246d3%3A0x8e9f7a515950d327!2sMount%20Sandahan!5e1!3m2!1sen!2sph!4v1599088893107!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.025, 121.0833333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Guimba</p> <p>Elev: 384 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16320.048105002312!2d121.07457719049188!3d6.025005325478699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDEnMzAuMCJOIDEyMcKwMDUnMDAuMCJF!5e1!3m2!1sen!2sph!4v1599088948388!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.933333, 120.983333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Silangan_(bukid_sa_Pilipinas,_Mindanawng_Muslim)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Silangan</p> <p>Elev: 383 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.824490414105!2d120.97457852779311!3d5.933354474050764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244f752475f9215%3A0x6fd30962241036e9!2sMount%20Silangan!5e1!3m2!1sen!2sph!4v1599089018008!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.025, 121.075], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Sungal</p> <p>Elev: 382 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16329.14644042352!2d121.06624286113853!3d6.025005325679909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDEnMzAuMCJOIDEyMcKwMDQnMzAuMCJF!5e1!3m2!1sen!2sph!4v1599089080736!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8125, 121.168611], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sangkat_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sangkat Hill</p> <p>Elev: 381 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.36254711992!2d121.15985632779093!3d5.8125211800622445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244ec8251410189%3A0x5fbe228b303ebb0d!2sSangkat%20Hill!5e1!3m2!1sen!2sph!4v1599089118426!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.0333333, 121.0666667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matanding" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matanding</p> <p>Elev: 380 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.841590912874!2d121.05791192779505!3d6.033354469004898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fcc5e6ff0dbb%3A0x6d0b6b612f36f76c!2sMount%20Matanding!5e1!3m2!1sen!2sph!4v1599089150976!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.988, 120.9322], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Taran_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Taran Hill</p> <p>Elev: 359 m, Prom: 134 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.19833279059!2d120.92346742779415!3d5.9880767712974885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244f8fa58f5ac9d%3A0xd6154133c330306!2sTaran%20Hill!5e1!3m2!1sen!2sph!4v1599089183702!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.517, 120.7599], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lapak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lapak</p> <p>Elev: 355 m, Prom: 355 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16319.710784352124!2d120.75124522778634!3d5.516965594371013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244788732e7e923%3A0x502cde7ebfa083ca!2sMount%20Lapak!5e1!3m2!1sen!2sph!4v1599089207042!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.9056, 121.3007], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Payda-Bato_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Payda Bato Hill</p> <p>Elev: 350 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.676969254278!2d121.29291192779257!3d5.904465575496516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244c2ddc4322323%3A0x969bb4ca19d7a71c!2sPayda-Bato%20Hill!5e1!3m2!1sen!2sph!4v1599089229864!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.917222, 121.301667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Malpal_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malpal Hill</p> <p>Elev: 341 m, Prom: 76 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1043687.4247987424!2d120.23370968277338!3d5.940398093835506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244c2d15dda8839%3A0xee2755c5bb31a8c0!2sMalpal%20Hill!5e1!3m2!1sen!2sph!4v1599089283594!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.516667, 120.866667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Butbilao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Butbilao</p> <p>Elev: 338 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16319.718424073979!2d120.85791192778635!3d5.516687894384196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32447f918c5fc881%3A0xeb77deab80c419fa!2sMount%20Butbilao!5e1!3m2!1sen!2sph!4v1599089333108!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9848, 121.2689], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bawis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bawis</p> <p>Elev: 333 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.330962968432!2d121.25985632779408!3d5.983632271521824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244ddf1539594ef%3A0x1051e6b836f72d02!2sMount%20Bawis!5e1!3m2!1sen!2sph!4v1599089364164!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.1333333, 121.8333333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bulaan_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bulan</p> <p>Elev: 330 m, Prom: 330 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32603.734179347404!2d121.81674652150447!3d6.131454986123154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325ada4203438c91%3A0xb4ef279a5e2f76e4!2sBulan!5e1!3m2!1sen!2sph!4v1599089554634!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.1341667, 121.8341667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bulaan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulaan</p> <p>Elev: 327 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16301.783541968294!2d121.82541192779722!3d6.134187863851989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325ada429a0250d3%3A0x939e617679b126c6!2sMount%20Bulaan!5e1!3m2!1sen!2sph!4v1599089613151!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9025, 121.2897], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pitogo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pitogo</p> <p>Elev: 325 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.775064387924!2d121.2820785277925!3d5.901132275662989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244c2ebd377cae7%3A0xb96723bb88b035d6!2sMount%20Pitogo!5e1!3m2!1sen!2sph!4v1599089653259!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9835, 121.2733], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bulansi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulansi</p> <p>Elev: 319 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.380674361422!2d121.26596742779404!3d5.981965571605916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244ddedf2145b3f%3A0xa35f4c7ef40c6bbc!2sMount%20Bulansi!5e1!3m2!1sen!2sph!4v1599089676461!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8192, 121.167], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matingka" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matingka</p> <p>Elev: 318 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.169233701998!2d121.15818962779105!3d5.819187879733017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244ec7e20815f11%3A0xffbec29149fd95ee!2sMount%20Matingka!5e1!3m2!1sen!2sph!4v1599089707198!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.026111, 121.423889], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Capual" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Capual</p> <p>Elev: 316 m, Prom: 316 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.05868599571!2d121.41513412779491!3d6.0261322693714545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244d83573f127b1%3A0xac9c93c90dcef51c!2sMount%20Capual!5e1!3m2!1sen!2sph!4v1599089728543!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.985278, 121.173056], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kan_Kaukab" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kan Kaukab</p> <p>Elev: 314 m, Prom: 93 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.281237777128!2d121.16430082779411!3d5.985298971437713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e6a03ac4a791%3A0xe883f22b3d590f81!2sMount%20Kan%20Kaukab!5e1!3m2!1sen!2sph!4v1599089756431!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.043889, 121.166667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Timpoak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Timpoak</p> <p>Elev: 299 m, Prom: 124 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.523829770673!2d121.15791192779531!3d6.0439100684685165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e22b95488ed1%3A0x71aacd6cfe6266bc!2sMount%20Timpoak!5e1!3m2!1sen!2sph!4v1599089784140!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8111111, 121.1794444], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kuta_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kuta Hill</p> <p>Elev: 298 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.402794522139!2d121.17068962779088!3d5.811132230130798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244eb7b03b367ef%3A0xc6dfa896325e6cc0!2sKuta%20Hill!5e1!3m2!1sen!2sph!4v1599089812201!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9333333, 121.1166667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mahala" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mahata</p> <p>Elev: 294 m, Prom: 191 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.783401088813!2d121.10930082779315!3d5.934743373981124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e57dc9fe3a13%3A0x4290f87e9667ec05!2sMount%20Mahala!5e1!3m2!1sen!2sph!4v1599089843924!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8147222, 121.1827778], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Likobu_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Likobu Hill</p> <p>Elev: 291 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.298134817353!2d121.17402302779095!3d5.814743379952532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244eb775e1ebf5b%3A0xb7d2a21958dfe156!2sLikobu%20Hill!5e1!3m2!1sen!2sph!4v1599089863760!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.0055272, 121.0741209], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Bud_Dajo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bud Dajo</p> <p>Elev: 289 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.442153488919!2d121.04791222779467!3d6.013354170019206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fca1d9da77cb%3A0x4549ddbea53efb60!2sBud%20Dajo!5e1!3m2!1sen!2sph!4v1599089927310!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.681036, 120.816136], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tungal" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tungal</p> <p>Elev: 289 m, Prom: 289 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16315.12734658039!2d120.80735632778872!3d5.681132286492476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244636f7a02b707%3A0x44e94220638cd1f6!2sMount%20Tungal!5e1!3m2!1sen!2sph!4v1599090063055!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8996, 121.2906], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mahadya" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mahadya</p> <p>Elev: 288 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.856769637678!2d121.28291192779245!3d5.8983544758016615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244c2eeaf592381%3A0x66cf37b1b983b332!2sMount%20Mahadya!5e1!3m2!1sen!2sph!4v1599090084893!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.716667, 120.9], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Manakayan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Manakayan Peak</p> <p>Elev: 285 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16314.11700768345!2d120.89124522778931!3d5.71668788476331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324489fcc039ecc1%3A0xc80913780b2f2ddb!2sManakayan%20Peak!5e1!3m2!1sen!2sph!4v1599090114894!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9159, 121.2812], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lumping_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lumping Hill</p> <p>Elev: 283 m, Prom: 67 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.38234971894!2d121.27374522779276!3d5.91446557499667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244c2b70ad425ab%3A0xec557efb47c543a1!2sLumping%20Hill!5e1!3m2!1sen!2sph!4v1599090136591!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.9646, 121.2617], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tayungan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tayungan</p> <p>Elev: 278 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.926577091666!2d121.2543008277937!3d5.963632272529755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244dd809b9a4073%3A0x3cb414d3b35ced58!2sMount%20Tayungan!5e1!3m2!1sen!2sph!4v1599090158978!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.0325, 121.416111], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Baya_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Baya Hill</p> <p>Elev: 277 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.866652641802!2d121.40735632779504!3d6.032521169047194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244d84f3905489d%3A0xd3b9be39d6afc8fd!2sBaya%20Hill!5e1!3m2!1sen!2sph!4v1599090188398!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.981389, 121.041389], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pantao_Hill_(bungtod_sa_Pilipinas,_Mindanawng_Muslim)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pantao</p> <p>Elev: 276 m, Prom: 130 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.422087994166!2d121.03291192779402!3d5.9805767216759795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fb045bc79e1b%3A0xd21bf5b6ab123f9e!2sPantao%20Hill!5e1!3m2!1sen!2sph!4v1599090217862!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.5626, 120.7883], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sigangang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sigangang</p> <p>Elev: 275 m, Prom: 237 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16318.452329441065!2d120.779578527787!3d5.562521142202117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32447939144d3edd%3A0xb375e05a43c8924e!2sMount%20Sigangang!5e1!3m2!1sen!2sph!4v1599090244806!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9014075, 121.2839791], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bulak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulak</p> <p>Elev: 270 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.766892637264!2d121.27541192779252!3d5.90141002564912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244c294de0bc7db%3A0xb3737b079af6a97f!2sMount%20Bulak!5e1!3m2!1sen!2sph!4v1599090268388!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.9207, 121.316], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Linghab_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Linghab Hill</p> <p>Elev: 270 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.234853657581!2d121.30846742779286!3d5.91946557474652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244c32d21324e87%3A0xdfa703d9f4d4acff!2sLinghab%20Hill!5e1!3m2!1sen!2sph!4v1599090303892!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.5583333, 120.7916667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sigangang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sigangang</p> <p>Elev: 268 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16318.45232944107!2d120.77957852778702!3d5.562521142202121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32447939144d3edd%3A0xb375e05a43c8924e!2sMount%20Sigangang!5e1!3m2!1sen!2sph!4v1599090359955!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.016667, 121.0188889], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bansaan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bansaan Hill</p> <p>Elev: 266 m, Prom: 118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.342188200158!2d121.01013412779476!3d6.016687869850316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fc76d973c02f%3A0xa91d7b5faae65ad2!2sBansaan%20Hill!5e1!3m2!1sen!2sph!4v1599090392467!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.016667, 121.0166669], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agao</p> <p>Elev: 262 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.342188200158!2d121.01013412779476!3d6.016687869850316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fc76a3fe01b5%3A0x6033048e8e5fb8c4!2sMount%20Agao!5e1!3m2!1sen!2sph!4v1599090419576!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9627, 121.4012], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Baubo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Baubo Hill</p> <p>Elev: 258 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.992634614378!2d121.39374522779364!3d5.961410022641589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244da4d7912f5cd%3A0x13a76f948d728b8b!2sBaubo%20Hill!5e1!3m2!1sen!2sph!4v1599090461999!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.969722, 121.038056], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Put" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pud</p> <p>Elev: 252 m, Prom: 134 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.761326706577!2d121.02930082779379!3d5.969187872250029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244faf946cf526b%3A0x86e9be8247d5b67d!2sMount%20Put!5e1!3m2!1sen!2sph!4v1599090487520!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.687401, 120.815996], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Biubugnan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Biubugnan</p> <p>Elev: 250 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16314.946264260474!2d120.80735632778885!3d5.687521186182366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32446370a4b75053%3A0x2f4cbe8949b02106!2sMount%20Biubugnan!5e1!3m2!1sen!2sph!4v1599090518600!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9214, 121.2926], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lazo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lazo Hill</p> <p>Elev: 246 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.251246602527!2d121.27930082779284!3d5.918910074774307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244c2ca4bdc3f0b%3A0xe4f61fa64a17ae02!2sLazo%20Hill!5e1!3m2!1sen!2sph!4v1599090550075!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.044444, 121.034444], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Awak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Awak</p> <p>Elev: 240 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.50709342181!2d121.02568962779529!3d6.044465518440269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fcff4c2fa3cb%3A0x980ffdb2e8763cfe!2sMount%20Awak!5e1!3m2!1sen!2sph!4v1599090576971!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9725023, 121.1750037], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panamao_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panamao</p> <p>Elev: 239 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.852235473232!2d121.16680082779372!3d5.966132222403902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e680a0f2a2fd%3A0x70d46a8a6c998a15!2sMount%20Panamao!5e1!3m2!1sen!2sph!4v1599090612366!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.075833, 121.039722], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patikul" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patikul</p> <p>Elev: 238 m, Prom: 140 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.558818192221!2d121.03096742779594!3d6.075854466840955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fd70aef1a7d5%3A0x4993fe73b21cf683!2sMount%20Patikul!5e1!3m2!1sen!2sph!4v1599090683781!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.020556, 121.008333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bu-Datu_Hill_(bungtod_sa_Pilipinas,_lat_6,02,_long_121,01)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bu-Datu Hill</p> <p>Elev: 233 m, Prom: 85 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16514.11677047415!2d120.99949228531844!3d6.020561325859862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMDEnMTQuMCJOIDEyMcKwMDAnMzAuMCJF!5e1!3m2!1sen!2sph!4v1599091236461!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.016341, 120.930748], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tubora_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tubora Hill</p> <p>Elev: 231 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.350520499282!2d120.92207852779472!3d6.016410069864393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244f8d285afabd9%3A0xf2faecd83fb79ce4!2sTubora%20Hill!5e1!3m2!1sen!2sph!4v1599091335199!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9326, 121.3106], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mapal_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mapal Hill</p> <p>Elev: 228 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.881999074683!2d121.30291192779309!3d5.931410024148243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244dcd9b167c195%3A0xad8ad6ab1b9a1021!2sMapal%20Hill!5e1!3m2!1sen!2sph!4v1599091363188!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9464, 121.3924], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Likubong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Likubong</p> <p>Elev: 224 m, Prom: 166 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.43787569154!2d121.38374522779336!3d5.94641002339564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244db044161b05d%3A0xed58cc645ad0d03d!2sMount%20Likubong!5e1!3m2!1sen!2sph!4v1599091388058!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.055278, 121.066667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lubo_Hill_(bungtod_sa_Pilipinas,_Mindanawng_Muslim)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lubo Hill</p> <p>Elev: 218 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.180362691191!2d121.0579119277955!3d6.055298967889006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fd2546fc57bb%3A0xfa8a63d44462bcb0!2sLubo%20Hill!5e1!3m2!1sen!2sph!4v1599091410897!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.0151918, 121.016911], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pula_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pula</p> <p>Elev: 216 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.180362691191!2d121.0579119277955!3d6.055298967889006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fc76a3fe01b5%3A0xdad9d3e92c8b5935!2sMount%20Pula!5e1!3m2!1sen!2sph!4v1599091441628!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.983333, 121.0], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kumuray" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kumuray</p> <p>Elev: 215 m, Prom: 101 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.339249655966!2d120.99124522779408!3d5.983354471535845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fbce3a7fd521%3A0x6a7fe869d321643d!2sMount%20Kumuray!5e1!3m2!1sen!2sph!4v1599091467844!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.016347, 121.0150475], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magusing" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magusing</p> <p>Elev: 214 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.342188200164!2d121.00791192779474!3d6.016687869850319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fc76a3fe01b5%3A0xce8cb73babdd4d51!2sMount%20Magusing!5e1!3m2!1sen!2sph!4v1599091506374!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.055833, 121.444167], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bitinan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bitinan</p> <p>Elev: 214 m, Prom: 214 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.163593414423!2d121.43541192779554!3d6.055854467860717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244d801932e0731%3A0x67f03b25f5e47bdb!2sMount%20Bitinan!5e1!3m2!1sen!2sph!4v1599091532576!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.016667, 120.933333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kapuak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kapuak</p> <p>Elev: 213 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.342188200158!2d120.92457852779472!3d6.016687869850316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244f8d31c2e7c57%3A0x8357ebbbcce791b7!2sMount%20Kapuak!5e1!3m2!1sen!2sph!4v1599091553208!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9833331, 121.2499999], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lirut" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lirut</p> <p>Elev: 210 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.339249655963!2d121.24124522779408!3d5.9833544715358435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e7434093bd9f%3A0xb35986ac899879c2!2sMount%20Lirut!5e1!3m2!1sen!2sph!4v1599091575322!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.982778, 121.165], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ugab-Ugab" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ugab-Ugab</p> <p>Elev: 207 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.339249655963!2d121.24124522779408!3d5.9833544715358435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e423d9ee2c7b%3A0x908842caa04d4c51!2sMount%20Ugab-Ugab!5e1!3m2!1sen!2sph!4v1599091600408!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.931, 121.3651], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kausukar" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kausukar</p> <p>Elev: 206 m, Prom: 136 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.939488953092!2d121.35763412779305!3d5.929465574245693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244db44c573b1dd%3A0x788cd174d23f4b65!2sMount%20Kausukar!5e1!3m2!1sen!2sph!4v1599091622552!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.6971, 120.8434], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Allia" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Allia</p> <p>Elev: 204 m, Prom: 115 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16314.670316093836!2d120.83457852778898!3d5.697243385709959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324463ae970b7f51%3A0x536e97be0c643c3d!2sMount%20Allia!5e1!3m2!1sen!2sph!4v1599091646660!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.9595, 121.2508], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kansasali_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kansasali Hill</p> <p>Elev: 191 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.083422354066!2d121.24318962779358!3d5.958354472795311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e7833aa56645%3A0xca0d3cfd70982610!2sKansasali%20Hill!5e1!3m2!1sen!2sph!4v1599091671078!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.961667, 121.2475], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pohukan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pohukan</p> <p>Elev: 184 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.083422354066!2d121.24318962779358!3d5.958354472795311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e79d8bd2333f%3A0x31a88df798d11be7!2sMount%20Pohukan!5e1!3m2!1sen!2sph!4v1599091702235!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.925, 121.3666667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kausukar" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kausakar</p> <p>Elev: 178 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.939488953096!2d121.35763412779305!3d5.929465574245697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244db44c573b1dd%3A0x788cd174d23f4b65!2sMount%20Kausukar!5e1!3m2!1sen!2sph!4v1599091756386!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.55, 120.85], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Minapan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Minapan</p> <p>Elev: 172 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16318.798662853784!2d120.8412452277868!3d5.550021192798567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32447e56270b8a45%3A0x8ce1dfcb7f243128!2sMount%20Minapan!5e1!3m2!1sen!2sph!4v1599091790912!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.97, 120.8946], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pinan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinan Hill</p> <p>Elev: 170 m, Prom: 101 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.736527115878!2d120.88596742779382!3d5.970021172208056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324457d8b6b6973b%3A0x7d923fe638104962!2sPinan%20Hill!5e1!3m2!1sen!2sph!4v1599091813246!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.023611, 121.409444], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sikulay_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sikulay Hill</p> <p>Elev: 167 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.133774164717!2d121.40068962779486!3d6.023632269498272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244d9ad16ca34b1%3A0xe84a1f49251525b6!2sSikulay%20Hill!5e1!3m2!1sen!2sph!4v1599091834165!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.968889, 121.084167], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bayog_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bayug</p> <p>Elev: 165 m, Prom: 38 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.769593462197!2d121.07541192779381!3d5.968910072264023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e52bcf7ac045%3A0x375ce21fe5879318!2sBayog%20Hill!5e1!3m2!1sen!2sph!4v1599091869529!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.263333, 121.613333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bolod" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bolod</p> <p>Elev: 162 m, Prom: 162 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16297.792449608041!2d121.60457852780007!3d6.26335445715594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3245335ba7d61edf%3A0x8d1078bd4ced01b7!2sMount%20Bolod!5e1!3m2!1sen!2sph!4v1599091895342!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.05, 121.033333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bangkal" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bangkal</p> <p>Elev: 161 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16297.792449608041!2d121.60457852780007!3d6.26335445715594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fdaaa032a83d%3A0x88a592e7cdb9f4ff!2sMount%20Bangkal!5e1!3m2!1sen!2sph!4v1599091917700!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.025, 121.3166667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tulayan_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tulayan</p> <p>Elev: 161 m, Prom: 161 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.083719335196!2d121.31263412779491!3d6.025298919413733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244dee49648b627%3A0x8464692f34949f2f!2sTulayan%20Island!5e1!3m2!1sen!2sph!4v1599092012565!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.2512344, 121.5878102], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_West_Bolod" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount West Bolod</p> <p>Elev: 158 m, Prom: 158 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.164994633724!2d121.57902302779978!3d6.251410007779634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3245330b7a3baf3f%3A0xe9a4df4306cb7cc8!2sMount%20West%20Bolod!5e1!3m2!1sen!2sph!4v1599092053235!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.6833333, 120.8333333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lugus,_Sulu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lugus</p> <p>Elev: 154 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65259.95493794373!2d120.80703660571018!3d5.686023404917792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324463058d114aff%3A0x6bd7bb7c53af733b!2sLugus%20Island!5e1!3m2!1sen!2sph!4v1599092179649!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8330556, 121.1530556], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mainao_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mainao Hill</p> <p>Elev: 151 m, Prom: 62 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310.7657898454!2d121.14430082779128!3d5.833076779046217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244ec6945986911%3A0xcafdb06f7ba939ab!2sMainao%20Hill!5e1!3m2!1sen!2sph!4v1599092224628!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.683333, 120.833333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gapas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gapas</p> <p>Elev: 149 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54936.05043715797!2d121.12706990787568!3d5.83010216210227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244630e0fe84195%3A0x7f1d73b03b3d2732!2sMount%20Gapas!5e1!3m2!1sen!2sph!4v1599092268901!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9345407, 121.3558089], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sani" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sani</p> <p>Elev: 149 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.857354383192!2d121.34346742779309!3d5.932243374106469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244dca0cc298d39%3A0x9753b0a37fcb339c!2sMount%20Sani!5e1!3m2!1sen!2sph!4v1599092294284!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.066111, 121.447778], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bud_Bitinan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bud Bitinan</p> <p>Elev: 146 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.853053605782!2d121.43902302779574!3d6.066132267336991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3245280706037371%3A0x5f61f57ec15cadfb!2sMount%20Bud%20Bitinan!5e1!3m2!1sen!2sph!4v1599092320785!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.851667, 121.090556], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patian</p> <p>Elev: 144 m, Prom: 144 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310.22367465754!2d121.08180082779161!3d5.851687828123961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244edfaabeb0fc7%3A0xb60fdf56564ed0ce!2sMount%20Patian!5e1!3m2!1sen!2sph!4v1599092346516!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.966667, 121.033333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kuting" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kuting</p> <p>Elev: 142 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.83570924506!2d121.02457852779375!3d5.966687822375933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fa57e1aa036b%3A0x480fba1cce73635b!2sMount%20Kuting!5e1!3m2!1sen!2sph!4v1599092371143!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.983333, 121.166667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Timahu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Timahu</p> <p>Elev: 140 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.339249655963!2d121.15791192779409!3d5.9833544715358435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e42197f47b67%3A0x9e0a2f84f8cddd08!2sMount%20Timahu!5e1!3m2!1sen!2sph!4v1599092394990!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.016667, 121.0], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kangagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kangagan</p> <p>Elev: 137 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.342188200158!2d120.99124522779475!3d6.0166878698503155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fc088ee20afd%3A0xb770dec670c85dea!2sMount%20Kangagan!5e1!3m2!1sen!2sph!4v1599092419273!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.954444, 121.016111], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matatal" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matatal</p> <p>Elev: 135 m, Prom: 78 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307.22363905183!2d121.00735632779349!3d5.953632273032755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fa6be3aa125f%3A0x4198beefc72967e6!2sMount%20Matatal!5e1!3m2!1sen!2sph!4v1599092466014!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9178, 121.2787], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ukan_(bungtod_sa_Pilipinas,_lat_5,92,_long_121,28)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ukan</p> <p>Elev: 135 m, Prom: 93 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16539.02180587774!2d121.26989818654447!3d5.917805323954624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNTUnMDQuMSJOIDEyMcKwMTYnNDMuMyJF!5e1!3m2!1sen!2sph!4v1599092597448!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.086667, 121.272778], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gunangan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gunangan</p> <p>Elev: 122 m, Prom: 122 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.230400137032!2d121.26402302779616!3d6.0866878662875115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32452019ca598e7b%3A0x853bd9a8a7deaeb1!2sMount%20Gunangan!5e1!3m2!1sen!2sph!4v1599092622255!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.1244, 120.9838], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pangasinan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pangasinan Hill</p> <p>Elev: 113 m, Prom: 113 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302.080596866772!2d120.97513412779695!3d6.124465564351672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32450181bae0d1ff%3A0x509ecd934ac685c3!2sPangasinan%20Hill!5e1!3m2!1sen!2sph!4v1599092674899!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9199, 121.3797], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount igang</p> <p>Elev: 112 m, Prom: 93 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16308.17746037394!2d121.37430082779291!3d5.9214100246491785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244db314df7a429%3A0xa8334e9778c2f57b!2sMount%20Igang!5e1!3m2!1sen!2sph!4v1599092725885!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.963333, 121.206111], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sibalo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sibalo Hill</p> <p>Elev: 111 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.943091914098!2d121.19763412779368!3d5.963076772557715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244e657ec92f273%3A0x18df4a14e0e8d83!2sSibalo%20Hill!5e1!3m2!1sen!2sph!4v1599092798926!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.0876927, 121.2736415], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gujangan_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Gujangan</p> <p>Elev: 110 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.361303353533!2d121.26290552779608!3d6.08237211650808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3245201a5a42a0bd%3A0x2b3ff0330eee003f!2sGujangan%20Island!5e1!3m2!1sen!2sph!4v1599092849022!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.811111, 121.193333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Taming-Taming_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Toming-Toming Hill</p> <p>Elev: 106 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.362547119921!2d121.17541192779095!3d5.812521180062243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244eb70c109ed01%3A0x24c0ec76b5700453!2sTaming-Taming%20Hill!5e1!3m2!1sen!2sph!4v1599092888178!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.688446, 120.876242], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alu</p> <p>Elev: 100 m, Prom: 93 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16314.922632276592!2d120.86735632778887!3d5.688354436141902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244628a672df85b%3A0xaba15654fe85f13f!2sMount%20Alu!5e1!3m2!1sen!2sph!4v1599092917087!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.2051, 120.9637], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bubuan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bubuan Hill</p> <p>Elev: 94 m, Prom: 94 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16299.605136232942!2d120.95485632779872!3d6.20502116019321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3245065e3dd875f3%3A0xaecc80d2a2471dcd!2sBubuan%20Hill!5e1!3m2!1sen!2sph!4v1599092944043!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([5.996111, 121.3925], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baybay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baybay</p> <p>Elev: 90 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.957696670577!2d121.38374522779434!3d5.996132220890569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244d97bb4c12ddf%3A0xc9281544d18643c9!2sMount%20Baybay!5e1!3m2!1sen!2sph!4v1599092966357!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.15, 121.8166667], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bucutua_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bucutua</p> <p>Elev: 90 m, Prom: 90 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16300.821671145077!2d121.80062822779783!3d6.165564112235271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325ad00ab85d2957%3A0x249af52fd557e696!2sBucutua%2C%20Banguingui%2C%20Sulu!5e1!3m2!1sen!2sph!4v1599092992493!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.516667, 120.883333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sipuaoc_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sipuaoc Peak</p> <p>Elev: 89 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16319.718424073979!2d120.87457852778635!3d5.516687894384196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32447fef9dee79c1%3A0x4df0a5cd3db87fe1!2sSipuaoc%20Peak!5e1!3m2!1sen!2sph!4v1599093019908!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.2333333, 121.8333333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tatalan_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tatalan</p> <p>Elev: 85 m, Prom: 85 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16298.856079265082!2d121.82996742779926!3d6.229192208937331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325ac5bc84c1a803%3A0x3d8db0fd370d6ec0!2sTatalan!5e1!3m2!1sen!2sph!4v1599093046246!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9885442, 121.2021812], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Siet_Lake" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Seit Lake Hill</p> <p>Elev: 84 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16235.339014119603!2d121.19341282846004!3d5.988549527001998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwNTknMTguOCJOIDEyMcKwMTInMDcuOSJF!5e1!3m2!1sen!2sph!4v1599093136138!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.048282, 121.515281], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manungut" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manungut</p> <p>Elev: 79 m, Prom: 79 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.423370604758!2d121.50763412779537!3d6.0472433682989895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244d61848b8b1bf%3A0xa415c194b31480af!2sMount%20Manungut!5e1!3m2!1sen!2sph!4v1599093179532!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.077222, 121.266111], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tamoaran" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tamoaran</p> <p>Elev: 75 m, Prom: 69 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.51674580832!2d121.25735632779597!3d6.077243366770042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32452003b0ea78d7%3A0x3b15ea41d98314c0!2sMount%20Tamoaran!5e1!3m2!1sen!2sph!4v1599093209871!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.810833, 121.220278], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kamawi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kamawi</p> <p>Elev: 73 m, Prom: 73 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16311.41084314203!2d121.2115230277909!3d5.810854430144512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244eafc2fae2e7f%3A0xb6b9fa0f2b03f6c0!2sMount%20Kamawi!5e1!3m2!1sen!2sph!4v1599093250505!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.105, 120.9517], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pangas_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pangas Hill</p> <p>Elev: 59 m, Prom: 59 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16302.673292392341!2d120.94291192779654!3d6.105021165349202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324501c8cac94a5d%3A0x40ee9fe9392e1a67!2sPangas%20Hill!5e1!3m2!1sen!2sph!4v1599093286200!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.048889, 121.410556], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kambitoon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kambitoon Hill</p> <p>Elev: 46 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16304.373118820282!2d121.40180082779541!3d6.048910068214199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244d865ede3bf21%3A0x8b861a779cd43af7!2sKambitoon%20Hill!5e1!3m2!1sen!2sph!4v1599093311293!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([6.143, 121.7647], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mamad" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mamad</p> <p>Elev: 43 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16301.537060389443!2d121.75735632779734!3d6.1422433134375245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325ad0fd76f2bc1d%3A0x2618c2c14c867739!2sMount%20Mamad!5e1!3m2!1sen!2sph!4v1599093340488!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.8930556, 121.0608333], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Punungan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Punungan Hill</p> <p>Elev: 36 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16309.011900477195!2d121.05207852779236!3d5.893076776064999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244f1c93d3873bb%3A0x8eb7c08cdac396eb!2sPunungan%20Hill!5e1!3m2!1sen!2sph!4v1599093370827!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.840833, 121.103056], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lumbian_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lumbian Hill</p> <p>Elev: 35 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310.539445083961!2d121.09430082779144!3d5.840854478661069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244edbfefedff73%3A0x2035f09513bc8d0f!2sLumbian%20Hill!5e1!3m2!1sen!2sph!4v1599093409084!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.023988, 120.997263], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bu-Datu_Hill_(bungtod_sa_Pilipinas,_lat_6,02,_long_121,00)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bud Datu</p> <p>Elev: 187  m , Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16305.125431900455!2d120.98846742779486!3d6.023910069484181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244fc1acf3e26ef%3A0xf169e7b0f3727771!2sBu-Datu%20Hill!5e1!3m2!1sen!2sph!4v1599090708308!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.9616667, 121.3961111], { icon: aIcon })
  .addTo(sulumap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tandu_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tandu Hill</p> <p>Elev: 308 m  , Prom: 85 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16306.984378208299!2d121.38735632779365!3d5.96168782262761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3244dbb276d1bd8d%3A0x6b77b3061d858f1b!2sTandu%20Hill!5e1!3m2!1sen!2sph!4v1599093443077!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
