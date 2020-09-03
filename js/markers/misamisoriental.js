var misamisorientalmap = L.map("misamisorientalmap").setView(
  [8.5045558, 124.6219592],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(misamisorientalmap);

L.marker([8.750557, 124.973908], { icon: fIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balatukan_Range_Natural_Park" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balatukan</p> <p>Elev: 2560 m, Prom: 1883 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16203.965942061217!2d124.97124522789845!3d8.770020956108569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3300271dbc333bbf%3A0x81502cb258230155!2sMount%20Balatukan!5e1!3m2!1sen!2sph!4v1599063098215!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.6554193, 125.0278255], { icon: eIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sumagaya" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sumagaya</p> <p>Elev: 2215 m, Prom: 546 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16208.914886897222!2d125.01846742789219!3d8.6558542138571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffd9f78db8d271%3A0xb98405a46767ee13!2sMount%20Sumagaya!5e1!3m2!1sen!2sph!4v1599063236447!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.616614, 125.0809727], { icon: eIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sabrang" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sabrang</p> <p>Elev: 2141 m, Prom: 306 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16210.597868562545!2d125.07457852789008!3d8.616687666496304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffd1020f720219%3A0x5302a18468f2acfd!2sMount%20Sabrang!5e1!3m2!1sen!2sph!4v1599063281453!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.6275247, 125.0609054], { icon: eIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pamalihi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pamalihi</p> <p>Elev: 2043 m, Prom: 363 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16209.72748401449!2d125.0554119278912!3d8.636965365131132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffd0c6d1893c0d%3A0x730e9a5749a8a58e!2sMount%20Pamalihi!5e1!3m2!1sen!2sph!4v1599063320763!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.83, 124.92], { icon: dIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Pamalihi</p> <p>Elev: 1973 m, Prom: 331 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4050.33498362788!2d124.91781131482826!3d8.830005294505057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDknNDguMCJOIDEyNMKwNTUnMTIuMCJF!5e1!3m2!1sen!2sph!4v1599063366995!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.750557, 124.973908], { icon: cIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Balatucan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Balatucan, Gingoog City</p> <p>Elev: 1273 m, Prom: </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16203.965942061217!2d124.97124522789845!3d8.770020956108569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3300271dbc333bbf%3A0x81502cb258230155!2sMount%20Balatukan!5e1!3m2!1sen!2sph!4v1599063407184!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.8002439, 124.861391], { icon: cIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Obulon" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Obulon</p> <p>Elev: 1249 m, Prom: 228 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16202.581845535336!2d124.8523563279002!3d8.80168760394471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33001f60135f0221%3A0x8d141490a2fa8b53!2sMount%20Obulon!5e1!3m2!1sen!2sph!4v1599063461069!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.816667, 125.0], { icon: cIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maranlangit" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Maranlangit</p> <p>Elev: 1049 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16201.924490846082!2d124.99124522790105!3d8.816687652917498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330025cde397da8f%3A0x7c0422a83667a62!2sMount%20Maranlangit!5e1!3m2!1sen!2sph!4v1599063492001!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.616667, 125.166667], { icon: bIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gimankil" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gimankil</p> <p>Elev: 908 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16210.597868562543!2d125.1579119278901!3d8.616687666496308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffd3a14ab605b7%3A0xb5433ac1607dd29!2sMount%20Gimankil!5e1!3m2!1sen!2sph!4v1599063537013!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.833333, 125.0], { icon: bIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tinalungan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tinalungan</p> <p>Elev: 789 m, Prom: 10 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16201.192799717104!2d124.99124522790196!3d8.833354251774493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330025b221955cfd%3A0xe78445c346661c15!2sMount%20Tinalungan!5e1!3m2!1sen!2sph!4v1599063571338!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.683333, 125.166667], { icon: bIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kaluayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kaluayan</p> <p>Elev: 729 m, Prom: 39 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16207.728689303702!2d125.15791192789368!3d8.683354211998223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffd5a93d98af9b%3A0xd08cbde8b67a5685!2sMount%20Kaluayan!5e1!3m2!1sen!2sph!4v1599063613592!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.766667, 125.05], { icon: bIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Aragatan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Aragatan</p> <p>Elev: 675 m, Prom: 5 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16204.111347128817!2d125.04124522789824!3d8.76668765633597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330028888252cbfb%3A0xba1d518d6d4993a6!2sMount%20Aragatan!5e1!3m2!1sen!2sph!4v1599063641557!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.666667, 124.916667], { icon: bIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kabulig" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kabulig</p> <p>Elev: 651 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16208.44803763837!2d124.90791192789278!3d8.666687663125382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffde82bb0fb405%3A0xb8e2b008bedc86a7!2sMount%20Kabulig!5e1!3m2!1sen!2sph!4v1599063676166!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.400833, 124.357778], { icon: bIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lambuyao_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lambuyao Mountain</p> <p>Elev: 616 m, Prom: 281 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16219.736292828702!2d124.34902302787889!3d8.400854280865506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325565bea6c941ab%3A0x6add0b6930bd81f2!2sLambuyao%20Mountain!5e1!3m2!1sen!2sph!4v1599063706495!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.783333, 125.066667], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Sinalago" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sinalago</p> <p>Elev: 480 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16203.38376899153!2d125.05791192789916!3d8.783354255198244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x330028c3d47a221b%3A0x4c243d9dc72b6e13!2sMount%20Sinalago!5e1!3m2!1sen!2sph!4v1599063730747!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.4580098, 124.7007191], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Malasag Hill</p> <p>Elev: 446 m, Prom: 83 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16110.782170765315!2d124.69197180599629!3d8.458015091503674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjcnMjguOCJOIDEyNMKwNDInMDIuNiJF!5e1!3m2!1sen!2sph!4v1599063782273!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.316667, 124.483333], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Inayao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Inayao</p> <p>Elev: 431 m, Prom: 109 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16223.237550928392!2d124.47457852787466!3d8.316687686388796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32557d15a65d0f23%3A0x62bb696b02684061!2sMount%20Inayao!5e1!3m2!1sen!2sph!4v1599063903421!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.466667, 124.35], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Initao" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Initao</p> <p>Elev: 396 m, Prom: 51 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16216.973284394653!2d124.34124522788225!3d8.466687676513951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325567cbd6f7d4d1%3A0x5c43900678e5d09a!2sMount%20Initao!5e1!3m2!1sen!2sph!4v1599063954854!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.766667, 125.2], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Managua" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Managua</p> <p>Elev: 294 m, Prom: 13 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16204.111347128817!2d125.19124522789824!3d8.76668765633597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33002b389e1f19bb%3A0xfa588f2e902b4f46!2sMount%20Managua!5e1!3m2!1sen!2sph!4v1599063981788!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([9.0135086, 124.8748616], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Sipaka</p> <p>Elev: 248 m, Prom: 248 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15465.831224667192!2d124.86666412063377!3d9.01351343059187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnNDguNiJOIDEyNMKwNTInMjkuNSJF!5e1!3m2!1sen!2sph!4v1599064044221!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.433333, 124.5], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tagsulip" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagsulip</p> <p>Elev: 246 m, Prom: 38 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16218.374953440716!2d124.49124522788054!3d8.433354278720712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325561db7e57e7ef%3A0xd243bf4303654231!2sMount%20Tagsulip!5e1!3m2!1sen!2sph!4v1599064110495!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.35, 124.483333], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tuayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tuayan</p> <p>Elev: 222 m, Prom: 42 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16221.855100789497!2d124.4745785278763!3d8.350020984206738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x325562c6dec877b7%3A0xa82ab295c1b5ed48!2sMount%20Tuayan!5e1!3m2!1sen!2sph!4v1599064135718!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.783333, 125.116667], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mapa" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mapa</p> <p>Elev: 166 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16203.38376899153!2d125.10791192789915!3d8.783354255198246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3300295ac5c138b7%3A0xa52e696a080f6e06!2sMount%20Mapa!5e1!3m2!1sen!2sph!4v1599064165166!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.55, 124.366667], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Angas_(bukid_sa_Pilipinas,_Amihanang_Mindanao)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Angas</p> <p>Elev: 106 m, Prom: 3 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16213.445107484265!2d124.35791192788656!3d8.550020970966221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32555cf231c0bdad%3A0x56da37c5a68579c1!2sMount%20Angas!5e1!3m2!1sen!2sph!4v1599064193495!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.4723961, 124.6315759], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Carmen Hill</p> <p>Elev: 86 m, Prom: 15 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16281.467618548062!2d124.622772686924!3d8.472401384895605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjgnMjAuNiJOIDEyNMKwMzcnNTMuNyJF!5e1!3m2!1sen!2sph!4v1599064262626!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.5467209, 124.5281342], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Divine Mercy Hills</p> <p>Elev: 64 m, Prom: 16 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16237.842845466748!2d124.5193699506794!3d8.546726183319201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMzInNDguMiJOIDEyNMKwMzEnNDEuMyJF!5e1!3m2!1sen!2sph!4v1599064322985!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([8.4726313, 124.6653692], { icon: aIcon })
  .addTo(misamisorientalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Seminary Hill</p> <p>Elev: 56 m, Prom: 4 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4054.191644394552!2d124.66287376482695!3d8.471592399802068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fff2b5c19d7baf%3A0x672610444ca7e9b4!2sSeminary%20Hill!5e1!3m2!1sen!2sph!4v1599064393978!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
