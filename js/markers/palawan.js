var palawanmap = L.map("palawanmap").setView([9.4462305, 118.3929417], 7);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(palawanmap);

L.marker([8.8176918, 117.6743772], { icon: eIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mantalingajan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mantalingajan</p> <p>Elev: 2072 m, Prom: 2072 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16201.851388249594!2d117.66624522790109!3d8.818354202803283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234f66826928173%3A0x399eae39cc4cdf9e!2sMount%20Mantalingajan!5e1!3m2!1sen!2sph!4v1598381858025!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.82, 117.68], { icon: eIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mantalingajan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mantaling</p> <p>Elev: 2042 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4050.4447375491795!2d117.67781131482828!3d8.820005294655672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDknMTIuMCJOIDExN8KwNDAnNDguMCJF!5e1!3m2!1sen!2sph!4v1598382038510!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.960278, 117.8175], { icon: dIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gantung" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gantung</p> <p>Elev: 1769 m, Prom: 786 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16195.611888671589!2d117.80874522790911!3d8.95946534306869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234e497161f90ff%3A0xf6cda17676c00a4f!2sMount%20Gantung!5e1!3m2!1sen!2sph!4v1598382108862!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.913056, 117.784722], { icon: dIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Landargun" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Landargun</p> <p>Elev: 1616 m, Prom: 448 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16197.673899066107!2d117.77707852790644!3d8.913076546282753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234fb1dddc443fd%3A0x9371bd2b4a5f9080!2sMount%20Landargun!5e1!3m2!1sen!2sph!4v1598382136371!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1240239, 118.9952343], { icon: dIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cleopatra_Needle" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cleopatra Needle</p> <p>Elev: 1565 m, Prom: 1540 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16140.377344036204!2d118.98596742798505!3d10.123909657934822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5977716fbf07b%3A0x308a76214826117b!2sCleopatra%20Needle!5e1!3m2!1sen!2sph!4v1598382164595!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.201667, 119.034444], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Stripe_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Stripe Peak</p> <p>Elev: 1439 m, Prom: 348 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16136.54877375779!2d119.0240230279906!3d10.199743052094025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b595ef931a7761%3A0xd1af31aa7dfd4874!2sStripe%20Peak!5e1!3m2!1sen!2sph!4v1598382189216!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.9891133, 117.8628429], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calibugon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calibugon</p> <p>Elev: 1432 m, Prom: 307 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16194.309975069378!2d117.85541192791082!3d8.988632041040894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234e3b9bab855df%3A0x8e72cb126209e1d6!2sMount%20Calibugon!5e1!3m2!1sen!2sph!4v1598382222526!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.769444, 117.656667], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maliz" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maliz</p> <p>Elev: 1418 m, Prom: 136 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16204.3898901469!2d117.6545785278979!3d8.760298756771634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323458c319cdfb83%3A0xdea28aea11b3aa38!2sMount%20Maliz!5e1!3m2!1sen!2sph!4v1598382249215!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.3159145, 118.2115919], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/End_Peak_(bukid_sa_Pilipinas,_Mimaropa)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>End Peak</p> <p>Elev: 1375 m, Prom: 1284 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16179.351858904802!2d118.2029119279306!3d9.317243067822446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3235340bff712f1d%3A0x1562048766ee8fd2!2sEnd%20Peak!5e1!3m2!1sen!2sph!4v1598382282540!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.791944, 118.603889], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Thumb_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_9,79,_long_118,60)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Thumb Peak</p> <p>Elev: 1269 m, Prom: 1021 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16156.78972473162!2d118.59430082796165!3d9.792243033054781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ca9c8b52bfb703%3A0x8079e193e81a28b3!2sThumb%20Peak!5e1!3m2!1sen!2sph!4v1598382320027!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.276389, 118.225], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sultan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sultan Peak</p> <p>Elev: 1229 m, Prom: 165 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16181.239523632648!2d118.21624522792807!3d9.276409820744728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323536c1670e0903%3A0xb841dc8aae99e865!2sSultan%20Peak!5e1!3m2!1sen!2sph!4v1598382450131!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.366667, 118.3], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/The_Teeth" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>The Teeth</p> <p>Elev: 1205 m, Prom: 461 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16175.798437914538!2d118.2956896279354!3d9.39363201232728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33cab55e1b6972a9%3A0xef130d3f7aa2f576!2sThe%20Teeth!5e1!3m2!1sen!2sph!4v1598382486482!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1175, 119.1552778], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Escarpado_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Escarpado Peak</p> <p>Elev: 1199 m, Prom: 753 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16140.69860405346!2d119.14652302798459!3d10.117520808425247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5bb69e88fc68f%3A0x3e896d19a56a1cd8!2sEscarpado%20Peak!5e1!3m2!1sen!2sph!4v1598382689084!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.735063, 118.5557364], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Stavely_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Stavely</p> <p>Elev: 1151 m, Prom: 264 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16159.647234775079!2d118.55791192795763!3d9.733354137442475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ca9947ca82a0ab%3A0x5be0c55dcc5293e2!2sMount%20Stavely!5e1!3m2!1sen!2sph!4v1598382765942!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.483333, 118.3], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Brow_Shoulder" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Brow Shoulder</p> <p>Elev: 1148 m, Prom: 181 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16171.588071799672!2d118.29124522794112!3d9.483354155825895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33cab627f24b9537%3A0xa9061dff3d1c1317!2sBrow%20Shoulder!5e1!3m2!1sen!2sph!4v1598382800237!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.0117292, 117.9120331], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Corumi" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Corumi</p> <p>Elev: 1126 m, Prom: 230 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16191.105686480427!2d117.897078527915!3d9.060020886054902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234e039bd5dc503%3A0x2d222b70a8629858!2sMount%20Corumi!5e1!3m2!1sen!2sph!4v1598382832939!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.6416667, 118.4502778], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Anepahan Peaks</p> <p>Elev: 1122 m, Prom: 749 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16164.061272958254!2d118.44152302795148!3d9.641687544228848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33cabd02a474234d%3A0x255acd913d8dc80b!2sAnepahan%20Peaks!5e1!3m2!1sen!2sph!4v1598382860559!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.996111, 118.714167], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Peel_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Peel</p> <p>Elev: 1097 m, Prom: 970 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16146.778244937552!2d118.70596742797582!3d9.99585411771568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b58035cd83de17%3A0x6ef56fe784e77818!2sMount%20Peel!5e1!3m2!1sen!2sph!4v1598382898790!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.811111, 118.637222], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Beaufort_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Beaufort</p> <p>Elev: 1095 m, Prom: 385 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16155.81536458941!2d118.63013412796302!3d9.812243081559638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ca9d3ad9d44dc9%3A0x25be66471abcec91!2sMount%20Beaufort!5e1!3m2!1sen!2sph!4v1598382936864!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.6043263, 117.3686484], { icon: cIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Escapardo_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Escarpado Peak</p> <p>Elev: 1050 m, Prom: 1013 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16211.133397439686!2d117.36180082788943!3d8.60418766733656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32346e2fa70b2fef%3A0xd1c1f4853fcfe52d!2sEscapardo%20Peak!5e1!3m2!1sen!2sph!4v1598382671142!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8021251, 119.2859059], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/High_Nipple" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>High Nipple</p> <p>Elev: 999 m, Prom: 921 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16105.201181573166!2d119.27374522803713!3d10.800854054516774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6642db36e53ef%3A0x56465962506bbd29!2sHigh%20Nipple!5e1!3m2!1sen!2sph!4v1598383026806!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8022736, 119.2864064], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Capoas_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Capoas</p> <p>Elev: 997 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16105.126697228894!2d119.27735632803727!3d10.802242954404234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6642ec6be498d%3A0x80fdd64f1c6a8232!2sMount%20Kapuas!5e1!3m2!1sen!2sph!4v1598383160488!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.802222, 117.753056], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Addison_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Addison Peak</p> <p>Elev: 985 m, Prom: 237 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16202.314169796402!2d117.76818962790051!3d8.80779870352639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234f85a38734ec9%3A0x64fe97cd4118f711!2sAddison%20Peak!5e1!3m2!1sen!2sph!4v1598383213130!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1627081, 118.9083759], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Saint_Paul" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Saint Paul</p> <p>Elev: 985 m, Prom: 740 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16138.445554552603!2d118.89985632798783!3d10.16224305498685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b591004f2e57dd%3A0x42b427d9742dab75!2sMount%20Saint%20Paul!5e1!3m2!1sen!2sph!4v1598383248591!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.7982752, 119.2964134], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/East_Shoulder_(tumoy_sa_bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>East Shoulder</p> <p>Elev: 976 m, Prom: 67 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16105.365009529463!2d119.28735632803688!3d10.797798554764354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b66423585beaa3%3A0x4952508bc7ab61cb!2sEast%20Shoulder!5e1!3m2!1sen!2sph!4v1598383283334!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.634444, 118.571111], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Central_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Central Peak</p> <p>Elev: 975 m, Prom: 522 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16164.40729148769!2d118.562356327951!3d9.634465244761293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33caa22c34bb7c63%3A0x19d56bf856b1d01e!2sCentral%20Peak!5e1!3m2!1sen!2sph!4v1598383323190!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8009685, 119.2838506], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Low_Nipple" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Low Nipple</p> <p>Elev: 965 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.66468735998!2d119.28041192803795!3d10.810854053706114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b66683248a1577%3A0x470474252054d583!2sLow%20Nipple!5e1!3m2!1sen!2sph!4v1598383359910!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.7425182, 117.5908814], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Spike_Peak_(bukid_sa_Pilipinas,_Mimaropa)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Spike Peak</p> <p>Elev: 938 m, Prom: 258 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16205.212229245568!2d117.58207852789685!3d8.741409858058166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32345e596255feab%3A0x4fc18747f75753c1!2sSpike%20Peak!5e1!3m2!1sen!2sph!4v1598383415919!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.070278, 119.149167], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dome_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_10,07,_long_119,15)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dome Peak</p> <p>Elev: 900 m, Prom: 416 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16143.039127926075!2d119.14152302798121!3d10.070854111999722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5a49a7370f6c1%3A0x8c60ed0a35228822!2sDome%20Peak!5e1!3m2!1sen!2sph!4v1598383618883!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.9141882, 117.6657344], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_8,91,_long_117,66)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Peak</p> <p>Elev: 855 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16197.63695202238!2d117.65457852790652!3d8.913909846225133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234f1992ff003a1%3A0x279b14aa1a4a3b6a!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1598384136059!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.225833, 118.250556], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calatugas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calatugas</p> <p>Elev: 821 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16183.565252335673!2d118.24180082792496!3d9.225854224348202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32353778f0154acb%3A0xaf984eac6b3c30ad!2sMount%20Calatugas!5e1!3m2!1sen!2sph!4v1598384349625!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.186111, 118.863333], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bloomfield_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bloomfield</p> <p>Elev: 796 m, Prom: 723 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16136.703582132803!2d118.86291192799035!3d10.19668755233006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b591f07e8698b9%3A0x82396a591588ea0f!2sMount%20Bloomfield!5e1!3m2!1sen!2sph!4v1598384380291!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.510556, 118.467222], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aborlan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aborlan</p> <p>Elev: 780 m, Prom: 443 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16170.289646564974!2d118.45818962794291!3d9.510854153823034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33cab00d96430b2f%3A0x85814adfab0ff5a0!2sMount%20Aborlan!5e1!3m2!1sen!2sph!4v1598384412265!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.9, 117.666667], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Waterfall_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Waterfall Peak</p> <p>Elev: 768 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16198.25231385966!2d117.6579119279057!3d8.900020947184853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234f172d213741f%3A0xefe8257383c067bb!2sWaterfall%20Peak!5e1!3m2!1sen!2sph!4v1598384440385!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.985833, 118.741944], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bahile</p> <p>Elev: 740 m, Prom: 211 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4036.827275501438!2d118.73981861483281!3d9.985160876029147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b58168aa4e4c5b%3A0x898c7cc1c913c38c!2sMt.%20Bahile!5e1!3m2!1sen!2sph!4v1598384490726!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.648907, 117.403113], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Low_Hock" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Low Hock</p> <p>Elev: 698 m, Prom: 62 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16208.950770401556!2d117.41985632789215!3d8.655020963913348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234658c52382729%3A0x99dfddca5e9dee1d!2sLow%20Hock!5e1!3m2!1sen!2sph!4v1598384569806!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4337977, 119.5455631], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ilian" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ilian</p> <p>Elev: 645 m, Prom: 528 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16124.533718330431!2d119.53707852800818!3d10.43418748380801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b42ee5fe5dc603%3A0x78ecbc680853e455!2sMount%20Ilian!5e1!3m2!1sen!2sph!4v1598384601189!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.408333, 119.552222], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baring_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baring</p> <p>Elev: 630 m, Prom: 221 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16125.784722421324!2d119.54263412800637!3d10.410020785708928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b42e5220749aaf%3A0xaa4a395a3ea450c4!2sMount%20Baring!5e1!3m2!1sen!2sph!4v1598384630776!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.7237506, 117.4996315], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pagoda_Cliffs" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tres Marias Cliff</p> <p>Elev: 629 m, Prom: 216 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16205.984589239288!2d117.4918008278959!3d8.723632009266968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234612aefb085c7%3A0x2fffcac482736404!2sPagoda%20Cliffs!5e1!3m2!1sen!2sph!4v1598384711894!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.718611, 117.610833], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cogon_Hill_(bungtod_sa_Pilipinas,_Mimaropa)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cogon Hill</p> <p>Elev: 620 m, Prom: 227 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16206.201531325185!2d117.6020785278956!3d8.718632059606572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32345e9b7bded589%3A0xef2f4a87226bfe63!2sCogon%20Hill!5e1!3m2!1sen!2sph!4v1598384751819!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0292432, 120.2315137], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tundalara" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tundalara</p> <p>Elev: 620 m, Prom: 620 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16035.84465368137!2d120.22685942814624!3d12.025689650568612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba1ec423d6955d%3A0xf7ba3cceeff77cca!2sMount%20Tundalara%20Peak!5e1!3m2!1sen!2sph!4v1598384792531!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.952222, 118.675278], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Airy_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Airy</p> <p>Elev: 617 m, Prom: 395 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16148.939750752474!2d118.66624522797275!3d9.952243021023122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b57fd824989b65%3A0xed4c9a5601aeeb37!2sMount%20Airey!5e1!3m2!1sen!2sph!4v1598384855714!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.683889, 119.365278], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bay_Peak_(tumoy_sa_bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_10,68,_long_119,36)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bay Peak</p> <p>Elev: 604 m, Prom: 465 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16111.482967103726!2d119.35541192802764!3d10.683076364017465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b67cf96a13536d%3A0x5dac7f5dcecf7453!2sBay%20Peak!5e1!3m2!1sen!2sph!4v1598385071238!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0560006, 119.4624103], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Shark_Fin_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Shark Fin Peak</p> <p>Elev: 552 m, Prom: 526 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16091.291157301064!2d119.45457852805836!3d11.05724288353416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6f84b5938e807%3A0x34d2d3e87ecb2b31!2sShark%20Fin%20Peak!5e1!3m2!1sen!2sph!4v1598385531274!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.087126, 120.2837071], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mamapit" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Minangas</p> <p>Elev: 548 m, Prom: 308 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16032.431797264415!2d120.2720785281518!3d12.082798445493497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba2271655fe6ad%3A0x84ea2e74cea85753!2sMount%20Mamapit!5e1!3m2!1sen!2sph!4v1598385562488!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.183333, 118.816667], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sangbauen" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sangbauen</p> <p>Elev: 548 m, Prom: 469 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16137.603395141603!2d118.81096742798904!3d10.178909703702246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b58e50a6751d73%3A0x65de3de950bed321!2sSangbauen!5e1!3m2!1sen!2sph!4v1598385623949!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.378333, 119.513611], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Taradungan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Taradungan Mountain</p> <p>Elev: 547 m, Prom: 452 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16127.405305091259!2d119.50485632800395!3d10.378631888172432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b431ff1ff62509%3A0x3cac8c1e494b2a4b!2sTaradungan%20Mountain!5e1!3m2!1sen!2sph!4v1598385660217!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9236997, 117.0536112], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Balabac_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Balabac Peak</p> <p>Elev: 547 m, Prom: 547 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.113760263082!2d117.04374522785623!3d7.923909911569017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3231490a51269ad7%3A0xbe4f8d9ccc2ff81c!2sBalabac%20Peak!5e1!3m2!1sen!2sph!4v1598385687976!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.233333, 118.283333], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Hill_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_9,23,_long_118,28)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Hill</p> <p>Elev: 544 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16183.221025161627!2d118.27457852792541!3d9.233354173814645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323537e974c9f2d7%3A0x84f484bb45638557!2sSharp%20Hill!5e1!3m2!1sen!2sph!4v1598385781347!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.466667, 118.266667], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Valley_Co" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Valley Cone</p> <p>Elev: 536 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16172.373177616908!2d118.25791192794007!3d9.466687607037418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33cac98fd024649f%3A0xca335ec1916caa80!2sValley%20Cone!5e1!3m2!1sen!2sph!4v1598386001475!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.148056, 118.8225], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bentoan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bentoan Peak</p> <p>Elev: 526 m, Prom: 429 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16138.908157259826!2d118.81568962798715!3d10.153076455692638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b58fa3523feb7b%3A0x3c21c91e89ed925d!2sBentoan%20Peak!5e1!3m2!1sen!2sph!4v1598386038786!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.2945397, 119.5287641], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/East_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>East Peak</p> <p>Elev: 520 m, Prom: 436 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16078.13400193158!2d119.52124522807878!3d11.294465113753496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b704393c29612f%3A0x388f1e07cff69dea!2sEast%20Peak!5e1!3m2!1sen!2sph!4v1598386079570!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.016111, 119.459444], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bacacao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bacacao</p> <p>Elev: 515 m, Prom: 137 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16093.543278733401!2d119.4506896280549!3d11.016131836926373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6f79ec78371a1%3A0x20b918962acc9ba3!2sMount%20Bacacao!5e1!3m2!1sen!2sph!4v1598386118754!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0801293, 120.2994185], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magliliyot" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magliliyat</p> <p>Elev: 507 m, Prom: 64 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16032.681343474045!2d120.29152302815142!3d12.078631695864477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba2280d5539243%3A0x524f46bbc8658092!2sMount%20Magliliyot!5e1!3m2!1sen!2sph!4v1598386145475!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0997343, 120.2476463], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bantag" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bantang</p> <p>Elev: 505 m, Prom: 197 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16031.38279827828!2d120.23902302815353!3d12.100298443934259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba218b2d0de45d%3A0x6d0300cebd5022d7!2sMount%20Bantag!5e1!3m2!1sen!2sph!4v1598386176153!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0827778, 120.2808333], { icon: bIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mamapit" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mamapit</p> <p>Elev: 502 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16032.431797264422!2d120.27207852815185!3d12.082798445493493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba2271655fe6ad%3A0x84ea2e74cea85753!2sMount%20Mamapit!5e1!3m2!1sen!2sph!4v1598386200720!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.1786374, 117.9990059], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Malanut_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malanut Peak</p> <p>Elev: 495 m, Prom: 390 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16184.901283322313!2d117.96902302792317!3d9.196687626419777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323526fbf8d400cb%3A0xcf89189fdd8133c6!2sMalanut%20Peak!5e1!3m2!1sen!2sph!4v1598386272552!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.723333, 117.424722], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Double_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_8,72,_long_117,42)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Double Peak</p> <p>Elev: 495 m, Prom: 392 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16117.623799729432!2d119.60791192801845!3d10.566687473320606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b69d25c1f24403%3A0xe090255040385f41!2sDouble%20Peak!5e1!3m2!1sen!2sph!4v1598386356017!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.916667, 117.066667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Bay_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North Bay Hill</p> <p>Elev: 479 m, Prom: 99 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.726817196579!2d117.05346742785554!3d7.908354312546056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323149912e4243f7%3A0xe41b20c72c0f8c1f!2sNorth%20Bay%20Hill!5e1!3m2!1sen!2sph!4v1598386410568!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8266521, 119.2832043], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Low_Capoas" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Low Capoas Peak</p> <p>Elev: 477 m, Prom: 99 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16103.814231316048!2d119.2745785280392!3d10.826687452421266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6668b71ed444d%3A0xee772e41a81d4c9a!2sLow%20Capoas!5e1!3m2!1sen!2sph!4v1598386443089!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.921389, 117.0675], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/False_Balabac_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>False Balabac Peak</p> <p>Elev: 476 m, Prom: 52 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.310944255487!2d117.05318962785599!3d7.918909911883234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3231499dd4ffeaf1%3A0x644cc12d42065365!2sFalse%20Balabac%20Peak!5e1!3m2!1sen!2sph!4v1598386483659!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1697086, 119.4506879], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ynantagung" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ynantagung</p> <p>Elev: 476 m, Prom: 359 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16085.055095719426!2d119.44374522806804!3d11.170298524150994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6ffb9fe9e8bfb%3A0x17bbb8736f6fbaba!2sMount%20Ynantagung!5e1!3m2!1sen!2sph!4v1598386562281!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.729722, 120.029167], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Oltaloro" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Oltaloro</p> <p>Elev: 468 m, Prom: 468 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16053.307657994214!2d120.02096742811807!3d11.729187376591396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b756e5320579ad%3A0x51457b6b8d9da3bf!2sMount%20Oltaloro!5e1!3m2!1sen!2sph!4v1598386588170!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.916667, 118.65], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Herschel_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Herschel</p> <p>Elev: 463 m, Prom: 200 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16150.695071915801!2d118.64124522797026!3d9.916687523710761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ca81ecd38008cb%3A0xcc824312902a1c13!2sMount%20Herschel!5e1!3m2!1sen!2sph!4v1598386650566!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9203679, 119.4516808], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Omid_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Omid Peak</p> <p>Elev: 461 m, Prom: 309 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16099.6487875677!2d119.42735632804559!3d10.903909646132321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6f57208a2d8ed%3A0x52507ed8ce634747!2sOmid%20Peak!5e1!3m2!1sen!2sph!4v1598386683124!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0414574, 119.543138], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Silanga_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Silanga Peak</p> <p>Elev: 459 m, Prom: 441 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16092.220396405655!2d119.53513412805694!3d11.040298534933573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6fa68eb97738b%3A0xd5f6d259c2498e84!2sSilanga%20Peak!5e1!3m2!1sen!2sph!4v1598386727619!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1639524, 119.2085095], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caramay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caramay</p> <p>Elev: 458 m, Prom: 211 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16138.378003914264!2d119.19642442798794!3d10.1635809048838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5ba230604b2ff%3A0x7b0461d4888ee33e!2sMount%20Caramay!5e1!3m2!1sen!2sph!4v1598386754130!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.833333, 117.566667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gap_Hill_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Gap Hill</p> <p>Elev: 455 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16201.058505149573!2d117.55346742790212!3d8.836409851564746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234f527f71c903b%3A0xec3a428dfcba969a!2sGap%20Hill!5e1!3m2!1sen!2sph!4v1598386790872!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.05, 118.733333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Karsoglan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Karsoglan Hill</p> <p>Elev: 452 m, Prom: 236 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16144.0805447528!2d118.72457852797969!3d10.05002081359104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b58131bbc4db6b%3A0x999d5348daabf86c!2sKarsoglan%20Hill!5e1!3m2!1sen!2sph!4v1598386843125!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9723247, 120.0726996], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sangat_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sangat Island high point</p> <p>Elev: 449 m, Prom: 449 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32077.55771865622!2d120.0562761728949!3d11.976375838517944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9f729a29ab94b%3A0xac25f81cca9761e7!2sSangat%20Island!5e1!3m2!1sen!2sph!4v1598386876688!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>  '
  );
