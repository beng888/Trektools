var capizmap = L.map("capizmap").setView([11.3888799, 122.6277455], 10);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(capizmap);

L.marker([11.2679209, 122.2059961], { icon: eIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nangtud" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nangtud</p> <p>Elev: 2073 m, Prom: 921 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16079.642309183424!2d122.19846742807643!3d11.267520716017962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af9990c82be873%3A0xf2e716093c31cffc!2sMount%20Nangtud!5e1!3m2!1sen!2sph!4v1598650740719!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2605337, 122.2049631], { icon: dIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>EBJ Peak</p> <p>Elev: 1986 m, Prom: 55 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17292.89486953274!2d122.19604333441077!3d11.260538941857666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE1JzM3LjkiTiAxMjLCsDEyJzE3LjkiRQ!5e1!3m2!1sen!2sph!4v1598650816007!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.293889, 122.190833], { icon: dIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tigas" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tigas</p> <p>Elev: 1516 m, Prom: 68 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16078.087292752449!2d122.18152302807887!3d11.29529851368339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af9a10c1ced0a3%3A0x44f64c46cbd264f4!2sMount%20Tigas!5e1!3m2!1sen!2sph!4v1598650858595!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([8.55, 124.366667], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Angas_(bukid_sa_Pilipinas,_Kasadpang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Angas</p> <p>Elev: 999 m, Prom: 441 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16079.020757241935!2d122.3237452280774!3d11.27863181508471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af9dc28e508e9b%3A0xf5cf25b0b5120d8!2sMount%20Angas!5e1!3m2!1sen!2sph!4v1598650892955!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.280145, 122.3368693], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Maunt Angas</p> <p>Elev: 995 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16398.029084493017!2d122.32807079085049!3d11.280150242373852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDE2JzQ4LjUiTiAxMjLCsDIwJzEyLjciRQ!5e1!3m2!1sen!2sph!4v1598650934004!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.228889, 122.320833], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Igabon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Igabon</p> <p>Elev: 985 m, Prom: 197 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16081.79750177543!2d122.31207852807309!3d11.228909619255013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af9e52b6630a83%3A0xb0b7bf07d075cd36!2sMount%20Igabon!5e1!3m2!1sen!2sph!4v1598650974174!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.333611, 122.330833], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binilanga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binilanga</p> <p>Elev: 854 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16076.66894347938!2d122.31457852808109!3d11.32057631155472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af9d1092f59139%3A0x43f3a14e711184df!2sMount%20Binilanga!5e1!3m2!1sen!2sph!4v1598651003288!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.3859833, 123.00357], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agudo_(bukid_sa_Pilipinas,_Kasadpang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agudo</p> <p>Elev: 813 m, Prom: 739 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16073.195673627486!2d122.99596742808652!3d11.382242906344963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af55ccbbf03ab9%3A0x6d12bee2c27bc425!2sMount%20Agudo!5e1!3m2!1sen!2sph!4v1598651050904!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2394821, 122.3333727], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sio" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sio</p> <p>Elev: 803 m, Prom: 74 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16081.209040690635!2d122.32457852807399!3d11.23946511837099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af9e477f93249b%3A0x43f8f556042cade9!2sMount%20Sio!5e1!3m2!1sen!2sph!4v1598651083863!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2657799, 122.3794662], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malinao_(bukid_sa_Pilipinas,_Kasadpang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malinao</p> <p>Elev: 671 m, Prom: 154 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16079.766545889583!2d122.37124522807628!3d11.265298516204528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7674bd2a793f%3A0x31fc86c1c691a38!2sMount%20Malinao!5e1!3m2!1sen!2sph!4v1598651115582!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([11.395944, 123.0376466], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alopasco" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alapasco</p> <p>Elev: 630 m, Prom: 165 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16072.410835047307!2d123.02874522808776!3d11.39613180516831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af550b3b174055%3A0x93a337a998f1145a!2sMount%20Alopasco!5e1!3m2!1sen!2sph!4v1598651145340!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2314095, 122.3787076], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tanganhin" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tanganhin</p> <p>Elev: 573 m, Prom: 173 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16081.6117318047!2d122.36930082807336!3d11.232242918975931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7597e5621a21%3A0x91f071dfbb5991be!2sMount%20Tanganhin!5e1!3m2!1sen!2sph!4v1598651170254!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2905556, 122.3583333], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mapusuan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mapusuan</p> <p>Elev: 562 m, Prom: 38 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16078.351913513632!2d122.34957852807844!3d11.290576264080602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7627066e7aa1%3A0x5b2a51c809e4ad1!2sMount%20Mapusuan!5e1!3m2!1sen!2sph!4v1598651208218!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.4382047, 123.0327413], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sibala" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sibala</p> <p>Elev: 554 m, Prom: 299 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16070.003364486822!2d123.02374522809156!3d11.438631801560279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5ff0a93363039%3A0x26d2580967884564!2sMount%20Sibala!5e1!3m2!1sen!2sph!4v1598651244042!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.338333, 122.3775], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Carabao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Carabao</p> <p>Elev: 552 m, Prom: 204 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16075.075429276952!2d122.3687452280836!3d11.348909609163996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af78186a3218e9%3A0xc5694266c8f46fa4!2sMount%20Carabao!5e1!3m2!1sen!2sph!4v1598651269788!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.3361111, 122.3927778], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aglangit" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aglangit</p> <p>Elev: 538 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16075.794561706598!2d122.3840230280825!3d11.336131810242795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7786552f012f%3A0xaed82f4256f651f0!2sMount%20Aglangit!5e1!3m2!1sen!2sph!4v1598651291316!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2975, 122.3972222], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ta-al" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ta-al</p> <p>Elev: 502 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16077.962729522813!2d122.38846742807908!3d11.297520713496414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7654c0b043ff%3A0xe418519f6a6f8712!2sMount%20Ta-al!5e1!3m2!1sen!2sph!4v1598651332161!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.261667, 122.8525], { icon: bIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agsubay_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agsubay</p> <p>Elev: 502 m, Prom: 386 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16079.921810552216!2d122.834578528076!3d11.262520716437672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af44e7e956a92f%3A0xdc2225abbbf4f988!2sMount%20Agsubay!5e1!3m2!1sen!2sph!4v1598651376172!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.4300639, 122.983058], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anito" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anito</p> <p>Elev: 482 m, Prom: 252 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16070.271299455682!2d122.96013412809113!3d11.433909551961728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f8a2e09af145%3A0xc8f81acb5639b46!2sMount%20Anito!5e1!3m2!1sen!2sph!4v1598651405639!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.276667, 122.619167], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Panginraon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Panginraon</p> <p>Elev: 465 m, Prom: 390 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16079.31607135047!2d122.60652302807696!3d11.273354015528103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af6f27c134e975%3A0x6cc4c2639edc2f15!2sMount%20Panginraon!5e1!3m2!1sen!2sph!4v1598651433189!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.339722, 122.418333], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pula_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pula</p> <p>Elev: 463 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16075.607041224717!2d122.40957852808276!3d11.339465109961466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af79d94b4057ff%3A0x497c152c74b79cc7!2sMount%20Pula!5e1!3m2!1sen!2sph!4v1598651466516!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2513889, 122.3872222], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nagirong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nagirong</p> <p>Elev: 436 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16080.542485660402!2d122.37846742807504!3d11.25140961736981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af75db20050e79%3A0xe6fc105e87220011!2sMount%20Nagirong!5e1!3m2!1sen!2sph!4v1598651489433!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.3708333, 122.3575], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naconlong" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naconlong</p> <p>Elev: 433 m, Prom: 82 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16073.838536607494!2d122.34874522808553!3d11.370854007308914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7877c7f903d7%3A0x51583cded032eff3!2sMount%20Naconlong!5e1!3m2!1sen!2sph!4v1598651524322!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.3355556, 122.3469444], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sirib" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sirib</p> <p>Elev: 431 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16075.82580701817!2d122.33818962808242!3d11.335576310289667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af9d505d58fab5%3A0xeb1489737791c7ae!2sMount%20Sirib!5e1!3m2!1sen!2sph!4v1598651568609!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.368056, 122.416667], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agpalali" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agpalali</p> <p>Elev: 389 m, Prom: 14 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16073.446619791548!2d122.40652302808611!3d11.377798506721238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7908543067ef%3A0x692bf0767dfd2633!2sMount%20Agpalali!5e1!3m2!1sen!2sph!4v1598651609189!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.266667, 122.866667], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Marapet" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Marapet</p> <p>Elev: 374 m, Prom: 109 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16079.440371549605!2d122.85791192807677!3d11.27113181571474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af45306e6d3ea5%3A0xb6d69ccb451e93de!2sMount%20Marapet!5e1!3m2!1sen!2sph!4v1598651634296!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.3283333, 122.91], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pudian" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pudian</p> <p>Elev: 359 m, Prom: 161 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16076.231903524596!2d122.90124522808178!3d11.328354010898943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af5090a777f35b%3A0xaac820cde5b38133!2sMount%20Pudian!5e1!3m2!1sen!2sph!4v1598651663664!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.340278, 122.574722], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agnato" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agnato</p> <p>Elev: 358 m, Prom: 290 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16075.153635063924!2d122.57235632808346!3d11.347520709281305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af65079f7fc7c7%3A0x721fb049cbdbd24f!2sMount%20Agnato!5e1!3m2!1sen!2sph!4v1598651698593!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.216667, 122.7], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Duluan</p> <p>Elev: 351 m, Prom: 41 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16082.926442222264!2d122.68485632807133!3d11.208631820951316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af6a3dc4e1bf69%3A0x5393120811c8789f!2sMount%20Cabayan!5e1!3m2!1sen!2sph!4v1598651724358!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.216667, 122.7], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cabayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cabayan</p> <p>Elev: 349 m, Prom: 227 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16082.926442222268!2d122.68485632807133!3d11.208631820951323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af6a3dc4e1bf69%3A0x5393120811c8789f!2sMount%20Cabayan!5e1!3m2!1sen!2sph!4v1598651781988!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2213889, 122.6941667], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talanghan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talanghan</p> <p>Elev: 348 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16082.215289375647!2d122.68541192807248!3d11.221409619882728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af6a203ffc5731%3A0x787dfa166c1aa2de!2sMount%20Talanghan!5e1!3m2!1sen!2sph!4v1598651803966!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.4132852, 123.0027595], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Yating" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Yating</p> <p>Elev: 310 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16072.552175579203!2d122.95513412808754!3d11.393631805380203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af565da9436fa9%3A0xff8026fa9e8db7da!2sMount%20Yating!5e1!3m2!1sen!2sph!4v1598651858108!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2813889, 122.6361111], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agbadiang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agbadiang</p> <p>Elev: 299 m, Prom: 131 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16078.865273374291!2d122.62735632807765!3d11.281409614851274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af68ce54ef4941%3A0x6ea4f61a56c0cc73!2sMount%20Agbadiang!5e1!3m2!1sen!2sph!4v1598651886990!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2, 122.466667], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bocboc" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bocboc</p> <p>Elev: 294 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16082.895536747406!2d122.4176341280714!3d11.209187420904872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af748cf1096d11%3A0x99cfd87846d183ed!2sMount%20Bocboc!5e1!3m2!1sen!2sph!4v1598651933650!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.483333, 122.716667], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Split_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Split Peak</p> <p>Elev: 291 m, Prom: 254 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16067.460466872148!2d122.70791192809556!3d11.4833539977514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a58acce9c5914f%3A0x95af7ceab8fb85!2sSplit%20Peak!5e1!3m2!1sen!2sph!4v1598651960030!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.360833, 122.818889], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pamilingan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pamilingan</p> <p>Elev: 265 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16075.278745238098!2d122.81207852808326!3d11.34529845946898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af5bed4b7a041d%3A0x1aac785b5f5d0750!2sMount%20Pamilingan!5e1!3m2!1sen!2sph!4v1598651996063!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.3175, 122.6025], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agmasibes" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agmasibes</p> <p>Elev: 251 m, Prom: 45 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16076.840560907476!2d122.59374522808082!3d11.317520711812243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af658b7929113d%3A0xe9f30150e3bcd876!2sMount%20Agmasibes!5e1!3m2!1sen!2sph!4v1598652014507!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.498333, 122.715833], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Supo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Supu</p> <p>Elev: 248 m, Prom: 51 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16066.716281344856!2d122.71457852809677!3d11.496409596637129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f4d5e4eb0613%3A0x997fde1dcdf0feb7!2sMount%20Supo!5e1!3m2!1sen!2sph!4v1598652055621!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.4122222, 122.4469444], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bato-Arobo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bato-Arobo</p> <p>Elev: 230 m, Prom: 81 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16071.499240470079!2d122.4381896280892!3d11.412242903801884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7c001e8d8afb%3A0x2c528149ffd43fe6!2sMount%20Bato-Arobo!5e1!3m2!1sen!2sph!4v1598652129627!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.4432962, 122.524724], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mountains</p> <p>Elev: 221 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16394.791313973947!2d122.51590169215396!3d11.443301441254004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI2JzM1LjkiTiAxMjLCsDMxJzI5LjAiRQ!5e1!3m2!1sen!2sph!4v1598652198087!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.417006, 122.4048829], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Madia-as</p> <p>Elev: 205 m, Prom: 11 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.280812104831!2d122.39616448230676!3d11.417011237889653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI1JzAxLjIiTiAxMjLCsDI0JzE3LjYiRQ!5e1!3m2!1sen!2sph!4v1598652270745!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.4008333, 122.9263889], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Matno_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Matno Hill</p> <p>Elev: 183 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16072.143776256496!2d122.91763412808818!3d11.400854004767979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af57a353bb1d93%3A0x788c1c0d9351c02d!2sMatno%20Hill!5e1!3m2!1sen!2sph!4v1598652308575!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.343056, 122.885556], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinagsagan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sinagsagan</p> <p>Elev: 158 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16074.606001825321!2d122.91541192808437!3d11.357242908459904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af573680cd037f%3A0x4f0e2e1fd60899d!2sMount%20Sinagsagan!5e1!3m2!1sen!2sph!4v1598652351262!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.233333, 122.5], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bulod" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulod</p> <p>Elev: 151 m, Prom: 20 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16081.782021630352!2d122.49957852807312!3d11.229187419231764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af7239379a801b%3A0x832b5187af85eb07!2sMount%20Bulod!5e1!3m2!1sen!2sph!4v1598652378825!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.3058333, 122.5116667], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bagahan_Hills" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bagahan Hills</p> <p>Elev: 123 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16077.495399207624!2d122.5029119280798!3d11.30585401279498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af706a58d1614b%3A0xb7355b7f3f842daf!2sBagahan%20Hills!5e1!3m2!1sen!2sph!4v1598652400124!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2738889, 122.5266667], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Maingin_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Maingin Hill</p> <p>Elev: 120 m, Prom: 72 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16079.284989724216!2d122.51791192807703!3d11.273909615481436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af71d018278aa5%3A0xad10f961c05e62d6!2sMaingin%20Hill!5e1!3m2!1sen!2sph!4v1598652451156!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.606944, 122.715278], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Culasi_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Culasi Hill</p> <p>Elev: 96 m, Prom: 92 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16060.38104165674!2d122.70652302810679!3d11.606965087158784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a58d525f8d0feb%3A0xa31c6f24612d3d84!2sCulasi%20Hill!5e1!3m2!1sen!2sph!4v1598652507134!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.4617939, 122.9650526], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Agtalin Hill</p> <p>Elev: 90 m, Prom: 54 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16155.710254198499!2d122.95635307838575!3d11.461635339171602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f8e095b95579%3A0xaf353f3d81a549c5!2sAgtalin%20Shrine!5e1!3m2!1sen!2sph!4v1598652587045!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.216667, 122.816667], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kabangahang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kabangahang</p> <p>Elev: 79 m, Prom: 8 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16083.466998761513!2d122.7756896280705!3d11.198909621763693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af4169b61b5a6b%3A0xbfcfe1b581d5cd39!2sMount%20Kabangahang!5e1!3m2!1sen!2sph!4v1598652660363!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.2966667, 122.5308333], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pasayan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pasayan Hill</p> <p>Elev: 74 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16078.009442166747!2d122.52207852807898!3d11.29668741356652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af702408b4d70f%3A0x9de4d90bc0ad221e!2sPasayan%20Hill!5e1!3m2!1sen!2sph!4v1598652714764!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.4183333, 122.8758333], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Binuntucan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Binuntucan Hill</p> <p>Elev: 48 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16071.153134015249!2d122.86707852808975!3d11.418353953283166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33af586ab5cd0033%3A0xb9f9356f21bff0cd!2sBinuntucan%20Hill!5e1!3m2!1sen!2sph!4v1598652746619!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.516667, 123.083333], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manuya" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manuya</p> <p>Elev: 36 m, Prom: 28 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16066.161564727061!2d123.06707852809762!3d11.506131745806675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5fdf43273739d%3A0xd2e048f706c1863c!2sMount%20Manuya!5e1!3m2!1sen!2sph!4v1598652784288!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.4888672, 123.0178245], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Balisong_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Balisong Hill</p> <p>Elev: 33 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16057.436325725621!2d123.00906953196477!3d11.488872438463819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDI5JzE5LjkiTiAxMjPCsDAxJzA0LjIiRQ!5e1!3m2!1sen!2sph!4v1598652863927!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );

L.marker([11.45, 122.8333333], { icon: aIcon })
  .addTo(capizmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Sharp_Hill_(bungtod_sa_Pilipinas,_Kasadpang_Kabisay-an)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sharp Hill</p> <p>Elev: 9 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16069.356722453638!2d122.82457852809259!3d11.450020700591505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a5f622f970de83%3A0xd6629610efb97853!2sSharp%20Hill!5e1!3m2!1sen!2sph!4v1598652898339!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
