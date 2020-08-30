var cagayanmap = L.map("cagayanmap").setView([18.609, 121.705], 8);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(cagayanmap);

L.marker([17.7, 122.05], { icon: dIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cetaceo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cetaceo</p> <p>Elev: 1823 m, Prom: 1304 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15619.511223622392!2d122.04124522889985!3d17.70001994826106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385be91d95fa717%3A0x74f5cfb301e8aab4!2sMount%20Cetaceo!5e1!3m2!1sen!2sph!4v1598052465119!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.716667, 122.1], { icon: cIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Flat_Peak_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Flat Peak</p> <p>Elev: 1391 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15618.060532435644!2d122.09124522890264!3d17.716686646203897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385b927259e2db5%3A0xda6b4741a0f9f134!2sFlat%20Peak!5e1!3m2!1sen!2sph!4v1598052583510!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2149518, 122.1199829], { icon: cIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cagua" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cagua</p> <p>Elev: 1142 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15574.111241698938!2d122.14539522898822!3d18.21461488397854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33867060fa251baf%3A0xbf1b17b1434ea89d!2sMount%20Cagua!5e1!3m2!1sen!2sph!4v1598052648504!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.52579, 121.9525788], { icon: cIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pangasun" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pangasun</p> <p>Elev: 1075 m, Prom: 1075 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.99661979029!2d121.9412452292278!3d19.523352963388493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780b07d48c0af3%3A0x91e7e38ea8bba306!2sBabuyan%20Claro%20Volcano!5e1!3m2!1sen!2sph!4v1598052720205!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2309737, 122.1719519], { icon: cIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Baua" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Baua</p> <p>Elev: 1032 m, Prom: 247 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15572.658156559854!2d122.16318962899105!3d18.230853181924317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386700ae175ffe5%3A0xb8717dc5af8ccdc7!2sMount%20Baua!5e1!3m2!1sen!2sph!4v1598052803206!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.5240185, 121.9470059], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Babuyan_Claro_Volcano" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Babuyan Claro</p> <p>Elev: 1009 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15452.996619790292!2d121.94124522922779!3d19.523352963388504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780b07d48c0af3%3A0x91e7e38ea8bba306!2sBabuyan%20Claro%20Volcano!5e1!3m2!1sen!2sph!4v1598053234697!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.52579, 121.9525788], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pangasun" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pangasun</p> <p>Elev: 843 m, Prom: 173 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15868.772325932096!2d121.94382622944873!3d19.525795020661555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMxJzMyLjgiTiAxMjHCsDU3JzA5LjMiRQ!5e1!3m2!1sen!2sph!4v1598053492092!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.5333333, 121.95], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pangasun" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pangasun</p> <p>Elev: 843 m, Prom: 173 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16207.315245754216!2d121.94110416041154!3d19.533338314869017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMyJzAwLjAiTiAxMjHCsDU3JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598053562972!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.95, 121.9333333], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Balatubat</p> <p>Elev: 821 m, Prom: 821 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62043.770629284794!2d121.87478382735755!3d18.908094419857253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3387c949c9d51673%3A0xe2c23d5e8a1305c1!2sBalatubat%2C%20Cagayan!5e1!3m2!1sen!2sph!4v1598053721903!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3396655, 122.1985501], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tapha" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tapha</p> <p>Elev: 762 m, Prom: 50 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15562.881921423252!2d122.18985632901021!3d18.339742018108772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386666d5fb0dda9%3A0xbbf43ba9ef397463!2sMount%20Tapha!5e1!3m2!1sen!2sph!4v1598053844666!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.511585, 120.9633915], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_San_Miguel" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount San Miguel</p> <p>Elev: 751 m, Prom: 245 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15547.329992138004!2d120.95457852904073!3d18.51168649614897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d9a1ca1f2ff5%3A0xbb936966b1ee0047!2sMount%20San%20Miguel!5e1!3m2!1sen!2sph!4v1598091535430!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.833611, 121.861111], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Camiguin" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Camiguin</p> <p>Elev: 718 m, Prom: 667 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15196.820138506762!2d121.85393507792992!3d18.830914043131884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3387ccdc2be620d3%3A0x825b82e00e603615!2sMount%20Camiguin!5e1!3m2!1sen!2sph!4v1598091560185!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.8333333, 121.86], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Camiguin_de_Babuyanes" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Camiguin de Babuyanes</p> <p>Elev: 712 m, Prom: 60 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15517.860239224272!2d121.85124522909882!3d18.83335280459513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3387ccde38f7c4a7%3A0x470014866e8e8657!2sCamiguin%20de%20Babuyanes!5e1!3m2!1sen!2sph!4v1598091632724!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.5911111, 121.0252778], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Macagutogut" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Macagutogut</p> <p>Elev: 698 m, Prom: 443 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15540.097153692208!2d121.01652302905495!3d18.591130885943315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388ddac56a854c1%3A0x8d82c5c858cdf226!2sMount%20Macagutogut!5e1!3m2!1sen!2sph!4v1598091758670!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.5385049, 121.9126542], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Smith_Volcano" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Smith</p> <p>Elev: 689 m, Prom: 491 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15451.632976632101!2d121.90318102923055!3d19.53760731147463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780bdcdbbca825%3A0x49fb59202b05b2ee!2sSmith%20Volcano!5e1!3m2!1sen!2sph!4v1598091930876!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.538, 121.9121639], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Babuyan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Babuyan</p> <p>Elev: 687 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15451.632976632101!2d121.90318102923055!3d19.53760731147463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780bdcdbbca825%3A0x49fb59202b05b2ee!2sSmith%20Volcano!5e1!3m2!1sen!2sph!4v1598097288876!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.516667, 121.133333], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kimalogong_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kimalogong</p> <p>Elev: 660 m, Prom: 222 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15451.632976632101!2d121.90318102923055!3d19.53760731147463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780bdcdbbca825%3A0x49fb59202b05b2ee!2sSmith%20Volcano!5e1!3m2!1sen!2sph!4v1598097288876!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2989998, 122.2703722], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Abriringan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Abriringan</p> <p>Elev: 659 m, Prom: 278 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15566.479721795424!2d122.26041192900313!3d18.29974207319208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338663f4243bd37f%3A0x83c3e5e1d3b28df6!2sMount%20Abriringan!5e1!3m2!1sen!2sph!4v1598097544564!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.15238, 122.1744479], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cagagangan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cagagangan</p> <p>Elev: 645 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15579.656281511954!2d122.16568962897738!3d18.152519841819334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386775881839f53%3A0x54872d89c68de020!2sMount%20Cagagangan!5e1!3m2!1sen!2sph!4v1598097599487!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2959685, 122.2893492], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Alegon" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Alegan</p> <p>Elev: 627 m, Prom: 181 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15566.82910923374!2d122.28068962900248!3d18.295853123685795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338663c1f3257b65%3A0x7eccffb91e8c087d!2sMount%20Alegon!5e1!3m2!1sen!2sph!4v1598097672248!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1820757, 122.22835], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Canapauan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Canapauan</p> <p>Elev: 623 m, Prom: 147 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15577.029195833116!2d122.2195785289825!3d18.18196428810423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33867bb6d4e1b441%3A0xf7762e52043b554f!2sMount%20Canapauan!5e1!3m2!1sen!2sph!4v1598097779267!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1985756, 122.2291527], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calolocob" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calolocob</p> <p>Elev: 617 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15575.540344606205!2d122.22041192898541!3d18.198630935999052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33867b0799f1a14d%3A0xa11816ef0fa3a810!2sMount%20Calolocob!5e1!3m2!1sen!2sph!4v1598097842492!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1266802, 122.1517531], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lagit" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lagit</p> <p>Elev: 589 m, Prom: 86 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31163.654972223954!2d122.13728417624353!3d18.128150044399924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338677a0168c9ca7%3A0x4167099a6946c7c!2sMount%20Lagit!5e1!3m2!1sen!2sph!4v1598097915109!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2575729, 122.2680487], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mananingo" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mananingo</p> <p>Elev: 586 m, Prom: 159 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15570.269171829688!2d122.2593008289957!3d18.257519878547463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338663619dcafaab%3A0x7eb97aba6ced708f!2sMount%20Mananingo!5e1!3m2!1sen!2sph!4v1598097996564!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.5425124, 120.9683496], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caraballo_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caraballo Mountain</p> <p>Elev: 570 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15544.52639149739!2d120.95957852904625!3d18.54251979219249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388d946f0b0e70f%3A0x8e52280edf5cf5f6!2sCaraballo%20Mountains!5e1!3m2!1sen!2sph!4v1598098140495!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3254361, 122.2704692], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Patunungan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Patunungan</p> <p>Elev: 550 m, Prom: 186 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15564.181999813929!2d122.26180082900765!3d18.32529761994552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338661521b1b750f%3A0xe88fb30d04c7a9c4!2sMount%20Patunungan!5e1!3m2!1sen!2sph!4v1598098232381!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.41605, 121.2903931], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malaqui_Babui" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malaqui Babui</p> <p>Elev: 535 m, Prom: 371 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.91470139181!2d121.28152302902386!3d18.41696425826816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388b821389ee9af%3A0x2e260a36964cbd45!2sMount%20Malaqui%20Babui!5e1!3m2!1sen!2sph!4v1598098298877!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.320278, 121.468333], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Calayan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Calayan</p> <p>Elev: 535 m, Prom: 535 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15472.291733137336!2d121.45874522918928!3d19.320575340484716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33880e0d5b391e4b%3A0xf87084731d360ddc!2sMount%20Calayan!5e1!3m2!1sen!2sph!4v1598098359552!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.556944, 121.98], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Knob_Peak_(bukid_sa_Pilipinas,_Lupot_sa_Cagayan)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Knob Peak</p> <p>Elev: 505 m, Prom: 64 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15449.779680982812!2d121.97124522923424!3d19.55696405887373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34780ca5a1fefd49%3A0x53a39f80fc3d827a!2sKnob%20Peak!5e1!3m2!1sen!2sph!4v1598098423303!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.8583333, 121.8833333], { icon: bIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Malabsing" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Malabsing</p> <p>Elev: 503 m, Prom: 366 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15514.778357837742!2d121.87457852910491!3d18.86668650025381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3387cc695e05b37d%3A0xccbbeb1ae2d449c8!2sMount%20Malabsing!5e1!3m2!1sen!2sph!4v1598098667565!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.287866, 122.3003496], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apulagan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apulagan</p> <p>Elev: 493 m, Prom: 120 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15567.55259585977!2d122.29152302900106!3d18.28779762470817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338663b7ed2188ab%3A0x356defe94d476640!2sMount%20Apulagan!5e1!3m2!1sen!2sph!4v1598098768796!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.1627761, 122.2187488], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Osoguen" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Osoguen</p> <p>Elev: 463 m, Prom: 146 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15578.739745505154!2d122.21013412897915!3d18.162797640523134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33867a2b5f4653e1%3A0xf86a81e1629ef1a!2sMount%20Osoguen!5e1!3m2!1sen!2sph!4v1598098853615!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.3280214, 121.4335011], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nangabaywanan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nongabaywanan</p> <p>Elev: 458 m, Prom: 80 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15471.5815324439!2d121.42485632919072!3d19.328075289486865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338811effb0d7b87%3A0x1e0e4765220becdc!2sMount%20Nangabaywanan!5e1!3m2!1sen!2sph!4v1598098919972!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.516667, 120.983333], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_San_Miguel" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount San Miguel</p> <p>Elev: 441 m, Prom: 57 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.719242534984!2d120.98114431489904!3d18.516672074126113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMxJzAwLjAiTiAxMjDCsDU5JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598099192056!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.407084, 122.2505668], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pasmacanan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pasmacanan</p> <p>Elev: 436 m, Prom: 224 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15556.918918439938!2d122.24346742902189!3d18.405853159686263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33865df70eb2c0c7%3A0x301f70bbddc50374!2sMount%20Pasmacanan!5e1!3m2!1sen!2sph!4v1598099291721!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.3166667, 121.4333333], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Bagua</p> <p>Elev: 423 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15531.67884566301!2d121.42456511994843!3d19.316671728547828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE5JzAwLjAiTiAxMjHCsDI2JzAwLjAiRQ!5e1!3m2!1sen!2sph!4v1598099473575!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2038781, 122.2798527], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nimamandum" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nimamandum</p> <p>Elev: 417 m, Prom: 215 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15575.06859783359!2d122.27096742898632!3d18.203908735332057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33867c96d5260a5f%3A0x19897a1688bad3b0!2sMount%20Nimamandum!5e1!3m2!1sen!2sph!4v1598099568988!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3012799, 122.3240447], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Agyaboy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Agyaboy</p> <p>Elev: 403 m, Prom: 169 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15566.329961726356!2d122.31541192900343!3d18.301408772980455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338662266864a6c9%3A0xcaa66ddecdd4c704!2sMount%20Agyaboy!5e1!3m2!1sen!2sph!4v1598099643034!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4641569, 121.2269681], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lico" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lico</p> <p>Elev: 387 m, Prom: 295 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15551.640241533325!2d121.21818962903228!3d18.464186552233006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388c7a8601fd181%3A0x678bd6dd65aeda7a!2sMount%20Lico!5e1!3m2!1sen!2sph!4v1598099710226!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4852557, 122.2292545], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Leson" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Leson</p> <p>Elev: 340 m, Prom: 158 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31100.521180673102!2d122.19685062649238!3d18.479403448606288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33865c89378c417b%3A0xf9a430e14f4446d5!2sMount%20Leson!5e1!3m2!1sen!2sph!4v1598099787788!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4833329, 122.2333329], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lacalacay_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lacalacay Mountain</p> <p>Elev: 330 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.902308449624!2d122.22457852903567!3d18.48335314977967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33865c70ef0446af%3A0xe537ddbeed9c5120!2sLacalacay%20Mountain!5e1!3m2!1sen!2sph!4v1598099862944!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.9965785, 122.1776418], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Capulutan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Capulutan</p> <p>Elev: 328 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31187.682175101385!2d122.15221862614926!3d17.992731780953758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385da06db7c3929%3A0xcbf36c07c9c810cf!2sMount%20Capulutan!5e1!3m2!1sen!2sph!4v1598099938914!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.7810022, 121.8197513], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Jungle_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Jungle Mountain</p> <p>Elev: 321 m, Prom: 127 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15612.438775192393!2d121.81096742891354!3d17.78113103823392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385929adc420dc9%3A0x14c5517e404d8194!2sJungle%20Mountain!5e1!3m2!1sen!2sph!4v1598100001417!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.2727698, 122.3152527], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Paglawayan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Paglawayan</p> <p>Elev: 320 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15568.898967138959!2d122.30652302899838!3d18.272797626610885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33866253cbe0f80b%3A0x92743a872d7bcdc0!2sMount%20Paglawayan!5e1!3m2!1sen!2sph!4v1598100083255!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.0387846, 122.1625489], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Macarabur" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Macarabur</p> <p>Elev: 305 m, Prom: 70 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31177.233238907116!2d122.13848572619023!3d18.051743065050523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385d836c0386b9b%3A0x962e4e836614a14b!2sMount%20Macarabur!5e1!3m2!1sen!2sph!4v1598100143006!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3, 122.316667], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Marotang" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Marotang</p> <p>Elev: 299 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15566.454761201121!2d122.30791192900321!3d18.300019873156813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386622e9e9e02a1%3A0xa03248516aea90e0!2sMount%20Marotang!5e1!3m2!1sen!2sph!4v1598100199010!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3, 122.316667], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulo_sa_Dalupiri" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dalupiri</p> <p>Elev: 283 m, Prom: 283 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29574.124352898543!2d121.2065658645638!3d19.092256797567792!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33885d2467395433%3A0x113ffe4fca040866!2sDalupiri%2C%20Calayan%2C%20Cagayan!5e1!3m2!1sen!2sph!4v1598100310557!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.843056, 121.829167], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Negrito_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Negrito Hill</p> <p>Elev: 269 m, Prom: 104 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.016477816383!2d121.82041192892407!3d17.843075530549672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385ed7238901fa9%3A0x3e3252aac7062df8!2sNegrito%20Hill!5e1!3m2!1sen!2sph!4v1598100790722!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.843056, 121.829167], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Negrito_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Negrito Hill</p> <p>Elev: 269 m, Prom: 104 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15607.016477816383!2d121.82041192892407!3d17.843075530549672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385ed7238901fa9%3A0x3e3252aac7062df8!2sNegrito%20Hill!5e1!3m2!1sen!2sph!4v1598100790722!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.564587, 122.1449483], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Palaui_Island" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Palaui High Peak</p> <p>Elev: 254 m, Prom: 254 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15796.331617693959!2d122.13609357455442!3d18.56459205936319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzUyLjUiTiAxMjLCsDA4JzQxLjgiRQ!5e1!3m2!1sen!2sph!4v1598100913012!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.3585832, 122.3208225], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinago" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinago</p> <p>Elev: 253 m, Prom: 180 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15561.18031573828!2d122.31207852901356!3d18.35863096570498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386605aa0542257%3A0x538246ebacd9346d!2sMount%20Sinago!5e1!3m2!1sen!2sph!4v1598101018556!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.883333, 121.95], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Cone_Hill_(bungtod_sa_Pilipinas,_Lupot_sa_Cagayan)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cone Hill</p> <p>Elev: 234 m, Prom: 85 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15603.480991226677!2d121.94124522893094!3d17.8833532255409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385e99d20dc1e49%3A0x44cea70dbba2faec!2sCone%20Hill!5e1!3m2!1sen!2sph!4v1598101101504!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.891944, 121.402778], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nanguringan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nanguringan</p> <p>Elev: 197 m, Prom: 197 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15512.437800946951!2d121.39402302910955!3d18.891964146957314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388882c55f6c9cf%3A0xa25d4acd1afd2e2b!2sMount%20Nanguringan!5e1!3m2!1sen!2sph!4v1598101555494!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4925577, 122.1701528], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Rayray_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Rayray Hill</p> <p>Elev: 187 m, Prom: 127 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.070506550755!2d122.16152302903733!3d18.492519798605557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3386435212a3451b%3A0x87f8b7edc4d3664d!2sRayray%20Hill!5e1!3m2!1sen!2sph!4v1598101627164!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4507, 121.2888], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maturao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maturao</p> <p>Elev: 154 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.797902812816!2d121.27930082902996!3d18.45140875386735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388b85e6156bfc3%3A0xf681a95d989e0db2!2sMount%20Maturao!5e1!3m2!1sen!2sph!4v1598101719482!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4513889, 121.2880556], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maturao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maturao</p> <p>Elev: 154 m, Prom: 65 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15552.797902812816!2d121.27930082902996!3d18.45140875386735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3388b85e6156bfc3%3A0xf681a95d989e0db2!2sMount%20Maturao!5e1!3m2!1sen!2sph!4v1598101719482!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.4333333, 121.5083333], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pulo_sa_Panuitan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Panuitan</p> <p>Elev: 110 m, Prom: 110 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15461.207194491602!2d121.50256632921139!3d19.437314374915097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33880448557f1085%3A0x19d9b3a6e8f17e41!2sPanultan%20Island!5e1!3m2!1sen!2sph!4v1598101942471!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4161371, 122.1371683], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Rayray_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Rayray Hill</p> <p>Elev: 84 m, Prom: 50 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15687.904794227235!2d122.1283793025753!3d18.416142159806373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDI0JzU4LjEiTiAxMjLCsDA4JzEzLjgiRQ!5e1!3m2!1sen!2sph!4v1598102284825!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4448604, 122.1703545], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Marede_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Marede Hill</p> <p>Elev: 78 m, Prom: 62 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15553.401594902933!2d122.16152302902883!3d18.44474205471968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338642cc0adc11bb%3A0xc47fa7f1bf60188f!2sMarede%20Hill!5e1!3m2!1sen!2sph!4v1598102587754!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.4895575, 122.1581534], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pinas_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pinas Hill</p> <p>Elev: 68 m, Prom: 56 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.347822610845!2d122.14930082903673!3d18.48946419899699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338643440597df37%3A0xda4f1036f03a8427!2sPinas%20Hill!5e1!3m2!1sen!2sph!4v1598102638374!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([18.483858, 122.1604569], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Talibing_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Talibing Hill</p> <p>Elev: 59 m, Prom: 50 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.851903419529!2d122.15180082903574!3d18.48390874970852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338643479d187bef%3A0xe31186847fa42b60!2sTalibing%20Hill!5e1!3m2!1sen!2sph!4v1598102693247!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([19.2529012, 121.5021201], { icon: aIcon })
  .addTo(cagayanmap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Bangan_Hill_National_Park" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bangaan Hill</p> <p>Elev: 49 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3869.672255378932!2d121.49829931490743!3d19.252891251391365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33880cfae648d5a7%3A0x3caa9daa1a39280!2sBangaan%20Hill!5e1!3m2!1sen!2sph!4v1598102745851!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
