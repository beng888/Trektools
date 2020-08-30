var launionmap = L.map("launionmap").setView([16.5, 120.4167], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(launionmap);

L.marker([16.627778, 120.561389], { icon: dIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Talalang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Talalang</p> <p>Elev: 1521 m, Prom: 576 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15711.89713417625!2d120.58374522872286!3d16.605297879727193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391be96df9ec55d%3A0xd8cb5ba637cba40d!2sMount%20Talalang!5e1!3m2!1sen!2sph!4v1597938788208!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7527, 120.524], { icon: bIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gambang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gambang</p> <p>Elev: 770 m, Prom: 122 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15699.782913188841!2d120.51513412874583!3d16.752797862434456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ea0b0dcebc4b%3A0x29cc425369d7c850!2sMount%20Gambang!5e1!3m2!1sen!2sph!4v1597939097338!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8152778, 120.5166667], { icon: bIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Basig" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Basig</p> <p>Elev: 528 m, Prom: 166 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15694.618379374995!2d120.50791192875565!3d16.81529785506743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e82d54608445%3A0x3a9649c0d5012083!2sMount%20Basig!5e1!3m2!1sen!2sph!4v1597939258384!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4038889, 120.4161111], { icon: aIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bana" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bana</p> <p>Elev: 407 m, Prom: 137 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15728.269109859599!2d120.40735632869195!3d16.403909003125516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919dc97a7be275%3A0xbd103551ac8babe2!2sMount%20Bana!5e1!3m2!1sen!2sph!4v1597939451554!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8258333, 120.5063889], { icon: aIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naluo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naluo</p> <p>Elev: 407 m, Prom: 137 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15693.744308073125!2d120.49763412875733!3d16.825853353820897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e837bf75d201%3A0x517923c890f3b2bf!2sMount%20Naluo!5e1!3m2!1sen!2sph!4v1597939668803!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4166667, 120.3666667], { icon: aIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Magabang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Magabang</p> <p>Elev: 306 m, Prom: 229 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.236105719674!2d120.35791192869388!3d16.41668680164821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919d1ff609cd13%3A0x930bed78511890d!2sMount%20Magabang!5e1!3m2!1sen!2sph!4v1597939827543!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.866667, 120.466667], { icon: aIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lusong_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kimalogong</p> <p>Elev: 263 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15690.588609097205!2d120.45457852876332!3d16.863908949321225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391e89e6651411b%3A0xefb35d18b77c0b0f!2sMount%20Lusong!5e1!3m2!1sen!2sph!4v1597939968280!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4144444, 120.3708333], { icon: aIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kimalogong_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lusong</p> <p>Elev: 263 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.415820780367!2d120.36207852869354!3d16.41446450190521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33919d1e5fbfb699%3A0xb12bb3bf4cf1dcda!2sMount%20Kimalogong!5e1!3m2!1sen!2sph!4v1597940835928!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3166667, 120.3833333], { icon: aIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agoo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agoo</p> <p>Elev: 239 m, Prom: 147 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15735.299574696828!2d120.37457852867873!3d16.31668681318329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391771b8e64bff1%3A0x671f8cc5fe1c762b!2sMount%20Agoo!5e1!3m2!1sen!2sph!4v1597941031558!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.8333333, 120.35], { icon: aIcon })
  .addTo(launionmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lone_Tree_Hill_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lone Tree Hill</p> <p>Elev: 31 m, Prom: 25 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15693.122930456291!2d120.34124522875848!3d16.833353352934797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ee2f30ad07e7%3A0x96ec8af02ba142d8!2sLone%20Tree%20Hill!5e1!3m2!1sen!2sph!4v1597941226759!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
