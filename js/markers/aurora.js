var auroramap = L.map("auroramap").setView([16.0773636, 121.7692535], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(auroramap);

L.marker([15.4808177, 121.4049729], { icon: dIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mingan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mingan</p> <p>Elev: 1887 m, Prom: 1585 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16098.926617653895!2d122.33874522804672!3d10.917242895042683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33afaa7af82049a9%3A0xcfd15570d430272a!2sMount%20Mingan!5e1!3m2!1sen!2sph!4v1598118162821!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.253889, 121.8894643], { icon: dIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Anacuao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Anacuao</p> <p>Elev: 1834 m, Prom: 1365 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15740.314903670696!2d121.88041192866928!3d16.25418682036198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339a8e62bdd5492f%3A0x9c0dfd7a9e141937!2sMount%20Anacuao!5e1!3m2!1sen!2sph!4v1598118206199!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4728484, 121.4019709], { icon: dIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mingan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mingan Peak 4</p> <p>Elev: 1762 m, Prom: 58 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16824.268815234933!2d121.39307514893046!3d15.47285354426677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI4JzIyLjMiTiAxMjHCsDI0JzA3LjEiRQ!5e1!3m2!1sen!2sph!4v1598118269772!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4623933, 121.3949997], { icon: dIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Salakot Peak</p> <p>Elev: 1737 m, Prom: 61 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18179.12036220365!2d121.38535548298815!3d15.462398444487102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI3JzQ0LjYiTiAxMjHCsDIzJzQyLjAiRQ!5e1!3m2!1sen!2sph!4v1598118432540!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4640141, 121.3992163], { icon: dIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mingan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mingan Peak 3</p> <p>Elev: 1724 m, Prom: 37 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16139.343527551791!2d121.39051561690894!3d15.464019248471688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI3JzUwLjUiTiAxMjHCsDIzJzU3LjIiRQ!5e1!3m2!1sen!2sph!4v1598118486231!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.4483254, 121.3928195], { icon: dIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mingan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mingan Peak 1</p> <p>Elev: 1587 m, Prom: 63 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3950.825337313102!2d121.39063081486873!3d15.448330559880501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDI2JzU0LjAiTiAxMjHCsDIzJzM0LjIiRQ!5e1!3m2!1sen!2sph!4v1598118516177!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.933611, 121.485278], { icon: cIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pungugupanunga" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pungugupanunga</p> <p>Elev: 1361 m, Prom: 631 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15765.634354805112!2d121.4787452286219!3d15.935020156652046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339099833a6c0815%3A0x6d3b85f85c45497d!2sMount%20Pungugupanunga!5e1!3m2!1sen!2sph!4v1598118572352!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.059167, 121.696389], { icon: bIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dabukid" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dabukid</p> <p>Elev: 880 m, Prom: 193 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15755.842324347823!2d121.6876341286402!3d16.059186842607378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339a793f7ecb56a1%3A0xc141a5e29a806c2c!2sMount%20Dabukid!5e1!3m2!1sen!2sph!4v1598118700247!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.1876968, 121.337831], { icon: bIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Peak</p> <p>Elev: 732 m, Prom: 151 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16700.148042583776!2d121.41370499781871!3d15.05059815693922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDAzJzAyLjEiTiAxMjHCsDI1JzIxLjQiRQ!5e1!3m2!1sen!2sph!4v1598119163586!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.024444, 121.670278], { icon: bIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dimanjotol" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dimanjotol</p> <p>Elev: 645 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.588048220457!2d121.66152302863507!3d16.02446454654429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339a784c7714979d%3A0x9aabd76a4594583a!2sMount%20Dimanjotol!5e1!3m2!1sen!2sph!4v1598119198726!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.701111, 121.59], { icon: bIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Disogsip_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Disogsip Mountain</p> <p>Elev: 625 m, Prom: 345 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15784.652324309689!2d121.59735632858661!3d15.691131283966119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a7e9faeb2fa5%3A0xd32ba70f46d0ff8e!2sDisogsip%20Mountain!5e1!3m2!1sen!2sph!4v1598119241454!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.6602778, 121.6069444], { icon: bIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Susong_Dalaga_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Susong Dalaga Mountain</p> <p>Elev: 586 m, Prom: 262 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15787.036286121405!2d121.59818962858215!3d15.660297987393529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a8149f8ee649%3A0xac69cfcdbc3fdd70!2sSusong%20Dalaga%20Mountain!5e1!3m2!1sen!2sph!4v1598119335231!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.083333, 122.05], { icon: bIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Baltimore_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Baltimore Peak</p> <p>Elev: 509 m, Prom: 493 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15753.927894831875!2d122.04124522864377!3d16.083353439862996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339a5f6d7eccef1f%3A0x1bf7b77d9bfacad1!2sBaltimore%20Peak!5e1!3m2!1sen!2sph!4v1598119419816!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7180556, 121.6213889], { icon: aIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dibudalan_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dibudalan Mountain</p> <p>Elev: 448 m, Prom: 105 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15782.565289169326!2d121.61263412859046!3d15.718075830966258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a779217a78df%3A0x9dc0008d0cc10daa!2sDibudalan%20Mountain!5e1!3m2!1sen!2sph!4v1598119451467!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.7261111, 121.6258333], { icon: aIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Magtaca_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Magtaca Mountain</p> <p>Elev: 422 m, Prom: 23 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15781.94066307403!2d121.6170785285916!3d15.726131280068548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a762ddfc8f6d%3A0x32ed2f1ba429123a!2sMagtaca%20Mountain!5e1!3m2!1sen!2sph!4v1598119526216!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.449444, 122.173333], { icon: aIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dilaguidi_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dilaguidi hill</p> <p>Elev: 346 m, Prom: 18 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.582659740227!2d122.1645785286989!3d16.449464497854127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339ac2d4a0643a59%3A0x7deb3f9b96149ed4!2sDilaguidi%20Hill!5e1!3m2!1sen!2sph!4v1598119628411!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.733333, 121.466667], { icon: aIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dimanibung" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dimanibung</p> <p>Elev: 264 m, Prom: 171 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15781.380378753278!2d121.45791192859267!3d15.73335352926336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a522472df1eb%3A0xffdcb05c01c75c0e!2sMount%20Dimanibung!5e1!3m2!1sen!2sph!4v1598119671992!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.6644444, 121.6036111], { icon: aIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Susungdalaga_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Susungdalaga Mountain</p> <p>Elev: 262 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15786.714864809965!2d121.59485632858278!3d15.664464586930704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390a86d11686b63%3A0xf6dc06367acb9092!2sSusungdalaga%20Mountain!5e1!3m2!1sen!2sph!4v1598119870614!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.196389, 122.103611], { icon: aIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Wheeling_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Wheeling Peak</p> <p>Elev: 294 m, Prom: 192 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15744.95727010876!2d122.09374522866057!3d16.196131277008988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339af141dc969461%3A0xa8a07940b06b3a3!2sWheeling%20Peak!5e1!3m2!1sen!2sph!4v1598119926844!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.2972222, 122.2255556], { icon: aIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Diluran" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Diluran</p> <p>Elev: 229 m, Prom: 139 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15736.862368695633!2d122.21680082867579!3d16.297242365419198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339ae44bd7bcedf5%3A0x864871dcf446fba7!2sMount%20Diluran!5e1!3m2!1sen!2sph!4v1598119959837!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.329722, 122.174444], { icon: aIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Borogyod" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Borogyod</p> <p>Elev: 223 m, Prom: 135 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15735.188371585711!2d122.15568962867887!3d16.31807571302349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339aef5b23a5e6db%3A0x6f3fe0ddb4e1066b!2sMount%20Borogyod!5e1!3m2!1sen!2sph!4v1598120024872!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.476667, 122.219722], { icon: aIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Duro_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Duro Hill</p> <p>Elev: 168 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15722.375488822625!2d122.21096742870306!3d16.47668679469813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339adc881edf38bd%3A0x2713c0f271ee00d2!2sDuro%20Hill!5e1!3m2!1sen!2sph!4v1598120085537!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.0302595, 121.9942227], { icon: aIcon })
  .addTo(auroramap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Peak</p> <p>Elev: 138 m, Prom: 102 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.5324495800824!2d121.9920340148739!3d16.03026464473882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAxJzQ4LjkiTiAxMjHCsDU5JzM5LjIiRQ!5e1!3m2!1sen!2sph!4v1598120451016!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
