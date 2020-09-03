var siquijormap = L.map("siquijormap").setView([9.1998779, 123.5951925], 11);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(siquijormap);
L.marker([9.1879033, 123.5827028], { icon: bIcon })
  .addTo(siquijormap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malabahoc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malabahoc</p> <p>Elev: 603 m, Prom: 603 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16185.26954838198!2d123.5737452279227!3d9.18863197699098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab17d0ed168853%3A0x35f37463bc649a9c!2sMount%20Malabahoc!5e1!3m2!1sen!2sph!4v1598880408476!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.2191667, 123.6802778], { icon: aIcon })
  .addTo(siquijormap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Daquit_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Daquit Hill</p> <p>Elev: 108 m, Prom: 67 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16183.870998234548!2d123.67152302792461!3d9.21918762482217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab1919e6cf85cf%3A0x7e5d9d75d9fd5301!2sDaquit%20Hill!5e1!3m2!1sen!2sph!4v1598880437665!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.25, 123.5833333], { icon: aIcon })
  .addTo(siquijormap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cudtingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cudtingan</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65099.29423851159!2d123.54832569860011!3d9.250020758733603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ab172fdd4fb657%3A0x40871407e0ef1f85!2sMount%20Cudtingan!5e1!3m2!1sen!2sph!4v1598880507892!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
