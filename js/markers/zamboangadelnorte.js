var zamboangadelnortemap = L.map("zamboangadelnortemap").setView(
  [8.3886282, 123.1688883],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(zamboangadelnortemap);

L.marker([7.999722, 122.566389], { icon: bIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dansalan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dansalan</p> <p>Elev: 629 m, Prom: 435 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16236.108454173753!2d122.55763412785964!3d7.9997432067839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3253c671e29cbe2b%3A0x7b7a223f0ac785ce!2sMount%20Dansalan!5e1!3m2!1sen!2sph!4v1599076933428!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.5915999, 123.5359], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nanca" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nanca</p> <p>Elev: 498 m, Prom: 401 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16211.668630943424!2d123.52707852788878!3d8.591687668175823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3254c21b064d0ce3%3A0x6b88314789de1ff4!2sMount%20Nanca!5e1!3m2!1sen!2sph!4v1599076959740!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.6499999, 123.4666669], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Canim" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canim</p> <p>Elev: 496 m, Prom: 346 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16209.166497100674!2d123.45791192789189!3d8.65002096425078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3254c0c428a7278b%3A0xabbe0de891793b6c!2sMount%20Canim!5e1!3m2!1sen!2sph!4v1599076988911!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.4784, 123.0821], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Disacan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Disacan</p> <p>Elev: 448 m, Prom: 117 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16216.481883614199!2d123.07346742788285!3d8.478354275739926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32549d568cdeadc7%3A0xc47abe66e5d3b17b!2sMount%20Disacan!5e1!3m2!1sen!2sph!4v1599077019433!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.926389, 122.279722], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Coronado_Peaks" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Coronado Peaks</p> <p>Elev: 405 m, Prom: 116 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.0155989139!2d122.27096742785632!3d7.92640991141185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32522deed8d6cb1f%3A0xcca6c6f1a317bb89!2sCoronado%20Peaks!5e1!3m2!1sen!2sph!4v1599077044110!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.6781182, 123.4887856], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Latugon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Latugon</p> <p>Elev: 402 m, Prom: 176 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16207.94511326741!2d123.48013412789341!3d8.67835426233655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3254c6dde241bc57%3A0xf3bed8a9de7a6bbd!2sMount%20Latugon!5e1!3m2!1sen!2sph!4v1599077083079!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.416667, 123.266667], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gilangilang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gilangilang</p> <p>Elev: 267 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16219.074201733962!2d123.25791192787968!3d8.41668767982144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32548f788505fa49%3A0x602a383185d7f699!2sMount%20Gilangilang!5e1!3m2!1sen!2sph!4v1599077105070!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.6908, 123.4947], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Silla" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Silla</p> <p>Elev: 225 m, Prom: 93 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16207.405006787945!2d123.48596742789408!3d8.690854261490417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3254c6f08378da73%3A0xdfb30ee0de0e2805!2sMount%20Silla!5e1!3m2!1sen!2sph!4v1599077146758!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.45, 123.216667], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guyasan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guyasan</p> <p>Elev: 195 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16217.675281452946!2d123.20791192788138!3d8.450020977618214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325485262b4b6b03%3A0xe9d07c2cad992670!2sMount%20Guyasan!5e1!3m2!1sen!2sph!4v1599077188540!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.751944, 122.1025], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santa_Maria" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santa Maria</p> <p>Elev: 172 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16245.824169754673!2d122.09374522784877!3d7.751965422283229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3251896c73f66635%3A0xebb7c3c610916469!2sMount%20Santa%20Maria!5e1!3m2!1sen!2sph!4v1599077219853!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.5465, 123.4243], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Langtoy_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Langtoy Hill</p> <p>Elev: 159 m, Prom: 129 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16213.599181987744!2d123.41541192788638!3d8.546409871207535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325494dbac8a1fbb%3A0xfe5117d1343c8d95!2sLangtoy%20Hill!5e1!3m2!1sen!2sph!4v1599077249311!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.4498469, 123.2166622], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buyun" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buyun</p> <p>Elev: 143 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16217.675281452946!2d123.20791192788138!3d8.450020977618214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325485262b4b6b03%3A0x31efbfc407d3ea07!2sMount%20Buyun!5e1!3m2!1sen!2sph!4v1599077331904!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.416667, 123.3], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lau" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lau</p> <p>Elev: 117 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16217.675281452946!2d123.20791192788138!3d8.450020977618214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32548fabb17a70ab%3A0xde486b8ce20fc962!2sMount%20Lau!5e1!3m2!1sen!2sph!4v1599077356192!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.416667, 123.316667], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kulun" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kulun</p> <p>Elev: 76 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16219.074201733962!2d123.2912452278797!3d8.416687679821454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32548e598dd3347f%3A0xc937d3e2acf9eeeb!2sMount%20Kulun!5e1!3m2!1sen!2sph!4v1599077380452!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.4815668, 123.0328148], { icon: aIcon })
  .addTo(zamboangadelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Obelisk_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Obelisk Hill</p> <p>Elev: 52 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16216.270874198823!2d123.0245785278831!3d8.483354225407938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32536329db7e4309%3A0x673c05f531009f7!2sObelisk%20Hill!5e1!3m2!1sen!2sph!4v1599077408545!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
