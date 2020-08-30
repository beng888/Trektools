var guimarasmap = L.map("guimarasmap").setView([10.5928661, 122.6325081], 10);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(guimarasmap);

L.marker([10.5533963, 122.6212375], { icon: aIcon })
  .addTo(guimarasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bontoc_(bungtod_sa_Pilipinas,_Kasadpang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bontoc</p> <p>Elev: 272 m, Prom: 272 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16118.323039429299!2d122.61207852801742!3d10.553354124380938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aeec84b5a95a1b%3A0x8371e67d37e3163c!2sMount%20Bontoc!5e1!3m2!1sen!2sph!4v1598653534718!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5712864, 122.6140921], { icon: aIcon })
  .addTo(guimarasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dinulman" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dinulman</p> <p>Elev: 269 m, Prom: 125 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16118.323039429299!2d122.61207852801742!3d10.553354124380938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aeec6501e0f8df%3A0x91c9a7c54c2957d!2sMount%20Dinulman!5e1!3m2!1sen!2sph!4v1598653560890!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5541374, 122.5979158], { icon: aIcon })
  .addTo(guimarasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tigbi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tigbi</p> <p>Elev: 244 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16117.3905284882!2d122.60513412801876!3d10.571131872966932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aeecee439a319f%3A0xaf4dbd09433699d7!2sMount%20Tigbi!5e1!3m2!1sen!2sph!4v1598653582792!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5881842, 122.6472162], { icon: aIcon })
  .addTo(guimarasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balacbacan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balacbacan</p> <p>Elev: 219 m, Prom: 89 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16118.279361701285!2d122.58902302801746!3d10.554187474314704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aeebe8ed222ef5%3A0xa730841105bc5bb8!2sMount%20Balacbacan!5e1!3m2!1sen!2sph!4v1598653607127!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5540291, 122.6596073], { icon: aIcon })
  .addTo(guimarasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pandan_(bungtod_sa_Pilipinas,_Kasadpang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pandan</p> <p>Elev: 208 m, Prom: 91 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16118.424939121038!2d122.66346742801727!3d10.551409674535476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aeeb02102eb441%3A0x4d5b4624744e855c!2sMount%20Pandan!5e1!3m2!1sen!2sph!4v1598653635209!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.6145369, 122.6732973], { icon: aIcon })
  .addTo(guimarasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Jaljat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Jaljat</p> <p>Elev: 186 m, Prom: 85 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16115.125668168776!2d122.66457852802216!3d10.614187469534135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee99fdc196613%3A0xae7a1ff135f4a493!2sMount%20Jaljat!5e1!3m2!1sen!2sph!4v1598653660752!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4802947, 122.6044633], { icon: aIcon })
  .addTo(guimarasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Acdan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Acdan</p> <p>Elev: 155 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16122.109875152388!2d122.59541192801177!3d10.48085408012692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ae93a2116ab257%3A0x252f74308e660f8a!2sMount%20Acdan!5e1!3m2!1sen!2sph!4v1598653685504!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.6668456, 122.6618735], { icon: aIcon })
  .addTo(guimarasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sulangon</p> <p>Elev: 139 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16260.880658218188!2d122.65306615521588!3d10.666850857196705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQwJzAwLjYiTiAxMjLCsDM5JzQyLjciRQ!5e1!3m2!1sen!2sph!4v1598653738592!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.6529739, 122.705249], { icon: aIcon })
  .addTo(guimarasmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balagua</p> <p>Elev: 119 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16113.160328784234!2d122.69596742802516!3d10.651409666557061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee817d76017ff%3A0x3692ee8d69fa8423!2sMount%20Bulagua!5e1!3m2!1sen!2sph!4v1598653845659!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.6000461, 122.7016046], { icon: aIcon })
  .addTo(guimarasmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bare_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bare Hill</p> <p>Elev: 46 m, Prom: 26 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16115.871885839402!2d122.69124522802105!3d10.600020770664916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aee9f3cbd7ecef%3A0x318776d7b6df8d25!2sBare%20Hill!5e1!3m2!1sen!2sph!4v1598653901291!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
