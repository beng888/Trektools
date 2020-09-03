var cotabatomap = L.map("cotabatomap").setView([7.1083349, 125.0388164], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(cotabatomap);

L.marker([6.9871872, 125.2707835], { icon: fIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bukid_Apo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apo</p> <p>Elev: 2954 m, Prom: 2954 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16273.884751046793!2d125.2622416278202!3d6.987477217638725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9011b1d616fe9%3A0x83086f84a0a9e915!2sMount%20Apo!5e1!3m2!1sen!2sph!4v1599017249800!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.9877256, 125.2692427], { icon: fIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bukid_Apo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apo Kidapawan Peak</p> <p>Elev: 2939 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17703.015635443746!2d125.26011506781214!3d6.987675213585196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f900e2a933661b%3A0x54a600719c5d50c1!2sMount%20Apo%20Natural%20Park!5e1!3m2!1sen!2sph!4v1599017336494!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.691389, 124.507778], { icon: fIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Piapayungan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Piapayungan</p> <p>Elev: 2806 m, Prom: 1586 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16248.173243762649!2d124.4987452278462!3d7.69085432604586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255f89dedee6739%3A0x52e655081ecc726a!2sMount%20Piapayungan!5e1!3m2!1sen!2sph!4v1599017382910!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.036389, 125.3125], { icon: fIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talomo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talomo</p> <p>Elev: 2668 m, Prom: 507 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16271.922102888098!2d125.32931932782206!3d7.043631464434139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9045797685a73%3A0x1b658c77c7f2d5f5!2sApo%E2%80%93Talomo%20Mountain%20range!5e1!3m2!1sen!2sph!4v1599017416041!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.9675197, 125.2462265], { icon: fIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Zion</p> <p>Elev: 2624 m, Prom: 217 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17804.64796808968!2d125.2338808238849!3d6.976078511310257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9004ec4fc2495%3A0x15a35af913bc34de!2sMount%20Zion!5e1!3m2!1sen!2sph!4v1599017467516!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.655, 124.439167], { icon: eIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Latukan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Latukan</p> <p>Elev: 2328 m, Prom: 462 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.563515408907!2d124.4326341278447!3d7.654465428275028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3255fe954fe1ade9%3A0x2820797eff9beae5!2sLatukan!5e1!3m2!1sen!2sph!4v1599017554159!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.0833333, 125.2833333], { icon: dIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Talemo Peak</p> <p>Elev: 1763 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16270.524308154329!2d125.27457852782337!3d7.083354362155081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9034a325f91f7%3A0xc52547cb83e1baa3!2sTalemo%20Peak!5e1!3m2!1sen!2sph!4v1599017590815!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.61, 124.5925], { icon: dIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Salagabanog_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Salagabanog Peak</p> <p>Elev: 1555 m, Prom: 123 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16251.252663369001!2d124.58374522784288!3d7.610021030986234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff549c13d747cb%3A0x945987e65c85bdfb!2sSalagabanog%20Peak!5e1!3m2!1sen!2sph!4v1599017720788!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.6160148, 124.596161], { icon: dIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magampao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magampao</p> <p>Elev: 1544 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.936691999901!2d124.59068962784322!3d7.618354380478856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ff537e64c21ec5%3A0x54c37099a58b0bb7!2sMount%20Magampao!5e1!3m2!1sen!2sph!4v1599017747821!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5779956, 124.5933857], { icon: cIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mariyug" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mariyug</p> <p>Elev: 1482 m, Prom: 161 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.936691999901!2d124.59068962784322!3d7.618354380478856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8ab571ca4b323%3A0xcbdade81dfcafcfe!2sMount%20Mariyug!5e1!3m2!1sen!2sph!4v1599017772040!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4989911, 125.2248592], { icon: cIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Sumalili Peak</p> <p>Elev: 1247 m, Prom: 225 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16631.0612902589!2d125.2056559652766!3d7.493359906449273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8d5cdfa3ff71d%3A0x7392fd6acf8ec3e3!2sSumalilli%20Peak!5e1!3m2!1sen!2sph!4v1599017809624!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4952176, 125.2251291], { icon: cIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Boldong</p> <p>Elev: 1221 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17060.600002064886!2d125.21618221494562!3d7.495222906777371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjknNDIuOCJOIDEyNcKwMTMnMzAuNSJF!5e1!3m2!1sen!2sph!4v1599017886456!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.8665708, 125.1265128], { icon: cIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gap_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gap</p> <p>Elev: 1075 m, Prom: 564 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16277.910891867032!2d125.11291192781651!3d6.870854374229747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8515956b90749%3A0x65455bfc7a0c1e9f!2sMount%20Gap!5e1!3m2!1sen!2sph!4v1599017933445!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3374852, 124.6630655], { icon: cIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baboy_(bukid_sa_Pilipinas,_Soccsksargen)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baboy</p> <p>Elev: 1012 m, Prom: 722 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16260.83652009243!2d124.65624522783293!3d7.352798846430061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8a35da0409c1d%3A0x8bb6ef12feeb0033!2sMount%20Baboy!5e1!3m2!1sen!2sph!4v1599017967453!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3469388, 124.5103039], { icon: bIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Akir_Akir" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Akir Akir</p> <p>Elev: 993 m, Prom: 588 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16258.342976027414!2d124.49846742783546!3d7.4205766424015485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32561d6294ddf249%3A0xd7b863059b4d71dc!2sMount%20Akir%20Akir!5e1!3m2!1sen!2sph!4v1599018292247!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.8810872, 125.1138439], { icon: bIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Libadan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Libadan</p> <p>Elev: 799 m, Prom: 126 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16277.53973258809!2d125.10318962781683!3d6.88168782362115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8514c410c9b2d%3A0x9f2fe4877eaf80a0!2sMount%20Libadan!5e1!3m2!1sen!2sph!4v1599018323655!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5, 124.55], { icon: bIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lomintu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lomintu</p> <p>Elev: 745 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.391255614892!2d124.5412452278385!3d7.500021037642343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8a99f076a0d75%3A0xd83a4d58f03e1449!2sMount%20Lomintu!5e1!3m2!1sen!2sph!4v1599018350049!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3314495, 124.5314125], { icon: bIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Buduquan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Buduquan</p> <p>Elev: 635 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16261.547682645052!2d124.52457852783216!3d7.333354347580369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8a05f9f8f28bd%3A0xc2804dcbba0d1585!2sMount%20Buduquan!5e1!3m2!1sen!2sph!4v1599018388009!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4636881, 124.7986562], { icon: bIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Table_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Table</p> <p>Elev: 552 m, Prom: 248 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16256.767795679501!2d124.78957852783708!3d7.4630766398605495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8b6e7236a6c0d%3A0xce9ec1868e91fb94!2sMount%20Table!5e1!3m2!1sen!2sph!4v1599018416081!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.285, 124.662], { icon: bIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kitabud_Mountains" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kitabud</p> <p>Elev: 516 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16260.68388733821!2d124.69096742783306!3d7.356965446183253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8bb58865ef809%3A0xd49b9edb2bb20008!2sKitabud%20Mountains!5e1!3m2!1sen!2sph!4v1599018466582!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4809369, 125.1501368], { icon: aIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tianlud" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tianlud</p> <p>Elev: 458 m, Prom: 56 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16256.013089895885!2d125.14124522783789!3d7.483354338644124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8d441c915715d%3A0x7b59489061489093!2sMount%20Tianlud!5e1!3m2!1sen!2sph!4v1599018543063!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4333333, 124.6], { icon: aIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Akir-Akir_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Akir-Akir Mountain</p> <p>Elev: 395 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32515.742265861572!2d124.58249036857312!3d7.4333328067756055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8a5fc32eb1713%3A0xfabf4200853b2d15!2sAkir-Akir%20Mountain!5e1!3m2!1sen!2sph!4v1599018240439!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5, 124.666667], { icon: aIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Marakabak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Marakabak</p> <p>Elev: 348 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.391255614892!2d124.65791192783853!3d7.500021037642345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8ae0c5c041971%3A0xcb89b7b1bdca0db2!2sMount%20Marakabak!5e1!3m2!1sen!2sph!4v1599018570447!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.216389, 124.840556], { icon: aIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pinto_Mountain_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinto Mountain</p> <p>Elev: 341 m, Prom: 121 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16265.785294553389!2d124.83180082782796!3d7.21641000444775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f894bfff7ccd99%3A0x481ec06cdb2f43c9!2sPinto%20Mountain!5e1!3m2!1sen!2sph!4v1599018591738!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.9325, 125.015278], { icon: aIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sikatulan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sikatulan</p> <p>Elev: 290 m, Prom: 143 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16275.790387522306!2d125.00652302781843!3d6.932521120755439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8584a3f87f803%3A0x65a34a2f2dba9a01!2sMount%20Sikatulan!5e1!3m2!1sen!2sph!4v1599018652977!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.203333, 124.841111], { icon: aIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Buluan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Buluan Mountain</p> <p>Elev: 233 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16266.254176482124!2d124.83235632782753!3d7.203354355209009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f894a2103fbdd7%3A0xb887926ad7c7d133!2sBuluan%20Mountain!5e1!3m2!1sen!2sph!4v1599018686790!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3, 124.633333], { icon: aIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Quidubidan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Quidubidan</p> <p>Elev: 151 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16262.762456415303!2d124.62457852783098!3d7.300021049546707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8a264e333b009%3A0xf45a88d55adb34f6!2sMount%20Quidubidan!5e1!3m2!1sen!2sph!4v1599018712587!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.060556, 124.677222], { icon: aIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pikit_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pikit Hill</p> <p>Elev: 51 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16271.32678092403!2d124.66846742782259!3d7.060576663463158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f88605b48d743f%3A0x51dc822a3d972e71!2sPikit%20Hill!5e1!3m2!1sen!2sph!4v1599018741396!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.076944, 124.669167], { icon: aIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Batuwalan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Batulawan Hill</p> <p>Elev: 40 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16270.749650860038!2d124.66041192782318!3d7.076965512522318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f885ef4d1eaf1d%3A0x7a2bc4f1cc990d43!2sBatuwalan%20Hill!5e1!3m2!1sen!2sph!4v1599018796345!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.066667, 124.666667], { icon: aIcon })
  .addTo(cotabatomap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Masakit_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Masakit Hill</p> <p>Elev: 12 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16271.111735417055!2d124.65791192782285!3d7.066687763112543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f8860a648416a5%3A0x85c0cfcada360382!2sMasakit%20Hill!5e1!3m2!1sen!2sph!4v1599018843440!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
