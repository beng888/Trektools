var nuevaecijamap = L.map("nuevaecijamap").setView([15.578375, 121.1112615], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(nuevaecijamap);

L.marker([15.960556, 121.156389], { icon: cIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Olong_Amo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Olong Amo</p> <p>Elev: 1188 m, Prom: 315 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15763.60318426142!2d121.14791192862572!3d15.960853503737711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390e976d7e857c5%3A0x41f9a3225b8afc93!2sMount%20Olong%20Amo!5e1!3m2!1sen!2sph!4v1598125601100!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9333211, 120.933333], { icon: cIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Real" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Real</p> <p>Elev: 1045 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15765.765290547379!2d120.92457852862167!3d15.933353456839928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dfc926dc2c4d%3A0xdc7a5e649864ecf3!2sMount%20Real!5e1!3m2!1sen!2sph!4v1598125645573!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.05, 121.15], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nadumular" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nadumular</p> <p>Elev: 886 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15755.358480051962!2d121.1168008286411!3d16.065297941913727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390ee4aac0114e7%3A0x8102ee6f49c555a6!2sMount%20Nadumular!5e1!3m2!1sen!2sph!4v1598125683303!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.0, 121.116667], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Deugunug" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Deugurug</p> <p>Elev: 863 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15760.298438450587!2d121.1179119286319!3d16.0027979489972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390eed5355405e7%3A0x538fde1846e2fc68!2sMount%20Deugunug!5e1!3m2!1sen!2sph!4v1598125724039!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.873889, 121.066111], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maloyon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maloyon</p> <p>Elev: 829 m, Prom: 533 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.426511197647!2d121.05735632861301!3d15.873909063530041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dcc5a72b411d%3A0x813b861a331656c9!2sMount%20Maloyon!5e1!3m2!1sen!2sph!4v1598125762849!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.455556, 121.261944], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dalumpa_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dalumpa Peak</p> <p>Elev: 815 m, Prom: 250 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15802.812511162545!2d121.25374522855307!3d15.454742460095071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33973627566551ed%3A0x2659600e7d30e5e3!2sDalumpa%20Peak!5e1!3m2!1sen!2sph!4v1598125796870!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.264444, 121.219167], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balintigon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balintingon</p> <p>Elev: 803 m, Prom: 352 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.130263509458!2d121.20902302852683!3d15.265853530729068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33973fb3470d32b7%3A0x39070584eab14650!2sMount%20Balintigon!5e1!3m2!1sen!2sph!4v1598125837157!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9002954, 120.9740925], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount 387</p> <p>Elev: 777 m, Prom:174  m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.087677078248!2d120.97142491487263!3d15.900408448163398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390ddd6974dd869%3A0x16779e8dbed8c3bf!2sMount%20387!5e1!3m2!1sen!2sph!4v1598125890356!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.8816125, 121.0427797], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangalo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangpolo</p> <p>Elev: 776 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.056845491037!2d121.0395785286137!3d15.878631312999365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dcef711ab75d%3A0x954f9abb7bd1658c!2sMount%20Mangalo!5e1!3m2!1sen!2sph!4v1598126005959!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.392222, 121.207222], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baca" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Boca</p> <p>Elev: 747 m, Prom: 229 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15807.44242683232!2d121.19707852854457!3d15.393909116764172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339739cf8235031b%3A0x8bfe3539a837d419!2sMount%20Baca!5e1!3m2!1sen!2sph!4v1598126077912!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.834722, 121.067222], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balukbok" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balukbok</p> <p>Elev: 634 m, Prom: 270 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15773.35827120935!2d121.06930082860755!3d15.8364090677394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390db533d0e423f%3A0xab22e3adc96021de!2sMount%20Balukbok!5e1!3m2!1sen!2sph!4v1598126120322!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9822987, 121.0933463], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pinaglorihan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pangloriahan</p> <p>Elev: 612 m, Prom: 164 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15761.85337180588!2d121.08430082862895!3d15.983075801227505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390e8972343c31b%3A0xdabb0fc21dfe4169!2sMount%20Pinaglorihan!5e1!3m2!1sen!2sph!4v1598126156628!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.868611, 120.970278], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Williams_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Williams</p> <p>Elev: 591 m, Prom: 64 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.904739408492!2d120.96207852861211!3d15.867797964216598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390deb12e905f11%3A0xa47dff333d430134!2sMount%20Williams!5e1!3m2!1sen!2sph!4v1598126207376!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9079562, 121.1626341], { icon: bIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pulong_Mabilog" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pulong Mabilog</p> <p>Elev: 525 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15767.727682573908!2d121.15374522861804!3d15.908353509656136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c206801a9141%3A0x4745b337163b076d!2sMount%20Pulong%20Mabilog!5e1!3m2!1sen!2sph!4v1598126322585!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.75, 121.166667], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dibonag" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dibonag</p> <p>Elev: 470 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15778.899196102537!2d121.18207852859726!3d15.765298025698142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c66b03df4865%3A0xd02e679b7ca290f4!2sMount%20Dibonag!5e1!3m2!1sen!2sph!4v1598126443739!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.866389, 120.988611], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Regal_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Regal</p> <p>Elev: 455 m, Prom: 52 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.752073420234!2d120.98263412861056!3d15.85696456543311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dbff63070ebf%3A0xa7813559f9614f33!2sMount%20Regal!5e1!3m2!1sen!2sph!4v1598126523225!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.85, 121.1], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pantabaron" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pantabaron</p> <p>Elev: 408 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15772.815865895982!2d121.08707852860854!3d15.843353466960535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c35927d931fd%3A0xf6da6beae9261759!2sMount%20Pantabaron!5e1!3m2!1sen!2sph!4v1598126557163!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.778889, 120.733889], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bangcay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bangcay</p> <p>Elev: 393 m, Prom: 307 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.840509023434!2d120.72513412859924!3d15.77890912417716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33912fc9c1516069%3A0xc6a2125c829771a9!2sMount%20Bangcay!5e1!3m2!1sen!2sph!4v1598126617091!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.416667, 121.133333], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Taclandamulac_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Taklang Damulag Hill</p> <p>Elev: 390 m, Prom: 152 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15805.710936574907!2d121.12457852854777!3d15.416686914269711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33973a788cccb0bf%3A0xc2980fb8c6da3f80!2sTaclandamulac%20Hill!5e1!3m2!1sen!2sph!4v1598126715839!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.966667, 121.116667], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anao</p> <p>Elev: 383 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15775.828720347283!2d121.11068962860297!3d15.80474237128733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c4fa1d8feced%3A0x83e7002b8bb82fb2!2sMount%20Anao!5e1!3m2!1sen!2sph!4v1598126829331!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.9328013, 121.0366342], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Carranglan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Carranglan</p> <p>Elev: 369 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15766.616028057222!2d121.01541192862008!3d15.92252015806075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dd9af7fa3d03%3A0x1067ec68b85103d8!2sMount%20Carranglan!5e1!3m2!1sen!2sph!4v1598126872126!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7919444, 121.065], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangeoban" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangeoban</p> <p>Elev: 367 m, Prom: 69 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776.82420052353!2d121.05624522860111!3d15.791964622717213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dac4e019c3bf%3A0xaaed8b3353541118!2sMount%20Mangeoban!5e1!3m2!1sen!2sph!4v1598126919807!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.885, 121.0736111], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mulaven" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mulaven</p> <p>Elev: 360 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15769.556545016527!2d121.06485632861462!3d15.885020162281188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dcd609e75e2f%3A0xfe3c7c9a1b9012b2!2sMount%20Mulaven!5e1!3m2!1sen!2sph!4v1598127017789!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7991903, 121.133297], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aja" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aja</p> <p>Elev: 357 m, Prom: 69 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776.521309834116!2d121.12263412860169!3d15.795853522282133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c45378a29f2d%3A0x9bd23a1016f1a34!2sMount%20Aja!5e1!3m2!1sen!2sph!4v1598127115170!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5102273, 121.1260696], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mapait" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mapait</p> <p>Elev: 354 m, Prom: 160 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.589969760558!2d121.11763412856085!3d15.510020254015481!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339733d320ebcd11%3A0xf8c83fc91f810681!2sMount%20Mapait!5e1!3m2!1sen!2sph!4v1598127242899!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.8947625, 121.1112601], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agsil" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agsil</p> <p>Elev: 348 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15768.751291836434!2d121.10207852861612!3d15.895298011125313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c2ee87458289%3A0xbb2734f15c4f68e2!2sMount%20Agsil!5e1!3m2!1sen!2sph!4v1598127278388!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.8672222, 121.1447222], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kaanducian" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kaanducian</p> <p>Elev: 328 m, Prom: 26 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.948205448387!2d121.135967428612!3d15.867242414278994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c3b6fb081505%3A0xe0a51ae5d5f2d907!2sMount%20Kaanducian!5e1!3m2!1sen!2sph!4v1598127326002!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.8504764, 121.1663117], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mates" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mates</p> <p>Elev: 293 m, Prom: 4 m </p></li></div> 15.8504764, <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15772.294928960446!2d121.15791192860952!3d15.850020216212553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c3e0a1ea5c23%3A0x8ba4668b609cbe0!2sMount%20Mates!5e1!3m2!1sen!2sph!4v1598127538819!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.85, 121.116667], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bonaba" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bonaba</p> <p>Elev: 278 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.860657590547!2d121.1026341286103!3d15.85557576558903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c36db11aee9f%3A0x84314f89bcaab38f!2sMount%20Bonaba!5e1!3m2!1sen!2sph!4v1598127609393!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.783333, 121.083333], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangeoban" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangcolobon</p> <p>Elev: 262 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776.82420052353!2d121.05624522860111!3d15.791964622717213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390dac4e019c3bf%3A0xaaed8b3353541118!2sMount%20Mangeoban!5e1!3m2!1sen!2sph!4v1598127638637!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.264722, 121.145833], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Biscal" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Biscal</p> <p>Elev: 262 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15817.109328735225!2d121.13568962852683!3d15.26613138069888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33973d9470233215%3A0xf4794f16dba566d4!2sMount%20Biscal!5e1!3m2!1sen!2sph!4v1598127684559!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.797448, 120.6640323], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cuyapo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cuyapo</p> <p>Elev: 245 m, Prom: 192 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776.110127090105!2d120.64985632860245!3d15.801131321691523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339130f3bc2e71bf%3A0x816cd4a2bf21caef!2sMount%20Cuyapo!5e1!3m2!1sen!2sph!4v1598127731850!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.5091667, 121.1088889], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dillman" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dillman</p> <p>Elev: 157 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15798.653736596218!2d121.10013412856074!3d15.509186904107274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33973226b998f20d%3A0x198dd17635327549!2sMount%20Dillman!5e1!3m2!1sen!2sph!4v1598127766377!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.75, 121.116667], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anunas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anunas</p> <p>Elev: 153 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15779.482174252566!2d121.09957852859617!3d15.75779802653574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390c5622b4d96c1%3A0xc8d9fdfd00d8a03c!2sMount%20Anunas!5e1!3m2!1sen!2sph!4v1598127925075!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7833333, 120.875], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Limlingan</p> <p>Elev: 118 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15821.182087384346!2d120.86624402944493!3d15.783338440607727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ3JzAwLjAiTiAxMjDCsDUyJzMwLjAiRQ!5e1!3m2!1sen!2sph!4v1598128040314!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.8333333, 120.875], { icon: aIcon })
  .addTo(nuevaecijamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Burgos</p> <p>Elev: 96 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15745.975924099337!2d120.86625068138645!3d15.833338435315898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDUwJzAwLjAiTiAxMjDCsDUyJzMwLjAiRQ!5e1!3m2!1sen!2sph!4v1598128156834!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
