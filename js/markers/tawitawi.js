var tawitawimap = L.map("tawitawimap").setView([5.133811, 119.950926], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(tawitawimap);
L.marker([5.1687395, 119.9681027], { icon: bIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sibankat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sibangkat</p> <p>Elev: 552 m, Prom: 552 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d258325.02109132134!2d119.8115219820494!3d5.2804796276547314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32416f5dec9c3f29%3A0x23d16208a25df2a5!2sMount%20Sibankat!5e1!3m2!1sen!2sph!4v1599096987192!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.133333, 119.95], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balugan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balugan</p> <p>Elev: 414 m, Prom: 162 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16328.942125954669!2d119.95818962778242!3d5.170576810426042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32416fc00e33df59%3A0x133edbc3fddc0fbb!2sMount%20Balugan!5e1!3m2!1sen!2sph!4v1599097020077!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.134722, 119.95], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binuang_(bukid_sa_Pilipinas,_Mindanawng_Muslim)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binuang</p> <p>Elev: 367 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16329.863036716888!2d119.94124522778209!3d5.134743412042856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32416fbfe92b58a7%3A0x49aa1bf708febbc2!2sMount%20Binuang!5e1!3m2!1sen!2sph!4v1599097066080!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.123333, 119.965278], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bud_Lussum" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bud Lussum</p> <p>Elev: 358 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16330.154391412423!2d119.95652302778196!3d5.123354512554992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32416ffa87df0231%3A0x5200445a363c90e7!2sBud%20Lussum!5e1!3m2!1sen!2sph!4v1599097096410!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.2824, 120.1124], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Biladali" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Biladali</p> <p>Elev: 358 m, Prom: 309 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16326.024037487929!2d120.10374522778352!3d5.282521205321865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32415e52b44dcec5%3A0x7280c5a4475ea537!2sMount%20Biladali!5e1!3m2!1sen!2sph!4v1599097123780!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.153611, 119.946667], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mapote" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mapote</p> <p>Elev: 331 m, Prom: 81 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16329.378392033861!2d119.93791192778225!3d5.15363231119161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32416f0a406b2f57%3A0xd497763b9bc5b426!2sMount%20Mapote!5e1!3m2!1sen!2sph!4v1599097163392!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.0186559, 119.7477351], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sibutu_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sibutu Peak</p> <p>Elev: 331 m, Prom: 331 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16332.914393220986!2d119.73902302778114!3d5.014187917421632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32410afe718dbfcb%3A0x82ab31dd09011d9f!2sSibutu%20Peak!5e1!3m2!1sen!2sph!4v1599097196060!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.116944, 119.936667], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Datu_Sali" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Datu Sali</p> <p>Elev: 330 m, Prom: 97 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16330.317551915516!2d119.92791192778195!3d5.116965612841917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32416fd7cc59c21f%3A0xc5d874f5b979b336!2sMount%20Datu%20Sali!5e1!3m2!1sen!2sph!4v1599097225313!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.0166818, 119.7454045], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Simunul_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Simunul Peak</p> <p>Elev: 324 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16332.851849116454!2d119.74124522778114!3d5.016687967311038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32410b026a820091%3A0x256a81ffbc164e2c!2sSimunul%20Peak!5e1!3m2!1sen!2sph!4v1599097253006!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.0182584, 119.7449778], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tinondakan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tinondakan Peak</p> <p>Elev: 319 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16332.851849116454!2d119.74124522778114!3d5.016687967311038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32410b0166463d03%3A0x39c4536a46b2ecca!2sTinondakan%20Peak!5e1!3m2!1sen!2sph!4v1599097278663!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.0175475, 119.7451211], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tambisan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tambisan Peak</p> <p>Elev: 319 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16332.851849116458!2d119.74124522778115!3d5.016687967311049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32410b026a820091%3A0x4b3f5189fd6d00bc!2sTambisan%20Peak!5e1!3m2!1sen!2sph!4v1599097311915!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.2085, 120.0576], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balik_Sampan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balik Sampan</p> <p>Elev: 316 m, Prom: 183 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16327.957114448189!2d120.04874522778279!3d5.208632308699925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324166cf00aab96b%3A0xdea6457e80ce2078!2sMount%20Balik%20Sampan!5e1!3m2!1sen!2sph!4v1599097346645!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.0295258, 118.5042481], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ledan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ledan</p> <p>Elev: 295 m, Prom: 295 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16272.428418067708!2d118.49485632782158!3d7.02918776526033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3237e56ea946dd53%3A0x29b491f3b9283cd0!2sMount%20Ledan!5e1!3m2!1sen!2sph!4v1599097373268!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.0140606, 119.7475259], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pajar" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pajar</p> <p>Elev: 269 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16332.949126092111!2d119.74541192778113!3d5.012799017483056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32410afcd4b2331b%3A0x9faab70e84815c22!2sMount%20Pajar!5e1!3m2!1sen!2sph!4v1599097414030!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.0117687, 118.4675305], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salisali" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salisali</p> <p>Elev: 251 m, Prom: 213 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16273.011374081425!2d118.426523027821!3d7.0125210662120265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3237ee2bc759a02d%3A0x51f9e6c08b2d3a9f!2sMount%20Salisali!5e1!3m2!1sen!2sph!4v1599097449603!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.0139316, 119.7422676], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bongao_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bud Bongao</p> <p>Elev: 246 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8166.43245148987!2d119.74473237439346!3d5.016166273206257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32410b021aaa283b%3A0x5e997da2deab7cfd!2sBud%20Bongao!5e1!3m2!1sen!2sph!4v1599097492748!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.3204, 120.1769], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Butua" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Butua</p> <p>Elev: 239 m, Prom: 173 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16325.025206994707!2d120.16818962778393!3d5.320299003581164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3243e1f41a03f671%3A0x9dbdbd476d6f1f66!2sMount%20Butua!5e1!3m2!1sen!2sph!4v1599097548653!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.9857787, 118.4929943], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Busut_Bangha" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Busut Bangha</p> <p>Elev: 223 m, Prom: 172 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16273.912231705823!2d118.48346742782017!3d6.98668776768364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3237faa1f89c56c7%3A0x80a1b8ee0518a0e9!2sMount%20Busut%20Bangha!5e1!3m2!1sen!2sph!4v1599097578335!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.4603, 120.5825], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maningkulat" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maningkulat</p> <p>Elev: 222 m, Prom: 222 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16321.261779509128!2d120.57374522778561!3d5.460298997050293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32438b9b0072aad9%3A0x9e157697ab5aed8!2sMount%20Maningkulat!5e1!3m2!1sen!2sph!4v1599097741704!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.089167, 119.953056], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bud_Sintingan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bud Sintingan Peak</p> <p>Elev: 211 m, Prom: 79 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16331.024581588368!2d119.94430082778172!3d5.089187914086383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3241706843304329%3A0x14606e5dd348aa4c!2sBud%20Sintingan%20Peak!5e1!3m2!1sen!2sph!4v1599097767095!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.0201939, 119.7615601], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kabogan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kabogan Peak</p> <p>Elev: 200 m, Prom: 170 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16332.851849116454!2d119.75791192778115!3d5.016687967311037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32410b20318293e1%3A0x50b8478b9b7117c5!2sKabogan%20Peak!5e1!3m2!1sen!2sph!4v1599097792724!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.084167, 119.862778], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Thumb_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Thumb Hill</p> <p>Elev: 195 m, Prom: 167 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16331.151439641437!2d119.85402302778166!3d5.084187914309861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32417234bf43be91%3A0xb4f2f3e2a19b6c92!2sThumb%20Hill!5e1!3m2!1sen!2sph!4v1599097832560!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.1518, 120.1797], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sipusok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sipusok</p> <p>Elev: 189 m, Prom: 182 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16329.428362701294!2d120.17096742778223!3d5.151687911279339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3243d892fd1b4d5b%3A0x25223e1dd3d2402c!2sMount%20Sipusok!5e1!3m2!1sen!2sph!4v1599097856512!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.1352, 120.2099], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Taguban" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Taguban</p> <p>Elev: 173 m, Prom: 150 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16329.848806663635!2d120.20124522778214!3d5.135299012017851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3243d9abe8340721%3A0xf0998d71d2b4058b!2sMount%20Taguban!5e1!3m2!1sen!2sph!4v1599097878741!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.2498421, 120.0720846], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tocanhi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tocanhi</p> <p>Elev: 155 m, Prom: 120 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16326.848549378441!2d120.06263412778318!3d5.251132306761196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324160ac0efdc9d1%3A0x6f0e7b040a08d70a!2sMount%20Tocanhi!5e1!3m2!1sen!2sph!4v1599097904394!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.1298, 120.2215], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Suwakin" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Suwakin</p> <p>Elev: 155 m, Prom: 139 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16329.991027862046!2d120.21263412778205!3d5.129743412267791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3243d9a4ba326fc9%3A0x316f62144901449c!2sMount%20Suwakin!5e1!3m2!1sen!2sph!4v1599097928349!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.0154479, 118.4450426], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pangatuan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pangatuan</p> <p>Elev: 149 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16272.894894432111!2d118.4356896278211!3d7.015854366021829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3237efd3ccaeb2c3%3A0x38b6c4471c66b0bf!2sMount%20Pangatuan!5e1!3m2!1sen!2sph!4v1599097951259!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.071667, 119.865556], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sibunday" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sibunday</p> <p>Elev: 143 m, Prom: 111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16331.468040658434!2d119.85680082778158!3d5.071687914867845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324173c5cab0522f%3A0x5f280f1e97fad74a!2sMount%20Sibunday!5e1!3m2!1sen!2sph!4v1599098005055!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.096111, 119.908056], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bud_Sikala" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bud Sikala</p> <p>Elev: 142 m, Prom: 123 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16331.468040658434!2d119.85680082778158!3d5.071687914867845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324171bef3d03c87%3A0x20fd5e75fbb672bf!2sBud%20Sikala!5e1!3m2!1sen!2sph!4v1599098031209!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.090833, 119.909722], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bud_Luuk" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bud Luuk</p> <p>Elev: 138 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16330.848184657774!2d119.89930082778174!3d5.096132313775738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x324171bca4b53145%3A0x9e0bc1da346c09e5!2sBud%20Luuk!5e1!3m2!1sen!2sph!4v1599098057281!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.033333, 118.45], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buhud" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buhud</p> <p>Elev: 136 m, Prom: 66 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16272.282466547756!2d118.44124522782171!3d7.033354365022133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3237efb0bf138245%3A0x9f4c7027b53b5f9a!2sMount%20Buhud!5e1!3m2!1sen!2sph!4v1599098086069!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([4.8268364, 119.4919726], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sibutu_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sibutu Hill</p> <p>Elev: 135 m, Prom: 135 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16337.48302995843!2d119.48263412778003!3d4.828076825541479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3241b215ba56ef07%3A0x8735a758df5f1798!2sSibutu%20Hill!5e1!3m2!1sen!2sph!4v1599098114184!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.0183333, 118.4280556], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buton" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buton</p> <p>Elev: 128 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16272.80749592866!2d118.41930082782123!3d7.0183544158791324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3237ee2ff59118f7%3A0x80a9c07df84f0263!2sMount%20Buton!5e1!3m2!1sen!2sph!4v1599098148025!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.009401, 118.4831453], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tabulian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tebulian</p> <p>Elev: 125 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16272.80749592866!2d118.41930082782123!3d7.0183544158791324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3237effee7f8ede7%3A0x72eca09cda73df63!2sMount%20Tabulian!5e1!3m2!1sen!2sph!4v1599098181015!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.033333, 118.483333], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tandan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tandan</p> <p>Elev: 25 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16272.28246654776!2d118.4745785278217!3d7.033354365022134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3237ef88f65073ab%3A0x89ada969c4fedbf3!2sMount%20Tandan!5e1!3m2!1sen!2sph!4v1599098221789!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.1333333, 120.3333333], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tandubas,_Tawi-Tawi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tandubas</p> <p>Elev: 17 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16329.420646713794!2d120.32458189802577!3d5.133338630264617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMDgnMDAuMCJOIDEyMMKwMjAnMDAuMCJF!5e1!3m2!1sen!2sph!4v1599098288020!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([5.0335211, 120.2108809], { icon: aIcon })
  .addTo(tawitawimap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mantabuan_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mantabuan</p> <p>Elev: , Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16332.515990300793!2d120.19797082778126!3d5.0300919167174065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3243d42a6f432573%3A0xd7dcbc59ec423ab!2sMantabuan%20Island!5e1!3m2!1sen!2sph!4v1599098361635!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
