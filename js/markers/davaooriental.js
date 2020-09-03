var davaoorientalmap = L.map("davaoorientalmap").setView(
  [7.3171585, 126.5419887],
  9
);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(davaoorientalmap);
L.marker([7.099444, 126.311667], { icon: dIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Maya_(bukid)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mayo</p> <p>Elev: 1728 m, Prom: 367 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16269.61106735203!2d126.30374522782424!3d7.109187810667508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fbbe515030eb45%3A0xd4bb800a800976a6!2sMount%20Maya!5e1!3m2!1sen!2sph!4v1598983439970!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.7400565, 126.1817779], { icon: dIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Hamiguitan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Hamiguitan</p> <p>Elev: 1630 m, Prom: 1507 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16282.347348122135!2d126.17291182781256!3d6.740021081520395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa30cb78195efb%3A0x70a60cee970c172!2sMount%20Hamiguitan!5e1!3m2!1sen!2sph!4v1598983480660!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.426111, 126.319167], { icon: dIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tagdalit" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagdalit</p> <p>Elev: 1553 m, Prom: 115 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16258.055379330724!2d126.31596742783576!3d7.428354341937407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc758a4dfbbce5%3A0xedabb62334566ddc!2sMount%20Tagdalit!5e1!3m2!1sen!2sph!4v1598983509814!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.5899188, 126.1842897], { icon: cIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kapok" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kapok</p> <p>Elev: 1168 m, Prom: 410 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16287.33838643361!2d126.17596742780829!3d6.589743289759471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa3e0f835de37b%3A0xa65c5b448efe9328!2sMount%20Kapok!5e1!3m2!1sen!2sph!4v1598983533377!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.896667, 126.201389], { icon: cIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lindasan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lindasan</p> <p>Elev: 1162 m, Prom: 143 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16240.185820413351!2d126.19263412785502!3d7.896687713277825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc3716ee269c89%3A0x1b9a042980fb1012!2sMount%20Lindasan!5e1!3m2!1sen!2sph!4v1598983560621!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.8, 126.283333], { icon: cIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Lone_Peak_(bukid_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Lone Peak</p> <p>Elev: 1069 m, Prom: 270 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16243.963107930856!2d126.2745785278508!3d7.800021019307737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc47486c95648b%3A0x38d246da36d94197!2sLone%20Peak!5e1!3m2!1sen!2sph!4v1598983590574!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.4997052, 126.1793161], { icon: cIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Mansamuga" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Mansamuga</p> <p>Elev: 1006 m, Prom: 312 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16290.228835532122!2d126.17207852780591!3d6.501132194549892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa13fcb17fae85%3A0x8df9e4f151a50fd4!2sMount%20Mansamuga!5e1!3m2!1sen!2sph!4v1598983631386!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.081389, 126.131111], { icon: bIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tagopo" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tagopo</p> <p>Elev: 951 m, Prom: 216 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16270.543909362257!2d126.12263412782336!3d7.082798862187018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fbc4805d9471e5%3A0xf28aff38e592e40e!2sMount%20Tagopo!5e1!3m2!1sen!2sph!4v1598983661658!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.445757, 126.1813784], { icon: bIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Kabunulan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Kabunulan</p> <p>Elev: 963 m, Prom: 417 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16292.012235073931!2d126.1723563278045!3d6.445854397512817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa12037a5f13db%3A0xb46b2e2eaf6b2d83!2sMount%20Kabunulan!5e1!3m2!1sen!2sph!4v1598983688480!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.63753, 126.2872991], { icon: bIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bagumbun" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bagumbun</p> <p>Elev: 868 m, Prom: 228 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16250.208653431964!2d126.27846742784399!3d7.637521079310158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc6c982a150641%3A0x6b40ac493a72f52a!2sMount%20Bagumbun!5e1!3m2!1sen!2sph!4v1598983716481!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.5658617, 126.1039909], { icon: bIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Bilbogan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Bilbogan</p> <p>Elev: 742 m, Prom: 479 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16287.921413318083!2d126.0845785278078!3d6.571965490724588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa17f4f2c2815f%3A0x65e5d3cbad708ddc!2sMount%20Bilbogan!5e1!3m2!1sen!2sph!4v1598983759000!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.4059725, 126.1834392], { icon: bIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Lahi" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Lahi</p> <p>Elev: 700 m, Prom: 233 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16293.257799334386!2d126.17541192780351!3d6.406965549585557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa0dd3cd9474ab%3A0x477f9b95bc43351b!2sMount%20Lahi!5e1!3m2!1sen!2sph!4v1598983784101!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.962709, 126.224094], { icon: bIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Salvacion" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Salvacion</p> <p>Elev: 684 m, Prom: 52 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16237.575885161485!2d126.21541192785796!3d7.962798809119682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc35b5c5f58723%3A0xae244868d56a8be!2sMount%20Salvacion!5e1!3m2!1sen!2sph!4v1598983820020!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.8364536, 126.1315556], { icon: bIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cape" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cape</p> <p>Elev: 666 m, Prom: 310 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16279.191166383915!2d126.12457852781537!3d6.833354376330615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa33aab04b81e7%3A0xd685e6c19ddc058e!2sMount%20Cape!5e1!3m2!1sen!2sph!4v1598983847436!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.0101634, 126.37902], { icon: bIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Ambutig" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Ambutig</p> <p>Elev: 581 m, Prom: 163 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16272.865763292302!2d126.37457852782116!3d7.0166877659742655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fbba5abc79d223%3A0xd0dea89750f37471!2sMount%20Ambutig!5e1!3m2!1sen!2sph!4v1598983873232!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([7.983333, 126.283333], { icon: bIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Tingoy" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Tingoy</p> <p>Elev: 548 m, Prom: 200 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16236.75998877315!2d126.27457852785889!3d7.9833543078211475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fc4a9295bfd39f%3A0x439104d3ebf5111d!2sMount%20Tingoy!5e1!3m2!1sen!2sph!4v1598983897417!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.948333, 126.079167], { icon: bIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Galintan" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Galintan</p> <p>Elev: 501 m, Prom: 298 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16275.060118304049!2d126.06513412781908!3d6.953632219560456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fbd1f19a61b3cb%3A0x29fc0e02492829fa!2sMount%20Galintan!5e1!3m2!1sen!2sph!4v1598983924180!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.8669555, 126.1029007], { icon: aIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Manikling" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Manikling</p> <p>Elev: 211 m, Prom: 44 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16278.17700078312!2d126.09680082781624!3d6.8630766746662175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa32ba00483805%3A0x6f4c44296581a484!2sMount%20Manikling!5e1!3m2!1sen!2sph!4v1598983959378!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.3161332, 126.2005369], { icon: aIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Saddle_Peak_(bungtod)" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Saddle Peak</p> <p>Elev: 165 m, Prom: 43 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16295.849053382275!2d126.1906896278015!3d6.325298903906776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa0a49b8e947bf%3A0x7f440ff3485f82!2sSaddle%20Peak!5e1!3m2!1sen!2sph!4v1598983992051!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.6550487, 126.081934], { icon: aIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><img title="No Available Wikis" src="wikilogo.svg"/><li title="Popup Info Sourced From Peakvisor.com"><p>Calvary Hill</p> <p>Elev: 114 m, Prom: 88 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16285.189411914058!2d126.07295122781011!3d6.654862036207034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa235124887ea3%3A0x764392c68eb156cb!2sCalvary%20Hill!5e1!3m2!1sen!2sph!4v1598984046639!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([6.766667, 126.083333], { icon: aIcon })
  .addTo(davaoorientalmap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gogon_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.svg"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Cogon Hill</p> <p>Elev: 24 m, Prom: 2 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16281.843018161237!2d126.08096742781298!3d6.75502108069008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32fa30277930aa2b%3A0xfdab67e86b051780!2sGogon%20Hill!5e1!3m2!1sen!2sph!4v1598984163756!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
