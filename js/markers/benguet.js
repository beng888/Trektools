var benguetmap = L.map("benguetmap").setView([16.5577257, 120.8039474], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(benguetmap);

L.marker([16.6541667, 120.7866667], { icon: fIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mongawto" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mongawto</p> <p>Elev: 2720 m, Prom: 965 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29026.75056386102!2d120.76911414466585!3d16.65420677732746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c9e609f788ab%3A0xbea938ca75c15c81!2sMount%20Mongawto!5e1!3m2!1sen!2sph!4v1598031988877!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5788889, 120.8841667], { icon: fIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Babadak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Babadak</p> <p>Elev: 2603 m, Prom: 120 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.053483960104!2d120.87541192871878!3d16.57890898280713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b4da7fb2cf67%3A0x389961643cc0259e!2sMount%20Babadak!5e1!3m2!1sen!2sph!4v1598032074960!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7302741, 120.7628452], { icon: fIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Osdung" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Osdung</p> <p>Elev: 2570 m, Prom: 329 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15701.591812162085!2d120.75485632874239!3d16.730853365015516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c92b62391ec5%3A0xdd006f660b199343!2sMount%20Osdung!5e1!3m2!1sen!2sph!4v1598032188945!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.68, 120.7825], { icon: fIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nangaoto" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nangaoto</p> <p>Elev: 2556 m, Prom: 179 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15706.069751746752!2d120.77485632873392!3d16.676408971406588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c997816ff453%3A0xe631ec6e0e92b5ce!2sMount%20Nangaoto!5e1!3m2!1sen!2sph!4v1598032265036!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.65, 120.783333], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Singakalsa" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Singakalsa</p> <p>Elev: 2470 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.938971327563!2d120.78513412873035!3d16.653631174075105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c9faa2074793%3A0xcc762e786839b3df!2sMount%20Singakalsa!5e1!3m2!1sen!2sph!4v1598032354463!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.6333333, 120.75], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pawoi" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pawoi</p> <p>Elev: 2459 m, Prom: 170 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15709.600944083348!2d120.74124522872721!3d16.63335337644811!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b7c919c84339%3A0xc8a92751e2470d56!2sMount%20Pawoi!5e1!3m2!1sen!2sph!4v1598032477549!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.643432, 120.8665437], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aki" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aki</p> <p>Elev: 2354 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15708.235081839764!2d120.85791192872983!3d16.650020074497878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ca93789546fd%3A0x14ce6a40d0629344!2sMount%20Aki!5e1!3m2!1sen!2sph!4v1598032571515!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.503056, 120.883889], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pauadan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pauadan</p> <p>Elev: 2347 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.231592201948!2d120.87596742870711!3d16.50307569163449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b32805d4a497%3A0x6018451187ed33ec!2sMount%20Pauadan!5e1!3m2!1sen!2sph!4v1598032659451!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.829444, 120.895], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Peak</p> <p>Elev: 2342 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15240.312510155305!2d120.8863851868873!3d16.829449104713845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ5JzQ2LjAiTiAxMjDCsDUzJzQyLjAiRQ!5e1!3m2!1sen!2sph!4v1598033017028!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.6258378, 120.8618542], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ambobongan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ambubungan</p> <p>Elev: 2257 m, Prom: 135 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15710.237883917323!2d120.85457852872602!3d16.625575677357617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b56493261b81%3A0xf03edad2cf750a8c!2sMount%20Ambobongan!5e1!3m2!1sen!2sph!4v1598033083215!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3349316, 120.5610265], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santo_Tomas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santo Tomas</p> <p>Elev: 2251 m, Prom: 887 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15733.82486228582!2d120.55207852868148!3d16.335020111073064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33910a9a9657ec6f%3A0x1964074191bf3f01!2sMount%20Santo%20Tomas!5e1!3m2!1sen!2sph!4v1598033168852!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5686207, 120.736075], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Toyangan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Toyangan</p> <p>Elev: 2206 m, Prom: 337 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.915093815658!2d120.72735632871714!3d16.56835338403792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b0cab6c8c88f%3A0x660725985be6b2b3!2sMount%20Toyangan!5e1!3m2!1sen!2sph!4v1598033247185!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5495886, 120.8711302], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palansa" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palansa</p> <p>Elev: 2170 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15716.410297376196!2d120.85791192871433!3d16.55002008617403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b49dd30d43b3%3A0xfb3dc6518a46a590!2sMount%20Palansa!5e1!3m2!1sen!2sph!4v1598033386749!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.769444, 120.684167], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lobo_(bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lobo</p> <p>Elev: 2123 m, Prom: 473 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15698.54512858123!2d120.67707852874821!3d16.767797860668516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c5bf0b6eb88d%3A0xe7058b15eb84a421!2sMount%20Lobo!5e1!3m2!1sen!2sph!4v1598033477714!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5798001, 120.7305957], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Damocnoc</p> <p>Elev: 2122 m, Prom: 164 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16882.572848826065!2d120.72161373706801!3d16.579805209483524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDM0JzQ3LjMiTiAxMjDCsDQzJzUwLjEiRQ!5e1!3m2!1sen!2sph!4v1598033612138!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7601586, 120.6388645], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagpew</p> <p>Elev: 2105 m, Prom: 473 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16715.679434100806!2d120.63005067936106!3d16.760163681087036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ1JzM2LjYiTiAxMjDCsDM4JzE5LjkiRQ!5e1!3m2!1sen!2sph!4v1598033743709!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.716944, 120.796944], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pa%27pa" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pa\'pa</p> <p>Elev: 2084 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15703.466956198547!2d120.75735632873885!3d16.70807566769151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c9190442a907%3A0xa410b314e1208e55!2sMount%20Pa&#39;pa!5e1!3m2!1sen!2sph!4v1598034024596!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7, 120.85], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bulbul" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulbul</p> <p>Elev: 2076 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15704.12952876236!2d120.84124522873758!3d16.700020068637155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cb75803cea69%3A0x70d70453ec6de741!2sMount%20Bulbul!5e1!3m2!1sen!2sph!4v1598034110974!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.566667, 120.866667], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Libung_(bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Libung</p> <p>Elev: 2032 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.051082708474!2d120.8579119287169!3d16.566686784232193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b49364f2c329%3A0x4e56d98178256e7e!2sMount%20Libung!5e1!3m2!1sen!2sph!4v1598034191146!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.35941, 120.5651687], { icon: eIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kabuyao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kabuyao</p> <p>Elev: 2010 m, Prom: 69 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3932.995356964064!2d120.56364301494118!3d16.357903435981637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a0644ee774ff%3A0xced6ec37967aca5b!2sMount%20Kabuyao%20View%20Deck!5e1!3m2!1sen!2sph!4v1598034391596!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.673889, 120.699167], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bakoko" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bakoko</p> <p>Elev: 1999 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15707.91618501837!2d120.6801341287304!3d16.653909024042573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b873351a15e1%3A0x2a1282ee088fe09e!2sMount%20Bakoko!5e1!3m2!1sen!2sph!4v1598034582503!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.75, 120.75], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulog_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pulog Mountain</p> <p>Elev: 1993 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15700.012016311219!2d120.7412452287454!3d16.750020062761344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cf247a951d27%3A0xa203df7231db4831!2sPulog%20Mountain!5e1!3m2!1sen!2sph!4v1598034661012!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.833333, 120.65], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tenglawan</p> <p>Elev: 1981 m, Prom: 396 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.638719567834!2d120.64269405818212!3d16.832913791378186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391c4ccfc2068e7%3A0x68aa6b3d42a725ad!2sMt%20Tenglawan%20Summit!5e1!3m2!1sen!2sph!4v1598034782807!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5830556, 120.7741667], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bayabas_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bayabas</p> <p>Elev: 1912 m, Prom: 115 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15713.713226697666!2d120.76541192871939!3d16.583075682321084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b6c20e77353f%3A0x3ef2390871e1238c!2sBayabas!5e1!3m2!1sen!2sph!4v1598035031146!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7265485, 120.6321923], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagpaya</p> <p>Elev: 1830 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16137.22207637032!2d120.62330202089437!3d16.726553594909237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQzJzM1LjYiTiAxMjDCsDM3JzU1LjkiRQ!5e1!3m2!1sen!2sph!4v1598035376991!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.833333, 120.833333], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lusong_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lusong</p> <p>Elev: 1829 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15693.122930456291!2d120.82457852875852!3d16.833353352934793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391d24424d84847%3A0x1975c92119fc3b71!2sMount%20Lusong!5e1!3m2!1sen!2sph!4v1598035468214!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.2904204, 120.6311489], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ulap Summit</p> <p>Elev: 1829 m, Prom: 529 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16987.86990936509!2d120.62223070557445!3d16.29036541206638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a0d629940071%3A0xf738f1e7f7475a27!2sMount%20Ulap%20-%20Summit!5e1!3m2!1sen!2sph!4v1598035561134!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.266667, 120.616667], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Poris" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Poris</p> <p>Elev: 1802 m, Prom: 99 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15739.068394912294!2d120.61346742867163!3d16.2697423685775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391095faf99b991%3A0xeecf02ee030565d4!2sMount%20Poris!5e1!3m2!1sen!2sph!4v1598035684966!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.6, 120.816667], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Andok" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Andok</p> <p>Elev: 1801 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15712.32867241686!2d120.80791192872205!3d16.600020080343498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b5cd74795ab5%3A0xa4cc20951257a078!2sMount%20Andok!5e1!3m2!1sen!2sph!4v1598035757308!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.2870681, 120.6322888], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ulap</p> <p>Elev: 1792 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15737.438089356796!2d120.62221162867469!3d16.290065616243872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339109782260604b%3A0x77b32d74b730ec29!2sMount%20Ulap!5e1!3m2!1sen!2sph!4v1598035846448!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.2952667, 120.6371278], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Gungal Peak - 2nd Peak</p> <p>Elev: 1788 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15737.037543233417!2d120.62805882867544!3d16.29505501567057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391099c1b2a9ea7%3A0xb91486e0a9b1db2f!2sGungal%20Rock!5e1!3m2!1sen!2sph!4v1598035975800!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4502469, 120.8578323], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bukas_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bukas</p> <p>Elev: 1776 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.380062499513!2d120.85318962869928!3d16.45196454756446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ad6fdafa3649%3A0xeffcd986e530bb7f!2sMount%20Bukas!5e1!3m2!1sen!2sph!4v1598036064422!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8027463, 120.6325811], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Kabunian Peak</p> <p>Elev: 1767 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16395.46475411269!2d120.62369153885075!3d16.802751374253408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ4JzA5LjkiTiAxMjDCsDM3JzU3LjMiRQ!5e1!3m2!1sen!2sph!4v1598036172790!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3000061, 120.6333279], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tuey_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tuey Peak</p> <p>Elev: 1760 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15736.638829433507!2d120.6245785286762!3d16.30002011509992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391099aec0d43fb%3A0x29bb96f94f3018a5!2sTuey%20Peak!5e1!3m2!1sen!2sph!4v1598036298468!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.566667, 120.683333], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Atok" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Atok</p> <p>Elev: 1755 m, Prom: 222 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.20973048939!2d120.6784674287166!3d16.56474228445883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ba3d15d430ef%3A0x3c234f0540c02bbe!2sMount%20Atok!5e1!3m2!1sen!2sph!4v1598036367752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.405556, 120.854167], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ambagyew" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ambagyew</p> <p>Elev: 1709 m, Prom: 186 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.95479975095!2d120.84763412869252!3d16.407797902676002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391acf159f85e25%3A0x1fc495fdc2d71a22!2sMount%20Ambagyew!5e1!3m2!1sen!2sph!4v1598036456635!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.45, 120.883333], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caual" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caual</p> <p>Elev: 1674 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.101314007672!2d120.87013412869413!3d16.418353401455462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391acd8b5c16ce9%3A0x40a92a3b3e7def19!2sMount%20Caual!5e1!3m2!1sen!2sph!4v1598036774742!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4539741, 120.6084949], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Jumbo</p> <p>Elev: 1660 m, Prom: 239 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.053892089441!2d120.60486331487792!3d16.4539941333818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a35c28b55395%3A0x3630364b2c870c47!2sMount%20Yangbew!5e1!3m2!1sen!2sph!4v1598036955925!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.366667, 120.779167], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lusod" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lusod</p> <p>Elev: 1642 m, Prom: 176 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15731.296230365699!2d120.77096742868623!3d16.366409007455363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a91343d46017%3A0xc0bd594f80eed694!2sMount%20Lusod!5e1!3m2!1sen!2sph!4v1598037079506!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.301111, 120.691389], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ananeto" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ananeto</p> <p>Elev: 1635 m, Prom: 365 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15736.080973130463!2d120.68596742867723!3d16.306964514301537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33910814078cfc29%3A0x7cfee98ae15c7a18!2sMount%20Ananeto!5e1!3m2!1sen!2sph!4v1598037140443!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8077778, 120.8108333], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sinakiay_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sinakiay Hill</p> <p>Elev: 1602 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15695.239109604734!2d120.80207852875446!3d16.807797855952717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391cdf8bf26af7d%3A0x5e1635fe6cec35fb!2sSinakiay%20Hill!5e1!3m2!1sen!2sph!4v1598037214470!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5281479, 120.8099688], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dusong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dusong</p> <p>Elev: 1555 m, Prom: 285 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.130055838583!2d120.80041192871109!3d16.528908988631276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b3d9643585b7%3A0x834c8efbe35a416b!2sMount%20Dusong!5e1!3m2!1sen!2sph!4v1598037326452!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4092507, 120.5797512], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mirador" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mirador</p> <p>Elev: 1539 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.82007901212!2d120.57152302869281!3d16.409464502483345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a173fb0f5ab3%3A0x8220edf55b2f0993!2sMount%20Mirador!5e1!3m2!1sen!2sph!4v1598037477512!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.533333, 120.816667], { icon: dIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Obudan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Obudan</p> <p>Elev: 1534 m, Prom: 38 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.768182180067!2d120.80791192871176!3d16.53335338811419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b3c2bf7def6b%3A0x7e71abd81c5f72dc!2sMount%20Obudan!5e1!3m2!1sen!2sph!4v1598037601282!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5211667, 120.8116667], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Daclan</p> <p>Elev: 1494 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15995.524666460087!2d120.80533004590377!3d16.521657566993948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b3d1ca10b987%3A0xe2f852eb0005190!2sDaclan%20Sulfur%20Spring!5e1!3m2!1sen!2sph!4v1598037950596!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4452778, 120.8338889], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Koros_Widi_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Koros Widi Hill</p> <p>Elev: 1474 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.920243126066!2d120.82513412869825!3d16.445297898336772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391adbdcb230a7f%3A0x776f7defc245f0c3!2sKoros%20Widi%20Hill!5e1!3m2!1sen!2sph!4v1598038096727!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4616391, 120.8122678], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bugdan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bugdan</p> <p>Elev: 1468 m, Prom: 138 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.591913262011!2d120.80346742870077!3d16.461686796437693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ade4d47e957d%3A0xf3c96c2a94c00a6a!2sMount%20Bugdan!5e1!3m2!1sen!2sph!4v1598038242196!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7194663, 120.6433783], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buga</p> <p>Elev: 1461 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15273.076275226755!2d120.63458946094082!3d16.719471405145555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQzJzEwLjEiTiAxMjDCsDM4JzM2LjIiRQ!5e1!3m2!1sen!2sph!4v1598038333921!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4616081, 120.5799859], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Windy Hill</p> <p>Elev: 1458 m, Prom: 45 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15771.922175777892!2d120.56859856414815!3d16.462106911579443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a3ac6453bb21%3A0xeac090e31e46579!2sWindy%20Hill%20Buyagan%20La%20Trinidad%20Benguet!5e1!3m2!1sen!2sph!4v1598038491794!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4282275, 120.8502389], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangaku" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangaku</p> <p>Elev: 1453 m, Prom: 45 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15726.26976934602!2d120.84263412869569!3d16.42863120026637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ad00c8091079%3A0xb68094dbfba2203a!2sMount%20Mangaku!5e1!3m2!1sen!2sph!4v1598038616511!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.440285, 120.8164656], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pao_(bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pao</p> <p>Elev: 1452 m, Prom: 101 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15725.34773800779!2d120.80791192869746!3d16.440020098947997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391adcff5af45e9%3A0xc760d7967835b406!2sMount%20Pao!5e1!3m2!1sen!2sph!4v1598038673304!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.425556, 120.678056], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kadang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kadang</p> <p>Elev: 1450 m, Prom: 86 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15726.427119436323!2d120.67041192869543!3d16.426686850491375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a5c66baffe93%3A0xd0ba201c113b1978!2sMount%20Kadang!5e1!3m2!1sen!2sph!4v1598038760281!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5848617, 120.5698799], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salat" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salat</p> <p>Elev: 1445 m, Prom: 206 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.325625036392!2d120.55957852871828!3d16.575575683195865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391bdca02cd41f3%3A0x51fb6a8115bfccd6!2sMount%20Salat!5e1!3m2!1sen!2sph!4v1598038812465!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.383333, 120.766667], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Inoman" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Inoman</p> <p>Elev: 1421 m, Prom: 138 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.660173823371!2d120.75346742868932!3d16.38668685511508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a92897c1ecf7%3A0x58f1fcc14eb58f9e!2sMount%20Inoman!5e1!3m2!1sen!2sph!4v1598038882158!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3369444, 120.7838889], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anap" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anap</p> <p>Elev: 1414 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.617079005808!2d120.74124522868375!3d16.350020109344992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a996f63b4459%3A0x3392da23b4340c17!2sMount%20Anap!5e1!3m2!1sen!2sph!4v1598038963452!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.466667, 120.716667], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patoktok" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patoktok</p> <p>Elev: 1371 m, Prom: 169 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.659491863571!2d120.70291192870066!3d16.46085339653431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a5627470b211%3A0x6455cdeb682f33d7!2sMount%20Patoktok!5e1!3m2!1sen!2sph!4v1598039079849!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5013062, 120.8556709], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Padoc, Karao</p> <p>Elev: 1346 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16303.91955355794!2d120.8468396556824!3d16.501311304513585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzA0LjciTiAxMjDCsDUxJzIwLjQiRQ!5e1!3m2!1sen!2sph!4v1598039240317!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4, 120.7], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buneco" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buñeco</p> <p>Elev: 1340 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.61796486783!2d120.68735632869316!3d16.411964502194294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a5e3f342f9fd%3A0xf7b8226810a495b!2sMount%20Buneco!5e1!3m2!1sen!2sph!4v1598039356902!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4544337, 120.7658245], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kotkot_(bukid_sa_Pilipinas,_lat_16,46,_long_120,77)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kotkot</p> <p>Elev: 1334 m, Prom: 114 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.13240839682!2d120.75707852869976!3d16.455020097210394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ae491792c8e3%3A0x4bf63819e9d68c39!2sMount%20Kotkot!5e1!3m2!1sen!2sph!4v1598039433752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.45, 120.716667], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kanote" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kanote</p> <p>Elev: 1333 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.537638017311!2d120.70791192869898!3d16.45002009778975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391af814158ec55%3A0xa502f00989bf4857!2sMount%20Kanote!5e1!3m2!1sen!2sph!4v1598039594209!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4563889, 120.8458333], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maidit_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maidit Hill</p> <p>Elev: 1331 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.019822461267!2d120.83707852869995!3d16.456408997049444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ad9ccb3363eb%3A0x711bca29f9c71199!2sMaidit%20Hill!5e1!3m2!1sen!2sph!4v1598039653306!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4410615, 120.7726864], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Damchak_(bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Damchak</p> <p>Elev: 1309 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15725.257747402977!2d120.76430082869763!3d16.441131248819335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ae5971d4d513%3A0xa90fd9a553374274!2sMount%20Damchak!5e1!3m2!1sen!2sph!4v1598039779852!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4897851, 120.7868395], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Darac_(bukid_sa_Pilipinas,_Province_of_Benguet)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Darac</p> <p>Elev: 1283 m, Prom: 114 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.315012602998!2d120.77846742870507!3d16.489742293182974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b1eed6fba35b%3A0x3ab6579be192c08d!2sMount%20Darac!5e1!3m2!1sen!2sph!4v1598039855122!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8904981, 120.7431642], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tungutigan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tongungan</p> <p>Elev: 1281 m, Prom: 111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15688.673401903996!2d120.66818962876695!3d16.886964446590913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391da4f7ad72c9d%3A0x831fec1c49341d69!2sMount%20Tungutigan!5e1!3m2!1sen!2sph!4v1598039931372!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3241667, 120.6877778], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kotkot_(bukid_sa_Pilipinas,_lat_16,32,_long_120,69)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kotkot</p> <p>Elev: 1274 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15734.696476875462!2d120.67902302867985!3d16.32418681232026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339108200ba5891d%3A0xcb801e3f72be9509!2sMount%20Kotkot!5e1!3m2!1sen!2sph!4v1598040046158!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.466667, 120.766667], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Indian" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Indian</p> <p>Elev: 1263 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.006141372976!2d120.75596742870188!3d16.468908995600298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ae31e5f53e91%3A0x7e7483f22c902e3b!2sMount%20Indian!5e1!3m2!1sen!2sph!4v1598040226657!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.387778, 120.515833], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calugong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calugong</p> <p>Elev: 1248 m, Prom: 143 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.615331308165!2d120.50596742868943!3d16.387242305050954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919f9b143aef63%3A0x9fe4dec9761b43d!2sMount%20Calugong!5e1!3m2!1sen!2sph!4v1598040355081!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.433333, 120.75], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kamalkatan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kamalkatan</p> <p>Elev: 1221 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15725.954998644225!2d120.74263412869631!3d16.43252009981628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391af04631addbd%3A0xc6edc8238a6992d1!2sMount%20Kamalkatan!5e1!3m2!1sen!2sph!4v1598040435920!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4590681, 120.7898183], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agat" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agat</p> <p>Elev: 1216 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.862191493161!2d120.78068962870026!3d16.458353396824087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ae13b283690f%3A0xf7aeecb008fc37b2!2sMount%20Agat!5e1!3m2!1sen!2sph!4v1598040504896!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5026188, 120.8498125], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Dawed, Karao</p> <p>Elev: 1200 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15498.289822479897!2d120.84118667802984!3d16.502623913934357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzA5LjQiTiAxMjDCsDUwJzU5LjMiRQ!5e1!3m2!1sen!2sph!4v1598040602787!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5294025, 120.7978562], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ponopen" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ponopen</p> <p>Elev: 1197 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.016978444284!2d120.78707852871136!3d16.530297888469686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b16456502e4d%3A0x83c2498926163362!2sMount%20Ponopen!5e1!3m2!1sen!2sph!4v1598040706291!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.366667, 120.7], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Umkalang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Umkalang</p> <p>Elev: 1175 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.079937625967!2d120.68957852868476!3d16.356686808576516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a7cfad7e93eb%3A0x36baf262a3920f9c!2sMount%20Umkalang!5e1!3m2!1sen!2sph!4v1598040776048!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.35, 120.75], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anapol" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anapol</p> <p>Elev: 1152 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.617079005808!2d120.74124522868375!3d16.350020109344992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a8512320681b%3A0x5921fc8c59c3e891!2sMount%20Anapol!5e1!3m2!1sen!2sph!4v1598040819299!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4938265, 120.7606225], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Batangbang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Batangbang</p> <p>Elev: 1128 m, Prom: 100 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.95396435641!2d120.75235632870574!3d16.494186792666923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b1cc5694e90f%3A0x8a1094d148691e46!2sMount%20Batangbang!5e1!3m2!1sen!2sph!4v1598040874057!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5373867, 120.7908977], { icon: cIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caas</p> <p>Elev: 1024 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.4288336238!2d120.78235632871238!3d16.537520087629296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391b168154a7791%3A0x9196b413ec3aa63c!2sMount%20Caas!5e1!3m2!1sen!2sph!4v1598040958176!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.466111, 120.491389], { icon: bIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bilbil" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bilbil Mountain</p> <p>Elev: 836 m, Prom: 142 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.974790363924!2d120.47041192870007!3d16.456964496985062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919927262de177%3A0x602489f24af5af4a!2sMount%20Bilbil!5e1!3m2!1sen!2sph!4v1598041032700!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4, 120.483333], { icon: bIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apni" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apni</p> <p>Elev: 790 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.054564083981!2d120.48207852869047!3d16.394186804248886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919fa8e1337a05%3A0xa06b1892dd1b8ea8!2sMount%20Apni!5e1!3m2!1sen!2sph!4v1598041089154!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.383333, 120.483333], { icon: bIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lusen_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lusen</p> <p>Elev: 778 m, Prom: 81 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15729.929258405995!2d120.47457852868882!3d16.383353405499985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919fb3601adb97%3A0x69c2f5503a268d02!2sMount%20Lusen!5e1!3m2!1sen!2sph!4v1598041153960!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.420833, 120.497778], { icon: bIcon })
  .addTo(benguetmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lomboy_(bukid_sa_Pilipinas,_Administratibong_Rehiyon_sa_Cordillera)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lomboy</p> <p>Elev: 698 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15726.831674484383!2d120.48846742869466!3d16.42168680106988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919f3c43b6532f%3A0xe57dc9f0979636c7!2sMount%20Lomboy!5e1!3m2!1sen!2sph!4v1598041238155!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
