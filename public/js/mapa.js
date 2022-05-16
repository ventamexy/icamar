if (document.getElementById('mapa')) {

    var map = L.map('mapa').setView([17.960890, -102.195890], 17);

    let Icono = L.icon({ //add this new icon
        iconUrl: 'images/marker-icon.png',
        iconSize: [38, 60], // size of the icon
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

    L.marker([17.960890, -102.195890], {icon:Icono}).addTo(map).bindPopup('ICAMAR').openPopup();
    // .bindTooltip('GDLWebCamp 2018, Boletos ya disponibles')
    // .openTooltip();

    console.log(L, L.Icon.Default.imagePath);

}