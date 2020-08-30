var sorsogonmap = L.map("sorsogonmap").setView([12.7599859, 123.9303991], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(sorsogonmap);

L.marker([12.7690618, 124.0565126], { icon: dIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bulusan_Volcano" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulusan</p> <p>Elev: 1544 m, Prom: 1530 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15990.16762116802!2d124.04791182822179!3d12.769187132909599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0c411aa452e33%3A0xc7e333f533254711!2sMount%20Bulusan!5e1!3m2!1sen!2sph!4v1598305042005!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.7800598, 124.07316], { icon: cIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Peak_(bukid_sa_Pilipinas,_Bicol,_Province_of_Sorsogon)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Peak</p> <p>Elev: 1209 m, Prom: 218 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15989.394220060465!2d124.05541192822307!3d12.781409481768673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0c1555ff3688d%3A0xb2812e912f6cbb71!2sSharp%20Peak!5e1!3m2!1sen!2sph!4v1598305121010!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.0477633, 123.9592989], { icon: cIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Pocdol_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pocdol</p> <p>Elev: 1075 m, Prom: 1030 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15205.001074926588!2d123.94315069621824!3d13.053372167666167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0fad7cdde4c99%3A0x976ad5578809e00b!2sPocdol%20Mountains!5e1!3m2!1sen!2sph!4v1598305188112!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.05, 123.966667], { icon: cIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Rock_Dome" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Rock Dome</p> <p>Elev: 1071 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15205.001074926588!2d123.94315069621824!3d13.053372167666167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0faa3a9e48a45%3A0x1e91667376fe2bcb!2sRock%20Dome!5e1!3m2!1sen!2sph!4v1598305255270!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.0433497, 123.9781374], { icon: cIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pulog</p> <p>Elev: 1030 m, Prom: 362 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.607808917393!2d124.00358941362848!3d13.040402104581954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0f107ade5a2b5%3A0x7121d213bc451c0f!2sMt.%20Pulog!5e1!3m2!1sen!2sph!4v1598305349509!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.7958228, 123.9383742], { icon: bIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bintacan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bintacan</p> <p>Elev: 845 m, Prom: 737 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15988.532089028564!2d123.92874522822454!3d12.795020530497037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0db7c403a00f5%3A0x54e979c8819a176b!2sMount%20Bintacan!5e1!3m2!1sen!2sph!4v1598305465415!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([13.066667, 123.95], { icon: bIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Volcanic_Cone_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Volcanic Cone</p> <p>Elev: 772 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15971.135914211281!2d123.94124522825399!3d13.066687204876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0faf2f575481b%3A0xf5d34fcd386667dd!2sVolcanic%20Cone!5e1!3m2!1sen!2sph!4v1598305493842!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.7581928, 124.001713], { icon: bIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Jormajam" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Jormajam</p> <p>Elev: 719 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15990.834959274318!2d123.99374522822065!3d12.758631683894174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0c4e60ecbfa7b%3A0x7987859c59e92fa3!2sMount%20Jormajam!5e1!3m2!1sen!2sph!4v1598305535986!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.7976022, 123.9338405], { icon: bIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Juban_(munisipyo_sa_Pilipinas,_Bicol,_Province_of_Sorsogon,_lat_12,82,_long_123,98)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Juban</p> <p>Elev: 715 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45070.76277215527!2d123.9216892946383!3d12.795354195191097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ3JzQ4LjAiTiAxMjPCsDU2JzA3LjAiRQ!5e1!3m2!1sen!2sph!4v1598305885589!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.5927778, 123.9908333], { icon: bIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caloumutan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caloumutan</p> <p>Elev: 554 m, Prom: 438 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16001.248041108784!2d123.98207852820323!3d12.592798349271774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0cd9df6543d93%3A0xb33f20ef6f2f21a6!2sMount%20Caloumutan!5e1!3m2!1sen!2sph!4v1598305929188!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.7755838, 123.9653489], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Homahan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Homahan</p> <p>Elev: 426 m, Prom: 253 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15989.58764250754!2d123.95568962822279!3d12.778353832054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0db48998c3cf7%3A0xd5ac6f6b2893b3e2!2sMount%20Homahan!5e1!3m2!1sen!2sph!4v1598305971674!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.566667, 124.0], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sujac" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sujac</p> <p>Elev: 328 m, Prom: 62 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16002.51213799492!2d124.00263412820111!3d12.572520551140425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0cd1900548809%3A0x7c301a975059da05!2sMount%20Sujac!5e1!3m2!1sen!2sph!4v1598305996796!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.7, 123.9333333], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Culangalan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Culangalan</p> <p>Elev: 290 m, Prom: 148 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15993.481410409935!2d123.92457852821623!3d12.716687287799758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0d07ef7a47231%3A0xed6d1b844cec3901!2sMount%20Culangalan!5e1!3m2!1sen!2sph!4v1598306040621!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.9144928, 123.8450826], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Castilla" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Castilla</p> <p>Elev: 246 m, Prom: 198 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15980.785581965525!2d123.84124522823758!3d12.916687219079094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0e0f19bce653f%3A0xaaaf3acd6ac4a7fb!2sMount%20Castilla!5e1!3m2!1sen!2sph!4v1598306067136!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.6166667, 124.0], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Binitacan</p> <p>Elev: 239 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15457.236395581649!2d123.99129009330478!3d12.61667191168688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM3JzAwLjAiTiAxMjTCsDAwJzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598306242290!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.6, 124.0333333], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gate_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Gate Mountains</p> <p>Elev: 234 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15457.236395581649!2d123.99129009330478!3d12.61667191168688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0cdabba3fdc33%3A0x22ed1be827d3aa1d!2sGate%20Mountains!5e1!3m2!1sen!2sph!4v1598306272624!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.8333333, 123.95], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Batuan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Batuan</p> <p>Elev: 212 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15986.381628488107!2d123.91068962822818!3d12.828909427325916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0dc5ad47b9051%3A0x4064ea4a3377c4b6!2sMount%20Batuan!5e1!3m2!1sen!2sph!4v1598306331299!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.683333, 123.933333], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Verde_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Verde Hill</p> <p>Elev: 210 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15995.57844759709!2d123.92457852821272!3d12.683353840895773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0d0544d70e66d%3A0x89c9221434a751e5!2sVerde%20Hill!5e1!3m2!1sen!2sph!4v1598306360917!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.7666667, 124.1166667], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Irosin_(munisipyo)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Irosin Caldera</p> <p>Elev: 178 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15894.520902591223!2d124.10791333045854!3d12.766671909740438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ2JzAwLjAiTiAxMjTCsDA3JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598306486597!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.8346393, 123.9236883], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malazimbo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malazimbo</p> <p>Elev: 159 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15986.099188948576!2d123.90791192822864!3d12.833353826909505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a0dc4fa62f3a63%3A0x904177e6c614878a!2sMount%20Malazimbo!5e1!3m2!1sen!2sph!4v1598306579298!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.5820053, 124.1266603], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>hilltop</p> <p>Elev: 59 m, Prom: 59 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16024.754519199161!2d124.11790346677464!3d12.582010518317091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDM0JzU1LjIiTiAxMjTCsDA3JzM2LjAiRQ!5e1!3m2!1sen!2sph!4v1598306647240!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([12.8, 124.15], { icon: aIcon })
  .addTo(sorsogonmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Maraut-banua</p> <p>Elev: 11 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15803.816899694493!2d124.14130474370741!3d12.800005205069441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDQ4JzAwLjAiTiAxMjTCsDA5JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598306743112!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
