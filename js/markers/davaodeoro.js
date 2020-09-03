var davaodeoromap = L.map("davaodeoromap").setView([7.512515, 126.1762615], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(davaodeoromap);
L.marker([7.444433, 126.2267384], { icon: fIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tagub" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagubud</p> <p>Elev: 2636 m, Prom: 2539 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16257.43808446643!2d126.2179118278364!3d7.445021040941472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc0a84d0dd88eb%3A0x1f85f684d352970e!2sMount%20Tagubud!5e1!3m2!1sen!2sph!4v1598984691294!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.305556, 126.285833], { icon: eIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kampalili" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kampalili</p> <p>Elev: 2262 m, Prom: 908 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16262.38848508538!2d126.27180082783137!3d7.310298898941169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fb8d3c6a55f50d%3A0x7654d2c99d6bc27a!2sMount%20Kampalili!5e1!3m2!1sen!2sph!4v1598984721413!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.519866, 126.231011], { icon: dIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Top Mountain</p> <p>Elev: 1839 m, Prom: 270 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17152.044200986446!2d126.22214378050876!3d7.519871303979894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzEnMTEuNSJOIDEyNsKwMTMnNTEuNiJF!5e1!3m2!1sen!2sph!4v1598984830148!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.429696, 126.190364], { icon: dIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Top Mountain</p> <p>Elev: 1688 m, Prom: 66 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16080.695023912505!2d126.18176490314347!3d7.42970130725446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjUnNDYuOSJOIDEyNsKwMTEnMjUuMyJF!5e1!3m2!1sen!2sph!4v1598984916180!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.7977663, 126.2034652], { icon: dIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agtuuganon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agtuuganon</p> <p>Elev: 1627 m, Prom: 1162 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16243.930743982113!2d126.19291192785084!3d7.800854319256015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc3934c21826b7%3A0x3645419ad696247b!2sMount%20Agtuuganon!5e1!3m2!1sen!2sph!4v1598984956218!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8491077, 126.1860936], { icon: cIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pasian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pasian</p> <p>Elev: 1444 m, Prom: 245 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.047678085142!2d126.17735632785292!3d7.849187716248242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc398e338a5181%3A0x3e459c677ca9d763!2sMount%20Pasian!5e1!3m2!1sen!2sph!4v1598984982203!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.877222, 125.673889], { icon: bIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ampaoid" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ampawid</p> <p>Elev: 809 m, Prom: 532 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16240.949335991074!2d125.6651341278542!3d7.877243214495534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe916d3da6a69f%3A0x8b7b955a9c81aa33!2sMount%20Ampaoid!5e1!3m2!1sen!2sph!4v1598985026269!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3942646, 126.0610225], { icon: bIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lake_Leonard_Kniazeff" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Leonard Kniaseff</p> <p>Elev: 803 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16259.776469169406!2d126.03791222783398!3d7.381688044716557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fbf9803b7a735b%3A0xb41bd8a783766a07!2sLeonard%20Kniaseff!5e1!3m2!1sen!2sph!4v1598985084824!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8918217, 125.9543065], { icon: bIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Olagusan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Olagusan</p> <p>Elev: 607 m, Prom: 467 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16240.33867316536!2d125.94652302785487!3d7.892798813521559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc27d470232af9%3A0xbc52473ef460e010!2sMount%20Olagusan!5e1!3m2!1sen!2sph!4v1598985159869!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.85, 125.75], { icon: bIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caunabayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caunabayan</p> <p>Elev: 523 m, Prom: 207 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.882413905176!2d125.91152302785198!3d7.827798817581097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc2754aed70d0f%3A0xd60bf4864321a44c!2sMount%20Caunabayan!5e1!3m2!1sen!2sph!4v1598985188124!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4480532, 125.9301036], { icon: aIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Big_Lingdan_Mountain_Range" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Big Lingdan Mountain</p> <p>Elev: 477 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16260.143884742321!2d125.9209674278336!3d7.371687745310309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fbfd9316ef9b67%3A0xf05a543d9f36b425!2sBig%20Lingdan%20Mountain%20Range!5e1!3m2!1sen!2sph!4v1598985220215!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8194943, 125.8286123], { icon: aIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banbanon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banbanon</p> <p>Elev: 383 m, Prom: 132 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16243.22865153819!2d125.81902302785163!3d7.818909918134158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fe994ab3b2159f%3A0x55439c620e9f563e!2sMount%20Banbanon!5e1!3m2!1sen!2sph!4v1598985256157!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9044444, 126.0102778], { icon: aIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Jaguimitan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Jaguimitan</p> <p>Elev: 328 m, Prom: 79 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.879894394966!2d126.00152302785534!3d7.904465412790081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc2f4ed9d73825%3A0xa010bc3a8e724801!2sMount%20Jaguimitan!5e1!3m2!1sen!2sph!4v1598985284972!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.116667, 125.966667], { icon: aIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tiadatngan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tiadatngan</p> <p>Elev: 194 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16269.345316384377!2d125.95791192782448!3d7.116687760234837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fbdedd9c916071%3A0x2b64f472a4fbdecf!2sMount%20Tiadatngan!5e1!3m2!1sen!2sph!4v1598985330914!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.85, 125.75], { icon: aIcon })
  .addTo(davaodeoromap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caunabayan</p> <p>Elev: 181 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16242.882413905176!2d125.91152302785198!3d7.827798817581097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc2754aed70d0f%3A0xd60bf4864321a44c!2sMount%20Caunabayan!5e1!3m2!1sen!2sph!4v1598985355248!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
