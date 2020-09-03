var misamisoccidentalmap = L.map("misamisoccidentalmap").setView(
  [8.3374903, 123.7070619],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(misamisoccidentalmap);

L.marker([8.2172868, 123.6364201], { icon: eIcon })
  .addTo(misamisoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malindang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malindang</p> <p>Elev: 2404 m, Prom: 2290 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16227.318353322387!2d123.62791182786981!3d8.217520992838713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3254576c1b5fd2df%3A0x645b46de7a4531c8!2sMount%20Malindang!5e1!3m2!1sen!2sph!4v1599076373808!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.2926934, 123.6306285], { icon: eIcon })
  .addTo(misamisoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Peak_(tumoy_sa_bukid_sa_Pilipinas,_Amihanang_Mindanao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North Peak</p> <p>Elev: 2179 m, Prom: 418 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16224.168078203786!2d123.61930082787359!3d8.294187687857706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3254f824ba74298b%3A0x5a56f85c28dcf117!2sNorth%20Peak!5e1!3m2!1sen!2sph!4v1599076455778!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.1805, 123.637], { icon: dIcon })
  .addTo(misamisoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Peak_(tumoy_sa_bukid_sa_Pilipinas,_Amihanang_Mindanao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>South Peak</p> <p>Elev: 1869 m, Prom: 106 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16228.826044671325!2d123.62818962786807!3d8.180576595225647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325450b92628113d%3A0x6949d6fd05c15522!2sSouth%20Peak!5e1!3m2!1sen!2sph!4v1599076495709!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.3793, 123.6215], { icon: cIcon })
  .addTo(misamisoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ampiro" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ampiro</p> <p>Elev: 1497 m, Prom: 360 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16220.641426853846!2d123.6126341278778!3d8.379187682291636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3254fa7ecf57b7d7%3A0x16d0a11f9088ae80!2sMount%20Ampiro!5e1!3m2!1sen!2sph!4v1599076531038!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.6105, 123.5961], { icon: aIcon })
  .addTo(misamisoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ilijanhill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ilijanhill</p> <p>Elev: 111 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16210.860254799558!2d123.5873563278898!3d8.61057656690722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3254c2dfc24d89f5%3A0xa17f419ffb847e7f!2sIlijanhill!5e1!3m2!1sen!2sph!4v1599076552347!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
