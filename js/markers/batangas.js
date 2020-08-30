var batangasmap = L.map("batangasmap").setView([13.9450336, 121.1312012], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(batangasmap);

L.marker([13.9632491, 121.2397184], { icon: cIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malepunyo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malepunyo</p> <p>Elev: 1001 m, Prom: 783 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63645.693239979366!2d121.21537626504514!3d13.959716491795529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6a883db20f3d%3A0xdc0ec5b8f86c56eb!2sMount%20Malepunyo!5e1!3m2!1sen!2sph!4v1598210517612!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6492484, 121.2910393], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lobo_(bukid_sa_Pilipinas,_Calabarzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lobo</p> <p>Elev: 988 m, Prom: 855 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.712696490864!2d121.28460322832015!3d13.647906148528246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd21920318df19%3A0xa8f4c0d9f0006ac5!2sMount%20Lobo!5e1!3m2!1sen!2sph!4v1598210715667!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6975578, 121.1652708], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banoy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banoy</p> <p>Elev: 965 m, Prom: 796 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929.394394479383!2d121.15624522832591!3d13.696964843676708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd1be74a3ad153%3A0x8e8ac43326be50a6!2sMount%20Banoy!5e1!3m2!1sen!2sph!4v1598210794295!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9208682, 121.0516961], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Macolod" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maculot</p> <p>Elev: 948 m, Prom: 600 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.121569938412!2d121.04291192835265!3d13.920576021375426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0d3e1113c2ed%3A0x738e11b2fa235858!2sMount%20Macolod!5e1!3m2!1sen!2sph!4v1598210953081!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9580614, 121.2362178], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bahaykalo</p> <p>Elev: 878 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15911.53720016237!2d121.22746306742293!3d13.958066596240757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU3JzI5LjAiTiAxMjHCsDE0JzEwLjQiRQ!5e1!3m2!1sen!2sph!4v1598211117906!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9513419, 121.236871], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ditanan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ditanan Hill</p> <p>Elev: 826 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15911.996609469283!2d121.22791192835638!3d13.95140931827617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6af45eda9b55%3A0x476b02a41fa7796a!2sDitanan%20Hill!5e1!3m2!1sen!2sph!4v1598211177644!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0399434, 120.8023782], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Batulao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Batulao</p> <p>Elev: 799 m, Prom: 648 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.012159218171!2d120.79732022836691!3d14.03788730955256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9eb53e3c3949%3A0x45eae461bc85fab6!2sMount%20Batulao%20Peak!5e1!3m2!1sen!2sph!4v1598213348604!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9771495, 121.2327224], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Malepunyo_Mountain_Range" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bagwis</p> <p>Elev: 795 m, Prom: 131 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16702.886906658445!2d121.22382388713442!3d13.977154680896291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDU4JzM3LjciTiAxMjHCsDEzJzU3LjgiRQ!5e1!3m2!1sen!2sph!4v1598213539614!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6533923, 121.1053425], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pinamucan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pinamucan</p> <p>Elev: 795 m, Prom: 499 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.340205331742!2d121.09658172832079!3d13.653414847984218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd1ce64cf62f03%3A0xf1656d53377da297!2sMount%20Pinamucan!5e1!3m2!1sen!2sph!4v1598213567664!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9877778, 121.2383333], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mataas_na_Bundoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mataas na Bundoc</p> <p>Elev: 730 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15909.482374157798!2d121.22957852836082!3d13.987798214610985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6a228cac1bd7%3A0xeee969fbfd2ed902!2sMount%20Mataas%20na%20Bundoc!5e1!3m2!1sen!2sph!4v1598213648772!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6991796, 121.1887934], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Liguayen" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Liguayen</p> <p>Elev: 716 m, Prom: 118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15929.242386193018!2d121.18003332832616!3d13.699201143455202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd196be51baa11%3A0xc163ee575a90584c!2sMount%20Liguayen!5e1!3m2!1sen!2sph!4v1598213710014!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.2142864, 120.6464909], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pico_de_Loro_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pico de Loro</p> <p>Elev: 661 m, Prom: 473 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15893.720468132053!2d120.63743582838866!3d14.213884041656593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd8eed80b78615%3A0xaf5b4790634b87ba!2sMount%20Pico%20De%20Loro!5e1!3m2!1sen!2sph!4v1598213742333!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1052439, 120.7541389], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apayang</p> <p>Elev: 658 m, Prom: 338 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.3344164921477!2d120.75187381485767!3d14.10506769280903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9a558e7c6e3b%3A0x9fe6b5b250d5b023!2sMount%20Apayang!5e1!3m2!1sen!2sph!4v1598213786370!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0491353, 120.7908352], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Toong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Toong</p> <p>Elev: 655 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16490.623462254975!2d120.78196631633065!3d14.049140476819147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDAyJzU2LjkiTiAxMjDCsDQ3JzI3LjAiRQ!5e1!3m2!1sen!2sph!4v1598213882814!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6452486, 121.1127795], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pulot Itaas</p> <p>Elev: 654 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16815.08838223076!2d121.10375665488465!3d13.64525378422923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM4JzQyLjkiTiAxMjHCsDA2JzQ2LjAiRQ!5e1!3m2!1sen!2sph!4v1598213978175!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1078115, 120.7599079], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talamitam" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talamitam</p> <p>Elev: 654 m, Prom: 85 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15901.14723038902!2d120.7509674283755!3d14.107798202466572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9b01b6c4345b%3A0x7c8c6a78f9e89dfb!2sMount%20Talamitam!5e1!3m2!1sen!2sph!4v1598214140174!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6291976, 121.2912377], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Monna\'s Peak </p> <p>Elev: 645 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16775.96849563584!2d121.28231723766046!3d13.629202794624206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzQ1LjEiTiAxMjHCsDE3JzI4LjUiRQ!5e1!3m2!1sen!2sph!4v1598214251084!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1166688, 120.7666646], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Cariliao</p> <p>Elev: 580 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15900.52919999561!2d120.75839012837662!3d14.116656101566608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9b1a57d54539%3A0xa6b9e8056fc52ca9!2sMount%20Cariliao!5e1!3m2!1sen!2sph!4v1598214301538!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1985951, 120.6860724], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Marami" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Marami</p> <p>Elev: 574 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17009.619351007834!2d120.67697238985149!3d14.198872775668784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd8f0a61716afb%3A0x799d3ed9572df727!2sMount%20Marami!5e1!3m2!1sen!2sph!4v1598214446070!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6756234, 121.1611788], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Tibig Peak</p> <p>Elev: 552 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.862628288596!2d121.15157242832335!3d13.675272445823754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd1c0631da3e39%3A0xd662b3a2874f12bb!2sMount%20Tibig!5e1!3m2!1sen!2sph!4v1598214502751!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.116667, 120.766667], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cairilao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cairilao</p> <p>Elev: 513 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15900.52703640678!2d120.75791192837661!3d14.116687101563455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9b1afff19109%3A0xb6c1ff5b49dbf25a!2sMount%20Cairilao!5e1!3m2!1sen!2sph!4v1598214600030!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9288889, 121.0733333], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bukel_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bukel Hill</p> <p>Elev: 513 m, Prom: 52 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15913.547244958558!2d121.06457852835365!3d13.928909320538349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0d50d3f70849%3A0x6ab59521bb26a16d!2sBukel%20Hill!5e1!3m2!1sen!2sph!4v1598214627111!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.7233176, 120.8990852], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gulugod Baboy</p> <p>Elev: 501 m, Prom: 52 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.909000049526!2d120.89603421485472!3d13.722884801660122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd077271fe6b3f%3A0xc513fbe478f1d397!2sMount%20Gulugod%20Baboy%20Summit!5e1!3m2!1sen!2sph!4v1598214727045!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9397222, 121.2283333], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Guyo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Guyo Hill</p> <p>Elev: 489 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15912.800726254514!2d121.21957852835494!3d13.939742619449548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6ae8a0a510c5%3A0xc48127ca41270989!2sGuyo%20Hill!5e1!3m2!1sen!2sph!4v1598214902343!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8964339, 121.0761031], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bigain_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bigain Hill</p> <p>Elev: 465 m, Prom: 118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.745216440297!2d121.0673563283498!3d13.896964823744748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0d7f0c0dae39%3A0xba16cd1125babdad!2sBigain%20Hill!5e1!3m2!1sen!2sph!4v1598214995436!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.2060729, 120.6664961], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dos_Picos" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dos Picos</p> <p>Elev: 456 m, Prom: 79 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15892.644648608142!2d120.66068962839056!3d14.229187090091536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd8f2650496fe9%3A0xbee9866054247bc0!2sDos%20Picos!5e1!3m2!1sen!2sph!4v1598215052007!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6421432, 120.9132758], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Casapao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Casapao</p> <p>Elev: 451 m, Prom: 451 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15933.038302019131!2d120.90680082831958!3d13.643076049005108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd0016fea826b3%3A0xa74c3a17a6c0d2e7!2sMount%20Casapao!5e1!3m2!1sen!2sph!4v1598215083175!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.1376037, 120.6510593], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cayluya" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cayluya</p> <p>Elev: 437 m, Prom: 355 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15899.052544544555!2d120.6448563283792!3d14.137798199416627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd91b832d5c71b%3A0x98bc4a7ae534ea2a!2sMount%20Cayluya!5e1!3m2!1sen!2sph!4v1598215123190!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.684942, 121.2083526], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Carlo</p> <p>Elev: 0 m, Prom: 0 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15930.205636011908!2d121.19958662832445!3d13.68498024486327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd192457eae427%3A0x8af6f5240cea77d4!2sMount%20Carlo!5e1!3m2!1sen!2sph!4v1598215290472!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6356838, 121.2619495], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Sombrero Peak</p> <p>Elev: 409 m, Prom: 67 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16930.847374916942!2d121.25302559908731!3d13.635688988887356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM4JzA4LjUiTiAxMjHCsDE1JzQzLjAiRQ!5e1!3m2!1sen!2sph!4v1598215489990!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.2051291, 120.6066443], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naligang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naligang</p> <p>Elev: 400 m, Prom: 275 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15894.147994291683!2d120.60124522838788!3d14.20779819227861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd8dd2c797763d%3A0xb8fe84e1ce3e2863!2sMount%20Naligang!5e1!3m2!1sen!2sph!4v1598215514492!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0777995, 121.2140529], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Olila" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Olilia</p> <p>Elev: 384 m, Prom: 152 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15903.234097476254!2d121.20522732837182!3d14.077847905505932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd68811fd80cd7%3A0x2bce40d4fc0c18d0!2sMount%20Olilia!5e1!3m2!1sen!2sph!4v1598215546565!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8023622, 120.9327386], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Babuy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Babuy</p> <p>Elev: 376 m, Prom: 198 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15922.385275238561!2d120.90791192833815!3d13.80002043343697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd080c9aafa863%3A0x5a6ab08189e2cacd!2sMount%20Babuy!5e1!3m2!1sen!2sph!4v1598215616943!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0963889, 120.7780556], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aiming" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aiming</p> <p>Elev: 366 m, Prom: 73 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15901.941294394735!2d120.7693008283741!3d14.096409303622977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9ba3d2a85df3%3A0x5f49b9f0a5cf6dd0!2sMount%20Aiming!5e1!3m2!1sen!2sph!4v1598215659481!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.925, 120.684722], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Masawa_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masawa</p> <p>Elev: 358 m, Prom: 292 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15913.776826978212!2d120.67541192835324!3d13.925576020873226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdbc94131f70b5%3A0x64d8ff7e3d4519d0!2sMasawa!5e1!3m2!1sen!2sph!4v1598215717695!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.5666667, 121.0833333], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Verde_Island_(pulo_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Verde</p> <p>Elev: 358 m, Prom: 358 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15770.017220566102!2d121.06187530771699!3d13.550088229242538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bcfcc8fdc9db5d%3A0xc0c05dd5deed660a!2sVerde%20Island!5e1!3m2!1sen!2sph!4v1598215812786!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.2140592, 120.6596238], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palay_Palay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Palay-palay</p> <p>Elev: 347 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15893.601578123404!2d120.64430082838888!3d14.21557599148364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd8eef0ad4f2c7%3A0xd79ceb87ee377291!2sMount%20Palay%20Palay!5e1!3m2!1sen!2sph!4v1598215924016!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8192821, 120.9570287], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Durungao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Durungao</p> <p>Elev: 347 m, Prom: 76 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15921.246959238295!2d120.94124522834016!3d13.816687131774803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd08f10b59a6df%3A0x674890b8010a3a42!2sMount%20Durungao!5e1!3m2!1sen!2sph!4v1598216023989!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9093005, 121.1781004], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lipa_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lipa Hill</p> <p>Elev: 341 m, Prom: 71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.38878925571!2d121.17457852835217!3d13.916687121765886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd14b21b6da92f%3A0x6813988021e1131b!2sLipa%20Hill!5e1!3m2!1sen!2sph!4v1598216058742!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9580201, 121.1990162], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Malaraya_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malarayat Hill</p> <p>Elev: 326 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15910.26981644275!2d121.21235632835943!3d13.976409315758987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd6a4a400ee1e7%3A0xb24abd26e816e3b!2sMalaraya%20Hill!5e1!3m2!1sen!2sph!4v1598216279949!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9, 121.083333], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/San_Jose_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>San Jose Hill</p> <p>Elev: 316 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.535186969595!2d121.07457852835019!3d13.900020423438315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd1283dc7c209f%3A0xdb7624b2ed7502f8!2sSan%20Jose%20Hill!5e1!3m2!1sen!2sph!4v1598216323609!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.6539065, 120.8607449], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magasauangbato" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magasauangbato</p> <p>Elev: 302 m, Prom: 247 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.288037250182!2d120.85291192832086!3d13.654187147907937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdaac335cb702f%3A0x3e87303a059d7fe1!2sMount%20Magasauangbato!5e1!3m2!1sen!2sph!4v1598216375224!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0045347, 120.9906702], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Volcano_Island_(pulo_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Taal Volcano</p> <p>Elev: 296 m, Prom: 288 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.097024953271!2d120.975134128365!3d14.022242561134156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd74062529295f%3A0xde8253347359a651!2sVolcano%20Island!5e1!3m2!1sen!2sph!4v1598216406225!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9923254, 120.6388272], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maburgos" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mapurgas</p> <p>Elev: 284 m, Prom: 214 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15909.174912462584!2d120.6298563283614!3d13.992242614162771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdbdf3f3416659%3A0x6d999af58ebabdf2!2sMount%20Maburgos!5e1!3m2!1sen!2sph!4v1598216467440!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.7502778, 121.22], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bacol_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bacol Hill</p> <p>Elev: 272 m, Prom: 93 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.773237301219!2d121.21124522833223!3d13.750298238385604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd182a596ea017%3A0x1450c72a82cfaa4a!2sBacol%20Hill!5e1!3m2!1sen!2sph!4v1598216556128!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0364813, 120.971206], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balantoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balantoc</p> <p>Elev: 256 m, Prom: 229 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.519322925872!2d120.96943981485701!3d14.036942194403506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd76a6c33d4045%3A0xac064358d02d9483!2sMount%20Balantoc!5e1!3m2!1sen!2sph!4v1598216609156!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.902222, 120.689167], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pintong_Itim" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pintong Itim</p> <p>Elev: 254 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.675516653311!2d120.68291192835166!3d13.91252042218415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdbca18307aa8f%3A0xba1added92bce903!2sMount%20Pintong%20Itim!5e1!3m2!1sen!2sph!4v1598216652328!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.017805, 121.0037026], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pinagulbuan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pinagulbuan</p> <p>Elev: 246 m, Prom: 128 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.876980384832!2d120.998209114857!3d14.016315144885075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd73ee366634ff%3A0x43bf69cd47f7c7d8!2sMount%20Pinagulbuan!5e1!3m2!1sen!2sph!4v1598216775565!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.016667, 120.683333], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Miyauan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Miyauan</p> <p>Elev: 242 m, Prom: 163 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.923667045721!2d120.67846742836532!3d14.024742610881518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd97a25f2a65c5%3A0x1b528b055fd86172!2sMount%20Miyauan!5e1!3m2!1sen!2sph!4v1598216865219!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.8484346, 121.207121], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tombol_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tambol Hill</p> <p>Elev: 232 m, Prom: 76 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.042400942124!2d121.19791192834401!3d13.84890932855643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd14308af6a15b%3A0xd05667d198e9cd70!2sTombol%20Hill!5e1!3m2!1sen!2sph!4v1598216892136!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0219444, 120.6288889], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tauag" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tauag</p> <p>Elev: 218 m, Prom: 162 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15907.11628276235!2d120.62013412836497!3d14.02196481116223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd9672fc6a09ab%3A0xfb4d4548d4f22798!2sMount%20Tauag!5e1!3m2!1sen!2sph!4v1598216918099!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0364114, 120.9737894], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Binintiang Malaki</p> <p>Elev: 213 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15956.065293633308!2d120.96320105791726!3d14.037581471438763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd76a69512500f%3A0x5867a205b76193c5!2sBinintiang%20Malaki!5e1!3m2!1sen!2sph!4v1598217001226!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9793775, 120.6392776], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tigbalang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tikbalang</p> <p>Elev: 212 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15910.039416583784!2d120.6301341283598!3d13.979742565423075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdbdebb4dc046d%3A0xbf89d48c4c14accd!2sMount%20Tigbalang!5e1!3m2!1sen!2sph!4v1598217111797!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.950542, 120.6527326], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nasugbu" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nasugbu</p> <p>Elev: 196 m, Prom: 106 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15910.250616495347!2d120.62707852835952!3d13.976687115730995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdbdc2132e8695%3A0xbb8bac358d335e7!2sMount%20Nasugbu!5e1!3m2!1sen!2sph!4v1598217142315!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.916667, 120.683333], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_San_Pedri%C3%B1o" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount San Pedriño</p> <p>Elev: 182 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.414319477592!2d120.6945785283451!3d13.858076027639685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdbad0e2633451%3A0x929f3168bc726636!2sMount%20San%20Pedrino!5e1!3m2!1sen!2sph!4v1598217227363!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.7446772, 121.190127], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mapolo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mapulo Hill</p> <p>Elev: 179 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15926.132150995165!2d121.1806896283316!3d13.745020438909982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd19e8be85f269%3A0x2bcf782642f525a!2sMapolo%20Hill!5e1!3m2!1sen!2sph!4v1598217256458!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0275, 121.0044444], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mataasnagulod" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mataasnagulod</p> <p>Elev: 169 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.731013940143!2d120.99568962836562!3d14.027520410600767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd73e223db7171%3A0xb4868ef74ee87e92!2sMount%20Mataasnagulod!5e1!3m2!1sen!2sph!4v1598217282684!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.75, 121.133333], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tolo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tolo Hill</p> <p>Elev: 167 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15925.792132296561!2d121.12457852833222!3d13.750020438413209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd1a6449d946bd%3A0x6133f026cdcd31cc!2sTolo%20Hill!5e1!3m2!1sen!2sph!4v1598217337194!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.85, 121.1833333], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tombol_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tombol Hill</p> <p>Elev: 165 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15919.042400942124!2d121.19791192834401!3d13.84890932855643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd14308af6a15b%3A0xd05667d198e9cd70!2sTombol%20Hill!5e1!3m2!1sen!2sph!4v1598217452643!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0, 120.983333], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tabaro" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tabaro</p> <p>Elev: 151 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16237.533941311054!2d120.97393715196729!3d14.001581081644478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd74775a485cc9%3A0x23257f87edf62a83!2sMount%20Tabaro!5e1!3m2!1sen!2sph!4v1598217491749!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0325, 121.0105556], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ragatan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ragatan</p> <p>Elev: 110 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.384146906972!2d121.00180082836626!3d14.032520410095294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd715e1d7ec305%3A0xbdea032d624258f!2sMount%20Ragatan!5e1!3m2!1sen!2sph!4v1598217547196!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.7788889, 120.6633333], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santiago" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santiago</p> <p>Elev: 101 m, Prom: 81 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.825204411354!2d120.65457852833563!3d13.778909335539927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdb107ca5c1a4d%3A0xbfd7b93a9243610c!2sMount%20Santiago!5e1!3m2!1sen!2sph!4v1598217593549!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0391667, 121.0141667], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bignay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bignay</p> <p>Elev: 87 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15905.921470256164!2d121.00541192836707!3d14.039187059421092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd716892a70445%3A0x8397bb30728c056!2sMount%20Bignay!5e1!3m2!1sen!2sph!4v1598217638703!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.9863889, 120.6536111], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Presca" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Presca</p> <p>Elev: 83 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15909.578438035094!2d120.64485632836063!3d13.986409314751029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bdbd8fedcb63bd%3A0xac398632f76c7017!2sMount%20Presca!5e1!3m2!1sen!2sph!4v1598217696949!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.766667, 120.933333], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Muntingtubig" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Muntingtubig</p> <p>Elev: 77 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15924.97937750646!2d120.93346742833363!3d13.761964837225845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd064d2ef7b99f%3A0xeb362a5e38426c20!2sMount%20Muntingtubig!5e1!3m2!1sen!2sph!4v1598217745414!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0397222, 121.0136111], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pirapirasu" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pirapirasu</p> <p>Elev: 67 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15905.882904437463!2d121.00485632836718!3d14.039742609364898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7168f658d00d%3A0xa942643b3171315c!2sMount%20Pirapirasu!5e1!3m2!1sen!2sph!4v1598217773550!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0209918, 121.061062], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lipa_Point_(punta_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lipa Point</p> <p>Elev: 59 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.829300090863!2d121.05230142124361!3d14.020996984886795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDAxJzE1LjYiTiAxMjHCsDAzJzM5LjgiRQ!5e1!3m2!1sen!2sph!4v1598217888895!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0325, 120.992778], { icon: aIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tibag" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tibag</p> <p>Elev: 30 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15936.685699480317!2d120.98336780511372!3d14.03162008551135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd7155ec42d4d1%3A0x8f081a2e662e2925!2sMount%20Tibag!5e1!3m2!1sen!2sph!4v1598217982603!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.0333333, 121.0], { icon: bIcon })
  .addTo(batangasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Talisay Caldera</p> <p>Elev: 19 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.581845517192!2d120.99781131485712!3d14.033338494487756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDAyJzAwLjAiTiAxMjHCsDAwJzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598218063497!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
