var surigaodelsurmap = L.map("surigaodelsurmap").setView(
  [8.5404906, 126.1144758],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(surigaodelsurmap);
L.marker([8.716667, 126.05], { icon: aIcon })
  .addTo(surigaodelsurmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Mount_Diwata" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Diuata</p> <p>Elev: 611 m, Prom: 89 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15681.028602821523!2d126.04139493792691!3d8.716672289464103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDMnMDAuMCJOIDEyNsKwMDMnMDAuMCJF!5e1!3m2!1sen!2sph!4v1598972742211!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.9525, 126.259167], { icon: aIcon })
  .addTo(surigaodelsurmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cogwait_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cogwait Hill</p> <p>Elev: 247 m, Prom: 213 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16195.921247192913!2d126.25041192790874!3d8.9525209435507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33023f5935cc2c01%3A0x995098e05d74ad31!2sCogwait%20Hill!5e1!3m2!1sen!2sph!4v1598972813650!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
