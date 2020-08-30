var isabelamap = L.map("isabelamap").setView([16.9753758, 121.8107079], 9);

L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  maxZoom: 17,
  attribution:
    'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
}).addTo(isabelamap);

L.marker([17.533333, 121.9999999], { icon: dIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dos_Cuernos" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dos Cuernos</p> <p>Elev: 1737 m, Prom: 925 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15633.634060084569!2d121.98957852887251!3d17.536964368299053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385a2067521e1d3%3A0x4e604ce87571324f!2sMount%20Dos%20Cuernos!5e1!3m2!1sen!2sph!4v1598103169096!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.31, 122.085556], { icon: dIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Cresta" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Cresta</p> <p>Elev: 1543 m, Prom: 468 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15655.159636564353!2d122.09707852883106!3d17.285575548879823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33850e69db5f7745%3A0x9185ce804d70ef8a!2sMount%20Cresta!5e1!3m2!1sen!2sph!4v1598103219088!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.529444, 122.078333], { icon: cIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dos_Hermanos" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dos Hermanos</p> <p>Elev: 1389 m, Prom: 676 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15719.576620954445!2d122.02874522870836!3d16.51113119069843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339ac0d7ce39af47%3A0x41f0ab1f0b0ddad9!2sMount%20Dos%20Hermanos!5e1!3m2!1sen!2sph!4v1598103286620!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0617496, 122.2755916], { icon: cIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Palanan" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Palanan</p> <p>Elev: 1195 m, Prom: 143 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15674.799573368837!2d122.24818962879344!3d17.05307562682475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385221b27e5cfc9%3A0xdd4914c087b84f4b!2sMount%20Palanan!5e1!3m2!1sen!2sph!4v1598103377986!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.497222, 122.140556], { icon: cIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Bukid_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Bukid Mountain</p> <p>Elev: 1120 m, Prom: 365 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15638.154334297973!2d122.12930082886382!3d17.484464374716868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385a667ab558f4b%3A0x8528a8de3eb761df!2sBukid%20Mountain!5e1!3m2!1sen!2sph!4v1598103458709!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.213889, 122.121389], { icon: cIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Moises" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Moises</p> <p>Elev: 1055 m, Prom: 219 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15661.405684778394!2d122.1118008288191!3d17.211964407762565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33851107a0f2032b%3A0x9c0eb1bf3adb200b!2sMount%20Moises!5e1!3m2!1sen!2sph!4v1598103520929!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.219167, 122.278611], { icon: cIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Divilacan_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Divilacan Peak</p> <p>Elev: 1047 m, Prom: 132 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15661.005764388427!2d122.26735632881984!3d17.2166867071937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33851ca550c75f79%3A0x1810ac007474bcc7!2sDivilacan%20Peak!5e1!3m2!1sen!2sph!4v1598103578664!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5000001, 122.1333329], { icon: cIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Thumb_Peak_(bukid_sa_Pilipinas,_Lupot_sa_Cagayan)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Thumb Peak</p> <p>Elev: 1014 m, Prom: 12 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.816358609985!2d122.1245785288664!3d17.500019972817014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385a67eea20b38f%3A0xe7e1afc4ea641859!2sThumb%20Peak!5e1!3m2!1sen!2sph!4v1598103670131!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.5111111, 122.1269439], { icon: cIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nagtakneg_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Naglakneg Mountain</p> <p>Elev: 894 m, Prom: 34 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15636.31432487235!2d122.12707852886736!3d17.505853272104208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385a5d689c0477f%3A0x38b26d670df26555!2sNagtakneg%20Mountain!5e1!3m2!1sen!2sph!4v1598103775552!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.781944, 122.369167], { icon: cIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Diminalno" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Diminalno</p> <p>Elev: 543 m, Prom: 207 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15697.375127333915!2d122.40180082875041!3d16.781964458999454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384d42f2de60bf9%3A0x1a1c80fadfd5511c!2sMount%20Diminalno!5e1!3m2!1sen!2sph!4v1598103838733!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.543333, 122.284722], { icon: aIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Rocky" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Rocky</p> <p>Elev: 371 m, Prom: 77 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15715.821470614572!2d122.28124522871546!3d16.557242285332777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339ad9dfba7f34e1%3A0x12458689f61cee30!2sMount%20Rocky!5e1!3m2!1sen!2sph!4v1598103897320!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.3176, 121.662], { icon: aIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Caraballo_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Caraballo Mountain</p> <p>Elev: 345 m, Prom: 214 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15941.005640709118!2d121.65318660390622!3d17.317605092906238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDE5JzAzLjQiTiAxMjHCsDM5JzQzLjIiRQ!5e1!3m2!1sen!2sph!4v1598104279328!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.530278, 122.243611], { icon: aIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Mount_Dinapiqui" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dinapiqui</p> <p>Elev: 331 m, Prom: 9 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15718.175287466554!2d122.23596742871098!3d16.528353388695912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339ada35a6746b2f%3A0xa7faa2ce348a4b18!2sMount%20Dinapiqui!5e1!3m2!1sen!2sph!4v1598104403703!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.064444, 122.454167], { icon: aIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dikaclong_Mountain" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Mount Dikaclong</p> <p>Elev: 266 m, Prom: 227 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.77355387317!2d122.45096742879538!3d17.065297825363825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384e7266dbf9567%3A0x430444beedba2019!2sDikaclong%20Mountain!5e1!3m2!1sen!2sph!4v1598104463226!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.7952778, 121.9936111], { icon: aIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Gawed" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Gawed</p> <p>Elev: 208 m, Prom: 27 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15696.273062352186!2d121.9848563287525!3d16.795297857427443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3385355f9c95ee9d%3A0x86db5133c42810a5!2sGawed!5e1!3m2!1sen!2sph!4v1598104551434!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0458333, 122.4505556], { icon: aIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Dilanasan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Dilanasan Hill</p> <p>Elev: 157 m, Prom: 46 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15675.405529977596!2d122.44180082879228!3d17.04585332768762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384e74b8e8e5e1b%3A0xb93b76e451f6e0cd!2sDilanasan%20Hill!5e1!3m2!1sen!2sph!4v1598104621451!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1, 122.5], { icon: aIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Ditolong_Peak" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Ditolong Peak</p> <p>Elev: 148 m, Prom: 22 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15670.854831232275!2d122.49124522880099!3d17.100020021208557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384e67973b64d4f%3A0x5f2a36a10f9696f5!2sDitolong%20Peak!5e1!3m2!1sen!2sph!4v1598104712185!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.1147222, 122.5011111], { icon: aIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Nagtagayan_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Nagtagayan Hill</p> <p>Elev: 146 m, Prom: 40 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15669.615556417206!2d122.49235632880333!3d17.114742219444533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384e5cfd0c0b605%3A0x38031fa602979291!2sNagtagayan%20Hill!5e1!3m2!1sen!2sph!4v1598104801782!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([17.0, 122.45], { icon: aIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/The_Knobs_(bungtod_sa_Pilipinas)" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>The Knobs</p> <p>Elev: 85 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15679.245173516741!2d122.44124522878494!3d17.0000200331561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3384ddd9b621c4a5%3A0x823a35b90c4793f2!2sThe%20Knobs!5e1!3m2!1sen!2sph!4v1598104899395!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
L.marker([16.476667, 122.219722], { icon: aIcon })
  .addTo(isabelamap)
  .bindPopup(
    '<div><a href="https://ceb.wikipedia.org/wiki/Duro_Hill" target= "blank"><img title="Go to Wiki" src="wikilogo.png"/></a><li title="Popup Info Sourced From Peakvisor.com"><p>Duro Hill</p> <p>Elev: 13 m, Prom: 1 m </p></li></div> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15722.37502697641!2d122.21096742870306!3d16.47668679469813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339adc881edf38bd%3A0x2713c0f271ee00d2!2sDuro%20Hill!5e1!3m2!1sen!2sph!4v1598105249014!5m2!1sen!2sph" width="400" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
  );
