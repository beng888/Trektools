var quirinomap = L.map("quirinomap").setView([16.2700424, 121.5370003], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(quirinomap);

L.marker([16.412778, 121.590278], { icon: cIcon })
  .addTo(quirinomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Difun" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Difun</p> <p>Elev: 847 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.258572407096!2d121.53818962869384!3d16.416409001680346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339076b7bd4e071d%3A0x320c9c07c73fef1a!2sMount%20Difun!5e1!3m2!1sen!2sph!4v1598105824798!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([16.346111, 121.777222], { icon: cIcon })
  .addTo(quirinomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dumapata" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dumapata</p> <p>Elev: 660 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.93031244257!2d121.76707852868316!3d16.346131209793135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339a9afaa32b97ad%3A0x8c0176b28c6a94bf!2sMount%20Dumapata!5e1!3m2!1sen!2sph!4v1598105752029!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5, 121.416667], { icon: cIcon })
  .addTo(quirinomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Blanco" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Blanco</p> <p>Elev: 265 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15720.479953609412!2d121.40791192870664!3d16.500020091989448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33906d09f363f86d%3A0xf51af96f6c8e9c4a!2sMount%20Blanco!5e1!3m2!1sen!2sph!4v1598105887223!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
