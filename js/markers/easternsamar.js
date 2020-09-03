var easternsamarmap = L.map("easternsamarmap").setView(
  [11.580073, 125.440621],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(easternsamarmap);
L.marker([11.635833, 125.290556], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mactaon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mactaon</p> <p>Elev: 673 m, Prom: 577 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16058.715745712418!2d125.28180082810945!3d11.635853984669442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308f96febd47a7d%3A0xee0cbf00c20f3f1e!2sMount%20Mactaon!5e1!3m2!1sen!2sph!4v1598892282438!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.680278, 125.299167], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pacgem" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pacgem</p> <p>Elev: 609 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16056.145781000614!2d125.29041192811354!3d11.680298430829561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308fea1a5326c43%3A0x8794a9684b394fa8!2sMount%20Pacgem!5e1!3m2!1sen!2sph!4v1598892309888!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.183333, 125.15], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bingo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bingo</p> <p>Elev: 548 m, Prom: 95 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16026.383828318634!2d125.14124522816168!3d12.183353936508068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33099c5deb1538b7%3A0xc8b3fb165b541a70!2sMount%20Bingo!5e1!3m2!1sen!2sph!4v1598892372728!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.725556, 125.355833], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bihag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bihag</p> <p>Elev: 453 m, Prom: 111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16053.517693879818!2d125.34707852811773!3d11.725576226904952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308fd7b1a08c20f%3A0xaebfb49ebb42fe29!2sMount%20Bihag!5e1!3m2!1sen!2sph!4v1598892462604!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.2215833, 125.1424159], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Capoto-on" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Capoto-on</p> <p>Elev: 380 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16024.065246839411!2d125.07207852816549!3d12.221687333066106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33099adf0f529385%3A0x9d2286f6a7c5aeef!2sMount%20Capoto-on!5e1!3m2!1sen!2sph!4v1598892493429!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.566667, 125.35], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lonhi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lonhi</p> <p>Elev: 368 m, Prom: 31 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16062.696028414368!2d125.3412452281031!3d11.566687390620778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308f063056ee179%3A0xab937210aded1c40!2sMount%20Lonhi!5e1!3m2!1sen!2sph!4v1598892522880!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.211111, 125.405833], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Amangsarahacan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Amangsarahacan</p> <p>Elev: 344 m, Prom: 131 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16082.787366803164!2d125.39707852807152!3d11.211131820742317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33089b3b9ec9b415%3A0x5ac09e053693538e!2sMount%20Amangsarahacan!5e1!3m2!1sen!2sph!4v1598892549953!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.2, 125.183333], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Canmaasim" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canmaasim</p> <p>Elev: 342 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16025.376630550592!2d125.17457852816332!3d12.200020635012685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33099d1738c7ecf1%3A0x8acb10910b25b82f!2sMount%20Canmaasim!5e1!3m2!1sen!2sph!4v1598892573729!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.533333, 125.35], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apoy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apoy</p> <p>Elev: 329 m, Prom: 48 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16064.605884137713!2d125.34124522810006!3d11.53335399347824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308f1a90d93aba1%3A0xb2c125ee783d17b6!2sMount%20Apoy!5e1!3m2!1sen!2sph!4v1598892601257!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.933333, 125.266667], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calabanijan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calabanijan</p> <p>Elev: 180 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16041.328989628433!2d125.25791192813736!3d11.933353908731277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330908fb9b641b43%3A0x9414607d6ea5cda3!2sMount%20Calabanijan!5e1!3m2!1sen!2sph!4v1598892626030!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.366667, 125.416667], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Honop" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Honop</p> <p>Elev: 167 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16074.0735677139!2d125.40791192808517!3d11.36668740766137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3308925cb670db0d%3A0x2522a52d8cf5cd22!2sMount%20Honop!5e1!3m2!1sen!2sph!4v1598892660983!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.134722, 125.251389], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Olut</p> <p>Elev: 147 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15953.392466073556!2d125.2426499382933!3d11.134727247428053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDA4JzA1LjAiTiAxMjXCsDE1JzA1LjAiRQ!5e1!3m2!1sen!2sph!4v1598892765529!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.4231058, 125.537479], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Hagunoy</p> <p>Elev: 87 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16090.759793918565!2d125.52872889350364!3d11.423111032476442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI1JzIzLjIiTiAxMjXCsDMyJzE0LjkiRQ!5e1!3m2!1sen!2sph!4v1598892832601!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.7535759, 125.4229951], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magnagua" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magnagua</p> <p>Elev: 73 m, Prom: 67 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16052.094682347777!2d125.40791192812003!3d11.750020674780846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33091d16de68dafb%3A0x3e6e6c3c8ff8fdf6!2sMount%20Magnagua!5e1!3m2!1sen!2sph!4v1598892879813!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0, 125.316667], { icon: aIcon })
  .addTo(easternsamarmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Barayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Barayan</p> <p>Elev: 67 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16037.37346215388!2d125.30791192814377!3d12.000020602843138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33090c658165104f%3A0xe76f8cbede8881f7!2sMount%20Barayan!5e1!3m2!1sen!2sph!4v1598892913822!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
