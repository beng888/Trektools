var antiquemap = L.map("antiquemap").setView([11.380579, 122.0635005], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(antiquemap);

L.marker([11.3892088, 122.1620922], { icon: eIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Madiac" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Madja-as</p> <p>Elev: 2105 m, Prom: 2105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32145.585458268604!2d122.14204762267593!3d11.389375702712172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af8f9317cef88f%3A0x763a953df52bc5cb!2sMount%20Madiac!5e1!3m2!1sen!2sph!4v1598471219174!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1462971, 122.2534127], { icon: dIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baloy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baloy</p> <p>Elev: 1933 m, Prom: 573 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16086.362640303403!2d122.24430082806597!3d11.146687426117229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa3c546a11b79%3A0xef84578011aab05f!2sMount%20Baloy!5e1!3m2!1sen!2sph!4v1598471260313!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1748886, 122.205774], { icon: dIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balabag_(bukid_sa_Pilipinas,_lat_11,17,_long_122,20)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balabag</p> <p>Elev: 1716 m, Prom: 309 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16086.577742050953!2d122.18041192806565!3d11.142798476440744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa346fdde953f%3A0x5ab81043ca993cc!2sMount%20Balabag!5e1!3m2!1sen!2sph!4v1598471292297!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.116667, 122.25], { icon: dIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agbalanti" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agbalanti</p> <p>Elev: 1581 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16088.938933916657!2d122.28402302806201!3d11.100020679993179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa6c69112fbf9%3A0xe8b5f8b37854c7b7!2sMount%20Agbalanti!5e1!3m2!1sen!2sph!4v1598471338288!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.048017, 122.3065611], { icon: cIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igbanig_(bukid_sa_Pilipinas,_Province_of_Antique)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igbanig</p> <p>Elev: 1467 m, Prom: 569 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16091.519784080185!2d122.23985632805805!3d11.053076333878435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa5eea1bb4791%3A0x11e24d0dd69250b6!2sMount%20Igbanig!5e1!3m2!1sen!2sph!4v1598471372263!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.3271041, 122.1693608], { icon: cIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sipanag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sipanag</p> <p>Elev: 1450 m, Prom: 229 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16076.341189880926!2d122.16013412808161!3d11.326409611062925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af907dfe2e39d5%3A0x9d1adbbcce2de779!2sMount%20Sipanag!5e1!3m2!1sen!2sph!4v1598471412617!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.870556, 122.230278], { icon: cIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tiguran" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tiguran</p> <p>Elev: 1379 m, Prom: 317 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16101.31547476726!2d122.22124522804305!3d10.873076348647848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae532542b3f17b%3A0x10480b2aa7d90f5a!2sMount%20Tiguran!5e1!3m2!1sen!2sph!4v1598471437388!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.866667, 122.233333], { icon: cIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igdalig" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igdalig</p> <p>Elev: 1378 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16101.660242161624!2d122.22457852804247!3d10.866687449168355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae533cefacc219%3A0x4dcd2b40a1d3cc76!2sMount%20Igdalig!5e1!3m2!1sen!2sph!4v1598471470020!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0519444, 122.3033333], { icon: cIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tigatay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tigatay</p> <p>Elev: 1352 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16091.580746175276!2d122.29457852805794!3d11.051965083970243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa6363ca41e65%3A0x297fe5848a59d4c2!2sMount%20Tigatay!5e1!3m2!1sen!2sph!4v1598471499154!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.232222, 122.152778], { icon: cIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dumara" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dumara</p> <p>Elev: 1288 m, Prom: 59 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16081.363948266475!2d122.14374522807377!3d11.236687418603696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af9797d23f38ab%3A0x15a5bbfee4dafd0c!2sMount%20Dumara!5e1!3m2!1sen!2sph!4v1598471567165!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8083135, 122.2022842], { icon: cIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sansanan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sansanan</p> <p>Elev: 1285 m, Prom: 205 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.81375856644!2d122.19346742803772!3d10.808076353931352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae5220a63244ed%3A0xd400f26f92c34c73!2sMount%20Sansanan!5e1!3m2!1sen!2sph!4v1598471600538!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.083333, 122.3], { icon: cIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Parali" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Parali</p> <p>Elev: 1117 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16089.871725812816!2d122.26930082806055!3d11.083076331397134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa68f9f38b68b%3A0x5a14c50f166d2ebb!2sMount%20Parali!5e1!3m2!1sen!2sph!4v1598471634399!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.148333, 122.227778], { icon: cIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sonogong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sonogong</p> <p>Elev: 1114 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16085.870707995127!2d122.19041192806675!3d11.155576325377403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa31846bd4385%3A0x250781945be31b21!2sMount%20Sonogong!5e1!3m2!1sen!2sph!4v1598471658291!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0796184, 122.2290441], { icon: cIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anoy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anoy</p> <p>Elev: 1070 m, Prom: 456 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16089.856449680929!2d122.22291192806058!3d11.083354031374146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa44d7f4f7817%3A0x47f2217935dfde2a!2sMount%20Anoy!5e1!3m2!1sen!2sph!4v1598471744191!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.8241565, 121.992908], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tinayunga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinayunga</p> <p>Elev: 915 m, Prom: 855 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16047.775547087032!2d121.98374522812696!3d11.82390951833759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a541d57c1ac5a3%3A0x5a33d739147613e6!2sMount%20Tinayunga!5e1!3m2!1sen!2sph!4v1598471803481!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.816667, 122.166667], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igpanalan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igpanalan</p> <p>Elev: 908 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.351502270325!2d122.15791192803842!3d10.816687453232927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae4dfc798f89d7%3A0xfc678df3706ec499!2sMount%20Igpanalan!5e1!3m2!1sen!2sph!4v1598471828548!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.083333, 122.283333], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tuno" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tuno</p> <p>Elev: 867 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16090.558952858137!2d122.26902302805952!3d11.0705763324317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa66358b5f331%3A0x3b44fd05353efbda!2sMount%20Tuno!5e1!3m2!1sen!2sph!4v1598471853698!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.966667, 122.116667], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tigancal" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tigancal</p> <p>Elev: 862 m, Prom: 316 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16096.24093766744!2d122.10791192805077!3d10.966687440992178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afb3dab9bdc2b7%3A0x8708bcb8fbcab734!2sMount%20Tigancal!5e1!3m2!1sen!2sph!4v1598471885566!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.2167203, 122.1119304], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igtiring" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igtiring</p> <p>Elev: 820 m, Prom: 176 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16082.663719739874!2d122.10013412807173!3d11.213354020556515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afbd8a8c643bb1%3A0x4da330e170273175!2sMount%20Igtiring!5e1!3m2!1sen!2sph!4v1598471912075!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.965, 122.120556], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tigmaasin" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tigmaosin</p> <p>Elev: 805 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16096.104826764427!2d122.10818962805101!3d10.969187440786973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afb3da6e5514b7%3A0x3456fdff8c3c2b85!2sMount%20Tigmaasin!5e1!3m2!1sen!2sph!4v1598471935693!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9475, 122.0875], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tigbararing" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tigbararing</p> <p>Elev: 789 m, Prom: 180 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.28343828909!2d122.07874522804917!3d10.947520742564135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afb3865bc99839%3A0xf81f327ee274c321!2sMount%20Tigbararing!5e1!3m2!1sen!2sph!4v1598471971558!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1011017, 122.1934627], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tigdagano" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tigdagano</p> <p>Elev: 767 m, Prom: 154 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16088.770569646324!2d122.19291192806226!3d11.103076329739809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa4eb402307c9%3A0x45468fc9125ad03c!2sMount%20Tigdagano!5e1!3m2!1sen!2sph!4v1598472027505!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8115526, 122.1508142], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tagbagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagbagan</p> <p>Elev: 757 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.634865355956!2d122.14235632803799!3d10.811409653661052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae4e7527ed9b59%3A0xed37a1d92a1c9349!2sMount%20Tagbagan!5e1!3m2!1sen!2sph!4v1598472105109!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.883333, 122.183333], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aningalan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aningalan</p> <p>Elev: 754 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16100.760434045458!2d122.17457852804388!3d10.88335404781001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae52ae63053c89%3A0x59d4ecc426f8c6c9!2sMount%20Aningalan!5e1!3m2!1sen!2sph!4v1598472139509!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.883333, 122.15], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manlabog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Manlagbo Mountain</p> <p>Elev: 739 m, Prom: 262 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16100.760434045458!2d122.17457852804388!3d10.88335404781001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae52bb1d56465d%3A0x1234779c1bcfc6a1!2sMount%20Manlabog!5e1!3m2!1sen!2sph!4v1598472166801!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8272798, 122.1399016], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igbaon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igbaon</p> <p>Elev: 734 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16101.150518528979!2d122.17930082804328!3d10.876131848398844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae4dcf86f530a9%3A0x1daf15c92577c480!2sMount%20Igbaon!5e1!3m2!1sen!2sph!4v1598472193874!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.061389, 122.205833], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mutbud" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mutbud</p> <p>Elev: 703 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16090.83362923908!2d122.19902302805909!3d11.065576332845248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa51290d83e99%3A0x11f3099f4bd775b2!2sMount%20Mutbud!5e1!3m2!1sen!2sph!4v1598472221301!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1197222, 122.1261111], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igguiwig" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igguiwig</p> <p>Elev: 703 m, Prom: 258 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16087.851445678218!2d122.11735632806369!3d11.119742928356793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afbb9c4b8ed905%3A0x6bfd23334d4817e6!2sMount%20Igguiwig!5e1!3m2!1sen!2sph!4v1598472250189!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.658611, 122.1425], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Upao_(bukid_sa_Pilipinas,_Province_of_Antique)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Upao</p> <p>Elev: 688 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16057.319524144214!2d122.12735632811166!3d11.660020682583024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5650f3dd29f3b%3A0xcd4c5aeabc30832c!2sMount%20Upao!5e1!3m2!1sen!2sph!4v1598472301461!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1844444, 122.1080556], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dararas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dararas</p> <p>Elev: 681 m, Prom: 208 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16084.269261139745!2d122.09930082806923!3d11.184465122969575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afbdb78b7fb79f%3A0x255095e6a6e77412!2sMount%20Dararas!5e1!3m2!1sen!2sph!4v1598472335570!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.8025, 121.96], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tungo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tungo</p> <p>Elev: 662 m, Prom: 122 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16049.158620943123!2d121.9495785281247!3d11.80029847040022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5418554a77969%3A0x34f9fe1c9d68c410!2sMount%20Tungo!5e1!3m2!1sen!2sph!4v1598472374200!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.071667, 122.180833], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tigmaola_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tigmaola Hill</p> <p>Elev: 628 m, Prom: 136 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16090.40630894352!2d122.17207852805974!3d11.073353982201892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afa5315d7e9a37%3A0x293ccf72a1a1aadc!2sTigmaola%20Hill!5e1!3m2!1sen!2sph!4v1598472405025!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0902778, 122.1230556], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bangtong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bangtong</p> <p>Elev: 627 m, Prom: 148 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16089.474313455761!2d122.11430082806118!3d11.09029853079896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afba538c5d0b7b%3A0x34c45695da6da60a!2sMount%20Bangtong!5e1!3m2!1sen!2sph!4v1598472444463!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.809444, 121.962778], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guibulon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guibulon</p> <p>Elev: 608 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16048.247729461304!2d121.94180082812618!3d11.815853919041704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a541a12ed820c5%3A0x710441de0a19ee2!2sMount%20Guibulon!5e1!3m2!1sen!2sph!4v1598472518232!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.983333, 122.116667], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igdurao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igdurao</p> <p>Elev: 589 m, Prom: 109 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16095.332956445212!2d122.10791192805216!3d10.9833540396234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afb16520eac019%3A0x9902ed3452a9fa13!2sMount%20Igdurao!5e1!3m2!1sen!2sph!4v1598472545965!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.775833, 121.985833], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pinapoan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pinapoan</p> <p>Elev: 587 m, Prom: 226 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16050.620085217293!2d121.97680082812238!3d11.775298472580403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5420f165b9ff1%3A0xdc2f58bf233d6399!2sMount%20Pinapoan!5e1!3m2!1sen!2sph!4v1598472572849!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.033333, 122.216667], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guiron" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guiron</p> <p>Elev: 581 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16092.798560868452!2d122.21874522805605!3d11.029742935804444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afaf70e3c2d715%3A0x88bd941f7eb89c6f!2sMount%20Guiron!5e1!3m2!1sen!2sph!4v1598472599361!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0539967, 122.1073639], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Intigban" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Intigban</p> <p>Elev: 579 m, Prom: 466 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16091.33688617176!2d122.0959674280583!3d11.05640963360302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afba0a9e03b2a1%3A0x894b461d0ea5b49!2sMount%20Intigban!5e1!3m2!1sen!2sph!4v1598472627489!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9841667, 122.1213889], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igcoron" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igcoron</p> <p>Elev: 572 m, Prom: 56 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16095.287517816625!2d122.11263412805225!3d10.984187439554905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afb17a68a1d035%3A0x652762cb405b6f5c!2sMount%20Igcoron!5e1!3m2!1sen!2sph!4v1598472659560!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0938238, 122.1487381], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dangulao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dangulao</p> <p>Elev: 563 m, Prom: 291 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16089.275511410351!2d122.1393008280615!3d11.093909630499725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afbb1ef1ef3c3f%3A0xce7b31a8d4119b0f!2sMount%20Dangulao!5e1!3m2!1sen!2sph!4v1598472694785!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1526482, 122.1161107], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pasguala" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pasguala</p> <p>Elev: 561 m, Prom: 76 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16086.5316548607!2d122.0923563280657!3d11.143631826371438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afbc0dd4877ccb%3A0x6b92f5f6ff2103df!2sMount%20Pasguala!5e1!3m2!1sen!2sph!4v1598472719665!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.6956115, 122.0662204], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Junes" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Junes</p> <p>Elev: 544 m, Prom: 189 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16110.804748181825!2d122.05763412802865!3d10.695854062990943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae468dfc7d4b55%3A0xeff96672923010d7!2sMount%20Junes!5e1!3m2!1sen!2sph!4v1598472754857!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9388889, 122.2138889], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Culapnitan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Culapnitan</p> <p>Elev: 541 m, Prom: 71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.751222983097!2d122.20513412804847!3d10.938909593269628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afadb15bbf627d%3A0xb3ab4fda155dec6e!2sMount%20Culapnitan!5e1!3m2!1sen!2sph!4v1598472776816!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9255556, 122.1002778], { icon: bIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taratara" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taratara</p> <p>Elev: 537 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.474809585037!2d122.09152302804736!3d10.925576344361078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afb36e86821951%3A0x718ab7ca0850f01d!2sMount%20Taratara!5e1!3m2!1sen!2sph!4v1598472830120!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8933333, 122.0413889], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Yabangan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Yabangan</p> <p>Elev: 498 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.474809585037!2d122.09152302804736!3d10.925576344361078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae4b2655b57481%3A0xe6b3df441f4c8d23!2sMount%20Yabangan!5e1!3m2!1sen!2sph!4v1598472864598!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0688889, 122.1608333], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igcaratong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igcaratong</p> <p>Elev: 468 m, Prom: 51 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16090.6505270984!2d122.15207852805936!3d11.06890963256957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afbab864b13211%3A0xe510acb2926dd144!2sMount%20Igcaratong!5e1!3m2!1sen!2sph!4v1598474238730!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9327778, 122.2122222], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Hangad" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Hangad</p> <p>Elev: 449 m, Prom: 82 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.082973812956!2d122.20346742804799!3d10.932798543770014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afadae59e3720b%3A0x3f32663836831647!2sMount%20Hangad!5e1!3m2!1sen!2sph!4v1598472947060!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.7842051, 122.1291972], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Poras" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Poras</p> <p>Elev: 420 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16106.064500849563!2d122.12124522803582!3d10.784742955821539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae4e57cfbeb789%3A0xd0c80d117a38cb41!2sMount%20Poras!5e1!3m2!1sen!2sph!4v1598472986692!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9848892, 122.060439], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magarang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangarang</p> <p>Elev: 143 m, Prom: 236 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16095.257231684724!2d122.0515230280523!3d10.984742889509254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afb69f9cce3927%3A0x7d4fc79df4684e97!2sMount%20Magarang!5e1!3m2!1sen!2sph!4v1598473022086!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.46378, 121.9341478], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panulian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palulian</p> <p>Elev: 407 m, Prom: 320 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16123.020068474927!2d121.92485632801042!3d10.463354131508927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae1268311cfe67%3A0x1924091b81c68cdb!2sMount%20Panulian!5e1!3m2!1sen!2sph!4v1598473056547!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.7732789, 121.959406], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tamba" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tamba</p> <p>Elev: 375 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16050.73363274763!2d121.95013412812222!3d11.773353922749822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a54239d7738cd3%3A0x8df4ad7f36414d9c!2sMount%20Tamba!5e1!3m2!1sen!2sph!4v1598473117495!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.983333, 122.1], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maybato" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maybato</p> <p>Elev: 359 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.828665215016!2d122.0818008280377!3d10.807798553953878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae4eb16dc3dc17%3A0x895a14be36637711!2sMount%20Maybato!5e1!3m2!1sen!2sph!4v1598473147193!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.3616667, 122.0863889], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bantayanan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bantayanan Hill</p> <p>Elev: 359 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16074.355497344844!2d122.07763412808472!3d11.361687408084183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af91f6632946f3%3A0x9e0b6eb8b049f6f!2sBantayanan%20Hill!5e1!3m2!1sen!2sph!4v1598473228031!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9191667, 122.0686111], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Yiapo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Yiapo</p> <p>Elev: 348 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.82122198646!2d122.05985632804685!3d10.919187444883672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afb4bc4f0fe55b%3A0xe952d674f056334c!2sMount%20Yiapo!5e1!3m2!1sen!2sph!4v1598473302250!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.2011111, 122.0858333], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patindog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patindog</p> <p>Elev: 331 m, Prom: 89 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16083.343487540178!2d122.07707852807066!3d11.201131771578064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afbde197f2ae27%3A0x51d9e4168b4b4486!2sMount%20Patindog!5e1!3m2!1sen!2sph!4v1598473341754!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.7781356, 121.9498367], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Adiayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Adiayan</p> <p>Elev: 329 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16050.490302317161!2d121.94041192812259!3d11.77752067238677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a542336c6ad86b%3A0x5bd9b083aaa34e5a!2sMount%20Adiayan!5e1!3m2!1sen!2sph!4v1598473385474!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.318049, 123.4310847], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Batuan_Hill_(bungtod_sa_Pilipinas,_Kasadpang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Batuan Hill</p> <p>Elev: 265 m, Prom: 55 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16103.231636004066!2d122.02957852804012!3d10.837520751541259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae4bcd4d27ef33%3A0x63490b3352c8f53c!2sBatuan%20Hill!5e1!3m2!1sen!2sph!4v1598473414639!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8366667, 122.0091667], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igtangitang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igtangitang</p> <p>Elev: 239 m, Prom: 131 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16103.231636004066!2d122.02957852804012!3d10.837520751541259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae4a1bdcad870b%3A0x6afa1cc3935aae13!2sMount%20Igtangitang!5e1!3m2!1sen!2sph!4v1598473441182!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.983333, 122.1], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maybato" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maybato</p> <p>Elev: 234 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.828665215018!2d122.08180082803774!3d10.807798553953885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae4eb16dc3dc17%3A0x895a14be36637711!2sMount%20Maybato!5e1!3m2!1sen!2sph!4v1598473472025!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.4696756, 121.9053562], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Purantok</p> <p>Elev: 169 m, Prom: 169 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16337.262375354943!2d121.89655742222708!3d11.469680840660653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI4JzEwLjgiTiAxMjHCsDU0JzE5LjMiRQ!5e1!3m2!1sen!2sph!4v1598473585328!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.6, 122.016667], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malaban" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manaban</p> <p>Elev: 153 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16116.281155233022!2d121.98902302802043!3d10.592242971285204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae6aabcd61f51d%3A0x9f91b315ec0bde54!2sMount%20Malaban!5e1!3m2!1sen!2sph!4v1598473618384!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.816667, 122.033333], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ubudan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ubudan</p> <p>Elev: 108 m, Prom: 49 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.381338659594!2d122.02152302803837!3d10.816131853278014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae499b1b26e96f%3A0xe5e75dcaf9e04c82!2sMount%20Ubudan!5e1!3m2!1sen!2sph!4v1598473639812!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.7919444, 121.9547222], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/San_Pedro_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>San Pedro Hills</p> <p>Elev: 108 m, Prom: 91 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.381338659594!2d122.02152302803837!3d10.816131853278014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae37ae9e6dadf3%3A0x9d2da61d0d4a265f!2sSan%20Pedro%20Hills!5e1!3m2!1sen!2sph!4v1598473667059!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.4165003, 122.023856], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Tuyong-tuyong Hill</p> <p>Elev: 84 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16530.705808568313!2d122.01368184388521!3d11.415914916524484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af8d1bcb397681%3A0xc20a760d2c2314d1!2sTuyong-tuyong%20Hill!5e1!3m2!1sen!2sph!4v1598473705299!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.2011111, 121.4336111], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Libagao_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Libagao Mountains</p> <p>Elev: 67 m, Prom: 67 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16025.309439648421!2d121.42485632816344!3d12.20113168491293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bad9c337181b57%3A0x1a6bf47e5bd7b263!2sLibagao%20Mountains!5e1!3m2!1sen!2sph!4v1598473758707!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.41344, 122.019661], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Lantawan Hill</p> <p>Elev: 63 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16279.787644478642!2d122.01116781870938!3d11.413330442128025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af8d175d0b5583%3A0xef1ff68f604b0799!2sLantawan%20Hill!5e1!3m2!1sen!2sph!4v1598473807846!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.4145022, 122.0181053], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Luyo Hill</p> <p>Elev: 60 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16441.378751844888!2d122.00873142435564!3d11.413882667552821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af8d1788dba25b%3A0x5ed75885a74503b1!2sLuyo%20Hill!5e1!3m2!1sen!2sph!4v1598473859653!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0302778, 121.4033333], { icon: aIcon })
  .addTo(antiquemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mansucod" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mansucod</p> <p>Elev: 44 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16035.569822911286!2d121.3945785281467!3d12.030298400159795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bac5cd865d3ee3%3A0x110e0d9dad2cf092!2sMount%20Mansucod!5e1!3m2!1sen!2sph!4v1598473893645!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
