var qrcode = require('qrcode-terminal');
var myIP = require('my-ip');

var link = 'http://' + myIP() + ':3000';
qrcode.generate(link, function (qrcode) {
    console.log(qrcode);
    console.log('Scan QR code above, or open URL:');
    console.log(link);
});