L.marker([10.916667, 119.366667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bay_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_10,92,_long_119,37)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bay Peak</p> <p>Elev: 445 m, Prom: 326 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.85133770078!2d119.36041192804677!3d10.918631844929102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65e55048dcb7d%3A0x5c65a52243896158!2sBay%20Peak!5e1!3m2!1sen!2sph!4v1598385268506!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.383333, 119.516667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bay_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_10,38,_long_119,52)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bay Peak</p> <p>Elev: 443 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16127.161811156808!2d119.50791192800432!3d10.383354087802207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b42e022021ec65%3A0xebff092776d7cafa!2sBay%20Peak!5e1!3m2!1sen!2sph!4v1598385030541!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.216667, 119.366667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Loggerhead_Peaks" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Loggerhead Peaks</p> <p>Elev: 436 m, Prom: 436 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16082.452275190664!2d119.34508322807206!3d11.217153120238796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b7ab39f4598b93%3A0xcfd15d655a8bf279!2sLoggerhead%20Peaks!5e1!3m2!1sen!2sph!4v1598386923995!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.072222, 118.016944], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pyramid_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pyramid Hill</p> <p>Elev: 431 m, Prom: 304 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16190.542037907544!2d118.00791192791573!3d9.072520885178552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32351f5313c0a921%3A0x44e5ac94a8c8592f!2sPyramid%20Hill!5e1!3m2!1sen!2sph!4v1598386978590!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.866667, 120.0], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Chinankan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Chinankan</p> <p>Elev: 431 m, Prom: 406 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16045.27914030086!2d119.99124522813096!3d11.866409514616086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9fb604b2400d7%3A0x44d95b301be39a4c!2sMount%20Chinankan!5e1!3m2!1sen!2sph!4v1598387004402!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9625, 119.375556], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Meacac_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Meacac Mountain</p> <p>Elev: 428 m, Prom: 212 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16096.029195749454!2d119.35068962805109!3d10.970576340672945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6593025c61ad3%3A0xf35316e1342f5083!2sMeacac%20Mountain!5e1!3m2!1sen!2sph!4v1598387031203!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.416667, 119.533333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Round_Hill_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_10,42,_long_119,53)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Round Hill</p> <p>Elev: 402 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16125.43990313163!2d119.52457852800684!3d10.416687485184898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b42e60a2c0171f%3A0xeb6a117bb25af55e!2sRound%20Hill!5e1!3m2!1sen!2sph!4v1598387116866!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0369282, 120.1976583], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banga" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banga</p> <p>Elev: 401 m, Prom: 249 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16035.188662954612!2d120.18652302814729!3d12.036687349592853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba1e50410cd1cd%3A0xb98e08eafa6bfb97!2sMount%20Banga!5e1!3m2!1sen!2sph!4v1598387273367!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.147222, 118.061111], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aboabo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aboabo</p> <p>Elev: 396 m, Prom: 156 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16187.131324249021!2d118.05152302792024!3d9.147798729880057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3235238382d079c3%3A0xeab71ac25b3a4969!2sMount%20Aboabo!5e1!3m2!1sen!2sph!4v1598387298851!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9870845, 119.2780154], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Tuluran_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>South Tuluran Peak</p> <p>Elev: 396 m, Prom: 178 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16095.120896739014!2d119.2693008280525!3d10.987242939303759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65b758cd23737%3A0x21d4d128255f7191!2sSouth%20Tuluran%20Peak!5e1!3m2!1sen!2sph!4v1598387324666!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0018327, 119.2832802], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Tuluran_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North Tuluran Peak</p> <p>Elev: 396 m, Prom: 396 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16094.16571321866!2d119.28041192805394!3d11.004742937864242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65bae094be863%3A0xc207f0b8e3b26f77!2sNorth%20Tuluran%20Peak!5e1!3m2!1sen!2sph!4v1598387358638!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.878889, 117.054722], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Transept_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Transept Hill</p> <p>Elev: 393 m, Prom: 319 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16240.84037629554!2d117.04541192785426!3d7.880021014321712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323136204bba8f81%3A0x1b775c6c6f51c3c0!2sTransept%20Hill!5e1!3m2!1sen!2sph!4v1598387382578!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.183889, 119.281944], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Horn_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Horn</p> <p>Elev: 389 m, Prom: 389 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16084.300093768357!2d119.27318962806919!3d11.183909623015929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6531cda46a883%3A0xae25dc616280d517!2sMount%20Horn!5e1!3m2!1sen!2sph!4v1598387410361!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5725, 119.622778], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Big_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_10,57,_long_119,62)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Big Peak</p> <p>Elev: 386 m, Prom: 343 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16117.332195524963!2d119.61374522801889!3d10.572242972878485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b69cdf605f55b9%3A0xb77350cb7fac4ad2!2sBig%20Peak!5e1!3m2!1sen!2sph!4v1598387603205!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1152778, 120.2383333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kagulo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kagulo</p> <p>Elev: 382 m, Prom: 187 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16030.48246895157!2d120.22957852815499!3d12.115298392596259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba219b4007e89f%3A0xe6e75083086aebeb!2sMount%20Kagulo!5e1!3m2!1sen!2sph!4v1598387738401!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.975833, 119.323611], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Strait_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Strait Peak</p> <p>Elev: 377 m, Prom: 281 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16095.817385126404!2d119.31485632805145!3d10.974465140353637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65bfd6cb63fd5%3A0x5497d5d0213e9da3!2sStrait%20Peak!5e1!3m2!1sen!2sph!4v1598387789547!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.966667, 119.366667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Northeast_Bay_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Northeast Bay Peak</p> <p>Elev: 376 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16096.482839962524!2d119.36680082805042!3d10.9622429413569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b658d4ec39951f%3A0x4fc17a675a00fd20!2sNortheast%20Bay%20Peak!5e1!3m2!1sen!2sph!4v1598385496418!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5004855, 119.6240812], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Drake_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Drake Peak</p> <p>Elev: 372 m, Prom: 255 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16121.082292123205!2d119.61485632801327!3d10.500576378567104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b427c88b0602d9%3A0x3775da04feb20b97!2sDrake%20Peak!5e1!3m2!1sen!2sph!4v1598387817585!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.6109085, 118.682498], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Southwest_Hill_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Southwest Hill</p> <p>Elev: 370 m, Prom: 199 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16166.053977928203!2d118.67457852794873!3d9.600020897296044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b55f5d6756d827%3A0x1bc3ee6532b0e2a9!2sSouthwest%20Hill!5e1!3m2!1sen!2sph!4v1598387854854!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0494774, 120.0792359], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Culion" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Culion</p> <p>Elev: 366 m, Prom: 330 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16034.492127905145!2d120.06957852814843!3d12.048353948556922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9f46fe3144f53%3A0x1645e2c6fe797797!2sMount%20Culion!5e1!3m2!1sen!2sph!4v1598387917955!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9, 119.45], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Omid_Shoulder" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Omid Shoulder</p> <p>Elev: 363 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16099.85925814823!2d119.44013412804526!3d10.90002074644992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6f511a6ec354b%3A0x5b988ea244fa5842!2sOmid%20Shoulder!5e1!3m2!1sen!2sph!4v1598390946820!5m2!1sen!2sph" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0072222, 120.2858333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tabuchi" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tabuchi</p> <p>Elev: 361 m, Prom: 194 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16036.943644627936!2d120.27707852814446!3d12.007242802203594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba196e283d60e1%3A0xd1d0377defd87014!2sMount%20Tabuchi!5e1!3m2!1sen!2sph!4v1598390976004!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1241667, 120.2727778], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mapulang_Kamay" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mapulang Kamay</p> <p>Elev: 353 m, Prom: 169 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16029.948416548154!2d120.26402302815583!3d12.124187341802688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba23c9bf322397%3A0x3faa19b15c4828a0!2sMount%20Mapulang%20Kamay!5e1!3m2!1sen!2sph!4v1598391030086!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0260689, 119.3693739], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maateg" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maateg</p> <p>Elev: 351 m, Prom: 338 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16092.996227143272!2d119.36207852805576!3d11.02613183610221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b659cb4fe60099%3A0xa945004ea32950d8!2sMount%20Maateg!5e1!3m2!1sen!2sph!4v1598391099669!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.066667, 119.133333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_10,07,_long_119,13)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Peak</p> <p>Elev: 345 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16143.580927746618!2d119.13402302798046!3d10.060020862827544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5a480e4c3d543%3A0xd52d0f386dbac9ee!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1598384110284!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0118326, 120.2583631], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calindo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calindo</p> <p>Elev: 342 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16036.943644627936!2d120.27124522814445!3d12.007242802203596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba1968d51bf665%3A0xd4775cc5320d4608!2sMount%20Calindo!5e1!3m2!1sen!2sph!4v1598391138240!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.012222, 118.841389], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Conical_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Conical Hill</p> <p>Elev: 338 m, Prom: 277 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16145.963537692372!2d118.83263412797699!3d10.012243066469662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b58323ee3fbd15%3A0x39103e0700ebb8e5!2sConical%20Hill!5e1!3m2!1sen!2sph!4v1598391166718!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.983333, 119.316667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Liminangcong_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Liminangcong Peak</p> <p>Elev: 334 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16095.02998975071!2d119.31096742805265!3d10.988909639166746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65bde7c6f9b0b%3A0x4b0a693e114640ea!2sLiminangcong%20Peak!5e1!3m2!1sen!2sph!4v1598391193512!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1108333, 120.0458333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Puldulan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Puldulan</p> <p>Elev: 333 m, Prom: 197 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16030.749351966695!2d120.03707852815452!3d12.110853892992857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b98cb65a75b7bb%3A0x6e5996983c071baa!2sMount%20Puldulan!5e1!3m2!1sen!2sph!4v1598391218195!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1706152, 119.4103026], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bubulugan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bubulugan</p> <p>Elev: 333 m, Prom: 233 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16084.993497498495!2d119.40152302806811!3d11.171409624058374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65564f1f19987%3A0xd37d956fb0aa517c!2sMount%20Bubulugan!5e1!3m2!1sen!2sph!4v1598391313268!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1052778, 120.2030556], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kalebaong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kalebaong</p> <p>Elev: 333 m, Prom: 239 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16031.082809584588!2d120.19430082815398!3d12.105298443488413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba2035631402e7%3A0xa439f9ae0c792464!2sMount%20Kalebaong!5e1!3m2!1sen!2sph!4v1598391348548!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0161982, 119.3209843], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Anato_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Anato Peak</p> <p>Elev: 328 m, Prom: 156 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16093.604031374638!2d119.31402302805482!3d11.01502073701791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65a285b3f00fb%3A0xd6dfa7bd580e7540!2sAnato%20Peak!5e1!3m2!1sen!2sph!4v1598391393425!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.933333, 119.266667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Chinongab_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Chinongab Peak</p> <p>Elev: 327 m, Prom: 223 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.293995341388!2d119.25624522804763!3d10.92890964408832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65d1ce3bd1d11%3A0x30f1859f979643d5!2sChinongab%20Peak!5e1!3m2!1sen!2sph!4v1598391421556!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1033333, 120.22], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dependak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dependak</p> <p>Elev: 326 m, Prom: 228 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16031.19949269473!2d120.21124522815383!3d12.103353893661824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba21c77db42ced%3A0x141c563549dc4f4e!2sMount%20Dependak!5e1!3m2!1sen!2sph!4v1598391457236!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.898611, 119.265], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Olongo_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Olongo Peak</p> <p>Elev: 325 m, Prom: 195 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16099.949438666274!2d119.25596742804512!3d10.898354046586011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65d64fb287abb%3A0x64decc9b90102a3!2sOlongo%20Peak!5e1!3m2!1sen!2sph!4v1598391491816!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1711111, 119.6133333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bancuan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bancuan Mountain</p> <p>Elev: 325 m, Prom: 325 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16085.008899006825!2d119.6045785280681!3d11.171131824081534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6e2af12276455%3A0x7458ed00ef829d5e!2sBancuan%20Mountain!5e1!3m2!1sen!2sph!4v1598391530476!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9575, 119.2883333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pinanginan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinanginan Mountain</p> <p>Elev: 323 m, Prom: 147 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16096.739750604936!2d119.27957852805001!3d10.957520741744272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65c650e87a753%3A0x6c5a290e87e67e4d!2sPinanginan%20Mountain!5e1!3m2!1sen!2sph!4v1598391579223!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.966667, 119.283333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Chinayan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Chinayan Peak</p> <p>Elev: 322 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16095.998943962726!2d119.27541192805116!3d10.971131840627343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65b80b464980d%3A0xed6648a60f4a20e2!2sChinayan%20Peak!5e1!3m2!1sen!2sph!4v1598391619763!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.916667, 119.233333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Saddle_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Saddle Hill</p> <p>Elev: 321 m, Prom: 301 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65d3523213529%3A0x2d0dd9e147486168!2sSaddle%20Hill!5e1!3m2!1sen!2sph!4v1598391661342!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0569444, 120.3122222], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taguiptip" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taguiptip</p> <p>Elev: 319 m, Prom: 169 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba186ed35de6eb%3A0x8f4d35067604ffba!2sMount%20Taguiptip!5e1!3m2!1sen!2sph!4v1598391693108!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0819444, 120.0772222], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kuluban" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kuluban</p> <p>Elev: 319 m, Prom: 204 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9f4a2da25f399%3A0x4ec0829b40ff5a9d!2sMount%20Kuluban!5e1!3m2!1sen!2sph!4v1598391729570!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.45, 119.1], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Queens_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Queens Peak</p> <p>Elev: 308 m, Prom: 190 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5dce43f79cd25%3A0xa728b0ba98991055!2sQueens%20Peak!5e1!3m2!1sen!2sph!4v1598391768301!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1008333, 120.2625], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Digabulao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Digabulao</p> <p>Elev: 307 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba2222d5c4c0d7%3A0x108dc2b0f6d41209!2sMount%20Digabulao!5e1!3m2!1sen!2sph!4v1598391821828!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.15, 117.933333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nipple_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nipple</p> <p>Elev: 306 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323520a39c83d573%3A0x44b6919e859dba43!2sNipple!5e1!3m2!1sen!2sph!4v1598391875804!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.133333, 118.816667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tagnipa" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tagnipa</p> <p>Elev: 306 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5857e7881b631%3A0x28c16ef0df1f9829!2sTagnipa!5e1!3m2!1sen!2sph!4v1598391914039!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.566667, 119.616667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Double_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_10,57,_long_119,62)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Double Peak</p> <p>Elev: 301 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b69d25c1f24403%3A0xe090255040385f41!2sDouble%20Peak!5e1!3m2!1sen!2sph!4v1598392123538!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0291667, 120.0908333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Glinoga" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Glinoga</p> <p>Elev: 301 m, Prom: 71 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9f43d7271bd33%3A0x33ae984d3f76306a!2sMount%20Glinoga!5e1!3m2!1sen!2sph!4v1598392188858!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1222222, 120.2033333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lele" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lele</p> <p>Elev: 300 m, Prom: 126 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba2054eb8c1ee9%3A0xdd6a2e421979b0e9!2sMount%20Lele!5e1!3m2!1sen!2sph!4v1598392248813!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.0525, 118.824167], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Harbor_Hill_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Harbor Hill</p> <p>Elev: 288 m, Prom: 174 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b584ccf15fff93%3A0xe6e0b38a66843cc!2sHarbor%20Hill!5e1!3m2!1sen!2sph!4v1598392295611!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.883333, 119.383333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Village_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Village Peak</p> <p>Elev: 286 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b66075fc5f7d0f%3A0x4428b89e0795fd62!2sVillage%20Peak!5e1!3m2!1sen!2sph!4v1598392324330!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.516667, 119.416667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bancalon_Hill_(bungtod_sa_Pilipinas,_lat_10,52,_long_119,42)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bancalon Hill</p> <p>Elev: 285 m, Prom: 125 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b5d52b4176161d%3A0x2f5f77e9d047dafa!2sBancalon%20Hill!5e1!3m2!1sen!2sph!4v1598392499094!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1164546, 118.7500051], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North Hill</p> <p>Elev: 285 m, Prom: 213 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b7092899a867a5%3A0x27838282eaf059f8!2sNorth%20Hill!5e1!3m2!1sen!2sph!4v1598392536356!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.844444, 117.02], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Bay_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>South Bay Hill</p> <p>Elev: 283 m, Prom: 131 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3231363f237c799b%3A0x7b8c4e35ea76be75!2sSouth%20Bay%20Hill!5e1!3m2!1sen!2sph!4v1598392575593!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.611667, 117.290833], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Canipan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Canipan Hill</p> <p>Elev: 279 m, Prom: 229 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323471189747c39d%3A0x769f01c89a57b2ad!2sCanipan%20Hill!5e1!3m2!1sen!2sph!4v1598392602135!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.883333, 119.366667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mipale_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mipale peak</p> <p>Elev: 278 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65fd4ee091e0d%3A0xc94d4c739d4041d4!2sMipale%20Peak!5e1!3m2!1sen!2sph!4v1598392658164!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9627778, 119.3183333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cliff_Shoulder" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cliff Shoulder</p> <p>Elev: 276 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65c06c7833cb3%3A0x454f7dd805d2db3!2sCliff%20Shoulder!5e1!3m2!1sen!2sph!4v1598392677938!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1161111, 120.0294444], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kilien" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kilien</p> <p>Elev: 273 m, Prom: 180 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b98cda824c18dd%3A0xe72bc74731e361d!2sMount%20Kilien!5e1!3m2!1sen!2sph!4v1598392721890!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.116667, 118.816667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kapsuegsan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kapsuegsan</p> <p>Elev: 271 m, Prom: 144 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b585791e451447%3A0xa5e463bbc67e8872!2sKapsuegsan!5e1!3m2!1sen!2sph!4v1598392775825!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.916667, 119.266667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tozera_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tozera Peak</p> <p>Elev: 270 m, Prom: 122 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65d0fa03a56f1%3A0x7fc2c987f641941b!2sTozera%20Peak!5e1!3m2!1sen!2sph!4v1598392800595!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1582491, 120.9732113], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Boctong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Boctong</p> <p>Elev: 270 m, Prom: 270 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b0573ad70138d5%3A0x2d5b53cf91e327f2!2sMount%20Boctong!5e1!3m2!1sen!2sph!4v1598392866617!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.960556, 119.341667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Vampire_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Vampire Hill</p> <p>Elev: 268 m, Prom: 93 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65ea92156dd4f%3A0x225effccd27b866c!2sVampire%20Hill!5e1!3m2!1sen!2sph!4v1598392899360!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.7563889, 119.335], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Malolongcolongon_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malolongcolongon Mountain</p> <p>Elev: 268 m, Prom: 187 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6637a4086ca15%3A0xe3997927db149077!2sMalolongcolongon%20Mountain!5e1!3m2!1sen!2sph!4v1598392954297!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.457222, 117.239444], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Wangle" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Wangle</p> <p>Elev: 258 m, Prom: 194 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32340b735980f2a1%3A0x3b5c009e626d50f4!2sMount%20Wangle!5e1!3m2!1sen!2sph!4v1598392992339!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.7852778, 119.3247222], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bolawit_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bolawit Hill</p> <p>Elev: 254 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6640a9f4595b9%3A0x32a501bc4c0d97d3!2sBolawit%20Hill!5e1!3m2!1sen!2sph!4v1598393017430!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.2195213, 120.2116622], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buyod_Maliit" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buyod Maliit</p> <p>Elev: 252 m, Prom: 229 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16024.216677061133!2d120.2034674281652!3d12.21918733329086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba264e8b168aa1%3A0x1583b66c6eaf510d!2sMount%20Buyod%20Maliit!5e1!3m2!1sen!2sph!4v1598393208429!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8993553, 121.0711593], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bonbon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bonbon</p> <p>Elev: 252 m, Prom: 252 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16099.994521111463!2d121.06096742804503!3d10.897520746654049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b1ae2d33f36485%3A0x5f750918a3a6ac53!2sMount%20Bonbon!5e1!3m2!1sen!2sph!4v1598393241987!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.633333, 118.35], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Long_Point_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Long Point Hill</p> <p>Elev: 249 m, Prom: 147 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16164.460498811744!2d118.34124522795095!3d9.633354194843168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33cabee1107b1677%3A0xd841cf6a31029e4c!2sLong%20Point%20Hill!5e1!3m2!1sen!2sph!4v1598393302410!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.900556, 119.401111], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pancol_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pancol Peak</p> <p>Elev: 248 m, Prom: 52 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16099.844225835519!2d119.37680082804528!3d10.900298546427237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65fb85c3616f1%3A0x76aa6c7280720a8e!2sPancol%20Peak!5e1!3m2!1sen!2sph!4v1598393333727!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.2442048, 120.9326016], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dit_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dit</p> <p>Elev: 248 m, Prom: 248 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16080.92885687497!2d120.92522082807444!3d11.244487467950131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b058e4f4f5e1c5%3A0x4ae2c0117e2929b6!2sDiit%20Island!5e1!3m2!1sen!2sph!4v1598393462698!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.29, 119.6744444], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pinamalayan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinamalayan Mountain</p> <p>Elev: 246 m, Prom: 246 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16078.383037693187!2d119.6656896280784!3d11.290020714127323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b71bca60c70eb7%3A0xd17f86557467abc1!2sPinamalayan%20Mountain!5e1!3m2!1sen!2sph!4v1598393522838!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5097222, 119.8205556], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Olo_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Olo</p> <p>Elev: 245 m, Prom: 245 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16065.955405555602!2d119.81180082809794!3d11.509742895498066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b7404f7e297995%3A0xa20c3c210d36f623!2sMount%20Olo!5e1!3m2!1sen!2sph!4v1598393568992!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.077778, 118.095], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Crawford_Hill_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Crawford Hill</p> <p>Elev: 244 m, Prom: 165 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16190.328902197198!2d118.08541192791601!3d9.077243134847226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323522a156d5e6e5%3A0x88ed7f6db54ccd5d!2sCrawford%20Hill!5e1!3m2!1sen!2sph!4v1598393625107!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.983333, 119.35], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pig_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pig Hill</p> <p>Elev: 243 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16094.772352355849!2d119.34346742805302!3d10.993631838778445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6590d895058df%3A0x398c5f8c858fdc7!2sPig%20Hill!5e1!3m2!1sen!2sph!4v1598393663913!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.043056, 119.348889], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Flat_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Flat Hill</p> <p>Elev: 241 m, Prom: 107 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16092.068156507059!2d119.34013412805716!3d11.043076334704297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b659dfe78d7671%3A0xaaf4014b015e9994!2sFlat%20Hill!5e1!3m2!1sen!2sph!4v1598393707975!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.3408333, 119.4552778], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Locaroc_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Locaroc Mountain</p> <p>Elev: 240 m, Prom: 191 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16075.528890225554!2d119.4465230280829!3d11.340854009844229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b707c8ddfcf027%3A0xb0a0b88f982b2b12!2sLocaroc%20Mountain!5e1!3m2!1sen!2sph!4v1598393783004!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9419444, 119.235], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cabayotan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cabayotan Mountain</p> <p>Elev: 239 m, Prom: 205 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.585277537519!2d119.22624522804873!3d10.941965143019349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65cd3a9d915cd%3A0xf8c7d9a9527a79ba!2sCabayotan%20Mountain!5e1!3m2!1sen!2sph!4v1598393828544!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.3783333, 120.1083333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Isla" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Isla</p> <p>Elev: 238 m, Prom: 238 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.585277537519!2d119.22624522804873!3d10.941965143019349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b73463733c7d6d%3A0x693cc68cb0f5e251!2sMount%20Isla!5e1!3m2!1sen!2sph!4v1598393879278!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.663611, 117.326389], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Steep_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Steep Hill</p> <p>Elev: 237 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16208.7473658275!2d117.31263412789241!3d8.659743163594511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32347a83c28fc22b%3A0xf55d7ce809a8cd1!2sSteep%20Hill!5e1!3m2!1sen!2sph!4v1598393932439!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0114673, 120.0358747], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sancho" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sancho</p> <p>Elev: 237 m, Prom: 193 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16036.64592846479!2d120.02596742814495!3d12.012242801760644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9f16f9ffed481%3A0xcd861f6612437c52!2sMount%20Sancho!5e1!3m2!1sen!2sph!4v1598393968785!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.737222, 117.401111], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Balansungain_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Balansungain Peak</p> <p>Elev: 235 m, Prom: 167 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16205.188070370496!2d117.38902302789688!3d8.741965358020366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234637031998d6d%3A0x42356fa0531a0663!2sBalansungain%20Peak!5e1!3m2!1sen!2sph!4v1598393999238!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.786111, 119.475], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mayatacan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mayatacan Hill</p> <p>Elev: 234 m, Prom: 146 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16106.733440673752!2d119.45402302803481!3d10.772242956832727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6899e4ace1543%3A0xa91f93a7c537a749!2sMayatacan%20Hill!5e1!3m2!1sen!2sph!4v1598394025009!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.966667, 119.333333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bando_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bando Peak</p> <p>Elev: 232 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16096.089705674229!2d119.32124522805103!3d10.969465140764177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65954118ebaa5%3A0xd06d1a19f05424e1!2sBando%20Peak!5e1!3m2!1sen!2sph!4v1598394053969!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.816667, 119.45], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Machin_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Machin Peak</p> <p>Elev: 232 m, Prom: 115 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.20231372387!2d119.43568962803865!3d10.819465153007531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b68a43a9f0f35f%3A0xaa50c1c7d69d7a95!2sMachin%20Peak!5e1!3m2!1sen!2sph!4v1598394083014!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.4427778, 119.7975], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Carlatan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Carlatan Mountain</p> <p>Elev: 232 m, Prom: 178 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16069.7668601251!2d119.78874522809193!3d11.442798501205937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b73fd31e48c3db%3A0x59bcdb5b9739c7d1!2sCarlatan%20Mountain!5e1!3m2!1sen!2sph!4v1598394110991!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.199444, 118.145556], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buod_Mainat" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buod Mainat</p> <p>Elev: 231 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16184.774226235448!2d118.13680082792334!3d9.199465326222715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32353aefb9566c33%3A0x38b582463eb40195!2sMount%20Buod%20Mainat!5e1!3m2!1sen!2sph!4v1598394148522!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.2886111, 119.6633333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pical_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pical Mountain</p> <p>Elev: 231 m, Prom: 155 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16078.460842929091!2d119.65457852807828!3d11.288631814244125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b71bb18ea95df5%3A0x3c091d771b2c980b!2sPical%20Mountain!5e1!3m2!1sen!2sph!4v1598394183409!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.758889, 119.976944], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maus" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maus</p> <p>Elev: 230 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16052.175617109355!2d119.98346742811987!3d11.748631724901637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b7579eb1947939%3A0x906689667bf833f9!2sMount%20Maus!5e1!3m2!1sen!2sph!4v1598394225364!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1794444, 120.1541667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabilauan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabilauan</p> <p>Elev: 230 m, Prom: 230 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16026.618649227476!2d120.14541192816128!3d12.179464986856742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b989fc65f5ecf5%3A0x28589b8e03db0502!2sMount%20Cabilauan!5e1!3m2!1sen!2sph!4v1598394255305!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0256046, 120.1871059], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dipulao</p> <p>Elev: 228 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16379.07023516534!2d120.17829536740247!3d12.025666363324222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba1e6a060b88e9%3A0xf030298442a2d432!2sDipulao%20Peak!5e1!3m2!1sen!2sph!4v1598394368823!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.2044729, 120.2160068], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Coconongon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Coconongon</p> <p>Elev: 222 m, Prom: 161 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16024.368076775016!2d120.20791192816495!3d12.21668733351557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba264558809d01%3A0x7362399f656a7f81!2sMount%20Coconongon!5e1!3m2!1sen!2sph!4v1598394429553!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.0272865, 117.065413], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Smooth_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Smooth Hill</p> <p>Elev: 220 m, Prom: 193 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16235.010940095322!2d117.05624522786087!3d8.0272432050396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32314e1054b36e55%3A0xd47daa7ee4320d3!2sSmooth%20Hill!5e1!3m2!1sen!2sph!4v1598394475381!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8, 119.45], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tantangen_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tantangen Peak</p> <p>Elev: 219 m, Prom: 95 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16105.111798151673!2d119.45013412803726!3d10.802520754381709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b68a322951d89b%3A0xf7e78cd877167513!2sTantangen%20Peak!5e1!3m2!1sen!2sph!4v1598394506933!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.946389, 119.224167], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Diente_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Diente Hill</p> <p>Elev: 218 m, Prom: 122 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.449469691484!2d119.21513412804894!3d10.944465142814524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6432e4ed6e74b%3A0xad6bde2ff78a69cc!2sDiente%20Hill!5e1!3m2!1sen!2sph!4v1598394536543!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.633333, 120.25], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dalanganem" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dalanganem</p> <p>Elev: 208 m, Prom: 208 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.449469691484!2d119.21513412804894!3d10.944465142814524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b14dfd951f9d0f%3A0x9f5cd6b13e18ac08!2sMount%20Dalanganem!5e1!3m2!1sen!2sph!4v1598394574317!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.2561111, 119.6288889], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Binulbulan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Binulbulan Mountain</p> <p>Elev: 208 m, Prom: 208 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.449469691484!2d119.21513412804894!3d10.944465142814524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b71c9fc7d9e4fd%3A0xcb3604aa71f80c97!2sBinulbulan%20Mountain!5e1!3m2!1sen!2sph!4v1598394612634!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9841989, 117.0661359], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Almirante_Gil_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Almirante Gil Hill</p> <p>Elev: 207 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.449469691484!2d119.21513412804894!3d10.944465142814524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32314e976e45bb0f%3A0x5d9c6cc086f8834a!2sAlmirante%20Gil%20Hill!5e1!3m2!1sen!2sph!4v1598394649604!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.2729642, 117.9812044], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sultan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sultan Hill</p> <p>Elev: 207 m, Prom: 199 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.449469691484!2d119.21513412804894!3d10.944465142814524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32352860466b5937%3A0x70769348338f59d1!2sSultan%20Hill!5e1!3m2!1sen!2sph!4v1598394680481!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.6989237, 119.69568], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Paly_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Paly</p> <p>Elev: 205 m, Prom: 205 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18207.365688289592!2d119.68605177245273!3d10.698928945727197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQxJzU2LjEiTiAxMTnCsDQxJzQ0LjUiRQ!5e1!3m2!1sen!2sph!4v1598394806370!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0082915, 120.0193543], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pielac" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pielac</p> <p>Elev: 204 m, Prom: 163 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16036.877493719478!2d120.01068962814456!3d12.00835395210517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9f19e3a91b7cf%3A0xcdaf3d6be14a5b27!2sMount%20Pielac!5e1!3m2!1sen!2sph!4v1598394851765!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0150031, 119.296717], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Star_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North Star Hill</p> <p>Elev: 202 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16093.512897409035!2d119.29124522805495!3d11.016687436880597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65a484b7c5829%3A0xca851bd4ea6307ba!2sNorth%20Star%20Hill!5e1!3m2!1sen!2sph!4v1598394899119!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8002778, 119.3377778], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Matengonong_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Matengonong Mountain</p> <p>Elev: 202 m, Prom: 114 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16105.23096944372!2d119.32902302803706!3d10.800298554561794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b663e320a8230f%3A0x36c1f410d65dce18!2sMatengonong%20Mountain!5e1!3m2!1sen!2sph!4v1598394938743!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.004846, 120.2047511], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tapyas</p> <p>Elev: 197 m, Prom: 134 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8018.461387628766!2d120.20004802448372!3d12.007593360088034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ba1e7e232fccfd%3A0xcd040063dc6bdb5f!2sMount%20Tapyas!5e1!3m2!1sen!2sph!4v1598394976750!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.583333, 119.516667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Big_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_10,58,_long_119,52)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Big Peak</p> <p>Elev: 186 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16116.748527277745!2d119.50791192801977!3d10.583354071993645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b683d356480a67%3A0x93bef82300d961af!2sBig%20Peak!5e1!3m2!1sen!2sph!4v1598387621480!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.0533658, 117.0439129], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dos_Picos_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dos Picos Hill</p> <p>Elev: 186 m, Prom: 155 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16234.155102842173!2d117.03707852786187!3d8.0486321036796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323151daf46c4361%3A0x1adce2eaea3c852c!2sDos%20Picos%20Hill!5e1!3m2!1sen!2sph!4v1598395081333!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.5741558, 117.5150955], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sarap" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sarap</p> <p>Elev: 185 m, Prom: 158 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16212.415518598491!2d117.50652302788785!3d8.574187669349131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32346990891d6005%3A0x8b7f278d6e246fe1!2sMount%20Sarap!5e1!3m2!1sen!2sph!4v1598395115485!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.05, 117.8], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/False_Corumi" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>False Corumi</p> <p>Elev: 184 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16191.556050479687!2d117.79124522791442!3d9.050020886755274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234e6e44f4cd617%3A0x7afca09871fa6420!2sFalse%20Corumi!5e1!3m2!1sen!2sph!4v1598395148854!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.301111, 118.078611], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Devel_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Devel Peak</p> <p>Elev: 184 m, Prom: 158 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16180.097634365828!2d118.06985632792961!3d9.301131968976716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32352e6f9f7d6e29%3A0xf12db28ed7253379!2sDevel%20Peak!5e1!3m2!1sen!2sph!4v1598395180680!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.9162979, 117.5473848], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Montalay_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Montalay Hill</p> <p>Elev: 182 m, Prom: 146 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16197.550727451453!2d117.53846742790662!3d8.91585424609068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32348cd50fa15667%3A0x3e366149fba884c0!2sMontalay%20Hill!5e1!3m2!1sen!2sph!4v1598395216421!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8406286, 121.033066], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aguada" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aguada</p> <p>Elev: 182 m, Prom: 176 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16103.082158202713!2d121.02457852804034!3d10.840298551315493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b1a5a0752a85a1%3A0x639d594435c115fd!2sMount%20Aguada!5e1!3m2!1sen!2sph!4v1598395249871!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.083333, 119.333333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Coast_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Coast Hill</p> <p>Elev: 180 m, Prom: 124 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16089.856449680929!2d119.32457852806061!3d11.083354031374148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6572904bb5cc7%3A0xbbdd9239110e46b5!2sCoast%20Hill!5e1!3m2!1sen!2sph!4v1598395286596!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1776413, 119.3886515], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Taraw Peak</p> <p>Elev: 180 m, Prom: 169 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4021.1419536008284!2d119.38667421483851!3d11.179085054688802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6551681e629d1%3A0xb43db151994522d3!2sTaraw%20Cliff!5e1!3m2!1sen!2sph!4v1598395356615!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.4547222, 119.7255556], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Banong_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Banong Mountain</p> <p>Elev: 179 m, Prom: 97 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16069.088420743949!2d119.71680082809301!3d11.454742850189582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b714f156a8e6f5%3A0x66d42f00a963a77f!2sBanong%20Mountain!5e1!3m2!1sen!2sph!4v1598395431301!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.783333, 119.316667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cone_Hill_(bungtod_sa_Pilipinas,_Mimaropa)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cone Hill</p> <p>Elev: 171 m, Prom: 64 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.480991226672!2d121.94124522893094!3d17.883353225540898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385e99d20dc1e49%3A0x44cea70dbba2faec!2sCone%20Hill!5e1!3m2!1sen!2sph!4v1598395473695!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.2375, 119.6222222], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Mountain_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>South Mountain</p> <p>Elev: 156 m, Prom: 145 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16081.317480519961!2d119.61346742807382!3d11.237520718533892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b71cc0a1a1c74b%3A0xef7dfa213b908832!2sSouth%20Mountain!5e1!3m2!1sen!2sph!4v1598395526887!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.904167, 116.983889], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Peak_(bungtod_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_7,91,_long_116,98)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Peak</p> <p>Elev: 149 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.518949623567!2d116.97096742785575!3d7.913632112214737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323147d9614d2c3f%3A0x2e6886e95955c891!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1598384214534!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5016667, 119.6847222], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pantag_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pantag Mountain</p> <p>Elev: 149 m, Prom: 149 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16066.415203360817!2d119.67596742809718!3d11.50168739618638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b76cae29e7ea1d%3A0x52f1c388bf0489c!2sPantag%20Mountain!5e1!3m2!1sen!2sph!4v1598395589551!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9649479, 120.722118], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lubid_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lubid</p> <p>Elev: 143 m, Prom: 143 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17327.531313187275!2d120.71279057080628!3d10.96495313242517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU3JzUzLjgiTiAxMjDCsDQzJzE5LjYiRQ!5e1!3m2!1sen!2sph!4v1598396528810!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.5786111, 119.9297222], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Binalabag_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Binalabag Mountain</p> <p>Elev: 142 m, Prom: 142 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16062.010344228152!2d119.92096742810419!3d11.578631789595176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b745ad6269a747%3A0xb7b84f236bcf3ea1!2sBinalabag%20Mountain!5e1!3m2!1sen!2sph!4v1598396023169!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0878558, 119.9595031], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Marawarawa" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Marawarawa</p> <p>Elev: 141 m, Prom: 94 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16032.398522023535!2d119.95096742815181!3d12.083353945444033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9ed702aef0949%3A0x6f005ecf724aa46e!2sMount%20Marawarawa!5e1!3m2!1sen!2sph!4v1598396073252!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.783333, 119.383333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mangobobe_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mangobobe Hill</p> <p>Elev: 138 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16105.796710272441!2d119.37513412803624!3d10.78974295541679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b662256f911c47%3A0x8e65f0067e878ca7!2sMangobobe%20Hill!5e1!3m2!1sen!2sph!4v1598396103798!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1467246, 120.9544722], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Agutaya_(lungsod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Agutaya</p> <p>Elev: 138 m, Prom: 81 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32172.024081759027!2d120.94577042259289!3d11.15302324750743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b0571f38b8782d%3A0x6120d822572b4d10!2sAgutaya%20Island!5e1!3m2!1sen!2sph!4v1598396204166!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.25, 117.933333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Point_hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Point hill</p> <p>Elev: 136 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16182.45507647886!2d117.92457852792646!3d9.250020872627683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3235280688cbaadb%3A0x4489044f9f10320c!2sPoint%20hill!5e1!3m2!1sen!2sph!4v1598396256612!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.2235924, 121.0627405], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maraca%C3%B1ao_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maracañao</p> <p>Elev: 134 m, Prom: 134 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16103.028374867954!2d121.05504955434884!3d11.224900322691804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b05b245f0a547f%3A0x1d75de0dd8ca87eb!2sMaracanao%2C%20Agutaya%2C%20Palawan!5e1!3m2!1sen!2sph!4v1598396419065!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0382612, 119.5948716], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dome_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_11,03,_long_119,60)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dome Peak</p> <p>Elev: 131 m, Prom: 131 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16092.600830669398!2d119.59124522805637!3d11.033354035506601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6fab47a95ecb5%3A0x6f3f06aa37902970!2sDome%20Peak!5e1!3m2!1sen!2sph!4v1598383635662!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.7277254, 120.8987125], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caponayan_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caponayan</p> <p>Elev: 130 m, Prom: 130 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16329.100111810983!2d120.88989944059902!3d10.72773063948309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQzJzM5LjgiTiAxMjDCsDUzJzU1LjQiRQ!5e1!3m2!1sen!2sph!4v1598396492894!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0541667, 120.1505556], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maya_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maya</p> <p>Elev: 129 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16034.143608086319!2d120.14180082814902!3d12.054187298038642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9f579095e9bb1%3A0x8da9c2e709fcfb50!2sMount%20Maya!5e1!3m2!1sen!2sph!4v1598396572935!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.6463889, 119.8327778], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Magogpong Mountain</p> <p>Elev: 128 m, Prom: 128 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16113.424725167388!2d119.82402302802474!3d10.646409666957462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6a2e19b4862b5%3A0xa896831e4ee3fdfe!2sMagogpong%20Mountain!5e1!3m2!1sen!2sph!4v1598396620867!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.0500466, 117.6668649], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Eran_Quoin" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Eran Quoin</p> <p>Elev: 126 m, Prom: 116 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16191.556050479687!2d117.6579119279144!3d9.050020886755274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3234e96ad3f4f741%3A0x1dda996028f3eb43!2sMount%20Eran%20Quoin!5e1!3m2!1sen!2sph!4v1598396669098!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.0500466, 117.6668649], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gui_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Gui Mountain</p> <p>Elev: 125 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16107.965249013212!2d119.32374522803293!3d10.749187458695241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b66364408c797f%3A0x49a53724f342a7f6!2sGui%20Mountain!5e1!3m2!1sen!2sph!4v1598396701890!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.9275, 116.965556], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Round_Hill_(bungtod_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_7,92,_long_116,96)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Round Hill</p> <p>Elev: 125 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16239.39854101332!2d116.95457852785592!3d7.916687712022833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323147c7be7e9fcb%3A0xf341eebda223d210!2sRound%20Hill!5e1!3m2!1sen!2sph!4v1598387141646!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1, 118.766667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tuft_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tuft Hill</p> <p>Elev: 125 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16141.312631854424!2d118.7565230279837!3d10.105298609362736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b58677c1949b4b%3A0x515866d6e29d77e8!2sTuft%20Hill!5e1!3m2!1sen!2sph!4v1598396735714!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9833333, 120.95], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Canipo_Island_(pulo_sa_Pilipinas,_lat_10,99,_long_120,95)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Canipo</p> <p>Elev: 124 m, Prom: 124 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16095.332972801198!2d120.94124522805218!3d10.983353739623423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b1abaefc06c40d%3A0x45ddf7b24417f9b6!2sCanipo%2C%20Magsaysay%2C%20Palawan!5e1!3m2!1sen!2sph!4v1598396831426!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.033333, 119.333333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Barren_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Barren Hill</p> <p>Elev: 118 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16092.600830669398!2d119.32457852805636!3d11.033354035506601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b659f0fde8b443%3A0x2eac5497917a05cb!2sBarren%20Hill!5e1!3m2!1sen!2sph!4v1598396889938!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0089931, 120.824331], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Patunga_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Patunga</p> <p>Elev: 112 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16182.824664042428!2d120.81491420877936!3d11.008505632912716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b1019edc13fd9f%3A0xcd39a5bf1bd8d910!2sPatungal%20Island!5e1!3m2!1sen!2sph!4v1598396997823!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8195927, 120.9739704], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bisucay_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bisucay</p> <p>Elev: 111 m, Prom: 111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.252716154599!2d120.96339347803855!3d10.81852680308368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b1a68fb4437d81%3A0x344672f4554ecace!2sBisucay%20Island!5e1!3m2!1sen!2sph!4v1598397055173!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9713241, 121.2214378], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tagauayan_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tagauayan</p> <p>Elev: 110 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16096.272293275828!2d121.21598552805072!3d10.96611144103946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b1b50457de58c1%3A0xc9e6b4e1345b2a90!2sTagawayan%20Islands!5e1!3m2!1sen!2sph!4v1598397120295!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8596419, 121.0769825], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lucbuan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lucbuan Hill</p> <p>Elev: 109 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16131.86653935492!2d121.06822325826738!3d10.859647146906633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDUxJzM0LjciTiAxMjHCsDA0JzM3LjEiRQ!5e1!3m2!1sen!2sph!4v1598397160473!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8591667, 119.4211111], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bancalon_Hill_(bungtod_sa_Pilipinas,_lat_10,86,_long_119,42)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bancalon Hill</p> <p>Elev: 106 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.956719941034!2d119.2245785280466!3d10.916687445088096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b68aa128a2616d%3A0xda211b9d40f1bc69!2sBancalon%20Hill!5e1!3m2!1sen!2sph!4v1598392412994!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0771145, 119.9565607], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nalabujan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nalabujan</p> <p>Elev: 100 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16032.930801898594!2d119.947078528151!3d12.07446499623534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b9ed75efb6c76d%3A0x3c5d3ef219b2bba0!2sMount%20Nalabujan!5e1!3m2!1sen!2sph!4v1598397224503!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8, 119.333333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tree_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tree Hill</p> <p>Elev: 99 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16105.245865492336!2d119.32457852803705!3d10.800020754584308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b663fc5a3adf67%3A0xe0b41ad7c44dabd5!2sTree%20Hill!5e1!3m2!1sen!2sph!4v1598397263890!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.541389, 119.792778], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Obong_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Obong Mountain</p> <p>Elev: 97 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16119.094103087398!2d119.76596742801627!3d10.538631875550415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b69f92fe9601b7%3A0xebf336199dd7d3d2!2sObong%20Mountain!5e1!3m2!1sen!2sph!4v1598397317527!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.883333, 119.283333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Thumb_Peak_(bukid_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_10,88,_long_119,28)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Thumb Peak</p> <p>Elev: 90 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16100.760434045458!2d119.27457852804385!3d10.88335404781001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b667794410b09b%3A0x56a44c0e16ceb170!2sThumb%20Peak!5e1!3m2!1sen!2sph!4v1598397410581!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9980244, 121.0998945], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tacbubuc_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tacbubuc</p> <p>Elev: 89 m, Prom: 89 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16264.047349906437!2d121.09138744334373!3d10.997636991683992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b1b2bf22e8a355%3A0x3ab3e9b65f7443a3!2sTacbubuc%20Island!5e1!3m2!1sen!2sph!4v1598397451186!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8149809, 119.3260159], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Hunch_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Hunch Hill</p> <p>Elev: 85 m, Prom: 78 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.232152312625!2d119.33457852803858!3d10.818909653052613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b6614139997037%3A0x64a149e1f4baa223!2sHunch%20Hill!5e1!3m2!1sen!2sph!4v1598397485836!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8810817, 121.2025541], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cocoro_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cocoro</p> <p>Elev: 80 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16085.877141846124!2d121.19357531045058!3d10.88635441933313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b1b6e39b63734d%3A0x318ba4affa11a0af!2sCocoro%20Island!5e1!3m2!1sen!2sph!4v1598397543875!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.1207844, 121.1470291], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Matarawis_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Matarawis</p> <p>Elev: 79 m, Prom: 79 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16106.328865181791!2d121.13614082101505!3d11.122433428806081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b04ee6da6cbd93%3A0x60b04bc3d493c7cf!2sMatarawis%20Island!5e1!3m2!1sen!2sph!4v1598397601969!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.3, 118.083333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Back_Cap" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Back Cap</p> <p>Elev: 49 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16180.14901720869!2d118.07457852792953!3d9.30002091905626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32352e6c28cf175b%3A0x450a43aa934551dd!2sBack%20Cap!5e1!3m2!1sen!2sph!4v1598397639964!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.9, 117.516667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Binicayat_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Binicayat Hill</p> <p>Elev: 48 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16198.018589902435!2d117.51707852790604!3d8.905298696820308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32348ce9e16022b5%3A0x3dd78bda0cc18e6f!2sBinicayat%20Hill!5e1!3m2!1sen!2sph!4v1598397676937!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0416667, 120.8666667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Paya_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Paya</p> <p>Elev: 42 m, Prom: 42 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16181.729359733896!2d120.86031464645448!3d11.04034564083995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b0ffdf6f118133%3A0x7ae6f919ca21d2be!2sPaya%20Island!5e1!3m2!1sen!2sph!4v1598397745539!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.7992844, 119.4353598], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Green_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Green Hill</p> <p>Elev: 40 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14871.149300029567!2d119.42728363006292!3d10.79928924131328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ3JzU3LjQiTiAxMTnCsDI2JzA3LjMiRQ!5e1!3m2!1sen!2sph!4v1598397864398!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.016667, 118.066667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Davie_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Davie Hill</p> <p>Elev: 33 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16193.053700073273!2d118.05791192791247!3d9.016687589085267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323519a0696ce141%3A0xd4c0c6c996c16f6d!2sDavie%20Hill!5e1!3m2!1sen!2sph!4v1598397938330!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.5102778, 117.4908333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sarong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sarong</p> <p>Elev: 23 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16215.131149899287!2d117.4820785278845!3d8.510298773616139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32346b109e19f2e9%3A0x66018a39b9a67bf6!2sMount%20Sarong!5e1!3m2!1sen!2sph!4v1598397996316!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.0841987, 117.0328019], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Martin_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Martin Hill</p> <p>Elev: 23 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16232.6379674266!2d117.03096742786362!3d8.086409901270406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323151042285b57d%3A0x509c8edf596def3b!2sMartin%20Hill!5e1!3m2!1sen!2sph!4v1598398058120!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.283333, 118.066667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Black_Cap_Mountain_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Black Cap Mountain</p> <p>Elev: 18 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16180.919073589408!2d118.0579119279285!3d9.28335422024849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32352e57ea4c33ed%3A0x94222a4ebdfc803f!2sBlack%20Cap%20Mountain!5e1!3m2!1sen!2sph!4v1598398096910!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.9502579, 119.2666417], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bolalo_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bolalo Hill</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.147562337828!2d119.2579119280494!3d10.95002074235923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65ced6398610f%3A0x3a66c8ececfb6527!2sBolalo%20Hill!5e1!3m2!1sen!2sph!4v1598398159052!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.116667, 118.75], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Banog_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Banog Hill</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4024.2871009902165!2d119.26448131483745!3d10.950005258959846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b586715a2a2927%3A0x7c59dfe7438833c5!2sBanog%20Hill!5e1!3m2!1sen!2sph!4v1598398240135!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.483333, 118.2], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cuckold_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cuckold Hill</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4024.2871009902165!2d119.26448131483745!3d10.950005258959846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33cacec9ff5c370d%3A0xe97e7620afe4337e!2sCuckold%20Hill!5e1!3m2!1sen!2sph!4v1598398284738!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4544444, 119.8272222], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Hill_(bungtod_sa_Pilipinas,_Mimaropa,_Province_of_Palawan,_lat_10,45,_long_119,83)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Hill</p> <p>Elev: 130 m , Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16123.481817370504!2d119.81846742800975!3d10.454465182210173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b41f190d70150b%3A0x3183b59916980dca!2sSharp%20Hill!5e1!3m2!1sen!2sph!4v1598385803549!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.0168592, 119.3500202], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/South_Sugar_Loaf" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>South Sugar Loaf</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16093.51289740904!2d119.34124522805496!3d11.016687436880602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b659bda3e12aaf%3A0x84f9ecadc5e79b99!2sSouth%20Sugar%20Loaf!5e1!3m2!1sen!2sph!4v1598398506876!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.016667, 119.35], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Sugar_Loaf_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North Sugar Loaf</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16093.51289740904!2d119.34124522805496!3d11.016687436880602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b659bda3e12aaf%3A0x48bd359101611382!2sNorth%20Sugar%20Loaf!5e1!3m2!1sen!2sph!4v1598398473997!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.5, 118.233333], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Brow_Cone" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Brow Cone</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16170.801588181634!2d118.22457852794219!3d9.500020904612601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33cac91e21306205%3A0x6aa9bbe44f5ae9e4!2sBrow%20Cone!5e1!3m2!1sen!2sph!4v1598398575773!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.95, 119.266667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Marlangan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Marlangan Hill</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16097.147562337828!2d119.2579119280494!3d10.95002074235923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b65ced6398610f%3A0x57c23dfda7403cea!2sMarlangan%20Hill!5e1!3m2!1sen!2sph!4v1598398609455!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.316667, 118.066667], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Devils_Cap_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Devils Cap</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16179.377594040387!2d118.05791192793056!3d9.31668756786227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32352dd5216f7e8b%3A0x837f51159583f3b7!2sDevils%20Cap!5e1!3m2!1sen!2sph!4v1598398636053!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.1283333, 118.7613889], { icon: aIcon })
  .addTo(palawanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Northwest_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Northwest Hill</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16140.153738803478!2d118.7526341279853!3d10.128354107593507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33b58606bd27cfc9%3A0xea394a759c6953e3!2sNorthwest%20Hill!5e1!3m2!1sen!2sph!4v1598398690767!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
