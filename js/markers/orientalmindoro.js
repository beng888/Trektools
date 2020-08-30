var orientalmindoromap = L.map("orientalmindoromap").setView(
  [13.0564598, 121.4069417],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(orientalmindoromap);

L.marker([13.2623844, 120.9955933], { icon: fIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Halcon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Halcon</p> <p>Elev: 2616 m, Prom: 2616 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.373000472417!2d120.9862452282758!3d13.262520536123558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bc8c9682cea6b5%3A0x29e81a03c973cf3e!2sMount%20Halcon!5e1!3m2!1sen!2sph!4v1598364937586!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.816667, 121.3], { icon: dIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Merril" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Merril</p> <p>Elev: 1570 m, Prom: 581 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15987.157844409734!2d121.29124522822686!3d12.816687278470411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb5db129a9b6c1%3A0x9b1028f94110db90!2sMount%20Merril!5e1!3m2!1sen!2sph!4v1598364963403!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4534545, 120.9001431], { icon: cIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malasimbo_(bukid_sa_Pilipinas,_Mimaropa)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malasimbo</p> <p>Elev: 1206 m, Prom: 161 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15946.883991582341!2d120.88707852829556!3d13.436409369273784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bcf7d7e01e5b0b%3A0x6ec3e5c13b999292!2sMount%20Malasimbo!5e1!3m2!1sen!2sph!4v1598365024854!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.333333, 120.9], { icon: cIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balatic" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balatic</p> <p>Elev: 1199 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.425347963042!2d120.88763412828258!3d13.322520480330683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bcf55f837a0e03%3A0xf54ce94943f01fc!2sMount%20Balatic!5e1!3m2!1sen!2sph!4v1598365050505!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4642047, 120.8909824], { icon: cIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talipanan_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talipanan</p> <p>Elev: 1162 m, Prom: 118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15946.883991582343!2d120.88707852829558!3d13.436409369273788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bcf7d7e01e5b0b%3A0x6ec3e5c13b999292!2sMount%20Malasimbo!5e1!3m2!1sen!2sph!4v1598365117470!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.783333, 121.333333], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mearns" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mearns</p> <p>Elev: 999 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15989.271119155768!2d121.32457852822331!3d12.783353831587092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb5c936da2d76d%3A0x4fe15b047f6cf13e!2sMount%20Mearns!5e1!3m2!1sen!2sph!4v1598365164159!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.4655206, 120.9204194], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alinyaban" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alinyaban</p> <p>Elev: 918 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15944.96104217246!2d120.91263412829889!3d13.46529826645637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bcf8207c3d12a9%3A0x4d1a16234c085627!2sMount%20Alinyaban!5e1!3m2!1sen!2sph!4v1598365190978!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.470278, 121.345], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Na-apug</p> <p>Elev: 898 m, Prom: 554 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16235.299088668118!2d121.33623212334456!3d12.470283218081716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI4JzEzLjAiTiAxMjHCsDIwJzQyLjAiRQ!5e1!3m2!1sen!2sph!4v1598365283218!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.45, 121.366667], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Yagaw</p> <p>Elev: 829 m, Prom: 156 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16195.005072608526!2d121.35784375906368!3d12.450005219221786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDI3JzAwLjAiTiAxMjHCsDIyJzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598365351260!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.933333, 121.266667], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Worcester_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Worcester</p> <p>Elev: 804 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15979.718808639005!2d121.25791192823944!3d12.933353817507866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bca00161dd0c53%3A0xb83ed9c91af0436a!2sMount%20Worcester!5e1!3m2!1sen!2sph!4v1598365410620!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.816667, 121.266667], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Hitchings" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Hitchings</p> <p>Elev: 788 m, Prom: 56 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15987.157844409734!2d121.25791192822685!3d12.816687278470413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb5d889ec0eb9b%3A0xf190cda9e6e2130!2sMount%20Hitchings!5e1!3m2!1sen!2sph!4v1598365480348!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.8, 121.25], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Vraidex" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Vraidex</p> <p>Elev: 750 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15987.157844409736!2d121.2579119282268!3d12.816687278470422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb679ac3a4226b%3A0xc26f6749d8eebb8f!2sMount%20Vraidex!5e1!3m2!1sen!2sph!4v1598365507393!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.883333, 121.3], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Fitzhugh_Lee" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Fitzhugh Lee</p> <p>Elev: 715 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15982.915081444495!2d121.291245228234!3d12.883353872216421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb5facd5004941%3A0xc37a630d8717f5de!2sMount%20Fitzhugh%20Lee!5e1!3m2!1sen!2sph!4v1598365535436!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.114722, 121.519722], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dumali" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dumali</p> <p>Elev: 670 m, Prom: 661 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15968.436025885718!2d121.51152302825858!3d13.108353800905986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bcb16e04176c4d%3A0x15ab3d54e1f6bffd!2sMount%20Dumali!5e1!3m2!1sen!2sph!4v1598365562801!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.1043333, 121.5125], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dumali" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dumali</p> <p>Elev: 756 m, Prom: 661 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15968.436025885718!2d121.51152302825858!3d13.108353800905986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bcb16e04176c4d%3A0x15ab3d54e1f6bffd!2sMount%20Dumali!5e1!3m2!1sen!2sph!4v1598365562801!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.397778, 121.258611], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Panangiran_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Panangiran Peak</p> <p>Elev: 668 m, Prom: 355 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16013.269881833754!2d121.24902302818325!3d12.398631667059824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb188125239027%3A0x8b75cb57bc885daa!2sPanangiran%20Peak!5e1!3m2!1sen!2sph!4v1598365597691!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.4355556, 121.3780556], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pina_(bukid_sa_Pilipinas,_Mimaropa)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pina</p> <p>Elev: 619 m, Prom: 106 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16010.996620711936!2d121.36930082818701!3d12.43557621369329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb3b37c23ac015%3A0xd5d6c044196d45ea!2sMount%20Pina!5e1!3m2!1sen!2sph!4v1598365707241!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.933333, 121.283333], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mac_Gregor" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mac Gregor</p> <p>Elev: 532 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15979.718808639002!2d121.27457852823942!3d12.933353817507857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bca00cfb457f2b%3A0xc48607abae9fe793!2sMount%20Mac%20Gregor!5e1!3m2!1sen!2sph!4v1598365760810!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> '
  );
