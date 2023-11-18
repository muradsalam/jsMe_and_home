let hava = prompt('Hansi Seherdesiniz?');
let netice;

if (hava == 'Baku') {
    netice = 'Azerbaycanin paytaxtindasiniz.';
} else {
    netice = 'Bakiya getsez yerinizi bileceyik :)';
}

document.getElementById('murad').innerHTML = netice;