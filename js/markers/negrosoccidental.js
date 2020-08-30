var negrosoccidentalmap = L.map("negrosoccidentalmap").setView(
  [10.2925609, 123.0246518],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(negrosoccidentalmap);

L.marker([10.4096183, 123.1302127], { icon: eIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Canlaon_Volcano" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kanlaon Summit</p> <p>Elev: 2465 m, Prom: 2465 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17446.92385521845!2d123.12359229284183!3d10.411344204791265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a94ba4812b746b%3A0x6fd464a51fb9ccd0!2sMount%20Canlaon!5e1!3m2!1sen!2sph!4v1598654853054!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4113894, 123.1324518], { icon: eIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Canlaon_Volcano" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kanlaon</p> <p>Elev: 2440 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4031.4284198571995!2d123.13026311483485!3d10.411394668672035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI0JzQxLjAiTiAxMjPCsDA3JzU2LjgiRQ!5e1!3m2!1sen!2sph!4v1598655067279!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4264368, 123.1420941], { icon: eIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Makawiwili Peak</p> <p>Elev: 2398 m, Prom: 220 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16327.513933671915!2d123.13343199122956!3d10.426442058337905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI1JzM1LjIiTiAxMjPCsDA4JzMxLjUiRQ!5e1!3m2!1sen!2sph!4v1598655127193!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.6371428, 123.2358987], { icon: dIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mandalagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mandalagan</p> <p>Elev: 1880 m, Prom: 1333 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16113.938476791798!2d123.22735632802396!3d10.636687467735591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a92fbd5906749d%3A0xd3b9ecfbf009cbcd!2sMount%20Mandalagan!5e1!3m2!1sen!2sph!4v1598655192150!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.6654414, 123.1787947], { icon: dIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Marapara Peak</p> <p>Elev: 1675 m, Prom: 264 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16878.128261071633!2d123.16993560122334!3d10.665446651933838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDM5JzU1LjYiTiAxMjPCsDEwJzQzLjciRQ!5e1!3m2!1sen!2sph!4v1598655273466!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.7690319, 123.2334354], { icon: dIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Silay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Silay</p> <p>Elev: 1535 m, Prom: 757 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16106.569990465456!2d123.22374522803506!3d10.775298556585643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8d7c33bdb61cb%3A0xcca51da525da4183!2sSilay!5e1!3m2!1sen!2sph!4v1598655375114!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.783333, 123.233333], { icon: dIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sicaba_diotay_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sicaba Diutay Peak</p> <p>Elev: 1518 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16106.896839725623!2d123.22457852803457!3d10.769187457079761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8d7de86d53e9f%3A0x4bdd30f99511eddd!2sSicaba%20diotay%20Peak!5e1!3m2!1sen!2sph!4v1598655401043!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8, 123.233333], { icon: cIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sicaba_dacu_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sicaba Dacu Peak</p> <p>Elev: 1251 m, Prom: 78 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16106.896839725623!2d123.22457852803457!3d10.769187457079761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8d79e93eee3ab%3A0x8d84f3a6fa15fd41!2sSicaba%20dacu%20Peak!5e1!3m2!1sen!2sph!4v1598655426136!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8324585, 123.2358008], { icon: cIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lantawan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lantawan Peak</p> <p>Elev: 1055 m, Prom: 225 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16103.48565817279!2d123.22735632803972!3d10.832798551924945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8d737ff0295b9%3A0xd1a56777155808e8!2sLantawan%20Peak!5e1!3m2!1sen!2sph!4v1598655461833!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.608398, 123.1470305], { icon: bIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canlandog</p> <p>Elev: 988 m, Prom: 113 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17289.26004920765!2d123.1401195335575!3d10.609833255542815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9320d7466bb25%3A0x2a2c73e22e9889c4!2sMount%20Canlandog!5e1!3m2!1sen!2sph!4v1598655487644!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([10.5048867, 123.3242319], { icon: bIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Bagtik Peak</p> <p>Elev: 822 m, Prom: 175 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15491.359487866332!2d123.32873167040104!3d10.489202760242394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a939740ec7d723%3A0x948c5fb7862a99d4!2sBagtik%20Peak!5e1!3m2!1sen!2sph!4v1598655583433!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.5293586, 123.3341717], { icon: bIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mayana Peak</p> <p>Elev: 788 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16268.848089844778!2d123.32712743821152!3d10.527390254689834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a93b8be4f76459%3A0x4444af337401c7f5!2sMayana%20Peak!5e1!3m2!1sen!2sph!4v1598655673692!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.531667, 123.3425], { icon: bIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malindog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malindog</p> <p>Elev: 758 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16119.806024539985!2d123.30957852801515!3d10.525020776630422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a93bd97ae38c3f%3A0x861255c0d0a5b1e2!2sMount%20Malindog!5e1!3m2!1sen!2sph!4v1598655735342!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4328783, 123.2911956], { icon: bIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balabag_(bukid_sa_Pilipinas,_Kasadpang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balabag</p> <p>Elev: 744 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16124.605693290661!2d123.28235632800808!3d10.432798583917359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9479095311157%3A0xa98201780937bbaa!2sMount%20Balabag!5e1!3m2!1sen!2sph!4v1598655791475!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.8951082, 122.6144266], { icon: bIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malapantao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malapantao</p> <p>Elev: 595 m, Prom: 400 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16151.707033554729!2d122.60680082796884!3d9.89613192526093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac4759f11d7ad7%3A0x143b6301c1ade660!2sMount%20Malapantao!5e1!3m2!1sen!2sph!4v1598655821946!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.878611, 122.950556], { icon: bIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Luyang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Luyang</p> <p>Elev: 543 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16152.062092261574!2d122.91624522796832!3d9.888909725804943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac0d144c3c29c7%3A0xfe47e190e3f49ebd!2sMount%20Luyang!5e1!3m2!1sen!2sph!4v1598655850900!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.939496, 122.8636715], { icon: bIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nai-guin" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nai-guin</p> <p>Elev: 527 m, Prom: 139 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16149.530121380714!2d122.85457852797192!3d9.940298621926889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac12303fbde059%3A0x6a180407cc2dd509!2sMount%20Nai-guin!5e1!3m2!1sen!2sph!4v1598655880790!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.8656468, 122.4705307], { icon: bIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Hinologan_Calis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Hinologan Calis</p> <p>Elev: 522 m, Prom: 192 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16153.330011414027!2d122.46180082796651!3d9.863076427748164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac49135e9a9beb%3A0xbc9756a27ea50434!2sMount%20Hinologan%20Calis!5e1!3m2!1sen!2sph!4v1598655906973!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.8405792, 122.5240011], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Panlubongan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Panlubongan Mountain</p> <p>Elev: 482 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16153.330011414027!2d122.46180082796651!3d9.863076427748164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac48ba7ed4ccfd%3A0xd2191149ed0e599f!2sPanlubongan%20Mountain!5e1!3m2!1sen!2sph!4v1598655930639!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.8947222, 122.8958333], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Badiangay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Badiangay</p> <p>Elev: 473 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16151.775334762775!2d122.88707852796871!3d9.894743025365571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac129c2d290ef1%3A0x3f73791f160c2371!2sMount%20Badiangay!5e1!3m2!1sen!2sph!4v1598655950138!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([9.9428446, 122.5438823], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tantauayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tantauayan</p> <p>Elev: 451 m, Prom: 155 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16149.392886907242!2d122.5362452279721!3d9.94307642171678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac382c3a12264b%3A0x71f7a6fa018e3056!2sMount%20Tantauayan!5e1!3m2!1sen!2sph!4v1598655988318!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.925833, 122.468889], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Capaclan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Capaclan Hill</p> <p>Elev: 422 m, Prom: 106 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16149.392886907242!2d122.5362452279721!3d9.94307642171678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac36181ddc1619%3A0x7007b09207ceaa6!2sCapaclan%20Hill!5e1!3m2!1sen!2sph!4v1598656028915!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.7989768, 122.5019377], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Calatong_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Calatong Mountain</p> <p>Elev: 389 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16156.465155940583!2d122.49318962796212!3d9.798909732556682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac4f063578f9dd%3A0xe7fc6b0b8fecbc15!2sCalatong%20Mountain!5e1!3m2!1sen!2sph!4v1598656056781!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.8091029, 122.4691023], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Canturay_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Canturay Mountain</p> <p>Elev: 383 m, Prom: 47 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16155.96434948988!2d122.46041192796284!3d9.809187581788224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac4e8d539be4bd%3A0x8b7307514768c43!2sCanturay%20Mountain!5e1!3m2!1sen!2sph!4v1598656092661!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4583519, 123.3380792], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Malatamban Peak</p> <p>Elev: 328 m, Prom: 93 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16343.837505547619!2d123.32926835846237!3d10.45835715730951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDI3JzMwLjEiTiAxMjPCsDIwJzE3LjEiRQ!5e1!3m2!1sen!2sph!4v1598656150591!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.4, 123.033333], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Masulog_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Masulog Hill</p> <p>Elev: 314 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16125.612342652552!2d123.04707852800661!3d10.413354085446946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aeb49565197cc5%3A0x63ed7851aa0ebfa1!2sMasulog%20Hill!5e1!3m2!1sen!2sph!4v1598656195082!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.8091936, 123.4695715], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Solitario" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Solitario</p> <p>Elev: 306 m, Prom: 230 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.769041715495!2d123.46096742803776!3d10.80890965386379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8e0ce799ccbb5%3A0xdf3bb3d394211a8b!2sMount%20Solitario!5e1!3m2!1sen!2sph!4v1598656221986!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.9675, 122.9261111], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sai-si" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sai-si</p> <p>Elev: 296 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16148.183598679685!2d122.91735632797383!3d9.967520819865825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac0e414358063f%3A0x8f381e7478f2822c!2sMount%20Sai-si!5e1!3m2!1sen!2sph!4v1598656258281!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.7301001, 122.4433001], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Calangcang_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Calangcang Mountain</p> <p>Elev: 282 m, Prom: 148 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16159.808468529813!2d122.43457852795743!3d9.730020837690182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac52297cf1668d%3A0xb52fb891b09d06a3!2sCalangcang%20Mountain!5e1!3m2!1sen!2sph!4v1598656299621!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.955, 122.8744444], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tomumbo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tomumbo</p> <p>Elev: 246 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16148.802353060268!2d122.86568962797296!3d9.95502082081281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac118c9eb6fbc3%3A0xc963c62a67816a51!2sMount%20Tomumbo!5e1!3m2!1sen!2sph!4v1598656323023!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([9.877778, 122.788889], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maronggues_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maronggues Hill</p> <p>Elev: 245 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16152.662376944918!2d122.77930082796746!3d9.876687526724835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac6b498609de0d%3A0x31d44ed041f3c498!2sMaronggues%20Hill!5e1!3m2!1sen!2sph!4v1598656365651!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.745278, 122.53], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dapdap_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dapdap Hill</p> <p>Elev: 237 m, Prom: 113 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16159.095934058942!2d122.52096742795841!3d9.744743036595617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac500f624d0b49%3A0x3466c6e18f68edb1!2sDapdap%20Hill!5e1!3m2!1sen!2sph!4v1598656392737!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.875833, 122.840278], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Amyan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Amyan Hill</p> <p>Elev: 223 m, Prom: 101 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16152.689644925198!2d122.83124522796743!3d9.87613197676663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac6ccd2cd81715%3A0x87a448d6f5ec7d0f!2sAmyan%20Hill!5e1!3m2!1sen!2sph!4v1598656421177!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.732222, 122.496389], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cabadiangan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cabadiangan Mountain</p> <p>Elev: 195 m, Prom: 75 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16159.741290817801!2d122.48707852795748!3d9.731409787586975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac504db36e0761%3A0x85728a041f8ce8f5!2sCabadiangan%20Mountain!5e1!3m2!1sen!2sph!4v1598656494400!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.9841667, 122.8811111], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mangkinigkig" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mangkinigkig</p> <p>Elev: 190 m, Prom: 38 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16147.35739559589!2d122.87235632797497!3d9.984187518601644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac11cbf2901d4f%3A0xd9cb70c84cd2a6c3!2sMount%20Mangkinigkig!5e1!3m2!1sen!2sph!4v1598656520051!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.35, 122.983333], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pantao_Hill_(bungtod_sa_Pilipinas,_Kasadpang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pantao Hill</p> <p>Elev: 189 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16129.263703634104!2d122.97957852800121!3d10.342520790998893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aeb1f58264ccd1%3A0x824863115872d70c!2sPantao%20Hill!5e1!3m2!1sen!2sph!4v1598656556080!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.8247222, 122.8605556], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Iba_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Iba Hill</p> <p>Elev: 156 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16155.205391366348!2d122.85180082796386!3d9.824743080623909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac6db1e9c8a7db%3A0xb884a83c92e72493!2sIba%20Hill!5e1!3m2!1sen!2sph!4v1598656593129!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.9013889, 122.4575], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manipis" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manipis</p> <p>Elev: 148 m, Prom: 19 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16151.447403390192!2d122.4487452279692!3d9.90140972486316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac49f27054ea97%3A0x7ee25c55648d4c52!2sMount%20Manipis!5e1!3m2!1sen!2sph!4v1598656720828!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.35, 122.95], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sook_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sook Hill</p> <p>Elev: 58 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16129.39212491016!2d122.94235632800103!3d10.340020791194274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33aeb1ce236fc169%3A0xda237a3ab3edc097!2sSook%20Hill!5e1!3m2!1sen!2sph!4v1598656764883!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([10.816667, 123.483333], { icon: aIcon })
  .addTo(negrosoccidentalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Tanquinto_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Tanquinto Hill</p> <p>Elev: 33 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16104.61995378606!2d123.465689628038!3d10.811687453638521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a8e0d2e3583165%3A0xc44a8048d5db882a!2sTanquinto%20Hill!5e1!3m2!1sen!2sph!4v1598656798822!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
