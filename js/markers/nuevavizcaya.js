var nuevavizcayamap = L.map("nuevavizcayamap").setView(
  [16.3301107, 121.1710389],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(nuevavizcayamap);

L.marker([16.4932638, 120.9417368], { icon: fIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Pual_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Pual</p> <p>Elev: 2726 m, Prom: 111 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15877.136582597064!2d120.93296937089589!3d16.49326891458931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904d15e1006209%3A0x40160c0d42c5c945!2sMount%20Pual!5e1!3m2!1sen!2sph!4v1598110667406!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.46, 120.891389], { icon: eIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pack_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pack</p> <p>Elev: 2296 m, Prom: 221 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.772107365561!2d120.88235632870047!3d16.459464496695304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ad55f66d9eaf%3A0x331ea80a6df27da3!2sMount%20Pack!5e1!3m2!1sen!2sph!4v1598110777587!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3193704, 120.8027473], { icon: eIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ugu" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ugo</p> <p>Elev: 2157 m, Prom: 702 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16492.34180478088!2d120.79285397363935!3d16.318727221269764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391a9f63cb998a1%3A0x86d46349544f6c7f!2sMount%20Ugo%20Summit%20Marker!5e1!3m2!1sen!2sph!4v1598110854489!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4793992, 120.8887162], { icon: eIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Purgatory</p> <p>Elev: 2144 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16376.328567611085!2d120.87980412255028!3d16.479404319159993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI4JzQ1LjgiTiAxMjDCsDUzJzE5LjQiRQ!5e1!3m2!1sen!2sph!4v1598111136354!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.356389, 120.855556], { icon: eIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Yabnong" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Yabnong</p> <p>Elev: 2028 m, Prom: 284 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.191859980501!2d120.84680082868458!3d16.355297908736638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ab0bff9f2343%3A0x2ab4b309e4d7bf69!2sMount%20Yabnong!5e1!3m2!1sen!2sph!4v1598111201249!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.45, 120.933333], { icon: dIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Awapanniki" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Awapanniki</p> <p>Elev: 1994 m, Prom: 471 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15724.537638017311!2d120.924578528699!3d16.45002009778975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33905283ab25dc57%3A0xe6b12f78f321be6f!2sMount%20Awapanniki!5e1!3m2!1sen!2sph!4v1598111927750!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.945278, 121.286389], { icon: dIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Guiwan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Guiwan</p> <p>Elev: 1947 m, Prom: 1061 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.913977620132!2d121.27846742862326!3d15.944186905618384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339094e7be955985%3A0xd1e1c2d6f25c8fb5!2sMount%20Guiwan!5e1!3m2!1sen!2sph!4v1598111966546!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.975, 121.242222], { icon: dIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dalimonoc" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dalimonoc</p> <p>Elev: 1933 m, Prom: 401 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.487958019294!2d121.23346742862776!3d15.975020152137816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390eb5d222410d3%3A0x75c24e8cb8aece80!2sMount%20Dalimonoc!5e1!3m2!1sen!2sph!4v1598112008526!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.194167, 120.872222], { icon: dIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Imugan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Imugan</p> <p>Elev: 1702 m, Prom: 730 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15745.134169170484!2d120.86430082866023!3d16.193909027263018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33910215f4fe93cd%3A0xe85c49a35c253fe2!2sMount%20Imugan!5e1!3m2!1sen!2sph!4v1598112047889!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.45, 120.883333], { icon: dIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Caual" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Caual</p> <p>Elev: 1674 m, Prom: 33 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15727.101314007667!2d120.87013412869413!3d16.418353401455466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391acd8b5c16ce9%3A0x40a92a3b3e7def19!2sMount%20Caual!5e1!3m2!1sen!2sph!4v1598112094873!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.95, 121.233333], { icon: dIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Susongdalaga_(bukid_sa_Pilipinas,_Lupot_sa_Cagayan)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Susongdalaga</p> <p>Elev: 1655 m, Prom: 206 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.193208701878!2d121.22013412862462!3d15.95335350458422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390eb1acf1102fb%3A0xa838912b687f1978!2sMount%20Susongdalaga!5e1!3m2!1sen!2sph!4v1598112140835!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4275149, 121.2224737], { icon: dIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palali" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palali</p> <p>Elev: 1655 m, Prom: 801 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15726.292251929497!2d121.21291192869566!3d16.42835340029852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339042e72472fdf7%3A0x50ef0aa3f4b06a10!2sMount%20Palali!5e1!3m2!1sen!2sph!4v1598112201950!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.040556, 121.233889], { icon: dIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Nanaabung" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nanaabung</p> <p>Elev: 1615 m, Prom: 602 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15757.380643622188!2d121.22541192863736!3d16.03974234481295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390ed172d710f2b%3A0x1f1be598d2a17899!2sMount%20Nanaabung!5e1!3m2!1sen!2sph!4v1598112244283!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([15.953611, 121.428056], { icon: cIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Otunao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Otundo</p> <p>Elev: 1455 m, Prom: 498 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15764.14951288782!2d121.42013412862468!3d15.953909054521525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390974cac108067%3A0xf02617916b936617!2sMount%20Otunao!5e1!3m2!1sen!2sph!4v1598112287541!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.341667, 121.215], { icon: cIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sehat" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sehat</p> <p>Elev: 1415 m, Prom: 492 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15733.534199091206!2d121.17346742868205!3d16.338631210657176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33905c0555c9da4f%3A0xcd8f96eb9441ca5c!2sMount%20Sehat!5e1!3m2!1sen!2sph!4v1598112328015!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.55, 121.083333], { icon: cIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cunig" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cunig</p> <p>Elev: 1329 m, Prom: 464 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15717.56458465003!2d121.08068962871215!3d16.535853387823263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339046233fdd52fb%3A0x52fdf137485cba5b!2sMount%20Cunig!5e1!3m2!1sen!2sph!4v1598112374474!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.566667, 121.083333], { icon: cIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tiblac" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tiblac</p> <p>Elev: 1279 m, Prom: 98 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.458985921972!2d121.06791192871613!3d16.561686784814935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904878e063e98d%3A0xaa1d2f8b9fcfdc08!2sMount%20Tiblac!5e1!3m2!1sen!2sph!4v1598112411263!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.066667, 121.233333], { icon: cIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Naminudut" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Naminudut</p> <p>Elev: 1247 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15753.729689883494!2d121.22902302864418!3d16.085853439578887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390f295bbb4ce7b%3A0x67b2f613179cd166!2sMount%20Naminudut!5e1!3m2!1sen!2sph!4v1598112454920!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.204167, 121.024167], { icon: cIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kanabuy" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kanabuy</p> <p>Elev: 1224 m, Prom: 215 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15744.269321272379!2d121.01485632866188!3d16.204742326024366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390f9725e5274f3%3A0x8ae1539e2a48b62f!2sMount%20Kanabuy!5e1!3m2!1sen!2sph!4v1598112491832!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.028611, 121.396667], { icon: cIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Katgipsipan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Katgipsipan</p> <p>Elev: 1188 m, Prom: 264 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15758.2808147379!2d121.38707852863567!3d16.02835344610372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339091cc6ba4b093%3A0x6d44a92dbf19d33!2sMount%20Katgipsipan!5e1!3m2!1sen!2sph!4v1598112532066!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4512486, 121.3758187], { icon: cIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tutun" target= "blank"><img 1150="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Batong Baket</p> <p>Elev: 1455 m, Prom: 430 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16235.100997484846!2d121.36695572435015!3d16.451253710507796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDI3JzA0LjUiTiAxMjHCsDIyJzMzLjAiRQ!5e1!3m2!1sen!2sph!4v1598112983491!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.566667, 121.066667], { icon: cIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nannak_Mount" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Nannak</p> <p>Elev: 1046 m, Prom: 53 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15714.779083465733!2d121.07096742871744!3d16.570020083843634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339047d8abf7becd%3A0x8ab133526157d343!2sNannak%20Mount!5e1!3m2!1sen!2sph!4v1598112733010!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5157453, 121.0703351], { icon: bIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Labbi" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Labbi</p> <p>Elev: 964 m, Prom: 112 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.237715746463!2d121.06180082870898!3d16.515297890214114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339048ad21a840ef%3A0x8d1c5023d684adda!2sMount%20Labbi!5e1!3m2!1sen!2sph!4v1598112784514!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4822528, 121.0001717], { icon: bIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Orcog" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Orcog</p> <p>Elev: 939 m, Prom: 6 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15721.83384814078!2d120.99124522870413!3d16.483353393924567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904e62a44ab4f9%3A0x2d5de2d3dcae58fd!2sMount%20Orcog!5e1!3m2!1sen!2sph!4v1598112830701!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.4666667, 121.3666667], { icon: bIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tutun" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tutun</p> <p>Elev: 936 m, Prom: 24 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.18640423799!2d121.35791192870153!3d16.466686795857985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33906c1d38b54387%3A0x9387189f282eaf5!2sMount%20Tutun!5e1!3m2!1sen!2sph!4v1598112876644!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.2335536, 121.0289001], { icon: bIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Santa_Clara" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Santa Clara</p> <p>Elev: 915 m, Prom: 127 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15742.09362468279!2d121.02041192866594!3d16.231964522908708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3390f8feb8858f1f%3A0x32153132d0c1a4cc!2sMount%20Santa%20Clara!5e1!3m2!1sen!2sph!4v1598113016712!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3, 120.983333], { icon: bIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Apatani" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Apatani</p> <p>Elev: 748 m, Prom: 29 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15737.062650112373!2d120.97457852867541!3d16.294742315706507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339055e11882b1ed%3A0x26a7f1a9dcb0fb0b!2sMount%20Apatani!5e1!3m2!1sen!2sph!4v1598113047254!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.466667, 121.233333], { icon: bIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mafurao" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mafurao</p> <p>Elev: 715 m, Prom: 35 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15723.18640423799!2d121.22457852870154!3d16.46668679585799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904238a8a441d9%3A0xa3ef4027761ee58!2sMount%20Mafurao!5e1!3m2!1sen!2sph!4v1598113082692!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.516667, 121.1], { icon: bIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pawac" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pawac</p> <p>Elev: 686 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.77992254861!2d121.07791192870796!3d16.50863119098898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339045fc4a38052f%3A0x222ba3249c199d84!2sMount%20Pawac!5e1!3m2!1sen!2sph!4v1598113139022!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.5165523, 121.1352124], { icon: bIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><a href="https://en.wikipedia.org/wiki/Bangan_Hill_National_Park" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bangan Hill</p> <p>Elev: 512 m, Prom: 211 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15722.07108351559!2d121.12420852870359!3d16.480431294263663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33904449a7bae65d%3A0x2164e03aaf35679!2sBangan%20Hill!5e1!3m2!1sen!2sph!4v1598113175563!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3268963, 121.105906], { icon: aIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bulit</p> <p>Elev: 435 m, Prom: 87 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.191859980501!2d120.84680082868458!3d16.355297908736638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3391ab0bff9f2343%3A0x2ab4b309e4d7bf69!2sMount%20Yabnong!5e1!3m2!1sen!2sph!4v1598111201249!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.3131877, 121.1297478], { icon: aIcon })
  .addTo(nuevavizcayamap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.png"/><li title="Popup Info Sourced From Peakvisor.com"><p>Wonderland</p> <p>Elev: 409 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15810.990911534773!2d121.12097326686614!3d16.31319282454253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE4JzQ3LjUiTiAxMjHCsDA3JzQ3LjEiRQ!5e1!3m2!1sen!2sph!4v1598113520646!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
