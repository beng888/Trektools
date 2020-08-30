var camarinesnortemap = L.map("camarinesnortemap").setView(
  [14.1390265, 122.7633036],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(camarinesnortemap);

L.marker([13.9166667, 123.0166667], { icon: bIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Culasi_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cone - Culasi Peak</p> <p>Elev: 961 m, Prom: 847 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.38878925571!2d123.00791192835214!3d13.916687121765886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a2016b60b1c973%3A0x39518c4e17b835d8!2sCulasi%20Hills!5e1!3m2!1sen!2sph!4v1598298663985!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.2188889, 122.822222], { icon: bIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagacay_(bukid_sa_Pilipinas,_Bicol,_Province_of_Camarines_Norte)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bacacay</p> <p>Elev: 787 m, Prom: 755 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15893.44540743144!2d122.81457852838916!3d14.217798191256426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3398bb9bbca3b743%3A0x32c81c9459875ad8!2sMount%20Bagacay!5e1!3m2!1sen!2sph!4v1598298704622!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1497973, 122.444918], { icon: bIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cadig" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cadig</p> <p>Elev: 695 m, Prom: 595 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15898.178472287465!2d122.43596742838076!3d14.150298198144192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339886aa47b30201%3A0x3feb8492cf40768a!2sMount%20Cadig!5e1!3m2!1sen!2sph!4v1598298742012!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8942264, 123.088756], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Culasi_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Culasi Peak</p> <p>Elev: 380 m, Prom: 294 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.936104921317!2d123.07985632834949!3d13.894187124023254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1ff51b5c86923%3A0x82235c074c4ce17c!2sCulasi%20Peak!5e1!3m2!1sen!2sph!4v1598298604927!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9794444, 122.9602778], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cone_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cone</p> <p>Elev: 412 m, Prom: 282 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15910.058617188544!2d122.95152302835979!3d13.979464815451065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a20765d3f28b31%3A0x6960cae247aa9c44!2sMount%20Cone!5e1!3m2!1sen!2sph!4v1598298789809!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.4167997, 122.9265779], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>hill top</p> <p>Elev: 156 m, Prom: 156 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.077421153075!2d122.91781916858979!3d14.416810762472457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI1JzAwLjUiTiAxMjLCsDU1JzM1LjciRQ!5e1!3m2!1sen!2sph!4v1598299803379!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.4321101, 122.9347239], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>hill top</p> <p>Elev: 147 m, Prom: 147 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16190.29627050236!2d122.92594582949462!3d14.432115269537437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI1JzU1LjYiTiAxMjLCsDU2JzA1LjAiRQ!5e1!3m2!1sen!2sph!4v1598299955447!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.4561101, 122.9107005], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>hill top</p> <p>Elev: 108 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16201.939324819372!2d122.90187096213948!3d14.456115272945608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI3JzIyLjAiTiAxMjLCsDU0JzM4LjUiRQ!5e1!3m2!1sen!2sph!4v1598300004062!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.3310366, 122.4924688], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Capalonga_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Capalonga Hill</p> <p>Elev: 195 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15888.709899034406!2d122.51791192839755!3d14.285020384369197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33988e1a857fd5f3%3A0x3b9b3b8b360f3519!2sCapalonga%20Hill!5e1!3m2!1sen!2sph!4v1598298877271!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8780831, 123.0850422], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tacubtacuban_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tacubtacuban Hill</p> <p>Elev: 102 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15917.09975095691!2d123.07652302834741!3d13.877242625721204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1f8a5f7e2a585%3A0xb90e6250311affab!2sTacubtacuban%20Hill!5e1!3m2!1sen!2sph!4v1598298914475!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.4315718, 123.0028918], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>hill top</p> <p>Elev: 84 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16061.152159744326!2d122.99410323626452!3d14.431576976874327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI1JzUzLjciTiAxMjPCsDAwJzEwLjQiRQ!5e1!3m2!1sen!2sph!4v1598300163258!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.4681927, 122.9543659], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>hill top</p> <p>Elev: 75 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15954.399298292625!2d122.94559352637644!3d14.468197874685645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI4JzA1LjUiTiAxMjLCsDU3JzE1LjciRQ!5e1!3m2!1sen!2sph!4v1598300190288!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.4785752, 122.8319658], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>hill top</p> <p>Elev: 83 m, Prom: 73 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15962.540864877736!2d122.82318725360379!3d14.478580375169392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI4JzQyLjkiTiAxMjLCsDQ5JzU1LjEiRQ!5e1!3m2!1sen!2sph!4v1598300208736!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.4497276, 122.9697381], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Hill top</p> <p>Elev: 58 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15995.233627715077!2d122.96095094816296!3d14.449732775036745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI2JzU5LjAiTiAxMjLCsDU4JzExLjEiRQ!5e1!3m2!1sen!2sph!4v1598300229844!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.020556, 122.825], { icon: bIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pulantuna" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pulantuna</p> <p>Elev: 681 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.55914731483!2d122.83541192836421!3d14.015576011807646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3398a77071a3fdbb%3A0x5f37156477fd1aa9!2sMount%20Pulantuna!5e1!3m2!1sen!2sph!4v1598298948883!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.183056, 122.436944], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Flat_Top_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Flat Top</p> <p>Elev: 407 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15895.824437159297!2d122.41680082838492!3d14.183909294717981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3398868ceab3606f%3A0x7f1c318da8643d5e!2sFlat%20Top!5e1!3m2!1sen!2sph!4v1598299001261!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.2758333, 122.6466667], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taysan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taysan</p> <p>Elev: 44 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15889.356940749558!2d122.63791192839639!3d14.275853685309997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339896a11af149ab%3A0xcd0e4be8d3ee1d52!2sMount%20Taysan!5e1!3m2!1sen!2sph!4v1598299077964!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1741667, 122.5566667], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bulauan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulauan</p> <p>Elev: 152 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15896.505920919737!2d122.5479119283837!3d14.174187045709747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33989adef36846db%3A0xf4f018cbb0bc4c02!2sMount%20Bulauan!5e1!3m2!1sen!2sph!4v1598299115797!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.266667, 122.433333], { icon: aIcon })
  .addTo(camarinesnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alayao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alayao</p> <p>Elev: 58 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15890.003568700822!2d122.42457852839524!3d14.26668708625028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339888d99776d3cf%3A0xb18f50ce68bfcd29!2sMount%20Alayao!5e1!3m2!1sen!2sph!4v1598299161481!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
