 var baseMailFactura = '<div style="font-size:16px; line-height:20px; color:#6c6c6c; background:#f7f748; padding:0; margin:0; font-family:Arial,sans-serif!important; width:100%!important"> <div style="padding:10px; max-width:400px; font-size:16px; line-height:22px; color:#6c6c6c; background:#f7f748; font-family:Arial,sans-serif!important; margin: 0 auto;"> <p style="padding:5px; text-align: center;"><img data-imagetype="External" src="https://avatars1.githubusercontent.com/u/60756369" alt="Logo E-DEAS" style="width: 30%;"> </p> <p style="padding:5px"><span style="color:#222; font-weight:bold;">Notificación de lectura de pista.</span> <br><br>QR Surprises le notifica que la persona a la que quieres sorprender escaneó correctamente y en estos momentos está leyendo la pista #{{numPista}}</p><span style="font-size:12px; line-height:16px; font-style: italic;">Gracias por hacer parte de este viaje, esperamos lo estés disfrutando. <br>Si tienes alguna inquietud o duda puedes contactarnos por instagram dando click <a href="https://www.instagram.com/qr_surprises/">aquí</a></p> </div> </div>';

 function sendNotification() {
     var _ma = "qrsurprises@gmail.com";
     var _ps = "g00glepassword";
     var _numPista= document.querySelector("#numPista").textContent;
     Email.send({
         Host: "smtp.gmail.com",
         Username: _ma,
         Password: _ps,
         To: ['simonba97@gmail.com', 'samartinezme@gmail.com'],
         From: _ma,
         Subject: "Notificación de lectura de pista",
         Body: baseMailFactura.replace('{{numPista}}', _numPista),
     }).then(function(message) {
         if (message == 'OK') {
             console.log('Envió ' + message);
         } else {
             console.log('NO Envió ' + message);
         }
     });
 }