L.marker([12.816667, 121.366667], { icon: bIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Porter_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Porter</p> <p>Elev: 505 m, Prom: 163 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15987.157844409734!2d121.35791192822684!3d12.816687278470413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb5bed90b55c75%3A0xae83f64cbf4f7941!2sMount%20Porter!5e1!3m2!1sen!2sph!4v1598365792377!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.766667, 121.35], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Rice_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Rice</p> <p>Elev: 490 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15990.325719234306!2d121.34124522822151!3d12.766687233142843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb5ca642c2832b%3A0xa24d593c672a08ec!2sMount%20Rice!5e1!3m2!1sen!2sph!4v1598365828607!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.433333, 121.383333], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agong</p> <p>Elev: 462 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16009.9517761096!2d121.36263412818876!3d12.452520612146413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb3b6bfd9e8cab%3A0x5c7f3a083af86bbb!2sMount%20Agong!5e1!3m2!1sen!2sph!4v1598365868517!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.2066667, 121.4166667], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naujan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Naujan</p> <p>Elev: 403 m, Prom: 385 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.66589104442!2d121.40792329788016!3d13.206671902510127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDEyJzI0LjAiTiAxMjHCsDI1JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598365918418!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.983333, 121.283333], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Beyer" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Beyer</p> <p>Elev: 400 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15976.510363395571!2d121.27457852824486!3d12.983353812783816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bca1c0e7f0a8b3%3A0x1af94cbc392679b4!2sMount%20Beyer!5e1!3m2!1sen!2sph!4v1598366087030!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.75, 121.316667], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Van_Schaik" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Van Schaik</p> <p>Elev: 370 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15991.378972602888!2d121.30791192821974!3d12.750020534696873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb432f747c83ef%3A0x688aaa697d8c76e6!2sMount%20Van%20Schaik!5e1!3m2!1sen!2sph!4v1598366119991!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.733333, 121.333333], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Davidson_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Davidson</p> <p>Elev: 352 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15992.43087284071!2d121.32457852821798!3d12.733353836249183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb436b106afe39%3A0x7400e1d7023d89b6!2sMount%20Davidson!5e1!3m2!1sen!2sph!4v1598366162693!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.25, 121.35], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naujan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naujan</p> <p>Elev: 310 m, Prom: 210 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.865230326992!2d121.34680082827497!3d13.255020486846112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bcc74d20229d9f%3A0x822d45f19d68cff0!2sMount%20Naujan!5e1!3m2!1sen!2sph!4v1598366002794!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.365278, 121.431389], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Namalayan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Namalayan</p> <p>Elev: 274 m, Prom: 203 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16015.298199633016!2d121.42235632817989!3d12.365576170064791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb259174f9f8ab%3A0x74eb504aaa4268e2!2sMount%20Namalayan!5e1!3m2!1sen!2sph!4v1598366251720!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.783333, 121.35], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Chestledon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Chestledon</p> <p>Elev: 251 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15989.271119155768!2d121.34124522822327!3d12.783353831587096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb5c9ced125761%3A0x5c44e4bcc9546f2d!2sMount%20Chestledon!5e1!3m2!1sen!2sph!4v1598366278736!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.266667, 121.316667], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dome_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dome Hill</p> <p>Elev: 234 m, Prom: 128 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.062944494808!2d121.31235632827634!3d13.267242685668455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bcc092b5ad086d%3A0x430af968e5f61701!2sDome%20Hill!5e1!3m2!1sen!2sph!4v1598366313151!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.333333, 121.366667], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caratao_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caratao Hill</p> <p>Elev: 107 m, Prom: 81 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16016.879648430737!2d121.3545785281773!3d12.339742822408489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb26afafbb2b5f%3A0x868c415c32da729!2sCaratao%20Hill!5e1!3m2!1sen!2sph!4v1598366348410!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.35, 121.366667], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Colon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Calon Hill</p> <p>Elev: 101 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16016.607802949158!2d121.35930082817772!3d12.344187272005566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb26a650c57d61%3A0x4138fe54cb7c59cd!2sColon%20Hill!5e1!3m2!1sen!2sph!4v1598366379095!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.3166653, 121.3665841], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nabgas_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nagbas Hill</p> <p>Elev: 80 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16018.28829801091!2d121.35791192817496!3d12.316687274496662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb26dab134c0ab%3A0xd77c0448ec6cb0d3!2sNabgas%20Hill!5e1!3m2!1sen!2sph!4v1598366443908!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>  '
  );
L.marker([12.3166703, 121.366662], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Eplog_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Eplog Hill</p> <p>Elev: 74 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16018.28829801091!2d121.35791192817496!3d12.316687274496662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bb26c24c380677%3A0x772a863d3c34b340!2sEplog%20Hill!5e1!3m2!1sen!2sph!4v1598366470712!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.233333, 121.316667], { icon: aIcon })
  .addTo(orientalmindoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Franks_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Franks</p> <p>Elev: 10 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15960.285681029882!2d121.30791192827252!3d13.233353838931512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bcbf71740dae1b%3A0xd42ca50242a7ae03!2sMount%20Franks!5e1!3m2!1sen!2sph!4v1598366496700!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>  '
  );
