var davaodelnortemap = L.map("davaodelnortemap").setView(
  [7.5617699, 125.6532848],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(davaodelnortemap);
L.marker([7.659167, 125.393611], { icon: bIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Libe" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Libe</p> <p>Elev: 813 m, Prom: 186 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.383465651288!2d125.38485632784489!3d7.65918772798622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fec55586ce7701%3A0xbada68236b48101a!2sMount%20Libe!5e1!3m2!1sen!2sph!4v1598987932353!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.623056, 125.386667], { icon: bIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Pangalalayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Pangalalayan</p> <p>Elev: 759 m, Prom: 36 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.383465651288!2d125.38485632784489!3d7.65918772798622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed1d4cb41eec1%3A0x8cdbc5be5afb1efe!2sMount%20Pangalalayan!5e1!3m2!1sen!2sph!4v1598987958888!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.667222, 125.394722], { icon: bIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Binasalan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Binasalan</p> <p>Elev: 739 m, Prom: 21 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.757488263836!2d125.37791192784341!3d7.623076630191119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fec552136b5177%3A0xc02e782df334abff!2sMount%20Binasalan!5e1!3m2!1sen!2sph!4v1598987986703!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.646111, 125.385833], { icon: bIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kipangko" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kipangko</p> <p>Elev: 727 m, Prom: 126 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.88097450529!2d125.37707852784439!3d7.6461321287843536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed01c1d11e71f%3A0x731642036f56868a!2sMount%20Kipangko!5e1!3m2!1sen!2sph!4v1598988009918!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.619444, 125.362222], { icon: bIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Gaitan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Gaitan</p> <p>Elev: 632 m, Prom: 108 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.894538912919!2d125.35346742784321!3d7.6194654304111635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed1b13978638f%3A0x363ad858ecd6d99f!2sMount%20Gaitan!5e1!3m2!1sen!2sph!4v1598988034269!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.650833, 125.365278], { icon: bIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salalayan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salalayan</p> <p>Elev: 574 m, Prom: 17 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.894538912919!2d125.35346742784321!3d7.6194654304111635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed06da5707c73%3A0x906bc55cd9a0d261!2sMount%20Salalayan!5e1!3m2!1sen!2sph!4v1598988061847!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.741389, 125.601111], { icon: bIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Suwaon_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Suwaon</p> <p>Elev: 573 m, Prom: 148 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16246.230840620874!2d125.5923563278483!3d7.741409972934836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32febf051cc5da8f%3A0xc81e580be2445c7!2sSuwaon%20Mountain!5e1!3m2!1sen!2sph!4v1598988087729!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.658889, 125.364722], { icon: bIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kabuling" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kabuling</p> <p>Elev: 569 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16249.394060542098!2d125.35596742784487!3d7.6589099280032125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fed07448bc3347%3A0xc486349c391efd60!2sMount%20Kabuling!5e1!3m2!1sen!2sph!4v1598988135471!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.0663954, 125.7683248], { icon: bIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Puting-Bato</p> <p>Elev: 537 m, Prom: 537 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16271.120307559398!2d125.75928832782277!3d7.066444263126516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96516a06c1b5f%3A0x791d728101145578!2sMt.%20Puting%20Bato!5e1!3m2!1sen!2sph!4v1598988323001!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.1248255, 125.7684427], { icon: bIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Anggas Peak</p> <p>Elev: 504 m, Prom: 288 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16785.616010682705!2d125.75959836836284!3d7.124830810523626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMDcnMjkuNCJOIDEyNcKwNDYnMDYuNCJF!5e1!3m2!1sen!2sph!4v1598988470300!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5877776, 125.549443], { icon: aIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Megatong</p> <p>Elev: 473 m, Prom: 156 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15890.331127493264!2d125.54735816274992!3d7.588912206938872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fec9fecbb99e59%3A0xbe7fc0d3a3093f03!2sMt.%20Megatong%20Peak!5e1!3m2!1sen!2sph!4v1598988521152!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.5793384, 125.8755444], { icon: aIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Balaang Bukid</p> <p>Elev: 365 m, Prom: 177 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16674.65930348179!2d125.866748613943!3d7.579343707106279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMzQnNDUuNiJOIDEyNcKwNTInMzIuMCJF!5e1!3m2!1sen!2sph!4v1598988599865!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.9536111, 125.7788889], { icon: aIcon })
  .addTo(davaodelnortemap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Kumaan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Kumaan hill</p> <p>Elev: 333 m, Prom: 148 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16275.060118304049!2d125.77013412781909!3d6.953632219560457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f979a202a851cd%3A0xb391ab6d539be9b7!2sKumaan%20Hill!5e1!3m2!1sen!2sph!4v1598988664298!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
