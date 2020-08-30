var batanesmap = L.map("batanesmap").setView([20.4485074, 121.9708129], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(batanesmap);

L.marker([20.468056, 122.011111], { icon: bIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Irada" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Iraya</p> <p>Elev: 997 m, Prom: 997 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7680.283838261369!2d122.01159602480007!3d20.467947796745076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479bfde23f3fac1%3A0x65bcac32001758e9!2sMount%20Iraya!5e1!3m2!1sen!2sph!4v1598048133562!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.7046887, 121.9291199], { icon: bIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Diogo_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Diogo</p> <p>Elev: 518 m, Prom: 518 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15336.96665344441!2d121.91930082946185!3d20.70251945102487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479f3b4dd4452dd%3A0xc19129634eba756a!2sDiogo%20Island!5e1!3m2!1sen!2sph!4v1598048249994!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.391944, 121.942778], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matarem" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mahtarem</p> <p>Elev: 433 m, Prom: 373 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15368.240559236296!2d121.93430082939838!3d20.391130644694176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479c6d9de287fc5%3A0xfa2a1124836d2ce0!2sMount%20Matarem!5e1!3m2!1sen!2sph!4v1598048377273!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.4774518, 122.0075579], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bapbap</p> <p>Elev: 421 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15789.057979052932!2d121.99873674873909!3d20.477456794070893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI4JzM4LjgiTiAxMjLCsDAwJzI3LjIiRQ!5e1!3m2!1sen!2sph!4v1598048558844!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.2813, 121.8557], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tungaru" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tungaru</p> <p>Elev: 353 m, Prom: 353 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15379.152249746256!2d121.84680082937629!3d20.281408459946363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479ce580fe1957f%3A0xdb44037d548d42!2sMount%20Tungaru!5e1!3m2!1sen!2sph!4v1598048735440!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.316667, 121.85], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Navanga" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Navanga</p> <p>Elev: 317 m, Prom: 124 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15375.429278971922!2d121.83902302938382!3d20.318908454741514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cf990833d391%3A0x68cd012831232c89!2sMount%20Navanga!5e1!3m2!1sen!2sph!4v1598048914715!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.283333, 121.85], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aharung" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aharung</p> <p>Elev: 313 m, Prom: 78 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15379.097148207105!2d121.83874522937641!3d20.281963959869305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479ce5af6fcadc3%3A0x928ba469cb49892!2sMount%20Aharung!5e1!3m2!1sen!2sph!4v1598049684140!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.813889, 121.855], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santa_Rosa_(bungtod_sa_Pilipinas,_Lupot_sa_Cagayan)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santa Rosa</p> <p>Elev: 281 m, Prom: 281 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15325.725898245597!2d121.84652302948473!3d20.813352785344716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479f7b2c4674637%3A0xe81eb184b35852d2!2sMount%20Santa%20Rosa!5e1!3m2!1sen!2sph!4v1598049887448!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.283333, 121.866667], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Valungot" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Valungot</p> <p>Elev: 273 m, Prom: 32 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15378.57355691535!2d121.86680082937747!3d20.287241759137252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cee1b79646f7%3A0x6ffe35b10f3b46c3!2sMount%20Valungot!5e1!3m2!1sen!2sph!4v1598050059364!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.333333, 121.85], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Changatuan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Changatuan</p> <p>Elev: 271 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15373.993498007672!2d121.8359674293867!3d20.333352802734527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cf889f98a7ad%3A0x27359f13c45f0aca!2sMount%20Changatuan!5e1!3m2!1sen!2sph!4v1598050151120!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3166667, 121.8666667], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulo_sa_Sabtang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Sabtang</p> <p>Elev: 244 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61505.94551129872!2d121.82854198174046!3d20.308267463353893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cf0d0e0d1ef1%3A0x70355789cb068a4f!2sSabtang%20Island!5e1!3m2!1sen!2sph!4v1598050238230!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.7282327, 121.8444703], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Riposet" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Riposet</p> <p>Elev: 237 m, Prom: 147 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15334.351754322857!2d121.83541192946718!3d20.728352797376512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479f0f00fdf90a3%3A0x46271e98681a4d0f!2sMount%20Riposet!5e1!3m2!1sen!2sph!4v1598050400382!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3833333, 121.9333333], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Matarem" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Matarem (mafarem)</p> <p>Elev: 230 m, Prom: 7 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15368.240559236296!2d121.93430082939838!3d20.391130644694176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479c6d9de287fc5%3A0xfa2a1124836d2ce0!2sMount%20Matarem!5e1!3m2!1sen!2sph!4v1598050508051!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.9333333, 121.9166667], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulo_sa_Mabudis" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mabudis</p> <p>Elev: 206 m, Prom: 206 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15295.115970120356!2d121.94169752954723!3d21.112346242687025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x347a15ac54647aab%3A0xba0819d4558a093a!2sY&#39;Ami%20Island!5e1!3m2!1sen!2sph!4v1598050827271!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3, 121.85], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alapad" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alapad</p> <p>Elev: 176 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15377.057166522993!2d121.84930082938055!3d20.30251955701724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cf07d94c4143%3A0x25e943d26bf65e8c!2sMount%20Alapad!5e1!3m2!1sen!2sph!4v1598050905598!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([21.1166667, 121.95], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Y%27Ami_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Yami</p> <p>Elev: 174 m, Prom: 174 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15295.115970120356!2d121.94169752954723!3d21.112346242687025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x347a15ac54647aab%3A0xba0819d4558a093a!2sY&#39;Ami%20Island!5e1!3m2!1sen!2sph!4v1598051043445!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.43, 121.967], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mahatao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mahatao</p> <p>Elev: 169 m, Prom: 99 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30732.94187320492!2d121.93329667796907!3d20.408871797415777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479c0d7054716d1%3A0x53a5f1029760f6d!2sMahatao%2C%20Batanes!5e1!3m2!1sen!2sph!4v1598051135168!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.9083333, 121.9], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulo_sa_Siayan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Stayan</p> <p>Elev: 159 m, Prom: 159 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7658.2320790057065!2d121.8985462248226!3d20.904251066929408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x347a1ea76dee1f59%3A0x801822d8a36b8c11!2sSiayan%20Island!5e1!3m2!1sen!2sph!4v1598051200304!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3033809, 121.874122], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Padang</p> <p>Elev: 148 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15198.769431020788!2d121.86534905583936!3d20.30338590092454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE4JzEyLjIiTiAxMjHCsDUyJzI2LjgiRQ!5e1!3m2!1sen!2sph!4v1598051350337!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3062344, 121.8031787], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ibahos_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ibahos</p> <p>Elev: 97 m, Prom: 97 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15375.65005104949!2d121.80791222938333!3d20.316686555050143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479cfdc01159015%3A0xec1c1101b9af2875!2sIvuhos!5e1!3m2!1sen!2sph!4v1598051452953!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3333333, 121.7833333], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dequey_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dequey</p> <p>Elev: 67 m, Prom: 67 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15404.867679948033!2d121.77537911832867!3d20.332886944175478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3479d06b91c50927%3A0xf0be8e7b86438d6b!2sDequey%20Island!5e1!3m2!1sen!2sph!4v1598051533272!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([21.0666667, 121.9333333], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/North_Island_(pulo_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>North (batanes)</p> <p>Elev: 2 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15310.048764948744!2d121.92258016773984!3d21.0654085442034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x347a1693e69c0093%3A0x9ba2ee410b1bf074!2sNorth%20Island!5e1!3m2!1sen!2sph!4v1598051677714!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([20.3300265, 121.7500107], { icon: aIcon })
  .addTo(batanesmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Unnamed volcano (Ibugos)</p> <p>Elev: 2 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18718.58385078728!2d121.73988627533997!3d20.330031500623026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE5JzQ4LjEiTiAxMjHCsDQ1JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598051797103!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
