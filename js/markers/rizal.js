var rizalmap = L.map("rizalmap").setView([14.6037446, 121.3084088], 10);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(rizalmap);

L.marker([14.8119936, 121.3375093], { icon: dIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Irid" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Irid</p> <p>Elev: 1510 m, Prom: 1236 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.517180355757!2d121.31707852846243!3d14.788909231860872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397993e771f93b7%3A0xd1f5d80238afc84e!2sMount%20Irid!5e1!3m2!1sen!2sph!4v1598196754796!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7782291, 121.295006], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Batay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Batay</p> <p>Elev: 1401 m, Prom: 486 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.922910992003!2d121.27457852846172!3d14.783353632448284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397989283258675%3A0xb5698c956056fc94!2sMount%20Batay!5e1!3m2!1sen!2sph!4v1598196797890!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7645255, 121.297526], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Minalunad" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Minalunad</p> <p>Elev: 1347 m, Prom: 133 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.1391940107!2d121.29124522845946!3d14.76668703420935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979856e1a03ea3%3A0x809275c32479d5!2sMount%20Minalunad!5e1!3m2!1sen!2sph!4v1598196829771!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.878889, 121.32], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Macatohuol" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Macatohuol</p> <p>Elev: 1291 m, Prom: 394 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.923634827004!2d121.31124522847438!3d14.878909222318647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979e3a824998a3%3A0xecf5eeaff102d7c!2sMount%20Macatohuol!5e1!3m2!1sen!2sph!4v1598196862118!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8276774, 121.3031851], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anulsan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anulsan</p> <p>Elev: 1131 m, Prom: 222 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.265999302545!2d121.2912452284683!3d14.833353627154859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979f188a2b1e69%3A0x226b706a119d47c8!2sMount%20Anulsan!5e1!3m2!1sen!2sph!4v1598196895668!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.860278, 121.315833], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Munong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Munong</p> <p>Elev: 1119 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15847.290324914664!2d121.30707852847185!3d14.86029807429595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979e51c3403e4d%3A0xcf72a260088e951!2sMount%20Munong!5e1!3m2!1sen!2sph!4v1598196942199!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.866667, 121.316667], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Capatusuan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Capatusuan</p> <p>Elev: 1108 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.82135127923!2d121.30791192847276!3d14.866686973617409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979e4928af1b6f%3A0xcfef15de4f6ccf24!2sMount%20Capatusuan!5e1!3m2!1sen!2sph!4v1598196973655!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8211471, 121.3014561], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kabungani" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kabungani</p> <p>Elev: 1089 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.567611846353!2d121.29263412846596!3d14.81557592903871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979f2c15ba11bb%3A0x8ee5e82ea3c252f8!2sMount%20Kabungani!5e1!3m2!1sen!2sph!4v1598197008318!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.848056, 121.294722], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matulid_(bukid_sa_Pilipinas,_Calabarzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matulid</p> <p>Elev: 1075 m, Prom: 91 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.186939636638!2d121.28596742847022!3d14.848075875593322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979f0f2f8d7779%3A0x746a2f128cbc4fad!2sMount%20Matulid!5e1!3m2!1sen!2sph!4v1598197036439!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7666004, 121.3018604], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banay</p> <p>Elev: 1048 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.139194010699!2d121.2912452284595!3d14.766687034209344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979856e1a03ea3%3A0xa7dc825260dd0cc!2sMount%20Banay!5e1!3m2!1sen!2sph!4v1598197083781!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.843889, 121.316389], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Butioc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Butioc</p> <p>Elev: 1042 m, Prom: 97 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.492438250238!2d121.30763412846973!3d14.843909226035397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979efbb71144df%3A0x396d7d0b5e22409c!2sMount%20Butioc!5e1!3m2!1sen!2sph!4v1598197114315!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.85, 121.316667], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bunloc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bunloc</p> <p>Elev: 1031 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.044347623507!2d121.30791192847052!3d14.850020275387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979ef886705dcf%3A0xfc044d7a76b56c48!2sMount%20Bunloc!5e1!3m2!1sen!2sph!4v1598197140040!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8, 121.283333], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palagyo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palagyo</p> <p>Elev: 1024 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.705282919442!2d121.27457852846392!3d14.800020280685514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339798b8e7ef7f35%3A0xa91747b7bb13f7b!2sMount%20Palagyo!5e1!3m2!1sen!2sph!4v1598197173146!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7618382, 121.2723819], { icon: cIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>summit</p> <p>Elev: 1015 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16958.2498009496!2d121.26353614728251!3d14.761843361327552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQ1JzQyLjYiTiAxMjHCsDE2JzIwLjYiRQ!5e1!3m2!1sen!2sph!4v1598197271074!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.833333, 121.233333], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Rizal_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Rizal Peak</p> <p>Elev: 959 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.26599930254!2d121.22457852846833!3d14.833353627154859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a1918d53c0e3%3A0x7e70669199e0a43d!2sRizal%20Peak!5e1!3m2!1sen!2sph!4v1598197311645!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.840833, 121.236667], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Siam_Bundoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Siam Bundoc</p> <p>Elev: 959 m, Prom: 235 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.73677899393!2d121.2270785284693!3d14.840575876388996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a195bdd38f9b%3A0x9c50bcd2a4f77504!2sMount%20Siam%20Bundoc!5e1!3m2!1sen!2sph!4v1598197347298!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6448648, 121.3154036], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kanumay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kanumay</p> <p>Elev: 946 m, Prom: 480 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.997552399434!2d121.30707852844354!3d14.644742497042824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339796826dc9b5c7%3A0x85aec75c5cbdc03b!2sMount%20Kamunay!5e1!3m2!1sen!2sph!4v1598197376655!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6357904, 121.3140124], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Susungdalaga_(bukid_sa_Pilipinas,_Calabarzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Susungdalaga</p> <p>Elev: 934 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.6806161557!2d121.30513412844233!3d14.635298148032952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397942dde389f7d%3A0xd1f1c7df96d5a4e2!2sMount%20Susungdalaga!5e1!3m2!1sen!2sph!4v1598197413852!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6392753, 121.3151065], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Batolusong</p> <p>Elev: 933 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15676.644220614118!2d121.31330829330193!3d14.638812363183089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397943e628773ad%3A0x3bbe286f396e67bd!2sMount%20Batolusong!5e1!3m2!1sen!2sph!4v1598197459192!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.781111, 121.275278], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Danes" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount danes</p> <p>Elev: 928 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15853.085158593054!2d121.26652302846142!3d14.781131432683184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397988f6d8852f9%3A0x7078160068326864!2sMount%20Danes!5e1!3m2!1sen!2sph!4v1598197572730!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8236111, 121.2455556], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maymasibi" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maymasibi</p> <p>Elev: 928 m, Prom: 227 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.978009213799!2d121.23680082846703!3d14.823631428185344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a1f69fc77f49%3A0xf14204d1439a8438!2sMount%20Maymasibi!5e1!3m2!1sen!2sph!4v1598197610480!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.823889, 121.254722], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bituan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bituan</p> <p>Elev: 914 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.957674393832!2d121.24596742846707!3d14.823909178155901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a1fbd742cc5b%3A0x25f4fdf8c780a51e!2sMount%20Bituan!5e1!3m2!1sen!2sph!4v1598197651017!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8663516, 121.2885415], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guerlang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guerlang</p> <p>Elev: 909 m, Prom: 109 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15846.82135127923!2d121.29124522847273!3d14.866686973617421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979fb11d27c0a3%3A0x7fd28bb3a8d22313!2sMount%20Guerlang!5e1!3m2!1sen!2sph!4v1598197680571!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8277518, 121.2836012], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cayadlas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cayadlas</p> <p>Elev: 896 m, Prom: 103 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.486306225055!2d121.27457852846614!3d14.816687028921024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979f4af83d2bd5%3A0xa834bfa18630fb9!2sMount%20Cayadlas!5e1!3m2!1sen!2sph!4v1598197726870!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7176842, 121.2667536], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Domire" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Domire</p> <p>Elev: 866 m, Prom: 138 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.699236834547!2d121.25791192845307!3d14.717798089365374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339797e1689fbcf9%3A0x56751b7c6ece5c78!2sMount%20Domire!5e1!3m2!1sen!2sph!4v1598197770467!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7066086, 121.3570234], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pinto</p> <p>Elev: 864 m, Prom: 256 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16348.299624714116!2d121.34816941940011!3d14.70661376666837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzIzLjgiTiAxMjHCsDIxJzI1LjMiRQ!5e1!3m2!1sen!2sph!4v1598197854382!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7271132, 121.2979329], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masola" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masola</p> <p>Elev: 858 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.113438041231!2d121.29013412845411!3d14.7258535885168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339797864590aa5d%3A0x32b0889d67de7539!2sMount%20Masola!5e1!3m2!1sen!2sph!4v1598197905326!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.766667, 121.266667], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mamasan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mamasan</p> <p>Elev: 854 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.1391940107!2d121.25791192845954!3d14.76668703420935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979879bc41b9d7%3A0x898d5aaeaf45d84c!2sMount%20Mamasan!5e1!3m2!1sen!2sph!4v1598197952274!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7313585, 121.3133757], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masarat" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masarat</p> <p>Elev: 823 m, Prom: 154 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.749674987044!2d121.30457852845483!3d14.730853637989908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339799d43d5fa2a7%3A0x5a1ed57784596e99!2sMount%20Masarat!5e1!3m2!1sen!2sph!4v1598197985716!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.823889, 121.180556], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balagbag</p> <p>Elev: 788 m, Prom: 315 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15849.950045537205!2d121.17082532846705!3d14.824013378144858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a3fb829796a9%3A0xbd53ec214d1dff15!2sMount%20Balagbag!5e1!3m2!1sen!2sph!4v1598198014827!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.883333, 121.333333], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Angilo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Angilo</p> <p>Elev: 780 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15845.597017711216!2d121.32457852847496!3d14.883353621846146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979e18c4ead69d%3A0x2fedf1143522393e!2sMount%20Angilo!5e1!3m2!1sen!2sph!4v1598198191608!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.385076, 121.3659025], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sembrano" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sembrano</p> <p>Elev: 737 m, Prom: 490 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15881.563597005748!2d121.35662192841028!3d14.385882273983384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397e5f9d77d33f5%3A0x435b8b26b3cd9329!2sMount%20Sembrano%20North%20Peak!5e1!3m2!1sen!2sph!4v1598198252102!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6161523, 121.4379731], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Daraitan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Daraitan</p> <p>Elev: 705 m, Prom: 173 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.286139161957!2d121.43013412843942!3d14.613075950360528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397920f241ba847%3A0x87162c333390e20a!2sMount%20Daraitan!5e1!3m2!1sen!2sph!4v1598198303699!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.723367, 121.3530822], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Pintong Bocawe</p> <p>Elev: 697 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16601.63509478146!2d121.34422048434314!3d14.72337216914669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQzJzI0LjEiTiAxMjHCsDIxJzExLjEiRQ!5e1!3m2!1sen!2sph!4v1598198389642!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.816667, 121.183333], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magalisian" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magalisian</p> <p>Elev: 691 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.486306225055!2d121.17457852846611!3d14.816687028921024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a3efce45732f%3A0x3db332edd20f533!2sMount%20Magalisian!5e1!3m2!1sen!2sph!4v1598198460992!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.75, 121.266667], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calumpog" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calumpog</p> <p>Elev: 681 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15855.8802013156!2d121.25791192845638!3d14.74279813673059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979806411795a3%3A0xf36581ea91329382!2sMount%20Calumpog!5e1!3m2!1sen!2sph!4v1598198493086!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6874124, 121.2915266], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Cauacaua</p> <p>Elev: 658 m, Prom: 168 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16141.858315229!2d121.28273822448027!3d14.687417564535357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQxJzE0LjciTiAxMjHCsDE3JzI5LjUiRQ!5e1!3m2!1sen!2sph!4v1598198593065!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6941813, 121.2918633], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sumarapsap</p> <p>Elev: 651 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126882.33341316335!2d121.19940395078147!3d14.682096766333476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQxJzM5LjEiTiAxMjHCsDE3JzMwLjciRQ!5e1!3m2!1sen!2sph!4v1598198667315!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.5875563, 121.3227721], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Masungit_Rock" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Masungi Rock</p> <p>Elev: 648 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15867.029440609185!2d121.31541192843632!3d14.588909252888339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339794ee675c132f%3A0x6bdc7255e7f3ca35!2sMasungit%20Rock!5e1!3m2!1sen!2sph!4v1598198770202!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8069444, 121.2155556], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabaun" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabaun</p> <p>Elev: 643 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.197541098196!2d121.20680082846481!3d14.806964729950515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a3cb3d231859%3A0x9872c701baaf778c!2sMount%20Cabaun!5e1!3m2!1sen!2sph!4v1598198812988!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6741667, 121.2947222], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Campana" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Campana</p> <p>Elev: 640 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.865205280606!2d121.28596742844735!3d14.674187043952413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339796448d379f75%3A0xc67b628d7858c58b!2sMount%20Campana!5e1!3m2!1sen!2sph!4v1598198869045!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7035302, 121.3187475], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amaya" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amaya</p> <p>Elev: 631 m, Prom: 148 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.022308255466!2d121.30291192845249!3d14.713353589833373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979776f1579721%3A0x295346e448c31c8d!2sMount%20Amaya!5e1!3m2!1sen!2sph!4v1598198945994!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6891264, 121.2709286], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mapatad" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mapatad</p> <p>Elev: 628 m, Prom: 157 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15859.777312223943!2d121.26235632844936!3d14.689186992376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397962c54e15cc7%3A0xc7a00f16b82feea8!2sMount%20Mapatad!5e1!3m2!1sen!2sph!4v1598198972226!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.751272, 121.2085682], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ayaas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ayaas</p> <p>Elev: 611 m, Prom: 264 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15855.151743296872!2d121.20013412845768!3d14.752798135675615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a32f7d22963b%3A0xe3d2b46e5a42ce0c!2sMount%20Ayaas!5e1!3m2!1sen!2sph!4v1598199000957!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7566157, 121.2313137], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malemod" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malemod</p> <p>Elev: 609 m, Prom: 217 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.78733681508!2d121.22068962845832!3d14.757798085147908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a2c2dedc2583%3A0x70e971ff23af930b!2sMount%20Malemod!5e1!3m2!1sen!2sph!4v1598199030353!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6693123, 121.3269177], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salilid" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salilid</p> <p>Elev: 598 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15860.865205280606!2d121.31763412844735!3d14.674187043952417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339796e611b4c133%3A0x7a92157ca230ba9d!2sMount%20Salilid!5e1!3m2!1sen!2sph!4v1598199057666!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6211243, 121.3586562], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sapari</p> <p>Elev: 593 m, Prom: 156 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16248.996363698909!2d121.34983324094108!3d14.62112947045084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDM3JzE2LjEiTiAxMjHCsDIxJzMxLjIiRQ!5e1!3m2!1sen!2sph!4v1598199217276!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.793333, 121.226111], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malac" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malac</p> <p>Elev: 591 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.293974473207!2d121.21485632846282!3d14.791964681537735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a251e22dd2ab%3A0xb3e2974633e0d0ad!2sMount%20Malac!5e1!3m2!1sen!2sph!4v1598199329408!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6742537, 121.326089], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Bobo Hill</p> <p>Elev: 590 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16475.73175529945!2d121.31709813117128!3d14.67425886636627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQwJzI3LjMiTiAxMjHCsDE5JzMzLjkiRQ!5e1!3m2!1sen!2sph!4v1598199456849!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7456545, 121.2337928], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Payacin" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Payacin</p> <p>Elev: 587 m, Prom: 139 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.34178350309!2d121.23318962845914!3d14.763909184502708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a2937b387941%3A0x7680d5806fdf45bd!2sMount%20Payacin!5e1!3m2!1sen!2sph!4v1598199494323!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6968683, 121.3224913], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bangbang_(bukid_sa_Pilipinas,_Calabarzon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bangbang</p> <p>Elev: 575 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15859.253120411055!2d121.3145785284503!3d14.696409241616518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33979710f074abd1%3A0x838b4fc64cdad2a3!2sMount%20Bangbang!5e1!3m2!1sen!2sph!4v1598199528140!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6252561, 121.3680387], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binutasan</p> <p>Elev: 573 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.999153878878!2d121.36694591486186!3d14.630926980255191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339793d5d4313699%3A0x6ae398c965661713!2sMount%20Binutasan!5e1!3m2!1sen!2sph!4v1598199571426!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.698424, 121.2358841], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Purro" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Purro</p> <p>Elev: 569 m, Prom: 300 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15859.071611386093!2d121.22652302845063!3d14.69890924135355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bd0a38d50ad1%3A0x2d3ba844383e6974!2sMount%20Purro!5e1!3m2!1sen!2sph!4v1598199649251!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.5989628, 121.3654635], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Treasure Mountain</p> <p>Elev: 537 m, Prom: 92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15530.34587976482!2d121.35721452142553!3d14.599908760021435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397930938526db1%3A0x931563448e95dd26!2sTreasure%20Mountain!5e1!3m2!1sen!2sph!4v1598199702751!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.752816, 121.2351926], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caypipili" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caypipili</p> <p>Elev: 529 m, Prom: 50 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15855.171986382922!2d121.22624522845764!3d14.752520335704924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a2c6913f4ee1%3A0x978dca1aece9200b!2sMount%20Caypipili!5e1!3m2!1sen!2sph!4v1598199778073!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7351006, 121.233956], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Compananan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Compananan</p> <p>Elev: 525 m, Prom: 78 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15855.171986382922!2d121.22624522845764!3d14.752520335704924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bd347138b499%3A0xc0207071d4943775!2sMount%20Compananan!5e1!3m2!1sen!2sph!4v1598199807697!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7732991, 121.2343457], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caypipili" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caypipili</p> <p>Elev: 519 m, Prom: 82 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15855.171986382926!2d121.22624522845764!3d14.752520335704927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a2c6913f4ee1%3A0x978dca1aece9200b!2sMount%20Caypipili!5e1!3m2!1sen!2sph!4v1598199834351!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7084077, 121.3351515], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mamuyao</p> <p>Elev: 517 m, Prom: 90 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16471.379901119053!2d121.32622119024096!3d14.708412867333037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQyJzMwLjMiTiAxMjHCsDIwJzA2LjYiRQ!5e1!3m2!1sen!2sph!4v1598199909165!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7411506, 121.1923894], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Haponang_Baboy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Hapunang Banoy</p> <p>Elev: 517 m, Prom: 232 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16661.327071210366!2d121.1824553151312!3d14.739737762774553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bcb67ebbe765%3A0x850c0df3481127cc!2sMount%20Hapunang%20Banoi!5e1!3m2!1sen!2sph!4v1598199981990!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8075, 121.217778], { icon: bIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabaun" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabaun</p> <p>Elev: 512 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.197541098196!2d121.20680082846481!3d14.806964729950515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a3cb3d231859%3A0x9872c701baaf778c!2sMount%20Cabaun!5e1!3m2!1sen!2sph!4v1598200015625!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6679847, 121.3323033], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cayabu</p> <p>Elev: 494 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15526.572442982324!2d121.32366975358268!3d14.66798986570009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDQwJzA0LjciTiAxMjHCsDE5JzU2LjMiRQ!5e1!3m2!1sen!2sph!4v1598200214091!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.72, 121.221944], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Limila" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Limila</p> <p>Elev: 483 m, Prom: 78 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15856.850735828859!2d121.21818962845464!3d14.729464688136295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bd255fea821d%3A0x5bb9d8405d263bcf!2sMount%20Limila!5e1!3m2!1sen!2sph!4v1598200270780!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7269001, 121.1714002], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pacawagan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Parawagan</p> <p>Elev: 470 m, Prom: 272 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16445.769471717536!2d121.16258102655712!3d14.724650569052221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bd54eb47a929%3A0xe9d4119060b1d8cd!2sMount%20Parawagan!5e1!3m2!1sen!2sph!4v1598200419327!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8216667, 121.1627778], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Katitingo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Katitingo</p> <p>Elev: 468 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.120353504797!2d121.15402302846675!3d14.82168702839135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a40f7e996085%3A0xe0f17ad5c43e9bd6!2sMount%20Katitingo!5e1!3m2!1sen!2sph!4v1598200491084!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7927778, 121.2083333], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panas</p> <p>Elev: 464 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.233081690158!2d121.19957852846296!3d14.79279813144958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a3ae4b5c2727%3A0x7c39a38dcde70027!2sMount%20Panas!5e1!3m2!1sen!2sph!4v1598200583309!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7166667, 121.2166667], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lamita" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lamita</p> <p>Elev: 463 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15857.780008183337!2d121.20791192845294!3d14.716687039482377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bce1e1007915%3A0xe3420c05514c3e0c!2sMount%20Lamita!5e1!3m2!1sen!2sph!4v1598200662759!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6699752, 121.2125449], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baytangan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baytangan</p> <p>Elev: 448 m, Prom: 115 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15861.18734030019!2d121.2037452284468!3d14.669742544419236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bc320ac7bcb9%3A0xbb66e6baa125d4a2!2sMount%20Baytangan!5e1!3m2!1sen!2sph!4v1598200746462!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.693333, 121.163889], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mataba" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mataba</p> <p>Elev: 448 m, Prom: 244 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15859.495086685905!2d121.15541192844987!3d14.693075891967107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bb8ebc95cebb%3A0xb24b3501520910d6!2sMount%20Mataba!5e1!3m2!1sen!2sph!4v1598200775019!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.3392772, 121.2325293], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Tagapo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagapo</p> <p>Elev: 432 m, Prom: 428 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15885.435894666278!2d121.22320877840339!3d14.331315479609913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397dddbd874ada5%3A0x7e9ab497ed61000!2sMount%20Tagapo!5e1!3m2!1sen!2sph!4v1598200822009!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.653889, 121.216667], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Yabang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Yabang</p> <p>Elev: 410 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15862.334153906728!2d121.20791192844474!3d14.653909246081284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397be80a9762137%3A0xe6bbc27d05bb81e3!2sMount%20Yabang!5e1!3m2!1sen!2sph!4v1598200887761!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7310193, 121.1914237], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pamitinan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pamitinan</p> <p>Elev: 410 m, Prom: 134 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16414.564882240356!2d121.18250148931754!3d14.73101245556349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bcb97348b2b7%3A0xf60cdaae5376d246!2sMount%20Pamitinan!5e1!3m2!1sen!2sph!4v1598200958856!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.638611, 121.223333], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kaymayuman" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kaymayuman</p> <p>Elev: 394 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15863.439587662335!2d121.21457852844276!3d14.638631397683561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397be6739f0a40d%3A0xe3ccb88329ec6cb6!2sMount%20Kaymayuman!5e1!3m2!1sen!2sph!4v1598200985871!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8, 121.2], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malagia" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malagia</p> <p>Elev: 392 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.62405709852!2d121.18068962846404!3d14.801131430567935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a396bf7a3425%3A0xb69b639decc003d1!2sMount%20Malagia!5e1!3m2!1sen!2sph!4v1598201015392!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7251302, 121.1905794], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binicayon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binicayan</p> <p>Elev: 379 m, Prom: 176 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16444.73486257797!2d121.18172621219293!3d14.725659865290458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bcbe36ebd4df%3A0xdc7c218d809cfcac!2sMount%20Binacayan!5e1!3m2!1sen!2sph!4v1598201085745!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.8, 121.15], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lacutan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lacutan</p> <p>Elev: 368 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15851.705282919442!2d121.1412452284639!3d14.80002028068551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a4670e60c511%3A0x8dc02c239b2c2be1!2sMount%20Lacutan!5e1!3m2!1sen!2sph!4v1598201116814!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6127491, 121.2390537], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tanauan_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tanauan</p> <p>Elev: 328 m, Prom: 114 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15865.346774378111!2d121.23041192843932!3d14.612242500447772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bfb5650633f9%3A0x83d74ece730f61c6!2sMount%20Tanauan!5e1!3m2!1sen!2sph!4v1598202846160!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.6005534, 121.2694661], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Qutago" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Quitago</p> <p>Elev: 307 m, Prom: 107 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15866.228278766826!2d121.26124522843774!3d14.60002030172658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397957b391883a9%3A0xf5c040a4e2da6f35!2sMount%20Qutago!5e1!3m2!1sen!2sph!4v1598201143181!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7118464, 121.2329406], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tayabasan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tayabasan</p> <p>Elev: 291 m, Prom: 67 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15858.18380454928!2d121.22374522845222!3d14.71113139006733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397bd110d227533%3A0xa4636232d99184a5!2sMount%20Tayabasan!5e1!3m2!1sen!2sph!4v1598201179918!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.616667, 121.25], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balidbiran" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balidbiran</p> <p>Elev: 248 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.70441625288!2d121.24680082844048!3d14.621131449517142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397be2f428a3899%3A0xf495f71f97a99e3f!2sMount%20Balidbiran!5e1!3m2!1sen!2sph!4v1598201218494!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.7560001, 121.1774178], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sipit Ulang</p> <p>Elev: 234 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7343285210663!2d121.17522081486274!3d14.755740477211672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a350cfeb472d%3A0xd4b5dfe454c5d6d8!2sMount%20Sipit%20Ulang!5e1!3m2!1sen!2sph!4v1598201250248!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([14.763611, 121.16], { icon: aIcon })
  .addTo(rizalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Oro_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Oro</p> <p>Elev: 83 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.301270044438!2d121.15318962845919!3d14.76446473444406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397a4a48586f625%3A0x239f7868f30ba34b!2sMount%20Oro!5e1!3m2!1sen!2sph!4v1598201347307!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
