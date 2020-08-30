var masbatemap = L.map("masbatemap").setView([12.3060239, 123.5588558], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(masbatemap);

L.marker([12.3906606, 123.4802556], { icon: bIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Conical_Peak_(bukid_sa_Pilipinas,_Bicol,_Province_of_Masbate)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Conical Peak</p> <p>Elev: 682 m, Prom: 682 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16013.0650483695!2d123.46263412818362!3d12.401965016756435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6c73b483ea5a5%3A0xa8c4c1cea633d1ff!2sConical%20Peak!5e1!3m2!1sen!2sph!4v1598355986457!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.209167, 123.659167], { icon: bIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagulipat" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagulipat</p> <p>Elev: 604 m, Prom: 559 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16024.031594901622!2d123.65846742816552!3d12.222242833016162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6e68b4d882225%3A0xda9424029d71d363!2sMount%20Bagulipat!5e1!3m2!1sen!2sph!4v1598356064889!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.3795126, 123.3735252], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nabungsuran" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nabongsuran</p> <p>Elev: 478 m, Prom: 368 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16014.310272646055!2d123.38374522818155!3d12.381687268601029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6bedf9dc3859b%3A0x9f8f56e7c7442c08!2sMount%20Nabungsuran!5e1!3m2!1sen!2sph!4v1598356100152!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.217778, 123.643333], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Uac" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Uac</p> <p>Elev: 404 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16024.93975928238!2d123.65124522816402!3d12.207242834364154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6e67e5db09b01%3A0xe238f363dd181f16!2sMount%20Uac!5e1!3m2!1sen!2sph!4v1598356137102!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.4386551, 123.4152812], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Villon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Villon</p> <p>Elev: 395 m, Prom: 170 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16010.79119274643!2d123.40707852818734!3d12.438909463389132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6b85e27bd49fb%3A0xd3354295980d4bbe!2sMount%20Villon!5e1!3m2!1sen!2sph!4v1598356181232!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0175838, 123.2327634], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manapao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manapao</p> <p>Elev: 359 m, Prom: 311 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16035.437270743329!2d123.2465230281469!3d12.032520599962632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a687e31081ed01%3A0x56b89d7ad68e293b!2sMount%20Manapao!5e1!3m2!1sen!2sph!4v1598356287940!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.8682995, 123.2267752], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Enga%C3%B1aso" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Engañoso</p> <p>Elev: 333 m, Prom: 333 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15983.81847595718!2d123.21763412823249!3d12.869187273547698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a15b1ac2cb0d4f%3A0xd7329ae71f6020bc!2sMount%20Enganaso!5e1!3m2!1sen!2sph!4v1598356316877!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0932113, 123.9120279], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Banco_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Banco</p> <p>Elev: 322 m, Prom: 265 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16032.98068101436!2d123.93180082815088!3d12.073631696309493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a70524d8c66cbd%3A0x73b099d0161055f!2sMount%20Banco!5e1!3m2!1sen!2sph!4v1598356346690!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.046944, 123.94], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagacay_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagacay</p> <p>Elev: 313 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16034.558495921552!2d123.93096742814832!3d12.047242798655637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a705078e678827%3A0x3fc9304e940b8260!2sMount%20Bagacay!5e1!3m2!1sen!2sph!4v1598356380846!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.483333, 123.4], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagadila" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagadila</p> <p>Elev: 313 m, Prom: 234 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16008.046906442976!2d123.39124522819192!3d12.483353909327024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6b78410f6d58d%3A0x6d7387e31c221037!2sMount%20Bagadila!5e1!3m2!1sen!2sph!4v1598356420342!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.3034581, 123.4159745], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Biluang_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Biluang Hill</p> <p>Elev: 308 m, Prom: 153 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16019.169507556062!2d123.40652302817354!3d12.30224277580324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a69569fabd0f8f%3A0xa9e1b45ea7c81bf!2sBiluang%20Hill!5e1!3m2!1sen!2sph!4v1598356462887!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.318049, 123.4310847], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Batuan_Hill_(bungtod_sa_Pilipinas,_Bicol)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Batuan Hill</p> <p>Elev: 306 m, Prom: 146 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16018.25438852635!2d123.380134128175!3d12.317242774446397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a695812488b767%3A0x7ea64a7fc1eae330!2sBatuan%20Hill!5e1!3m2!1sen!2sph!4v1598356498513!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.033333, 123.966667], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tetas_de_Cataingan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tetas de Cataingan</p> <p>Elev: 271 m, Prom: 99 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16035.35440891462!2d123.95485632814703!3d12.033909549839382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a7059aab8bf83b%3A0xde65dd32ef08b298!2sTetas%20de%20Cataingan!5e1!3m2!1sen!2sph!4v1598356529948!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.5, 123.4], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Canatonatoan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canatonatoan</p> <p>Elev: 251 m, Prom: 167 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16008.115633397256!2d123.38902302819179!3d12.482242759428726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6b78142bfb29f%3A0x29a0e838f0144dc5!2sMount%20Canatonatoan!5e1!3m2!1sen!2sph!4v1598356559799!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.7325, 123.349167], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sagurum" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sagurun</p> <p>Elev: 230 m, Prom: 200 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15992.763683756568!2d123.3434674282174!3d12.728076186740376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a149547736f113%3A0x240fb98cbe564527!2sMount%20Sagurum!5e1!3m2!1sen!2sph!4v1598356657723!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.633333, 123.583333], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pandan_(bungtod_sa_Pilipinas,_Bicol)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pandan</p> <p>Elev: 230 m, Prom: 230 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15998.574744038373!2d123.57735632820767!3d12.635576145321348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a132ef2d611ca9%3A0xfe1d4653c1b78d06!2sMount%20Pandan!5e1!3m2!1sen!2sph!4v1598356715171!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.0, 123.233333], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matigao_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Matigao</p> <p>Elev: 229 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16036.31498684574!2d123.22374522814546!3d12.01779840126829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a67d66c205bef9%3A0x191850b6cf832dc1!2sMount%20Matigao!5e1!3m2!1sen!2sph!4v1598356749946!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.05, 123.933333], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tuivo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tuiro</p> <p>Elev: 217 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16034.276401406652!2d123.9281896281488!3d12.051964998236116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a70506a73e5fb1%3A0x932e1698d51f4a79!2sMount%20Tuivo!5e1!3m2!1sen!2sph!4v1598356799404!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.8841667, 123.2561111], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bejia_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bejia Mountain</p> <p>Elev: 201 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15982.861908847679!2d123.24735632823408!3d12.88418722213807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a15b4cffa5e7ed%3A0xe1c99a1bcf1c3256!2sBejia%20Mountain!5e1!3m2!1sen!2sph!4v1598356891559!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.8694444, 123.1877778], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lokat_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lokat Mountain</p> <p>Elev: 183 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15982.861908847679!2d123.24735632823408!3d12.88418722213807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a15bcba597b92b%3A0x1627f9c8285d63fe!2sLokat%20Mountain!5e1!3m2!1sen!2sph!4v1598356929924!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.1025, 123.3225], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mabalantak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mabilantack</p> <p>Elev: 177 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16031.266153181958!2d123.31346742815369!3d12.102242843760898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a68ec63f229b53%3A0xbcefe2f5061f741a!2sMount%20Mabalantak!5e1!3m2!1sen!2sph!4v1598356966612!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9584537, 123.1583477], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Obo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Obo</p> <p>Elev: 171 m, Prom: 125 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16038.710876673458!2d123.16652302814158!3d11.977520654833473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a67c240f71578f%3A0x7eb5c0480b1255a5!2sMount%20Obo!5e1!3m2!1sen!2sph!4v1598357020075!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.383333, 123.35], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Masapinit" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Masapinit</p> <p>Elev: 167 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16014.156860036479!2d123.34902302818182!3d12.384187268373752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6bea29d3a03d7%3A0xa796e5e179703451!2sMount%20Masapinit!5e1!3m2!1sen!2sph!4v1598357046146!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.366667, 123.366667], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kagran" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kagran</p> <p>Elev: 166 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16015.961784831243!2d123.35374522817884!3d12.354742821048147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6be657505b307%3A0xeb844773b1f84769!2sMount%20Kagran!5e1!3m2!1sen!2sph!4v1598357079804!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.465265, 123.3981017], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Paniqui_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Paniqui Hill</p> <p>Elev: 162 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16009.72892649167!2d123.37374522818914!3d12.456131661816528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6b9b75931c6c7%3A0x2816008b56d7138f!2sPaniqui%20Hill!5e1!3m2!1sen!2sph!4v1598357105760!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.25, 123.266667], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tunog_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tunog Hills</p> <p>Elev: 157 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16022.34691065021!2d123.2579119281683!3d12.25002058051619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a690af02822571%3A0x89f5f54d3e8fac20!2sTunog%20Hills!5e1!3m2!1sen!2sph!4v1598357131030!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.2166731, 123.2833383], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gapus_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Gapus Hill</p> <p>Elev: 147 m, Prom: 123 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16025.746095462728!2d123.26818962816269!3d12.19390948556119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a69014605cd39f%3A0x3cb80a6a02d4681c!2sGapus%20Hill!5e1!3m2!1sen!2sph!4v1598357160755!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.3183561, 123.3374429], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabitan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabitan</p> <p>Elev: 143 m, Prom: 92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16019.05093651474!2d123.32068962817371!3d12.304187325627426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6966bce24e2b9%3A0x5ba34b3376991ff0!2sMount%20Cabitan!5e1!3m2!1sen!2sph!4v1598357279580!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.2, 123.883333], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calumpan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calumpan</p> <p>Elev: 136 m, Prom: 96 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16025.242236671955!2d123.87263412816354!3d12.202242834813173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a71ecdf2534045%3A0xc87e30e89ebb48a0!2sMount%20Calumpan!5e1!3m2!1sen!2sph!4v1598357307062!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.4, 123.416667], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cogran" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cogran</p> <p>Elev: 124 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16012.843083007054!2d123.40818962818398!3d12.405576166427661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6b8b7f67d0873%3A0x5b43bad921846efc!2sMount%20Cogran!5e1!3m2!1sen!2sph!4v1598357335460!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.166667, 123.866667], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagalayog" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagalayog</p> <p>Elev: 123 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16027.657665199838!2d123.8609674281596!3d12.16224278839973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a71c11287f2ae7%3A0x382291e0e9966d5!2sMount%20Bagalayog!5e1!3m2!1sen!2sph!4v1598357360686!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.9434741, 123.7430499], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Vigia" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Begia</p> <p>Elev: 104 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16040.720593980383!2d123.73430082813832!3d11.94363170782532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a6559ae354e8c5%3A0x68aad9bf9493a310!2sVigia%20Hill!5e1!3m2!1sen!2sph!4v1598357492079!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.233333, 123.283333], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ilijan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ilijan Hill</p> <p>Elev: 72 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16023.425544859023!2d123.28013412816652!3d12.23224278211672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a690e9a7b61e05%3A0xba010d0601cf6f9b!2sIlijan%20Hill!5e1!3m2!1sen!2sph!4v1598357521791!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.15, 123.166667], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Camomoy_Hill_(bungtod_sa_Pilipinas,_lat_12,15,_long_123,17)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Camomoy Hill</p> <p>Elev: 54 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16028.226831408265!2d123.26568962815868!3d12.152798389245108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a68f93e62921c3%3A0x4e500543754975fd!2sCamomoy%20Hill!5e1!3m2!1sen!2sph!4v1598357546346!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.8785749, 123.9903334], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Biang</p> <p>Elev: 36 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16101.350282480498!2d123.9815630540353!3d11.878580131055731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDUyJzQyLjkiTiAxMjPCsDU5JzI1LjIiRQ!5e1!3m2!1sen!2sph!4v1598357674035!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.166667, 123.233333], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bantayan_Hill_(bungtod_sa_Pilipinas,_Bicol)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bantayan Hill</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16027.138335205183!2d123.23263412816043!3d12.17085393762848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a685460f98df73%3A0xd2c3abe6da7e470e!2sBantayan%20Hill!5e1!3m2!1sen!2sph!4v1598357838624!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.216667, 123.2833205], { icon: aIcon })
  .addTo(masbatemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Initong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Initong Hill</p> <p>Elev: , Prom:  </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16024.368076775017!2d123.27457852816501!3d12.21668733351558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a690f56d5a48c7%3A0xcb6800a6a41960c6!2sInitong%20Hill!5e1!3m2!1sen!2sph!4v1598357884387!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
