var zamboangasibugaymap = L.map("zamboangasibugaymap").setView(
  [7.5225247, 122.3107517],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(zamboangasibugaymap);

L.marker([7.761667, 122.49], { icon: bIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Quipit_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Quipit Peak</p> <p>Elev: 899 m, Prom: 782 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d259903.83201094635!2d122.35602460854135!3d7.79934139890826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517d82ce69926f%3A0xfdb750f17280b2cb!2sKipit%20Peak!5e1!3m2!1sen!2sph!4v1599080016832!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.775833, 122.502222], { icon: bIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Silingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Silingan</p> <p>Elev: 724 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16244.900206486145!2d122.49346742784975!3d7.775854320805928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3253d7d094061e45%3A0x22227b07f8aa4b58!2sMount%20Silingan!5e1!3m2!1sen!2sph!4v1599080053151!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.701667, 122.353611], { icon: bIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tupilac_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tupilac Peak</p> <p>Elev: 652 m, Prom: 339 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.747427754179!2d122.34457852784665!3d7.701965425363513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3251820729ec0c97%3A0x32a862e44e869617!2sTupilac%20Peak!5e1!3m2!1sen!2sph!4v1599080075439!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.766667, 122.5], { icon: bIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Matanog_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Matanog Peak</p> <p>Elev: 611 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16245.25489858467!2d122.49124522784936!3d7.766687721373226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517d7c5b9b2783%3A0x6a4dcc348aa81b45!2sMatanog%20Peak!5e1!3m2!1sen!2sph!4v1599080105662!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.578611, 122.964167], { icon: bIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kaladis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kaladis</p> <p>Elev: 590 m, Prom: 473 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16252.439733997002!2d122.95541192784165!3d7.5786321328934445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32514e205006d509%3A0xb4843ff6c586e763!2sMount%20Kaladis!5e1!3m2!1sen!2sph!4v1599080129352!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.822222, 122.811111], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kabasalan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kabasalan</p> <p>Elev: 429 m, Prom: 193 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16243.098859700469!2d122.80235632785178!3d7.82224321792682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3253e4019dabeb1f%3A0xda21d1b8ed4ac6d6!2sMount%20Kabasalan!5e1!3m2!1sen!2sph!4v1599080151440!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.6984, 123.007], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tres_Reyes" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tres Reyes</p> <p>Elev: 378 m, Prom: 260 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.88588469245!2d122.99818962784653!3d7.6983543255853615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325155c61e4d9ab9%3A0x80525485bb6678dd!2sMount%20Tres%20Reyes!5e1!3m2!1sen!2sph!4v1599080174395!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7061, 123.0666], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palug" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palug</p> <p>Elev: 353 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.88588469245!2d122.99818962784653!3d7.6983543255853615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325155461692797d%3A0x80d5eb488860f83d!2sMount%20Palug!5e1!3m2!1sen!2sph!4v1599080201077!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.600278, 122.815556], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sibuguey" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sibuguey</p> <p>Elev: 327 m, Prom: 256 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16251.620860555639!2d122.8068008278425!3d7.600298831577629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32515b50e74e7c7f%3A0xa9afcf5db15cd02f!2sMount%20Sibuguey!5e1!3m2!1sen!2sph!4v1599080224209!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.729, 123.0744], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Parang_Parang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Parang Parang</p> <p>Elev: 324 m, Prom: 118 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16246.712283300823!2d123.06568962784779!3d7.728909923705564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3253fff9ebdb4abd%3A0x5e3e2569993fbdb8!2sMount%20Parang%20Parang!5e1!3m2!1sen!2sph!4v1599080246090!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.596944, 122.866111], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Logona" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Logona</p> <p>Elev: 318 m, Prom: 189 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16251.746994682626!2d122.85735632784238!3d7.596965431780262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32515acfeaf38ccb%3A0x40de2cbebb4151a7!2sMount%20Logona!5e1!3m2!1sen!2sph!4v1599080267368!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.683333, 122.466667], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tupilac_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tupilac Hill</p> <p>Elev: 229 m, Prom: 78 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16248.46032442482!2d122.45791192784588!3d7.683354326505993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517beb7fd8341d%3A0xc03e73fc4945f169!2sTupilac%20Hill!5e1!3m2!1sen!2sph!4v1599080292922!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.549167, 122.416389], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cinital" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cinital</p> <p>Elev: 210 m, Prom: 122 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16253.538393057186!2d122.40735632784046!3d7.549465434660001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3251742704f8068d%3A0xc7b91169679a2e82!2sMount%20Cinital!5e1!3m2!1sen!2sph!4v1599080315844!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.6575, 122.442778], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lingatungan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lingatungan Hill</p> <p>Elev: 179 m, Prom: 59 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.44702545312!2d122.43457852784486!3d7.657521028088168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325179812e5bb99f%3A0x238a8e7d26efb57c!2sLingatungan%20Hill!5e1!3m2!1sen!2sph!4v1599080340087!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.720833, 122.512222], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palina" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palina</p> <p>Elev: 175 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.02213708313!2d122.50346742784744!3d7.720854324201723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517ce866c79bfd%3A0xf95c159682269fec!2sMount%20Palina!5e1!3m2!1sen!2sph!4v1599080364598!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.678889, 122.473889], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calula" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calula</p> <p>Elev: 162 m, Prom: 101 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.02213708313!2d122.50346742784744!3d7.720854324201723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517b95ec0cfa0f%3A0x10624318b95dd2e5!2sMount%20Calula!5e1!3m2!1sen!2sph!4v1599080389926!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.731389, 122.900556], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bagong_Silang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bagong Silang</p> <p>Elev: 153 m, Prom: 51 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16246.616057012427!2d122.89180082784794!3d7.731409923551493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325157ff309df0a7%3A0xd6c6afc7e178a2ad!2sBagong%20Silang!5e1!3m2!1sen!2sph!4v1599080471504!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.725833, 122.525556], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Buloan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Buloan Hill</p> <p>Elev: 141 m, Prom: 104 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16246.840535620786!2d122.51707852784764!3d7.725576623910915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517cd9fe429921%3A0x91ed37d2c319ad7f!2sBuloan%20Hill!5e1!3m2!1sen!2sph!4v1599080500734!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.513889, 122.795833], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Labatan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Labatan Hill</p> <p>Elev: 140 m, Prom: 127 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16254.872010295427!2d122.78707852783907!3d7.513909936806179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3251415a6a9573a7%3A0xf907ca4f20a8d421!2sLabatan%20Hill!5e1!3m2!1sen!2sph!4v1599080526050!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.640278, 122.438056], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Capisan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Capisan Hill</p> <p>Elev: 131 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.06071337877!2d122.42346742784416!3d7.641409979072743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325179ec5420c295%3A0x6ddbc7ea86408b98!2sCapisan%20Hill!5e1!3m2!1sen!2sph!4v1599080549669!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.683889, 122.4875], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Utong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Utong Hill</p> <p>Elev: 126 m, Prom: 95 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16248.449695922287!2d122.47874522784589!3d7.683632126488958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517b9c66c82927%3A0xb446ebc2d737ab07!2sUtong%20Hill!5e1!3m2!1sen!2sph!4v1599080574614!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.65, 122.95], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ipacan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ipacan Mountain</p> <p>Elev: 104 m, Prom: 26 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.732868688141!2d122.9412452278445!3d7.6500210285467105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3251512ecfbf22e1%3A0xb1a439bc4bd3c6d!2sIpacan%20Mountain!5e1!3m2!1sen!2sph!4v1599080602204!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.85, 122.766667], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baga</p> <p>Elev: 102 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.015111418037!2d122.75791192785297!3d7.850021016196248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3253e6e32e7ce089%3A0x1674c297510672fb!2sMount%20Baga!5e1!3m2!1sen!2sph!4v1599080635173!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.491944, 122.380278], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Limbaguan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Limbaguan Hill</p> <p>Elev: 98 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.67125069927!2d122.37124522783823!3d7.492521038093362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517538bf2a83c1%3A0xcf62b64b96981a3a!2sLimbaguan%20Hill!5e1!3m2!1sen!2sph!4v1599080658372!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.505556, 122.414722], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tubut_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tubut Hill</p> <p>Elev: 90 m, Prom: 64 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.67125069927!2d122.37124522783823!3d7.492521038093362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325174f03cbe410d%3A0xf510adb7d1e652e1!2sTubut%20Hill!5e1!3m2!1sen!2sph!4v1599080683381!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.571389, 122.476389], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Buhanging-Mahaba_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Buhanging-Mahaba Hill</p> <p>Elev: 88 m, Prom: 73 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16252.733122062387!2d122.46680082784133!3d7.570854333365056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325171114927947d%3A0xa441aceffa09176f!2sBuhanging-Mahaba%20Hill!5e1!3m2!1sen!2sph!4v1599080704650!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.708333, 122.510556], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gango_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Gango Hill</p> <p>Elev: 69 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.512964851103!2d122.50180082784692!3d7.708076624987882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517c94219f4b79%3A0x19d0e0f456144e49!2sGango%20Hill!5e1!3m2!1sen!2sph!4v1599080729050!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.494167, 122.394722], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sucamao_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sucamao Hill</p> <p>Elev: 68 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.588319060114!2d122.38513412783831!3d7.494743237959763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325175224cf49a15%3A0xbde041c6e9c240c9!2sSucamao%20Hill!5e1!3m2!1sen!2sph!4v1599080750437!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.705556, 122.505833], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Silabuya_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Silabuya Hill</p> <p>Elev: 63 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.619561114478!2d122.49735632784682!3d7.705298825158654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517c9057f7863d%3A0x9be14deac84535a9!2sSilabuyo%20Hill!5e1!3m2!1sen!2sph!4v1599080774252!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.700833, 122.507222], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Calanking_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Calanking Hill</p> <p>Elev: 61 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16247.790036468154!2d122.49096742784663!3d7.7008543254317825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517c8444a14e8b%3A0x7f9e479ab82bc3df!2sCalanking%20Hill!5e1!3m2!1sen!2sph!4v1599080833877!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.641944, 122.445556], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bisayan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bisayan Hill</p> <p>Elev: 51 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.007861133869!2d122.4304119278442!3d7.642798828987937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325179f3309d6f37%3A0x3cecdcc7c52b0d0a!2sBisayan%20Hill!5e1!3m2!1sen!2sph!4v1599080860220!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.672778, 122.488611], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Libugan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Libugan Hill</p> <p>Elev: 49 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.007861133869!2d122.4304119278442!3d7.642798828987937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517ba131a3682d%3A0x248dbfa07b8da19d!2sLibugan%20Hill!5e1!3m2!1sen!2sph!4v1599080885533!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.696667, 122.5075], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Looc_Bayabas_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Looc Bayabas Hill</p> <p>Elev: 43 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16248.874501788196!2d122.47957852784543!3d7.672521077170002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32517c9c368e9d6b%3A0x6f2d171c974548be!2sLooc%20Bayabas%20Hill!5e1!3m2!1sen!2sph!4v1599080910980!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.676667, 122.826389], { icon: aIcon })
  .addTo(zamboangasibugaymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Guiwan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Guiwan</p> <p>Elev: 18 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16254.798319877365!2d122.81764151283336!3d7.678305304283864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNDAnNDEuOSJOIDEyMsKwNDknMzUuMCJF!5e1!3m2!1sen!2sph!4v1599081019031!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
