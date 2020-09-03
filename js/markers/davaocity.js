var davaocitymap = L.map("davaocitymap").setView([7.190708, 125.455341], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(davaocitymap);
L.marker([6.9871872, 125.2707835], { icon: fIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apo_(bukid_sa_Pilipinas,_Davao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apo</p> <p>Elev: 2954 m, Prom: 2954 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16273.88475104679!2d125.2622416278202!3d6.987477217638732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9011b1d616fe9%3A0x83086f84a0a9e915!2sMount%20Apo!5e1!3m2!1sen!2sph!4v1598989426631!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.9876379, 125.2713413], { icon: fIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apo_(bukid_sa_Pilipinas,_Davao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apo Main Peak</p> <p>Elev: 2937 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16273.884751046793!2d125.2622416278202!3d6.987477217638725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9011b1d616fe9%3A0x83086f84a0a9e915!2sMount%20Apo!5e1!3m2!1sen!2sph!4v1598989491908!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.036389, 125.3125], { icon: fIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talomo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talomo</p> <p>Elev: 2668 m, Prom: 507 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16271.922102888098!2d125.32931932782206!3d7.043631464434139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9045797685a73%3A0x1b658c77c7f2d5f5!2sApo%E2%80%93Talomo%20Mountain%20range!5e1!3m2!1sen!2sph!4v1598989534911!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.05, 125.3333333], { icon: dIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Crater_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Crater Peak</p> <p>Elev: 1994 m, Prom: 67 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16271.697789407628!2d125.32457852782228!3d7.050021064068216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f904f718dd438d%3A0x429a5722ab12e92!2sCrater%20Peak!5e1!3m2!1sen!2sph!4v1598989610127!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.0376785, 125.3603272], { icon: dIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Anagon Peak</p> <p>Elev: 1589 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15533.961999993575!2d125.35168204721859!3d7.037683811543592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDInMTUuNiJOIDEyNcKwMjEnMzcuMiJF!5e1!3m2!1sen!2sph!4v1598989739576!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3679148, 125.2280044], { icon: cIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinako" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sinaka</p> <p>Elev: 1472 m, Prom: 573 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.785242708967!2d125.2468008278381!3d7.489465488277004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f92aff7dab7ed7%3A0x27f42dd0ab488646!2sMount%20Sinako!5e1!3m2!1sen!2sph!4v1598989786162!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.361944, 125.234444], { icon: cIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tinanan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinanan</p> <p>Elev: 1424 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16260.500609757246!2d125.22568962783325!3d7.361965495886934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f927950498c9b7%3A0x22ac139e27d9cec2!2sMount%20Tinanan!5e1!3m2!1sen!2sph!4v1598989813301!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.160178, 125.3360087], { icon: cIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tipolog" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tipolog</p> <p>Elev: 1378 m, Prom: 215 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16268.93137150477!2d125.3273563278249!3d7.1283543595610785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f91bb005ba7947%3A0xc97b020323202cc!2sMount%20Tipolog!5e1!3m2!1sen!2sph!4v1598989843264!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4906673, 125.2561193], { icon: cIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinako" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sinako</p> <p>Elev: 1369 m, Prom: 458 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.785242708967!2d125.2468008278381!3d7.489465488277004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f92aff7dab7ed7%3A0x27f42dd0ab488646!2sMount%20Sinako!5e1!3m2!1sen!2sph!4v1598989872185!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.559444, 125.267222], { icon: cIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Merui" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Merui</p> <p>Elev: 1287 m, Prom: 264 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16253.162184849172!2d125.25846742784086!3d7.559465434054936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed4f85776a27b%3A0xe920961892d33892!2sMount%20Merui!5e1!3m2!1sen!2sph!4v1598989899393!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3669385, 125.410451], { icon: cIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Malapangi Peak</p> <p>Elev: 1135 m, Prom: 466 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17255.52001193982!2d125.40154816935669!3d7.3669438082804755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjInMDEuMCJOIDEyNcKwMjQnMzcuNiJF!5e1!3m2!1sen!2sph!4v1598990190184!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4877821, 125.279643], { icon: cIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nangalid</p> <p>Elev: 1123 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16209.011984441542!2d125.27085127914982!3d7.4877874084511475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjknMTYuMCJOIDEyNcKwMTYnNDYuNyJF!5e1!3m2!1sen!2sph!4v1598990269967!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3614241, 125.410856], { icon: cIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Binaton Peak</p> <p>Elev: 1117 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17444.096820587467!2d125.4019288911457!3d7.361429407616632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjEnNDEuMSJOIDEyNcKwMjQnMzkuMSJF!5e1!3m2!1sen!2sph!4v1598990375908!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4781937, 125.2935831], { icon: cIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Hills View Peak</p> <p>Elev: 1115 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4064.0442032399815!2d125.29061381482417!3d7.478960013392882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f92b84dd75c25f%3A0x8ba54cbc2b82740f!2sHills%20View!5e1!3m2!1sen!2sph!4v1598990478326!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.2209815, 125.3090067], { icon: cIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Unapan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Unapan</p> <p>Elev: 1093 m, Prom: 202 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16266.970818796528!2d125.30791192782681!3d7.183354406373068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9193b26264fbb%3A0x25b569378922c555!2sMount%20Unapan!5e1!3m2!1sen!2sph!4v1598990536910!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4875, 125.364722], { icon: cIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Saldab" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Saldab</p> <p>Elev: 1001 m, Prom: 180 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.857759346633!2d125.35596742783804!3d7.487521038393836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f92d0d943e355b%3A0xf3322614fe909bc8!2sMount%20Saldab!5e1!3m2!1sen!2sph!4v1598990569618!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.520556, 125.345278], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pitalong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pitalong</p> <p>Elev: 870 m, Prom: 177 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16254.622430347767!2d125.33652302783932!3d7.5205766864043895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed32a69d12ff7%3A0x2858eb5104f5820e!2sMount%20Pitalong!5e1!3m2!1sen!2sph!4v1598990594797!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3965334, 125.297758], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mundo Hill</p> <p>Elev: 828 m, Prom: 221 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15735.299851486841!2d125.27842051465711!3d7.396534504551923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9293f5fd4798f%3A0x8e602c7358557d59!2sMondo%20hill!5e1!3m2!1sen!2sph!4v1598990682078!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.564444, 125.350556], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Indang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Indang</p> <p>Elev: 765 m, Prom: 236 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16252.97389508213!2d125.34180082784107!3d7.564465433752163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed24db7088f89%3A0x3a0ddb84a38fd5f7!2sMount%20Indang!5e1!3m2!1sen!2sph!4v1598990752524!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3611323, 125.3440723], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Luwit" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Luwit</p> <p>Elev: 763 m, Prom: 161 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16260.531164925838!2d125.33485632783321!3d7.361132145936332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f9259cfc68ee69%3A0x8996e959006a5e2!2sMount%20Luwit!5e1!3m2!1sen!2sph!4v1598990778360!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4229801, 125.360912], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kibubay" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kibubay</p> <p>Elev: 729 m, Prom: 30 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16258.26083611322!2d125.35124522783555!3d7.422798842268986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f92e4301881009%3A0xab2acb34dc77ef48!2sMount%20Kibubay!5e1!3m2!1sen!2sph!4v1598990816595!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.465556, 125.333056], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Simod" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Simud</p> <p>Elev: 725 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16256.67485758919!2d125.32430082783715!3d7.465576689710719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f92c47a7041201%3A0xc3e87413fd2b112b!2sMount%20Simod!5e1!3m2!1sen!2sph!4v1598990876496!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.550556, 125.34], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malapangi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malapangi</p> <p>Elev: 694 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16253.496613252542!2d125.33124522784048!3d7.550576634592808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed306bcc3e8ad%3A0x655ce96d69590e5d!2sMount%20Malapangi!5e1!3m2!1sen!2sph!4v1598989939864!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3725625, 125.3540947], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ebid" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ebid</p> <p>Elev: 687 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16260.123488412917!2d125.34457852783363!3d7.3722432452773425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f92f8740515323%3A0xa75de59385a29978!2sMount%20Ebid!5e1!3m2!1sen!2sph!4v1598990915042!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.3688908, 125.3490666], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kulapu" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kulapu</p> <p>Elev: 686 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16260.327399438069!2d125.34124522783341!3d7.366687795606928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f925792e09264d%3A0x3ba3767f03919977!2sMount%20Kulapu!5e1!3m2!1sen!2sph!4v1598990946643!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5866409, 125.35633], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Takulanao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Takulanao</p> <p>Elev: 676 m, Prom: 138 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16252.125059454704!2d125.34763412784193!3d7.58696543238772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed2288b75b05b%3A0xb900c87db786967!2sMount%20Takulanao!5e1!3m2!1sen!2sph!4v1598990988035!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4972126, 125.3540482], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Iliyan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iliyan</p> <p>Elev: 646 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16255.505361101637!2d125.3448563278384!3d7.496965487826135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f92d18e844d49b%3A0xa5bcace973972234!2sMount%20Iliyan!5e1!3m2!1sen!2sph!4v1598991021669!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5706783, 125.2968787], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tampulong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tampulong</p> <p>Elev: 591 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16252.74359170621!2d125.28846742784131!3d7.570576633381886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed47132d581f1%3A0x7ff34d33691a1cc7!2sMount%20Tampulong!5e1!3m2!1sen!2sph!4v1598991049974!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.354444, 125.323889], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agusan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agusan</p> <p>Elev: 555 m, Prom: 45 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16260.775476943507!2d125.31513412783296!3d7.35446549633135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f925c06d120ac7%3A0xc016113ce902e119!2sMount%20Agusan!5e1!3m2!1sen!2sph!4v1598991092616!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.577222, 125.347222], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Simsiman" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Simsiman</p> <p>Elev: 526 m, Prom: 84 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16252.492146957993!2d125.33846742784156!3d7.577243232977689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed2334fdd4f99%3A0x46b336a337dd6dca!2sMount%20Simsiman!5e1!3m2!1sen!2sph!4v1598991137642!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.574167, 125.340556], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gakit" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gakit</p> <p>Elev: 522 m, Prom: 116 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16252.492146957993!2d125.33846742784156!3d7.577243232977689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed3c98e6a3ecf%3A0xa95fe2e0bbccde77!2sMount%20Gakit!5e1!3m2!1sen!2sph!4v1598991169935!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4789993, 125.3488348], { icon: bIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dinalag" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dinalag</p> <p>Elev: 502 m, Prom: 42 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16256.18902502058!2d125.33902302783771!3d7.478632138927632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f92daadf633d23%3A0x82af7ec3b737746e!2sMount%20Dinalag!5e1!3m2!1sen!2sph!4v1598991198547!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.4747512, 125.4706049], { icon: aIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Pungco Hill</p> <p>Elev: 475 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16713.486300871962!2d125.46177098429894!3d7.474756502698842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjgnMjkuMSJOIDEyNcKwMjgnMTQuMiJF!5e1!3m2!1sen!2sph!4v1598991335554!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.2823429, 125.4866713], { icon: aIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Quiabaton Peak</p> <p>Elev: 455 m, Prom: 141 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16327.639862696373!2d125.47798542863534!3d7.2823481920268955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTYnNTYuNCJOIDEyNcKwMjknMTIuMCJF!5e1!3m2!1sen!2sph!4v1598991476154!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5475, 125.356667], { icon: aIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kasalumayakon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kasalumayakon</p> <p>Elev: 444 m, Prom: 66 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16253.611485487501!2d125.34791192784039!3d7.547521034777575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed2fa13dcd3f3%3A0xac25a02793381030!2sMount%20Kasalumayakon!5e1!3m2!1sen!2sph!4v1598991540385!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.558333, 125.343056], { icon: aIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pinaguglongan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pinaguglongan</p> <p>Elev: 428 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16253.204009792544!2d125.33430082784082!3d7.558354334122199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed3ab8fa9c97f%3A0xf63f66017b70521e!2sMount%20Pinaguglongan!5e1!3m2!1sen!2sph!4v1598991572422!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.2493559, 125.4339176], { icon: aIcon })
  .addTo(davaocitymap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Libungon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Libungan</p> <p>Elev: 366 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16263.971725841227!2d125.42457852782977!3d7.266687751505975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f93cf6338a7f11%3A0xa1db94fb96335de9!2sMount%20Libungon!5e1!3m2!1sen!2sph!4v1598991675244!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
