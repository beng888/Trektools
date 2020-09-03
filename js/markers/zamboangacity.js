var zamboangacitymap = L.map("zamboangacitymap").setView(
  [6.9214424, 122.0790267],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(zamboangacitymap);

L.marker([7.436111, 122.254167], { icon: bIcon })
  .addTo(zamboangacitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Peak_(bukid_sa_Pilipinas,_Zamboanga_Peninsula)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Peak</p> <p>Elev: 685 m, Prom: 446 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16257.767479341714!2d122.24541192783607!3d7.436132141472861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3251a3dcd2e45f65%3A0x3c17a7c81c12d483!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1599081327972!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.328889, 122.269167], { icon: aIcon })
  .addTo(zamboangacitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maria_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maria</p> <p>Elev: 467 m, Prom: 333 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16261.49694716881!2d122.26207852783223!3d7.3347432474982845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3251a8abe09b3e11%3A0x4c237c301ac8bbeb!2sMount%20Maria!5e1!3m2!1sen!2sph!4v1599081363172!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.291944, 122.281111], { icon: aIcon })
  .addTo(zamboangacitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taguite" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taguite</p> <p>Elev: 420 m, Prom: 242 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16261.49694716881!2d122.26207852783223!3d7.3347432474982845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3251a924ecf3e211%3A0x6a6bfaf87a1df194!2sMount%20Taguite!5e1!3m2!1sen!2sph!4v1599081398278!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.9727431, 122.0719909], { icon: aIcon })
  .addTo(zamboangacitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pulunbato" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pulunbato</p> <p>Elev: 367 m, Prom: 101 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17828.224076806797!2d122.06360645549492!3d6.972267151655387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3250415025a33d8d%3A0x9f886c1ae983dc31!2sMount%20Pulong%20Bato!5e1!3m2!1sen!2sph!4v1599081528018!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.974722, 122.27], { icon: aIcon })
  .addTo(zamboangacitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sacol_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sacol Hill</p> <p>Elev: 225 m, Prom: 225 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16274.327639560395!2d122.26124522781976!3d6.9747433183626235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32505959e420b04d%3A0xc9be5460abd928a7!2sSacol%20Hill!5e1!3m2!1sen!2sph!4v1599081551759!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([7.410833, 122.307778], { icon: aIcon })
  .addTo(zamboangacitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cone_Hill_(bungtod_sa_Pilipinas,_Zamboanga_Peninsula)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cone Hill</p> <p>Elev: 208 m, Prom: 131 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16258.702057052573!2d122.29874522783508!3d7.410854342981222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3251a12b25f689c1%3A0x27daa3113d794910!2sCone%20Hill!5e1!3m2!1sen!2sph!4v1599081589367!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.128611, 122.250278], { icon: aIcon })
  .addTo(zamboangacitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panubigan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panubigan</p> <p>Elev: 170 m, Prom: 157 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16800.214163618348!2d122.24253601935754!3d7.128556859989447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325053ee9703abf3%3A0xc99cb51775a34db6!2sMount%20Panubigan!5e1!3m2!1sen!2sph!4v1599081631342!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.396389, 122.357222], { icon: aIcon })
  .addTo(zamboangacitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tungalip_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tungalip Hill</p> <p>Elev: 63 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16259.214214174155!2d122.34818962783456!3d7.396965443808264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325109fd4d229cd9%3A0x5af89cc2ad30dc5c!2sTungalip%20Hill!5e1!3m2!1sen!2sph!4v1599081658491!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
